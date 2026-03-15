# Dev tools (unite-lib)

Internal utilities for the library. Not published to npm.

## Spawn position editor

Tool to fine-tune spawn positions (`left`, `top` in %) on maps.

### Setup

1. From repo root, build the library: `npm run build`
2. Go to the editor: `cd dev/spawn-editor && npm install`

### Usage

1. Start the dev server: `npm run dev` (in `dev/spawn-editor`)
2. Open http://localhost:5174
3. Select a map (Groudon / Kyogre / Rayquaza)
4. Drag markers to adjust positions; optional snap grid in %
5. Click **Export edits** to download `edits.json`
6. From repo root, apply edits to source: `npm run dev:apply-edits`

This updates `src/spawns.ts` with the new positions. Rebuild the library and re-export from the UI if you need to iterate.

### Apply script

- **Script:** `dev/scripts/apply-spawn-edits.js`
- **Input:** `dev/spawn-editor/edits.json` (created by Export in the UI)
- **Output:** overwrites `src/spawns.ts`

Run from repo root: `npm run dev:apply-edits`. Requires `dist/` to exist (`npm run build`).
