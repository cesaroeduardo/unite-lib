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
  ATTACKER = "linear-gradient(180deg, #B5393990 0%, #B5393950 100%)",
  SPEEDSTER = "linear-gradient(180deg, #2895D290 0%, #2895D250 100%)",
  ALLROUNDER = "linear-gradient(180deg, #BC56C390 0%, #BC56C350 100%)",
  DEFENDER = "linear-gradient(180deg, #9DD65890 0%, #9DD65850 100%)",
  SUPPORTER = "linear-gradient(180deg, #E4A55190 0%, #E4A55150 100%)",
  FLEX = "linear-gradient(180deg, #8B451390 0%, #8B451350 100%)",
  CASTER = "linear-gradient(180deg, #34343456 0%, #34343434 100%)",
  COACH = "linear-gradient(180deg, #34343456 0%, #34343434 100%)",
  ANALYST = "linear-gradient(180deg, #34343456 0%, #34343434 100%)",
  MANAGER = "linear-gradient(180deg, #34343456 0%, #34343434 100%)",
}