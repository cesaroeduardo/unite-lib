export type Pokemon = {
  id?: any;
  name?: string;
  dex?: number;
  images?: {
    main: string;
    big: string;
    complete?: string;
    move_s11?: string;
    move_s12?: string;
    move_s13?: string;
    move_s14?: string;
    move_s21?: string;
    move_s22?: string;
    move_s23?: string;
    move_s24?: string;
    [key: string]: string | undefined;
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