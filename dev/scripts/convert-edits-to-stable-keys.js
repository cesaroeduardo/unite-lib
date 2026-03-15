/**
 * Converts dev/spawn-editor/edits.json from index keys to stable keys.
 * Run from repo root: node dev/scripts/convert-edits-to-stable-keys.js
 * Requires: npm run build first (reads spawns from dist).
 */

import fs from "fs";
import path from "path";
import { pathToFileURL, fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const EDITS_PATH = path.join(ROOT, "dev", "spawn-editor", "edits.json");
const DIST_INDEX = pathToFileURL(path.join(ROOT, "dist", "index.js")).href;

function makeStableKey(spawn) {
  return [
    spawn.mapId,
    spawn.neutralId,
    spawn.spawnTime,
    spawn.infoKey ?? "",
    spawn.left,
    spawn.top,
  ].join("|");
}

async function main() {
  if (!fs.existsSync(EDITS_PATH)) {
    console.error("edits.json not found at", EDITS_PATH);
    process.exit(1);
  }

  let spawns;
  try {
    const mod = await import(DIST_INDEX);
    spawns = mod.spawns;
  } catch (err) {
    console.error("Failed to load spawns from dist. Run 'npm run build' first.", err.message);
    process.exit(1);
  }

  const edits = JSON.parse(fs.readFileSync(EDITS_PATH, "utf-8"));
  const byStableKey = {};

  for (const [key, value] of Object.entries(edits)) {
    const index = parseInt(key, 10);
    if (Number.isNaN(index) || index < 0 || index >= spawns.length) {
      console.warn("Skipping invalid index:", key);
      continue;
    }
    byStableKey[makeStableKey(spawns[index])] = value;
  }

  fs.writeFileSync(EDITS_PATH, JSON.stringify(byStableKey, null, 2), "utf-8");
  console.log("Converted", Object.keys(edits).length, "edits to stable keys. Saved to", EDITS_PATH);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
