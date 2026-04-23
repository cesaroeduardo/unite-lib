export type MoveSlotEntry = {
  name: string;
  image: string;
};

export type MoveSlotValue = MoveSlotEntry | string;

export type PokemonSkillNames = Partial<
  Record<
    | "p1"
    | "s1"
    | "s2"
    | "u1"
    | "s11"
    | "s12"
    | "s13"
    | "s14"
    | "s21"
    | "s22"
    | "s23"
    | "s24",
    string
  >
>;

export type Pokemon = {
  id?: any;
  name?: string;
  dex?: number;
  skillNames?: PokemonSkillNames;
  images?: {
    main: string;
    big: string;
    complete?: string;
    move_s11?: MoveSlotValue;
    move_s12?: MoveSlotValue;
    move_s13?: MoveSlotValue;
    move_s14?: MoveSlotValue;
    move_s21?: MoveSlotValue;
    move_s22?: MoveSlotValue;
    move_s23?: MoveSlotValue;
    move_s24?: MoveSlotValue;
    move_s1?: MoveSlotValue;
    move_s2?: MoveSlotValue;
    move_u1?: MoveSlotValue;
    move_p1?: MoveSlotValue;
    [key: string]: string | MoveSlotEntry | undefined;
  };
  active?: boolean;
  picked?: number;
  stats?: {
    offense: number;
    endurance: number;
    mobility: number;
    scoring: number;
    support: number;
  };
  difficulty?: Difficulty;
  tags?: Array<Tag>;
  battleType?: BattleType;
};

export enum Tag {
  DEFENDER = "defender",
  RANGED = "ranged",
  SUPPORTER = "supporter",
  SPEEDSTER = "speedster",
  MELEE = "melee",
  ATTACKER = "attacker",
  ALLROUNDER = "all-rounder",
}

enum Difficulty {
  NOVICE = 1,
  INTERMEDIATE = 2,
  EXPERT = 3,
}

export enum BattleType {
  ATTACKER = "attacker",
  SPEEDSTER = "speedster",
  ALLROUNDER = "all-rounder",
  DEFENDER = "defender",
  SUPPORTER = "supporter",
}

export enum BattleTypeColor {
  ATTACKER = "#D96132",
  SPEEDSTER = "#2695CD",
  ALLROUNDER = "#B955BE",
  DEFENDER = "#9BD652",
  SUPPORTER = "#C78439",
}