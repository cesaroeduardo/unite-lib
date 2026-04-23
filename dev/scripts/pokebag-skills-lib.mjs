/**
 * Shared Pokebag skill JSON → slot names + CDN download list (used by sync + migrate scripts).
 */
import fs from "node:fs/promises";
import path from "node:path";

export const CDN_FOLDER_OVERRIDES = {
  "alolan-ninetales": "Ninetales",
  "alolan-raichu": "Raichu",
  "galarian-rapidash": "Rapidash",
  mewtwox: "Mega Mewtwo X",
  mewtwoy: "Mega Mewtwo Y",
  "mega-charizard-x": "Mega Charizard X",
  "mega-charizard-y": "Mega Charizard Y",
  "mega-gyarados": "Mega Gyarados",
  "mega-lucario": "Mega Lucario",
};

const CLOUD = "https://d275t8dp8rxb42.cloudfront.net/skills";

export function patchKeyFromPath(rel) {
  const first = rel.split("/")[0];
  return first === "base" ? "0.0.0.0" : first;
}

export function comparePatch(a, b) {
  const pa = a.split(".").map((x) => parseInt(x, 10) || 0);
  const pb = b.split(".").map((x) => parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d !== 0) return d;
  }
  return 0;
}

export function cdnSkillFileName(displayName) {
  return displayName.replace(/\s*\+\s*$/, "").trim();
}

export function cdnUrl(folder, displayName) {
  const encFolder = encodeURIComponent(folder);
  const encFile = encodeURIComponent(cdnSkillFileName(displayName)) + ".png";
  return `${CLOUD}/${encFolder}/${encFile}`;
}

export async function loadMergedSkillsFromDisk(repoRoot) {
  const pkgRoot = path.join(
    repoRoot,
    "node_modules/@pokebag/pokemon-unite-data/data"
  );
  const byId = new Map();
  async function walk(dir) {
    let entries;
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      throw new Error(
        "Missing @pokebag/pokemon-unite-data. Run: npm install (devDependency)."
      );
    }
    for (const ent of entries) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) await walk(full);
      else if (ent.isFile() && ent.name.endsWith(".json")) {
        const rel = path.relative(pkgRoot, full).replace(/\\/g, "/");
        const m = rel.match(/^([^/]+)\/skills\/([^/]+)\.json$/);
        if (!m) continue;
        const id = m[2];
        const pk = patchKeyFromPath(rel);
        const prev = byId.get(id);
        if (!prev || comparePatch(pk, prev.patchKey) > 0) {
          byId.set(id, { full, patchKey: pk });
        }
      }
    }
  }
  await walk(pkgRoot);
  const skills = new Map();
  for (const { full } of byId.values()) {
    const raw = await fs.readFile(full, "utf8");
    const data = JSON.parse(raw);
    skills.set(data.id, data);
  }
  return skills;
}

export function groupByPokemonId(skills) {
  const byPid = new Map();
  for (const s of skills.values()) {
    const pid = s.pokemonID;
    if (!pid) continue;
    if (!byPid.has(pid)) byPid.set(pid, []);
    byPid.get(pid).push(s);
  }
  return byPid;
}

/**
 * @param {string|null} movesDir when null, skips download path list (names only).
 */
export function layoutSlotsFixed(list, rosterName, slug, movesDir) {
  const skip = (s) =>
    s.slot === 1 ||
    (s.displayName && s.displayName.toLowerCase() === "attack");
  const L = list.filter((s) => !skip(s));

  const passive = L.find((s) => s.slot === 0);
  const unite = L.find((s) => s.slot === 4);
  const m1root = L.find((s) => s.slot === 2 && !s.parentID);
  const m2root = L.find((s) => s.slot === 3 && !s.parentID);

  const pickUpgradeNames = (root) => {
    if (!root || !root.upgradeIDs?.length) return [];
    return root.upgradeIDs.map((id) => {
      const u = L.find((x) => x.id === id);
      return u ? u.displayName : id;
    });
  };

  const u1n = unite?.displayName;
  const p1n = passive?.displayName;
  const s1n = m1root?.displayName;
  const s2n = m2root?.displayName;
  const u1m = pickUpgradeNames(m1root);
  const u2m = pickUpgradeNames(m2root);

  const skillNames = {};
  if (p1n) skillNames.p1 = p1n;
  if (s1n) skillNames.s1 = s1n;
  if (s2n) skillNames.s2 = s2n;
  if (u1n) skillNames.u1 = u1n;
  u1m.forEach((n, i) => {
    if (n) skillNames[`s1${i + 1}`] = n;
  });
  u2m.forEach((n, i) => {
    if (n) skillNames[`s2${i + 1}`] = n;
  });

  const folder = CDN_FOLDER_OVERRIDES[slug] ?? rosterName;
  const downloads = [];
  if (movesDir) {
    const add = (slotKey, displayName) => {
      if (!displayName) return;
      downloads.push({
        slotKey,
        url: cdnUrl(folder, displayName),
        out: path.join(movesDir, `${slug}_${slotKey}.png`),
      });
    };
    add("p1", p1n);
    add("s1", s1n);
    add("s2", s2n);
    add("u1", u1n);
    u1m.forEach((n, i) => add(`s1${i + 1}`, n));
    u2m.forEach((n, i) => add(`s2${i + 1}`, n));
  }

  return { skillNames, downloads };
}

export async function parseRosterFromPokemonsTs(pokemonsPath) {
  const raw = await fs.readFile(pokemonsPath, "utf8");
  const out = [];
  const re =
    /"name":\s*"([^"]+)",\s*\n\s*"dex":\s*([^,]+),\s*\n\s*"images":\s*\{[\s\S]*?\n\s*"main":\s*"pokemons\/roster-([^"]+)\.png"/g;
  let m;
  while ((m = re.exec(raw)) !== null) {
    out.push({ name: m[1], slug: m[3] });
  }
  return out;
}
