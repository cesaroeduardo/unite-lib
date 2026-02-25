import type { Pokemon, PokemonImages } from "./types";
import type { BattleType, Tag } from "./types";
import pokemons from "./pokemons";

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
