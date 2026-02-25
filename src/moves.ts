import type { Move, MoveSlotId } from "./types";
import pokemons from "./pokemons";

const SLOT_IDS: MoveSlotId[] = ["s11", "s12", "s13", "s21", "s22", "s23", "s24"];

/**
 * Build structured move list from pokemon roster (one source of truth).
 * Each move is correlated to a Pokémon via pokemonId (slug from image path) and has image path.
 */
function buildMoves(): Move[] {
  const moves: Move[] = [];
  for (const pokemon of pokemons) {
    for (const slotId of SLOT_IDS) {
      const key = `move_${slotId}` as keyof typeof pokemon.images;
      const image = pokemon.images[key];
      if (!image || typeof image !== "string") continue;
      // Extract pokemonId from path: "moves/venusaur_s11.png" -> "venusaur"
      const match = image.match(/^moves\/(.+)_s\d+\.png$/);
      const pokemonId = match ? match[1] : pokemon.name.toLowerCase().replace(/\s+/g, "-").replace(/[.'']/g, "");
      moves.push({
        pokemonId,
        slotId,
        name: `${pokemon.name} (${slotId})`,
        image,
      });
    }
  }
  return moves;
}

const moves: Move[] = buildMoves();

export default moves;
