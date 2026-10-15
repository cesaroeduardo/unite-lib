import { BattleType, Tag } from "./constants";
import type { Pokemon } from "./types";

const pokemons: Array<Pokemon> = [{
  "name": "Venusaur",
  "dex": 3,
  "images": {
    "main": "pokemons/roster-venusaur.webp",
    "big": "pokemons/roster-venusaur-2x.webp",
    "complete": "pokemons/stat-venusaur.webp",
    "move_p1": { "name": "Overgrow", "image": "moves/venusaur_p1.webp" },
    "move_s1": { "name": "Seed Bomb", "image": "moves/venusaur_s1.webp" },
    "move_s2": { "name": "Razor Leaf", "image": "moves/venusaur_s2.webp" },
    "move_u1": { "name": "Verdant Anger", "image": "moves/venusaur_u1.webp" },
    "evolution_1": "pokemons/evolution-bulbasaur-2x.webp",
    "evolution_2": "pokemons/evolution-ivysaur-2x.webp",
    "evolution_3": "pokemons/evolution-venusaur-2x.webp",
    "move_s11": { "name": "Sludge Bomb", "image": "moves/venusaur_s11.webp" },
    "move_s12": { "name": "Giga Drain", "image": "moves/venusaur_s12.webp" },
    "move_s21": { "name": "Solar Beam", "image": "moves/venusaur_s21.webp" },
    "move_s22": { "name": "Petal Dance", "image": "moves/venusaur_s22.webp" },
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
    "main": "pokemons/roster-charizard.webp",
    "big": "pokemons/roster-charizard-2x.webp",
    "complete": "pokemons/stat-charizard.webp",
    "move_p1": { "name": "Blaze", "image": "moves/charizard_p1.webp" },
    "move_s1": { "name": "Flame Burst", "image": "moves/charizard_s1.webp" },
    "move_s2": { "name": "Fire Spin", "image": "moves/charizard_s2.webp" },
    "move_u1": { "name": "Seismic Slam", "image": "moves/charizard_u1.webp" },
    "evolution_1": "pokemons/evolution-charmander-2x.webp",
    "evolution_2": "pokemons/evolution-charmeleon-2x.webp",
    "evolution_3": "pokemons/evolution-charizard-2x.webp",
    "evolution_4": "pokemons/evolution-mega-charizard-x-2x.webp",
    "move_s11": { "name": "Flamethrower", "image": "moves/charizard_s11.webp" },
    "move_s12": { "name": "Fire Punch", "image": "moves/charizard_s12.webp" },
    "move_s21": { "name": "Fire Blast", "image": "moves/charizard_s21.webp" },
    "move_s22": { "name": "Flare Blitz", "image": "moves/charizard_s22.webp" },
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
    "main": "pokemons/roster-mega-charizard-x.webp",
    "big": "pokemons/roster-mega-charizard-x-2x.webp",
    "complete": "pokemons/stat-mega-charizard-x.webp",
        "move_p1": { "name": "Tough Claws", "image": "moves/mega-charizard-x_p1.webp" },
    "move_s1": { "name": "Flame Burst", "image": "moves/mega-charizard-x_s1.webp" },
    "move_s2": { "name": "Fire Spin", "image": "moves/mega-charizard-x_s2.webp" },
    "move_u1": { "name": "Seismic Slam", "image": "moves/mega-charizard-x_u1.webp" },
"move_s11": { "name": "Fire Punch", "image": "moves/mega-charizard_s11.webp" },
    "move_s21": { "name": "Flare Blitz", "image": "moves/mega-charizard_s21.webp" },
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
    "main": "pokemons/roster-mega-charizard-y.webp",
    "big": "pokemons/roster-mega-charizard-y-2x.webp",
    "complete": "pokemons/stat-mega-charizard-y.webp",
        "move_p1": { "name": "Drought", "image": "moves/mega-charizard-y_p1.webp" },
    "move_s1": { "name": "Flame Burst", "image": "moves/mega-charizard-y_s1.webp" },
    "move_s2": { "name": "Fire Spin", "image": "moves/mega-charizard-y_s2.webp" },
    "move_u1": { "name": "Seismic Slam", "image": "moves/mega-charizard-y_u1.webp" },
"move_s11": { "name": "Flamethrower", "image": "moves/mega-charizard_s12.webp" },
    "move_s21": { "name": "Fire Blast", "image": "moves/mega-charizard_s22.webp" },
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
    "main": "pokemons/roster-blastoise.webp",
    "big": "pokemons/roster-blastoise-2x.webp",
    "complete": "pokemons/stat-blastoise.webp",
    "move_p1": { "name": "Torrent", "image": "moves/blastoise_p1.webp" },
    "move_s1": { "name": "Water Gun", "image": "moves/blastoise_s1.webp" },
    "move_s2": { "name": "Skull Bash", "image": "moves/blastoise_s2.webp" },
    "move_u1": { "name": "Hydro Typhoon", "image": "moves/blastoise_u1.webp" },
    "evolution_1": "pokemons/evolution-squirtle-2x.webp",
    "evolution_2": "pokemons/evolution-wartortle-2x.webp",
    "evolution_3": "pokemons/evolution-blastoise-2x.webp",
    "move_s11": { "name": "Hydro Pump", "image": "moves/blastoise_s11.webp" },
    "move_s12": { "name": "Water Spout", "image": "moves/blastoise_s12.webp" },
    "move_s21": { "name": "Surf", "image": "moves/blastoise_s21.webp" },
    "move_s22": { "name": "Rapid Spin", "image": "moves/blastoise_s22.webp" },
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
    "main": "pokemons/roster-pikachu.webp",
    "big": "pokemons/roster-pikachu-2x.webp",
    "complete": "pokemons/stat-pikachu.webp",
    "move_p1": { "name": "Static", "image": "moves/pikachu_p1.webp" },
    "move_s1": { "name": "Thunder Shock", "image": "moves/pikachu_s1.webp" },
    "move_s2": { "name": "Electroweb", "image": "moves/pikachu_s2.webp" },
    "move_u1": { "name": "Thunderstorm", "image": "moves/pikachu_u1.webp" },
    "move_s11": { "name": "Electro Ball", "image": "moves/pikachu_s11.webp" },
    "move_s12": { "name": "Thunder", "image": "moves/pikachu_s12.webp" },
    "move_s21": { "name": "Volt Tackle", "image": "moves/pikachu_s21.webp" },
    "move_s22": { "name": "Thunderbolt", "image": "moves/pikachu_s22.webp" },
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
    "main": "pokemons/roster-alolan-raichu.webp",
    "big": "pokemons/roster-alolan-raichu-2x.webp",
    "complete": "pokemons/stat-alolan-raichu.webp",
    "evolution_1": "pokemons/evolution-pikachu-2x.webp",
    "evolution_2": "pokemons/evolution-alolan-raichu-2x.webp",
        "move_p1": { "name": "Surge Surfer", "image": "moves/alolan-raichu_p1.webp" },
    "move_s1": { "name": "Thunder Shock", "image": "moves/alolan-raichu_s1.webp" },
    "move_s2": { "name": "Thunder Wave", "image": "moves/alolan-raichu_s2.webp" },
    "move_u1": { "name": "Thunderstorm Aerial", "image": "moves/alolan-raichu_u1.webp" },
"move_s11": { "name": "Stored Power", "image": "moves/alolan-raichu_s11.webp" },
    "move_s12": { "name": "Electro Ball", "image": "moves/alolan-raichu_s12.webp" },
    "move_s21": { "name": "Thunderbolt", "image": "moves/alolan-raichu_s21.webp" },
    "move_s22": { "name": "Psychic", "image": "moves/alolan-raichu_s22.webp" },
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
    "main": "pokemons/roster-clefable.webp",
    "big": "pokemons/roster-clefable-2x.webp",
    "complete": "pokemons/stat-clefable.webp",
    "evolution_1": "pokemons/evolution-clefairy-2x.webp",
    "evolution_2": "pokemons/evolution-clefable-2x.webp",
        "move_p1": { "name": "Magic Guard", "image": "moves/clefable_p1.webp" },
    "move_s1": { "name": "Heal Pulse", "image": "moves/clefable_s1.webp" },
    "move_s2": { "name": "Disarming Voice", "image": "moves/clefable_s2.webp" },
    "move_u1": { "name": "Wonder Wish", "image": "moves/clefable_u1.webp" },
"move_s11": { "name": "Moonlight", "image": "moves/clefable_s11.webp" },
    "move_s12": { "name": "Draining Kiss", "image": "moves/clefable_s12.webp" },
    "move_s21": { "name": "Gravity", "image": "moves/clefable_s21.webp" },
    "move_s22": { "name": "Follow Me", "image": "moves/clefable_s22.webp" },
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
    "main": "pokemons/roster-alolan-ninetales.webp",
    "big": "pokemons/roster-alolan-ninetales-2x.webp",
    "complete": "pokemons/stat-alolan-ninetales.webp",
    "move_p1": { "name": "Snow Warning", "image": "moves/alolan-ninetales_p1.webp" },
    "move_s1": { "name": "Powder Snow", "image": "moves/alolan-ninetales_s1.webp" },
    "move_s2": { "name": "Icy Wind", "image": "moves/alolan-ninetales_s2.webp" },
    "move_u1": { "name": "Snow Globe", "image": "moves/alolan-ninetales_u1.webp" },
    "evolution_1": "pokemons/evolution-alolan-vulpix-2x.webp",
    "evolution_2": "pokemons/evolution-alolan-ninetales-2x.webp",
    "move_s11": { "name": "Avalanche", "image": "moves/alolan-ninetales_s11.webp" },
    "move_s12": { "name": "Dazzling Gleam", "image": "moves/alolan-ninetales_s12.webp" },
    "move_s21": { "name": "Blizzard", "image": "moves/alolan-ninetales_s21.webp" },
    "move_s22": { "name": "Aurora Veil", "image": "moves/alolan-ninetales_s22.webp" },
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
    "main": "pokemons/roster-wigglytuff.webp",
    "big": "pokemons/roster-wigglytuff-2x.webp",
    "complete": "pokemons/stat-wigglytuff.webp",
    "move_p1": { "name": "Cute Charm", "image": "moves/wigglytuff_p1.webp" },
    "move_s1": { "name": "Pound", "image": "moves/wigglytuff_s1.webp" },
    "move_s2": { "name": "Defense Curl", "image": "moves/wigglytuff_s2.webp" },
    "move_u1": { "name": "Starlight Recital", "image": "moves/wigglytuff_u1.webp" },
    "evolution_1": "pokemons/evolution-jigglypuff-2x.webp",
    "evolution_2": "pokemons/evolution-wigglytuff-2x.webp",
    "move_s11": { "name": "Double Slap", "image": "moves/wigglytuff_s11.webp" },
    "move_s12": { "name": "Dazzling Gleam", "image": "moves/wigglytuff_s12.webp" },
    "move_s21": { "name": "Rollout", "image": "moves/wigglytuff_s21.webp" },
    "move_s22": { "name": "Sing", "image": "moves/wigglytuff_s22.webp" },
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
    "main": "pokemons/roster-meowth.webp",
    "big": "pokemons/roster-meowth-2x.webp",
    "complete": "pokemons/stat-meowth.webp",
        "move_p1": { "name": "Pickup", "image": "moves/meowth_p1.webp" },
    "move_s1": { "name": "Scratch", "image": "moves/meowth_s1.webp" },
    "move_s2": { "name": "Feint", "image": "moves/meowth_s2.webp" },
    "move_u1": { "name": "Gold Coin Barrage", "image": "moves/meowth_u1.webp" },
"move_s11": { "name": "Pay Day", "image": "moves/meowth_s11.webp" },
    "move_s12": { "name": "Fury Swipes", "image": "moves/meowth_s12.webp" },
    "move_s21": { "name": "Feint Attack", "image": "moves/meowth_s21.webp" },
    "move_s22": { "name": "Assurance", "image": "moves/meowth_s22.webp" },
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
    "main": "pokemons/roster-psyduck.webp",
    "big": "pokemons/roster-psyduck-2x.webp",
    "complete": "pokemons/stat-psyduck.webp",
    "evolution_1": "pokemons/evolution-psyduck-2x.webp",
        "move_p1": { "name": "Swift Swim", "image": "moves/psyduck_p1.webp" },
    "move_s1": { "name": "Confusion", "image": "moves/psyduck_s1.webp" },
    "move_s2": { "name": "Tail Whip", "image": "moves/psyduck_s2.webp" },
    "move_u1": { "name": "Full-Power Psy-ay-ay!", "image": "moves/psyduck_u1.webp" },
"move_s11": { "name": "Surf", "image": "moves/psyduck_s11.webp" },
    "move_s12": { "name": "Bubble Beam", "image": "moves/psyduck_s12.webp" },
    "move_s21": { "name": "Disable", "image": "moves/psyduck_s21.webp" },
    "move_s22": { "name": "Psychic", "image": "moves/psyduck_s22.webp" },
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
    "main": "pokemons/roster-machamp.webp",
    "big": "pokemons/roster-machamp-2x.webp",
    "complete": "pokemons/stat-machamp.webp",
    "move_p1": { "name": "Guts", "image": "moves/machamp_p1.webp" },
    "move_s1": { "name": "Karate Chop", "image": "moves/machamp_s1.webp" },
    "move_s2": { "name": "Bulk Up", "image": "moves/machamp_s2.webp" },
    "move_u1": { "name": "Barrage Blow", "image": "moves/machamp_u1.webp" },
    "evolution_1": "pokemons/evolution-machop-2x.webp",
    "evolution_2": "pokemons/evolution-machoke-2x.webp",
    "evolution_3": "pokemons/evolution-machamp-2x.webp",
    "move_s11": { "name": "Close Combat", "image": "moves/machamp_s11.webp" },
    "move_s12": { "name": "Cross Chop", "image": "moves/machamp_s12.webp" },
    "move_s21": { "name": "Dynamic Punch", "image": "moves/machamp_s21.webp" },
    "move_s22": { "name": "Submission", "image": "moves/machamp_s22.webp" },
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
    "main": "pokemons/roster-galarian-rapidash.webp",
    "big": "pokemons/roster-galarian-rapidash-2x.webp",
    "complete": "pokemons/stat-galarian-rapidash.webp",
    "evolution_1": "pokemons/evolution-galarian-ponyta-2x.webp",
    "evolution_2": "pokemons/evolution-galarian-rapidash-2x.webp",
        "move_p1": { "name": "Pastel Veil", "image": "moves/galarian-rapidash_p1.webp" },
    "move_s1": { "name": "Confusion", "image": "moves/galarian-rapidash_s1.webp" },
    "move_s2": { "name": "Tackle", "image": "moves/galarian-rapidash_s2.webp" },
    "move_u1": { "name": "Triad Blitz", "image": "moves/galarian-rapidash_u1.webp" },
"move_s11": { "name": "Dazzling Gleam", "image": "moves/galarian-rapidash_s11.webp" },
    "move_s12": { "name": "Fairy Wind", "image": "moves/galarian-rapidash_s12.webp" },
    "move_s21": { "name": "Smart Strike", "image": "moves/galarian-rapidash_s21.webp" },
    "move_s22": { "name": "Agility", "image": "moves/galarian-rapidash_s22.webp" },
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
    "main": "pokemons/roster-slowbro.webp",
    "big": "pokemons/roster-slowbro-2x.webp",
    "complete": "pokemons/stat-slowbro.webp",
    "move_p1": { "name": "Oblivious", "image": "moves/slowbro_p1.webp" },
    "move_s1": { "name": "Water Gun", "image": "moves/slowbro_s1.webp" },
    "move_s2": { "name": "Slack Off", "image": "moves/slowbro_s2.webp" },
    "move_u1": { "name": "Slowbeam", "image": "moves/slowbro_u1.webp" },
    "evolution_1": "pokemons/evolution-slowpoke-2x.webp",
    "evolution_2": "pokemons/evolution-slowbro-2x.webp",
    "move_s11": { "name": "Scald", "image": "moves/slowbro_s11.webp" },
    "move_s12": { "name": "Surf", "image": "moves/slowbro_s12.webp" },
    "move_s21": { "name": "Amnesia", "image": "moves/slowbro_s21.webp" },
    "move_s22": { "name": "Telekinesis", "image": "moves/slowbro_s22.webp" },
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
    "main": "pokemons/roster-dodrio.webp",
    "big": "pokemons/roster-dodrio-2x.webp",
    "complete": "pokemons/stat-dodrio.webp",
    "evolution_1": "pokemons/evolution-doduo-2x.webp",
    "evolution_2": "pokemons/evolution-dodrio-2x.webp",
        "move_p1": { "name": "Run Away", "image": "moves/dodrio_p1.webp" },
    "move_s1": { "name": "Peck", "image": "moves/dodrio_s1.webp" },
    "move_s2": { "name": "Quick Attack", "image": "moves/dodrio_s2.webp" },
    "move_u1": { "name": "Triple Trample", "image": "moves/dodrio_u1.webp" },
"move_s11": { "name": "Tri Attack", "image": "moves/dodrio_s11.webp" },
    "move_s12": { "name": "Drill Peck", "image": "moves/dodrio_s12.webp" },
    "move_s21": { "name": "Agility", "image": "moves/dodrio_s21.webp" },
    "move_s22": { "name": "Jump Kick", "image": "moves/dodrio_s22.webp" },
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
    "main": "pokemons/roster-gengar.webp",
    "big": "pokemons/roster-gengar-2x.webp",
    "complete": "pokemons/stat-gengar.webp",
    "move_p1": { "name": "Levitate", "image": "moves/gengar_p1.webp" },
    "move_s1": { "name": "Will-o-Wisp", "image": "moves/gengar_s1.webp" },
    "move_s2": { "name": "Lick", "image": "moves/gengar_s2.webp" },
    "move_u1": { "name": "Phantom Ambush", "image": "moves/gengar_u1.webp" },
    "evolution_1": "pokemons/evolution-gastly-2x.webp",
    "evolution_2": "pokemons/evolution-haunter-2x.webp",
    "evolution_3": "pokemons/evolution-gengar-2x.webp",
    "move_s11": { "name": "Shadow Ball", "image": "moves/gengar_s11.webp" },
    "move_s12": { "name": "Sludge Bomb", "image": "moves/gengar_s12.webp" },
    "move_s21": { "name": "Dream Eater", "image": "moves/gengar_s21.webp" },
    "move_s22": { "name": "Hex", "image": "moves/gengar_s22.webp" },
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
    "main": "pokemons/roster-blissey.webp",
    "big": "pokemons/roster-blissey-2x.webp",
    "complete": "pokemons/stat-blissey.webp",
    "move_p1": { "name": "Natural Cure", "image": "moves/blissey_p1.webp" },
    "move_s1": { "name": "Pound", "image": "moves/blissey_s1.webp" },
    "move_s2": { "name": "Heal Pulse", "image": "moves/blissey_s2.webp" },
    "move_u1": { "name": "Bliss Assistance", "image": "moves/blissey_u1.webp" },
    "evolution_1": "pokemons/evolution-chansey-2x.webp",
    "evolution_2": "pokemons/evolution-blissey-2x.webp",
    "move_s11": { "name": "Egg Bomb", "image": "moves/blissey_s11.webp" },
    "move_s12": { "name": "Helping Hand", "image": "moves/blissey_s12.webp" },
    "move_s21": { "name": "Soft-Boiled", "image": "moves/blissey_s21.webp" },
    "move_s22": { "name": "Safeguard", "image": "moves/blissey_s22.webp" },
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
    "main": "pokemons/roster-mr-mime.webp",
    "big": "pokemons/roster-mr-mime-2x.webp",
    "complete": "pokemons/stat-mr-mime.webp",
    "move_p1": { "name": "Filter", "image": "moves/mr-mime_p1.webp" },
    "move_s1": { "name": "Fake Out", "image": "moves/mr-mime_s1.webp" },
    "move_s2": { "name": "Light Screen", "image": "moves/mr-mime_s2.webp" },
    "move_u1": { "name": "Showtime", "image": "moves/mr-mime_u1.webp" },
    "move_s11": { "name": "Confusion", "image": "moves/mr-mime_s11.webp" },
    "move_s12": { "name": "Psychic", "image": "moves/mr-mime_s12.webp" },
    "move_s21": { "name": "Barrier", "image": "moves/mr-mime_s21.webp" },
    "move_s22": { "name": "Power Swap", "image": "moves/mr-mime_s22.webp" },
  },
  "active": true,
  "battleType": BattleType.SUPPORTER,
  "tags": [Tag.SUPPORTER, Tag.RANGED]
},
{
  "name": "Scizor",
  "dex": 212,
  "images": {
    "main": "pokemons/roster-scizor.webp",
    "big": "pokemons/roster-scizor-2x.webp",
    "complete": "pokemons/stat-scizor.webp",
    "evolution_1": "pokemons/evolution-scyther-2x.webp",
    "evolution_2": "pokemons/evolution-scizor-2x.webp",
        "move_p1": { "name": "Technician", "image": "moves/scizor_p1.webp" },
    "move_s1": { "name": "Fury Cutter", "image": "moves/scizor_s1.webp" },
    "move_s2": { "name": "Quick Attack", "image": "moves/scizor_s2.webp" },
    "move_u1": { "name": "Red Illusion Dive", "image": "moves/scizor_u1.webp" },
"move_s11": { "name": "Fury Cutter", "image": "moves/scizor_s11.webp" },
    "move_s12": { "name": "Bullet Punch", "image": "moves/scizor_s12.webp" },
    "move_s21": { "name": "Double Hit", "image": "moves/scizor_s21.webp" },
    "move_s22": { "name": "Swords Dance", "image": "moves/scizor_s22.webp" },
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
    "main": "pokemons/roster-gyarados.webp",
    "big": "pokemons/roster-gyarados-2x.webp",
    "complete": "pokemons/stat-gyarados.webp",
    "evolution_1": "pokemons/evolution-magikarp-2x.webp",
    "evolution_2": "pokemons/evolution-gyarados-2x.webp",
        "move_p1": { "name": "Moxie", "image": "moves/gyarados_p1.webp" },
    "move_s1": { "name": "Flail", "image": "moves/gyarados_s1.webp" },
    "move_s2": { "name": "Splash", "image": "moves/gyarados_s2.webp" },
    "move_u1": { "name": "Dragon Current", "image": "moves/gyarados_u1.webp" },
"move_s11": { "name": "Dragon Breath", "image": "moves/gyarados_s11.webp" },
    "move_s12": { "name": "Aqua Tail", "image": "moves/gyarados_s12.webp" },
    "move_s21": { "name": "Waterfall", "image": "moves/gyarados_s21.webp" },
    "move_s22": { "name": "Bounce", "image": "moves/gyarados_s22.webp" },
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
    "main": "pokemons/roster-mega-gyarados.webp",
    "big": "pokemons/roster-mega-gyarados-2x.webp",
    "complete": "pokemons/stat-mega-gyarados.webp",
        "move_p1": { "name": "Intimidate", "image": "moves/mega-gyarados_p1.webp" },
    "move_s1": { "name": "Flail", "image": "moves/mega-gyarados_s1.webp" },
    "move_s2": { "name": "Splash", "image": "moves/mega-gyarados_s2.webp" },
    "move_u1": { "name": "Dragon Current", "image": "moves/mega-gyarados_u1.webp" },
"move_s11": { "name": "Dragon Breath", "image": "moves/mega-gyarados_s11.webp" },
    "move_s21": { "name": "Waterfall", "image": "moves/mega-gyarados_s21.webp" },
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
    "main": "pokemons/roster-lapras.webp",
    "big": "pokemons/roster-lapras-2x.webp",
    "complete": "pokemons/stat-lapras.webp",
    "evolution_1": "pokemons/evolution-lapras-2x.webp",
        "move_p1": { "name": "Shell Armor", "image": "moves/lapras_p1.webp" },
    "move_s1": { "name": "Whirlpool", "image": "moves/lapras_s1.webp" },
    "move_s2": { "name": "Ice Shard", "image": "moves/lapras_s2.webp" },
    "move_u1": { "name": "Lapras Express", "image": "moves/lapras_u1.webp" },
"move_s11": { "name": "Water Pulse", "image": "moves/lapras_s11.webp" },
    "move_s12": { "name": "Perish Song", "image": "moves/lapras_s12.webp" },
    "move_s21": { "name": "Bubble Beam", "image": "moves/lapras_s21.webp" },
    "move_s22": { "name": "Ice Beam", "image": "moves/lapras_s22.webp" },
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
    "main": "pokemons/roster-vaporeon.webp",
    "big": "pokemons/roster-vaporeon-2x.webp",
    "complete": "pokemons/stat-vaporeon.webp",
    "evolution_1": "pokemons/evolution-eevee-2x.webp",
    "evolution_2": "pokemons/evolution-vaporeon-2x.webp",
        "move_p1": { "name": "Water Absorb", "image": "moves/vaporeon_p1.webp" },
    "move_s1": { "name": "Swift", "image": "moves/vaporeon_s1.webp" },
    "move_s2": { "name": "Tackle", "image": "moves/vaporeon_s2.webp" },
    "move_u1": { "name": "Aquamarine Splash", "image": "moves/vaporeon_u1.webp" },
"move_s11": { "name": "Hydro Pump", "image": "moves/vaporeon_s11.webp" },
    "move_s12": { "name": "Muddy Water", "image": "moves/vaporeon_s12.webp" },
    "move_s21": { "name": "Aqua Ring", "image": "moves/vaporeon_s21.webp" },
    "move_s22": { "name": "Flip Turn", "image": "moves/vaporeon_s22.webp" },
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
  "name": "Jolteon",
  "dex": 135,
  "images": {
    "main": "pokemons/roster-jolteon.webp",
    "big": "pokemons/roster-jolteon-2x.webp",
    "complete": "pokemons/stat-jolteon.webp",
    "move_p1": { "name": "Quick Feet", "image": "moves/jolteon_p1.webp" },
    "move_s1": { "name": "Swift", "image": "moves/jolteon_s1.webp" },
    "move_s2": { "name": "Quick Attack", "image": "moves/jolteon_s2.webp" },
    "move_u1": { "name": "Plasma Quintupulse", "image": "moves/jolteon_u1.webp" },
    "move_s11": { "name": "Pin Missile", "image": "moves/jolteon_s11.webp" },
    "move_s21": { "name": "Volt Switch", "image": "moves/jolteon_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.SPEEDSTER,
  "stats": {
    "offense": 4,
    "endurance": 2,
    "mobility": 4,
    "scoring": 2,
    "support": 1
  },
  "tags": [
    Tag.SPEEDSTER,
    Tag.MELEE
  ],
  "difficulty": 2
},
{
  "name": "Flareon",
  "dex": 136,
  "images": {
    "main": "pokemons/roster-flareon.webp",
    "big": "pokemons/roster-flareon-2x.webp",
    "complete": "pokemons/stat-flareon.webp",
    "move_p1": { "name": "Flash Fire", "image": "moves/flareon_p1.webp" },
    "move_s1": { "name": "Swift", "image": "moves/flareon_s1.webp" },
    "move_s2": { "name": "Tackle", "image": "moves/flareon_s2.webp" },
    "move_u1": { "name": "Garnet Ignition", "image": "moves/flareon_u1.webp" },
    "move_s11": { "name": "Fire Blast", "image": "moves/flareon_s11.webp" },
    "move_s21": { "name": "Flare Blitz", "image": "moves/flareon_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ALLROUNDER,
  "stats": {
    "offense": 4,
    "endurance": 3,
    "mobility": 3,
    "scoring": 2,
    "support": 1
  },
  "tags": [
    Tag.ALLROUNDER,
    Tag.MELEE
  ],
  "difficulty": 2
},
{
  "name": "Snorlax",
  "dex": 143,
  "images": {
    "main": "pokemons/roster-snorlax.webp",
    "big": "pokemons/roster-snorlax-2x.webp",
    "complete": "pokemons/stat-snorlax.webp",
    "move_p1": { "name": "Gluttony", "image": "moves/snorlax_p1.webp" },
    "move_s1": { "name": "Tackle", "image": "moves/snorlax_s1.webp" },
    "move_s2": { "name": "Rest", "image": "moves/snorlax_s2.webp" },
    "move_u1": { "name": "Power Nap", "image": "moves/snorlax_u1.webp" },
    "move_s11": { "name": "Heavy Slam", "image": "moves/snorlax_s11.webp" },
    "move_s12": { "name": "Flail", "image": "moves/snorlax_s12.webp" },
    "move_s21": { "name": "Block", "image": "moves/snorlax_s21.webp" },
    "move_s22": { "name": "Yawn", "image": "moves/snorlax_s22.webp" },
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
    "main": "pokemons/roster-articuno.webp",
    "big": "pokemons/roster-articuno-2x.webp",
    "complete": "pokemons/stat-articuno.webp",
        "move_p1": { "name": "Snow Cloak", "image": "moves/articuno_p1.webp" },
    "move_s1": { "name": "Icy Wind", "image": "moves/articuno_s1.webp" },
    "move_s2": { "name": "Ice Shard", "image": "moves/articuno_s2.webp" },
    "move_u1": { "name": "Ice Wing Whiteout", "image": "moves/articuno_u1.webp" },
"move_s11": { "name": "Blizzard", "image": "moves/articuno_s11.webp" },
    "move_s21": { "name": "Ice Beam", "image": "moves/articuno_s21.webp" },
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
    "main": "pokemons/roster-zapdos.webp",
    "big": "pokemons/roster-zapdos-2x.webp",
    "complete": "pokemons/stat-zapdos.webp",
        "move_p1": { "name": "Static", "image": "moves/zapdos_p1.webp" },
    "move_s1": { "name": "Thunder Shock", "image": "moves/zapdos_s1.webp" },
    "move_s2": { "name": "Discharge", "image": "moves/zapdos_s2.webp" },
    "move_u1": { "name": "High-Voltage Siege", "image": "moves/zapdos_u1.webp" },
"move_s11": { "name": "Thunderbolt", "image": "moves/zapdos_s11.webp" },
    "move_s21": { "name": "Zap Cannon", "image": "moves/zapdos_s21.webp" },
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
    "main": "pokemons/roster-moltres.webp",
    "big": "pokemons/roster-moltres-2x.webp",
    "complete": "pokemons/stat-moltres.webp",
        "move_p1": { "name": "Flame Body", "image": "moves/moltres_p1.webp" },
    "move_s1": { "name": "Wing Attack", "image": "moves/moltres_s1.webp" },
    "move_s2": { "name": "Incinerate", "image": "moves/moltres_s2.webp" },
    "move_u1": { "name": "Firebird Inferno", "image": "moves/moltres_u1.webp" },
"move_s11": { "name": "Sky Attack", "image": "moves/moltres_s11.webp" },
    "move_s21": { "name": "Heat Wave", "image": "moves/moltres_s21.webp" },
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
    "main": "pokemons/roster-dragonite.webp",
    "big": "pokemons/roster-dragonite-2x.webp",
    "complete": "pokemons/stat-dragonite.webp",
    "evolution_1": "pokemons/evolution-dratini-2x.webp",
    "evolution_2": "pokemons/evolution-dragonair-2x.webp",
    "evolution_3": "pokemons/evolution-dragonite-2x.webp",
        "move_p1": { "name": "Multiscale", "image": "moves/dragonite_p1.webp" },
    "move_s1": { "name": "Twister", "image": "moves/dragonite_s1.webp" },
    "move_s2": { "name": "Dragon Breath", "image": "moves/dragonite_s2.webp" },
    "move_u1": { "name": "Draco Impact", "image": "moves/dragonite_u1.webp" },
"move_s11": { "name": "Dragon Dance", "image": "moves/dragonite_s11.webp" },
    "move_s12": { "name": "Extreme Speed", "image": "moves/dragonite_s12.webp" },
    "move_s21": { "name": "Hyper Beam", "image": "moves/dragonite_s21.webp" },
    "move_s22": { "name": "Outrage", "image": "moves/dragonite_s22.webp" },
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
    "main": "pokemons/roster-mewtwox.webp",
    "big": "pokemons/roster-mewtwox-2x.webp",
    "complete": "pokemons/stat-mewtwox.webp",
        "move_p1": { "name": "Pressure", "image": "moves/mewtwox_p1.webp" },
    "move_s1": { "name": "Confusion", "image": "moves/mewtwox_s1.webp" },
    "move_s2": { "name": "Barrier", "image": "moves/mewtwox_s2.webp" },
    "move_u1": { "name": "Infinite Psyburn", "image": "moves/mewtwox_u1.webp" },
"move_s11": { "name": "Future Sight", "image": "moves/mewtwox_s11.webp" },
    "move_s12": { "name": "Psystrike", "image": "moves/mewtwox_s12.webp" },
    "move_s21": { "name": "Recover", "image": "moves/mewtwox_s21.webp" },
    "move_s22": { "name": "Teleport", "image": "moves/mewtwox_s22.webp" },
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
    "main": "pokemons/roster-mewtwoy.webp",
    "big": "pokemons/roster-mewtwoy-2x.webp",
    "complete": "pokemons/stat-mewtwoy.webp",
        "move_p1": { "name": "Pressure", "image": "moves/mewtwoy_p1.webp" },
    "move_s1": { "name": "Confusion", "image": "moves/mewtwoy_s1.webp" },
    "move_s2": { "name": "Barrier", "image": "moves/mewtwoy_s2.webp" },
    "move_u1": { "name": "Infinite Psyburn", "image": "moves/mewtwoy_u1.webp" },
"move_s11": { "name": "Future Sight", "image": "moves/mewtwoy_s11.webp" },
    "move_s12": { "name": "Psystrike", "image": "moves/mewtwoy_s12.webp" },
    "move_s21": { "name": "Recover", "image": "moves/mewtwoy_s21.webp" },
    "move_s22": { "name": "Teleport", "image": "moves/mewtwoy_s22.webp" },
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
    "main": "pokemons/roster-mew.webp",
    "big": "pokemons/roster-mew-2x.webp",
    "complete": "pokemons/stat-mew.webp",
    "evolution_1": "pokemons/evolution-mew-2x.webp",
        "move_p1": { "name": "Move Reset", "image": "moves/mew_p1.webp" },
    "move_s1": { "name": "Electro Ball", "image": "moves/mew_s1.webp" },
    "move_s2": { "name": "Coaching", "image": "moves/mew_s2.webp" },
    "move_u1": { "name": "Mystical Mirage", "image": "moves/mew_u1.webp" },
"move_s11": { "name": "Solar Beam", "image": "moves/mew_s11.webp" },
    "move_s12": { "name": "Surf", "image": "moves/mew_s12.webp" },
    "move_s21": { "name": "Light Screen", "image": "moves/mew_s21.webp" },
    "move_s22": { "name": "Agility", "image": "moves/mew_s22.webp" },
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
  "name": "Meganium",
  "dex": 154,
  "images": {
    "main": "pokemons/roster-meganium.webp",
    "big": "pokemons/roster-meganium-2x.webp",
    "complete": "pokemons/stat-meganium.webp",
    "move_p1": { "name": "Overgrow", "image": "moves/meganium_p1.webp" },
    "move_s1": { "name": "Magical Leaf", "image": "moves/meganium_s1.webp" },
    "move_s2": { "name": "Synthesis", "image": "moves/meganium_s2.webp" },
    "move_u1": { "name": "Full Bloom Aroma", "image": "moves/meganium_u1.webp" },
    "move_s11": { "name": "Grass Knot", "image": "moves/meganium_s11.webp" },
    "move_s21": { "name": "Petal Blizzard", "image": "moves/meganium_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.SUPPORTER,
  "stats": {
    "offense": 2,
    "endurance": 3,
    "mobility": 2,
    "scoring": 2,
    "support": 4
  },
  "tags": [
    Tag.SUPPORTER,
    Tag.MELEE
  ],
  "difficulty": 1
},
{
  "name": "Typhlosion",
  "dex": 157,
  "images": {
    "main": "pokemons/roster-typhlosion.webp",
    "big": "pokemons/roster-typhlosion-2x.webp",
    "complete": "pokemons/stat-typhlosion.webp",
    "move_p1": { "name": "Blaze", "image": "moves/typhlosion_p1.webp" },
    "move_s11": { "name": "Eruption", "image": "moves/typhlosion_s11.webp" },
    "move_s21": { "name": "Flame Wheel", "image": "moves/typhlosion_s21.webp" },
    "move_u1": { "name": "Explosive Heat Haze", "image": "moves/typhlosion_u1.webp" },
  },
  "active": true,
  "battleType": BattleType.ATTACKER,
  "stats": {
    "offense": 4,
    "endurance": 2,
    "mobility": 3,
    "scoring": 2,
    "support": 1
  },
  "tags": [
    Tag.ATTACKER,
    Tag.RANGED
  ],
  "difficulty": 2
},
{
  "name": "Feraligatr",
  "dex": 160,
  "images": {
    "main": "pokemons/roster-feraligatr.webp",
    "big": "pokemons/roster-feraligatr-2x.webp",
    "complete": "pokemons/stat-feraligatr.webp",
    "move_p1": { "name": "Torrent", "image": "moves/feraligatr_p1.webp" },
    "move_s1": { "name": "Bite", "image": "moves/feraligatr_s1.webp" },
    "move_s2": { "name": "Scratch", "image": "moves/feraligatr_s2.webp" },
    "move_u1": { "name": "Big Jaw Bite", "image": "moves/feraligatr_u1.webp" },
    "move_s11": { "name": "Crunch", "image": "moves/feraligatr_s11.webp" },
    "move_s21": { "name": "Waterfall", "image": "moves/feraligatr_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ALLROUNDER,
  "stats": {
    "offense": 4,
    "endurance": 3,
    "mobility": 2.5,
    "scoring": 2,
    "support": 1
  },
  "tags": [
    Tag.ALLROUNDER,
    Tag.MELEE
  ],
  "difficulty": 2
},
{
  "name": "Azumarill",
  "dex": 184,
  "images": {
    "main": "pokemons/roster-azumarill.webp",
    "big": "pokemons/roster-azumarill-2x.webp",
    "complete": "pokemons/stat-azumarill.webp",
    "evolution_1": "pokemons/evolution-marill-2x.webp",
    "evolution_2": "pokemons/evolution-azumarill-2x.webp",
        "move_p1": { "name": "Huge Power", "image": "moves/azumarill_p1.webp" },
    "move_s1": { "name": "Tackle", "image": "moves/azumarill_s1.webp" },
    "move_s2": { "name": "Bubble", "image": "moves/azumarill_s2.webp" },
    "move_u1": { "name": "Belly Bash", "image": "moves/azumarill_u1.webp" },
"move_s11": { "name": "Play Rough", "image": "moves/azumarill_s11.webp" },
    "move_s12": { "name": "Water Pulse", "image": "moves/azumarill_s12.webp" },
    "move_s21": { "name": "Whirlpool", "image": "moves/azumarill_s21.webp" },
    "move_s22": { "name": "Aqua Tail", "image": "moves/azumarill_s22.webp" },
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
    "main": "pokemons/roster-espeon.webp",
    "big": "pokemons/roster-espeon-2x.webp",
    "complete": "pokemons/stat-espeon.webp",
    "evolution_1": "pokemons/evolution-eevee-2x.webp",
    "evolution_2": "pokemons/evolution-espeon-2x.webp",
        "move_p1": { "name": "Magic Bounce", "image": "moves/espeon_p1.webp" },
    "move_s1": { "name": "Swift", "image": "moves/espeon_s1.webp" },
    "move_s2": { "name": "Growl", "image": "moves/espeon_s2.webp" },
    "move_u1": { "name": "Psychic Solare", "image": "moves/espeon_u1.webp" },
"move_s11": { "name": "Psyshock", "image": "moves/espeon_s11.webp" },
    "move_s12": { "name": "Stored Power", "image": "moves/espeon_s12.webp" },
    "move_s21": { "name": "Psybeam", "image": "moves/espeon_s21.webp" },
    "move_s22": { "name": "Future Sight", "image": "moves/espeon_s22.webp" },
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
    "main": "pokemons/roster-umbreon.webp",
    "big": "pokemons/roster-umbreon-2x.webp",
    "complete": "pokemons/stat-umbreon.webp",
    "evolution_1": "pokemons/evolution-eevee-2x.webp",
    "evolution_2": "pokemons/evolution-umbreon-2x.webp",
        "move_p1": { "name": "Inner Focus", "image": "moves/umbreon_p1.webp" },
    "move_s1": { "name": "Swift", "image": "moves/umbreon_s1.webp" },
    "move_s2": { "name": "Fake Tears", "image": "moves/umbreon_s2.webp" },
    "move_u1": { "name": "Moonlight Prance", "image": "moves/umbreon_u1.webp" },
"move_s11": { "name": "Mean Look", "image": "moves/umbreon_s11.webp" },
    "move_s12": { "name": "Foul Play", "image": "moves/umbreon_s12.webp" },
    "move_s21": { "name": "Wish", "image": "moves/umbreon_s21.webp" },
    "move_s22": { "name": "Snarl", "image": "moves/umbreon_s22.webp" },
  },
  "active": true,
  "battleType": BattleType.DEFENDER,
  "tags": [Tag.DEFENDER, Tag.MELEE]
},
{
  "name": "Mamoswine",
  "dex": 473,
  "images": {
    "main": "pokemons/roster-mamoswine.webp",
    "big": "pokemons/roster-mamoswine-2x.webp",
    "complete": "pokemons/stat-mamoswine.webp",
    "evolution_1": "pokemons/evolution-swinub-2x.webp",
    "evolution_2": "pokemons/evolution-piloswine-2x.webp",
    "evolution_3": "pokemons/evolution-mamoswine-2x.webp",
    "move_p1": { "name": "Thick Fat", "image": "moves/mamoswine_p1.webp" },
    "move_s1": { "name": "Ice Shard", "image": "moves/mamoswine_s1.webp" },
    "move_s2": { "name": "Tackle", "image": "moves/mamoswine_s2.webp" },
    "move_u1": { "name": "Mammoth Mash", "image": "moves/mamoswine_u1.webp" },
    "move_s11": { "name": "Icicle Crash", "image": "moves/mamoswine_s11.webp" },
    "move_s12": { "name": "Ice Fang", "image": "moves/mamoswine_s12.webp" },
    "move_s21": { "name": "High Horsepower", "image": "moves/mamoswine_s21.webp" },
    "move_s22": { "name": "Earthquake", "image": "moves/mamoswine_s22.webp" },
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
    "main": "pokemons/roster-suicune.webp",
    "big": "pokemons/roster-suicune-2x.webp",
    "complete": "pokemons/stat-suicune.webp",
    "evolution_1": "pokemons/evolution-suicune-2x.webp",
        "move_p1": { "name": "Pressure", "image": "moves/suicune_p1.webp" },
    "move_s1": { "name": "Water Pulse", "image": "moves/suicune_s1.webp" },
    "move_s2": { "name": "Avalanche", "image": "moves/suicune_s2.webp" },
    "move_u1": { "name": "Endless Ice Spikes", "image": "moves/suicune_u1.webp" },
"move_s11": { "name": "Whirlpool", "image": "moves/suicune_s11.webp" },
    "move_s12": { "name": "Surf", "image": "moves/suicune_s12.webp" },
    "move_s21": { "name": "Ice Beam", "image": "moves/suicune_s21.webp" },
    "move_s22": { "name": "Icy Wind", "image": "moves/suicune_s22.webp" },
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
    "main": "pokemons/roster-tyranitar.webp",
    "big": "pokemons/roster-tyranitar-2x.webp",
    "complete": "pokemons/stat-tyranitar.webp",
    "evolution_1": "pokemons/evolution-larvitar-2x.webp",
    "evolution_2": "pokemons/evolution-pupitar-2x.webp",
    "evolution_3": "pokemons/evolution-tyranitar-2x.webp",
        "move_p1": { "name": "Shed Skin", "image": "moves/tyranitar_p1.webp" },
    "move_s1": { "name": "Bite", "image": "moves/tyranitar_s1.webp" },
    "move_s2": { "name": "Rock Polish", "image": "moves/tyranitar_s2.webp" },
    "move_u1": { "name": "Tyrannical Rampage", "image": "moves/tyranitar_u1.webp" },
"move_s11": { "name": "Dark Pulse", "image": "moves/tyranitar_s11.webp" },
    "move_s12": { "name": "Stone Edge", "image": "moves/tyranitar_s12.webp" },
    "move_s21": { "name": "Ancient Power", "image": "moves/tyranitar_s21.webp" },
    "move_s22": { "name": "Sand Tomb", "image": "moves/tyranitar_s22.webp" },
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
    "main": "pokemons/roster-ho-oh.webp",
    "big": "pokemons/roster-ho-oh-2x.webp",
    "complete": "pokemons/stat-ho-oh.webp",
    "evolution_1": "pokemons/evolution-ho-oh-2x.webp",
        "move_p1": { "name": "Regenerator", "image": "moves/ho-oh_p1.webp" },
    "move_s1": { "name": "Safeguard", "image": "moves/ho-oh_s1.webp" },
    "move_s2": { "name": "Tailwind", "image": "moves/ho-oh_s2.webp" },
    "move_u1": { "name": "Rekindling Flame", "image": "moves/ho-oh_u1.webp" },
"move_s11": { "name": "Sacred Fire", "image": "moves/ho-oh_s11.webp" },
    "move_s12": { "name": "Fire Spin", "image": "moves/ho-oh_s12.webp" },
    "move_s21": { "name": "Flamethrower", "image": "moves/ho-oh_s21.webp" },
    "move_s22": { "name": "Sky Attack", "image": "moves/ho-oh_s22.webp" },
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
    "main": "pokemons/roster-blaziken.webp",
    "big": "pokemons/roster-blaziken-2x.webp",
    "complete": "pokemons/stat-blaziken.webp",
    "evolution_1": "pokemons/evolution-torchic-2x.webp",
    "evolution_2": "pokemons/evolution-combusken-2x.webp",
    "evolution_3": "pokemons/evolution-blaziken-2x.webp",
        "move_p1": { "name": "Blaze", "image": "moves/blaziken_p1.webp" },
    "move_s1": { "name": "Aerial Ace", "image": "moves/blaziken_s1.webp" },
    "move_s2": { "name": "Ember", "image": "moves/blaziken_s2.webp" },
    "move_u1": { "name": "Spinning Flame Fist", "image": "moves/blaziken_u1.webp" },
"move_s11": { "name": "Fire Punch", "image": "moves/blaziken_s11.webp" },
    "move_s12": { "name": "Overheat", "image": "moves/blaziken_s12.webp" },
    "move_s21": { "name": "Focus Blast", "image": "moves/blaziken_s21.webp" },
    "move_s22": { "name": "Blaze Kick", "image": "moves/blaziken_s22.webp" },
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
    "main": "pokemons/roster-gardevoir.webp",
    "big": "pokemons/roster-gardevoir-2x.webp",
    "complete": "pokemons/stat-gardevoir.webp",
    "move_p1": { "name": "Synchronize", "image": "moves/gardevoir_p1.webp" },
    "move_s1": { "name": "Confusion", "image": "moves/gardevoir_s1.webp" },
    "move_s2": { "name": "Teleport", "image": "moves/gardevoir_s2.webp" },
    "move_u1": { "name": "Fairy Singularity", "image": "moves/gardevoir_u1.webp" },
    "move_s11": { "name": "Psychic", "image": "moves/gardevoir_s11.webp" },
    "move_s12": { "name": "Moonblast", "image": "moves/gardevoir_s12.webp" },
    "move_s21": { "name": "Psyshock", "image": "moves/gardevoir_s21.webp" },
    "move_s22": { "name": "Future Sight", "image": "moves/gardevoir_s22.webp" },
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
    "main": "pokemons/roster-sableye.webp",
    "big": "pokemons/roster-sableye-2x.webp",
    "complete": "pokemons/stat-sableye.webp",
    "evolution_1": "pokemons/evolution-sableye-2x.webp",
        "move_p1": { "name": "Prankster", "image": "moves/sableye_p1.webp" },
    "move_s1": { "name": "Thief", "image": "moves/sableye_s1.webp" },
    "move_s2": { "name": "Astonish", "image": "moves/sableye_s2.webp" },
    "move_u1": { "name": "Chaos Glower", "image": "moves/sableye_u1.webp" },
"move_s11": { "name": "Knock Off", "image": "moves/sableye_s11.webp" },
    "move_s12": { "name": "Shadow Sneak", "image": "moves/sableye_s12.webp" },
    "move_s21": { "name": "Feint Attack", "image": "moves/sableye_s21.webp" },
    "move_s22": { "name": "Confuse Ray", "image": "moves/sableye_s22.webp" },
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
    "main": "pokemons/roster-absol.webp",
    "big": "pokemons/roster-absol-2x.webp",
    "complete": "pokemons/stat-absol.webp",
    "move_p1": { "name": "Super Luck", "image": "moves/absol_p1.webp" },
    "move_s1": { "name": "Feint", "image": "moves/absol_s1.webp" },
    "move_s11": { "name": "Night Slash", "image": "moves/absol_s11.webp" },
    "move_s12": { "name": "Pursuit", "image": "moves/absol_s12.webp" },
    "move_s2": { "name": "Slash", "image": "moves/absol_s2.webp" },
    "move_s21": { "name": "Psycho Cut", "image": "moves/absol_s21.webp" },
    "move_s22": { "name": "Sucker Punch", "image": "moves/absol_s22.webp" },
    "move_u1": { "name": "Midnight Slash", "image": "moves/absol_u1.webp" },
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
    "main": "pokemons/roster-metagross.webp",
    "big": "pokemons/roster-metagross-2x.webp",
    "complete": "pokemons/stat-metagross.webp",
    "evolution_1": "pokemons/evolution-beldum-2x.webp",
    "evolution_2": "pokemons/evolution-metang-2x.webp",
    "evolution_3": "pokemons/evolution-metagross-2x.webp",
        "move_p1": { "name": "Clear Body", "image": "moves/metagross_p1.webp" },
    "move_s1": { "name": "Iron Defense", "image": "moves/metagross_s1.webp" },
    "move_s2": { "name": "Tackle", "image": "moves/metagross_s2.webp" },
    "move_u1": { "name": "Compute and Crush", "image": "moves/metagross_u1.webp" },
"move_s11": { "name": "Meteor Mash", "image": "moves/metagross_s11.webp" },
    "move_s12": { "name": "Gyro Ball", "image": "moves/metagross_s12.webp" },
    "move_s21": { "name": "Zen Headbutt", "image": "moves/metagross_s21.webp" },
    "move_s22": { "name": "Magnet Rise", "image": "moves/metagross_s22.webp" },
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
    "main": "pokemons/roster-latias.webp",
    "big": "pokemons/roster-latias-2x.webp",
    "complete": "pokemons/stat-latias.webp",
    "evolution_1": "pokemons/evolution-latias-2x.webp",
        "move_p1": { "name": "Levitate", "image": "moves/latias_p1.webp" },
    "move_s1": { "name": "Confusion", "image": "moves/latias_s1.webp" },
    "move_s2": { "name": "Swift", "image": "moves/latias_s2.webp" },
    "move_u1": { "name": "Mist Blast", "image": "moves/latias_u1.webp" },
"move_s11": { "name": "Mist Ball", "image": "moves/latias_s11.webp" },
    "move_s12": { "name": "Dragon Cheer", "image": "moves/latias_s12.webp" },
    "move_s21": { "name": "Dragon Pulse", "image": "moves/latias_s21.webp" },
    "move_s22": { "name": "Dragon Breath", "image": "moves/latias_s22.webp" },
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
    "main": "pokemons/roster-latios.webp",
    "big": "pokemons/roster-latios-2x.webp",
    "complete": "pokemons/stat-latios.webp",
    "evolution_1": "pokemons/evolution-latios-2x.webp",
        "move_p1": { "name": "Levitate", "image": "moves/latios_p1.webp" },
    "move_s1": { "name": "Confusion", "image": "moves/latios_s1.webp" },
    "move_s2": { "name": "Swift", "image": "moves/latios_s2.webp" },
    "move_u1": { "name": "Eon Blast", "image": "moves/latios_u1.webp" },
"move_s11": { "name": "Luster Purge", "image": "moves/latios_s11.webp" },
    "move_s12": { "name": "Telekinesis", "image": "moves/latios_s12.webp" },
    "move_s21": { "name": "Dragon Pulse", "image": "moves/latios_s21.webp" },
    "move_s22": { "name": "Draco Meteor", "image": "moves/latios_s22.webp" },
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
    "main": "pokemons/roster-empoleon.webp",
    "big": "pokemons/roster-empoleon-2x.webp",
    "complete": "pokemons/stat-empoleon.webp",
    "evolution_1": "pokemons/evolution-piplup-2x.webp",
    "evolution_2": "pokemons/evolution-prinplup-2x.webp",
    "evolution_3": "pokemons/evolution-empoleon-2x.webp",
        "move_p1": { "name": "Torrent", "image": "moves/empoleon_p1.webp" },
    "move_s1": { "name": "Water Gun", "image": "moves/empoleon_s1.webp" },
    "move_s2": { "name": "Peck", "image": "moves/empoleon_s2.webp" },
    "move_u1": { "name": "Sovereign Slide", "image": "moves/empoleon_u1.webp" },
"move_s11": { "name": "Hydro Cannon", "image": "moves/empoleon_s11.webp" },
    "move_s12": { "name": "Whirlpool", "image": "moves/empoleon_s12.webp" },
    "move_s21": { "name": "Metal Claw", "image": "moves/empoleon_s21.webp" },
    "move_s22": { "name": "Aqua Jet", "image": "moves/empoleon_s22.webp" },
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
    "main": "pokemons/roster-garchomp.webp",
    "big": "pokemons/roster-garchomp-2x.webp",
    "complete": "pokemons/stat-garchomp.webp",
    "move_p1": { "name": "Rough Skin", "image": "moves/garchomp_p1.webp" },
    "move_s1": { "name": "Sand Attack", "image": "moves/garchomp_s1.webp" },
    "move_s2": { "name": "Bulldoze", "image": "moves/garchomp_s2.webp" },
    "move_u1": { "name": "Livid Outrage", "image": "moves/garchomp_u1.webp" },
    "evolution_1": "pokemons/evolution-gible-2x.webp",
    "evolution_2": "pokemons/evolution-gabite-2x.webp",
    "evolution_3": "pokemons/evolution-garchomp-2x.webp",
    "move_s11": { "name": "Dig", "image": "moves/garchomp_s11.webp" },
    "move_s12": { "name": "Dragon Rush", "image": "moves/garchomp_s12.webp" },
    "move_s21": { "name": "Earthquake", "image": "moves/garchomp_s21.webp" },
    "move_s22": { "name": "Dragon Claw", "image": "moves/garchomp_s22.webp" },
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
    "main": "pokemons/roster-lucario.webp",
    "big": "pokemons/roster-lucario-2x.webp",
    "complete": "pokemons/stat-lucario.webp",
    "move_p1": { "name": "Steadfast", "image": "moves/lucario_p1.webp" },
    "move_s1": { "name": "Quick Attack", "image": "moves/lucario_s1.webp" },
    "move_s2": { "name": "Meteor Mash", "image": "moves/lucario_s2.webp" },
    "move_u1": { "name": "Aura Cannon", "image": "moves/lucario_u1.webp" },
    "evolution_1": "pokemons/evolution-base-lucario-2x.webp",
    "evolution_2": "pokemons/evolution-mega-lucario-2x.webp",
    "move_s11": { "name": "Extreme Speed", "image": "moves/lucario_s11.webp" },
    "move_s12": { "name": "Power-Up Punch", "image": "moves/lucario_s12.webp" },
    "move_s21": { "name": "Bone Rush", "image": "moves/lucario_s21.webp" },
    "move_s22": { "name": "Close Combat", "image": "moves/lucario_s22.webp" },
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
    "main": "pokemons/roster-mega-lucario.webp",
    "big": "pokemons/roster-mega-lucario-2x.webp",
    "complete": "pokemons/stat-mega-lucario.webp",
        "move_p1": { "name": "Adaptability", "image": "moves/mega-lucario_p1.webp" },
    "move_s1": { "name": "Quick Attack", "image": "moves/mega-lucario_s1.webp" },
    "move_s2": { "name": "Meteor Mash", "image": "moves/mega-lucario_s2.webp" },
    "move_u1": { "name": "Aura Cannon", "image": "moves/mega-lucario_u1.webp" },
"move_s11": { "name": "Power-Up Punch", "image": "moves/mega-lucario_s11.webp" },
    "move_s21": { "name": "Close Combat", "image": "moves/mega-lucario_s21.webp" },
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
    "main": "pokemons/roster-leafeon.webp",
    "big": "pokemons/roster-leafeon-2x.webp",
    "complete": "pokemons/stat-leafeon.webp",
    "evolution_1": "pokemons/evolution-eevee-2x.webp",
    "evolution_2": "pokemons/evolution-leafeon-2x.webp",
        "move_p1": { "name": "Chlorophyll", "image": "moves/leafeon_p1.webp" },
    "move_s1": { "name": "Swift", "image": "moves/leafeon_s1.webp" },
    "move_s2": { "name": "Quick Attack", "image": "moves/leafeon_s2.webp" },
    "move_u1": { "name": "Emerald Two-Step", "image": "moves/leafeon_u1.webp" },
"move_s11": { "name": "Razor Leaf", "image": "moves/leafeon_s11.webp" },
    "move_s12": { "name": "Solar Blade", "image": "moves/leafeon_s12.webp" },
    "move_s21": { "name": "Aerial Ace", "image": "moves/leafeon_s21.webp" },
    "move_s22": { "name": "Leaf Blade", "image": "moves/leafeon_s22.webp" },
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
    "main": "pokemons/roster-glaceon.webp",
    "big": "pokemons/roster-glaceon-2x.webp",
    "complete": "pokemons/stat-glaceon.webp",
    "evolution_1": "pokemons/evolution-eevee-2x.webp",
    "evolution_2": "pokemons/evolution-glaceon-2x.webp",
        "move_p1": { "name": "Snow Cloak", "image": "moves/glaceon_p1.webp" },
    "move_s1": { "name": "Swift", "image": "moves/glaceon_s1.webp" },
    "move_s2": { "name": "Tail Whip", "image": "moves/glaceon_s2.webp" },
    "move_u1": { "name": "Glacial Stage", "image": "moves/glaceon_u1.webp" },
"move_s11": { "name": "Icicle Spear", "image": "moves/glaceon_s11.webp" },
    "move_s12": { "name": "Icy Wind", "image": "moves/glaceon_s12.webp" },
    "move_s21": { "name": "Ice Shard", "image": "moves/glaceon_s21.webp" },
    "move_s22": { "name": "Freeze Dry", "image": "moves/glaceon_s22.webp" },
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
  "name": "Palkia",
  "dex": 484,
  "images": {
    "main": "pokemons/roster-palkia.webp",
    "big": "pokemons/roster-palkia-2x.webp",
    "complete": "pokemons/stat-palkia.webp",
    "move_p1": { "name": "Pressure", "image": "moves/palkia_p1.webp" },
    "move_s1": { "name": "Aqua Ring", "image": "moves/palkia_s1.webp" },
    "move_s2": { "name": "Slash", "image": "moves/palkia_s2.webp" },
    "move_u1": { "name": "Multi Dimensional Rend", "image": "moves/palkia_u1.webp" },
    "move_s11": { "name": "Aura Sphere", "image": "moves/palkia_s11.webp" },
    "move_s21": { "name": "Dragon Claw", "image": "moves/palkia_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ALLROUNDER,
  "stats": {
    "offense": 2,
    "endurance": 4,
    "mobility": 2,
    "scoring": 2.5,
    "support": 2.5
  },
  "tags": [
    Tag.ALLROUNDER,
    Tag.MELEE
  ],
  "difficulty": 2
},
{
  "name": "Darkrai",
  "dex": 491,
  "images": {
    "main": "pokemons/roster-darkrai.webp",
    "big": "pokemons/roster-darkrai-2x.webp",
    "complete": "pokemons/stat-darkrai.webp",
    "evolution_1": "pokemons/evolution-darkrai-2x.webp",
        "move_p1": { "name": "Bad Dreams", "image": "moves/darkrai_p1.webp" },
    "move_s1": { "name": "Hypnosis", "image": "moves/darkrai_s1.webp" },
    "move_s2": { "name": "Calm Mind", "image": "moves/darkrai_s2.webp" },
    "move_u1": { "name": "Worst Nightmare", "image": "moves/darkrai_u1.webp" },
"move_s11": { "name": "Dark Void", "image": "moves/darkrai_s11.webp" },
    "move_s12": { "name": "Shadow Claw", "image": "moves/darkrai_s12.webp" },
    "move_s21": { "name": "Nasty Plot", "image": "moves/darkrai_s21.webp" },
    "move_s22": { "name": "Dark Pulse", "image": "moves/darkrai_s22.webp" },
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
    "main": "pokemons/roster-crustle.webp",
    "big": "pokemons/roster-crustle-2x.webp",
    "complete": "pokemons/stat-crustle.webp",
    "move_p1": { "name": "Sturdy", "image": "moves/crustle_p1.webp" },
    "move_s1": { "name": "Rock Slide", "image": "moves/crustle_s1.webp" },
    "move_s2": { "name": "Fury Cutter", "image": "moves/crustle_s2.webp" },
    "move_u1": { "name": "Rubble Rouser", "image": "moves/crustle_u1.webp" },
    "evolution_1": "pokemons/evolution-dweeble-2x.webp",
    "evolution_2": "pokemons/evolution-crustle-2x.webp",
    "move_s11": { "name": "Rock Tomb", "image": "moves/crustle_s11.webp" },
    "move_s12": { "name": "Shell Smash", "image": "moves/crustle_s12.webp" },
    "move_s21": { "name": "Stealth Rock", "image": "moves/crustle_s21.webp" },
    "move_s22": { "name": "X-Scissor", "image": "moves/crustle_s22.webp" },
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
    "main": "pokemons/roster-zoroark.webp",
    "big": "pokemons/roster-zoroark-2x.webp",
    "complete": "pokemons/stat-zoroark.webp",
    "evolution_1": "pokemons/evolution-zorua-2x.webp",
    "evolution_2": "pokemons/evolution-zoroark-2x.webp",
        "move_p1": { "name": "Illusion", "image": "moves/zoroark_p1.webp" },
    "move_s1": { "name": "Slash", "image": "moves/zoroark_s1.webp" },
    "move_s2": { "name": "Fury Swipes", "image": "moves/zoroark_s2.webp" },
    "move_u1": { "name": "Nightfall Daze", "image": "moves/zoroark_u1.webp" },
"move_s11": { "name": "Shadow Claw", "image": "moves/zoroark_s11.webp" },
    "move_s12": { "name": "Cut", "image": "moves/zoroark_s12.webp" },
    "move_s21": { "name": "Night Slash", "image": "moves/zoroark_s21.webp" },
    "move_s22": { "name": "Feint Attack", "image": "moves/zoroark_s22.webp" },
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
    "main": "pokemons/roster-chandelure.webp",
    "big": "pokemons/roster-chandelure-2x.webp",
    "complete": "pokemons/stat-chandelure.webp",
    "evolution_1": "pokemons/evolution-litwick-2x.webp",
    "evolution_2": "pokemons/evolution-lampent-2x.webp",
    "evolution_3": "pokemons/evolution-chandelure-2x.webp",
        "move_p1": { "name": "Infiltrator", "image": "moves/chandelure_p1.webp" },
    "move_s1": { "name": "Ember", "image": "moves/chandelure_s1.webp" },
    "move_s2": { "name": "Night Shade", "image": "moves/chandelure_s2.webp" },
    "move_u1": { "name": "Ignite Midnight", "image": "moves/chandelure_u1.webp" },
"move_s11": { "name": "Flamethrower", "image": "moves/chandelure_s11.webp" },
    "move_s12": { "name": "Overheat", "image": "moves/chandelure_s12.webp" },
    "move_s21": { "name": "Poltergeist", "image": "moves/chandelure_s21.webp" },
    "move_s22": { "name": "Imprison", "image": "moves/chandelure_s22.webp" },
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
  "name": "Reshiram",
  "dex": 643,
  "images": {
    "main": "pokemons/roster-reshiram.webp",
    "big": "pokemons/roster-reshiram-2x.webp",
    "complete": "pokemons/stat-reshiram.webp",
    "move_p1": { "name": "Turboblaze", "image": "moves/reshiram_p1.webp" },
    "move_s1": { "name": "Dragon Breath", "image": "moves/reshiram_s1.webp" },
    "move_s2": { "name": "Tailwind", "image": "moves/reshiram_s2.webp" },
    "move_u1": { "name": "Flames That Bring Lightning", "image": "moves/reshiram_u1.webp" },
    "move_s11": { "name": "Blue Flare", "image": "moves/reshiram_s11.webp" },
    "move_s21": { "name": "Dragon Dance", "image": "moves/reshiram_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ATTACKER,
  "stats": {
    "offense": 4,
    "endurance": 1,
    "mobility": 4,
    "scoring": 2,
    "support": 1
  },
  "tags": [
    Tag.ATTACKER,
    Tag.RANGED
  ],
  "difficulty": 2
},
{
  "name": "Delphox",
  "dex": 655,
  "images": {
    "main": "pokemons/roster-delphox.webp",
    "big": "pokemons/roster-delphox-2x.webp",
    "complete": "pokemons/stat-delphox.webp",
    "evolution_1": "pokemons/evolution-fennekin-2x.webp",
    "evolution_2": "pokemons/evolution-braixen-2x.webp",
    "evolution_3": "pokemons/evolution-delphox-2x.webp",
        "move_p1": { "name": "Blaze", "image": "moves/delphox_p1.webp" },
    "move_s1": { "name": "Ember", "image": "moves/delphox_s1.webp" },
    "move_s2": { "name": "Will-o-Wisp", "image": "moves/delphox_s2.webp" },
    "move_u1": { "name": "Fanciful Fireworks", "image": "moves/delphox_u1.webp" },
"move_s11": { "name": "Fire Blast", "image": "moves/delphox_s11.webp" },
    "move_s12": { "name": "Mystical Fire", "image": "moves/delphox_s12.webp" },
    "move_s21": { "name": "Fire Spin", "image": "moves/delphox_s21.webp" },
    "move_s22": { "name": "Flame Charge", "image": "moves/delphox_s22.webp" },
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
    "main": "pokemons/roster-greninja.webp",
    "big": "pokemons/roster-greninja-2x.webp",
    "complete": "pokemons/stat-greninja.webp",
    "move_p1": { "name": "Torrent", "image": "moves/greninja_p1.webp" },
    "move_s1": { "name": "Bubble", "image": "moves/greninja_s1.webp" },
    "move_s2": { "name": "Substitute", "image": "moves/greninja_s2.webp" },
    "move_u1": { "name": "Waterburst Shuriken", "image": "moves/greninja_u1.webp" },
    "evolution_1": "pokemons/evolution-froakie-2x.webp",
    "evolution_2": "pokemons/evolution-frogadier-2x.webp",
    "evolution_3": "pokemons/evolution-greninja-2x.webp",
    "move_s11": { "name": "Water Shuriken", "image": "moves/greninja_s11.webp" },
    "move_s12": { "name": "Surf", "image": "moves/greninja_s12.webp" },
    "move_s21": { "name": "Double Team", "image": "moves/greninja_s21.webp" },
    "move_s22": { "name": "Smokescreen", "image": "moves/greninja_s22.webp" },
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
    "main": "pokemons/roster-talonflame.webp",
    "big": "pokemons/roster-talonflame-2x.webp",
    "complete": "pokemons/stat-talonflame.webp",
    "move_p1": { "name": "Gale Wings", "image": "moves/talonflame_p1.webp" },
    "move_s1": { "name": "Peck", "image": "moves/talonflame_s1.webp" },
    "move_s2": { "name": "Acrobatics", "image": "moves/talonflame_s2.webp" },
    "move_u1": { "name": "Flame Sweep", "image": "moves/talonflame_u1.webp" },
    "evolution_1": "pokemons/evolution-fletchling-2x.webp",
    "evolution_2": "pokemons/evolution-fletchinder-2x.webp",
    "evolution_3": "pokemons/evolution-talonflame-2x.webp",
    "move_s11": { "name": "Flame Charge", "image": "moves/talonflame_s11.webp" },
    "move_s12": { "name": "Aerial Ace", "image": "moves/talonflame_s12.webp" },
    "move_s21": { "name": "Fly", "image": "moves/talonflame_s21.webp" },
    "move_s22": { "name": "Brave Bird", "image": "moves/talonflame_s22.webp" },
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
    "main": "pokemons/roster-aegislash.webp",
    "big": "pokemons/roster-aegislash-2x.webp",
    "complete": "pokemons/stat-aegislash.webp",
    "evolution_1": "pokemons/evolution-honedge-2x.webp",
    "evolution_2": "pokemons/evolution-doublade-2x.webp",
    "evolution_3": "pokemons/evolution-aegislash-2x.webp",
        "move_p1": { "name": "Stance Change", "image": "moves/aegislash_p1.webp" },
    "move_s1": { "name": "Shadow Sneak", "image": "moves/aegislash_s1.webp" },
    "move_s2": { "name": "Sacred Sword", "image": "moves/aegislash_s2.webp" },
    "move_u1": { "name": "Coup de Grace", "image": "moves/aegislash_u1.webp" },
"move_s11": { "name": "Shadow Claw", "image": "moves/aegislash_s11.webp" },
    "move_s12": { "name": "Iron Defense", "image": "moves/aegislash_s12.webp" },
    "move_s21": { "name": "Wide Guard", "image": "moves/aegislash_s21.webp" },
    "move_s22": { "name": "Iron Head", "image": "moves/aegislash_s22.webp" },
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
    "main": "pokemons/roster-sylveon.webp",
    "big": "pokemons/roster-sylveon-2x.webp",
    "complete": "pokemons/stat-sylveon.webp",
    "evolution_1": "pokemons/evolution-eevee-2x.webp",
    "evolution_2": "pokemons/evolution-sylveon-2x.webp",
        "move_p1": { "name": "Pixilate", "image": "moves/sylveon_p1.webp" },
    "move_s1": { "name": "Swift", "image": "moves/sylveon_s1.webp" },
    "move_s2": { "name": "Baby-Doll Eyes", "image": "moves/sylveon_s2.webp" },
    "move_u1": { "name": "Fairy Frolic", "image": "moves/sylveon_u1.webp" },
"move_s11": { "name": "Mystical Fire", "image": "moves/sylveon_s11.webp" },
    "move_s12": { "name": "Hyper Voice", "image": "moves/sylveon_s12.webp" },
    "move_s21": { "name": "Draining Kiss", "image": "moves/sylveon_s21.webp" },
    "move_s22": { "name": "Calm Mind", "image": "moves/sylveon_s22.webp" },
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
    "main": "pokemons/roster-goodra.webp",
    "big": "pokemons/roster-goodra-2x.webp",
    "complete": "pokemons/stat-goodra.webp",
    "evolution_1": "pokemons/evolution-goomy-2x.webp",
    "evolution_2": "pokemons/evolution-sliggoo-2x.webp",
    "evolution_3": "pokemons/evolution-goodra-2x.webp",
        "move_p1": { "name": "Gooey", "image": "moves/goodra_p1.webp" },
    "move_s1": { "name": "Bubble", "image": "moves/goodra_s1.webp" },
    "move_s2": { "name": "Tackle", "image": "moves/goodra_s2.webp" },
    "move_u1": { "name": "Right as Rain", "image": "moves/goodra_u1.webp" },
"move_s11": { "name": "Muddy Water", "image": "moves/goodra_s11.webp" },
    "move_s12": { "name": "Dragon Pulse", "image": "moves/goodra_s12.webp" },
    "move_s21": { "name": "Power Whip", "image": "moves/goodra_s21.webp" },
    "move_s22": { "name": "Acid Spray", "image": "moves/goodra_s22.webp" },
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
    "main": "pokemons/roster-trevenant.webp",
    "big": "pokemons/roster-trevenant-2x.webp",
    "complete": "pokemons/stat-trevenant.webp",
    "evolution_1": "pokemons/evolution-phantump-2x.webp",
    "evolution_2": "pokemons/evolution-trevenant-2x.webp",
        "move_p1": { "name": "Natural Cure", "image": "moves/trevenant_p1.webp" },
    "move_s1": { "name": "Will-o-Wisp", "image": "moves/trevenant_s1.webp" },
    "move_s2": { "name": "Branch Poke", "image": "moves/trevenant_s2.webp" },
    "move_u1": { "name": "Phantom Forest", "image": "moves/trevenant_u1.webp" },
"move_s11": { "name": "Wood Hammer", "image": "moves/trevenant_s11.webp" },
    "move_s12": { "name": "Curse", "image": "moves/trevenant_s12.webp" },
    "move_s21": { "name": "Horn Leech", "image": "moves/trevenant_s21.webp" },
    "move_s22": { "name": "Pain Split", "image": "moves/trevenant_s22.webp" },
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
  "name": "Yveltal",
  "dex": 717,
  "images": {
    "main": "pokemons/roster-yveltal.webp",
    "big": "pokemons/roster-yveltal-2x.webp",
    "complete": "pokemons/stat-yveltal.webp",
    "move_p1": { "name": "Dark Aura", "image": "moves/yveltal_p1.webp" },
    "move_s1": { "name": "Gust", "image": "moves/yveltal_s1.webp" },
    "move_s2": { "name": "Lash Out", "image": "moves/yveltal_s2.webp" },
    "move_u1": { "name": "Lumiere of Demise", "image": "moves/yveltal_u1.webp" },
    "move_s11": { "name": "Oblivion Wing", "image": "moves/yveltal_s11.webp" },
    "move_s21": { "name": "Dark Pulse", "image": "moves/yveltal_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ATTACKER,
  "stats": {
    "offense": 4,
    "endurance": 3,
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
  "name": "Hoopa",
  "dex": 720,
  "images": {
    "main": "pokemons/roster-hoopa.webp",
    "big": "pokemons/roster-hoopa-2x.webp",
    "complete": "pokemons/stat-hoopa.webp",
    "evolution_1": "pokemons/evolution-hoopa-2x.webp",
    "evolution_2": "pokemons/evolution-hoopa-unbound-2x.webp",
    "move_p1": { "name": "Magician", "image": "moves/hoopa_p1.webp" },
    "move_s1": { "name": "Astonish", "image": "moves/hoopa_s1.webp" },
    "move_s2": { "name": "Confusion", "image": "moves/hoopa_s2.webp" },
    "move_u1": { "name": "Rings Unbound", "image": "moves/hoopa_u1.webp" },
    "move_s11": { "name": "Phantom Force", "image": "moves/hoopa_s11.webp" },
    "move_s12": { "name": "Shadow Ball", "image": "moves/hoopa_s12.webp" },
    "move_s21": { "name": "Hyperspace Hole", "image": "moves/hoopa_s21.webp" },
    "move_s22": { "name": "Trick", "image": "moves/hoopa_s22.webp" },
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
    "main": "pokemons/roster-decidueye.webp",
    "big": "pokemons/roster-decidueye-2x.webp",
    "complete": "pokemons/stat-decidueye.webp",
    "evolution_1": "pokemons/evolution-rowlet-2x.webp",
    "evolution_2": "pokemons/evolution-dartrix-2x.webp",
    "evolution_3": "pokemons/evolution-decidueye-2x.webp",
        "move_p1": { "name": "Long Reach", "image": "moves/decidueye_p1.webp" },
    "move_s1": { "name": "Leafage", "image": "moves/decidueye_s1.webp" },
    "move_s2": { "name": "Astonish", "image": "moves/decidueye_s2.webp" },
    "move_u1": { "name": "Nock Nock", "image": "moves/decidueye_u1.webp" },
"move_s11": { "name": "Razor Leaf", "image": "moves/decidueye_s11.webp" },
    "move_s12": { "name": "Spirit Shackle", "image": "moves/decidueye_s12.webp" },
    "move_s21": { "name": "Leaf Storm", "image": "moves/decidueye_s21.webp" },
    "move_s22": { "name": "Shadow Sneak", "image": "moves/decidueye_s22.webp" },
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
    "main": "pokemons/roster-tsareena.webp",
    "big": "pokemons/roster-tsareena-2x.webp",
    "complete": "pokemons/stat-tsareena.webp",
    "evolution_1": "pokemons/evolution-bounsweet-2x.webp",
    "evolution_2": "pokemons/evolution-steenee-2x.webp",
    "evolution_3": "pokemons/evolution-tsareena-2x.webp",
        "move_p1": { "name": "Queenly Majesty", "image": "moves/tsareena_p1.webp" },
    "move_s1": { "name": "Razor Leaf", "image": "moves/tsareena_s1.webp" },
    "move_s2": { "name": "Rapid Spin", "image": "moves/tsareena_s2.webp" },
    "move_u1": { "name": "Queen Ascendant", "image": "moves/tsareena_u1.webp" },
"move_s11": { "name": "Triple Axel", "image": "moves/tsareena_s11.webp" },
    "move_s12": { "name": "Stomp", "image": "moves/tsareena_s12.webp" },
    "move_s21": { "name": "Trop Kick", "image": "moves/tsareena_s21.webp" },
    "move_s22": { "name": "Grassy Glide", "image": "moves/tsareena_s22.webp" },
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
    "main": "pokemons/roster-comfey.webp",
    "big": "pokemons/roster-comfey-2x.webp",
    "complete": "pokemons/stat-comfey.webp",
    "evolution_1": "pokemons/evolution-comfey-2x.webp",
        "move_p1": { "name": "Triage", "image": "moves/comfey_p1.webp" },
    "move_s1": { "name": "Synthesis", "image": "moves/comfey_s1.webp" },
    "move_s2": { "name": "Vine Whip", "image": "moves/comfey_s2.webp" },
    "move_u1": { "name": "Flowery Fields Forever", "image": "moves/comfey_u1.webp" },
"move_s11": { "name": "Floral Healing", "image": "moves/comfey_s11.webp" },
    "move_s12": { "name": "Sweet Kiss", "image": "moves/comfey_s12.webp" },
    "move_s21": { "name": "Magical Leaf", "image": "moves/comfey_s21.webp" },
    "move_s22": { "name": "Grass Knot", "image": "moves/comfey_s22.webp" },
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
    "main": "pokemons/roster-mimikyu.webp",
    "big": "pokemons/roster-mimikyu-2x.webp",
    "complete": "pokemons/stat-mimikyu.webp",
    "evolution_1": "pokemons/evolution-mimikyu-2x.webp",
        "move_p1": { "name": "Disguise", "image": "moves/mimikyu_p1.webp" },
    "move_s1": { "name": "Astonish", "image": "moves/mimikyu_s1.webp" },
    "move_s2": { "name": "Scratch", "image": "moves/mimikyu_s2.webp" },
    "move_u1": { "name": "Play With Me...", "image": "moves/mimikyu_u1.webp" },
"move_s11": { "name": "Play Rough", "image": "moves/mimikyu_s11.webp" },
    "move_s12": { "name": "Shadow Claw", "image": "moves/mimikyu_s12.webp" },
    "move_s21": { "name": "Shadow Sneak", "image": "moves/mimikyu_s21.webp" },
    "move_s22": { "name": "Trick Room", "image": "moves/mimikyu_s22.webp" },
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
    "main": "pokemons/roster-dhelmise.webp",
    "big": "pokemons/roster-dhelmise-2x.webp",
    "complete": "pokemons/stat-dhelmise.webp",
    "evolution_1": "pokemons/evolution-dhelmise-2x.webp",
        "move_p1": { "name": "Steelworker", "image": "moves/dhelmise_p1.webp" },
    "move_s1": { "name": "Payback", "image": "moves/dhelmise_s1.webp" },
    "move_s2": { "name": "Bulldoze", "image": "moves/dhelmise_s2.webp" },
    "move_u1": { "name": "Seaweed Snare", "image": "moves/dhelmise_u1.webp" },
"move_s11": { "name": "Power Whip", "image": "moves/dhelmise_s11.webp" },
    "move_s12": { "name": "Whirlpool", "image": "moves/dhelmise_s12.webp" },
    "move_s21": { "name": "Anchor Shot", "image": "moves/dhelmise_s21.webp" },
    "move_s22": { "name": "Heavy Slam", "image": "moves/dhelmise_s22.webp" },
  },
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
  "name": "Solgaleo",
  "dex": 791,
  "images": {
    "main": "pokemons/roster-solgaleo.webp",
    "big": "pokemons/roster-solgaleo-2x.webp",
    "complete": "pokemons/stat-solgaleo.webp",
    "move_p1": { "name": "Full Metal Body", "image": "moves/solgaleo_p1.webp" },
    "move_s1": { "name": "Teleport", "image": "moves/solgaleo_s1.webp" },
    "move_s2": { "name": "Cosmic Power", "image": "moves/solgaleo_s2.webp" },
    "move_u1": { "name": "Shining Meteor Crush", "image": "moves/solgaleo_u1.webp" },
    "move_s11": { "name": "Iron Head", "image": "moves/solgaleo_s11.webp" },
    "move_s21": { "name": "Psyshock", "image": "moves/solgaleo_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ALLROUNDER,
  "stats": {
    "offense": 5,
    "endurance": 3,
    "mobility": 2,
    "scoring": 2,
    "support": 1
  },
  "tags": [
    Tag.ALLROUNDER,
    Tag.MELEE
  ],
  "difficulty": 2
},
{
  "name": "Buzzwole",
  "dex": 794,
  "images": {
    "main": "pokemons/roster-buzzwole.webp",
    "big": "pokemons/roster-buzzwole-2x.webp",
    "complete": "pokemons/stat-buzzwole.webp",
    "evolution_1": "pokemons/evolution-buzzwole-2x.webp",
        "move_p1": { "name": "Beast Boost", "image": "moves/buzzwole_p1.webp" },
    "move_s1": { "name": "Mega Punch", "image": "moves/buzzwole_s1.webp" },
    "move_s2": { "name": "Fell Stinger", "image": "moves/buzzwole_s2.webp" },
    "move_u1": { "name": "Ultra Swole Slam", "image": "moves/buzzwole_u1.webp" },
"move_s11": { "name": "Lunge", "image": "moves/buzzwole_s11.webp" },
    "move_s12": { "name": "Smack Down", "image": "moves/buzzwole_s12.webp" },
    "move_s21": { "name": "Leech Life", "image": "moves/buzzwole_s21.webp" },
    "move_s22": { "name": "Superpower", "image": "moves/buzzwole_s22.webp" },
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
    "main": "pokemons/roster-zeraora.webp",
    "big": "pokemons/roster-zeraora-2x.webp",
    "complete": "pokemons/stat-zeraora.webp",
    "move_p1": { "name": "Volt Absorb", "image": "moves/zeraora_p1.webp" },
    "move_s1": { "name": "Agility", "image": "moves/zeraora_s1.webp" },
    "move_s2": { "name": "Slash", "image": "moves/zeraora_s2.webp" },
    "move_u1": { "name": "Plasma Gale", "image": "moves/zeraora_u1.webp" },
    "move_s11": { "name": "Volt Switch", "image": "moves/zeraora_s11.webp" },
    "move_s12": { "name": "Spark", "image": "moves/zeraora_s12.webp" },
    "move_s21": { "name": "Discharge", "image": "moves/zeraora_s21.webp" },
    "move_s22": { "name": "Wild Charge", "image": "moves/zeraora_s22.webp" },
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
    "main": "pokemons/roster-cinderace.webp",
    "big": "pokemons/roster-cinderace-2x.webp",
    "complete": "pokemons/stat-cinderace.webp",
    "move_p1": { "name": "Blaze", "image": "moves/cinderace_p1.webp" },
    "move_s1": { "name": "Ember", "image": "moves/cinderace_s1.webp" },
    "move_s2": { "name": "Low Sweep", "image": "moves/cinderace_s2.webp" },
    "move_u1": { "name": "Blazing Bicycle Kick", "image": "moves/cinderace_u1.webp" },
    "evolution_1": "pokemons/evolution-scorbunny-2x.webp",
    "evolution_2": "pokemons/evolution-raboot-2x.webp",
    "evolution_3": "pokemons/evolution-cinderace-2x.webp",
    "move_s11": { "name": "Pyro Ball", "image": "moves/cinderace_s11.webp" },
    "move_s12": { "name": "Blaze Kick", "image": "moves/cinderace_s12.webp" },
    "move_s21": { "name": "Flame Charge", "image": "moves/cinderace_s21.webp" },
    "move_s22": { "name": "Feint", "image": "moves/cinderace_s22.webp" },
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
    "main": "pokemons/roster-inteleon.webp",
    "big": "pokemons/roster-inteleon-2x.webp",
    "complete": "pokemons/stat-inteleon.webp",
    "evolution_1": "pokemons/evolution-sobble-2x.webp",
    "evolution_2": "pokemons/evolution-drizzile-2x.webp",
    "evolution_3": "pokemons/evolution-inteleon-2x.webp",
    "move_p1": { "name": "Sniper", "image": "moves/inteleon_p1.webp" },
    "move_s1": { "name": "Tearful Look", "image": "moves/inteleon_s1.webp" },
    "move_s2": { "name": "Water Gun", "image": "moves/inteleon_s2.webp" },
    "move_u1": { "name": "Azure Spy Vision", "image": "moves/inteleon_u1.webp" },
    "move_s11": { "name": "Fell Stinger", "image": "moves/inteleon_s11.webp" },
    "move_s12": { "name": "Acrobatics", "image": "moves/inteleon_s12.webp" },
    "move_s21": { "name": "Snipe Shot", "image": "moves/inteleon_s21.webp" },
    "move_s22": { "name": "Liquidation", "image": "moves/inteleon_s22.webp" },
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
    "main": "pokemons/roster-greedent.webp",
    "big": "pokemons/roster-greedent-2x.webp",
    "complete": "pokemons/stat-greedent.webp",
    "evolution_1": "pokemons/evolution-skwovet-2x.webp",
    "evolution_2": "pokemons/evolution-greedent-2x.webp",
        "move_p1": { "name": "Cheek Pouch", "image": "moves/greedent_p1.webp" },
    "move_s1": { "name": "Tackle", "image": "moves/greedent_s1.webp" },
    "move_s2": { "name": "Defense Curl", "image": "moves/greedent_s2.webp" },
    "move_u1": { "name": "Berry Belly Flop", "image": "moves/greedent_u1.webp" },
"move_s11": { "name": "Bullet Seed", "image": "moves/greedent_s11.webp" },
    "move_s12": { "name": "Belch", "image": "moves/greedent_s12.webp" },
    "move_s21": { "name": "Stuff Cheeks", "image": "moves/greedent_s21.webp" },
    "move_s22": { "name": "Covet", "image": "moves/greedent_s22.webp" },
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
    "main": "pokemons/roster-eldegoss.webp",
    "big": "pokemons/roster-eldegoss-2x.webp",
    "complete": "pokemons/stat-eldegoss.webp",
    "move_p1": { "name": "Cotton Down", "image": "moves/eldegoss_p1.webp" },
    "move_s1": { "name": "Leafage", "image": "moves/eldegoss_s1.webp" },
    "move_s2": { "name": "Synthesis", "image": "moves/eldegoss_s2.webp" },
    "move_u1": { "name": "Cotton Cloud Crash", "image": "moves/eldegoss_u1.webp" },
    "evolution_1": "pokemons/evolution-gossifleur-2x.webp",
    "evolution_2": "pokemons/evolution-eldegoss-2x.webp",
    "move_s11": { "name": "Pollen Puff", "image": "moves/eldegoss_s11.webp" },
    "move_s12": { "name": "Leaf Tornado", "image": "moves/eldegoss_s12.webp" },
    "move_s21": { "name": "Cotton Guard", "image": "moves/eldegoss_s21.webp" },
    "move_s22": { "name": "Cotton Spore", "image": "moves/eldegoss_s22.webp" },
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
    "main": "pokemons/roster-cramorant.webp",
    "big": "pokemons/roster-cramorant-2x.webp",
    "complete": "pokemons/stat-cramorant.webp",
    "move_p1": { "name": "Gulp Missile", "image": "moves/cramorant_p1.webp" },
    "move_s1": { "name": "Whirlpool", "image": "moves/cramorant_s1.webp" },
    "move_s2": { "name": "Feather Dance", "image": "moves/cramorant_s2.webp" },
    "move_u1": { "name": "Gatling Gulp Missile", "image": "moves/cramorant_u1.webp" },
    "move_s11": { "name": "Surf", "image": "moves/cramorant_s11.webp" },
    "move_s12": { "name": "Dive", "image": "moves/cramorant_s12.webp" },
    "move_s21": { "name": "Hurricane", "image": "moves/cramorant_s21.webp" },
    "move_s22": { "name": "Air Slash", "image": "moves/cramorant_s22.webp" },
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
  "name": "Toxtricity",
  "dex": 849,
  "images": {
    "main": "pokemons/roster-toxtricity.webp",
    "big": "pokemons/roster-toxtricity-2x.webp",
    "complete": "pokemons/stat-toxtricity.webp",
    "move_p1": { "name": "Punk Rock", "image": "moves/toxtricity_p1.webp" },
    "move_s1": { "name": "Charge", "image": "moves/toxtricity_s1.webp" },
    "move_s2": { "name": "Growl", "image": "moves/toxtricity_s2.webp" },
    "move_u1": { "name": "Venom Distortion", "image": "moves/toxtricity_u1.webp" },
    "move_s11": { "name": "Shift Gear", "image": "moves/toxtricity_s11.webp" },
    "move_s21": { "name": "Overdrive", "image": "moves/toxtricity_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ATTACKER,
  "stats": {
    "offense": 5,
    "endurance": 2,
    "mobility": 2,
    "scoring": 1,
    "support": 1
  },
  "tags": [
    Tag.ATTACKER,
    Tag.RANGED
  ],
  "difficulty": 2
},
{
  "name": "Sirfetch'd",
  "dex": 865,
  "images": {
    "main": "pokemons/roster-sirfetchd.webp",
    "big": "pokemons/roster-sirfetchd-2x.webp",
    "complete": "pokemons/stat-sirfetchd.webp",
        "move_p1": { "name": "Steadfast", "image": "moves/sirfetchd_p1.webp" },
    "move_s1": { "name": "Dual Wingbeat", "image": "moves/sirfetchd_s1.webp" },
    "move_s2": { "name": "Quick Attack", "image": "moves/sirfetchd_s2.webp" },
    "move_u1": { "name": "Lunging Leek Nova Blast", "image": "moves/sirfetchd_u1.webp" },
"move_s11": { "name": "Fury Cutter", "image": "moves/sirfetchd_s11.webp" },
    "move_s12": { "name": "Leaf Blade", "image": "moves/sirfetchd_s12.webp" },
    "move_s21": { "name": "Brutal Swing", "image": "moves/sirfetchd_s21.webp" },
    "move_s22": { "name": "Detect", "image": "moves/sirfetchd_s22.webp" },
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
    "main": "pokemons/roster-alcremie.webp",
    "big": "pokemons/roster-alcremie-2x.webp",
    "complete": "pokemons/stat-alcremie.webp",
    "evolution_1": "pokemons/evolution-milcery-2x.webp",
    "evolution_2": "pokemons/evolution-alcremie-2x.webp",
        "move_p1": { "name": "Aroma Veil", "image": "moves/alcremie_p1.webp" },
    "move_s1": { "name": "Helping Hand", "image": "moves/alcremie_s1.webp" },
    "move_s2": { "name": "Charm", "image": "moves/alcremie_s2.webp" },
    "move_u1": { "name": "Fluffy Cream Supreme", "image": "moves/alcremie_u1.webp" },
"move_s11": { "name": "Decorate", "image": "moves/alcremie_s11.webp" },
    "move_s12": { "name": "Recover", "image": "moves/alcremie_s12.webp" },
    "move_s21": { "name": "Dazzling Gleam", "image": "moves/alcremie_s21.webp" },
    "move_s22": { "name": "Sweet Scent", "image": "moves/alcremie_s22.webp" },
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
    "main": "pokemons/roster-falinks.webp",
    "big": "pokemons/roster-falinks-2x.webp",
    "complete": "pokemons/stat-falinks.webp",
    "evolution_1": "pokemons/evolution-falinks-2x.webp",
        "move_p1": { "name": "Battle Armor", "image": "moves/falinks_p1.webp" },
    "move_s1": { "name": "Tackle", "image": "moves/falinks_s1.webp" },
    "move_s2": { "name": "Bulk Up", "image": "moves/falinks_s2.webp" },
    "move_u1": { "name": "Dust Devil Formation", "image": "moves/falinks_u1.webp" },
"move_s11": { "name": "Megahorn", "image": "moves/falinks_s11.webp" },
    "move_s12": { "name": "Iron Head", "image": "moves/falinks_s12.webp" },
    "move_s21": { "name": "No Retreat", "image": "moves/falinks_s21.webp" },
    "move_s22": { "name": "Beat Up", "image": "moves/falinks_s22.webp" },
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
  "name": "Morpeko",
  "dex": 877,
  "images": {
    "main": "pokemons/roster-morpeko.webp",
    "big": "pokemons/roster-morpeko-2x.webp",
    "complete": "pokemons/stat-morpeko.webp",
    "move_p1": { "name": "Hunger Switch", "image": "moves/morpeko_p1.webp" },
    "move_s1": { "name": "Thunder Shock", "image": "moves/morpeko_s1.webp" },
    "move_s2": { "name": "Power Trip", "image": "moves/morpeko_s2.webp" },
    "move_u1": { "name": "Hungry Supercharge Wheel", "image": "moves/morpeko_u1.webp" },
    "move_s11": { "name": "Spark", "image": "moves/morpeko_s11.webp" },
    "move_s21": { "name": "Assurance", "image": "moves/morpeko_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.SPEEDSTER,
  "stats": {
    "offense": 4,
    "endurance": 3,
    "mobility": 3,
    "scoring": 2,
    "support": 1
  },
  "tags": [
    Tag.SPEEDSTER,
    Tag.MELEE
  ],
  "difficulty": 2
},
{
  "name": "Duraludon",
  "dex": 884,
  "images": {
    "main": "pokemons/roster-duraludon.webp",
    "big": "pokemons/roster-duraludon-2x.webp",
    "complete": "pokemons/stat-duraludon.webp",
        "move_p1": { "name": "Heavy Metal", "image": "moves/duraludon_p1.webp" },
    "move_s1": { "name": "Laser Focus", "image": "moves/duraludon_s1.webp" },
    "move_s2": { "name": "Metal Claw", "image": "moves/duraludon_s2.webp" },
    "move_u1": { "name": "Revolving Ruin", "image": "moves/duraludon_u1.webp" },
"move_s11": { "name": "Flash Cannon", "image": "moves/duraludon_s11.webp" },
    "move_s12": { "name": "Dragon Pulse", "image": "moves/duraludon_s12.webp" },
    "move_s21": { "name": "Dragon Tail", "image": "moves/duraludon_s21.webp" },
    "move_s22": { "name": "Stealth Rock", "image": "moves/duraludon_s22.webp" },
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
    "main": "pokemons/roster-dragapult.webp",
    "big": "pokemons/roster-dragapult-2x.webp",
    "complete": "pokemons/stat-dragapult.webp",
    "evolution_1": "pokemons/evolution-dreepy-2x.webp",
    "evolution_2": "pokemons/evolution-drakloak-2x.webp",
    "evolution_3": "pokemons/evolution-dragapult-2x.webp",
        "move_p1": { "name": "Clear Body", "image": "moves/dragapult_p1.webp" },
    "move_s1": { "name": "Astonish", "image": "moves/dragapult_s1.webp" },
    "move_s2": { "name": "Quick Attack", "image": "moves/dragapult_s2.webp" },
    "move_u1": { "name": "Dreep and Destroy", "image": "moves/dragapult_u1.webp" },
"move_s11": { "name": "Dragon Breath", "image": "moves/dragapult_s11.webp" },
    "move_s12": { "name": "Shadow Ball", "image": "moves/dragapult_s12.webp" },
    "move_s21": { "name": "Dragon Dance", "image": "moves/dragapult_s21.webp" },
    "move_s22": { "name": "Phantom Force", "image": "moves/dragapult_s22.webp" },
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
    "main": "pokemons/roster-zacian.webp",
    "big": "pokemons/roster-zacian-2x.webp",
    "complete": "pokemons/stat-zacian.webp",
    "evolution_1": "pokemons/evolution-zacian-2x.webp",
        "move_p1": { "name": "Intrepid Sword", "image": "moves/zacian_p1.webp" },
    "move_s1": { "name": "Slash", "image": "moves/zacian_s1.webp" },
    "move_s2": { "name": "Quick Attack", "image": "moves/zacian_s2.webp" },
    "move_u1": { "name": "Sovereign Sword", "image": "moves/zacian_u1.webp" },
"move_s11": { "name": "Metal Claw", "image": "moves/zacian_s11.webp" },
    "move_s12": { "name": "Sacred Sword", "image": "moves/zacian_s12.webp" },
    "move_s21": { "name": "Agility", "image": "moves/zacian_s21.webp" },
    "move_s22": { "name": "Play Rough", "image": "moves/zacian_s22.webp" },
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
    "main": "pokemons/roster-urshifu.webp",
    "big": "pokemons/roster-urshifu-2x.webp",
    "complete": "pokemons/stat-urshifu.webp",
    "evolution_1": "pokemons/evolution-kubfu-2x.webp",
    "evolution_2": "pokemons/evolution-urshifu-2x.webp",
        "move_p1": { "name": "Unseen Fist", "image": "moves/urshifu_p1.webp" },
    "move_s1": { "name": "Rock Smash", "image": "moves/urshifu_s1.webp" },
    "move_s2": { "name": "Headbutt", "image": "moves/urshifu_s2.webp" },
    "move_u1": { "name": "Ebon Fist", "image": "moves/urshifu_u1.webp" },
"move_s11": { "name": "Wicked Blow", "image": "moves/urshifu_s11.webp" },
    "move_s12": { "name": "Surging Strikes", "image": "moves/urshifu_s12.webp" },
    "move_s21": { "name": "Throat Chop", "image": "moves/urshifu_s21.webp" },
    "move_s22": { "name": "Liquidation", "image": "moves/urshifu_s22.webp" },
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
    "main": "pokemons/roster-meowscarada.webp",
    "big": "pokemons/roster-meowscarada-2x.webp",
    "complete": "pokemons/stat-meowscarada.webp",
    "evolution_1": "pokemons/evolution-sprigatito-2x.webp",
    "evolution_2": "pokemons/evolution-floragato-2x.webp",
    "evolution_3": "pokemons/evolution-meowscarada-2x.webp",
        "move_p1": { "name": "Overgrow", "image": "moves/meowscarada_p1.webp" },
    "move_s1": { "name": "Leafage", "image": "moves/meowscarada_s1.webp" },
    "move_s2": { "name": "Hone Claws", "image": "moves/meowscarada_s2.webp" },
    "move_u1": { "name": "Floral Flourish", "image": "moves/meowscarada_u1.webp" },
"move_s11": { "name": "Flower Trick", "image": "moves/meowscarada_s11.webp" },
    "move_s12": { "name": "Night Slash", "image": "moves/meowscarada_s12.webp" },
    "move_s21": { "name": "Double Team", "image": "moves/meowscarada_s21.webp" },
    "move_s22": { "name": "Trailblaze", "image": "moves/meowscarada_s22.webp" },
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
  "name": "Skeledirge",
  "dex": 911,
  "images": {
    "main": "pokemons/roster-skeledirge.webp",
    "big": "pokemons/roster-skeledirge-2x.webp",
    "complete": "pokemons/stat-skeledirge.webp",
    "move_p1": { "name": "Blaze", "image": "moves/skeledirge_p1.webp" },
    "move_s1": { "name": "Disarming Voice", "image": "moves/skeledirge_s1.webp" },
    "move_s2": { "name": "Roar", "image": "moves/skeledirge_s2.webp" },
    "move_u1": { "name": "Rousing Symphony", "image": "moves/skeledirge_u1.webp" },
    "move_s11": { "name": "Hyper Voice", "image": "moves/skeledirge_s11.webp" },
    "move_s21": { "name": "Snarl", "image": "moves/skeledirge_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ATTACKER,
  "stats": {
    "offense": 4,
    "endurance": 1,
    "mobility": 3,
    "scoring": 2,
    "support": 1
  },
  "tags": [
    Tag.ATTACKER,
    Tag.RANGED
  ],
  "difficulty": 2
},
{
  "name": "Quaquaval",
  "dex": 914,
  "images": {
    "main": "pokemons/roster-quaquaval.webp",
    "big": "pokemons/roster-quaquaval-2x.webp",
    "complete": "pokemons/stat-quaquaval.webp",
    "move_p1": { "name": "Moxie", "image": "moves/quaquaval_p1.webp" },
    "move_s1": { "name": "Pound", "image": "moves/quaquaval_s1.webp" },
    "move_s2": { "name": "Wing Attack", "image": "moves/quaquaval_s2.webp" },
    "move_u1": { "name": "Carnival Splash", "image": "moves/quaquaval_u1.webp" },
    "move_s11": { "name": "Low Sweep", "image": "moves/quaquaval_s11.webp" },
    "move_s21": { "name": "Liquidation", "image": "moves/quaquaval_s21.webp" },
  },
  "active": true,
  "battleType": BattleType.ALLROUNDER,
  "stats": {
    "offense": 4,
    "endurance": 3,
    "mobility": 3,
    "scoring": 1,
    "support": 1
  },
  "tags": [
    Tag.ALLROUNDER,
    Tag.MELEE
  ],
  "difficulty": 2
},
{
  "name": "Pawmot",
  "dex": 923,
  "images": {
    "main": "pokemons/roster-pawmot.webp",
    "big": "pokemons/roster-pawmot-2x.webp",
    "complete": "pokemons/stat-pawmot.webp",
    "evolution_1": "pokemons/evolution-pawmi-2x.webp",
    "evolution_2": "pokemons/evolution-pawmo-2x.webp",
    "evolution_3": "pokemons/evolution-pawmot-2x.webp",
        "move_p1": { "name": "Iron Fist", "image": "moves/pawmot_p1.webp" },
    "move_s1": { "name": "Nuzzle", "image": "moves/pawmot_s1.webp" },
    "move_s2": { "name": "Scratch", "image": "moves/pawmot_s2.webp" },
    "move_u1": { "name": "Zip Zap Full-Charge Spark", "image": "moves/pawmot_u1.webp" },
"move_s11": { "name": "Thunder Punch", "image": "moves/pawmot_s11.webp" },
    "move_s12": { "name": "Supercell Slam", "image": "moves/pawmot_s12.webp" },
    "move_s21": { "name": "Volt Switch", "image": "moves/pawmot_s21.webp" },
    "move_s22": { "name": "Mach Punch", "image": "moves/pawmot_s22.webp" },
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
    "main": "pokemons/roster-armarouge.webp",
    "big": "pokemons/roster-armarouge-2x.webp",
    "complete": "pokemons/stat-armarouge.webp",
    "evolution_1": "pokemons/evolution-charcadet-2x.webp",
    "evolution_2": "pokemons/evolution-armarouge-2x.webp",
        "move_p1": { "name": "Flash Fire", "image": "moves/armarouge_p1.webp" },
    "move_s1": { "name": "Incinerate", "image": "moves/armarouge_s1.webp" },
    "move_s2": { "name": "Will-o-Wisp", "image": "moves/armarouge_s2.webp" },
    "move_u1": { "name": "Psykaboom", "image": "moves/armarouge_u1.webp" },
"move_s11": { "name": "Fire Spin", "image": "moves/armarouge_s11.webp" },
    "move_s12": { "name": "Armor Cannon", "image": "moves/armarouge_s12.webp" },
    "move_s21": { "name": "Flame Charge", "image": "moves/armarouge_s21.webp" },
    "move_s22": { "name": "Psyshock", "image": "moves/armarouge_s22.webp" },
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
    "main": "pokemons/roster-ceruledge.webp",
    "big": "pokemons/roster-ceruledge-2x.webp",
    "complete": "pokemons/stat-ceruledge.webp",
    "evolution_1": "pokemons/evolution-charcadet-2x.webp",
    "evolution_2": "pokemons/evolution-ceruledge-2x.webp",
        "move_p1": { "name": "Weak Armor", "image": "moves/ceruledge_p1.webp" },
    "move_s1": { "name": "Lava Plume", "image": "moves/ceruledge_s1.webp" },
    "move_s2": { "name": "Take Down", "image": "moves/ceruledge_s2.webp" },
    "move_u1": { "name": "Revenant Rend", "image": "moves/ceruledge_u1.webp" },
"move_s11": { "name": "Bitter Blade", "image": "moves/ceruledge_s11.webp" },
    "move_s12": { "name": "Psycho Cut", "image": "moves/ceruledge_s12.webp" },
    "move_s21": { "name": "Phantom Force", "image": "moves/ceruledge_s21.webp" },
    "move_s22": { "name": "Flame Charge", "image": "moves/ceruledge_s22.webp" },
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
    "main": "pokemons/roster-tinkaton.webp",
    "big": "pokemons/roster-tinkaton-2x.webp",
    "complete": "pokemons/stat-tinkaton.webp",
    "evolution_1": "pokemons/evolution-tinkatink-2x.webp",
    "evolution_2": "pokemons/evolution-tinkatuff-2x.webp",
    "evolution_3": "pokemons/evolution-tinkaton-2x.webp",
        "move_p1": { "name": "Mold Breaker", "image": "moves/tinkaton_p1.webp" },
    "move_s1": { "name": "Rock Smash", "image": "moves/tinkaton_s1.webp" },
    "move_s2": { "name": "Fairy Wind", "image": "moves/tinkaton_s2.webp" },
    "move_u1": { "name": "Kiss Bliss Kaboom", "image": "moves/tinkaton_u1.webp" },
"move_s11": { "name": "Gigaton Hammer", "image": "moves/tinkaton_s11.webp" },
    "move_s12": { "name": "Smack Down", "image": "moves/tinkaton_s12.webp" },
    "move_s21": { "name": "Ice Hammer", "image": "moves/tinkaton_s21.webp" },
    "move_s22": { "name": "Thief", "image": "moves/tinkaton_s22.webp" },
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
    "main": "pokemons/roster-miraidon.webp",
    "big": "pokemons/roster-miraidon-2x.webp",
    "complete": "pokemons/stat-miraidon.webp",
    "evolution_1": "pokemons/evolution-miraidon-2x.webp",
        "move_p1": { "name": "Hadron Engine", "image": "moves/miraidon_p1.webp" },
    "move_s1": { "name": "Thunder Shock", "image": "moves/miraidon_s1.webp" },
    "move_s2": { "name": "Thunder Wave", "image": "moves/miraidon_s2.webp" },
    "move_u1": { "name": "Bright Future Meteor Storm", "image": "moves/miraidon_u1.webp" },
"move_s11": { "name": "Charge Beam", "image": "moves/miraidon_s11.webp" },
    "move_s12": { "name": "Electro Drift", "image": "moves/miraidon_s12.webp" },
    "move_s21": { "name": "Thunder", "image": "moves/miraidon_s21.webp" },
    "move_s22": { "name": "Parabolic Charge", "image": "moves/miraidon_s22.webp" },
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
