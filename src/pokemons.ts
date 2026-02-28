import { BattleType, Tag } from "./constants";
import type { Pokemon } from "./types";

const pokemons: Array<Pokemon> = [{
  "name": "Venusaur",
  "dex": 3,
  "images": {
    "main": "pokemons/roster-venusaur.png",
    "big": "pokemons/roster-venusaur-2x.png",
    "complete": "pokemons/stat-venusaur.png",
    "move_s11": "moves/venusaur_s11.png",
    "move_s12": "moves/venusaur_s12.png",
    "move_s21": "moves/venusaur_s21.png",
    "move_s22": "moves/venusaur_s22.png",
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
    "move_s22": "moves/charizard_s22.png",
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
    "move_s21": "moves/mega-charizard_s21.png",
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
    "move_s21": "moves/mega-charizard_s22.png",
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
    "move_s22": "moves/blastoise_s22.png",
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
    "move_s22": "moves/pikachu_s22.png",
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
    "move_s22": "moves/alolan-raichu_s22.png",
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
    "move_s22": "moves/clefable_s22.png",
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
    "move_s22": "moves/alolan-ninetales_s22.png",
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
    "move_s22": "moves/wigglytuff_s22.png",
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
    "move_s22": "moves/meowth_s22.png",
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
    "move_s22": "moves/psyduck_s22.png",
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
    "move_s22": "moves/machamp_s22.png",
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
    "move_s22": "moves/galarian-rapidash_s22.png",
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
    "move_s22": "moves/slowbro_s22.png",
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
    "move_s22": "moves/dodrio_s22.png",
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
    "move_s22": "moves/gengar_s22.png",
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
    "move_s22": "moves/blissey_s22.png",
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
    "move_s22": "moves/mr-mime_s22.png",
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
    "move_s24": "moves/scizor_s24.png",
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
    "move_s22": "moves/gyarados_s22.png",
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
    "move_s21": "moves/mega-gyarados_s21.png",
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
    "move_s22": "moves/lapras_s22.png",
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
    "move_s22": "moves/vaporeon_s22.png",
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
    "move_s22": "moves/snorlax_s22.png",
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
  "name": "Dragonite",
  "dex": 149,
  "images": {
    "main": "pokemons/roster-dragonite.png",
    "big": "pokemons/roster-dragonite-2x.png",
    "complete": "pokemons/stat-dragonite.png",
    "move_s11": "moves/dragonite_s11.png",
    "move_s12": "moves/dragonite_s12.png",
    "move_s21": "moves/dragonite_s21.png",
    "move_s22": "moves/dragonite_s22.png",
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
    "move_s22": "moves/mewtwox_s22.png",
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
    "move_s22": "moves/mewtwoy_s22.png",
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
    "move_s23": "moves/mew_s23.png",
  },
  "active": true,
  "battleType": BattleType.ATTACKER,
  "stats": {
    "offense": 4,
    "endurance": 2,
    "mobility": 3,
    "scoring": 2,
    "support": 3,
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
    "move_s22": "moves/azumarill_s22.png",
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
    "move_s22": "moves/espeon_s22.png",
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
    "move_s22": "moves/umbreon_s22.png",
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
    "move_s22": "moves/mamoswine_s22.png",
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
    "move_s22": "moves/suicune_s22.png",
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
    "move_s22": "moves/tyranitar_s22.png",
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
    "move_s22": "moves/ho-oh_s22.png",
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
    "move_s22": "moves/blaziken_s22.png",
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
    "move_s22": "moves/gardevoir_s22.png",
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
    "move_s22": "moves/sableye_s22.png",
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
    "move_s22": "moves/absol_s22.png",
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
    "move_s22": "moves/metagross_s22.png",
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
    "move_s22": "moves/latias_s22.png",
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
    "move_s22": "moves/latios_s22.png",
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
    "move_s22": "moves/empoleon_s22.png",
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
    "move_s22": "moves/garchomp_s22.png",
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
    "move_s22": "moves/lucario_s22.png",
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
    "move_s21": "moves/mega-lucario_s21.png",
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
    "move_s22": "moves/leafeon_s22.png",
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
    "move_s22": "moves/glaceon_s22.png",
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
    "move_s22": "moves/darkrai_s22.png",
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
    "move_s22": "moves/crustle_s22.png",
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
    "move_s22": "moves/zoroark_s22.png",
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
    "move_s22": "moves/chandelure_s22.png",
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
    "move_s22": "moves/delphox_s22.png",
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
    "move_s22": "moves/greninja_s22.png",
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
    "move_s22": "moves/talonflame_s22.png",
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
    "move_s22": "moves/aegislash_s22.png",
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
    "move_s22": "moves/sylveon_s22.png",
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
    "move_s22": "moves/goodra_s22.png",
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
    "move_s22": "moves/trevenant_s22.png",
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
    "move_s22": "moves/hoopa_s22.png",
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
    "move_s22": "moves/decidueye_s22.png",
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
    "move_s22": "moves/tsareena_s22.png",
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
    "move_s22": "moves/comfey_s22.png",
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
    "move_s22": "moves/mimikyu_s22.png",
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
    "move_s21": "moves/dhelmise_s21.png",  },
  "active": true,
  "battleType": BattleType.ALLROUNDER,
  "stats": {
    "offense": 4.5,
    "endurance": 1.5,
    "mobility": 1,
    "scoring": 1,
    "support": 1,
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
    "move_s22": "moves/buzzwole_s22.png",
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
    "move_s22": "moves/zeraora_s22.png",
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
    "move_s22": "moves/cinderace_s22.png",
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
    "move_s22": "moves/inteleon_s22.png",
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
    "move_s22": "moves/greedent_s22.png",
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
    "move_s22": "moves/eldegoss_s22.png",
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
    "move_s22": "moves/cramorant_s22.png",
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
    "move_s22": "moves/sirfetchd_s22.png",
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
    "move_s22": "moves/alcremie_s22.png",
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
    "move_s22": "moves/falinks_s22.png",
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
    "move_s22": "moves/duraludon_s22.png",
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
    "move_s22": "moves/dragapult_s22.png",
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
    "move_s22": "moves/zacian_s22.png",
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
    "move_s22": "moves/urshifu_s22.png",
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
    "move_s22": "moves/meowscarada_s22.png",
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
    "move_s22": "moves/pawmot_s22.png",
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
    "move_s22": "moves/armarouge_s22.png",
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
    "move_s22": "moves/ceruledge_s22.png",
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
    "move_s22": "moves/tinkaton_s22.png",
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
    "move_s22": "moves/miraidon_s22.png",
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
}];

export default pokemons;
