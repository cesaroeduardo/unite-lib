# unite-lib

Assets and data library for **Pokémon Unite**: roster, names, images, moves, and maps. Use in any project via **npm** or **CDN**.

## Install

```bash
npm install unite-lib
```

## Testing locally (consumir no seu projeto sem publicar no npm)

Para testar a library em outro projeto na sua máquina sem publicar no npm:

### 1. Buildar a library

Na pasta da **unite-lib**:

```bash
cd unite-lib
npm run build
```

### 2. Usar no seu projeto

**Opção A — `npm link` (symlink, ótimo para desenvolvimento)**

Na pasta da library:

```bash
npm link
```

No seu outro projeto (ex.: app que consome a library):

```bash
cd /caminho/do/seu/projeto
npm link unite-lib
```

A partir daí, `import { pokemons, getPokemonName } from "unite-lib"` usa a versão local. Ao alterar a library, rode `npm run build` nela de novo; o projeto que a consome já aponta para o mesmo pacote.

Para desfazer no projeto consumidor: `npm unlink unite-lib`.

**Opção B — dependência `file:` (cópia/instalação a partir do caminho)**

No `package.json` do seu projeto, adicione:

```json
{
  "dependencies": {
"unite-lib": "file:../unite-lib"
}
}
```

Ajuste `../unite-lib` para o caminho relativo (ou absoluto) até a pasta da library. Depois:

```bash
npm install
```

Sempre que mudar a library, rode `npm run build` nela e, se quiser atualizar a cópia no consumidor, `npm install` de novo no projeto (ou use `npm update unite-lib`).

### Imagens ao testar localmente

Os caminhos de imagem são relativos (ex.: `pokemons/roster-venusaur.png`). No consumidor você pode:

- Usar **baseUrl** ao chamar `getImageUrl(pokemon, "main", { baseUrl: "http://localhost:3000/node_modules/unite-lib" })` se o bundler/servidor servir `node_modules`, ou
- Apontar **baseUrl** para onde as pastas `pokemons/`, `moves/`, `maps/` estejam acessíveis no seu app.

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

## CDN (browser)

```html
<script src="https://cdn.jsdelivr.net/npm/unite-lib@latest/dist/index.global.js"></script>
<script>
  const { pokemons, getPokemonName, BattleType } = window.UniteLib;
</script>
```

Asset URLs via jsDelivr (replace `@latest` with a version if needed):

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

## License

MIT. See [LICENSE](LICENSE).

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and workflow.
