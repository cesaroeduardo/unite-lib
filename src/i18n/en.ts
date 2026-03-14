import pokemons from "../pokemons";
import maps from "../maps";

/** Slug from roster image path: "pokemons/roster-venusaur.png" -> "venusaur" */
function slugFromMain(mainPath: string): string {
  return mainPath.replace(/^pokemons\/roster-/, "").replace(/\.png$/, "");
}

const names: Record<string, string> = {};
for (const p of pokemons) {
  names[slugFromMain(p.images.main)] = p.name;
}
for (const m of maps) {
  names[m.id] = m.name;
  if (m.description) names[`${m.id}.description`] = m.description;
}

export default names;
