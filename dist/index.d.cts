export { Locale, getMapDescription, getMapName, getMoveName, getNeutralName, getPokemonName, getSpawnInfo, getSpawnInfoForSpawn, moveNameToKey } from './i18n/index.cjs';

/**
 * Battle role in Pokémon Unite (Attacker, Defender, etc.).
 * Use as const object for framework-agnostic usage.
 */
declare const BattleType: {
    readonly ATTACKER: "attacker";
    readonly DEFENDER: "defender";
    readonly ALLROUNDER: "allrounder";
    readonly SPEEDSTER: "speedster";
    readonly SUPPORTER: "supporter";
};
type BattleType = (typeof BattleType)[keyof typeof BattleType];
/**
 * Tags for filtering (role + attack style).
 */
declare const Tag: {
    readonly ATTACKER: "attacker";
    readonly DEFENDER: "defender";
    readonly ALLROUNDER: "allrounder";
    readonly SPEEDSTER: "speedster";
    readonly SUPPORTER: "supporter";
    readonly MELEE: "melee";
    readonly RANGED: "ranged";
};
type Tag = (typeof Tag)[keyof typeof Tag];

/** One move / passive / unite slot: display name + asset path (single source of truth). */
interface MoveSlotEntry {
    name: string;
    image: string;
}
/** Legacy: path string only. Preferred: `{ name, image }`. */
type MoveSlotValue = MoveSlotEntry | string;
/** Image paths for a Pokémon (relative to package root or baseUrl). */
interface PokemonImages {
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
type PokemonSkillNames = Partial<Record<"p1" | "s1" | "s2" | "u1" | "s11" | "s12" | "s13" | "s14" | "s21" | "s22" | "s23" | "s24", string>>;
/** In-game stat ratings (0.5–5). */
interface PokemonStats {
    offense: number;
    endurance: number;
    mobility: number;
    scoring: number;
    support: number;
}
/** A Pokémon Unite roster entry. */
interface Pokemon {
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
type MoveSlotId = "s11" | "s12" | "s13" | "s14" | "s21" | "s22" | "s23" | "s24" | "s1" | "s2" | "p1" | "u1";
/** All skill slot ids used on the roster (order: branches before base moves for stable `moves` list). */
declare const POKEMON_MOVE_SLOT_IDS: readonly MoveSlotId[];
/** Structured move data linked to a Pokémon. */
interface Move {
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
type MapResolution = "1" | "2" | "4";
/** Map/arena data. */
interface Map {
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
interface Neutral {
    id: string;
    /** Image path (relative to package root or baseUrl). */
    image: string;
    /** Display name in English (use getNeutralName for other locales). */
    name: string;
    /** Pokédex number (omit for non-Pokémon e.g. berries). */
    dex?: number;
}
/** A single spawn point on a map, linked to a neutral by neutralId. */
interface MapSpawn {
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

declare const pokemons: Array<Pokemon>;

declare const moves: Move[];

declare const maps: Map[];

declare const neutrals: Neutral[];

declare const spawns: MapSpawn[];

interface GetImageUrlOptions {
    /** Base URL for assets (e.g. CDN). No trailing slash. */
    baseUrl?: string;
}
/**
 * Returns the full or relative URL for a Pokémon image.
 * Use baseUrl for CDN: e.g. "https://cdn.jsdelivr.net/npm/unite-lib@1.0.0"
 */
declare function getImageUrl(pokemon: Pokemon, imageKey: keyof PokemonImages, options?: GetImageUrlOptions): string;
/**
 * Returns the image URL for a map, optionally at a given resolution (1x, 2x, 4x).
 * Falls back to map.image when resolution is omitted or not available.
 */
declare function getMapImageUrl(map: Map, resolution?: MapResolution, options?: GetImageUrlOptions): string;
/**
 * Returns spawns for a given map id (e.g. "map-groudon", "map-kyogre", "map-rayquaza").
 */
declare function getSpawnsByMap(mapId: string): MapSpawn[];
/**
 * Parses game clock "MM:SS" to seconds remaining (e.g. "10:00" → 600, "02:00" → 120).
 */
declare function parseGameClockToSeconds(clock: string): number;
/**
 * Returns whether a spawn is visible at the given game clock (seconds remaining).
 * Considers both spawnTime (spawn appears when clock ≤ spawnTime) and despawnTime
 * (spawn disappears when clock ≤ despawnTime, e.g. center Natu/Altaria when boss spawns at 02:00).
 */
declare function isSpawnVisibleAtGameClock(spawn: MapSpawn, gameClockSeconds: number): boolean;
/**
 * Returns spawns for a map that are visible at the given game clock (seconds remaining).
 * Use this when you need to show only spawns that have already appeared and not yet despawned.
 */
declare function getSpawnsByMapVisibleAt(mapId: string, gameClockSeconds: number): MapSpawn[];
/**
 * Returns the neutral by id, or undefined if not found.
 */
declare function getNeutralById(id: string): Neutral | undefined;
/**
 * Returns the image URL for a neutral (wild Pokémon or item).
 */
declare function getNeutralImageUrl(neutral: Neutral, options?: GetImageUrlOptions): string;
declare function getPokemonByName(name: string): Pokemon | undefined;
declare function getPokemonByDex(dex: number): Pokemon | undefined;
/**
 * Slug from roster image: "pokemons/roster-venusaur.png" -> "venusaur"
 * Use this slug with getPokemonName(id, locale) for i18n.
 */
declare function getPokemonSlug(pokemon: Pokemon): string;
/**
 * Resolved English skill names from `images.move_*.{ name }` and optional deprecated `skillNames` overrides.
 */
declare function getPokemonSkillNames(pokemon: Pokemon): PokemonSkillNames;
/**
 * Resolves one move slot to `{ name, image }`.
 * Supports legacy `images.move_*` as a plain string path.
 */
declare function resolveMoveSlot(pokemon: Pokemon, slotId: MoveSlotId): {
    name: string;
    image: string;
} | null;
declare function getPokemonBySlug(slug: string): Pokemon | undefined;
declare function getPokemonsByBattleType(battleType: BattleType): Pokemon[];
declare function getPokemonsByTag(tag: Tag): Pokemon[];
declare function getActivePokemons(): Pokemon[];

export { BattleType, type GetImageUrlOptions, type Map, type MapResolution, type MapSpawn, type Move, type MoveSlotEntry, type MoveSlotId, type MoveSlotValue, type Neutral, POKEMON_MOVE_SLOT_IDS, type Pokemon, type PokemonImages, type PokemonSkillNames, type PokemonStats, Tag, getActivePokemons, getImageUrl, getMapImageUrl, getNeutralById, getNeutralImageUrl, getPokemonByDex, getPokemonByName, getPokemonBySlug, getPokemonSkillNames, getPokemonSlug, getPokemonsByBattleType, getPokemonsByTag, getSpawnsByMap, getSpawnsByMapVisibleAt, isSpawnVisibleAtGameClock, maps, moves, neutrals, parseGameClockToSeconds, pokemons, resolveMoveSlot, spawns };
