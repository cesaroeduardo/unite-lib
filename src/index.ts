// Types
export type {
  Pokemon,
  PokemonImages,
  PokemonSkillNames,
  PokemonStats,
  Move,
  MoveSlotEntry,
  MoveSlotValue,
  MoveSlotId,
  Map,
  MapResolution,
  Neutral,
  MapSpawn,
  BattleItem,
  HeldItem,
} from "./types";

// Constants (BattleType and Tag: use for values; types come from ./types or inferred)
export { BattleType, Tag } from "./constants";
export { POKEMON_MOVE_SLOT_IDS } from "./types";

// Data
export { default as pokemons } from "./pokemons";
export { default as moves } from "./moves";
export { default as maps } from "./maps";
export { default as neutrals } from "./neutrals";
export { default as spawns } from "./spawns";
export { default as battleItems } from "./battleItems";
export { default as heldItems } from "./heldItems";

// Utils
export {
  getImageUrl,
  getMapImageUrl,
  getNeutralImageUrl,
  getSpawnsByMap,
  getSpawnsByMapVisibleAt,
  getNeutralById,
  getPokemonByName,
  getPokemonByDex,
  getPokemonSlug,
  getPokemonBySlug,
  getPokemonSkillNames,
  resolveMoveSlot,
  getPokemonsByBattleType,
  getPokemonsByTag,
  getActivePokemons,
  parseGameClockToSeconds,
  isSpawnVisibleAtGameClock,
  getBattleItemById,
  getHeldItemById,
  getHeldItemsByPokemon,
  getExclusiveHeldItems,
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
  getMoveName,
  moveNameToKey,
  getBattleItemName,
  getHeldItemName,
} from "./i18n";
export type { Locale } from "./i18n";
