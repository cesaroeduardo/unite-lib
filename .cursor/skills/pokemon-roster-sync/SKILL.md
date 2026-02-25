---
name: pokemon-roster-sync
description: Varre as pastas pokemons/ e moves/ na raiz do projeto para encontrar imagens de pokémons ainda não listados em src/pokemons.ts, identifica os faltantes, obtém número de dex em pokemon.com/br/pokedex e battle type/tags em unite-db.com, e lista ou insere os novos no array em ordem de dex. Use quando o usuário adicionar imagens de novo Pokémon em pokemons/ ou moves/ ou pedir para sincronizar/atualizar a lista de pokémons.
---

# Pokemon Roster Sync

Sincroniza imagens em `pokemons/` e `moves/` (raiz do projeto) com o array em [src/pokemons.ts](../../src/pokemons.ts): descobre pokémons faltantes, busca dex e metadados em fontes externas e insere na ordem da dex.

## Convenção de paths (unite-lib)

**Onde as imagens ficam** (raiz do repositório):
- `pokemons/` — roster e stat (ex.: `roster-venusaur.png`, `roster-venusaur-2x.png`, `stat-venusaur.png`)
- `moves/` — ícones de moves (ex.: `venusaur_s11.png`, `venusaur_s12.png`, …)

**Paths no código** (sem barra inicial; relativos à raiz do pacote):
- `main`: `pokemons/roster-{slug}.png`
- `big`: `pokemons/roster-{slug}-2x.png`
- `complete`: `pokemons/stat-{slug}.png`
- Moves: `moves/{slug}_s11.png`, `moves/{slug}_s12.png`, `moves/{slug}_s21.png`, `moves/{slug}_s22.png`

Slug = nome do arquivo sem prefixo nem extensão, em minúsculas e com hífens (ex.: `roster-sirfetchd.png` → slug `sirfetchd`; `sirfetchd_s11.png` → slug `sirfetchd`). O pacote publica as pastas `pokemons` e `moves` no npm (`files` no package.json).

## Fluxo

### 1. Varredura

- Listar arquivos em `pokemons/` e `moves/` (raiz do projeto).
- Extrair slugs:
  - `roster-*.png` ou `stat-*.png` em `pokemons/` → slug = trecho entre prefixo e `.png` (ex.: `roster-sirfetchd.png` → `sirfetchd`).
  - `*_s11.png`, `*_s12.png`, etc. em `moves/` → slug = trecho antes de `_s` (ex.: `sirfetchd_s11.png` → `sirfetchd`).
- Agrupar por slug: para cada slug, anotar se tem roster/stat e quais moves (s11, s12, s21, s22) existem.

### 2. Comparação

- Ler [src/pokemons.ts](../../src/pokemons.ts).
- Coletar slugs já presentes: de `images.main` extrair o slug (ex.: `pokemons/roster-venusaur.png` → `venusaur`). Também considerar `images.move_s11` etc. (ex.: `moves/venusaur_s11.png` → `venusaur`).
- **Faltantes** = slugs que aparecem nas pastas mas não em nenhum `images` do array.

### 3. Busca externa (por cada pokémon faltante)

- **Dex**: Consultar https://www.pokemon.com/br/pokedex (web search ou fetch). Buscar pelo nome inferido do slug (ex.: sirfetchd → "Sirfetch'd") e obter número da Pokédex nacional. Variantes (Mega, Alolan, Galarian, etc.) usam decimais: base dex + 0.1, 0.2, etc. (ex.: Charizard 6 → Mega X 6.1, Mega Y 6.2).
- **Battle type e tags**: Consultar https://unite-db.com (web search ou página do Pokémon). Mapear:
  - Role "Attacker" → `BattleType.ATTACKER`, incluir `Tag.ATTACKER`; "Defender" → `BattleType.DEFENDER`, `Tag.DEFENDER`; "Speedster" → `BattleType.SPEEDSTER`, `Tag.SPEEDSTER`; "All-Rounder" → `BattleType.ALLROUNDER`, `Tag.ALLROUNDER`; "Supporter" → `BattleType.SUPPORTER`, `Tag.SUPPORTER`.
  - "Melee" → incluir `Tag.MELEE`; "Ranged" → incluir `Tag.RANGED`.
- **Nome**: Preferir o nome retornado pela dex ou unite-db (ex.: "Sirfetch'd") em vez de apenas capitalizar o slug.
- **Stats e difficulty**: Se unite-db tiver offense/endurance/mobility/scoring/support e difficulty, usar; senão usar stats 2.5 e difficulty 1 e indicar "revisar stats/difficulty".

### 4. Saída

- **Listar**: Para cada faltante, mostrar nome, dex, battleType, tags, paths das imagens e o objeto completo no formato do projeto (ver [references/format.md](references/format.md)).
- **Inserir**: Adicionar cada novo Pokémon ao array em `src/pokemons.ts` na **ordem da dex** (crescente). Manter o array ordenado por `dex` após inserções (decimais já usados para variantes). Inserir no índice correto (encontrar primeiro item com `dex` maior e inserir antes) ou reordenar o array e reescrever o arquivo. Preservar os imports e a linha `export default pokemons;`.

## Template do objeto

Imports em [src/pokemons.ts](../../src/pokemons.ts):
- `import { BattleType, Tag } from "./constants";`
- `import type { Pokemon } from "./types";`

Estrutura mínima de cada entrada (ver exemplos em [references/format.md](references/format.md)):

- `name`: string (nome oficial, ex.: "Sirfetch'd").
- `dex`: number (inteiro ou decimal para variantes).
- `images`: main, big, complete (se existir stat), move_s11/s12/s21/s22 conforme arquivos presentes (paths como `pokemons/...` e `moves/...`).
- `active`: true.
- `battleType`: BattleType (de `./constants`).
- `tags`: [Tag, ...] (pelo menos o role e Melee ou Ranged).
- `stats`: offense, endurance, mobility, scoring, support (0.5–5).
- `difficulty`: 1, 2 ou 3.

## Tratamento de variantes e nomes

- Nomes com apóstrofo: "Sirfetch'd", "Farfetch'd".
- Nomes com sufixo: "Mime Jr.", "Mr. Mime".
- Variantes regionais: "Alolan Ninetales", "Galarian Rapidash" → slug `alolan-ninetales`, `galarian-rapidash`.
- Mega: "Mega Charizard X" → dex 6.1; slug roster `mega-charizard-x`; moves podem compartilhar `mega-charizard` no nome do arquivo.

Se a página da dex ou do unite-db não retornar o número ou o role, usar web search com o nome do Pokémon + "pokedex number" ou "Pokémon Unite role" e preencher; se ainda faltar, deixar dex ou battleType placeholder e avisar para revisão.

## Referência

- Template exato e exemplos de slug → name: [references/format.md](references/format.md).
