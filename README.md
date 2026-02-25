# unite-lib

Assets and data library for **Pokémon Unite**: roster, names, images, moves, and maps. Use in any project via **npm** or **CDN**.

## Install

```bash
npm install unite-lib
```

## Usage

### Data and helpers

```js
import {
  pokemons,
  moves,
  maps,
  BattleType,
  Tag,
  getPokemonByName,
  getPokemonByDex,
  getPokemonsByBattleType,
  getImageUrl,
  getPokemonName,
} from "unite-lib";

// All roster entries
console.log(pokemons.length);

// Find by name or dex
const pikachu = getPokemonByName("Pikachu");
const dex25 = getPokemonByDex(25);

// Filter by role
const attackers = getPokemonsByBattleType(BattleType.ATTACKER);
const ranged = getPokemonsByTag(Tag.RANGED);

// Image URL (relative or with CDN base)
const mainImg = getImageUrl(pikachu, "main");
const cdnImg = getImageUrl(pikachu, "main", {
  baseUrl: "https://cdn.jsdelivr.net/npm/unite-lib@1.0.0",
});
```

### i18n (localized names)

```js
import { getPokemonName } from "unite-lib";
// or
import { getPokemonName } from "unite-lib/i18n";

getPokemonName("venusaur", "en");    // "Venusaur"
getPokemonName("venusaur", "pt-BR"); // "Venusaur"
getPokemonName("venusaur", "ja-JP"); // "フシギバナ"
getPokemonName("venusaur", "fr");    // "Florizarre"
getPokemonName("venusaur", "es");    // "Venusaur"
```

Supported locales: `en`, `pt-BR`, `ja-JP`, `fr`, `es`.

## Content

The library includes data and images ready to use in Pokémon Unite apps, bots, and sites.

### Roster (Pokémon)

Roster icons and stat images for the full active roster.

| Roster example | Stats example |
|----------------|----------------|
| ![Pikachu](pokemons/roster-pikachu.png) | ![Pikachu stats](pokemons/stat-pikachu.png) |
| ![Charizard](pokemons/roster-charizard.png) | ![Charizard stats](pokemons/stat-charizard.png) |
| ![Venusaur](pokemons/roster-venusaur.png) | ![Venusaur stats](pokemons/stat-venusaur.png) |

### Moves

Move images (slot 1 and 2, variants 1 and 2) per Pokémon.

| Slot 1.1 | Slot 1.2 | Slot 2.1 | Slot 2.2 |
|----------|----------|----------|----------|
| ![Pikachu S11](moves/pikachu_s11.png) | ![Pikachu S12](moves/pikachu_s12.png) | ![Pikachu S21](moves/pikachu_s21.png) | ![Pikachu S22](moves/pikachu_s22.png) |

### Maps

Game map images (Remoat Stadium, Theia Sky Ruins, Mer Stadium, etc.).

![Map](maps/groudon.png)

---

## Local development (testing without publishing to npm)

To test the library in another project on your machine without publishing to npm:

### 1. Build the library

From the **unite-lib** folder:

```bash
cd unite-lib
npm run build
```

### 2. Use in your project

**Option A — `npm link` (symlink, great for development)**

From the library folder:

```bash
npm link
```

In your other project (e.g. the app that consumes the library):

```bash
cd /path/to/your/project
npm link unite-lib
```

From then on, `import { pokemons, getPokemonName } from "unite-lib"` uses the local version. When you change the library, run `npm run build` again; the consuming project already points to the same package.

To undo in the consuming project: `npm unlink unite-lib`.

**Option B — `file:` dependency (install from path)**

In your project's `package.json`, add:

```json
{
  "dependencies": {
    "unite-lib": "file:../unite-lib"
  }
}
```

Adjust `../unite-lib` to the relative (or absolute) path to the library folder. Then:

```bash
npm install
```

Whenever you change the library, run `npm run build` in it and, to refresh the copy in the consumer, run `npm install` again in the project (or use `npm update unite-lib`).

### Images when testing locally

Image paths are relative (e.g. `pokemons/roster-venusaur.png`). In the consumer you can:

- Use **baseUrl** when calling `getImageUrl(pokemon, "main", { baseUrl: "http://localhost:3000/node_modules/unite-lib" })` if the bundler/server serves `node_modules`, or
- Point **baseUrl** to where the `pokemons/`, `moves/`, and `maps/` folders are available in your app.

---

## CDN (browser)

```html
<script src="https://cdn.jsdelivr.net/npm/unite-lib@latest/dist/index.global.js"></script>
<script>
  const { pokemons, getPokemonName, BattleType } = window.UniteLib;
</script>
```

Asset URLs via jsDelivr (substitua `@latest` por uma versão se quiser):

- `https://cdn.jsdelivr.net/npm/unite-lib@latest/pokemons/roster-venusaur.png`
- `https://cdn.jsdelivr.net/npm/unite-lib@latest/moves/venusaur_s11.png`

## API overview

| Export | Description |
|--------|-------------|
| `pokemons` | Full roster (name, dex, images, battleType, stats, tags, difficulty) |
| `moves` | Move list (pokemonId, slotId, name, image) |
| `maps` | Map list (id, name, image, description) |
| `BattleType` | `attacker`, `defender`, `allrounder`, `speedster`, `supporter` |
| `Tag` | Role + style: `attacker`, `defender`, `melee`, `ranged`, … |
| `getImageUrl(pokemon, key, options?)` | Image path or full URL with `baseUrl` |
| `getPokemonByName(name)` | Find by display name |
| `getPokemonByDex(dex)` | Find by Pokédex number |
| `getPokemonBySlug(slug)` | Find by slug (e.g. `venusaur`) |
| `getPokemonsByBattleType(type)` | Filter by BattleType |
| `getPokemonsByTag(tag)` | Filter by Tag |
| `getActivePokemons()` | Only active roster entries |
| `getPokemonName(slug, locale)` | Localized name (from main package or `unite-lib/i18n`) |

## Project structure

- **`dist/`** — Built ESM, CJS, and IIFE; type definitions (`.d.ts`)
- **`pokemons/`** — Roster and stat images
- **`moves/`** — Move images
- **`maps/`** — Map images
- **`.cursor/skills/`** — [Cursor Agent Skills](https://docs.cursor.com/context/agent-skills) for use with AI agents in this repo (e.g. syncing roster from images in `pokemons/` and `moves/`).
- **`mcp/`** — [MCP server](mcp/README.md) (Model Context Protocol) para consumir a library em agentes de IA: tools para listar e buscar pokémons, moves, mapas, URLs de imagens e nomes localizados (Cursor, Claude Desktop, etc.).

## License

MIT. See [LICENSE](LICENSE).

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and workflow.
