/**
 * Compares src/pokemons.ts move_* keys vs unite-db pokemon.json top-level skills.
 * Reports Pokémon where JSON has Passive / Move 1 / Move 2 / Unite but the roster block lacks move_p1 / move_s1 / move_s2 / move_u1.
 *
 * Usage: node dev/scripts/audit-missing-base-skills.mjs
 * Optional: node dev/scripts/audit-missing-base-skills.mjs --grid-only
 */

import fs from "node:fs/promises";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseRosterFromPokemonsTs } from "./pokebag-skills-lib.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const POKEMONS_TS = path.join(ROOT, "src/pokemons.ts");

const UNITE_DB_DISPLAY_NAME_BY_SLUG = {
  "alolan-ninetales": "Ninetales",
  "alolan-raichu": "Raichu",
  "galarian-rapidash": "Rapidash",
};

/** Names shown on the user's 9×10 roster grid (pokemons.ts uses regional prefixes where applicable). */
const GRID_NAMES = new Set([
  "Absol",
  "Aegislash",
  "Alcremie",
  "Armarouge",
  "Articuno",
  "Azumarill",
  "Blastoise",
  "Blaziken",
  "Blissey",
  "Buzzwole",
  "Ceruledge",
  "Chandelure",
  "Charizard",
  "Mega Charizard X",
  "Mega Charizard Y",
  "Cinderace",
  "Clefable",
  "Comfey",
  "Cramorant",
  "Crustle",
  "Darkrai",
  "Decidueye",
  "Delphox",
  "Dhelmise",
  "Dodrio",
  "Dragapult",
  "Dragonite",
  "Duraludon",
  "Eldegoss",
  "Empoleon",
  "Espeon",
  "Falinks",
  "Garchomp",
  "Gardevoir",
  "Gengar",
  "Glaceon",
  "Goodra",
  "Greedent",
  "Greninja",
  "Gyarados",
  "Mega Gyarados",
  "Ho-Oh",
  "Hoopa",
  "Inteleon",
  "Lapras",
  "Latias",
  "Latios",
  "Leafeon",
  "Lucario",
  "Mega Lucario",
  "Machamp",
  "Mamoswine",
  "Meowscarada",
  "Meowth",
  "Metagross",
  "Mew",
  "Mega Mewtwo X",
  "Mega Mewtwo Y",
  "Mimikyu",
  "Miraidon",
  "Moltres",
  "Mr. Mime",
  "Alolan Ninetales",
  "Pawmot",
  "Pikachu",
  "Psyduck",
  "Alolan Raichu",
  "Galarian Rapidash",
  "Sableye",
  "Scizor",
  "Scyther",
  "Sirfetch'd",
  "Slowbro",
  "Snorlax",
  "Suicune",
  "Sylveon",
  "Talonflame",
  "Tinkaton",
  "Trevenant",
  "Tsareena",
  "Tyranitar",
  "Umbreon",
  "Urshifu",
  "Vaporeon",
  "Venusaur",
  "Wigglytuff",
  "Zacian",
  "Zapdos",
  "Zeraora",
  "Zoroark",
]);

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "unite-lib-audit" } }, (res) => {
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

function jsonSlots(entry) {
  const skills = entry.skills || [];
  const need = {};
  if (skills.some((s) => s.ability === "Passive")) need.p1 = true;
  if (skills.some((s) => s.ability === "Move 1")) need.s1 = true;
  if (skills.some((s) => s.ability === "Move 2")) need.s2 = true;
  if (skills.some((s) => s.ability === "Unite Move")) need.u1 = true;
  return need;
}

async function main() {
  const gridOnly = process.argv.includes("--grid-only");
  const [raw, jsonStr] = await Promise.all([
    fs.readFile(POKEMONS_TS, "utf8"),
    httpsGet("https://unite-db.com/pokemon.json"),
  ]);
  const dex = JSON.parse(jsonStr);
  const byName = new Map(dex.map((e) => [e.display_name, e]));
  const roster = await parseRosterFromPokemonsTs(POKEMONS_TS);

  const missing = [];
  const noDex = [];

  for (const { name, slug } of roster) {
    if (gridOnly && !GRID_NAMES.has(name)) continue;
    const dexName = UNITE_DB_DISPLAY_NAME_BY_SLUG[slug] ?? name;
    const entry = byName.get(dexName);
    if (!entry) {
      noDex.push({ name, slug });
      continue;
    }
    const need = jsonSlots(entry);
    const have = moveSlotIdsInBlock(raw, slug);
    const gaps = [];
    for (const k of ["p1", "s1", "s2", "u1"]) {
      if (need[k] && !have.has(k)) gaps.push(k);
    }
    if (gaps.length) missing.push({ name, slug, gaps: gaps.join(",") });
  }

  missing.sort((a, b) => a.name.localeCompare(b.name));

  process.stdout.write(
    `Missing base/unite slots vs unite-db (${missing.length} Pokémon):\n` +
      missing.map((m) => `  ${m.name} (${m.slug}): ${m.gaps}`).join("\n") +
      "\n"
  );
  if (noDex.length) {
    process.stderr.write(
      `\nNo pokemon.json row for ${noDex.length} roster name(s): ${noDex.map((x) => x.slug).join(", ")}\n`
    );
  }
}

main().catch((e) => {
  process.stderr.write(String(e?.stack || e) + "\n");
  process.exit(1);
});
