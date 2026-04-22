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
      "evolution_1": "pokemons/evolution-bulbasaur-2x.png",
      "evolution_2": "pokemons/evolution-ivysaur-2x.png",
      "evolution_3": "pokemons/evolution-venusaur-2x.png",
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
      "evolution_1": "pokemons/evolution-charmander-2x.png",
      "evolution_2": "pokemons/evolution-charmeleon-2x.png",
      "evolution_3": "pokemons/evolution-charizard-2x.png",
      "evolution_4": "pokemons/evolution-mega-charizard-x-2x.png",
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
      "evolution_1": "pokemons/evolution-squirtle-2x.png",
      "evolution_2": "pokemons/evolution-wartortle-2x.png",
      "evolution_3": "pokemons/evolution-blastoise-2x.png",
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
      "evolution_1": "pokemons/evolution-pikachu-2x.png",
      "evolution_2": "pokemons/evolution-alolan-raichu-2x.png",
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
      "evolution_1": "pokemons/evolution-clefairy-2x.png",
      "evolution_2": "pokemons/evolution-clefable-2x.png",
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
      "evolution_1": "pokemons/evolution-alolan-vulpix-2x.png",
      "evolution_2": "pokemons/evolution-alolan-ninetales-2x.png",
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
      "evolution_1": "pokemons/evolution-jigglypuff-2x.png",
      "evolution_2": "pokemons/evolution-wigglytuff-2x.png",
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
      "evolution_1": "pokemons/evolution-psyduck-2x.png",
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
      "evolution_1": "pokemons/evolution-machop-2x.png",
      "evolution_2": "pokemons/evolution-machoke-2x.png",
      "evolution_3": "pokemons/evolution-machamp-2x.png",
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
      "evolution_1": "pokemons/evolution-galarian-ponyta-2x.png",
      "evolution_2": "pokemons/evolution-galarian-rapidash-2x.png",
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
      "evolution_1": "pokemons/evolution-slowpoke-2x.png",
      "evolution_2": "pokemons/evolution-slowbro-2x.png",
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
      "evolution_1": "pokemons/evolution-doduo-2x.png",
      "evolution_2": "pokemons/evolution-dodrio-2x.png",
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
      "evolution_1": "pokemons/evolution-gastly-2x.png",
      "evolution_2": "pokemons/evolution-haunter-2x.png",
      "evolution_3": "pokemons/evolution-gengar-2x.png",
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
      "evolution_1": "pokemons/evolution-chansey-2x.png",
      "evolution_2": "pokemons/evolution-blissey-2x.png",
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
      "evolution_1": "pokemons/evolution-scyther-2x.png",
      "evolution_2": "pokemons/evolution-scizor-2x.png",
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
      "evolution_1": "pokemons/evolution-magikarp-2x.png",
      "evolution_2": "pokemons/evolution-gyarados-2x.png",
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
      "evolution_1": "pokemons/evolution-lapras-2x.png",
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
      "evolution_1": "pokemons/evolution-eevee-2x.png",
      "evolution_2": "pokemons/evolution-vaporeon-2x.png",
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
    "name": "Articuno",
    "dex": 144,
    "images": {
      "main": "pokemons/roster-articuno.png",
      "big": "pokemons/roster-articuno-2x.png",
      "complete": "pokemons/stat-articuno.png",
      "move_s11": "moves/articuno_s11.png",
      "move_s21": "moves/articuno_s21.png"
    },
    "active": true,
    "battleType": BattleType.DEFENDER,
    "stats": {
      "offense": 2,
      "endurance": 4,
      "mobility": 1,
      "scoring": 2,
      "support": 4
    },
    "tags": [
      Tag.DEFENDER,
      Tag.RANGED
    ],
    "difficulty": 1
  },
  {
    "name": "Zapdos",
    "dex": 145,
    "images": {
      "main": "pokemons/roster-zapdos.png",
      "big": "pokemons/roster-zapdos-2x.png",
      "complete": "pokemons/stat-zapdos.png",
      "move_s11": "moves/zapdos_s11.png",
      "move_s21": "moves/zapdos_s21.png"
    },
    "active": true,
    "battleType": BattleType.ATTACKER,
    "stats": {
      "offense": 5,
      "endurance": 2,
      "mobility": 1,
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
    "name": "Moltres",
    "dex": 146,
    "images": {
      "main": "pokemons/roster-moltres.png",
      "big": "pokemons/roster-moltres-2x.png",
      "complete": "pokemons/stat-moltres.png",
      "move_s11": "moves/moltres_s11.png",
      "move_s21": "moves/moltres_s21.png"
    },
    "active": true,
    "battleType": BattleType.ALLROUNDER,
    "stats": {
      "offense": 4,
      "endurance": 2.5,
      "mobility": 2,
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
    "name": "Dragonite",
    "dex": 149,
    "images": {
      "main": "pokemons/roster-dragonite.png",
      "big": "pokemons/roster-dragonite-2x.png",
      "complete": "pokemons/stat-dragonite.png",
      "evolution_1": "pokemons/evolution-dratini-2x.png",
      "evolution_2": "pokemons/evolution-dragonair-2x.png",
      "evolution_3": "pokemons/evolution-dragonite-2x.png",
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
    "name": "Mega Mewtwo X",
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
    "name": "Mega Mewtwo Y",
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
      "evolution_1": "pokemons/evolution-mew-2x.png",
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
      "evolution_1": "pokemons/evolution-marill-2x.png",
      "evolution_2": "pokemons/evolution-azumarill-2x.png",
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
      "evolution_1": "pokemons/evolution-eevee-2x.png",
      "evolution_2": "pokemons/evolution-espeon-2x.png",
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
      "evolution_1": "pokemons/evolution-eevee-2x.png",
      "evolution_2": "pokemons/evolution-umbreon-2x.png",
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
      "evolution_1": "pokemons/evolution-swinub-2x.png",
      "evolution_2": "pokemons/evolution-piloswine-2x.png",
      "evolution_3": "pokemons/evolution-mamoswine-2x.png",
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
      "evolution_1": "pokemons/evolution-suicune-2x.png",
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
      "evolution_1": "pokemons/evolution-larvitar-2x.png",
      "evolution_2": "pokemons/evolution-pupitar-2x.png",
      "evolution_3": "pokemons/evolution-tyranitar-2x.png",
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
      "evolution_1": "pokemons/evolution-ho-oh-2x.png",
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
      "evolution_1": "pokemons/evolution-torchic-2x.png",
      "evolution_2": "pokemons/evolution-combusken-2x.png",
      "evolution_3": "pokemons/evolution-blaziken-2x.png",
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
      "evolution_1": "pokemons/evolution-sableye-2x.png",
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
      "evolution_1": "pokemons/evolution-beldum-2x.png",
      "evolution_2": "pokemons/evolution-metang-2x.png",
      "evolution_3": "pokemons/evolution-metagross-2x.png",
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
      "evolution_1": "pokemons/evolution-latias-2x.png",
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
      "evolution_1": "pokemons/evolution-latios-2x.png",
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
      "evolution_1": "pokemons/evolution-piplup-2x.png",
      "evolution_2": "pokemons/evolution-prinplup-2x.png",
      "evolution_3": "pokemons/evolution-empoleon-2x.png",
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
      "evolution_1": "pokemons/evolution-gible-2x.png",
      "evolution_2": "pokemons/evolution-gabite-2x.png",
      "evolution_3": "pokemons/evolution-garchomp-2x.png",
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
      "evolution_1": "pokemons/evolution-base-lucario-2x.png",
      "evolution_2": "pokemons/evolution-mega-lucario-2x.png",
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
      "evolution_1": "pokemons/evolution-eevee-2x.png",
      "evolution_2": "pokemons/evolution-leafeon-2x.png",
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
      "evolution_1": "pokemons/evolution-eevee-2x.png",
      "evolution_2": "pokemons/evolution-glaceon-2x.png",
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
      "evolution_1": "pokemons/evolution-darkrai-2x.png",
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
      "evolution_1": "pokemons/evolution-dweeble-2x.png",
      "evolution_2": "pokemons/evolution-crustle-2x.png",
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
      "evolution_1": "pokemons/evolution-zorua-2x.png",
      "evolution_2": "pokemons/evolution-zoroark-2x.png",
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
      "evolution_1": "pokemons/evolution-litwick-2x.png",
      "evolution_2": "pokemons/evolution-lampent-2x.png",
      "evolution_3": "pokemons/evolution-chandelure-2x.png",
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
      "evolution_1": "pokemons/evolution-fennekin-2x.png",
      "evolution_2": "pokemons/evolution-braixen-2x.png",
      "evolution_3": "pokemons/evolution-delphox-2x.png",
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
      "evolution_1": "pokemons/evolution-froakie-2x.png",
      "evolution_2": "pokemons/evolution-frogadier-2x.png",
      "evolution_3": "pokemons/evolution-greninja-2x.png",
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
      "evolution_1": "pokemons/evolution-fletchling-2x.png",
      "evolution_2": "pokemons/evolution-fletchinder-2x.png",
      "evolution_3": "pokemons/evolution-talonflame-2x.png",
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
      "evolution_1": "pokemons/evolution-honedge-2x.png",
      "evolution_2": "pokemons/evolution-doublade-2x.png",
      "evolution_3": "pokemons/evolution-aegislash-2x.png",
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
      "evolution_1": "pokemons/evolution-eevee-2x.png",
      "evolution_2": "pokemons/evolution-sylveon-2x.png",
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
      "evolution_1": "pokemons/evolution-goomy-2x.png",
      "evolution_2": "pokemons/evolution-sliggoo-2x.png",
      "evolution_3": "pokemons/evolution-goodra-2x.png",
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
      "evolution_1": "pokemons/evolution-phantump-2x.png",
      "evolution_2": "pokemons/evolution-trevenant-2x.png",
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
      "evolution_1": "pokemons/evolution-hoopa-2x.png",
      "evolution_2": "pokemons/evolution-hoopa-unbound-2x.png",
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
      "evolution_1": "pokemons/evolution-rowlet-2x.png",
      "evolution_2": "pokemons/evolution-dartrix-2x.png",
      "evolution_3": "pokemons/evolution-decidueye-2x.png",
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
      "evolution_1": "pokemons/evolution-bounsweet-2x.png",
      "evolution_2": "pokemons/evolution-steenee-2x.png",
      "evolution_3": "pokemons/evolution-tsareena-2x.png",
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
      "evolution_1": "pokemons/evolution-comfey-2x.png",
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
      "evolution_1": "pokemons/evolution-mimikyu-2x.png",
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
      "evolution_1": "pokemons/evolution-dhelmise-2x.png",
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
      "evolution_1": "pokemons/evolution-buzzwole-2x.png",
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
      "evolution_1": "pokemons/evolution-scorbunny-2x.png",
      "evolution_2": "pokemons/evolution-raboot-2x.png",
      "evolution_3": "pokemons/evolution-cinderace-2x.png",
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
      "evolution_1": "pokemons/evolution-sobble-2x.png",
      "evolution_2": "pokemons/evolution-drizzile-2x.png",
      "evolution_3": "pokemons/evolution-inteleon-2x.png",
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
      "evolution_1": "pokemons/evolution-skwovet-2x.png",
      "evolution_2": "pokemons/evolution-greedent-2x.png",
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
      "evolution_1": "pokemons/evolution-gossifleur-2x.png",
      "evolution_2": "pokemons/evolution-eldegoss-2x.png",
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
      "evolution_1": "pokemons/evolution-milcery-2x.png",
      "evolution_2": "pokemons/evolution-alcremie-2x.png",
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
      "evolution_1": "pokemons/evolution-falinks-2x.png",
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
      "evolution_1": "pokemons/evolution-dreepy-2x.png",
      "evolution_2": "pokemons/evolution-drakloak-2x.png",
      "evolution_3": "pokemons/evolution-dragapult-2x.png",
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
      "evolution_1": "pokemons/evolution-zacian-2x.png",
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
      "evolution_1": "pokemons/evolution-kubfu-2x.png",
      "evolution_2": "pokemons/evolution-urshifu-2x.png",
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
      "evolution_1": "pokemons/evolution-sprigatito-2x.png",
      "evolution_2": "pokemons/evolution-floragato-2x.png",
      "evolution_3": "pokemons/evolution-meowscarada-2x.png",
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
      "evolution_1": "pokemons/evolution-pawmi-2x.png",
      "evolution_2": "pokemons/evolution-pawmo-2x.png",
      "evolution_3": "pokemons/evolution-pawmot-2x.png",
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
      "evolution_1": "pokemons/evolution-charcadet-2x.png",
      "evolution_2": "pokemons/evolution-armarouge-2x.png",
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
      "evolution_1": "pokemons/evolution-charcadet-2x.png",
      "evolution_2": "pokemons/evolution-ceruledge-2x.png",
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
      "evolution_1": "pokemons/evolution-tinkatink-2x.png",
      "evolution_2": "pokemons/evolution-tinkatuff-2x.png",
      "evolution_3": "pokemons/evolution-tinkaton-2x.png",
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
      "evolution_1": "pokemons/evolution-miraidon-2x.png",
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

// src/maps.ts
var maps = [
  {
    id: "map-groudon",
    name: "Theia Sky Ruins",
    image: "maps/map-groudon/map-groudon@4x.png",
    images: {
      "1": "maps/map-groudon/map-groudon@1x.png",
      "2": "maps/map-groudon/map-groudon@2x.png",
      "4": "maps/map-groudon/map-groudon@4x.png"
    },
    description: "Map with Groudon"
  },
  {
    id: "map-kyogre",
    name: "Theia Sky Ruins",
    image: "maps/map-kyogre/map-kyogre@4x.png",
    images: {
      "1": "maps/map-kyogre/map-kyogre@1x.png",
      "2": "maps/map-kyogre/map-kyogre@2x.png",
      "4": "maps/map-kyogre/map-kyogre@4x.png"
    },
    description: "Map with Kyogre"
  },
  {
    id: "map-rayquaza",
    name: "Theia Sky Ruins",
    image: "maps/map-rayquaza/map-rayquaza@4x.png",
    images: {
      "1": "maps/map-rayquaza/map-rayquaza@1x.png",
      "2": "maps/map-rayquaza/map-rayquaza@2x.png",
      "4": "maps/map-rayquaza/map-rayquaza@4x.png"
    },
    description: "Map with Rayquaza"
  }
];
var maps_default = maps;

// src/neutrals.ts
var neutrals = [
  { id: "accelgor", image: "neutrals/accelgor.png", name: "Accelgor", dex: 617 },
  { id: "altaria", image: "neutrals/altaria.png", name: "Altaria", dex: 334 },
  { id: "baltoy", image: "neutrals/baltoy.png", name: "Baltoy", dex: 343 },
  { id: "bunnelby", image: "neutrals/bunnelby.png", name: "Bunnelby", dex: 659 },
  { id: "escavalier", image: "neutrals/escavalier.png", name: "Escavalier", dex: 589 },
  { id: "groudon", image: "neutrals/groudon.png", name: "Groudon", dex: 383 },
  { id: "indeedee", image: "neutrals/indeedee.png", name: "Indeedee", dex: 876 },
  { id: "kyogre", image: "neutrals/kyogre.png", name: "Kyogre", dex: 382 },
  { id: "natu", image: "neutrals/natu.png", name: "Natu", dex: 177 },
  { id: "rayquaza", image: "neutrals/rayquaza.png", name: "Rayquaza", dex: 384 },
  { id: "regidrago", image: "neutrals/regidrago.png", name: "Regidrago", dex: 895 },
  { id: "regice", image: "neutrals/regice.png", name: "Regice", dex: 378 },
  { id: "regieleki", image: "neutrals/regieleki.png", name: "Regieleki", dex: 894 },
  { id: "regirock", image: "neutrals/regirock.png", name: "Regirock", dex: 377 },
  { id: "registeel", image: "neutrals/registeel.png", name: "Registeel", dex: 379 },
  { id: "salac", image: "neutrals/salac.png", name: "Salac Berry" },
  { id: "sitrus", image: "neutrals/sitrus.png", name: "Sitrus Berry" },
  { id: "xatu", image: "neutrals/xatu.png", name: "Xatu", dex: 178 }
];
var neutrals_default = neutrals;

// src/i18n/en.ts
function slugFromMain(mainPath) {
  return mainPath.replace(/^pokemons\/roster-/, "").replace(/\.png$/, "");
}
var names = {};
for (const p of pokemons_default) {
  names[slugFromMain(p.images.main)] = p.name;
}
for (const m of maps_default) {
  names[m.id] = m.name;
  if (m.description) names[`${m.id}.description`] = m.description;
}
for (const n of neutrals_default) {
  names[n.id] = n.name;
}
names["mega-mewtwo-x"] = "Mega Mewtwo X";
names["mega-mewtwo-y"] = "Mega Mewtwo Y";
Object.assign(names, {
  "spawn.info.groudon.boss": "<p>When defeated, all team members alive receive a <strong>buff</strong> and <strong>15 aeos points</strong>.<br>This buff is <strong>permanent until the holder is KO'd</strong>. When the holder is <strong>KO'd</strong>, the buff <strong>transfers to the killer</strong>.<br>It provides a <strong>goal-scoring speed boost</strong>, a <strong>huge damage boost</strong>, and a <strong>small shield</strong>.<br>Always spawn at 2:00.</p>",
  "spawn.info.bunnelby.initial": "<p>They <strong>spawn at the beginning of the game</strong> and <strong>never respawn</strong> once killed.</p><p>Give 2 points.</p>",
  "spawn.info.bunnelby.lane_940": "<p>Starts spawning at <strong>9:40</strong>.</p><p>When defeated, grants <strong>2 points</strong> and respawn after <strong>60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.bunnelby.lane_920": "<p>Starts spawning at <strong>9:20</strong>.</p><p>When defeated, grants <strong>2 points</strong> and respawn after <strong>60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.bunnelby.lane_915": "<p>Starts spawning at <strong>9:15</strong>.</p><p>When defeated, grants <strong>2 points</strong> and respawn after <strong>60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.accelgor": "<p>Starts spawning at <strong>9:45</strong>.</p><p>When defeated, grants <strong>4 / 7 points</strong> and a <strong>buff</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>This buff lasts for <strong>70 seconds</strong> and provides a <strong>10% move cooldown reduction</strong>.</p>",
  "spawn.info.escavalier": "<p>Starts spawning at <strong>9:45</strong>.</p><p>When defeated, grants <strong>4 / 7 points</strong> and a <strong>buff</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>This buff lasts for <strong>70 seconds</strong> and provides <strong>basic attacks extra damage and decreases opponent movement speed for a short time</strong>.</p>",
  "spawn.info.baltoy.generic": "<p>Starts spawning at <strong>9:45</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p>",
  "spawn.info.baltoy.lane_940": "<p>Starts spawning at <strong>9:40</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.baltoy.lane_920": "<p>Starts spawning at <strong>9:40</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.baltoy.lane_910": "<p>Starts spawning at <strong>9:10</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.baltoy.lane_910_only": "<p>Starts spawning at <strong>9:10</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p>",
  "spawn.info.baltoy.lane_840": "<p>Starts spawning at <strong>8:40</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p>",
  "spawn.info.baltoy.tower": "<p>Starts spawning when the corresponding <strong>first tower is destroyed</strong>.</p><p>When defeated, grants <strong>2 points</strong>. <strong>Respawns after 60 seconds</strong>.</p>",
  "spawn.info.regidrago": "<p>Spawns in the <strong>middle of the map at 8:00</strong>. When killed, <strong>Altaria spawn instead 1:30 minute after</strong>.<br>The team that defeats <strong>Regidrago</strong> gains <strong>experience for all teammates</strong>.<br>The player who lands the killing blow receives a <strong>scoring-speed buff</strong> and <strong>20 points</strong>.</p>",
  "spawn.info.regieleki": "<p>Spawns at <strong>7:00</strong> on a random lane between <strong>toplane and botlane</strong>.<br>When defeated, goes to the base of the opposing team and if it touches the base, scores <strong>20/16/12/8 points</strong> and if the base is still alive, makes <strong>any goal become instant during 20/15/10/5s</strong>.<br>The player who lands the killing blow receives <strong>20 points</strong>.<br>Respawns <strong>2 minutes</strong> after death.</p>",
  "spawn.info.regi.700": "<p>Spawns at <strong>7:00</strong>.</p>",
  "spawn.info.xatu": "<p>Spawns at <strong>9:59</strong>.</p><p>Grants <strong>a large amount of experience</strong> and <strong>2 points</strong> when defeated.</p><p><strong>Does not respawn</strong>.</p>",
  "spawn.info.natu.900": "<p>Spawns at <strong>9:00</strong>.</p>",
  "spawn.info.natu.920": "<p>Spawns at <strong>9:20</strong>.</p>",
  "spawn.info.indeedee.lane": "<p>Starts spawning at <strong>9:30</strong> / <strong>9:35</strong>.</p><p>When defeated, <strong>respawns after 60 seconds</strong> and grants <strong>5 points</strong>.</p><p>If either of the <strong>first towers</strong> in the lane is destroyed, it <strong>disappears</strong>.</p>",
  "spawn.info.indeedee.tower": "<p>Spawns when the corresponding <strong>first tower</strong> is destroyed.</p><p>When defeated, <strong>respawns after 60 seconds</strong> and grants <strong>5 points</strong>.</p>",
  "spawn.info.salac": "<p>When consumed, grants a <strong>movement speed bonus</strong> for <strong>3 seconds</strong>.</p><p>Starts spawning at <strong>8:30</strong> and respawns <strong>60 seconds</strong> after being consumed.</p>",
  "spawn.info.salac.short": "<p>Movement speed bonus for 3 seconds.</p>",
  "spawn.info.altaria.after_regidrago": "<p>Starts spawning <strong>mid 1:30 after Regidrago is killed</strong>.</p>",
  "spawn.info.altaria.rayquaza": "<p>Spawn at <strong>8:00</strong> and respawn every <strong>1:30</strong>.</p><p>Disappears at <strong>2:30</strong>.</p>",
  "spawn.info.kyogre.boss": "<p>When defeated, all team members alive receive a <strong>buff</strong>, <strong>15 aeos points</strong> and all opponents' towers still up are disabled for 1:30 (opponent can't receive shield and regen).<br>This buff is <strong>permanent until the holder is KO'd</strong>. When the holder is <strong>KO'd</strong>, the buff <strong>transfers to the killer</strong>.<br>It provides a <strong>goal-scoring speed boost</strong>, <strong>self regen (5% per second)</strong>, and a <strong>small shield</strong>.<br>Always spawn at 2:00.</p>",
  "spawn.info.rayquaza.boss": "<p>When defeated, grants the winning team <strong>15 aeos points</strong>, a <strong>shield</strong> that <strong>speeds up goal scoring</strong> and <strong>prevents goals from being blocked</strong>.<br>Always spawns at 2:00.</p>",
  "spawn.info.regidrago.kyogre": "<p>Spawns in the <strong>middle of the map at 8:00</strong>.</p>",
  "spawn.info.xatu.short": "<p>Spawns at <strong>9:59</strong>.</p>",
  "spawn.info.indeedee.tower_break": "<p>Tower break spawn.</p>",
  "spawn.info.baltoy.tower_break": "<p>Tower break spawn.</p>",
  "spawn.info.bunnelby.lane": "<p>Starts spawning at <strong>9:40</strong>.</p>",
  "spawn.info.bunnelby.lane_920_short": "<p>Starts spawning at <strong>9:20</strong>.</p>",
  "spawn.info.bunnelby.lane_915_short": "<p>Starts spawning at <strong>9:15</strong>.</p>",
  "spawn.info.baltoy.lane_940_short": "<p>Starts spawning at <strong>9:40</strong>.</p>",
  "spawn.info.baltoy.945_short": "<p>Starts spawning at <strong>9:45</strong>.</p>",
  "spawn.info.baltoy.lane_910_short": "<p>Starts spawning at <strong>9:10</strong>.</p>",
  "spawn.info.baltoy.lane_840_short": "<p>Starts spawning at <strong>8:40</strong>.</p>",
  "spawn.info.indeedee.lane_930": "<p>Starts spawning at <strong>9:30</strong>.</p>",
  "spawn.info.indeedee.lane_935": "<p>Starts spawning at <strong>9:35</strong>.</p>",
  "spawn.info.bunnelby.points": "<p>Give 2 points.</p>",
  "spawn.info.baltoy.tower_kyogre": "<p>Starts spawning when the corresponding <strong>first tower is destroyed</strong>.</p>",
  "spawn.info.indeedee.tower_short": "<p>Spawns when the corresponding <strong>first tower</strong> is destroyed.</p>"
});
var en_default = names;

// src/i18n/pt-BR.ts
var ptBR = {
  ...en_default,
  // Maps — names and descriptions
  "map-groudon": "Ru\xEDnas Celestes de Theia",
  "map-groudon.description": "Mapa 5v5 com Groudon.",
  "map-kyogre": "Ru\xEDnas Celestes de Theia",
  "map-kyogre.description": "Mapa 5v5 com Kyogre.",
  "map-rayquaza": "Ru\xEDnas Celestes de Theia",
  "map-rayquaza.description": "Mapa 5v5 com Rayquaza.",
  // Spawn info (HTML) — principais textos; demais usam fallback en
  "spawn.info.groudon.boss": "<p>Ao ser derrotado, todos os membros vivos do time recebem <strong>buff</strong> e <strong>15 pontos aeos</strong>.<br>O buff \xE9 <strong>permanente at\xE9 o portador ser nocauteado</strong>. Ao ser nocauteado, o buff <strong>transfere para quem aplicou o KO</strong>.<br>Concede <strong>aumento de velocidade de pontua\xE7\xE3o</strong>, <strong>grande aumento de dano</strong> e <strong>pequeno escudo</strong>.<br>Sempre aparece \xE0s 2:00.</p>",
  "spawn.info.kyogre.boss": "<p>Ao ser derrotado, todos os membros vivos do time recebem <strong>buff</strong>, <strong>15 pontos aeos</strong> e as torres advers\xE1rias ainda de p\xE9 ficam desativadas por 1:30 (advers\xE1rio n\xE3o recebe escudo e regenera\xE7\xE3o).<br>O buff \xE9 <strong>permanente at\xE9 o portador ser nocauteado</strong>. Ao ser nocauteado, o buff <strong>transfere para quem aplicou o KO</strong>.<br>Concede <strong>aumento de velocidade de pontua\xE7\xE3o</strong>, <strong>autorregenera\xE7\xE3o (5% por segundo)</strong> e <strong>pequeno escudo</strong>.<br>Sempre aparece \xE0s 2:00.</p>",
  "spawn.info.rayquaza.boss": "<p>Ao ser derrotado, concede ao time vencedor <strong>15 pontos aeos</strong>, um <strong>escudo</strong> que <strong>acelera a pontua\xE7\xE3o</strong> e <strong>impede que gols sejam bloqueados</strong>.<br>Sempre aparece \xE0s 2:00.</p>",
  "spawn.info.bunnelby.initial": "<p><strong>Aparecem no in\xEDcio da partida</strong> e <strong>n\xE3o ressurgem</strong> ap\xF3s derrotados.</p><p>D\xE3o 2 pontos.</p>",
  "spawn.info.bunnelby.points": "<p>D\xE3o 2 pontos.</p>",
  "spawn.info.regi.700": "<p>Aparece \xE0s <strong>7:00</strong>.</p>",
  "spawn.info.bunnelby.lane_940": "<p>Come\xE7a a aparecer \xE0s <strong>9:40</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong> e ressurgem ap\xF3s <strong>60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destru\xEDda, <strong>desaparece</strong>.</p>",
  "spawn.info.bunnelby.lane_920": "<p>Come\xE7a a aparecer \xE0s <strong>9:20</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong> e ressurgem ap\xF3s <strong>60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destru\xEDda, <strong>desaparece</strong>.</p>",
  "spawn.info.bunnelby.lane_915": "<p>Come\xE7a a aparecer \xE0s <strong>9:15</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong> e ressurgem ap\xF3s <strong>60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destru\xEDda, <strong>desaparece</strong>.</p>",
  "spawn.info.accelgor": "<p>Come\xE7a a aparecer \xE0s <strong>9:45</strong>.</p><p>Quando derrotado, concede <strong>4 / 7 pontos</strong> e um <strong>buff</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p><p>O buff dura <strong>70 segundos</strong> e concede <strong>10% de redu\xE7\xE3o no tempo de recarga dos movimentos</strong>.</p>",
  "spawn.info.escavalier": "<p>Come\xE7a a aparecer \xE0s <strong>9:45</strong>.</p><p>Quando derrotado, concede <strong>4 / 7 pontos</strong> e um <strong>buff</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p><p>O buff dura <strong>70 segundos</strong> e concede <strong>dano extra em ataques b\xE1sicos e reduz a velocidade de movimento do oponente por um curto tempo</strong>.</p>",
  "spawn.info.baltoy.generic": "<p>Come\xE7a a aparecer \xE0s <strong>9:45</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p>",
  "spawn.info.baltoy.lane_940": "<p>Come\xE7a a aparecer \xE0s <strong>9:40</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destru\xEDda, <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_920": "<p>Come\xE7a a aparecer \xE0s <strong>9:40</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destru\xEDda, <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_910": "<p>Come\xE7a a aparecer \xE0s <strong>9:10</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destru\xEDda, <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_910_only": "<p>Come\xE7a a aparecer \xE0s <strong>9:10</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p>",
  "spawn.info.baltoy.lane_840": "<p>Come\xE7a a aparecer \xE0s <strong>8:40</strong>.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p>",
  "spawn.info.baltoy.tower": "<p>Come\xE7a a aparecer quando a <strong>primeira torre correspondente</strong> for destru\xEDda.</p><p>Quando derrotado, concede <strong>2 pontos</strong>. <strong>Ressurge ap\xF3s 60 segundos</strong>.</p>",
  "spawn.info.regidrago": "<p>Aparece no <strong>centro do mapa \xE0s 8:00</strong>. Quando derrotado, <strong>Altaria aparece 1:30 minuto depois</strong>.<br>O time que derrotar o <strong>Regidrago</strong> ganha <strong>experi\xEAncia para todos os aliados</strong>.<br>Quem aplicar o golpe final recebe <strong>buff de velocidade de pontua\xE7\xE3o</strong> e <strong>20 pontos</strong>.</p>",
  "spawn.info.regieleki": "<p>Aparece \xE0s <strong>7:00</strong> em uma lane aleat\xF3ria entre <strong>topo e base</strong>.<br>Quando derrotado, vai at\xE9 a base do time advers\xE1rio e, se tocar a base, pontua <strong>20/16/12/8 pontos</strong>; se a base ainda estiver de p\xE9, <strong>gols ficam instant\xE2neos por 20/15/10/5s</strong>.<br>Quem aplicar o golpe final recebe <strong>20 pontos</strong>.<br>Ressurge <strong>2 minutos</strong> ap\xF3s a morte.</p>",
  "spawn.info.xatu": "<p>Aparece \xE0s <strong>9:59</strong>.</p><p>Concede <strong>muita experi\xEAncia</strong> e <strong>2 pontos</strong> quando derrotado.</p><p><strong>N\xE3o ressurgem</strong>.</p>",
  "spawn.info.natu.900": "<p>Aparece \xE0s <strong>9:00</strong>.</p>",
  "spawn.info.natu.920": "<p>Aparece \xE0s <strong>9:20</strong>.</p>",
  "spawn.info.indeedee.lane": "<p>Come\xE7a a aparecer \xE0s <strong>9:30</strong> / <strong>9:35</strong>.</p><p>Quando derrotado, <strong>ressurge ap\xF3s 60 segundos</strong> e concede <strong>5 pontos</strong>.</p><p>Se alguma das <strong>primeiras torres</strong> da lane for destru\xEDda, <strong>desaparece</strong>.</p>",
  "spawn.info.indeedee.tower": "<p>Aparece quando a <strong>primeira torre correspondente</strong> for destru\xEDda.</p><p>Quando derrotado, <strong>ressurge ap\xF3s 60 segundos</strong> e concede <strong>5 pontos</strong>.</p>",
  "spawn.info.salac": "<p>Quando consumido, concede <strong>b\xF4nus de velocidade de movimento</strong> por <strong>3 segundos</strong>.</p><p>Come\xE7a a aparecer \xE0s <strong>8:30</strong> e ressurgem <strong>60 segundos</strong> ap\xF3s o consumo.</p>",
  "spawn.info.salac.short": "<p>B\xF4nus de velocidade de movimento por 3 segundos.</p>",
  "spawn.info.altaria.after_regidrago": "<p>Come\xE7a a aparecer <strong>1:30 ap\xF3s o Regidrago ser derrotado</strong>.</p>",
  "spawn.info.altaria.rayquaza": "<p>Aparece \xE0s <strong>8:00</strong> e resurge a cada <strong>1:30</strong>.</p><p>Desaparece \xE0s <strong>2:30</strong>.</p>",
  "spawn.info.regidrago.kyogre": "<p>Aparece no <strong>centro do mapa \xE0s 8:00</strong>.</p>",
  "spawn.info.xatu.short": "<p>Aparece \xE0s <strong>9:59</strong>.</p>",
  "spawn.info.indeedee.tower_break": "<p>Aparece quando torre \xE9 destru\xEDda.</p>",
  "spawn.info.baltoy.tower_break": "<p>Aparece quando torre \xE9 destru\xEDda.</p>",
  "spawn.info.bunnelby.lane": "<p>Come\xE7a a aparecer \xE0s <strong>9:40</strong>.</p>",
  "spawn.info.bunnelby.lane_920_short": "<p>Come\xE7a a aparecer \xE0s <strong>9:20</strong>.</p>",
  "spawn.info.bunnelby.lane_915_short": "<p>Come\xE7a a aparecer \xE0s <strong>9:15</strong>.</p>",
  "spawn.info.baltoy.lane_940_short": "<p>Come\xE7a a aparecer \xE0s <strong>9:40</strong>.</p>",
  "spawn.info.baltoy.945_short": "<p>Come\xE7a a aparecer \xE0s <strong>9:45</strong>.</p>",
  "spawn.info.baltoy.lane_910_short": "<p>Come\xE7a a aparecer \xE0s <strong>9:10</strong>.</p>",
  "spawn.info.baltoy.lane_840_short": "<p>Come\xE7a a aparecer \xE0s <strong>8:40</strong>.</p>",
  "spawn.info.indeedee.lane_930": "<p>Come\xE7a a aparecer \xE0s <strong>9:30</strong>.</p>",
  "spawn.info.indeedee.lane_935": "<p>Come\xE7a a aparecer \xE0s <strong>9:35</strong>.</p>",
  "spawn.info.baltoy.tower_kyogre": "<p>Come\xE7a a aparecer quando a <strong>primeira torre correspondente</strong> for destru\xEDda.</p>",
  "spawn.info.indeedee.tower_short": "<p>Aparece quando a <strong>primeira torre correspondente</strong> for destru\xEDda.</p>"
};
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
  zapdos: "\u30B5\u30F3\u30C0\u30FC",
  moltres: "\u30D5\u30A1\u30A4\u30E4\u30FC",
  dragonite: "\u30AB\u30A4\u30EA\u30E5\u30FC",
  mewtwox: "\u30E1\u30AC\u30DF\u30E5\u30A6\u30C4\u30FCX",
  mewtwoy: "\u30E1\u30AC\u30DF\u30E5\u30A6\u30C4\u30FCY",
  "mega-mewtwo-x": "\u30E1\u30AC\u30DF\u30E5\u30A6\u30C4\u30FCX",
  "mega-mewtwo-y": "\u30E1\u30AC\u30DF\u30E5\u30A6\u30C4\u30FCY",
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
  miraidon: "\u30DF\u30E9\u30A4\u30C9\u30F3",
  // Maps — names and descriptions
  "map-groudon": "\u30C6\u30A4\u30A2\u306E\u5929\u7A7A\u907A\u8DE1",
  "map-groudon.description": "\u30B0\u30E9\u30FC\u30C9\u30F3\u304C\u767B\u5834\u3059\u308B5v5\u30DE\u30C3\u30D7\u3002",
  "map-kyogre": "\u30C6\u30A4\u30A2\u306E\u5929\u7A7A\u907A\u8DE1",
  "map-kyogre.description": "\u30AB\u30A4\u30AA\u30FC\u30AC\u304C\u767B\u5834\u3059\u308B5v5\u30DE\u30C3\u30D7\u3002",
  "map-rayquaza": "\u30C6\u30A4\u30A2\u306E\u5929\u7A7A\u907A\u8DE1",
  "map-rayquaza.description": "\u30EC\u30C3\u30AF\u30A6\u30B6\u304C\u767B\u5834\u3059\u308B5v5\u30DE\u30C3\u30D7\u3002",
  // Neutrals (wild Pokémon / items)
  accelgor: "\u30A2\u30C3\u30B1\u30E9\u30FC",
  altaria: "\u30C1\u30EB\u30BF\u30EA\u30B9",
  baltoy: "\u30E4\u30C9\u30F3",
  bunnelby: "\u30DB\u30EB\u30D3\u30FC",
  escavalier: "\u30B7\u30E5\u30D0\u30EB\u30B4",
  groudon: "\u30B0\u30E9\u30FC\u30C9\u30F3",
  indeedee: "\u30A4\u30A8\u30C3\u30B5\u30F3",
  kyogre: "\u30AB\u30A4\u30AA\u30FC\u30AC",
  natu: "\u30CD\u30A4\u30C6\u30A3",
  rayquaza: "\u30EC\u30C3\u30AF\u30A6\u30B6",
  regidrago: "\u30EC\u30B8\u30C9\u30E9\u30B4",
  regice: "\u30EC\u30B8\u30A2\u30A4\u30B9",
  regieleki: "\u30EC\u30B8\u30A8\u30EC\u30AD",
  regirock: "\u30EC\u30B8\u30ED\u30C3\u30AF",
  registeel: "\u30EC\u30B8\u30B9\u30C1\u30EB",
  salac: "\u30B5\u30E9\u30AF\u306E\u307F",
  sitrus: "\u30AA\u30DC\u30F3\u306E\u307F",
  xatu: "\u30CD\u30A4\u30C6\u30A3\u30AA",
  // Spawn info (HTML)
  "spawn.info.groudon.boss": "<p>\u6483\u7834\u3059\u308B\u3068\u3001\u751F\u5B58\u3057\u3066\u3044\u308B\u5473\u65B9\u5168\u54E1\u304C<strong>\u30D0\u30D5</strong>\u3068<strong>15\u30A2\u30A8\u30AA\u30B9\u30DD\u30A4\u30F3\u30C8</strong>\u3092\u7372\u5F97\u3002<br>\u3053\u306E\u30D0\u30D5\u306F<strong>\u6240\u6301\u8005\u304C\u30CE\u30C3\u30AF\u30A2\u30A6\u30C8\u3055\u308C\u308B\u307E\u3067\u6C38\u7D9A</strong>\u3002\u30CE\u30C3\u30AF\u30A2\u30A6\u30C8\u3055\u308C\u308B\u3068\u30D0\u30D5\u306F<strong>\u4E0E\u3048\u305F\u5074\u306B\u79FB\u308B</strong>\u3002<br><strong>\u30B4\u30FC\u30EB\u901F\u5EA6\u4E0A\u6607</strong>\u30FB<strong>\u5927\u30C0\u30E1\u30FC\u30B8\u4E0A\u6607</strong>\u30FB<strong>\u5C0F\u30B7\u30FC\u30EB\u30C9</strong>\u3002<br>2:00\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.bunnelby.initial": "<p><strong>\u8A66\u5408\u958B\u59CB\u6642\u306B\u51FA\u73FE</strong>\u3057\u3001<strong>\u6483\u7834\u5F8C\u306F\u518D\u51FA\u73FE\u3057\u306A\u3044</strong>\u3002</p><p>2\u30DD\u30A4\u30F3\u30C8\u7372\u5F97\u3002</p>",
  "spawn.info.bunnelby.lane_940": "<p><strong>9:40</strong>\u304B\u3089\u51FA\u73FE\u3002<br>\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u7372\u5F97\u3001<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002<br>\u30EC\u30FC\u30F3\u306E<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u304C\u7834\u58CA\u3055\u308C\u308B\u3068<strong>\u6D88\u6EC5</strong>\u3002</p>",
  "spawn.info.bunnelby.lane_920": "<p><strong>9:20</strong>\u304B\u3089\u51FA\u73FE\u3002<br>\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u7372\u5F97\u3001<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002<br>\u30EC\u30FC\u30F3\u306E<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u304C\u7834\u58CA\u3055\u308C\u308B\u3068<strong>\u6D88\u6EC5</strong>\u3002</p>",
  "spawn.info.bunnelby.lane_915": "<p><strong>9:15</strong>\u304B\u3089\u51FA\u73FE\u3002<br>\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u7372\u5F97\u3001<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002<br>\u30EC\u30FC\u30F3\u306E<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u304C\u7834\u58CA\u3055\u308C\u308B\u3068<strong>\u6D88\u6EC5</strong>\u3002</p>",
  "spawn.info.accelgor": "<p><strong>9:45</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>4/7\u30DD\u30A4\u30F3\u30C8</strong>\u3068<strong>\u30D0\u30D5</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002<br>\u30D0\u30D5\u306F<strong>70\u79D2</strong>\u9593\u3001<strong>\u308F\u3056\u306E\u30AF\u30FC\u30EB\u30C0\u30A6\u30F310%\u77ED\u7E2E</strong>\u3002</p>",
  "spawn.info.escavalier": "<p><strong>9:45</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>4/7\u30DD\u30A4\u30F3\u30C8</strong>\u3068<strong>\u30D0\u30D5</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002<br>\u30D0\u30D5\u306F<strong>70\u79D2</strong>\u9593\u3001<strong>\u57FA\u672C\u653B\u6483\u30C0\u30E1\u30FC\u30B8\u4E0A\u6607\u30FB\u76F8\u624B\u306E\u79FB\u52D5\u901F\u5EA6\u77ED\u6642\u9593\u4F4E\u4E0B</strong>\u3002</p>",
  "spawn.info.baltoy.generic": "<p><strong>9:45</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002</p>",
  "spawn.info.baltoy.lane_940": "<p><strong>9:40</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002\u30EC\u30FC\u30F3\u306E<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u7834\u58CA\u3067<strong>\u6D88\u6EC5</strong>\u3002</p>",
  "spawn.info.baltoy.lane_920": "<p><strong>9:40</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002\u30EC\u30FC\u30F3\u306E<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u7834\u58CA\u3067<strong>\u6D88\u6EC5</strong>\u3002</p>",
  "spawn.info.baltoy.lane_910": "<p><strong>9:10</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002\u30EC\u30FC\u30F3\u306E<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u7834\u58CA\u3067<strong>\u6D88\u6EC5</strong>\u3002</p>",
  "spawn.info.baltoy.lane_910_only": "<p><strong>9:10</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002</p>",
  "spawn.info.baltoy.lane_840": "<p><strong>8:40</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002</p>",
  "spawn.info.baltoy.tower": "<p>\u5BFE\u5FDC\u3059\u308B<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u7834\u58CA\u5F8C\u306B\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u3002<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3002</p>",
  "spawn.info.regidrago": "<p><strong>8:00</strong>\u306B\u30DE\u30C3\u30D7\u4E2D\u592E\u306B\u51FA\u73FE\u3002\u6483\u7834\u304B\u3089<strong>1:30</strong>\u5F8C\u306B\u30C1\u30EB\u30BF\u30EA\u30B9\u304C\u51FA\u73FE\u3002<br>\u6483\u7834\u3057\u305F\u30C1\u30FC\u30E0\u306F<strong>\u5473\u65B9\u5168\u54E1\u306B\u7D4C\u9A13\u5024</strong>\u3002\u3068\u3069\u3081\u3092\u523A\u3057\u305F\u30D7\u30EC\u30A4\u30E4\u30FC\u306F<strong>\u5F97\u70B9\u901F\u5EA6\u30D0\u30D5</strong>\u3068<strong>20\u30DD\u30A4\u30F3\u30C8</strong>\u3002</p>",
  "spawn.info.regieleki": "<p><strong>7:00</strong>\u306B\u30C8\u30C3\u30D7/\u30DC\u30C8\u30E0\u306E\u3044\u305A\u308C\u304B\u306E\u30EC\u30FC\u30F3\u306B\u51FA\u73FE\u3002\u6483\u7834\u3059\u308B\u3068\u76F8\u624B\u9663\u5730\u3078\u3002\u9663\u5730\u306B\u5230\u9054\u3067<strong>20/16/12/8\u30DD\u30A4\u30F3\u30C8</strong>\u3001\u9663\u5730\u304C\u5065\u5728\u306A\u3089<strong>20/15/10/5\u79D2\u9593\u30B4\u30FC\u30EB\u5373\u6642</strong>\u3002<br>\u3068\u3069\u3081\u3067<strong>20\u30DD\u30A4\u30F3\u30C8</strong>\u3002\u6483\u7834\u304B\u3089<strong>2\u5206</strong>\u3067\u518D\u51FA\u73FE\u3002</p>",
  "spawn.info.regi.700": "<p><strong>7:00</strong>\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.xatu": "<p><strong>9:59</strong>\u306B\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>\u5927\u91CF\u7D4C\u9A13\u5024</strong>\u3068<strong>2\u30DD\u30A4\u30F3\u30C8</strong>\u3002<strong>\u518D\u51FA\u73FE\u306A\u3057</strong>\u3002</p>",
  "spawn.info.natu.900": "<p><strong>9:00</strong>\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.natu.920": "<p><strong>9:20</strong>\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.indeedee.lane": "<p><strong>9:30</strong>/<strong>9:35</strong>\u304B\u3089\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3001<strong>5\u30DD\u30A4\u30F3\u30C8</strong>\u3002\u30EC\u30FC\u30F3\u306E<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u7834\u58CA\u3067<strong>\u6D88\u6EC5</strong>\u3002</p>",
  "spawn.info.indeedee.tower": "<p>\u5BFE\u5FDC\u3059\u308B<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u7834\u58CA\u5F8C\u306B\u51FA\u73FE\u3002\u6483\u7834\u3067<strong>60\u79D2</strong>\u5F8C\u306B\u518D\u51FA\u73FE\u3001<strong>5\u30DD\u30A4\u30F3\u30C8</strong>\u3002</p>",
  "spawn.info.salac": "<p>\u4F7F\u7528\u3067<strong>3\u79D2\u9593</strong><strong>\u79FB\u52D5\u901F\u5EA6\u30A2\u30C3\u30D7</strong>\u3002<strong>8:30</strong>\u304B\u3089\u51FA\u73FE\u3001\u4F7F\u7528\u5F8C<strong>60\u79D2</strong>\u3067\u518D\u51FA\u73FE\u3002</p>",
  "spawn.info.salac.short": "<p>3\u79D2\u9593\u79FB\u52D5\u901F\u5EA6\u30A2\u30C3\u30D7\u3002</p>",
  "spawn.info.altaria.after_regidrago": "<p>\u30EC\u30B8\u30C9\u30E9\u30B4\u6483\u7834\u304B\u3089<strong>1:30</strong>\u5F8C\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.altaria.rayquaza": "<p><strong>8:00</strong>\u306B\u51FA\u73FE\u3001<strong>1:30</strong>\u3054\u3068\u306B\u518D\u51FA\u73FE\u3002<strong>2:30</strong>\u306B\u6D88\u6EC5\u3002</p>",
  "spawn.info.kyogre.boss": "<p>\u6483\u7834\u3059\u308B\u3068\u751F\u5B58\u5473\u65B9\u5168\u54E1\u304C<strong>\u30D0\u30D5</strong>\u3068<strong>15\u30A2\u30A8\u30AA\u30B9\u30DD\u30A4\u30F3\u30C8</strong>\u3092\u7372\u5F97\u3002\u76F8\u624B\u306E\u6B8B\u5B58\u30BF\u30EF\u30FC\u306F1:30\u9593\u7121\u52B9\uFF08\u30B7\u30FC\u30EB\u30C9\u30FB\u56DE\u5FA9\u4E0D\u53EF\uFF09\u3002<br>\u30D0\u30D5\u306F<strong>\u6240\u6301\u8005\u304C\u30CE\u30C3\u30AF\u30A2\u30A6\u30C8\u3055\u308C\u308B\u307E\u3067\u6C38\u7D9A</strong>\u3002\u30CE\u30C3\u30AF\u30A2\u30A6\u30C8\u3067<strong>\u4E0E\u3048\u305F\u5074\u306B\u79FB\u308B</strong>\u3002<br><strong>\u30B4\u30FC\u30EB\u901F\u5EA6\u4E0A\u6607</strong>\u30FB<strong>\u81EA\u5DF1\u56DE\u5FA9(\u6BCE\u79D25%)</strong>\u30FB<strong>\u5C0F\u30B7\u30FC\u30EB\u30C9</strong>\u3002<br>2:00\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.rayquaza.boss": "<p>\u6483\u7834\u3067\u52DD\u5229\u30C1\u30FC\u30E0\u306B<strong>15\u30A2\u30A8\u30AA\u30B9\u30DD\u30A4\u30F3\u30C8</strong>\u3068<strong>\u30B7\u30FC\u30EB\u30C9</strong>\uFF08\u5F97\u70B9\u901F\u5EA6\u4E0A\u6607\u30FB\u30B4\u30FC\u30EB\u59A8\u5BB3\u7121\u52B9\uFF09\u3002<br>2:00\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.regidrago.kyogre": "<p><strong>8:00</strong>\u306B\u30DE\u30C3\u30D7\u4E2D\u592E\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.xatu.short": "<p><strong>9:59</strong>\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.indeedee.tower_break": "<p>\u30BF\u30EF\u30FC\u7834\u58CA\u3067\u51FA\u73FE\u3002</p>",
  "spawn.info.baltoy.tower_break": "<p>\u30BF\u30EF\u30FC\u7834\u58CA\u3067\u51FA\u73FE\u3002</p>",
  "spawn.info.bunnelby.lane": "<p><strong>9:40</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.bunnelby.lane_920_short": "<p><strong>9:20</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.bunnelby.lane_915_short": "<p><strong>9:15</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.baltoy.lane_940_short": "<p><strong>9:40</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.baltoy.945_short": "<p><strong>9:45</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.baltoy.lane_910_short": "<p><strong>9:10</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.baltoy.lane_840_short": "<p><strong>8:40</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.indeedee.lane_930": "<p><strong>9:30</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.indeedee.lane_935": "<p><strong>9:35</strong>\u304B\u3089\u51FA\u73FE\u3002</p>",
  "spawn.info.bunnelby.points": "<p>2\u30DD\u30A4\u30F3\u30C8\u7372\u5F97\u3002</p>",
  "spawn.info.baltoy.tower_kyogre": "<p>\u5BFE\u5FDC\u3059\u308B<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u7834\u58CA\u5F8C\u306B\u51FA\u73FE\u3002</p>",
  "spawn.info.indeedee.tower_short": "<p>\u5BFE\u5FDC\u3059\u308B<strong>\u6700\u521D\u306E\u30BF\u30EF\u30FC</strong>\u7834\u58CA\u5F8C\u306B\u51FA\u73FE\u3002</p>"
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
  zapdos: "\xC9lecthor",
  moltres: "Sulfura",
  dragonite: "Dracolosse",
  mewtwox: "M\xE9ga-Mewtwo X",
  mewtwoy: "M\xE9ga-Mewtwo Y",
  "mega-mewtwo-x": "M\xE9ga-Mewtwo X",
  "mega-mewtwo-y": "M\xE9ga-Mewtwo Y",
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
  miraidon: "Miraidon",
  // Maps — names and descriptions
  "map-groudon": "Ruines C\xE9lestes de Theia",
  "map-groudon.description": "Carte 5v5 avec Groudon.",
  "map-kyogre": "Ruines C\xE9lestes de Theia",
  "map-kyogre.description": "Carte 5v5 avec Kyogre.",
  "map-rayquaza": "Ruines C\xE9lestes de Theia",
  "map-rayquaza.description": "Carte 5v5 avec Rayquaza.",
  // Neutrals (wild Pokémon / items)
  accelgor: "Accelgor",
  altaria: "Altaria",
  baltoy: "Balbuto",
  bunnelby: "Sapereau",
  escavalier: "Lan\xE7argot",
  groudon: "Groudon",
  indeedee: "Wimessir",
  kyogre: "Kyogre",
  natu: "Natu",
  rayquaza: "Rayquaza",
  regidrago: "Regidrago",
  regice: "Regice",
  regieleki: "Regieleki",
  regirock: "Regirock",
  registeel: "Registeel",
  salac: "Baie Salac",
  sitrus: "Baie Sitrus",
  xatu: "Xatu",
  // Spawn info (HTML)
  "spawn.info.groudon.boss": "<p>Une fois vaincu, tous les co\xE9quipiers vivants re\xE7oivent un <strong>buff</strong> et <strong>15 points aeos</strong>.<br>Ce buff est <strong>permanent jusqu'\xE0 ce que le porteur soit K.O.</strong>. Au K.O., le buff <strong>passe au vainqueur</strong>.<br>Il donne un <strong>boost de vitesse de score</strong>, un <strong>gros boost de d\xE9g\xE2ts</strong> et un <strong>petit bouclier</strong>.<br>Appara\xEEt toujours \xE0 2:00.</p>",
  "spawn.info.bunnelby.initial": "<p>Ils <strong>apparaissent au d\xE9but de la partie</strong> et <strong>ne r\xE9apparaissent jamais</strong> une fois vaincus.</p><p>Donnent 2 points.</p>",
  "spawn.info.bunnelby.lane_940": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:40</strong>.</p><p>Vaincu : <strong>2 points</strong>, r\xE9apparition apr\xE8s <strong>60 secondes</strong>.</p><p>Si une des <strong>premi\xE8res tours</strong> de la voie est d\xE9truite, <strong>dispara\xEEt</strong>.</p>",
  "spawn.info.bunnelby.lane_920": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:20</strong>.</p><p>Vaincu : <strong>2 points</strong>, r\xE9apparition apr\xE8s <strong>60 secondes</strong>.</p><p>Si une des <strong>premi\xE8res tours</strong> de la voie est d\xE9truite, <strong>dispara\xEEt</strong>.</p>",
  "spawn.info.bunnelby.lane_915": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:15</strong>.</p><p>Vaincu : <strong>2 points</strong>, r\xE9apparition apr\xE8s <strong>60 secondes</strong>.</p><p>Si une des <strong>premi\xE8res tours</strong> de la voie est d\xE9truite, <strong>dispara\xEEt</strong>.</p>",
  "spawn.info.accelgor": "<p>Commence \xE0 <strong>9:45</strong>. Vaincu : <strong>4 / 7 points</strong> et <strong>buff</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>. Buff <strong>70 s</strong> : <strong>-10% temps de recharge des capacit\xE9s</strong>.</p>",
  "spawn.info.escavalier": "<p>Commence \xE0 <strong>9:45</strong>. Vaincu : <strong>4 / 7 points</strong> et <strong>buff</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>. Buff <strong>70 s</strong> : <strong>d\xE9g\xE2ts d\u2019attaque basique + ralentissement adverse</strong>.</p>",
  "spawn.info.baltoy.generic": "<p>Commence \xE0 <strong>9:45</strong>. Vaincu : <strong>2 points</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>.</p>",
  "spawn.info.baltoy.lane_940": "<p>Commence \xE0 <strong>9:40</strong>. Vaincu : <strong>2 points</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>. <strong>Premi\xE8re tour</strong> d\xE9truite \u2192 <strong>dispara\xEEt</strong>.</p>",
  "spawn.info.baltoy.lane_920": "<p>Commence \xE0 <strong>9:40</strong>. Vaincu : <strong>2 points</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>. <strong>Premi\xE8re tour</strong> d\xE9truite \u2192 <strong>dispara\xEEt</strong>.</p>",
  "spawn.info.baltoy.lane_910": "<p>Commence \xE0 <strong>9:10</strong>. Vaincu : <strong>2 points</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>. <strong>Premi\xE8re tour</strong> d\xE9truite \u2192 <strong>dispara\xEEt</strong>.</p>",
  "spawn.info.baltoy.lane_910_only": "<p>Commence \xE0 <strong>9:10</strong>. Vaincu : <strong>2 points</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>.</p>",
  "spawn.info.baltoy.lane_840": "<p>Commence \xE0 <strong>8:40</strong>. Vaincu : <strong>2 points</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>.</p>",
  "spawn.info.baltoy.tower": "<p>Appara\xEEt quand la <strong>premi\xE8re tour correspondante</strong> est d\xE9truite. Vaincu : <strong>2 points</strong>. R\xE9apparition apr\xE8s <strong>60 s</strong>.</p>",
  "spawn.info.regidrago": "<p>Appara\xEEt <strong>au centre \xE0 8:00</strong>. Vaincu \u2192 <strong>Altaria 1:30 apr\xE8s</strong>.<br>L\u2019\xE9quipe qui le vainc gagne <strong>de l\u2019exp pour toute l\u2019\xE9quipe</strong>. Dernier coup : <strong>buff score</strong> et <strong>20 points</strong>.</p>",
  "spawn.info.regieleki": "<p>Appara\xEEt \xE0 <strong>7:00</strong> en haut ou en bas. Vaincu \u2192 va vers la base adverse ; touche la base : <strong>20/16/12/8 points</strong> ; base vivante : <strong>buts instantan\xE9s 20/15/10/5 s</strong>.<br>Dernier coup : <strong>20 points</strong>. R\xE9apparition <strong>2 min</strong> apr\xE8s.</p>",
  "spawn.info.regi.700": "<p>Appara\xEEt \xE0 <strong>7:00</strong>.</p>",
  "spawn.info.xatu": "<p>Appara\xEEt \xE0 <strong>9:59</strong>. Vaincu : <strong>beaucoup d\u2019exp</strong> et <strong>2 points</strong>. <strong>Ne r\xE9appara\xEEt pas</strong>.</p>",
  "spawn.info.natu.900": "<p>Appara\xEEt \xE0 <strong>9:00</strong>.</p>",
  "spawn.info.natu.920": "<p>Appara\xEEt \xE0 <strong>9:20</strong>.</p>",
  "spawn.info.indeedee.lane": "<p>Commence \xE0 <strong>9:30</strong> / <strong>9:35</strong>. Vaincu : r\xE9apparition <strong>60 s</strong>, <strong>5 points</strong>. <strong>Premi\xE8re tour</strong> d\xE9truite \u2192 <strong>dispara\xEEt</strong>.</p>",
  "spawn.info.indeedee.tower": "<p>Appara\xEEt quand la <strong>premi\xE8re tour correspondante</strong> est d\xE9truite. Vaincu : r\xE9apparition <strong>60 s</strong>, <strong>5 points</strong>.</p>",
  "spawn.info.salac": "<p>Consomm\xE9 : <strong>bonus vitesse 3 s</strong>. Apparition \xE0 <strong>8:30</strong>, r\xE9apparition <strong>60 s</strong> apr\xE8s consommation.</p>",
  "spawn.info.salac.short": "<p>Bonus de vitesse pendant 3 secondes.</p>",
  "spawn.info.altaria.after_regidrago": "<p>Appara\xEEt <strong>1:30 apr\xE8s la chute de Regidrago</strong>.</p>",
  "spawn.info.altaria.rayquaza": "<p>Appara\xEEt \xE0 <strong>8:00</strong>, r\xE9apparition toutes les <strong>1:30</strong>. Dispara\xEEt \xE0 <strong>2:30</strong>.</p>",
  "spawn.info.kyogre.boss": "<p>Vaincu : co\xE9quipiers vivants \u2192 <strong>buff</strong>, <strong>15 points aeos</strong>, tours adverses encore debout d\xE9sactiv\xE9es 1:30 (pas de bouclier/r\xE9g\xE9n).<br>Buff <strong>permanent jusqu\u2019au K.O. du porteur</strong>, puis <strong>passe au vainqueur</strong>.<br><strong>Vitesse de score</strong>, <strong>r\xE9g\xE9n 5%/s</strong>, <strong>petit bouclier</strong>. Appara\xEEt \xE0 2:00.</p>",
  "spawn.info.rayquaza.boss": "<p>Vaincu : \xE9quipe gagnante re\xE7oit <strong>15 points aeos</strong>, un <strong>bouclier</strong> qui <strong>acc\xE9l\xE8re le score</strong> et <strong>emp\xEAche le blocage des buts</strong>. Appara\xEEt \xE0 2:00.</p>",
  "spawn.info.regidrago.kyogre": "<p>Appara\xEEt <strong>au centre \xE0 8:00</strong>.</p>",
  "spawn.info.xatu.short": "<p>Appara\xEEt \xE0 <strong>9:59</strong>.</p>",
  "spawn.info.indeedee.tower_break": "<p>Apparition apr\xE8s destruction de tour.</p>",
  "spawn.info.baltoy.tower_break": "<p>Apparition apr\xE8s destruction de tour.</p>",
  "spawn.info.bunnelby.lane": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:40</strong>.</p>",
  "spawn.info.bunnelby.lane_920_short": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:20</strong>.</p>",
  "spawn.info.bunnelby.lane_915_short": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:15</strong>.</p>",
  "spawn.info.baltoy.lane_940_short": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:40</strong>.</p>",
  "spawn.info.baltoy.945_short": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:45</strong>.</p>",
  "spawn.info.baltoy.lane_910_short": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:10</strong>.</p>",
  "spawn.info.baltoy.lane_840_short": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>8:40</strong>.</p>",
  "spawn.info.indeedee.lane_930": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:30</strong>.</p>",
  "spawn.info.indeedee.lane_935": "<p>Commence \xE0 appara\xEEtre \xE0 <strong>9:35</strong>.</p>",
  "spawn.info.bunnelby.points": "<p>Donnent 2 points.</p>",
  "spawn.info.baltoy.tower_kyogre": "<p>Appara\xEEt quand la <strong>premi\xE8re tour correspondante</strong> est d\xE9truite.</p>",
  "spawn.info.indeedee.tower_short": "<p>Appara\xEEt quand la <strong>premi\xE8re tour correspondante</strong> est d\xE9truite.</p>"
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
  zapdos: "Zapdos",
  moltres: "Moltres",
  dragonite: "Dragonite",
  mewtwox: "Mega-Mewtwo X",
  mewtwoy: "Mega-Mewtwo Y",
  "mega-mewtwo-x": "Mega-Mewtwo X",
  "mega-mewtwo-y": "Mega-Mewtwo Y",
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
  miraidon: "Miraidon",
  // Maps — names and descriptions
  "map-groudon": "Ruinas Celestiales de Theia",
  "map-groudon.description": "Mapa 5v5 con Groudon.",
  "map-kyogre": "Ruinas Celestiales de Theia",
  "map-kyogre.description": "Mapa 5v5 con Kyogre.",
  "map-rayquaza": "Ruinas Celestiales de Theia",
  "map-rayquaza.description": "Mapa 5v5 con Rayquaza.",
  // Neutrals (wild Pokémon / items)
  accelgor: "Accelgor",
  altaria: "Altaria",
  baltoy: "Baltoy",
  bunnelby: "Bunnelby",
  escavalier: "Escavalier",
  groudon: "Groudon",
  indeedee: "Indeedee",
  kyogre: "Kyogre",
  natu: "Natu",
  rayquaza: "Rayquaza",
  regidrago: "Regidrago",
  regice: "Regice",
  regieleki: "Regieleki",
  regirock: "Regirock",
  registeel: "Registeel",
  salac: "Baya Salac",
  sitrus: "Baya Sitrus",
  xatu: "Xatu",
  // Spawn info (HTML)
  "spawn.info.groudon.boss": "<p>Al derrotarlo, todos los compa\xF1eros vivos reciben <strong>buff</strong> y <strong>15 puntos aeos</strong>.<br>El buff es <strong>permanente hasta que el portador sea K.O.</strong>. Al ser K.O., el buff <strong>pasa al que lo derrot\xF3</strong>.<br>Da <strong>aumento de velocidad de anotaci\xF3n</strong>, <strong>gran aumento de da\xF1o</strong> y <strong>peque\xF1o escudo</strong>.<br>Siempre aparece a las 2:00.</p>",
  "spawn.info.bunnelby.initial": "<p><strong>Aparecen al inicio de la partida</strong> y <strong>no reaparecen</strong> al ser derrotados.</p><p>Dan 2 puntos.</p>",
  "spawn.info.bunnelby.lane_940": "<p>Empieza a aparecer a las <strong>9:40</strong>.</p><p>Al derrotarlo: <strong>2 puntos</strong>, reaparece tras <strong>60 segundos</strong>.</p><p>Si alguna <strong>primera torre</strong> del carril cae, <strong>desaparece</strong>.</p>",
  "spawn.info.bunnelby.lane_920": "<p>Empieza a aparecer a las <strong>9:20</strong>.</p><p>Al derrotarlo: <strong>2 puntos</strong>, reaparece tras <strong>60 segundos</strong>.</p><p>Si alguna <strong>primera torre</strong> del carril cae, <strong>desaparece</strong>.</p>",
  "spawn.info.bunnelby.lane_915": "<p>Empieza a aparecer a las <strong>9:15</strong>.</p><p>Al derrotarlo: <strong>2 puntos</strong>, reaparece tras <strong>60 segundos</strong>.</p><p>Si alguna <strong>primera torre</strong> del carril cae, <strong>desaparece</strong>.</p>",
  "spawn.info.accelgor": "<p>Empieza a las <strong>9:45</strong>. Derrotado: <strong>4 / 7 puntos</strong> y <strong>buff</strong>. Reaparece en <strong>60 s</strong>. Buff <strong>70 s</strong>: <strong>-10% enfriamiento de movimientos</strong>.</p>",
  "spawn.info.escavalier": "<p>Empieza a las <strong>9:45</strong>. Derrotado: <strong>4 / 7 puntos</strong> y <strong>buff</strong>. Reaparece en <strong>60 s</strong>. Buff <strong>70 s</strong>: <strong>da\xF1o extra en ataques b\xE1sicos y ralentiza al rival</strong>.</p>",
  "spawn.info.baltoy.generic": "<p>Empieza a las <strong>9:45</strong>. Derrotado: <strong>2 puntos</strong>. Reaparece en <strong>60 s</strong>.</p>",
  "spawn.info.baltoy.lane_940": "<p>Empieza a las <strong>9:40</strong>. Derrotado: <strong>2 puntos</strong>. Reaparece en <strong>60 s</strong>. <strong>Primera torre</strong> del carril destruida \u2192 <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_920": "<p>Empieza a las <strong>9:40</strong>. Derrotado: <strong>2 puntos</strong>. Reaparece en <strong>60 s</strong>. <strong>Primera torre</strong> del carril destruida \u2192 <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_910": "<p>Empieza a las <strong>9:10</strong>. Derrotado: <strong>2 puntos</strong>. Reaparece en <strong>60 s</strong>. <strong>Primera torre</strong> del carril destruida \u2192 <strong>desaparece</strong>.</p>",
  "spawn.info.baltoy.lane_910_only": "<p>Empieza a las <strong>9:10</strong>. Derrotado: <strong>2 puntos</strong>. Reaparece en <strong>60 s</strong>.</p>",
  "spawn.info.baltoy.lane_840": "<p>Empieza a las <strong>8:40</strong>. Derrotado: <strong>2 puntos</strong>. Reaparece en <strong>60 s</strong>.</p>",
  "spawn.info.baltoy.tower": "<p>Aparece cuando la <strong>primera torre correspondiente</strong> es destruida. Derrotado: <strong>2 puntos</strong>. Reaparece en <strong>60 s</strong>.</p>",
  "spawn.info.regidrago": "<p>Aparece en <strong>el centro del mapa a las 8:00</strong>. Derrotado \u2192 <strong>Altaria 1:30 despu\xE9s</strong>.<br>El equipo que lo derrote gana <strong>experiencia para todos</strong>. Golpe final: <strong>buff de anotaci\xF3n</strong> y <strong>20 puntos</strong>.</p>",
  "spawn.info.regieleki": "<p>Aparece a las <strong>7:00</strong> en carril superior o inferior. Derrotado \u2192 va a la base rival; toca base: <strong>20/16/12/8 puntos</strong>; base viva: <strong>goles instant\xE1neos 20/15/10/5 s</strong>.<br>Golpe final: <strong>20 puntos</strong>. Reaparece <strong>2 min</strong> despu\xE9s.</p>",
  "spawn.info.regi.700": "<p>Aparece a las <strong>7:00</strong>.</p>",
  "spawn.info.xatu": "<p>Aparece a las <strong>9:59</strong>. Derrotado: <strong>mucha experiencia</strong> y <strong>2 puntos</strong>. <strong>No reaparece</strong>.</p>",
  "spawn.info.natu.900": "<p>Aparece a las <strong>9:00</strong>.</p>",
  "spawn.info.natu.920": "<p>Aparece a las <strong>9:20</strong>.</p>",
  "spawn.info.indeedee.lane": "<p>Empieza a las <strong>9:30</strong> / <strong>9:35</strong>. Derrotado: reaparece en <strong>60 s</strong>, <strong>5 puntos</strong>. <strong>Primera torre</strong> destruida \u2192 <strong>desaparece</strong>.</p>",
  "spawn.info.indeedee.tower": "<p>Aparece cuando la <strong>primera torre correspondiente</strong> es destruida. Derrotado: reaparece en <strong>60 s</strong>, <strong>5 puntos</strong>.</p>",
  "spawn.info.salac": "<p>Al consumir: <strong>bonus de velocidad 3 s</strong>. Aparece a las <strong>8:30</strong>, reaparece <strong>60 s</strong> despu\xE9s de consumir.</p>",
  "spawn.info.salac.short": "<p>Bonus de velocidad durante 3 segundos.</p>",
  "spawn.info.altaria.after_regidrago": "<p>Aparece <strong>1:30 despu\xE9s de derrotar a Regidrago</strong>.</p>",
  "spawn.info.altaria.rayquaza": "<p>Aparece a las <strong>8:00</strong>, reaparece cada <strong>1:30</strong>. Desaparece a las <strong>2:30</strong>.</p>",
  "spawn.info.kyogre.boss": "<p>Derrotado: compa\xF1eros vivos \u2192 <strong>buff</strong>, <strong>15 puntos aeos</strong>, torres rivales a\xFAn en pie desactivadas 1:30 (sin escudo/regen).<br>Buff <strong>permanente hasta K.O. del portador</strong>, luego <strong>pasa al que lo derrot\xF3</strong>.<br><strong>Velocidad de anotaci\xF3n</strong>, <strong>regen 5%/s</strong>, <strong>peque\xF1o escudo</strong>. Aparece a las 2:00.</p>",
  "spawn.info.rayquaza.boss": "<p>Derrotado: el equipo ganador recibe <strong>15 puntos aeos</strong>, un <strong>escudo</strong> que <strong>acelera el marcador</strong> y <strong>evita que bloqueen goles</strong>. Aparece a las 2:00.</p>",
  "spawn.info.regidrago.kyogre": "<p>Aparece en <strong>el centro del mapa a las 8:00</strong>.</p>",
  "spawn.info.xatu.short": "<p>Aparece a las <strong>9:59</strong>.</p>",
  "spawn.info.indeedee.tower_break": "<p>Aparece al destruir torre.</p>",
  "spawn.info.baltoy.tower_break": "<p>Aparece al destruir torre.</p>",
  "spawn.info.bunnelby.lane": "<p>Empieza a aparecer a las <strong>9:40</strong>.</p>",
  "spawn.info.bunnelby.lane_920_short": "<p>Empieza a aparecer a las <strong>9:20</strong>.</p>",
  "spawn.info.bunnelby.lane_915_short": "<p>Empieza a aparecer a las <strong>9:15</strong>.</p>",
  "spawn.info.baltoy.lane_940_short": "<p>Empieza a aparecer a las <strong>9:40</strong>.</p>",
  "spawn.info.baltoy.945_short": "<p>Empieza a aparecer a las <strong>9:45</strong>.</p>",
  "spawn.info.baltoy.lane_910_short": "<p>Empieza a aparecer a las <strong>9:10</strong>.</p>",
  "spawn.info.baltoy.lane_840_short": "<p>Empieza a aparecer a las <strong>8:40</strong>.</p>",
  "spawn.info.indeedee.lane_930": "<p>Empieza a aparecer a las <strong>9:30</strong>.</p>",
  "spawn.info.indeedee.lane_935": "<p>Empieza a aparecer a las <strong>9:35</strong>.</p>",
  "spawn.info.bunnelby.points": "<p>Dan 2 puntos.</p>",
  "spawn.info.baltoy.tower_kyogre": "<p>Aparece cuando la <strong>primera torre correspondiente</strong> es destruida.</p>",
  "spawn.info.indeedee.tower_short": "<p>Aparece cuando la <strong>primera torre correspondiente</strong> es destruida.</p>"
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
function getMapName(mapId, locale = "en") {
  const map = locales[locale] ?? en_default;
  return map[mapId] ?? en_default[mapId] ?? mapId;
}
function getMapDescription(mapId, locale = "en") {
  const key = `${mapId}.description`;
  const map = locales[locale] ?? en_default;
  return map[key] ?? en_default[key] ?? "";
}
function getNeutralName(neutralId, locale = "en") {
  const map = locales[locale] ?? en_default;
  return map[neutralId] ?? en_default[neutralId] ?? neutralId;
}
function getSpawnInfo(infoKey, locale = "en") {
  const key = `spawn.info.${infoKey}`;
  const map = locales[locale] ?? en_default;
  return map[key] ?? en_default[key] ?? "";
}
function getSpawnInfoForSpawn(spawn, locale = "en") {
  if (spawn.infoKey) {
    const out = getSpawnInfo(spawn.infoKey, locale);
    if (out) return out;
  }
  return spawn.info ?? "";
}
export {
  en_default as en,
  es_default as es,
  fr_default as fr,
  getMapDescription,
  getMapName,
  getNeutralName,
  getPokemonName,
  getSpawnInfo,
  getSpawnInfoForSpawn,
  ja_JP_default as jaJP,
  pt_BR_default as ptBR
};
//# sourceMappingURL=index.js.map