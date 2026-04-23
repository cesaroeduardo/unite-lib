/**
 * Converts "move_s11": "moves/foo.png" -> "move_s11": { "name": "...", "image": "moves/foo.png" }
 * using Pokebag skill data (devDependency) + inline skillNames blocks (then removes skillNames).
 */
import fs from "node:fs/promises";
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
const POKEMONS = path.join(ROOT, "src/pokemons.ts");

function esc(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

async function main() {
  const skills = await loadMergedSkillsFromDisk(ROOT);
  const byPid = groupByPokemonId(skills);
  const roster = await parseRosterFromPokemonsTs(POKEMONS);

  /** slug -> slot -> display name */
  const pokebagNames = {};
  for (const { name, slug } of roster) {
    const list = byPid.get(slug);
    if (!list) continue;
    pokebagNames[slug] = layoutSlotsFixed(list, name, slug, null).skillNames;
  }

  const lines = (await fs.readFile(POKEMONS, "utf8")).split("\n");
  const out = [];
  let slug = "";
  let inlineSkillNames = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const mainM = line.match(/"main":\s*"pokemons\/roster-([^"]+)\.png"/);
    if (mainM) {
      slug = mainM[1];
      inlineSkillNames = null;
    }

    if (/^\s*"skillNames":\s*\{/.test(line)) {
      inlineSkillNames = {};
      let j = i + 1;
      for (; j < lines.length; j++) {
        const L = lines[j];
        if (/^\s*\},?\s*$/.test(L)) break;
        const sm = L.match(/^\s*"(p1|s1|s2|u1|s11|s12|s13|s14|s21|s22|s23|s24)":\s*"([^"]*)"/);
        if (sm) inlineSkillNames[sm[1]] = sm[2];
      }
      i = j;
      continue;
    }

    const moveM = line.match(/^(\s*)"move_(p1|s1|s2|u1|s11|s12|s13|s14|s21|s22|s23|s24)":\s*"([^"]+)"/);
    if (moveM) {
      const [, indent, slotKey, imagePath] = moveM;
      const name =
        (inlineSkillNames && inlineSkillNames[slotKey]) ||
        (pokebagNames[slug] && pokebagNames[slug][slotKey]) ||
        "";
      out.push(
        `${indent}"move_${slotKey}": { "name": "${esc(name)}", "image": "${esc(imagePath)}" },`
      );
      continue;
    }
    out.push(line);
  }

  let joined = out.join("\n");
  joined = joined.replace(/\n  "skillNames": \{[\s\S]*?\n  \},/g, "");
  await fs.writeFile(POKEMONS, joined, "utf8");
  process.stdout.write("Migrated move_* entries in src/pokemons.ts\n");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
