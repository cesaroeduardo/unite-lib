/**
 * Applies edits from dev/spawn-editor/edits.json to src/spawns.ts.
 * Run from repo root: npm run dev:apply-edits
 * Or: node dev/scripts/apply-spawn-edits.js (works from any cwd).
 *
 * edits.json supports two key formats:
 *
 * 1) By index (legacy): key = position in the spawns array.
 *    "0" = first spawn, "1" = second, etc. Breaks if you add/remove/reorder spawns.
 *
 * 2) By stable key (recommended): key = "mapId|neutralId|spawnTime|infoKey|left|top"
 *    (infoKey empty string if missing). Survives new neutrals and reordering.
 */

import fs from "fs";
import path from "path";
import { pathToFileURL, fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "..");
const EDITS_PATH = path.join(ROOT, "dev", "spawn-editor", "edits.json");
const SPAWNS_TS_PATH = path.join(ROOT, "src", "spawns.ts");
const DIST_INDEX = pathToFileURL(path.join(ROOT, "dist", "index.js")).href;

/** Builds a stable key for a spawn so edits still match after adding/reordering spawns. */
function makeStableKey(spawn) {
  const parts = [
    spawn.mapId,
    spawn.neutralId,
    spawn.spawnTime,
    spawn.infoKey ?? "",
    spawn.left,
    spawn.top,
  ];
  return parts.join("|");
}

function applyEdit(value, target) {
  if (value.left != null) target.left = value.left;
  if (value.top != null) target.top = value.top;
  if (value.spawnTime != null) target.spawnTime = value.spawnTime;
  if (value.despawnTime !== undefined) target.despawnTime = value.despawnTime && String(value.despawnTime).trim() ? value.despawnTime : undefined;
}

function serializeSpawn(spawn) {
  const lines = [
    `  {`,
    `    mapId: ${JSON.stringify(spawn.mapId)},`,
    `    neutralId: ${JSON.stringify(spawn.neutralId)},`,
    `    left: ${JSON.stringify(spawn.left)},`,
    `    top: ${JSON.stringify(spawn.top)},`,
    `    spawnTime: ${JSON.stringify(spawn.spawnTime)},`,
    `    respawnTime: ${spawn.respawnTime},`,
    `    permanentDelete: ${spawn.permanentDelete},`,
  ];
  if (spawn.despawnTime != null && String(spawn.despawnTime).trim() !== "") {
    lines.push(`    despawnTime: ${JSON.stringify(spawn.despawnTime)},`);
  }
  if (spawn.infoKey != null) {
    lines.push(`    infoKey: ${JSON.stringify(spawn.infoKey)},`);
  }
  if (spawn.info != null) {
    lines.push(`    info: ${JSON.stringify(spawn.info)},`);
  }
  lines.push(`  }`);
  return lines.join("\n");
}

async function main() {
  if (!fs.existsSync(EDITS_PATH)) {
    console.error("edits.json not found at", EDITS_PATH);
    console.error("Export edits in the spawn-editor, then save the file to dev/spawn-editor/edits.json");
    process.exit(1);
  }

  if (!fs.existsSync(SPAWNS_TS_PATH)) {
    console.error("src/spawns.ts not found at", SPAWNS_TS_PATH);
    console.error("Run this script from the unite-lib repo (or via npm run dev:apply-edits).");
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

  const editsJson = fs.readFileSync(EDITS_PATH, "utf-8");
  let edits;
  try {
    edits = JSON.parse(editsJson);
  } catch (err) {
    console.error("edits.json is invalid JSON:", err.message);
    process.exit(1);
  }

  if (typeof edits !== "object" || edits === null || Array.isArray(edits)) {
    console.error("edits.json must be an object like { \"0\": { \"left\": \"50%\", \"top\": \"42%\" }, ... }");
    process.exit(1);
  }

  const result = spawns.map((s) => ({ ...s }));
  let applied = 0;
  const appliedIndices = new Set();
  const skipped = [];
  const editsByStableKey = {};

  for (const [key, value] of Object.entries(edits)) {
    const index = parseInt(key, 10);
    if (!Number.isNaN(index) && index >= 0 && index < result.length) {
      applyEdit(value, result[index]);
      applied++;
      appliedIndices.add(index);
    } else if (key.includes("|")) {
      editsByStableKey[key] = value;
    } else {
      skipped.push(key);
    }
  }

  for (let i = 0; i < spawns.length; i++) {
    if (appliedIndices.has(i)) continue;
    const key = makeStableKey(spawns[i]);
    if (editsByStableKey[key]) {
      applyEdit(editsByStableKey[key], result[i]);
      applied++;
      delete editsByStableKey[key];
    }
  }

  const unmatchedKeys = Object.keys(editsByStableKey);
  if (unmatchedKeys.length > 0) {
    const baseKeyToEdits = {};
    for (const key of unmatchedKeys) {
      const parts = key.split("|");
      if (parts.length >= 5) {
        const base = parts.slice(0, 4).join("|");
        if (!baseKeyToEdits[base]) baseKeyToEdits[base] = [];
        baseKeyToEdits[base].push({ key, value: editsByStableKey[key] });
      }
    }
    for (const [base, group] of Object.entries(baseKeyToEdits)) {
      const [mapId, neutralId, spawnTime, infoKey] = base.split("|");
      const indices = [];
      for (let i = 0; i < spawns.length; i++) {
        if (appliedIndices.has(i)) continue;
        const s = spawns[i];
        if (s.mapId === mapId && s.neutralId === neutralId && s.spawnTime === spawnTime && (s.infoKey ?? "") === infoKey) {
          indices.push(i);
        }
      }
      group.sort((a, b) => a.key.localeCompare(b.key));
      if (indices.length === group.length) {
        for (let j = 0; j < group.length; j++) {
          applyEdit(group[j].value, result[indices[j]]);
          applied++;
          appliedIndices.add(indices[j]);
        }
      }
    }
  }

  if (skipped.length > 0) {
    console.warn("Skipped", skipped.length, "edit(s) with invalid key:", skipped.slice(0, 10).join(", ") + (skipped.length > 10 ? "..." : ""));
  }
  if (applied === 0 && Object.keys(edits).length > 0) {
    console.warn("No edits applied. Keys may not match current spawns (run 'npm run build' and refresh the editor, then Apply again).");
  }

  const sections = [];
  let currentMap = null;
  for (let i = 0; i < result.length; i++) {
    const spawn = result[i];
    if (spawn.mapId !== currentMap) {
      currentMap = spawn.mapId;
      sections.push(`  // --- ${currentMap} ---`);
    }
    sections.push(serializeSpawn(spawn) + (i < result.length - 1 ? "," : ""));
  }

  const content =
    `import type { MapSpawn } from "./types";\n\nconst spawns: MapSpawn[] = [\n` +
    sections.join("\n") +
    `\n];\n\nexport default spawns;\n`;

  fs.writeFileSync(SPAWNS_TS_PATH, content, "utf-8");
  console.log("Updated", SPAWNS_TS_PATH, "with", applied, "edit(s).");
  console.log("APPLIED_COUNT=" + applied);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
