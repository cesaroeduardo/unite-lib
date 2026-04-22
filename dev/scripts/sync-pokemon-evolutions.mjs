import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..", "..");
const POKEMONS_DIR = path.join(ROOT_DIR, "pokemons");
const POKEMONS_TS_PATH = path.join(ROOT_DIR, "src", "pokemons.ts");
const OUTPUT_JSON_PATH = path.join(
  ROOT_DIR,
  "dev",
  "generated",
  "pokemon-evolutions.json"
);
const UNITE_BASE_URL = "https://unite.pokemon.com";
const ROSTER_URL = `${UNITE_BASE_URL}/en-us/pokemon/`;
const forceDownload = process.argv.includes("--force");

function normalizeUrl(url) {
  return url.startsWith("http") ? url : `${UNITE_BASE_URL}${url}`;
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url} (${response.status})`);
  }
  return response.text();
}

async function fetchBuffer(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url} (${response.status})`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

function findMatchingBrace(text, openBraceIndex) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = openBraceIndex; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }

    if (char === "\"") {
      inString = true;
      continue;
    }

    if (char === "{") {
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  return -1;
}

function getExistingPokemonSlugs(pokemonsFileContent) {
  const slugs = new Set();
  const regex = /"main":\s*"pokemons\/roster-([^"]+)\.png"/g;

  for (const match of pokemonsFileContent.matchAll(regex)) {
    slugs.add(match[1]);
  }

  return slugs;
}

function extractRosterSlugs(rosterPageHtml) {
  const slugs = new Set();
  const regex = /href="[^"]*\/pokemon\/([a-z0-9-]+)\//gi;

  for (const match of rosterPageHtml.matchAll(regex)) {
    slugs.add(match[1]);
  }

  return Array.from(slugs).sort();
}

function extractEvolutionImages(pokemonPageHtml) {
  const evolutionRegex =
    /(?:https:\/\/unite\.pokemon\.com)?\/images\/pokemon\/[^"'\s]+\/stat\/evolution-(\d)-([a-z0-9-]+)\.png/g;
  const evolutionsBySlot = new Map();

  for (const match of pokemonPageHtml.matchAll(evolutionRegex)) {
    const slot = Number(match[1]);
    const slug = match[2];
    const url = normalizeUrl(match[0]);
    evolutionsBySlot.set(slot, { slot, slug, url });
  }

  return Array.from(evolutionsBySlot.values()).sort((a, b) => a.slot - b.slot);
}

async function saveEvolutionImages(pageSlug, evolutions) {
  const saved = [];

  for (const evolution of evolutions) {
    const filename = `evolution-${evolution.slug}.png`;
    const relativePath = path.posix.join("pokemons", filename);
    const absolutePath = path.join(POKEMONS_DIR, filename);

    let skipped = false;
    try {
      await fs.access(absolutePath);
      if (!forceDownload) skipped = true;
    } catch {
      skipped = false;
    }

    if (!skipped) {
      const imageBuffer = await fetchBuffer(evolution.url);
      await fs.writeFile(absolutePath, imageBuffer);
    }

    saved.push({
      ...evolution,
      pageSlug,
      localPath: relativePath,
      downloaded: !skipped,
    });
  }

  return saved;
}

function updatePokemonImagesBlock(fileContent, pokemonSlug, evolutions) {
  const marker = `"main": "pokemons/roster-${pokemonSlug}.png"`;
  const markerIndex = fileContent.indexOf(marker);
  if (markerIndex === -1) {
    return { changed: false, content: fileContent };
  }

  const imagesLabelIndex = fileContent.lastIndexOf("\"images\": {", markerIndex);
  if (imagesLabelIndex === -1) {
    return { changed: false, content: fileContent };
  }

  const imagesOpenBraceIndex = fileContent.indexOf("{", imagesLabelIndex);
  const imagesCloseBraceIndex = findMatchingBrace(fileContent, imagesOpenBraceIndex);
  if (imagesCloseBraceIndex === -1) {
    return { changed: false, content: fileContent };
  }

  const imagesBlock = fileContent.slice(imagesOpenBraceIndex, imagesCloseBraceIndex + 1);
  const cleanBlock = imagesBlock.replace(/\n\s+"evolution_\d+":\s+"[^"]+",?/g, "");
  const evolutionLines = evolutions
    .map(
      (item) =>
        `\n    "evolution_${item.slot}": "${item.localPath.replace(/\\/g, "/")}",`
    )
    .join("");

  let nextBlock = cleanBlock;
  if (evolutionLines.length > 0) {
    if (/(\n\s+"complete":\s+"[^"]+",)/.test(nextBlock)) {
      nextBlock = nextBlock.replace(
        /(\n\s+"complete":\s+"[^"]+",)/,
        `$1${evolutionLines}`
      );
    } else {
      nextBlock = nextBlock.replace(/\n\}$/, `${evolutionLines}\n  }`);
    }
  }

  if (nextBlock === imagesBlock) {
    return { changed: false, content: fileContent };
  }

  const nextContent =
    fileContent.slice(0, imagesOpenBraceIndex) +
    nextBlock +
    fileContent.slice(imagesCloseBraceIndex + 1);

  return { changed: true, content: nextContent };
}

async function main() {
  await fs.mkdir(path.dirname(OUTPUT_JSON_PATH), { recursive: true });
  await fs.mkdir(POKEMONS_DIR, { recursive: true });

  const pokemonsFileOriginal = await fs.readFile(POKEMONS_TS_PATH, "utf8");
  const existingSlugs = getExistingPokemonSlugs(pokemonsFileOriginal);
  const rosterHtml = await fetchText(ROSTER_URL);
  const rosterSlugs = extractRosterSlugs(rosterHtml);

  if (rosterSlugs.length === 0) {
    throw new Error("No pokemon pages found on roster page.");
  }

  const report = [];
  let pokemonsFileUpdated = pokemonsFileOriginal;

  for (const pageSlug of rosterSlugs) {
    const pageUrl = `${UNITE_BASE_URL}/en-us/pokemon/${pageSlug}/`;
    try {
      const pageHtml = await fetchText(pageUrl);
      const evolutions = extractEvolutionImages(pageHtml);
      if (evolutions.length === 0) continue;

      const savedEvolutions = await saveEvolutionImages(pageSlug, evolutions);
      const matchInLocalDb = existingSlugs.has(pageSlug);

      if (matchInLocalDb) {
        const result = updatePokemonImagesBlock(
          pokemonsFileUpdated,
          pageSlug,
          savedEvolutions
        );
        if (result.changed) {
          pokemonsFileUpdated = result.content;
        }
      }

      report.push({
        pageSlug,
        pageUrl,
        matchedInPokemonsTs: matchInLocalDb,
        evolutions: savedEvolutions.map((item) => ({
          slot: item.slot,
          slug: item.slug,
          sourceUrl: item.url,
          localPath: item.localPath,
          downloaded: item.downloaded,
        })),
      });
    } catch (error) {
      report.push({
        pageSlug,
        pageUrl,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  if (pokemonsFileUpdated !== pokemonsFileOriginal) {
    await fs.writeFile(POKEMONS_TS_PATH, pokemonsFileUpdated, "utf8");
  }

  const output = {
    generatedAt: new Date().toISOString(),
    source: ROSTER_URL,
    totalPages: rosterSlugs.length,
    matchedPagesInPokemonsTs: report.filter((item) => item.matchedInPokemonsTs).length,
    pagesWithErrors: report.filter((item) => item.error).length,
    entries: report,
  };

  await fs.writeFile(OUTPUT_JSON_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");

  const evolutionCount = report.reduce((acc, entry) => {
    if (!entry.evolutions) return acc;
    return acc + entry.evolutions.length;
  }, 0);
  const downloadedCount = report.reduce((acc, entry) => {
    if (!entry.evolutions) return acc;
    return (
      acc +
      entry.evolutions.reduce((innerAcc, evo) => innerAcc + (evo.downloaded ? 1 : 0), 0)
    );
  }, 0);

  console.log(`Roster pages: ${rosterSlugs.length}`);
  console.log(`Evolution images discovered: ${evolutionCount}`);
  console.log(`New/updated downloads: ${downloadedCount}`);
  console.log(`Updated: src/pokemons.ts`);
  console.log(`Report: ${path.relative(ROOT_DIR, OUTPUT_JSON_PATH)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
