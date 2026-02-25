declare const names: Record<string, string>;

/**
 * Portuguese (Brazil) names. Falls back to English for unmapped entries.
 * Add or override keys as needed.
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

export { type Locale, names as en, es, fr, getPokemonName, jaJP, ptBR };
