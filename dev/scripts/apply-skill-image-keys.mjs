/**
 * Inserts move_p1 / move_s1 / move_s2 / move_u1 after `complete` when moves/{slug}_p1.webp exists.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const POKEMONS = path.join(ROOT, "src/pokemons.ts");
const MOVES = path.join(ROOT, "moves");

async function slugsWithP1() {
  const names = await fs.readdir(MOVES);
  const slugs = new Set();
  for (const f of names) {
    const m = f.match(/^(.+)_p1\.webp$/);
    if (m) slugs.add(m[1]);
  }
  return [...slugs];
}

async function main() {
  const slugs = await slugsWithP1();
  let text = await fs.readFile(POKEMONS, "utf8");
  let n = 0;
  for (const slug of slugs) {
    if (text.includes(`"move_p1": { "name": "", "image": "moves/${slug}_p1.webp"`)) continue;
    const needle = `"complete": "pokemons/stat-${slug}.webp",`;
    if (!text.includes(needle)) {
      process.stderr.write(`skip ${slug}: no complete line match\n`);
      continue;
    }
    const insert = `${needle}
    "move_p1": { "name": "", "image": "moves/${slug}_p1.webp" },
    "move_s1": { "name": "", "image": "moves/${slug}_s1.webp" },
    "move_s2": { "name": "", "image": "moves/${slug}_s2.webp" },
    "move_u1": { "name": "", "image": "moves/${slug}_u1.webp" },`;
    text = text.replace(needle, insert);
    n++;
  }
  await fs.writeFile(POKEMONS, text, "utf8");
  process.stdout.write(`Inserted base skill image keys for ${n} Pokémon.\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
