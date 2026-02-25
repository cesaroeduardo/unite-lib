// Types
export type {
  Pokemon,
  PokemonImages,
  PokemonStats,
  Move,
  MoveSlotId,
  Map,
} from "./types";

// Constants (BattleType and Tag: use for values; types come from ./types or inferred)
export { BattleType, Tag } from "./constants";

// Data
export { default as pokemons } from "./pokemons";
export { default as moves } from "./moves";
export { default as maps } from "./maps";

// Utils
export {
  getImageUrl,
  getPokemonByName,
  getPokemonByDex,
  getPokemonBySlug,
  getPokemonsByBattleType,
  getPokemonsByTag,
  getActivePokemons,
} from "./utils";
export type { GetImageUrlOptions } from "./utils";

// i18n (also available via "unite-lib/i18n")
export { getPokemonName } from "./i18n";
export type { Locale } from "./i18n";
