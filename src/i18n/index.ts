import en from "./en";
import ptBR from "./pt-BR";
import jaJP from "./ja-JP";
import fr from "./fr";
import es from "./es";

export type { Locale } from "./locale";
import type { Locale } from "./locale";

/**
 * Stable slug for move display names (matches PokéAPI move identifiers when possible).
 * Locale maps use the key `move.<slug>`. Pass the English `images.move_*.{ name }` string.
 */
export function moveNameToKey(englishMoveName: string): string {
  const s = englishMoveName
    .trim()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
  return s
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Per-locale display names for moves missing from PokéAPI / the generated `move.*` blocks,
 * or to override a single locale. Key: `moveNameToKey(english roster name)` (no `move.` prefix).
 */
export const moveNameOverrides: Record<
  string,
  Partial<Record<Locale, string>>
> = {
  // "verdant-anger": { "pt-BR": "…", "ja-JP": "…", fr: "…", es: "…" },
};

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

/**
 * Localized move display name from the English roster label (`images.move_*.{ name }`).
 * Looks up `move.<slug>` in the locale maps (synced from PokéAPI via
 * `npm run sync:move-names-pokeapi`), then optional `moveNameOverrides` below.
 */
export function getMoveName(
  englishMoveName: string,
  locale: Locale = "en"
): string {
  if (!englishMoveName.trim()) return "";
  const slug = moveNameToKey(englishMoveName);
  const ovr = moveNameOverrides[slug]?.[locale];
  if (ovr) return ovr;
  const mapKey = `move.${slug}`;
  const map = locales[locale] ?? en;
  const hit = map[mapKey] ?? en[mapKey];
  if (hit) return hit;
  return englishMoveName;
}

/**
 * Returns the localized name for a battle item by id and locale.
 * Falls back to English, then to the id.
 */
export function getBattleItemName(id: string, locale: Locale = "en"): string {
  const key = `battle-item.${id}`;
  const map = locales[locale] ?? en;
  return map[key] ?? en[key] ?? id;
}

/**
 * Returns the localized name for a held item by id and locale.
 * Falls back to English, then to the id.
 */
export function getHeldItemName(id: string, locale: Locale = "en"): string {
  const key = `held-item.${id}`;
  const map = locales[locale] ?? en;
  return map[key] ?? en[key] ?? id;
}

export { en, ptBR, jaJP, fr, es };
