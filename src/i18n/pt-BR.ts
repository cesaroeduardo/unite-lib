import en from "./en";

/**
 * Portuguese (Brazil). Same as English for Pokémon names; override here only when pt-BR differs.
 */
const ptBR: Record<string, string> = {
  ...en,
  // Maps — names and descriptions
  "map-groudon": "Ruínas Celestes de Theia",
  "map-groudon.description": "Mapa 5v5 com Groudon.",
  "map-kyogre": "Ruínas Celestes de Theia",
  "map-kyogre.description": "Mapa 5v5 com Kyogre.",
  "map-rayquaza": "Ruínas Celestes de Theia",
  "map-rayquaza.description": "Mapa 5v5 com Rayquaza.",
};

export default ptBR;
