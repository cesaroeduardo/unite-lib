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
import { getPokemonName, getMapName, getMapDescription } from "unite-lib";
// or
import { getPokemonName, getMapName, getMapDescription } from "unite-lib/i18n";

// Pokémon names
getPokemonName("venusaur", "en");    // "Venusaur"
getPokemonName("venusaur", "pt-BR"); // "Venusaur"
getPokemonName("venusaur", "ja-JP"); // "フシギバナ"
getPokemonName("venusaur", "fr");    // "Florizarre"
getPokemonName("venusaur", "es");    // "Venusaur"

// Map names and descriptions (optional — use when you need localized UI)
getMapName("map-groudon", "en");       // "Theia Sky Ruins"
getMapName("map-groudon", "pt-BR");   // "Ruínas Celestes de Theia"
getMapDescription("map-groudon", "es"); // "Mapa 5v5 con Groudon."
```

Supported locales: `en`, `pt-BR`, `ja-JP`, `fr`, `es`. Each map in `maps` has a default `name` and `description` (English); use `getMapName(mapId, locale)` and `getMapDescription(mapId, locale)` when you want to show them in another language.

## Content

The library includes data and images ready to use in Pokémon Unite apps, bots, and sites.

### Roster (Pokémon)

Roster icons and stat images for the full active roster.

| Roster example | Stats example |
|----------------|----------------|
| ![Pikachu](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/pokemons/roster-pikachu.png) | ![Pikachu stats](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/pokemons/stat-pikachu.png) |
| ![Charizard](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/pokemons/roster-charizard.png) | ![Charizard stats](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/pokemons/stat-charizard.png) |
| ![Venusaur](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/pokemons/roster-venusaur.png) | ![Venusaur stats](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/pokemons/stat-venusaur.png) |

### Moves

Move images (slot 1 and 2, variants 1 and 2) per Pokémon.

| Slot 1.1 | Slot 1.2 | Slot 2.1 | Slot 2.2 |
|----------|----------|----------|----------|
| ![Pikachu S11](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/moves/pikachu_s11.png) | ![Pikachu S12](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/moves/pikachu_s12.png) | ![Pikachu S21](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/moves/pikachu_s21.png) | ![Pikachu S22](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/moves/pikachu_s22.png) |

### Maps

Game map images (Theia Sky Ruins variants: Groudon, Kyogre, Rayquaza). Each map has multiple resolutions (1x, 2x, 4x); use `getMapImageUrl(map, resolution?, options?)` to pick one. Names and descriptions are available in all supported locales via `getMapName(mapId, locale)` and `getMapDescription(mapId, locale)` (see [i18n](#i18n-localized-names)).

![Map](https://raw.githubusercontent.com/cesaroeduardo/unite-lib/main/maps/groudon.png)

### Neutrals and spawns

The library includes a **neutrals** catalog (wild Pokémon and items that spawn on maps) with images in `neutrals/`, and a unified **spawns** list in `src/spawns.ts` (same pattern as `pokemons.ts`) linking each spawn to a map and a neutral. Use `getSpawnsByMap(mapId)` to get all spawns for a map (e.g. `"map-groudon"`, `"map-kyogre"`, `"map-rayquaza"`), `getNeutralById(id)` to resolve the neutral (e.g. for its image), and `getNeutralImageUrl(neutral, options?)` for the image URL.

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
| `maps` | Map list (id, name, image, images by resolution, description) |
| `neutrals` | Neutral catalog (id, image; wild Pokémon/items for spawns) |
| `spawns` | All map spawns (mapId, neutralId, left, top, spawnTime, respawnTime, etc.) |
| `BattleType` | `attacker`, `defender`, `allrounder`, `speedster`, `supporter` |
| `Tag` | Role + style: `attacker`, `defender`, `melee`, `ranged`, … |
| `getImageUrl(pokemon, key, options?)` | Image path or full URL with `baseUrl` |
| `getMapImageUrl(map, resolution?, options?)` | Map image URL (resolution: `"1"`, `"2"`, `"4"`) |
| `getNeutralImageUrl(neutral, options?)` | Neutral image path or full URL |
| `getSpawnsByMap(mapId)` | Spawns for a map (e.g. `"map-groudon"`) |
| `getNeutralById(id)` | Find neutral by id |
| `getPokemonByName(name)` | Find by display name |
| `getPokemonByDex(dex)` | Find by Pokédex number |
| `getPokemonBySlug(slug)` | Find by slug (e.g. `venusaur`) |
| `getPokemonsByBattleType(type)` | Filter by BattleType |
| `getPokemonsByTag(tag)` | Filter by Tag |
| `getActivePokemons()` | Only active roster entries |
| `getPokemonName(slug, locale)` | Localized Pokémon name (from main package or `unite-lib/i18n`) |
| `getMapName(mapId, locale)` | Localized map name |
| `getMapDescription(mapId, locale)` | Localized map description |

Types: `Neutral`, `MapSpawn` (see also `Map`, `MapResolution`, `Pokemon`, `Move`, etc.).

## Project structure

- **`dist/`** — Built ESM, CJS, and IIFE; type definitions (`.d.ts`)
- **`pokemons/`** — Roster and stat images
- **`moves/`** — Move images
- **`maps/`** — Map images
- **`neutrals/`** — Wild Pokémon and item images used in map spawns
- **`.cursor/skills/`** — [Cursor Agent Skills](https://docs.cursor.com/context/agent-skills) for use with AI agents in this repo (e.g. syncing roster from images in `pokemons/` and `moves/`).
- **`mcp/`** — [MCP server](mcp/README.md) (Model Context Protocol) para consumir a library em agentes de IA: tools para listar e buscar pokémons, moves, mapas, URLs de imagens e nomes localizados (Cursor, Claude Desktop, etc.).

## Releases (publicação no npm)

As versões e a publicação no npm são feitas automaticamente com [semantic-release](https://github.com/semantic-release/semantic-release) quando há **push na branch `main`**.

### Como a versão é definida

Os commits seguem [Conventional Commits](https://www.conventionalcommits.org/). O semantic-release usa isso para decidir o tipo de release:

| Tipo de commit   | Efeito na versão |
|------------------|-------------------|
| `feat:`          | **MINOR** (1.**x**.0) — nova funcionalidade |
| `fix:`, `perf:`, `docs:` (sem escopo de código) | **PATCH** (1.0.**x**) — correção ou melhoria |
| `BREAKING CHANGE` ou `!` no escopo (ex.: `feat!:`) | **MAJOR** (**x**.0.0) — mudança incompatível |

Exemplos:

```bash
git commit -m "feat: add Mega Charizard Y to roster"
git commit -m "fix: correct Venusaur stat image path"
git commit -m "feat!: change getImageUrl signature"   # breaking → MAJOR
```

Commits que não indicam release (ex.: `chore:`, `style:`, `test:`) não geram nova versão; mesmo assim o push na `main` roda o workflow (que pode não publicar nada).

### O que você precisa configurar

1. **Token do npm (NPM_TOKEN)**  
   No repositório no GitHub: **Settings → Secrets and variables → Actions** e crie um secret chamado **`NPM_TOKEN`**.
   - Crie o token em [npmjs.com → Access Tokens](https://www.npmjs.com/settings/~youruser/tokens): “Automation” ou “Publish”.
   - Cole o valor no secret `NPM_TOKEN`.

2. **Conventional Commits**  
   Para haver release, use pelo menos um commit com `feat:` ou `fix:` (ou breaking) no histórico desde a última tag. Se todos forem `chore:`/`style:`/`test:`, nenhuma versão será publicada.

Depois disso, ao dar push na `main`, o workflow **Release** roda, o semantic-release analisa os commits, atualiza a versão no `package.json`, gera/atualiza o `CHANGELOG.md`, cria a release no GitHub e publica o pacote no npm.

## License

MIT. See [LICENSE](LICENSE).

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and workflow.
