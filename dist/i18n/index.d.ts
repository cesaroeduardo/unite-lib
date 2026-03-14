declare const names: Record<string, string>;

/**
 * Portuguese (Brazil). Same as English for Pokémon names; override here only when pt-BR differs.
 */
declare const ptBR: Record<string, string>;

/**
 * Japanese (Japan) Pokémon names — official localized names.
 */
declare const jaJP: Record<string, string>;

/**
 * French (France) Pokémon names — official localized names.
 */
declare const fr: Record<string, string>;

/**
 * Spanish (Spain/LATAM) Pokémon names — official localized names.
 */
declare const es: Record<string, string>;

type Locale = "en" | "pt-BR" | "ja-JP" | "fr" | "es";
/**
 * Returns the display name for a Pokémon by slug/id and locale.
 * Falls back to English if the locale is missing the key, then to the id.
 */
declare function getPokemonName(id: string, locale?: Locale): string;
/**
 * Returns the localized name for a map by id and locale.
 * Falls back to English, then to the id.
 */
declare function getMapName(mapId: string, locale?: Locale): string;
/**
 * Returns the localized description for a map by id and locale.
 * Falls back to English, then to empty string.
 */
declare function getMapDescription(mapId: string, locale?: Locale): string;
/**
 * Returns the localized name for a neutral (wild Pokémon/item) by id and locale.
 * Falls back to English, then to the id.
 */
declare function getNeutralName(neutralId: string, locale?: Locale): string;
/**
 * Returns the localized spawn info HTML by key and locale.
 * Key format: "spawn.info.<infoKey>". Falls back to English, then to empty string.
 */
declare function getSpawnInfo(infoKey: string, locale?: Locale): string;
/** MapSpawn with optional infoKey (from types). */
type SpawnLike = {
    infoKey?: string;
    info?: string;
};
/**
 * Returns the localized spawn info HTML for a spawn. Uses infoKey when set, else spawn.info.
 */
declare function getSpawnInfoForSpawn(spawn: SpawnLike, locale?: Locale): string;

export { type Locale, names as en, es, fr, getMapDescription, getMapName, getNeutralName, getPokemonName, getSpawnInfo, getSpawnInfoForSpawn, jaJP, ptBR };
