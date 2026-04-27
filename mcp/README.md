# unite-lib MCP server

[MCP](https://modelcontextprotocol.io/) server that exposes [unite-lib](../) data to AI agents: Pokémon Unite roster, moves, maps, battle items, held items, image URLs, and localized names. Use it from Cursor, Claude Desktop, or any MCP client.

## Setup

From the **repository root** (so that `unite-lib` is built and the MCP can use it):

```bash
# Build the main library first
npm run build

# Then install and build the MCP
cd mcp
npm install
npm run build
```

## Configuring the MCP client

Point your client at the built script. Use an **absolute path** to `mcp/dist/index.js` so it works from any workspace.

### Cursor

In Cursor MCP settings (e.g. **Settings → MCP** or `~/.cursor/mcp.json`), add:

```json
{
  "mcpServers": {
    "unite-lib": {
      "command": "node",
      "args": ["/absolute/path/to/unite-lib/mcp/dist/index.js"]
    }
  }
}
```

Example on Windows:

```json
"args": ["E:/dev2/unite-lib/mcp/dist/index.js"]
```

### Claude Desktop

In Claude Desktop config (e.g. `%APPDATA%\Claude\claude_desktop_config.json` on Windows), add the same `mcpServers` entry with the path to your clone.

## Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| `list_pokemons` | List roster with optional filters | `battleType?` (attacker, defender, allrounder, speedster, supporter), `tag?` (same + melee, ranged), `activeOnly?` (boolean) |
| `get_pokemon` | Get one Pokémon by name, dex, or slug | `by`: `"name"` \| `"dex"` \| `"slug"`, `value`: string or number |
| `get_pokemons_by_role` | Filter by battle role | `battleType`: attacker \| defender \| allrounder \| speedster \| supporter |
| `get_pokemons_by_tag` | Filter by tag (e.g. Melee, Ranged) | `tag`: attacker \| defender \| allrounder \| speedster \| supporter \| melee \| ranged |
| `get_image_url` | Get image path or full URL for a Pokémon | `pokemonRef`: name, slug, or dex; `imageKey`: main \| big \| complete \| move_s11 \| … \| move_s24; `baseUrl?` |
| `get_moves` | Moves for a Pokémon (by slug) | `pokemonId`: slug (e.g. `venusaur`, `pikachu`) |
| `list_maps` | List all maps/arenas | — |
| `get_pokemon_name` | Localized Pokémon name (i18n) | `slug`, `locale?`: en \| pt-BR \| ja-JP \| fr \| es (default: en) |
| `list_battle_items` | List all battle items (10 items) | `locale?`: en \| pt-BR \| ja-JP \| fr \| es |
| `list_held_items` | List held items with optional filters | `locale?`, `pokemonName?` (filter by Pokémon), `exclusiveOnly?` (Mega Stones etc.) |
| `get_item_name` | Localized battle or held item name (i18n) | `itemType`: `"battle"` \| `"held"`, `id`: item id (e.g. `eject-button`), `locale?` |

Responses are JSON (e.g. array of Pokémon objects or a single object). The agent can use these tools to look up roster data, image paths, moves, and names without importing the package in code.

## Development

- Edit `src/index.ts`, then run `npm run build` in `mcp/`.
- For watch mode: `npm run dev` (rebuilds on change). Restart the MCP client after rebuilding.

## License

Same as [unite-lib](../) (MIT).
