import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  pokemons,
  moves,
  maps,
  battleItems,
  heldItems,
  getPokemonByName,
  getPokemonByDex,
  getPokemonBySlug,
  getPokemonsByBattleType,
  getPokemonsByTag,
  getActivePokemons,
  getImageUrl,
  getPokemonName,
  getBattleItemById,
  getHeldItemById,
  getHeldItemsByPokemon,
  getExclusiveHeldItems,
  getBattleItemName,
  getHeldItemName,
  BattleType,
  Tag,
} from "unite-lib";
import type { Pokemon, PokemonImages } from "unite-lib";

const BATTLE_TYPES = ["attacker", "defender", "allrounder", "speedster", "supporter"] as const;
const TAGS = ["attacker", "defender", "allrounder", "speedster", "supporter", "melee", "ranged"] as const;
const LOCALES = ["en", "pt-BR", "ja-JP", "fr", "es"] as const;
const IMAGE_KEYS = [
  "main",
  "big",
  "complete",
  "move_s11",
  "move_s12",
  "move_s13",
  "move_s21",
  "move_s22",
  "move_s23",
  "move_s24",
] as const;

function resolvePokemon(by: "name" | "dex" | "slug", value: string | number): Pokemon | undefined {
  if (by === "name") return getPokemonByName(String(value));
  if (by === "dex") return getPokemonByDex(Number(value));
  return getPokemonBySlug(String(value));
}

function pokemonToJson(p: Pokemon): object {
  return {
    name: p.name,
    dex: p.dex,
    images: p.images,
    active: p.active,
    battleType: p.battleType,
    tags: p.tags,
    stats: p.stats,
    difficulty: p.difficulty,
  };
}

const server = new McpServer({
  name: "unite-lib",
  version: "1.0.0",
});

// list_pokemons
server.registerTool(
  "list_pokemons",
  {
    title: "List Pokémons",
    description:
      "List Pokémon Unite roster with optional filters: battleType, tag, or activeOnly.",
    inputSchema: z.object({
      battleType: z.enum(BATTLE_TYPES).optional(),
      tag: z.enum(TAGS).optional(),
      activeOnly: z.boolean().optional(),
    }),
  },
  async ({ battleType, tag, activeOnly }) => {
    let list = activeOnly ? getActivePokemons() : [...pokemons];
    if (battleType) list = list.filter((p) => p.battleType === battleType);
    if (tag) list = list.filter((p) => p.tags.includes(tag as (typeof TAGS)[number]));
    const result = list.map(pokemonToJson);
    return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
  }
);

// get_pokemon
server.registerTool(
  "get_pokemon",
  {
    title: "Get Pokémon",
    description: "Get one Pokémon by name, dex number, or slug.",
    inputSchema: z.object({
      by: z.enum(["name", "dex", "slug"]),
      value: z.union([z.string(), z.number()]),
    }),
  },
  async ({ by, value }) => {
    const p = resolvePokemon(by, value);
    if (!p) {
      return {
        content: [{ type: "text", text: JSON.stringify({ error: "Pokémon not found", by, value }) }],
      };
    }
    return { content: [{ type: "text", text: JSON.stringify(pokemonToJson(p), null, 2) }] };
  }
);

// get_pokemons_by_role
server.registerTool(
  "get_pokemons_by_role",
  {
    title: "Get Pokémons by Role",
    description: "Filter roster by battle role (Attacker, Defender, All-Rounder, Speedster, Supporter).",
    inputSchema: z.object({
      battleType: z.enum(BATTLE_TYPES),
    }),
  },
  async ({ battleType }) => {
    const list = getPokemonsByBattleType(battleType as (typeof BATTLE_TYPES)[number]);
    return { content: [{ type: "text", text: JSON.stringify(list.map(pokemonToJson), null, 2) }] };
  }
);

// get_pokemons_by_tag
server.registerTool(
  "get_pokemons_by_tag",
  {
    title: "Get Pokémons by Tag",
    description: "Filter roster by tag (e.g. Melee, Ranged, or role tags).",
    inputSchema: z.object({
      tag: z.enum(TAGS),
    }),
  },
  async ({ tag }) => {
    const list = getPokemonsByTag(tag as (typeof TAGS)[number]);
    return { content: [{ type: "text", text: JSON.stringify(list.map(pokemonToJson), null, 2) }] };
  }
);

// get_image_url
server.registerTool(
  "get_image_url",
  {
    title: "Get Image URL",
    description:
      "Get relative path or full URL for a Pokémon image (main, big, complete, or move_s11/s12/...). Optional baseUrl for CDN.",
    inputSchema: z.object({
      pokemonRef: z.union([z.string(), z.number()]).describe("name, slug, or dex number"),
      imageKey: z.enum(IMAGE_KEYS),
      baseUrl: z.string().optional(),
    }),
  },
  async ({ pokemonRef, imageKey, baseUrl }) => {
    const p =
      typeof pokemonRef === "number"
        ? getPokemonByDex(pokemonRef)
        : getPokemonByName(pokemonRef) ?? getPokemonBySlug(pokemonRef);
    if (!p) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ error: "Pokémon not found", pokemonRef }),
          },
        ],
      };
    }
    const key = imageKey as keyof PokemonImages;
    const url = getImageUrl(p, key, baseUrl ? { baseUrl } : undefined);
    return { content: [{ type: "text", text: JSON.stringify({ url, pokemon: p.name, imageKey }) }] };
  }
);

// get_moves
server.registerTool(
  "get_moves",
  {
    title: "Get Moves",
    description: "Get all move entries for a Pokémon by slug (pokemonId).",
    inputSchema: z.object({
      pokemonId: z.string().describe("Pokémon slug, e.g. venusaur or pikachu"),
    }),
  },
  async ({ pokemonId }) => {
    const slug = pokemonId.toLowerCase().trim();
    const list = moves.filter((m) => m.pokemonId === slug);
    return { content: [{ type: "text", text: JSON.stringify(list, null, 2) }] };
  }
);

// list_maps
server.registerTool(
  "list_maps",
  {
    title: "List Maps",
    description: "List all Pokémon Unite maps/arenas.",
    inputSchema: z.object({}),
  },
  async () => {
    return { content: [{ type: "text", text: JSON.stringify(maps, null, 2) }] };
  }
);

// get_pokemon_name
server.registerTool(
  "get_pokemon_name",
  {
    title: "Get Pokémon Name (i18n)",
    description: "Get localized display name for a Pokémon by slug and locale.",
    inputSchema: z.object({
      slug: z.string(),
      locale: z.enum(LOCALES).optional(),
    }),
  },
  async ({ slug, locale = "en" }) => {
    const name = getPokemonName(slug, locale as (typeof LOCALES)[number]);
    return {
      content: [{ type: "text", text: JSON.stringify({ slug, locale, name }) }],
    };
  }
);

// list_battle_items
server.registerTool(
  "list_battle_items",
  {
    title: "List Battle Items",
    description: "List all Pokémon Unite battle items with optional localized names.",
    inputSchema: z.object({
      locale: z.enum(LOCALES).optional(),
    }),
  },
  async ({ locale = "en" }) => {
    const result = battleItems.map((b) => ({
      ...b,
      displayName: getBattleItemName(b.id, locale as (typeof LOCALES)[number]),
    }));
    return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
  }
);

// list_held_items
server.registerTool(
  "list_held_items",
  {
    title: "List Held Items",
    description: "List all Pokémon Unite held items. Optionally filter by Pokémon name (includes non-exclusive + that Pokémon's exclusives) or list only exclusive items.",
    inputSchema: z.object({
      locale: z.enum(LOCALES).optional(),
      pokemonName: z.string().optional().describe("Filter items available for a specific Pokémon (e.g. Lucario)"),
      exclusiveOnly: z.boolean().optional().describe("Return only exclusive items (Mega Stones, Rusted Sword, etc.)"),
    }),
  },
  async ({ locale = "en", pokemonName, exclusiveOnly }) => {
    let list = exclusiveOnly
      ? getExclusiveHeldItems()
      : pokemonName
        ? getHeldItemsByPokemon(pokemonName)
        : [...heldItems];
    const result = list.map((h) => ({
      ...h,
      displayName: getHeldItemName(h.id, locale as (typeof LOCALES)[number]),
    }));
    return { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] };
  }
);

// get_item_name
server.registerTool(
  "get_item_name",
  {
    title: "Get Item Name (i18n)",
    description: "Get localized display name for a battle item or held item by id and locale.",
    inputSchema: z.object({
      itemType: z.enum(["battle", "held"]),
      id: z.string().describe("Item id, e.g. eject-button or muscle-band"),
      locale: z.enum(LOCALES).optional(),
    }),
  },
  async ({ itemType, id, locale = "en" }) => {
    const loc = locale as (typeof LOCALES)[number];
    const item = itemType === "battle" ? getBattleItemById(id) : getHeldItemById(id);
    if (!item) {
      return { content: [{ type: "text", text: JSON.stringify({ error: "Item not found", itemType, id }) }] };
    }
    const displayName = itemType === "battle"
      ? getBattleItemName(id, loc)
      : getHeldItemName(id, loc);
    return { content: [{ type: "text", text: JSON.stringify({ itemType, locale, displayName, ...item }) }] };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
