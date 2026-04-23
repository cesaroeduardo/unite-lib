/**
 * Inserts move_p1, move_s1, move_s2, move_u1 into src/pokemons.ts when unite-db
 * pokemon.json defines those skills but the roster block only had branch slots.
 *
 * Usage:
 *   node dev/scripts/fill-missing-base-skills.mjs
 *   node dev/scripts/fill-missing-base-skills.mjs --write
 *   node dev/scripts/fill-missing-base-skills.mjs --write --download
 *
 * After a --write-only run, fetch CloudFront icons for every roster move_p1/s1/s2/u1:
 *   node dev/scripts/fill-missing-base-skills.mjs --download-base-pngs
 */

import fs from "node:fs/promises";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  CDN_FOLDER_OVERRIDES,
  cdnUrl,
  parseRosterFromPokemonsTs,
} from "./pokebag-skills-lib.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const POKEMONS_TS = path.join(ROOT, "src/pokemons.ts");
const MOVES_DIR = path.join(ROOT, "moves");

const UNITE_DB_DISPLAY_NAME_BY_SLUG = {
  "alolan-ninetales": "Ninetales",
  "alolan-raichu": "Raichu",
  "galarian-rapidash": "Rapidash",
};

/** CloudFront uses base species folders for some forms (403 on Mega/Alolan/Galar paths). */
const CDN_DOWNLOAD_FOLDER_FALLBACK = {
  "mega-charizard-x": "Charizard",
  "mega-charizard-y": "Charizard",
  "mega-lucario": "Lucario",
  "mega-gyarados": "Gyarados",
  mewtwox: "Mewtwo",
  mewtwoy: "Mewtwo",
};

const AEGISLASH_BASE = {
  p1: "Stance Change",
  s1: "Shadow Sneak",
  s2: "Sacred Sword",
  u1: "Coup de Grace",
};

function httpsGetBuf(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "unite-lib-fill-skills" } }, (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const buf = Buffer.concat(chunks);
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`${res.statusCode} ${url}`));
            return;
          }
          resolve(buf);
        });
      })
      .on("error", reject);
  });
}

function httpsGetText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "unite-lib-fill-skills" } }, (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`${res.statusCode} ${url}`));
            return;
          }
          resolve(Buffer.concat(chunks).toString("utf8"));
        });
      })
      .on("error", reject);
  });
}

function moveSlotIdsInBlock(text, slug) {
  const anchor = `"main": "pokemons/roster-${slug}.png"`;
  const pos = text.indexOf(anchor);
  if (pos < 0) return new Set();
  const end = text.indexOf(`\n  },\n  "active":`, pos);
  if (end < 0) return new Set();
  const block = text.slice(pos, end);
  const ids = new Set();
  const re = /"move_(s1[1-4]|s2[1-4]|p1|s1|s2|u1)"/g;
  let m;
  while ((m = re.exec(block)) !== null) ids.add(m[1]);
  return ids;
}

function jsonNeeds(entry) {
  const skills = entry.skills || [];
  const need = {};
  if (skills.some((s) => s.ability === "Passive")) need.p1 = true;
  if (skills.some((s) => s.ability === "Move 1")) need.s1 = true;
  if (skills.some((s) => s.ability === "Move 2")) need.s2 = true;
  if (skills.some((s) => s.ability === "Unite Move")) need.u1 = true;
  return need;
}

function baseNames(entry, slug) {
  if (slug === "aegislash") return { ...AEGISLASH_BASE };

  const skills = entry.skills || [];
  const passive = skills.find((s) => s.ability === "Passive");
  const unite = skills.find((s) => s.ability === "Unite Move");
  const m1 = skills.find((s) => s.ability === "Move 1");
  const m2 = skills.find((s) => s.ability === "Move 2");

  const out = {};
  if (passive) {
    out.p1 =
      typeof passive.passive2_name === "string" && passive.passive2_name.trim()
        ? passive.passive2_name.trim()
        : passive.name.trim();
  }
  if (unite?.name) out.u1 = unite.name.trim();
  if (m1?.name) out.s1 = m1.name.trim();
  if (m2?.name) out.s2 = m2.name.trim();
  return out;
}

function escapeJsonString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function insertBaseMoves(text, slug, names, gaps) {
  const anchor = `"main": "pokemons/roster-${slug}.png"`;
  const pos = text.indexOf(anchor);
  if (pos < 0) return { text, ok: false };
  const end = text.indexOf(`\n  },\n  "active":`, pos);
  if (end < 0) return { text, ok: false };
  const slice = text.slice(pos, end);
  const moveIdx = slice.indexOf('"move_');
  if (moveIdx < 0) return { text, ok: false };
  const insertAt = pos + moveIdx;
  const order = ["p1", "s1", "s2", "u1"].filter((id) => gaps.includes(id));
  const lines = order
    .map(
      (id) =>
        `    "move_${id}": { "name": "${escapeJsonString(names[id])}", "image": "moves/${slug}_${id}.png" },\n`
    )
    .join("");
  return {
    text: text.slice(0, insertAt) + lines + text.slice(insertAt),
    ok: true,
  };
}

async function downloadBasePngsForRoster(text, roster, byName) {
  await fs.mkdir(MOVES_DIR, { recursive: true });
  let n = 0;
  for (const { name, slug } of roster) {
    const dexName = UNITE_DB_DISPLAY_NAME_BY_SLUG[slug] ?? name;
    const entry = byName.get(dexName);
    if (!entry) continue;
    const names = baseNames(entry, slug);
    const slotIds = moveSlotIdsInBlock(text, slug);
    const folderPrimary = CDN_FOLDER_OVERRIDES[slug] ?? name;
    const folderFallback = CDN_DOWNLOAD_FOLDER_FALLBACK[slug];
    const folderCandidates = [folderPrimary, folderFallback].filter(
      (f, i) => f && (i === 0 || f !== folderPrimary)
    );
    for (const id of ["p1", "s1", "s2", "u1"]) {
      if (!slotIds.has(id) || !names[id]) continue;
      const out = path.join(MOVES_DIR, `${slug}_${id}.png`);
      /** @type {Buffer | null} */
      let buf = null;
      /** @type {Error | null} */
      let lastErr = null;
      for (const folder of folderCandidates) {
        try {
          const b = await httpsGetBuf(cdnUrl(folder, names[id]));
          if (b.length > 500) {
            buf = b;
            break;
          }
        } catch (e) {
          lastErr = e;
        }
      }
      try {
        if (!buf) throw lastErr || new Error("no valid PNG");
        await fs.writeFile(out, buf);
        process.stdout.write(`OK ${slug}_${id}.png\n`);
        n++;
      } catch (e) {
        process.stderr.write(`FAIL ${slug} ${id} ${e.message}\n`);
      }
    }
  }
  process.stdout.write(`Downloaded ${n} file(s).\n`);
}

async function main() {
  const write = process.argv.includes("--write");
  const download = process.argv.includes("--download");
  const downloadBasePngs = process.argv.includes("--download-base-pngs");

  const [raw, jsonStr] = await Promise.all([
    fs.readFile(POKEMONS_TS, "utf8"),
    httpsGetText("https://unite-db.com/pokemon.json"),
  ]);
  const dex = JSON.parse(jsonStr);
  const byName = new Map(dex.map((e) => [e.display_name, e]));
  const roster = await parseRosterFromPokemonsTs(POKEMONS_TS);

  if (downloadBasePngs) {
    await downloadBasePngsForRoster(raw, roster, byName);
    return;
  }

  let text = raw;
  /** @type {{ slug: string; name: string; gaps: string[] }[]} */
  const filled = [];

  for (const { name, slug } of roster) {
    const dexName = UNITE_DB_DISPLAY_NAME_BY_SLUG[slug] ?? name;
    const entry = byName.get(dexName);
    if (!entry) continue;

    const need = jsonNeeds(entry);
    const have = moveSlotIdsInBlock(text, slug);
    const gaps = [];
    for (const k of ["p1", "s1", "s2", "u1"]) {
      if (need[k] && !have.has(k)) gaps.push(k);
    }
    if (!gaps.length) continue;

    const names = baseNames(entry, slug);
    const payload = {};
    for (const k of gaps) {
      if (names[k]) payload[k] = names[k];
    }
    if (Object.keys(payload).length !== gaps.length) {
      process.stderr.write(`skip ${slug}: incomplete names for gaps ${gaps.join(",")}\n`);
      continue;
    }

    const { text: t2, ok } = insertBaseMoves(text, slug, names, gaps);
    if (!ok) {
      process.stderr.write(`skip ${slug}: insert failed\n`);
      continue;
    }
    text = t2;
    filled.push({ slug, name, gaps: [...gaps] });
  }

  process.stdout.write(`Insert base slots for ${filled.length} Pokémon.\n`);

  if (download && filled.length) {
    await fs.mkdir(MOVES_DIR, { recursive: true });
    for (const { slug, name, gaps } of filled) {
      const folder = CDN_FOLDER_OVERRIDES[slug] ?? name;
      const entry = byName.get(UNITE_DB_DISPLAY_NAME_BY_SLUG[slug] ?? name);
      const names = baseNames(entry, slug);
      for (const id of gaps) {
        if (!names[id]) continue;
        const url = cdnUrl(folder, names[id]);
        const out = path.join(MOVES_DIR, `${slug}_${id}.png`);
        try {
          const buf = await httpsGetBuf(url);
          await fs.writeFile(out, buf);
          process.stdout.write(`OK ${slug}_${id}.png\n`);
        } catch (e) {
          process.stderr.write(`FAIL ${slug} ${id} ${e.message}\n`);
        }
      }
    }
  }

  if (write) {
    await fs.writeFile(POKEMONS_TS, text, "utf8");
    process.stdout.write(`Wrote ${POKEMONS_TS}\n`);
  } else {
    process.stdout.write(`Dry run: re-run with --write (and optional --download).\n`);
  }
}

main().catch((e) => {
  process.stderr.write(String(e?.stack || e) + "\n");
  process.exit(1);
});
