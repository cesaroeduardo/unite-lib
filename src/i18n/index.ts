import en from "./en";
import ptBR from "./pt-BR";
import jaJP from "./ja-JP";
import fr from "./fr";
import es from "./es";

export type Locale = "en" | "pt-BR" | "ja-JP" | "fr" | "es";

const locales: Record<Locale, Record<string, string>> = {
  en,
  "pt-BR": ptBR,
  "ja-JP": jaJP,
  fr,
  es,
};

/**
 * Returns the display name for a Pokémon by slug/id and locale.
 * Falls back to English if the locale is missing the key, then to the id.
 */
export function getPokemonName(id: string, locale: Locale = "en"): string {
  const map = locales[locale] ?? en;
  return map[id] ?? en[id] ?? id;
}

/**
 * Returns the localized name for a map by id and locale.
 * Falls back to English, then to the id.
 */
export function getMapName(mapId: string, locale: Locale = "en"): string {
  const map = locales[locale] ?? en;
  return map[mapId] ?? en[mapId] ?? mapId;
}

/**
 * Returns the localized description for a map by id and locale.
 * Falls back to English, then to empty string.
 */
export function getMapDescription(
  mapId: string,
  locale: Locale = "en"
): string {
  const key = `${mapId}.description`;
  const map = locales[locale] ?? en;
  return map[key] ?? en[key] ?? "";
}

export { en, ptBR, jaJP, fr, es };
