import type { BattleType, Tag } from "./constants";

export type { BattleType, Tag };

/** One move / passive / unite slot: display name + asset path (single source of truth). */
export interface MoveSlotEntry {
  name: string;
  image: string;
}

/** Legacy: path string only. Preferred: `{ name, image }`. */
export type MoveSlotValue = MoveSlotEntry | string;

/** Image paths for a Pokémon (relative to package root or baseUrl). */
export interface PokemonImages {
  main: string;
  big: string;
  complete: string;
  evolution_1?: string;
  evolution_2?: string;
  evolution_3?: string;
  evolution_4?: string;
  move_s11?: MoveSlotValue;
  move_s12?: MoveSlotValue;
  move_s13?: MoveSlotValue;
  move_s14?: MoveSlotValue;
  move_s21?: MoveSlotValue;
  move_s22?: MoveSlotValue;
  move_s23?: MoveSlotValue;
  move_s24?: MoveSlotValue;
  move_s1?: MoveSlotValue;
  move_s2?: MoveSlotValue;
  move_u1?: MoveSlotValue;
  move_p1?: MoveSlotValue;
  [key: string]: string | MoveSlotEntry | undefined;
}

/** @deprecated Prefer `images.move_*` as `{ name, image }`. Kept for overrides / gradual migration. */
export type PokemonSkillNames = Partial<
  Record<
    | "p1"
    | "s1"
    | "s2"
    | "u1"
    | "s11"
    | "s12"
    | "s13"
    | "s14"
    | "s21"
    | "s22"
    | "s23"
    | "s24",
    string
  >
>;

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
  /** @deprecated Use `images.move_*.{ name }` instead. */
  skillNames?: PokemonSkillNames;
  active: boolean;
  battleType: BattleType;
  stats?: PokemonStats;
  tags: Tag[];
  difficulty?: number;
}

/** Move slot identifier (e.g. s11 = first slot, first move). */
export type MoveSlotId =
  | "s11"
  | "s12"
  | "s13"
  | "s14"
  | "s21"
  | "s22"
  | "s23"
  | "s24"
  | "s1"
  | "s2"
  | "p1"
  | "u1";

/** All skill slot ids used on the roster (order: branches before base moves for stable `moves` list). */
export const POKEMON_MOVE_SLOT_IDS: readonly MoveSlotId[] = [
  "s11",
  "s12",
  "s13",
  "s14",
  "s21",
  "s22",
  "s23",
  "s24",
  "s1",
  "s2",
  "p1",
  "u1",
] as const;

/** Structured move data linked to a Pokémon. */
export interface Move {
  /** Pokémon identifier (slug from image path). */
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
