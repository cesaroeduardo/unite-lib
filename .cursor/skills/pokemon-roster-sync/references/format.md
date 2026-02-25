# Formato do objeto Pokemon e exemplos

Referência para inserção em [src/pokemons.ts](../../../src/pokemons.ts). Tipos e enums em [src/constants.ts](../../../src/constants.ts) (BattleType, Tag) e [src/types.ts](../../../src/types.ts) (Pokemon).

## Template completo (4 moves)

Paths relativos à raiz do pacote, sem barra inicial (igual ao restante do arquivo): `pokemons/roster-{slug}.png`, `moves/{slug}_s11.png`, etc.

```ts
{
  "name": "Nome do Pokémon",
  "dex": 123,
  "images": {
    "main": "pokemons/roster-{slug}.png",
    "big": "pokemons/roster-{slug}-2x.png",
    "complete": "pokemons/stat-{slug}.png",
    "move_s11": "moves/{slug}_s11.png",
    "move_s12": "moves/{slug}_s12.png",
    "move_s21": "moves/{slug}_s21.png",
    "move_s22": "moves/{slug}_s22.png",
  },
  "active": true,
  "battleType": BattleType.ATTACKER,
  "stats": {
    "offense": 2.5,
    "endurance": 2.5,
    "mobility": 2.5,
    "scoring": 2.5,
    "support": 2.5
  },
  "tags": [
    Tag.ATTACKER,
    Tag.RANGED
  ],
  "difficulty": 1
}
```

## Template com 2 moves por tier (ex.: Mega)

Alguns pokémons têm apenas move_s11 e move_s21 (sem s12/s22). Exemplo:

```ts
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
  "stats": { "offense": 4, "endurance": 3.5, "mobility": 2.5, "scoring": 3, "support": 0.5 },
  "tags": [Tag.ALLROUNDER, Tag.MELEE],
  "difficulty": 1
}
```

## Slug → nome (exemplos)

| Slug (arquivo) | name (campo) |
|----------------|--------------|
| venusaur | Venusaur |
| alolan-raichu | Alolan Raichu |
| mega-charizard-x | Mega Charizard X |
| sirfetchd | Sirfetch'd |
| mr-mime | Mr. Mime |
| mime-jr | Mime Jr. |
| galarian-rapidash | Galarian Rapidash |
| ho-oh | Ho-Oh |

Use o nome retornado por pokemon.com/br/pokedex ou unite-db.com quando disponível.

## BattleType e Tags por role (unite-db)

| Role (Unite) | battleType | tags (incluir) |
|--------------|------------|----------------|
| Attacker | BattleType.ATTACKER | Tag.ATTACKER + Tag.RANGED ou Tag.MELEE |
| Defender | BattleType.DEFENDER | Tag.DEFENDER + Tag.RANGED ou Tag.MELEE |
| Speedster | BattleType.SPEEDSTER | Tag.SPEEDSTER + Tag.MELEE ou Tag.RANGED |
| All-Rounder | BattleType.ALLROUNDER | Tag.ALLROUNDER + Tag.MELEE ou Tag.RANGED |
| Supporter | BattleType.SUPPORTER | Tag.SUPPORTER + Tag.RANGED ou Tag.MELEE |

Sempre incluir exatamente um role tag e um de MELEE/RANGED.

## Ordem de inserção

Ordenar o array por `dex` (crescente). Ex.: dex 6, 6.1, 6.2, 9, 25, … Ao inserir um novo, encontrar o índice i onde `pokemons[i].dex > novo.dex` e inserir antes, ou ordenar o array completo após adicionar e reescrever o arquivo.
