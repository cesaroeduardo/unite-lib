import type {
  Pokemon,
  PokemonImages,
  PokemonSkillNames,
  MoveSlotEntry,
  MoveSlotId,
  BattleType,
  Tag,
  Map,
  MapResolution,
  Neutral,
  MapSpawn,
  BattleItem,
  HeldItem,
} from "./types";
import { POKEMON_MOVE_SLOT_IDS } from "./types";
import pokemons from "./pokemons";
import neutrals from "./neutrals";
import spawns from "./spawns";
import battleItems from "./battleItems";
import heldItems from "./heldItems";

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
  const raw = pokemon.images[imageKey];
  if (raw == null || raw === "") return "";
  const path =
    typeof raw === "string"
      ? raw
      : typeof raw === "object" && raw != null && "image" in raw
        ? (raw as MoveSlotEntry).image
        : "";
  if (path === "") return "";
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
 * Parses game clock "MM:SS" to seconds remaining (e.g. "10:00" → 600, "02:00" → 120).
 */
export function parseGameClockToSeconds(clock: string): number {
  const parts = String(clock).trim().split(":");
  const m = parseInt(parts[0], 10) || 0;
  const s = parseInt(parts[1], 10) || 0;
  return m * 60 + s;
}

/**
 * Returns whether a spawn is visible at the given game clock (seconds remaining).
 * Considers both spawnTime (spawn appears when clock ≤ spawnTime) and despawnTime
 * (spawn disappears when clock ≤ despawnTime, e.g. center Natu/Altaria when boss spawns at 02:00).
 */
export function isSpawnVisibleAtGameClock(
  spawn: MapSpawn,
  gameClockSeconds: number
): boolean {
  const spawnSec = parseGameClockToSeconds(spawn.spawnTime);
  if (gameClockSeconds > spawnSec) return false;
  if (spawn.despawnTime != null && spawn.despawnTime !== "") {
    const despawnSec = parseGameClockToSeconds(spawn.despawnTime);
    if (gameClockSeconds <= despawnSec) return false;
  }
  return true;
}

/**
 * Returns spawns for a map that are visible at the given game clock (seconds remaining).
 * Use this when you need to show only spawns that have already appeared and not yet despawned.
 */
export function getSpawnsByMapVisibleAt(
  mapId: string,
  gameClockSeconds: number
): MapSpawn[] {
  return getSpawnsByMap(mapId).filter((s) =>
    isSpawnVisibleAtGameClock(s, gameClockSeconds)
  );
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
 * Use this slug with getPokemonName(id, locale) for i18n.
 */
export function getPokemonSlug(pokemon: Pokemon): string {
  return pokemon.images.main.replace(/^pokemons\/roster-/, "").replace(/\.png$/, "");
}

/**
 * Resolved English skill names from `images.move_*.{ name }` and optional deprecated `skillNames` overrides.
 */
export function getPokemonSkillNames(pokemon: Pokemon): PokemonSkillNames {
  const merged: PokemonSkillNames = {};
  for (const slotId of POKEMON_MOVE_SLOT_IDS) {
    const key = `move_${slotId}` as keyof PokemonImages;
    const v = pokemon.images[key];
    if (
      v &&
      typeof v === "object" &&
      "name" in v &&
      (v as MoveSlotEntry).name != null &&
      (v as MoveSlotEntry).name !== ""
    ) {
      merged[slotId] = (v as MoveSlotEntry).name;
    }
  }
  return { ...merged, ...pokemon.skillNames };
}

/**
 * Resolves one move slot to `{ name, image }`.
 * Supports legacy `images.move_*` as a plain string path.
 */
export function resolveMoveSlot(
  pokemon: Pokemon,
  slotId: MoveSlotId
): { name: string; image: string } | null {
  const key = `move_${slotId}` as keyof PokemonImages;
  const raw = pokemon.images[key];
  if (raw == null || raw === "") return null;
  const names = getPokemonSkillNames(pokemon);
  const fallbackName = names[slotId] ?? `${pokemon.name} (${slotId})`;
  if (typeof raw === "string") {
    return { name: fallbackName, image: raw };
  }
  return {
    name: raw.name !== "" ? raw.name : fallbackName,
    image: raw.image,
  };
}

export function getPokemonBySlug(slug: string): Pokemon | undefined {
  return pokemons.find((p) => getPokemonSlug(p) === slug);
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

export function getBattleItemById(id: string): BattleItem | undefined {
  return battleItems.find((b) => b.id === id);
}

export function getHeldItemById(id: string): HeldItem | undefined {
  return heldItems.find((h) => h.id === id);
}

export function getHeldItemsByPokemon(pokemonName: string): HeldItem[] {
  return heldItems.filter(
    (h) => !h.exclusive || h.exclusive === pokemonName
  );
}

export function getExclusiveHeldItems(): HeldItem[] {
  return heldItems.filter((h) => h.exclusive != null);
}
