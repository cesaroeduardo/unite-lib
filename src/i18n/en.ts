import pokemons from "../pokemons";

/** Slug from roster image path: "pokemons/roster-venusaur.png" -> "venusaur" */
function slugFromMain(mainPath: string): string {
  return mainPath.replace(/^pokemons\/roster-/, "").replace(/\.png$/, "");
}

const names: Record<string, string> = {};
for (const p of pokemons) {
  names[slugFromMain(p.images.main)] = p.name;
}

export default names;
