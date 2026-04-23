/**
 * Downloads skill PNGs from unite-db CloudFront using Pokebag skill metadata.
 * Skill names live in src/pokemons.ts (`images.move_*.{ name, image }`). To fill names from unite-db data, run `npm run sync:unite-db-skill-names`. Run `npm run migrate:move-slots` after adding plain string paths.
 *
 * Usage: node dev/scripts/sync-unite-skills.mjs
 * Optional: node dev/scripts/sync-unite-skills.mjs --slug=absol
 */

import fs from "node:fs/promises";
import https from "node:https";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  groupByPokemonId,
  layoutSlotsFixed,
  loadMergedSkillsFromDisk,
  parseRosterFromPokemonsTs,
} from "./pokebag-skills-lib.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const POKEMONS_TS = path.join(ROOT, "src/pokemons.ts");
const MOVES_DIR = path.join(ROOT, "moves");

function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "unite-lib-skill-sync" } }, (res) => {
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

async function main() {
  const argSlug = process.argv.find((a) => a.startsWith("--slug="))?.slice(7);
  const roster = await parseRosterFromPokemonsTs(POKEMONS_TS);
  const skills = await loadMergedSkillsFromDisk(ROOT);
  const byPid = groupByPokemonId(skills);

  await fs.mkdir(MOVES_DIR, { recursive: true });

  const missing = [];
  const layouts = new Map();

  for (const { name, slug } of roster) {
    const list = byPid.get(slug);
    if (!list) {
      missing.push(slug);
      continue;
    }
    const layout = layoutSlotsFixed(list, name, slug, MOVES_DIR);
    layouts.set(slug, layout);
  }

  for (const [slug, { downloads }] of layouts) {
    if (argSlug && slug !== argSlug) continue;
    for (const d of downloads) {
      try {
        const buf = await httpsGet(d.url);
        await fs.writeFile(d.out, buf);
        process.stdout.write(`OK ${path.basename(d.out)}\n`);
      } catch (e) {
        process.stderr.write(`FAIL ${d.url} -> ${e.message}\n`);
      }
    }
  }

  process.stdout.write(
    `\nDone. Add or update English names in src/pokemons.ts under each images.move_* entry.\n` +
      `Missing Pokebag data for ${missing.length} slug(s) (no auto-download).\n`
  );
  if (missing.length && missing.length < 50) {
    process.stdout.write(missing.join(", ") + "\n");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
