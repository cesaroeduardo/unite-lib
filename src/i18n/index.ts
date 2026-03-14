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

/**
 * Returns the localized name for a neutral (wild Pokémon/item) by id and locale.
 * Falls back to English, then to the id.
 */
export function getNeutralName(
  neutralId: string,
  locale: Locale = "en"
): string {
  const map = locales[locale] ?? en;
  return map[neutralId] ?? en[neutralId] ?? neutralId;
}

/**
 * Returns the localized spawn info HTML by key and locale.
 * Key format: "spawn.info.<infoKey>". Falls back to English, then to empty string.
 */
export function getSpawnInfo(
  infoKey: string,
  locale: Locale = "en"
): string {
  const key = `spawn.info.${infoKey}`;
  const map = locales[locale] ?? en;
  return map[key] ?? en[key] ?? "";
}

/** MapSpawn with optional infoKey (from types). */
type SpawnLike = { infoKey?: string; info?: string };

/**
 * Returns the localized spawn info HTML for a spawn. Uses infoKey when set, else spawn.info.
 */
export function getSpawnInfoForSpawn(
  spawn: SpawnLike,
  locale: Locale = "en"
): string {
  if (spawn.infoKey) {
    const out = getSpawnInfo(spawn.infoKey, locale);
    if (out) return out;
  }
  return spawn.info ?? "";
}

export { en, ptBR, jaJP, fr, es };
