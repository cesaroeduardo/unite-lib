// Types
export type {
  Pokemon,
  PokemonImages,
  PokemonStats,
  Move,
  MoveSlotId,
  Map,
  MapResolution,
  Neutral,
  MapSpawn,
} from "./types";

// Constants (BattleType and Tag: use for values; types come from ./types or inferred)
export { BattleType, Tag } from "./constants";

// Data
export { default as pokemons } from "./pokemons";
export { default as moves } from "./moves";
export { default as maps } from "./maps";
export { default as neutrals } from "./neutrals";
export { default as spawns } from "./spawns";

// Utils
export {
  getImageUrl,
  getMapImageUrl,
  getNeutralImageUrl,
  getSpawnsByMap,
  getNeutralById,
  getPokemonByName,
  getPokemonByDex,
  getPokemonBySlug,
  getPokemonsByBattleType,
  getPokemonsByTag,
  getActivePokemons,
} from "./utils";
export type { GetImageUrlOptions } from "./utils";

// i18n (also available via "unite-lib/i18n")
export {
  getPokemonName,
  getMapName,
  getMapDescription,
  getNeutralName,
  getSpawnInfo,
  getSpawnInfoForSpawn,
} from "./i18n";
export type { Locale } from "./i18n";
