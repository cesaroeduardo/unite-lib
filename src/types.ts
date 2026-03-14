import type { BattleType, Tag } from "./constants";

export type { BattleType, Tag };

/** Image paths for a Pokémon (relative to package root or baseUrl). */
export interface PokemonImages {
  main: string;
  big: string;
  complete: string;
  move_s11?: string;
  move_s12?: string;
  move_s13?: string;
  move_s21?: string;
  move_s22?: string;
  move_s23?: string;
  move_s24?: string;
  [key: `move_${string}`]: string | undefined;
}

/** In-game stat ratings (0.5–5). */
export interface PokemonStats {
  offense: number;
  endurance: number;
  mobility: number;
  scoring: number;
  support: number;
}

/** A Pokémon Unite roster entry. */
export interface Pokemon {
  name: string;
  dex: number;
  images: PokemonImages;
  active: boolean;
  battleType: BattleType;
  stats?: PokemonStats;
  tags: Tag[];
  difficulty?: number;
}

/** Move slot identifier (e.g. s11 = first slot, first move). */
export type MoveSlotId = `s${11 | 12 | 13 | 21 | 22 | 23 | 24}`;

/** Structured move data linked to a Pokémon. */
export interface Move {
  /** Pokémon identifier (slug from name). */
  pokemonId: string;
  /** Slot id (e.g. 's11', 's22'). */
  slotId: MoveSlotId;
  /** Display name of the move. */
  name: string;
  /** Optional short description. */
  description?: string;
  /** Image path (relative to package root or baseUrl). */
  image: string;
}

/** Map image resolution (1x, 2x, 4x). */
export type MapResolution = "1" | "2" | "4";

/** Map/arena data. */
export interface Map {
  id: string;
  name: string;
  /** Default image path (e.g. 1x). Use getMapImageUrl for a specific resolution. */
  image: string;
  /** Optional resolution variants (@1x, @2x, @4x). Keys are "1", "2", "4". */
  images?: Partial<Record<MapResolution, string>>;
  /** Optional description. */
  description?: string;
}

/** Wild/neutral Pokémon or item that can spawn on a map. */
export interface Neutral {
  id: string;
  /** Image path (relative to package root or baseUrl). */
  image: string;
  /** Display name in English (use getNeutralName for other locales). */
  name: string;
  /** Pokédex number (omit for non-Pokémon e.g. berries). */
  dex?: number;
}

/** A single spawn point on a map, linked to a neutral by neutralId. */
export interface MapSpawn {
  mapId: string;
  neutralId: string;
  left: string;
  top: string;
  spawnTime: string;
  respawnTime: number;
  permanentDelete: boolean;
  /**
   * Optional game-clock time when this spawn disappears (e.g. when the center boss spawns).
   * Format "MM:SS" (e.g. "02:00"). Use to hide Natu/Altaria at center when Groudon/Kyogre/Rayquaza spawn.
   */
  despawnTime?: string;
  /** Optional HTML description (default locale). Use getSpawnInfo for i18n). */
  info?: string;
  /** Optional i18n key for info (spawn.info.<key>). When set, getSpawnInfo uses it. */
  infoKey?: string;
}
