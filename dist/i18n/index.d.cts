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
 * Stable slug for move display names (matches PokéAPI move identifiers when possible).
 * Locale maps use the key `move.<slug>`. Pass the English `images.move_*.{ name }` string.
 */
declare function moveNameToKey(englishMoveName: string): string;
/**
 * Per-locale display names for moves missing from PokéAPI / the generated `move.*` blocks,
 * or to override a single locale. Key: `moveNameToKey(english roster name)` (no `move.` prefix).
 */
declare const moveNameOverrides: Record<string, Partial<Record<Locale, string>>>;
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
/**
 * Localized move display name from the English roster label (`images.move_*.{ name }`).
 * Looks up `move.<slug>` in the locale maps (synced from PokéAPI via
 * `npm run sync:move-names-pokeapi`), then optional `moveNameOverrides` below.
 */
declare function getMoveName(englishMoveName: string, locale?: Locale): string;

export { type Locale, names as en, es, fr, getMapDescription, getMapName, getMoveName, getNeutralName, getPokemonName, getSpawnInfo, getSpawnInfoForSpawn, jaJP, moveNameOverrides, moveNameToKey, ptBR };
