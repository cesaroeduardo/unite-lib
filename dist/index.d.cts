export { Locale, getPokemonName } from './i18n/index.cjs';

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

/** Image paths for a Pokémon (relative to package root or baseUrl). */
interface PokemonImages {
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
    active: boolean;
    battleType: BattleType;
    stats?: PokemonStats;
    tags: Tag[];
    difficulty?: number;
}
/** Move slot identifier (e.g. s11 = first slot, first move). */
type MoveSlotId = `s${11 | 12 | 13 | 21 | 22 | 23 | 24}`;
/** Structured move data linked to a Pokémon. */
interface Move {
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
interface Map {
    id: string;
    name: string;
    /** Image path (relative to package root or baseUrl). */
    image: string;
    /** Optional description. */
    description?: string;
}

declare const pokemons: Array<Pokemon>;

declare const moves: Move[];

declare const maps: Map[];

interface GetImageUrlOptions {
    /** Base URL for assets (e.g. CDN). No trailing slash. */
    baseUrl?: string;
}
/**
 * Returns the full or relative URL for a Pokémon image.
 * Use baseUrl for CDN: e.g. "https://cdn.jsdelivr.net/npm/unite-lib@1.0.0"
 */
declare function getImageUrl(pokemon: Pokemon, imageKey: keyof PokemonImages, options?: GetImageUrlOptions): string;
declare function getPokemonByName(name: string): Pokemon | undefined;
declare function getPokemonByDex(dex: number): Pokemon | undefined;
/**
 * Slug from roster image: "pokemons/roster-venusaur.png" -> "venusaur"
 */
declare function getPokemonBySlug(slug: string): Pokemon | undefined;
declare function getPokemonsByBattleType(battleType: BattleType): Pokemon[];
declare function getPokemonsByTag(tag: Tag): Pokemon[];
declare function getActivePokemons(): Pokemon[];

export { BattleType, type GetImageUrlOptions, type Map, type Move, type MoveSlotId, type Pokemon, type PokemonImages, type PokemonStats, Tag, getActivePokemons, getImageUrl, getPokemonByDex, getPokemonByName, getPokemonBySlug, getPokemonsByBattleType, getPokemonsByTag, maps, moves, pokemons };
