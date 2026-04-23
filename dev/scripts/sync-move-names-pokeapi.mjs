/**
 * Injects PokéAPI move `names` into each locale file between
 * `// @begin move-names-i18n` and `// @end move-names-i18n`.
 * Keys: `move.<slug>` (same slug as `moveNameToKey(english roster name)`).
 *
 * Usage:
 *   node dev/scripts/sync-move-names-pokeapi.mjs
 *   node dev/scripts/sync-move-names-pokeapi.mjs --rebuild-index
 *
 * @see https://pokeapi.co/docs/v2#moves
 */

import fs from "node:fs/promises";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const POKEMONS_TS = path.join(ROOT, "src/pokemons.ts");
const CACHE_DIR = path.join(ROOT, "dev/cache");
const MOVE_CACHE = path.join(CACHE_DIR, "pokeapi-move-names-cache.json");

const I18N_FILES = {
  en: path.join(ROOT, "src/i18n/en.ts"),
  "pt-BR": path.join(ROOT, "src/i18n/pt-BR.ts"),
  "ja-JP": path.join(ROOT, "src/i18n/ja-JP.ts"),
  fr: path.join(ROOT, "src/i18n/fr.ts"),
  es: path.join(ROOT, "src/i18n/es.ts"),
};

const BEGIN_LINE = "// @begin move-names-i18n";
const END_LINE = "// @end move-names-i18n";

/** @param {string} english */
function moveNameToKey(english) {
  const s = english
    .trim()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
  return s
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** @param {string} slug */
function moveI18nKey(slug) {
  return `move.${slug}`;
}

function httpsGetJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { "User-Agent": "unite-lib-move-i18n-sync/1.0" } },
      (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          const buf = Buffer.concat(chunks).toString("utf8");
          if (res.statusCode === 404) {
            resolve(null);
            return;
          }
          if (!res.statusCode || res.statusCode >= 400) {
            reject(new Error(`${res.statusCode} ${url}: ${buf.slice(0, 120)}`));
            return;
          }
          try {
            resolve(JSON.parse(buf));
          } catch {
            reject(new Error(`Invalid JSON from ${url}`));
          }
        });
      }
    );
    req.setTimeout(25_000, () => {
      req.destroy();
      reject(new Error(`Timeout ${url}`));
    });
    req.on("error", reject);
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/** @param {any} moveJson */
function pickNames(moveJson) {
  const arr = moveJson.names || [];
  /** @type {Record<string, string>} */
  const by = {};
  for (const n of arr) {
    if (n?.language?.name && n?.name) by[n.language.name] = n.name;
  }
  const en = by.en || moveJson.name?.replace(/-/g, " ") || "";
  return {
    en,
    "pt-BR": by["pt-br"] || en,
    "ja-JP": by.ja || by["ja-hrkt"] || en,
    fr: by.fr || en,
    es: by.es || en,
  };
}

/**
 * @param {boolean} rebuild
 */
async function loadOrBuildMoveCache(rebuild) {
  if (!rebuild) {
    try {
      const raw = await fs.readFile(MOVE_CACHE, "utf8");
      const data = JSON.parse(raw);
      if (data?.bySlug && data?.enLowerToSlug) return data;
    } catch {
      /* missing */
    }
  }

  await fs.mkdir(CACHE_DIR, { recursive: true });
  /** @type {Record<string, string>} */
  const enLowerToSlug = {};
  /** @type {Record<string, ReturnType<typeof pickNames>>} */
  const bySlug = {};

  let next = "https://pokeapi.co/api/v2/move?limit=100";
  let pageCount = 0;
  while (next) {
    const page = await httpsGetJson(next);
    pageCount += 1;
    await sleep(60);
    const results = page.results || [];
    for (const row of results) {
      const slug = row.name;
      const detail = await httpsGetJson(row.url);
      await sleep(60);
      if (!detail) continue;
      const picked = pickNames(detail);
      bySlug[slug] = picked;
      if (picked.en) enLowerToSlug[picked.en.trim().toLowerCase()] = slug;
    }
    next = page.next || null;
    if (pageCount % 5 === 0) console.log(`  …move index pages ${pageCount}`);
  }

  const payload = {
    builtAt: new Date().toISOString(),
    enLowerToSlug,
    bySlug,
  };
  await fs.writeFile(MOVE_CACHE, JSON.stringify(payload), "utf8");
  console.log(`Wrote cache ${MOVE_CACHE} (${Object.keys(bySlug).length} moves)`);
  return payload;
}

/**
 * @param {string} fileContent
 * @param {string} newInner
 */
function injectBetweenMarkers(fileContent, newInner) {
  const bi = fileContent.indexOf(BEGIN_LINE);
  if (bi === -1) throw new Error("Missing // @begin move-names-i18n");
  const nlAfterBegin = fileContent.indexOf("\n", bi);
  if (nlAfterBegin === -1) throw new Error("No newline after begin marker");
  const afterBegin = nlAfterBegin + 1;
  const ei = fileContent.indexOf(END_LINE, afterBegin);
  if (ei === -1) throw new Error("Missing // @end move-names-i18n");
  return fileContent.slice(0, afterBegin) + newInner + fileContent.slice(ei);
}

/** @param {Record<string, string>} map */
function formatObjectProps(map, indent) {
  const pad = " ".repeat(indent);
  return Object.keys(map)
    .sort()
    .map((slug) => {
      const k = moveI18nKey(slug);
      return `${pad}${JSON.stringify(k)}: ${JSON.stringify(map[slug])}`;
    })
    .join(",\n");
}

async function main() {
  const rebuild = process.argv.includes("--rebuild-index");
  const text = await fs.readFile(POKEMONS_TS, "utf8");
  /** @type {Set<string>} */
  const rosterNames = new Set();
  const re = /"move_[^"]+"\s*:\s*\{\s*"name"\s*:\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m[1].trim()) rosterNames.add(m[1].trim());
  }

  console.log(`Unique roster move names: ${rosterNames.size}`);
  const { enLowerToSlug, bySlug } = await loadOrBuildMoveCache(rebuild);

  /** @type {Record<string, Record<string, string>>} */
  const byLoc = {
    en: {},
    "pt-BR": {},
    "ja-JP": {},
    fr: {},
    es: {},
  };
  /** @type {string[]} */
  const notFound = [];

  for (const rosterEn of [...rosterNames].sort()) {
    const key = moveNameToKey(rosterEn);
    let picked = bySlug[key];
    if (!picked) {
      const alt = enLowerToSlug[rosterEn.toLowerCase()];
      if (alt) picked = bySlug[alt];
    }
    if (!picked) {
      notFound.push(rosterEn);
      continue;
    }
    byLoc.en[key] = rosterEn;
    byLoc["pt-BR"][key] = picked["pt-BR"];
    byLoc["ja-JP"][key] = picked["ja-JP"];
    byLoc.fr[key] = picked.fr;
    byLoc.es[key] = picked.es;
  }

  if (notFound.length) {
    console.warn(
      `Not in PokéAPI (${notFound.length}) — add move.* in locale files or moveNameOverrides in i18n/index.ts:`
    );
    console.warn(notFound.slice(0, 35).join(", ") + (notFound.length > 35 ? " …" : ""));
    const logPath = path.join(CACHE_DIR, "move-names-not-in-pokeapi.txt");
    await fs.mkdir(CACHE_DIR, { recursive: true });
    await fs.writeFile(logPath, notFound.join("\n") + "\n", "utf8");
    console.warn(`Wrote ${logPath}`);
  }

  const enInner = `Object.assign(names, {\n${formatObjectProps(byLoc.en, 2)}\n});\n`;
  const ptInner = `${formatObjectProps(byLoc["pt-BR"], 2)},\n`;
  const jaInner = `${formatObjectProps(byLoc["ja-JP"], 2)},\n`;
  const frInner = `${formatObjectProps(byLoc.fr, 2)},\n`;
  const esInner = `${formatObjectProps(byLoc.es, 2)},\n`;

  const enOut = injectBetweenMarkers(await fs.readFile(I18N_FILES.en, "utf8"), enInner);
  await fs.writeFile(I18N_FILES.en, enOut, "utf8");
  console.log(`Patched ${I18N_FILES.en}`);

  const ptOut = injectBetweenMarkers(
    await fs.readFile(I18N_FILES["pt-BR"], "utf8"),
    ptInner
  );
  await fs.writeFile(I18N_FILES["pt-BR"], ptOut, "utf8");
  console.log(`Patched ${I18N_FILES["pt-BR"]}`);

  for (const [loc, inner] of [
    ["ja-JP", jaInner],
    ["fr", frInner],
    ["es", esInner],
  ]) {
    const p = I18N_FILES[loc];
    const out = injectBetweenMarkers(await fs.readFile(p, "utf8"), inner);
    await fs.writeFile(p, out, "utf8");
    console.log(`Patched ${p}`);
  }

  console.log(`Done (${Object.keys(byLoc.en).length} move keys per locale).`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
