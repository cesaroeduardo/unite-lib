import type { Move, MoveSlotId } from "./types";
import { POKEMON_MOVE_SLOT_IDS } from "./types";
import pokemons from "./pokemons";
import { getPokemonSlug, resolveMoveSlot } from "./utils";

/**
 * Build structured move list from pokemon roster (one source of truth).
 * Each move is correlated to a Pokémon via pokemonId (slug from image path) and has image path.
 */
function buildMoves(): Move[] {
  const moves: Move[] = [];
  for (const pokemon of pokemons) {
    for (const slotId of POKEMON_MOVE_SLOT_IDS) {
      const resolved = resolveMoveSlot(pokemon, slotId);
      if (!resolved) continue;
      const match = resolved.image.match(/^moves\/(.+)_(s\d+|p1|u1)\.png$/);
      const pokemonId = match
        ? match[1]
        : getPokemonSlug(pokemon);
      moves.push({
        pokemonId,
        slotId,
        name: resolved.name,
        image: resolved.image,
      });
    }
  }
  return moves;
}

const moves: Move[] = buildMoves();

export default moves;
