"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/i18n/index.ts
var i18n_exports = {};
__export(i18n_exports, {
  en: () => en_default,
  es: () => es_default,
  fr: () => fr_default,
  getPokemonName: () => getPokemonName,
  jaJP: () => ja_JP_default,
  ptBR: () => pt_BR_default
});
module.exports = __toCommonJS(i18n_exports);

// src/constants.ts
var BattleType = {
  ATTACKER: "attacker",
  DEFENDER: "defender",
  ALLROUNDER: "allrounder",
  SPEEDSTER: "speedster",
  SUPPORTER: "supporter"
};
var Tag = {
  ATTACKER: "attacker",
  DEFENDER: "defender",
  ALLROUNDER: "allrounder",
  SPEEDSTER: "speedster",
  SUPPORTER: "supporter",
  MELEE: "melee",
  RANGED: "ranged"
};

// src/pokemons.ts
var pokemons = [
  {
    "name": "Venusaur",
    "dex": 3,
    "images": {
      "main": "pokemons/roster-venusaur.png",
      "big": "pokemons/roster-venusaur-2x.png",
      "complete": "pokemons/stat-venusaur.png",
      "move_s11": "moves/venusaur_s11.png",
      "move_s12": "moves/venusaur_s12.png",
      "move_s21": "moves/venusaur_s21.png",
      "move_s22": "moves/venusaur_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4.5,
      "endurance": 2,
      "mobility": 2,
      "scoring": 2.5,
      "support": 1
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Charizard",
    "dex": 6,
    "images": {
      "main": "pokemons/roster-charizard.png",
      "big": "pokemons/roster-charizard-2x.png",
      "complete": "pokemons/stat-charizard.png",
      "move_s11": "moves/charizard_s11.png",
      "move_s12": "moves/charizard_s12.png",
      "move_s21": "moves/charizard_s21.png",
      "move_s22": "moves/charizard_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3.5,
      "endurance": 3,
      "mobility": 2.5,
      "scoring": 3,
      "support": 0.5
    },
    "difficulty": 1,
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ]
  },
  {
    "name": "Mega Charizard X",
    "dex": 6.1,
    "images": {
      "main": "pokemons/roster-mega-charizard-x.png",
      "big": "pokemons/roster-mega-charizard-x-2x.png",
      "complete": "pokemons/stat-mega-charizard-x.png",
      "move_s11": "moves/mega-charizard_s11.png",
      "move_s21": "moves/mega-charizard_s21.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 3.5,
      "mobility": 2.5,
      "scoring": 3,
      "support": 0.5
    },
    "difficulty": 1,
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ]
  },
  {
    "name": "Mega Charizard Y",
    "dex": 6.2,
    "images": {
      "main": "pokemons/roster-mega-charizard-y.png",
      "big": "pokemons/roster-mega-charizard-y-2x.png",
      "complete": "pokemons/stat-mega-charizard-y.png",
      "move_s11": "moves/mega-charizard_s12.png",
      "move_s21": "moves/mega-charizard_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 3,
      "mobility": 4,
      "scoring": 3,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Blastoise",
    "dex": 9,
    "images": {
      "main": "pokemons/roster-blastoise.png",
      "big": "pokemons/roster-blastoise-2x.png",
      "complete": "pokemons/stat-blastoise.png",
      "move_s11": "moves/blastoise_s11.png",
      "move_s12": "moves/blastoise_s12.png",
      "move_s21": "moves/blastoise_s21.png",
      "move_s22": "moves/blastoise_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "tags": [
      Tag.DEFENDER,
      Tag.RANGED
    ],
    "difficulty": 2,
    "stats": {
      "offense": 2,
      "endurance": 3.5,
      "mobility": 2,
      "scoring": 2,
      "support": 3
    }
  },
  {
    "name": "Pikachu",
    "dex": 25,
    "images": {
      "main": "pokemons/roster-pikachu.png",
      "big": "pokemons/roster-pikachu-2x.png",
      "complete": "pokemons/stat-pikachu.png",
      "move_s11": "moves/pikachu_s11.png",
      "move_s12": "moves/pikachu_s12.png",
      "move_s21": "moves/pikachu_s21.png",
      "move_s22": "moves/pikachu_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4.5,
      "endurance": 1.5,
      "mobility": 2.5,
      "scoring": 2,
      "support": 1.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Alolan Raichu",
    "dex": 26,
    "images": {
      "main": "pokemons/roster-alolan-raichu.png",
      "big": "pokemons/roster-alolan-raichu-2x.png",
      "complete": "pokemons/stat-alolan-raichu.png",
      "move_s11": "moves/alolan-raichu_s11.png",
      "move_s12": "moves/alolan-raichu_s12.png",
      "move_s21": "moves/alolan-raichu_s21.png",
      "move_s22": "moves/alolan-raichu_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 1.5,
      "mobility": 3.5,
      "scoring": 3,
      "support": 1
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Clefable",
    "dex": 36,
    "images": {
      "main": "pokemons/roster-clefable.png",
      "big": "pokemons/roster-clefable-2x.png",
      "complete": "pokemons/stat-clefable.png",
      "move_s11": "moves/clefable_s11.png",
      "move_s12": "moves/clefable_s12.png",
      "move_s21": "moves/clefable_s21.png",
      "move_s22": "moves/clefable_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 2,
      "endurance": 3,
      "mobility": 1.5,
      "scoring": 1.5,
      "support": 4.5
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Alolan Ninetales",
    "dex": 38,
    "images": {
      "main": "pokemons/roster-alolan-ninetales.png",
      "big": "pokemons/roster-alolan-ninetales-2x.png",
      "complete": "pokemons/stat-alolan-ninetales.png",
      "move_s11": "moves/alolan-ninetales_s11.png",
      "move_s12": "moves/alolan-ninetales_s12.png",
      "move_s21": "moves/alolan-ninetales_s21.png",
      "move_s22": "moves/alolan-ninetales_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 1.5,
      "mobility": 1.5,
      "scoring": 2.5,
      "support": 3
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Wigglytuff",
    "dex": 40,
    "images": {
      "main": "pokemons/roster-wigglytuff.png",
      "big": "pokemons/roster-wigglytuff-2x.png",
      "complete": "pokemons/stat-wigglytuff.png",
      "move_s11": "moves/wigglytuff_s11.png",
      "move_s12": "moves/wigglytuff_s12.png",
      "move_s21": "moves/wigglytuff_s21.png",
      "move_s22": "moves/wigglytuff_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 1,
      "endurance": 2.5,
      "mobility": 2.5,
      "scoring": 2,
      "support": 4.5
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Meowth",
    "dex": 52,
    "images": {
      "main": "pokemons/roster-meowth.png",
      "big": "pokemons/roster-meowth-2x.png",
      "complete": "pokemons/stat-meowth.png",
      "move_s11": "moves/meowth_s11.png",
      "move_s12": "moves/meowth_s12.png",
      "move_s21": "moves/meowth_s21.png",
      "move_s22": "moves/meowth_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 2,
      "endurance": 2,
      "mobility": 4,
      "scoring": 3,
      "support": 2
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Psyduck",
    "dex": 54,
    "images": {
      "main": "pokemons/roster-psyduck.png",
      "big": "pokemons/roster-psyduck-2x.png",
      "complete": "pokemons/stat-psyduck.png",
      "move_s11": "moves/psyduck_s11.png",
      "move_s12": "moves/psyduck_s12.png",
      "move_s21": "moves/psyduck_s21.png",
      "move_s22": "moves/psyduck_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 4,
      "endurance": 1,
      "mobility": 2,
      "scoring": 1,
      "support": 3
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Machamp",
    "dex": 68,
    "images": {
      "main": "pokemons/roster-machamp.png",
      "big": "pokemons/roster-machamp-2x.png",
      "complete": "pokemons/stat-machamp.png",
      "move_s11": "moves/machamp_s11.png",
      "move_s12": "moves/machamp_s12.png",
      "move_s21": "moves/machamp_s21.png",
      "move_s22": "moves/machamp_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 2.5,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 1
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Galarian Rapidash",
    "dex": 78,
    "images": {
      "main": "pokemons/roster-galarian-rapidash.png",
      "big": "pokemons/roster-galarian-rapidash-2x.png",
      "complete": "pokemons/stat-galarian-rapidash.png",
      "move_s11": "moves/galarian-rapidash_s11.png",
      "move_s12": "moves/galarian-rapidash_s12.png",
      "move_s21": "moves/galarian-rapidash_s21.png",
      "move_s22": "moves/galarian-rapidash_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 4,
      "endurance": 4,
      "mobility": 4,
      "scoring": 2,
      "support": 1
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Slowbro",
    "dex": 80,
    "images": {
      "main": "pokemons/roster-slowbro.png",
      "big": "pokemons/roster-slowbro-2x.png",
      "complete": "pokemons/stat-slowbro.png",
      "move_s11": "moves/slowbro_s11.png",
      "move_s12": "moves/slowbro_s12.png",
      "move_s21": "moves/slowbro_s21.png",
      "move_s22": "moves/slowbro_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 1.5,
      "endurance": 4,
      "mobility": 1.5,
      "scoring": 1.5,
      "support": 4
    },
    "tags": [
      Tag.DEFENDER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Dodrio",
    "dex": 85,
    "images": {
      "main": "pokemons/roster-dodrio.png",
      "big": "pokemons/roster-dodrio-2x.png",
      "complete": "pokemons/stat-dodrio.png",
      "move_s11": "moves/dodrio_s11.png",
      "move_s12": "moves/dodrio_s12.png",
      "move_s21": "moves/dodrio_s21.png",
      "move_s22": "moves/dodrio_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 3,
      "endurance": 2,
      "mobility": 4,
      "scoring": 4,
      "support": 0.5
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Gengar",
    "dex": 94,
    "images": {
      "main": "pokemons/roster-gengar.png",
      "big": "pokemons/roster-gengar-2x.png",
      "complete": "pokemons/stat-gengar.png",
      "move_s11": "moves/gengar_s11.png",
      "move_s12": "moves/gengar_s12.png",
      "move_s21": "moves/gengar_s21.png",
      "move_s22": "moves/gengar_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 3.5,
      "endurance": 2,
      "mobility": 4,
      "scoring": 3,
      "support": 0.5
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Blissey",
    "dex": 242,
    "images": {
      "main": "pokemons/roster-blissey.png",
      "big": "pokemons/roster-blissey-2x.png",
      "complete": "pokemons/stat-blissey.png",
      "move_s11": "moves/blissey_s11.png",
      "move_s12": "moves/blissey_s12.png",
      "move_s21": "moves/blissey_s21.png",
      "move_s22": "moves/blissey_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 1,
      "endurance": 3.5,
      "mobility": 1.5,
      "scoring": 1.5,
      "support": 4.5
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Mr. Mime",
    "dex": 122,
    "images": {
      "main": "pokemons/roster-mr-mime.png",
      "big": "pokemons/roster-mr-mime-2x.png",
      "complete": "pokemons/stat-mr-mime.png",
      "move_s11": "moves/mr-mime_s11.png",
      "move_s12": "moves/mr-mime_s12.png",
      "move_s21": "moves/mr-mime_s21.png",
      "move_s22": "moves/mr-mime_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "tags": [Tag.SUPPORTER, Tag.RANGED]
  },
  {
    "name": "Scizor",
    "dex": 212,
    "images": {
      "main": "pokemons/roster-scizor.png",
      "big": "pokemons/roster-scizor-2x.png",
      "complete": "pokemons/stat-scizor.png",
      "move_s11": "moves/scizor_s11.png",
      "move_s12": "moves/scizor_s12.png",
      "move_s21": "moves/scizor_s21.png",
      "move_s22": "moves/scizor_s22.png",
      "move_s23": "moves/scizor_s23.png",
      "move_s24": "moves/scizor_s24.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4.5,
      "endurance": 2.5,
      "mobility": 4.5,
      "scoring": 2.5,
      "support": 1
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Gyarados",
    "dex": 130,
    "images": {
      "main": "pokemons/roster-gyarados.png",
      "big": "pokemons/roster-gyarados-2x.png",
      "complete": "pokemons/stat-gyarados.png",
      "move_s11": "moves/gyarados_s11.png",
      "move_s12": "moves/gyarados_s12.png",
      "move_s21": "moves/gyarados_s21.png",
      "move_s22": "moves/gyarados_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4.5,
      "endurance": 2.5,
      "mobility": 4.5,
      "scoring": 2.5,
      "support": 1
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Mega Gyarados",
    "dex": 130.1,
    "images": {
      "main": "pokemons/roster-mega-gyarados.png",
      "big": "pokemons/roster-mega-gyarados-2x.png",
      "complete": "pokemons/stat-mega-gyarados.png",
      "move_s11": "moves/mega-gyarados_s11.png",
      "move_s21": "moves/mega-gyarados_s21.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4.5,
      "endurance": 3.5,
      "mobility": 2.5,
      "scoring": 2,
      "support": 1.5
    },
    "difficulty": 1,
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ]
  },
  {
    "name": "Lapras",
    "dex": 131,
    "images": {
      "main": "pokemons/roster-lapras.png",
      "big": "pokemons/roster-lapras-2x.png",
      "complete": "pokemons/stat-lapras.png",
      "move_s11": "moves/lapras_s11.png",
      "move_s12": "moves/lapras_s12.png",
      "move_s21": "moves/lapras_s21.png",
      "move_s22": "moves/lapras_s22.png"
    },
    "active": true,
    "tags": [
      Tag.DEFENDER,
      Tag.RANGED
    ],
    "difficulty": 2,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 3,
      "endurance": 3.5,
      "mobility": 2,
      "scoring": 2,
      "support": 3
    }
  },
  {
    "name": "Vaporeon",
    "dex": 134,
    "images": {
      "main": "pokemons/roster-vaporeon.png",
      "big": "pokemons/roster-vaporeon-2x.png",
      "complete": "pokemons/stat-vaporeon.png",
      "move_s11": "moves/vaporeon_s11.png",
      "move_s12": "moves/vaporeon_s12.png",
      "move_s21": "moves/vaporeon_s21.png",
      "move_s22": "moves/vaporeon_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 2,
      "endurance": 4,
      "mobility": 3,
      "scoring": 2,
      "support": 4
    },
    "tags": [
      Tag.DEFENDER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Snorlax",
    "dex": 143,
    "images": {
      "main": "pokemons/roster-snorlax.png",
      "big": "pokemons/roster-snorlax-2x.png",
      "complete": "pokemons/stat-snorlax.png",
      "move_s11": "moves/snorlax_s11.png",
      "move_s12": "moves/snorlax_s12.png",
      "move_s21": "moves/snorlax_s21.png",
      "move_s22": "moves/snorlax_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 1.5,
      "endurance": 5,
      "mobility": 2,
      "scoring": 1.5,
      "support": 2.5
    },
    "tags": [
      Tag.DEFENDER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Dragonite",
    "dex": 149,
    "images": {
      "main": "pokemons/roster-dragonite.png",
      "big": "pokemons/roster-dragonite-2x.png",
      "complete": "pokemons/stat-dragonite.png",
      "move_s11": "moves/dragonite_s11.png",
      "move_s12": "moves/dragonite_s12.png",
      "move_s21": "moves/dragonite_s21.png",
      "move_s22": "moves/dragonite_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 2.5,
      "mobility": 2.5,
      "scoring": 3,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Mewtwo X",
    "dex": 150,
    "images": {
      "main": "pokemons/roster-mewtwox.png",
      "big": "pokemons/roster-mewtwox-2x.png",
      "complete": "pokemons/stat-mewtwox.png",
      "move_s11": "moves/mewtwox_s11.png",
      "move_s12": "moves/mewtwox_s12.png",
      "move_s21": "moves/mewtwox_s21.png",
      "move_s22": "moves/mewtwox_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 4,
      "mobility": 3,
      "scoring": 2,
      "support": 2
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Mewtwo Y",
    "dex": 150,
    "images": {
      "main": "pokemons/roster-mewtwoy.png",
      "big": "pokemons/roster-mewtwoy-2x.png",
      "complete": "pokemons/stat-mewtwoy.png",
      "move_s11": "moves/mewtwoy_s11.png",
      "move_s12": "moves/mewtwoy_s12.png",
      "move_s21": "moves/mewtwoy_s21.png",
      "move_s22": "moves/mewtwoy_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 5,
      "endurance": 3,
      "mobility": 3.5,
      "scoring": 2,
      "support": 2
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Mew",
    "dex": 151,
    "images": {
      "main": "pokemons/roster-mew.png",
      "big": "pokemons/roster-mew-2x.png",
      "complete": "pokemons/stat-mew.png",
      "move_s11": "moves/mew_s11.png",
      "move_s12": "moves/mew_s12.png",
      "move_s13": "moves/mew_s13.png",
      "move_s21": "moves/mew_s21.png",
      "move_s22": "moves/mew_s22.png",
      "move_s23": "moves/mew_s23.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 2,
      "mobility": 3,
      "scoring": 2,
      "support": 3
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Azumarill",
    "dex": 184,
    "images": {
      "main": "pokemons/roster-azumarill.png",
      "big": "pokemons/roster-azumarill-2x.png",
      "complete": "pokemons/stat-azumarill.png",
      "move_s11": "moves/azumarill_s11.png",
      "move_s12": "moves/azumarill_s12.png",
      "move_s21": "moves/azumarill_s21.png",
      "move_s22": "moves/azumarill_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3,
      "endurance": 3,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Espeon",
    "dex": 196,
    "images": {
      "main": "pokemons/roster-espeon.png",
      "big": "pokemons/roster-espeon-2x.png",
      "complete": "pokemons/stat-espeon.png",
      "move_s11": "moves/espeon_s11.png",
      "move_s12": "moves/espeon_s12.png",
      "move_s21": "moves/espeon_s21.png",
      "move_s22": "moves/espeon_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 2,
      "mobility": 1.5,
      "scoring": 2,
      "support": 3
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Umbreon",
    "dex": 197,
    "images": {
      "main": "pokemons/roster-umbreon.png",
      "big": "pokemons/roster-umbreon-2x.png",
      "complete": "pokemons/stat-umbreon.png",
      "move_s11": "moves/umbreon_s11.png",
      "move_s12": "moves/umbreon_s12.png",
      "move_s21": "moves/umbreon_s21.png",
      "move_s22": "moves/umbreon_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "tags": [Tag.DEFENDER, Tag.MELEE]
  },
  {
    "name": "Mamoswine",
    "dex": 473,
    "images": {
      "main": "pokemons/roster-mamoswine.png",
      "big": "pokemons/roster-mamoswine-2x.png",
      "complete": "pokemons/stat-mamoswine.png",
      "move_s11": "moves/mamoswine_s11.png",
      "move_s12": "moves/mamoswine_s12.png",
      "move_s21": "moves/mamoswine_s21.png",
      "move_s22": "moves/mamoswine_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 2.5,
      "endurance": 4,
      "mobility": 2,
      "scoring": 1.5,
      "support": 2.5
    },
    "tags": [
      Tag.DEFENDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Suicune",
    "dex": 245,
    "images": {
      "main": "pokemons/roster-suicune.png",
      "big": "pokemons/roster-suicune-2x.png",
      "complete": "pokemons/stat-suicune.png",
      "move_s11": "moves/suicune_s11.png",
      "move_s12": "moves/suicune_s12.png",
      "move_s21": "moves/suicune_s21.png",
      "move_s22": "moves/suicune_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 5,
      "endurance": 2.5,
      "mobility": 2.5,
      "scoring": 2,
      "support": 2
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Tyranitar",
    "dex": 248,
    "images": {
      "main": "pokemons/roster-tyranitar.png",
      "big": "pokemons/roster-tyranitar-2x.png",
      "complete": "pokemons/stat-tyranitar.png",
      "move_s11": "moves/tyranitar_s11.png",
      "move_s12": "moves/tyranitar_s12.png",
      "move_s21": "moves/tyranitar_s21.png",
      "move_s22": "moves/tyranitar_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 4,
      "mobility": 2,
      "scoring": 1.5,
      "support": 1
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Ho-Oh",
    "dex": 250,
    "images": {
      "main": "pokemons/roster-ho-oh.png",
      "big": "pokemons/roster-ho-oh-2x.png",
      "complete": "pokemons/stat-ho-oh.png",
      "move_s11": "moves/ho-oh_s11.png",
      "move_s12": "moves/ho-oh_s12.png",
      "move_s21": "moves/ho-oh_s21.png",
      "move_s22": "moves/ho-oh_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 3,
      "endurance": 4,
      "mobility": 2,
      "scoring": 1,
      "support": 3
    },
    "tags": [
      Tag.DEFENDER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Blaziken",
    "dex": 257,
    "images": {
      "main": "pokemons/roster-blaziken.png",
      "big": "pokemons/roster-blaziken-2x.png",
      "complete": "pokemons/stat-blaziken.png",
      "move_s11": "moves/blaziken_s11.png",
      "move_s12": "moves/blaziken_s12.png",
      "move_s21": "moves/blaziken_s21.png",
      "move_s22": "moves/blaziken_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 2.5,
      "mobility": 4,
      "scoring": 1,
      "support": 0.5
    },
    "tags": [
      Tag.MELEE,
      Tag.ALLROUNDER
    ],
    "difficulty": 3
  },
  {
    "name": "Gardevoir",
    "dex": 282,
    "images": {
      "main": "pokemons/roster-gardevoir.png",
      "big": "pokemons/roster-gardevoir-2x.png",
      "complete": "pokemons/stat-gardevoir.png",
      "move_s11": "moves/gardevoir_s11.png",
      "move_s12": "moves/gardevoir_s12.png",
      "move_s21": "moves/gardevoir_s21.png",
      "move_s22": "moves/gardevoir_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4.5,
      "endurance": 1.5,
      "mobility": 1.5,
      "scoring": 3,
      "support": 1.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Sableye",
    "dex": 302,
    "images": {
      "main": "pokemons/roster-sableye.png",
      "big": "pokemons/roster-sableye-2x.png",
      "complete": "pokemons/stat-sableye.png",
      "move_s11": "moves/sableye_s11.png",
      "move_s12": "moves/sableye_s12.png",
      "move_s21": "moves/sableye_s21.png",
      "move_s22": "moves/sableye_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 1,
      "endurance": 2.5,
      "mobility": 2.5,
      "scoring": 3.5,
      "support": 3.5
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Absol",
    "dex": 359,
    "images": {
      "main": "pokemons/roster-absol.png",
      "big": "pokemons/roster-absol-2x.png",
      "complete": "pokemons/stat-absol.png",
      "move_s11": "moves/absol_s11.png",
      "move_s12": "moves/absol_s12.png",
      "move_s21": "moves/absol_s21.png",
      "move_s22": "moves/absol_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 3.5,
      "endurance": 2,
      "mobility": 4,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Metagross",
    "dex": 376,
    "images": {
      "main": "pokemons/roster-metagross.png",
      "big": "pokemons/roster-metagross-2x.png",
      "complete": "pokemons/stat-metagross.png",
      "move_s11": "moves/metagross_s11.png",
      "move_s12": "moves/metagross_s12.png",
      "move_s21": "moves/metagross_s21.png",
      "move_s22": "moves/metagross_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3.5,
      "endurance": 3,
      "mobility": 2.5,
      "scoring": 3,
      "support": 0.5
    },
    "difficulty": 2,
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ]
  },
  {
    "name": "Latias",
    "dex": 380,
    "images": {
      "main": "pokemons/roster-latias.png",
      "big": "pokemons/roster-latias-2x.png",
      "complete": "pokemons/stat-latias.png",
      "move_s11": "moves/latias_s11.png",
      "move_s12": "moves/latias_s12.png",
      "move_s21": "moves/latias_s21.png",
      "move_s22": "moves/latias_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 4,
      "endurance": 1.5,
      "mobility": 4,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Latios",
    "dex": 381,
    "images": {
      "main": "pokemons/roster-latios.png",
      "big": "pokemons/roster-latios-2x.png",
      "complete": "pokemons/stat-latios.png",
      "move_s11": "moves/latios_s11.png",
      "move_s12": "moves/latios_s12.png",
      "move_s21": "moves/latios_s21.png",
      "move_s22": "moves/latios_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 1.5,
      "mobility": 4,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Empoleon",
    "dex": 395,
    "images": {
      "main": "pokemons/roster-empoleon.png",
      "big": "pokemons/roster-empoleon-2x.png",
      "complete": "pokemons/stat-empoleon.png",
      "move_s11": "moves/empoleon_s11.png",
      "move_s12": "moves/empoleon_s12.png",
      "move_s21": "moves/empoleon_s21.png",
      "move_s22": "moves/empoleon_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4.5,
      "endurance": 3.5,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 1.5
    },
    "difficulty": 2,
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ]
  },
  {
    "name": "Garchomp",
    "dex": 445,
    "images": {
      "main": "pokemons/roster-garchomp.png",
      "big": "pokemons/roster-garchomp-2x.png",
      "complete": "pokemons/stat-garchomp.png",
      "move_s11": "moves/garchomp_s11.png",
      "move_s12": "moves/garchomp_s12.png",
      "move_s21": "moves/garchomp_s21.png",
      "move_s22": "moves/garchomp_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3.5,
      "endurance": 3.5,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Lucario",
    "dex": 448,
    "images": {
      "main": "pokemons/roster-lucario.png",
      "big": "pokemons/roster-lucario-2x.png",
      "complete": "pokemons/stat-lucario.png",
      "move_s11": "moves/lucario_s11.png",
      "move_s12": "moves/lucario_s12.png",
      "move_s21": "moves/lucario_s21.png",
      "move_s22": "moves/lucario_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3,
      "endurance": 2.5,
      "mobility": 3.5,
      "scoring": 3,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Mega Lucario",
    "dex": 448.1,
    "images": {
      "main": "pokemons/roster-mega-lucario.png",
      "big": "pokemons/roster-mega-lucario-2x.png",
      "complete": "pokemons/stat-mega-lucario.png",
      "move_s11": "moves/mega-lucario_s11.png",
      "move_s21": "moves/mega-lucario_s21.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4.5,
      "endurance": 2,
      "mobility": 3.5,
      "scoring": 3,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Leafeon",
    "dex": 470,
    "images": {
      "main": "pokemons/roster-leafeon.png",
      "big": "pokemons/roster-leafeon-2x.png",
      "complete": "pokemons/stat-leafeon.png",
      "move_s11": "moves/leafeon_s11.png",
      "move_s12": "moves/leafeon_s12.png",
      "move_s21": "moves/leafeon_s21.png",
      "move_s22": "moves/leafeon_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 3.5,
      "endurance": 1.5,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 2.5
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Glaceon",
    "dex": 471,
    "images": {
      "main": "pokemons/roster-glaceon.png",
      "big": "pokemons/roster-glaceon-2x.png",
      "complete": "pokemons/stat-glaceon.png",
      "move_s11": "moves/glaceon_s11.png",
      "move_s12": "moves/glaceon_s12.png",
      "move_s21": "moves/glaceon_s21.png",
      "move_s22": "moves/glaceon_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 2,
      "mobility": 3,
      "scoring": 1,
      "support": 0.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Darkrai",
    "dex": 491,
    "images": {
      "main": "pokemons/roster-darkrai.png",
      "big": "pokemons/roster-darkrai-2x.png",
      "complete": "pokemons/stat-darkrai.png",
      "move_s11": "moves/darkrai_s11.png",
      "move_s12": "moves/darkrai_s12.png",
      "move_s21": "moves/darkrai_s21.png",
      "move_s22": "moves/darkrai_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 4.5,
      "endurance": 1.5,
      "mobility": 3,
      "scoring": 2,
      "support": 2
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Crustle",
    "dex": 558,
    "images": {
      "main": "pokemons/roster-crustle.png",
      "big": "pokemons/roster-crustle-2x.png",
      "complete": "pokemons/stat-crustle.png",
      "move_s11": "moves/crustle_s11.png",
      "move_s12": "moves/crustle_s12.png",
      "move_s21": "moves/crustle_s21.png",
      "move_s22": "moves/crustle_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 1.5,
      "endurance": 4,
      "mobility": 1.5,
      "scoring": 2,
      "support": 3
    },
    "tags": [
      Tag.DEFENDER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Zoroark",
    "dex": 571,
    "images": {
      "main": "pokemons/roster-zoroark.png",
      "big": "pokemons/roster-zoroark-2x.png",
      "complete": "pokemons/stat-zoroark.png",
      "move_s11": "moves/zoroark_s11.png",
      "move_s12": "moves/zoroark_s12.png",
      "move_s21": "moves/zoroark_s21.png",
      "move_s22": "moves/zoroark_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 3.5,
      "endurance": 1.5,
      "mobility": 4,
      "scoring": 2,
      "support": 0.5
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Chandelure",
    "dex": 609,
    "images": {
      "main": "pokemons/roster-chandelure.png",
      "big": "pokemons/roster-chandelure-2x.png",
      "complete": "pokemons/stat-chandelure.png",
      "move_s11": "moves/chandelure_s11.png",
      "move_s12": "moves/chandelure_s12.png",
      "move_s21": "moves/chandelure_s21.png",
      "move_s22": "moves/chandelure_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 5,
      "endurance": 1,
      "mobility": 1,
      "scoring": 2,
      "support": 3
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Delphox",
    "dex": 655,
    "images": {
      "main": "pokemons/roster-delphox.png",
      "big": "pokemons/roster-delphox-2x.png",
      "complete": "pokemons/stat-delphox.png",
      "move_s11": "moves/delphox_s11.png",
      "move_s12": "moves/delphox_s12.png",
      "move_s21": "moves/delphox_s21.png",
      "move_s22": "moves/delphox_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 1.5,
      "mobility": 3,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Greninja",
    "dex": 658,
    "images": {
      "main": "pokemons/roster-greninja.png",
      "big": "pokemons/roster-greninja-2x.png",
      "complete": "pokemons/stat-greninja.png",
      "move_s11": "moves/greninja_s11.png",
      "move_s12": "moves/greninja_s12.png",
      "move_s21": "moves/greninja_s21.png",
      "move_s22": "moves/greninja_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 2,
      "mobility": 3,
      "scoring": 3,
      "support": 0.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 3
  },
  {
    "name": "Talonflame",
    "dex": 663,
    "images": {
      "main": "pokemons/roster-talonflame.png",
      "big": "pokemons/roster-talonflame-2x.png",
      "complete": "pokemons/stat-talonflame.png",
      "move_s11": "moves/talonflame_s11.png",
      "move_s12": "moves/talonflame_s12.png",
      "move_s21": "moves/talonflame_s21.png",
      "move_s22": "moves/talonflame_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 2.5,
      "endurance": 1.5,
      "mobility": 5,
      "scoring": 3.5,
      "support": 0.5
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Aegislash",
    "dex": 681,
    "images": {
      "main": "pokemons/roster-aegislash.png",
      "big": "pokemons/roster-aegislash-2x.png",
      "complete": "pokemons/stat-aegislash.png",
      "move_s11": "moves/aegislash_s11.png",
      "move_s12": "moves/aegislash_s12.png",
      "move_s21": "moves/aegislash_s21.png",
      "move_s22": "moves/aegislash_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3.5,
      "endurance": 2,
      "mobility": 4,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Sylveon",
    "dex": 700,
    "images": {
      "main": "pokemons/roster-sylveon.png",
      "big": "pokemons/roster-sylveon-2x.png",
      "complete": "pokemons/stat-sylveon.png",
      "move_s11": "moves/sylveon_s11.png",
      "move_s12": "moves/sylveon_s12.png",
      "move_s21": "moves/sylveon_s21.png",
      "move_s22": "moves/sylveon_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 3.5,
      "endurance": 1.5,
      "mobility": 1.5,
      "scoring": 3.5,
      "support": 3.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Goodra",
    "dex": 706,
    "images": {
      "main": "pokemons/roster-goodra.png",
      "big": "pokemons/roster-goodra-2x.png",
      "complete": "pokemons/stat-goodra.png",
      "move_s11": "moves/goodra_s11.png",
      "move_s12": "moves/goodra_s12.png",
      "move_s21": "moves/goodra_s21.png",
      "move_s22": "moves/goodra_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 2.5,
      "endurance": 4,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 2
    },
    "tags": [
      Tag.DEFENDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Trevenant",
    "dex": 709,
    "images": {
      "main": "pokemons/roster-trevenant.png",
      "big": "pokemons/roster-trevenant-2x.png",
      "complete": "pokemons/stat-trevenant.png",
      "move_s11": "moves/trevenant_s11.png",
      "move_s12": "moves/trevenant_s12.png",
      "move_s21": "moves/trevenant_s21.png",
      "move_s22": "moves/trevenant_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 2,
      "endurance": 4,
      "mobility": 2,
      "scoring": 2.5,
      "support": 2.5
    },
    "tags": [
      Tag.DEFENDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Hoopa",
    "dex": 720,
    "images": {
      "main": "pokemons/roster-hoopa.png",
      "big": "pokemons/roster-hoopa-2x.png",
      "complete": "pokemons/stat-hoopa.png",
      "move_s11": "moves/hoopa_s11.png",
      "move_s12": "moves/hoopa_s12.png",
      "move_s21": "moves/hoopa_s21.png",
      "move_s22": "moves/hoopa_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 3,
      "endurance": 2,
      "mobility": 3,
      "scoring": 2,
      "support": 3.5
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.RANGED
    ],
    "difficulty": 3
  },
  {
    "name": "Decidueye",
    "dex": 724,
    "images": {
      "main": "pokemons/roster-decidueye.png",
      "big": "pokemons/roster-decidueye-2x.png",
      "complete": "pokemons/stat-decidueye.png",
      "move_s11": "moves/decidueye_s11.png",
      "move_s12": "moves/decidueye_s12.png",
      "move_s21": "moves/decidueye_s21.png",
      "move_s22": "moves/decidueye_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 3.5,
      "endurance": 1.5,
      "mobility": 1.5,
      "scoring": 3.5,
      "support": 3.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Tsareena",
    "dex": 763,
    "images": {
      "main": "pokemons/roster-tsareena.png",
      "big": "pokemons/roster-tsareena-2x.png",
      "complete": "pokemons/stat-tsareena.png",
      "move_s11": "moves/tsareena_s11.png",
      "move_s12": "moves/tsareena_s12.png",
      "move_s21": "moves/tsareena_s21.png",
      "move_s22": "moves/tsareena_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3.5,
      "endurance": 1.5,
      "mobility": 1.5,
      "scoring": 3.5,
      "support": 3.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Comfey",
    "dex": 764,
    "images": {
      "main": "pokemons/roster-comfey.png",
      "big": "pokemons/roster-comfey-2x.png",
      "complete": "pokemons/stat-comfey.png",
      "move_s11": "moves/comfey_s11.png",
      "move_s12": "moves/comfey_s12.png",
      "move_s21": "moves/comfey_s21.png",
      "move_s22": "moves/comfey_s22.png"
    },
    "active": true,
    "stats": {
      "offense": 2,
      "endurance": 3,
      "mobility": 1.5,
      "scoring": 1.5,
      "support": 4.5
    },
    "difficulty": 1,
    "tags": [
      Tag.SUPPORTER,
      Tag.RANGED
    ],
    "battleType": BattleType.SUPPORTER
  },
  {
    "name": "Mimikyu",
    "dex": 778,
    "images": {
      "main": "pokemons/roster-mimikyu.png",
      "big": "pokemons/roster-mimikyu-2x.png",
      "complete": "pokemons/stat-mimikyu.png",
      "move_s11": "moves/mimikyu_s11.png",
      "move_s12": "moves/mimikyu_s12.png",
      "move_s21": "moves/mimikyu_s21.png",
      "move_s22": "moves/mimikyu_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 3,
      "mobility": 2.5,
      "scoring": 2,
      "support": 2
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Dhelmise",
    "dex": 781,
    "images": {
      "main": "pokemons/roster-dhelmise.png",
      "big": "pokemons/roster-dhelmise-2x.png",
      "complete": "pokemons/stat-dhelmise.png",
      "move_s11": "moves/dhelmise_s11.png",
      "move_s12": "moves/dhelmise_s12.png",
      "move_s21": "moves/dhelmise_s21.png",
      "move_s22": "moves/dhelmise_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4.5,
      "endurance": 1.5,
      "mobility": 1,
      "scoring": 1,
      "support": 1
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Buzzwole",
    "dex": 794,
    "images": {
      "main": "pokemons/roster-buzzwole.png",
      "big": "pokemons/roster-buzzwole-2x.png",
      "complete": "pokemons/stat-buzzwole.png",
      "move_s11": "moves/buzzwole_s11.png",
      "move_s12": "moves/buzzwole_s12.png",
      "move_s21": "moves/buzzwole_s21.png",
      "move_s22": "moves/buzzwole_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 3,
      "mobility": 2.5,
      "scoring": 2,
      "support": 2
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Zeraora",
    "dex": 807,
    "images": {
      "main": "pokemons/roster-zeraora.png",
      "big": "pokemons/roster-zeraora-2x.png",
      "complete": "pokemons/stat-zeraora.png",
      "move_s11": "moves/zeraora_s11.png",
      "move_s12": "moves/zeraora_s12.png",
      "move_s21": "moves/zeraora_s21.png",
      "move_s22": "moves/zeraora_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 3.5,
      "endurance": 1.5,
      "mobility": 4,
      "scoring": 3,
      "support": 0.5
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Cinderace",
    "dex": 815,
    "images": {
      "main": "pokemons/roster-cinderace.png",
      "big": "pokemons/roster-cinderace-2x.png",
      "complete": "pokemons/stat-cinderace.png",
      "move_s11": "moves/cinderace_s11.png",
      "move_s12": "moves/cinderace_s12.png",
      "move_s21": "moves/cinderace_s21.png",
      "move_s22": "moves/cinderace_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 1.5,
      "mobility": 3,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Inteleon",
    "dex": 818,
    "images": {
      "main": "pokemons/roster-inteleon.png",
      "big": "pokemons/roster-inteleon-2x.png",
      "complete": "pokemons/stat-inteleon.png",
      "move_s11": "moves/inteleon_s11.png",
      "move_s12": "moves/inteleon_s12.png",
      "move_s21": "moves/inteleon_s21.png",
      "move_s22": "moves/inteleon_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4.5,
      "endurance": 1.5,
      "mobility": 3.5,
      "scoring": 1.5,
      "support": 0.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Greedent",
    "dex": 820,
    "images": {
      "main": "pokemons/roster-greedent.png",
      "big": "pokemons/roster-greedent-2x.png",
      "complete": "pokemons/stat-greedent.png",
      "move_s11": "moves/greedent_s11.png",
      "move_s12": "moves/greedent_s12.png",
      "move_s21": "moves/greedent_s21.png",
      "move_s22": "moves/greedent_s22.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 4,
      "endurance": 1.5,
      "mobility": 2,
      "scoring": 1,
      "support": 1
    },
    "tags": [
      Tag.DEFENDER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Eldegoss",
    "dex": 830,
    "images": {
      "main": "pokemons/roster-eldegoss.png",
      "big": "pokemons/roster-eldegoss-2x.png",
      "complete": "pokemons/stat-eldegoss.png",
      "move_s11": "moves/eldegoss_s11.png",
      "move_s12": "moves/eldegoss_s12.png",
      "move_s21": "moves/eldegoss_s21.png",
      "move_s22": "moves/eldegoss_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 1.5,
      "endurance": 2,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 4
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Cramorant",
    "dex": 845,
    "images": {
      "main": "pokemons/roster-cramorant.png",
      "big": "pokemons/roster-cramorant-2x.png",
      "complete": "pokemons/stat-cramorant.png",
      "move_s11": "moves/cramorant_s11.png",
      "move_s12": "moves/cramorant_s12.png",
      "move_s21": "moves/cramorant_s21.png",
      "move_s22": "moves/cramorant_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 3,
      "mobility": 3,
      "scoring": 1.5,
      "support": 1
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 3
  },
  {
    "name": "Sirfetch'd",
    "dex": 865,
    "images": {
      "main": "pokemons/roster-sirfetchd.png",
      "big": "pokemons/roster-sirfetchd-2x.png",
      "complete": "pokemons/stat-sirfetchd.png",
      "move_s11": "moves/sirfetchd_s11.png",
      "move_s12": "moves/sirfetchd_s12.png",
      "move_s21": "moves/sirfetchd_s21.png",
      "move_s22": "moves/sirfetchd_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3.5,
      "endurance": 2.5,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Alcremie",
    "dex": 869,
    "images": {
      "main": "pokemons/roster-alcremie.png",
      "big": "pokemons/roster-alcremie-2x.png",
      "complete": "pokemons/stat-alcremie.png",
      "move_s11": "moves/alcremie_s11.png",
      "move_s12": "moves/alcremie_s12.png",
      "move_s21": "moves/alcremie_s21.png",
      "move_s22": "moves/alcremie_s22.png"
    },
    "active": true,
    "battleType": BattleType.SUPPORTER,
    "stats": {
      "offense": 1.5,
      "endurance": 2,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 4
    },
    "tags": [
      Tag.SUPPORTER,
      Tag.RANGED
    ],
    "difficulty": 3
  },
  {
    "name": "Falinks",
    "dex": 870,
    "images": {
      "main": "pokemons/roster-falinks.png",
      "big": "pokemons/roster-falinks-2x.png",
      "complete": "pokemons/stat-falinks.png",
      "move_s11": "moves/falinks_s11.png",
      "move_s12": "moves/falinks_s12.png",
      "move_s21": "moves/falinks_s21.png",
      "move_s22": "moves/falinks_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3.5,
      "endurance": 4.5,
      "mobility": 2.5,
      "scoring": 2,
      "support": 1
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 3
  },
  {
    "name": "Duraludon",
    "dex": 884,
    "images": {
      "main": "pokemons/roster-duraludon.png",
      "big": "pokemons/roster-duraludon-2x.png",
      "complete": "pokemons/stat-duraludon.png",
      "move_s11": "moves/duraludon_s11.png",
      "move_s12": "moves/duraludon_s12.png",
      "move_s21": "moves/duraludon_s21.png",
      "move_s22": "moves/duraludon_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 3.5,
      "endurance": 3.5,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 2
  },
  {
    "name": "Dragapult",
    "dex": 887,
    "images": {
      "main": "pokemons/roster-dragapult.png",
      "big": "pokemons/roster-dragapult-2x.png",
      "complete": "pokemons/stat-dragapult.png",
      "move_s11": "moves/dragapult_s11.png",
      "move_s12": "moves/dragapult_s12.png",
      "move_s21": "moves/dragapult_s21.png",
      "move_s22": "moves/dragapult_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 2.5,
      "mobility": 4,
      "scoring": 1.5,
      "support": 0.5
    },
    "tags": [
      Tag.ATTACKER,
      Tag.RANGED
    ],
    "difficulty": 3
  },
  {
    "name": "Zacian",
    "dex": 888,
    "images": {
      "main": "pokemons/roster-zacian.png",
      "big": "pokemons/roster-zacian-2x.png",
      "complete": "pokemons/stat-zacian.png",
      "move_s11": "moves/zacian_s11.png",
      "move_s12": "moves/zacian_s12.png",
      "move_s21": "moves/zacian_s21.png",
      "move_s22": "moves/zacian_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 5,
      "endurance": 4,
      "mobility": 3,
      "scoring": 1,
      "support": 2
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Urshifu",
    "dex": 892,
    "images": {
      "main": "pokemons/roster-urshifu.png",
      "big": "pokemons/roster-urshifu-2x.png",
      "complete": "pokemons/stat-urshifu.png",
      "move_s11": "moves/urshifu_s11.png",
      "move_s12": "moves/urshifu_s12.png",
      "move_s21": "moves/urshifu_s21.png",
      "move_s22": "moves/urshifu_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4.5,
      "endurance": 3,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 1
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Meowscarada",
    "dex": 908,
    "images": {
      "main": "pokemons/roster-meowscarada.png",
      "big": "pokemons/roster-meowscarada-2x.png",
      "complete": "pokemons/stat-meowscarada.png",
      "move_s11": "moves/meowscarada_s11.png",
      "move_s12": "moves/meowscarada_s12.png",
      "move_s21": "moves/meowscarada_s21.png",
      "move_s22": "moves/meowscarada_s22.png"
    },
    "active": true,
    "battleType": BattleType.SPEEDSTER,
    "stats": {
      "offense": 4.5,
      "endurance": 3,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 1
    },
    "tags": [
      Tag.SPEEDSTER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Pawmot",
    "dex": 923,
    "images": {
      "main": "pokemons/roster-pawmot.png",
      "big": "pokemons/roster-pawmot-2x.png",
      "complete": "pokemons/stat-pawmot.png",
      "move_s11": "moves/pawmot_s11.png",
      "move_s12": "moves/pawmot_s12.png",
      "move_s21": "moves/pawmot_s21.png",
      "move_s22": "moves/pawmot_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4.5,
      "endurance": 2,
      "mobility": 3,
      "scoring": 2,
      "support": 2
    },
    "tags": [
      Tag.MELEE,
      Tag.ALLROUNDER
    ],
    "difficulty": 2
  },
  {
    "name": "Armarouge",
    "dex": 936,
    "images": {
      "main": "pokemons/roster-armarouge.png",
      "big": "pokemons/roster-armarouge-2x.png",
      "complete": "pokemons/stat-armarouge.png",
      "move_s11": "moves/armarouge_s11.png",
      "move_s12": "moves/armarouge_s12.png",
      "move_s21": "moves/armarouge_s21.png",
      "move_s22": "moves/armarouge_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 2,
      "mobility": 2.5,
      "scoring": 2,
      "support": 0.5
    },
    "tags": [
      Tag.RANGED,
      Tag.ATTACKER
    ],
    "difficulty": 2
  },
  {
    "name": "Ceruledge",
    "dex": 937,
    "images": {
      "main": "pokemons/roster-ceruledge.png",
      "big": "pokemons/roster-ceruledge-2x.png",
      "complete": "pokemons/stat-ceruledge.png",
      "move_s11": "moves/ceruledge_s11.png",
      "move_s12": "moves/ceruledge_s12.png",
      "move_s21": "moves/ceruledge_s21.png",
      "move_s22": "moves/ceruledge_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 2.5,
      "mobility": 2.5,
      "scoring": 2.5,
      "support": 0.5
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 2
  },
  {
    "name": "Tinkaton",
    "dex": 959,
    "images": {
      "main": "pokemons/roster-tinkaton.png",
      "big": "pokemons/roster-tinkaton-2x.png",
      "complete": "pokemons/stat-tinkaton.png",
      "move_s11": "moves/tinkaton_s11.png",
      "move_s12": "moves/tinkaton_s12.png",
      "move_s21": "moves/tinkaton_s21.png",
      "move_s22": "moves/tinkaton_s22.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 3,
      "endurance": 3.5,
      "mobility": 2.5,
      "scoring": 2,
      "support": 1
    },
    "tags": [
      Tag.ALLROUNDER,
      Tag.MELEE
    ],
    "difficulty": 1
  },
  {
    "name": "Miraidon",
    "dex": 1008,
    "images": {
      "main": "pokemons/roster-miraidon.png",
      "big": "pokemons/roster-miraidon-2x.png",
      "complete": "pokemons/stat-miraidon.png",
      "move_s11": "moves/miraidon_s11.png",
      "move_s12": "moves/miraidon_s12.png",
      "move_s21": "moves/miraidon_s21.png",
      "move_s22": "moves/miraidon_s22.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 4,
      "endurance": 2,
      "mobility": 2,
      "scoring": 2.5,
      "support": 4
    },
    "tags": [
      Tag.RANGED,
      Tag.ATTACKER
    ],
    "difficulty": 1
  }
];
var pokemons_default = pokemons;

// src/i18n/en.ts
function slugFromMain(mainPath) {
  return mainPath.replace(/^pokemons\/roster-/, "").replace(/\.png$/, "");
}
var names = {};
for (const p of pokemons_default) {
  names[slugFromMain(p.images.main)] = p.name;
}
var en_default = names;

// src/i18n/pt-BR.ts
var ptBR = { ...en_default };
var pt_BR_default = ptBR;

// src/i18n/ja-JP.ts
var jaJP = {
  venusaur: "\u30D5\u30B7\u30AE\u30D0\u30CA",
  charizard: "\u30EA\u30B6\u30FC\u30C9\u30F3",
  "mega-charizard-x": "\u30E1\u30AC\u30EA\u30B6\u30FC\u30C9\u30F3X",
  "mega-charizard-y": "\u30E1\u30AC\u30EA\u30B6\u30FC\u30C9\u30F3Y",
  blastoise: "\u30AB\u30E1\u30C3\u30AF\u30B9",
  pikachu: "\u30D4\u30AB\u30C1\u30E5\u30A6",
  "alolan-raichu": "\u30A2\u30ED\u30FC\u30E9\u306E\u30E9\u30A4\u30C1\u30E5\u30A6",
  clefable: "\u30D4\u30AF\u30B7\u30FC",
  "alolan-ninetales": "\u30A2\u30ED\u30FC\u30E9\u306E\u30AD\u30E5\u30A6\u30B3\u30F3",
  wigglytuff: "\u30D7\u30AF\u30EA\u30F3",
  meowth: "\u30CB\u30E3\u30FC\u30B9",
  psyduck: "\u30B3\u30C0\u30C3\u30AF",
  machamp: "\u30AB\u30A4\u30EA\u30AD\u30FC",
  "galarian-rapidash": "\u30AC\u30E9\u30EB\u306E\u30AE\u30E3\u30ED\u30C3\u30D7",
  slowbro: "\u30E4\u30C9\u30E9\u30F3",
  dodrio: "\u30C9\u30FC\u30C9\u30EA\u30AA",
  gengar: "\u30B2\u30F3\u30AC\u30FC",
  blissey: "\u30CF\u30D4\u30CA\u30B9",
  "mr-mime": "\u30D0\u30EA\u30E4\u30FC\u30C9",
  scizor: "\u30CF\u30C3\u30B5\u30E0",
  gyarados: "\u30AE\u30E3\u30E9\u30C9\u30B9",
  "mega-gyarados": "\u30E1\u30AC\u30AE\u30E3\u30E9\u30C9\u30B9",
  lapras: "\u30E9\u30D7\u30E9\u30B9",
  vaporeon: "\u30B7\u30E3\u30EF\u30FC\u30BA",
  snorlax: "\u30AB\u30D3\u30B4\u30F3",
  dragonite: "\u30AB\u30A4\u30EA\u30E5\u30FC",
  mewtwox: "\u30E1\u30AC\u30DF\u30E5\u30A6\u30C4\u30FCX",
  mewtwoy: "\u30E1\u30AC\u30DF\u30E5\u30A6\u30C4\u30FCY",
  mew: "\u30DF\u30E5\u30A6",
  azumarill: "\u30DE\u30EA\u30EB\u30EA",
  espeon: "\u30A8\u30FC\u30D5\u30A3",
  umbreon: "\u30D6\u30E9\u30C3\u30AD\u30FC",
  mamoswine: "\u30DE\u30F3\u30E0\u30FC",
  suicune: "\u30B9\u30A4\u30AF\u30F3",
  tyranitar: "\u30D0\u30F3\u30AE\u30E9\u30B9",
  "ho-oh": "\u30DB\u30A6\u30AA\u30A6",
  blaziken: "\u30D0\u30B7\u30E3\u30FC\u30E2",
  gardevoir: "\u30B5\u30FC\u30CA\u30A4\u30C8",
  sableye: "\u30E4\u30DF\u30E9\u30DF",
  absol: "\u30A2\u30D6\u30BD\u30EB",
  metagross: "\u30E1\u30BF\u30B0\u30ED\u30B9",
  latias: "\u30E9\u30C6\u30A3\u30A2\u30B9",
  latios: "\u30E9\u30C6\u30A3\u30AA\u30B9",
  empoleon: "\u30A8\u30F3\u30DA\u30EB\u30C8",
  garchomp: "\u30AC\u30D6\u30EA\u30A2\u30B9",
  lucario: "\u30EB\u30AB\u30EA\u30AA",
  "mega-lucario": "\u30E1\u30AC\u30EB\u30AB\u30EA\u30AA",
  leafeon: "\u30EA\u30FC\u30D5\u30A3\u30A2",
  glaceon: "\u30B0\u30EC\u30A4\u30B7\u30A2",
  darkrai: "\u30C0\u30FC\u30AF\u30E9\u30A4",
  crustle: "\u30A4\u30EF\u30D1\u30EC\u30B9",
  zoroark: "\u30BE\u30ED\u30A2\u30FC\u30AF",
  chandelure: "\u30B7\u30E3\u30F3\u30C7\u30E9",
  delphox: "\u30DE\u30D5\u30A9\u30AF\u30B7\u30FC",
  greninja: "\u30B2\u30C3\u30B3\u30A6\u30AC",
  talonflame: "\u30D5\u30A1\u30A4\u30A2\u30ED\u30FC",
  aegislash: "\u30AE\u30EB\u30AC\u30EB\u30C9",
  sylveon: "\u30CB\u30F3\u30D5\u30A3\u30A2",
  goodra: "\u30CC\u30E1\u30EB\u30B4\u30F3",
  trevenant: "\u30AA\u30FC\u30ED\u30C3\u30C8",
  hoopa: "\u30D5\u30FC\u30D1",
  decidueye: "\u30B8\u30E5\u30CA\u30A4\u30D1\u30FC",
  tsareena: "\u30A2\u30DE\u30FC\u30B8\u30E7",
  comfey: "\u30AD\u30E5\u30EF\u30EF\u30FC",
  mimikyu: "\u30DF\u30DF\u30C3\u30AD\u30E5",
  dhelmise: "\u30C0\u30C0\u30EA\u30F3",
  buzzwole: "\u30DE\u30C3\u30B7\u30D6\u30FC\u30F3",
  zeraora: "\u30BC\u30E9\u30AA\u30E9",
  cinderace: "\u30A8\u30FC\u30B9\u30D0\u30FC\u30F3",
  inteleon: "\u30A4\u30F3\u30C6\u30EC\u30AA\u30F3",
  greedent: "\u30E8\u30AF\u30D0\u30EA\u30B9",
  eldegoss: "\u30EF\u30BF\u30B7\u30E9\u30AC",
  cramorant: "\u30A6\u30C3\u30A6",
  sirfetchd: "\u30CD\u30AE\u30AC\u30CA\u30A4\u30C8",
  alcremie: "\u30DE\u30DB\u30A4\u30C3\u30D7",
  falinks: "\u30BF\u30A4\u30EC\u30FC\u30C4",
  duraludon: "\u30B8\u30E5\u30E9\u30EB\u30C9\u30F3",
  dragapult: "\u30C9\u30E9\u30D1\u30EB\u30C8",
  zacian: "\u30B6\u30B7\u30A2\u30F3",
  urshifu: "\u30A6\u30FC\u30E9\u30AA\u30B9",
  meowscarada: "\u30DE\u30B9\u30AB\u30FC\u30CB\u30E3",
  pawmot: "\u30D1\u30FC\u30E2\u30C3\u30C8",
  armarouge: "\u30B0\u30EC\u30F3\u30A2\u30EB\u30DE",
  ceruledge: "\u30BD\u30A6\u30D6\u30EC\u30A4\u30BA",
  tinkaton: "\u30C7\u30AB\u30CC\u30C1\u30E3\u30F3",
  miraidon: "\u30DF\u30E9\u30A4\u30C9\u30F3"
};
var ja_JP_default = jaJP;

// src/i18n/fr.ts
var fr = {
  venusaur: "Florizarre",
  charizard: "Dracaufeu",
  "mega-charizard-x": "M\xE9ga-Dracaufeu X",
  "mega-charizard-y": "M\xE9ga-Dracaufeu Y",
  blastoise: "Tortank",
  pikachu: "Pikachu",
  "alolan-raichu": "Raichu d'Alola",
  clefable: "M\xE9lodelfe",
  "alolan-ninetales": "Feunard d'Alola",
  wigglytuff: "Grodoudou",
  meowth: "Miaouss",
  psyduck: "Psykokwak",
  machamp: "Mackogneur",
  "galarian-rapidash": "Galopa de Galar",
  slowbro: "Flagadoss",
  dodrio: "Dodrio",
  gengar: "Ectoplasma",
  blissey: "Leveinard",
  "mr-mime": "M. Mime",
  scizor: "Cizayox",
  gyarados: "L\xE9viator",
  "mega-gyarados": "M\xE9ga-L\xE9viator",
  lapras: "Lokhlass",
  vaporeon: "Aquali",
  snorlax: "Ronflex",
  dragonite: "Dracolosse",
  mewtwox: "M\xE9ga-Mewtwo X",
  mewtwoy: "M\xE9ga-Mewtwo Y",
  mew: "Mew",
  azumarill: "Azumarill",
  espeon: "Mentali",
  umbreon: "Noctali",
  mamoswine: "Mammochon",
  suicune: "Suicune",
  tyranitar: "Tyranocif",
  "ho-oh": "Ho-Oh",
  blaziken: "Bras\xE9gali",
  gardevoir: "Gardevoir",
  sableye: "T\xE9n\xE9fix",
  absol: "Absol",
  metagross: "M\xE9talosse",
  latias: "Latias",
  latios: "Latios",
  empoleon: "Pingol\xE9on",
  garchomp: "Carchacrok",
  lucario: "Lucario",
  "mega-lucario": "M\xE9ga-Lucario",
  leafeon: "Phyllali",
  glaceon: "Givrali",
  darkrai: "Darkrai",
  crustle: "Crabaraque",
  zoroark: "Zoroark",
  chandelure: "Lugulabre",
  delphox: "Goupelin",
  greninja: "Amphinobi",
  talonflame: "Flambusard",
  aegislash: "Exagide",
  sylveon: "Nymphali",
  goodra: "Muplodocus",
  trevenant: "Dess\xE9liande",
  hoopa: "Hoopa",
  decidueye: "Arch\xE9duc",
  tsareena: "Sucreine",
  comfey: "Gu\xE9rilande",
  mimikyu: "Mimiqui",
  dhelmise: "Sinistrail",
  buzzwole: "Mouscoto",
  zeraora: "Zeraora",
  cinderace: "Pyrobut",
  inteleon: "L\xE9zargus",
  greedent: "Rongrigou",
  eldegoss: "Blancoton",
  cramorant: "Nigosier",
  sirfetchd: "Palarticho",
  alcremie: "Charmilly",
  falinks: "Hexadron",
  duraludon: "Duralugon",
  dragapult: "Drak\xE9fauche",
  zacian: "Zacian",
  urshifu: "Shifours",
  meowscarada: "Matourgeon",
  pawmot: "Parmot",
  armarouge: "Carmadura",
  ceruledge: "Malvalame",
  tinkaton: "Forgerette",
  miraidon: "Miraidon"
};
var fr_default = fr;

// src/i18n/es.ts
var es = {
  venusaur: "Venusaur",
  charizard: "Charizard",
  "mega-charizard-x": "Mega-Charizard X",
  "mega-charizard-y": "Mega-Charizard Y",
  blastoise: "Blastoise",
  pikachu: "Pikachu",
  "alolan-raichu": "Raichu de Alola",
  clefable: "Clefable",
  "alolan-ninetales": "Ninetales de Alola",
  wigglytuff: "Wigglytuff",
  meowth: "Meowth",
  psyduck: "Psyduck",
  machamp: "Machamp",
  "galarian-rapidash": "Rapidash de Galar",
  slowbro: "Slowbro",
  dodrio: "Dodrio",
  gengar: "Gengar",
  blissey: "Blissey",
  "mr-mime": "Mr. Mime",
  scizor: "Scizor",
  gyarados: "Gyarados",
  "mega-gyarados": "Mega-Gyarados",
  lapras: "Lapras",
  vaporeon: "Vaporeon",
  snorlax: "Snorlax",
  dragonite: "Dragonite",
  mewtwox: "Mega-Mewtwo X",
  mewtwoy: "Mega-Mewtwo Y",
  mew: "Mew",
  azumarill: "Azumarill",
  espeon: "Espeon",
  umbreon: "Umbreon",
  mamoswine: "Mamoswine",
  suicune: "Suicune",
  tyranitar: "Tyranitar",
  "ho-oh": "Ho-Oh",
  blaziken: "Blaziken",
  gardevoir: "Gardevoir",
  sableye: "Sableye",
  absol: "Absol",
  metagross: "Metagross",
  latias: "Latias",
  latios: "Latios",
  empoleon: "Empoleon",
  garchomp: "Garchomp",
  lucario: "Lucario",
  "mega-lucario": "Mega-Lucario",
  leafeon: "Leafeon",
  glaceon: "Glaceon",
  darkrai: "Darkrai",
  crustle: "Crustle",
  zoroark: "Zoroark",
  chandelure: "Chandelure",
  delphox: "Delphox",
  greninja: "Greninja",
  talonflame: "Talonflame",
  aegislash: "Aegislash",
  sylveon: "Sylveon",
  goodra: "Goodra",
  trevenant: "Trevenant",
  hoopa: "Hoopa",
  decidueye: "Decidueye",
  tsareena: "Tsareena",
  comfey: "Comfey",
  mimikyu: "Mimikyu",
  dhelmise: "Dhelmise",
  buzzwole: "Buzzwole",
  zeraora: "Zeraora",
  cinderace: "Cinderace",
  inteleon: "Inteleon",
  greedent: "Greedent",
  eldegoss: "Eldegoss",
  cramorant: "Cramorant",
  sirfetchd: "Sirfetch'd",
  alcremie: "Alcremie",
  falinks: "Falinks",
  duraludon: "Duraludon",
  dragapult: "Dragapult",
  zacian: "Zacian",
  urshifu: "Urshifu",
  meowscarada: "Meowscarada",
  pawmot: "Pawmot",
  armarouge: "Armarouge",
  ceruledge: "Ceruledge",
  tinkaton: "Tinkaton",
  miraidon: "Miraidon"
};
var es_default = es;

// src/i18n/index.ts
var locales = {
  en: en_default,
  "pt-BR": pt_BR_default,
  "ja-JP": ja_JP_default,
  fr: fr_default,
  es: es_default
};
function getPokemonName(id, locale = "en") {
  const map = locales[locale] ?? en_default;
  return map[id] ?? en_default[id] ?? id;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  en,
  es,
  fr,
  getPokemonName,
  jaJP,
  ptBR
});
//# sourceMappingURL=index.cjs.map