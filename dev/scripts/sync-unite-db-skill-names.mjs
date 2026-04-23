/**
 * Fills `images.move_*.{ name }` from unite-db roster JSON (same data the site uses).
 * Source: https://unite-db.com/pokemon.json
 *
 * Usage:
 *   node dev/scripts/sync-unite-db-skill-names.mjs              # dry-run summary
 *   node dev/scripts/sync-unite-db-skill-names.mjs --write    # patch src/pokemons.ts
 *   node dev/scripts/sync-unite-db-skill-names.mjs --write --slug=alcremie
 *
 * Optional downloads (CloudFront icons → moves/):
 *   node dev/scripts/sync-unite-db-skill-names.mjs --write --download --slug=aegislash
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
const POKEMON_JSON = "https://unite-db.com/pokemon.json";

/**
 * Roster `name` in pokemons.ts vs unite-db `display_name` (same roster as the site).
 * Regional forms use the base species name in pokemon.json.
 */
const UNITE_DB_DISPLAY_NAME_BY_SLUG = {
  "alolan-ninetales": "Ninetales",
  "alolan-raichu": "Raichu",
  "galarian-rapidash": "Rapidash",
};

/** unite-db nests Move 1 upgrades incorrectly for this Pokémon (UniteAPI quirk). */
const AEGISLASH_MANUAL = {
  p1: "Stance Change",
  s1: "Shadow Sneak",
  s2: "Sacred Sword",
  s11: "Shadow Claw",
  s12: "Iron Defense",
  s21: "Wide Guard",
  s22: "Iron Head",
  u1: "Coup de Grace",
};

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "unite-lib-skill-name-sync" } }, (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const buf = Buffer.concat(chunks);
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`${res.statusCode} ${url}`));
            return;
          }
          resolve(buf.toString("utf8"));
        });
      })
      .on("error", reject);
  });
}

function escapeJsonString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

/** Which move_* slot ids exist for this slug in the current pokemons.ts text. */
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

/**
 * @param {object} entry pokemon.json entry
 * @param {string} slug roster slug (kebab)
 * @param {Set<string>} slotIds keys present under images (e.g. s11, s12)
 * @returns {Record<string, string>}
 */
function slotNamesFromUniteDb(entry, slug, slotIds) {
  if (slug === "aegislash") return { ...AEGISLASH_MANUAL };

  const skills = entry.skills || [];
  const passive = skills.find((s) => s.ability === "Passive");
  const unite = skills.find((s) => s.ability === "Unite Move");
  const m1 = skills.find((s) => s.ability === "Move 1");
  const m2 = skills.find((s) => s.ability === "Move 2");

  /** @type {Record<string, string>} */
  const out = {};

  if (passive) {
    const p =
      typeof passive.passive2_name === "string" && passive.passive2_name.trim()
        ? passive.passive2_name.trim()
        : passive.name;
    out.p1 = p;
  }
  if (unite?.name) out.u1 = unite.name.trim();
  if (m1?.name) {
    out.s1 = m1.name.trim();
    const u1 = m1.upgrades || [];
    if (u1.length === 1 && u1[0]?.name && slotIds.has("s12")) {
      out.s11 = m1.name.trim();
      out.s12 = u1[0].name.trim();
    } else {
      u1.forEach((u, i) => {
        if (u?.name) out[`s1${i + 1}`] = u.name.trim();
      });
    }
  }
  if (m2?.name) {
    out.s2 = m2.name.trim();
    const u2 = m2.upgrades || [];
    if (u2.length === 1 && u2[0]?.name && slotIds.has("s22")) {
      out.s21 = m2.name.trim();
      out.s22 = u2[0].name.trim();
    } else {
      u2.forEach((u, i) => {
        if (u?.name) out[`s2${i + 1}`] = u.name.trim();
      });
    }
  }

  return out;
}

/**
 * @param {string} text full pokemons.ts
 * @param {string} slug
 * @param {Record<string, string>} slotNameMap slot id without "move_" → display name
 */
function patchBlockForSlots(text, slug, slotNameMap) {
  const anchor = `"main": "pokemons/roster-${slug}.png"`;
  const pos = text.indexOf(anchor);
  if (pos < 0) return { text, ok: false, reason: "no roster anchor" };
  const end = text.indexOf(`\n  },\n  "active":`, pos);
  if (end < 0) return { text, ok: false, reason: "no images block end" };

  let block = text.slice(pos, end);
  let changed = 0;
  for (const [slotId, name] of Object.entries(slotNameMap)) {
    if (!name) continue;
    const moveKey = `move_${slotId}`;
    const re = new RegExp(
      `("${moveKey.replace("$", "\\$")}"\\s*:\\s*\\{\\s*)"name"\\s*:\\s*"[^"]*"`,
      "m"
    );
    const next = block.replace(re, `$1"name": "${escapeJsonString(name)}"`);
    if (next !== block) changed++;
    block = next;
  }

  return {
    text: text.slice(0, pos) + block + text.slice(end),
    ok: true,
    changed,
  };
}

async function main() {
  const write = process.argv.includes("--write");
  const download = process.argv.includes("--download");
  const argSlug = process.argv.find((a) => a.startsWith("--slug="))?.slice(7);

  const [rawTs, jsonStr] = await Promise.all([
    fs.readFile(POKEMONS_TS, "utf8"),
    httpsGet(POKEMON_JSON),
  ]);
  /** @type {Array<{ display_name: string; skills: unknown[] }>} */
  const dex = JSON.parse(jsonStr);
  const byName = new Map(dex.map((e) => [e.display_name, e]));

  const roster = await parseRosterFromPokemonsTs(POKEMONS_TS);
  let text = rawTs;
  let patchedMons = 0;
  let totalSlots = 0;
  const missingDex = [];
  const skipped = [];

  if (download) await fs.mkdir(MOVES_DIR, { recursive: true });

  for (const { name, slug } of roster) {
    if (argSlug && slug !== argSlug) continue;
    const dexName = UNITE_DB_DISPLAY_NAME_BY_SLUG[slug] ?? name;
    const entry = byName.get(dexName);
    if (!entry) {
      missingDex.push(slug);
      continue;
    }

    const slotIds = moveSlotIdsInBlock(text, slug);
    const slotMap = slotNamesFromUniteDb(entry, slug, slotIds);
    const before = text;
    const { text: t2, ok, changed, reason } = patchBlockForSlots(text, slug, slotMap);
    if (!ok) {
      skipped.push(`${slug}: ${reason}`);
      continue;
    }
    text = t2;
    if (changed > 0) {
      patchedMons++;
      totalSlots += changed;
    }

    if (download && changed > 0) {
      const folder = CDN_FOLDER_OVERRIDES[slug] ?? name;
      for (const [slotId, displayName] of Object.entries(slotMap)) {
        const moveKey = `move_${slotId}`;
        const anchor = `"main": "pokemons/roster-${slug}.png"`;
        const pos = text.indexOf(anchor);
        if (pos < 0) continue;
        const end = text.indexOf(`\n  },\n  "active":`, pos);
        const block = text.slice(pos, end);
        if (!block.includes(`"${moveKey}"`)) continue;
        const url = cdnUrl(folder, displayName);
        const outPath = path.join(MOVES_DIR, `${slug}_${slotId}.png`);
        try {
          const buf = await httpsGet(url);
          await fs.writeFile(outPath, buf);
          process.stdout.write(`OK ${path.basename(outPath)}\n`);
        } catch (e) {
          process.stderr.write(`FAIL ${slug} ${slotId} ${url} ${e.message}\n`);
        }
      }
    }

    if (write && text !== before && argSlug) {
      process.stdout.write(`${slug}: updated ${changed} move name(s)\n`);
    }
  }

  if (write) {
    await fs.writeFile(POKEMONS_TS, text, "utf8");
    process.stdout.write(`Wrote ${POKEMONS_TS}\n`);
  } else {
    process.stdout.write(
      `Dry run: would touch ${patchedMons} Pokémon (${totalSlots} move_* slots with matching keys).\n` +
        `Re-run with --write to apply.\n`
    );
  }

  if (missingDex.length) {
    process.stderr.write(
      `No unite-db pokemon.json match for ${missingDex.length} slug(s) (by roster "name"): ${missingDex.slice(0, 12).join(", ")}${missingDex.length > 12 ? "…" : ""}\n`
    );
  }
  if (skipped.length) {
    process.stderr.write(`Skipped: ${skipped.join("; ")}\n`);
  }
}

main().catch((e) => {
  process.stderr.write(String(e?.stack || e) + "\n");
  process.exit(1);
});
