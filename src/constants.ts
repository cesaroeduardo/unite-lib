/**
 * Battle role in Pokémon Unite (Attacker, Defender, etc.).
 * Use as const object for framework-agnostic usage.
 */
export const BattleType = {
  ATTACKER: "attacker",
  DEFENDER: "defender",
  ALLROUNDER: "allrounder",
  SPEEDSTER: "speedster",
  SUPPORTER: "supporter",
} as const;

export type BattleType = (typeof BattleType)[keyof typeof BattleType];

/**
 * Tags for filtering (role + attack style).
 */
export const Tag = {
  ATTACKER: "attacker",
  DEFENDER: "defender",
  ALLROUNDER: "allrounder",
  SPEEDSTER: "speedster",
  SUPPORTER: "supporter",
  MELEE: "melee",
  RANGED: "ranged",
} as const;

export type Tag = (typeof Tag)[keyof typeof Tag];
