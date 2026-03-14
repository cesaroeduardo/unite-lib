import type {
  Pokemon,
  PokemonImages,
  Map,
  MapResolution,
  Neutral,
  MapSpawn,
} from "./types";
import type { BattleType, Tag } from "./types";
import pokemons from "./pokemons";
import neutrals from "./neutrals";
import spawns from "./spawns";

export interface GetImageUrlOptions {
  /** Base URL for assets (e.g. CDN). No trailing slash. */
  baseUrl?: string;
}

/**
 * Returns the full or relative URL for a Pokémon image.
 * Use baseUrl for CDN: e.g. "https://cdn.jsdelivr.net/npm/unite-lib@1.0.0"
 */
export function getImageUrl(
  pokemon: Pokemon,
  imageKey: keyof PokemonImages,
  options?: GetImageUrlOptions
): string {
  const path = pokemon.images[imageKey];
  if (path == null || path === "") return "";
  const base = options?.baseUrl?.replace(/\/$/, "");
  return base ? `${base}/${path}` : path;
}

/**
 * Returns the image URL for a map, optionally at a given resolution (1x, 2x, 4x).
 * Falls back to map.image when resolution is omitted or not available.
 */
export function getMapImageUrl(
  map: Map,
  resolution?: MapResolution,
  options?: GetImageUrlOptions
): string {
  const path =
    resolution && map.images?.[resolution] != null
      ? map.images[resolution]
      : map.image;
  if (path == null || path === "") return "";
  const base = options?.baseUrl?.replace(/\/$/, "");
  return base ? `${base}/${path}` : path;
}

/**
 * Returns spawns for a given map id (e.g. "map-groudon", "map-kyogre", "map-rayquaza").
 */
export function getSpawnsByMap(mapId: string): MapSpawn[] {
  return spawns.filter((s) => s.mapId === mapId);
}

/**
 * Returns the neutral by id, or undefined if not found.
 */
export function getNeutralById(id: string): Neutral | undefined {
  return neutrals.find((n) => n.id === id);
}

/**
 * Returns the image URL for a neutral (wild Pokémon or item).
 */
export function getNeutralImageUrl(
  neutral: Neutral,
  options?: GetImageUrlOptions
): string {
  const path = neutral.image;
  if (path == null || path === "") return "";
  const base = options?.baseUrl?.replace(/\/$/, "");
  return base ? `${base}/${path}` : path;
}

export function getPokemonByName(name: string): Pokemon | undefined {
  return pokemons.find((p) => p.name === name);
}

export function getPokemonByDex(dex: number): Pokemon | undefined {
  return pokemons.find((p) => p.dex === dex);
}

/**
 * Slug from roster image: "pokemons/roster-venusaur.png" -> "venusaur"
 */
export function getPokemonBySlug(slug: string): Pokemon | undefined {
  return pokemons.find((p) => {
    const s = p.images.main.replace(/^pokemons\/roster-/, "").replace(/\.png$/, "");
    return s === slug;
  });
}

export function getPokemonsByBattleType(battleType: BattleType): Pokemon[] {
  return pokemons.filter((p) => p.battleType === battleType);
}

export function getPokemonsByTag(tag: Tag): Pokemon[] {
  return pokemons.filter((p) => p.tags.includes(tag));
}

export function getActivePokemons(): Pokemon[] {
  return pokemons.filter((p) => p.active);
}
