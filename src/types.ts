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

/** Map/arena data. */
export interface Map {
  id: string;
  name: string;
  /** Image path (relative to package root or baseUrl). */
  image: string;
  /** Optional description. */
  description?: string;
}
