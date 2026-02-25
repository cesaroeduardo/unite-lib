# Contributing to unite-lib

Thank you for considering contributing. This document describes how to propose changes and the workflow we use.

## Code of conduct

Be respectful and inclusive. We aim to keep this project welcoming for everyone.

## How to contribute

- **Bug reports and ideas:** open an [Issue](../../issues).
- **Code or content (e.g. translations):** open a [Pull Request](../../pulls) following the workflow below.

## Development setup

1. Fork the repository and clone your fork.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build and watch:
   ```bash
   npm run build
   npm run dev   # optional: watch mode
   ```

## Workflow (open source)

### 1. Create an issue (recommended)

- For bugs or features, open an issue first so we can align.
- For small fixes (typos, one-off translations), you can open a PR directly.

### 2. Branch from `main`

- Create a branch from the default branch (`main`):
  ```bash
  git checkout main
  git pull origin main
  git checkout -b fix/description-of-change
  ```
- Use a short prefix when useful, e.g. `fix/`, `feat/`, `i18n/`, `docs/`.

### 3. Make your changes

- Edit only what’s needed for the issue or fix.
- Keep formatting consistent (e.g. run the same formatter/linter the project uses, if any).
- For **new or updated translations** (e.g. in `src/i18n/`), use the same slug keys as in `en.ts` so `getPokemonName(id, locale)` keeps working. Prefer official localized Pokémon names when available.

### 4. Commit

- Use clear, short commit messages:
  ```bash
  git add .
  git commit -m "fix: correct Umbreon tags in roster"
  ```
- Optionally follow [Conventional Commits](https://www.conventionalcommits.org/) (e.g. `fix:`, `feat:`, `docs:`, `i18n:`).

### 5. Push and open a Pull Request

- Push your branch to your fork:
  ```bash
  git push origin fix/description-of-change
  ```
- Open a Pull Request against the **main** branch of this repository.
- In the PR description:
  - Reference any related issue (e.g. “Fixes #123”).
  - Briefly describe what changed and why.

### 6. Review and merge

- Maintainers will review the PR. We may ask for small edits.
- Once approved, a maintainer will merge. We use a linear history (squash or rebase) when merging.

## What we accept

- **Bugs:** Fixes that match the current behavior and types.
- **Data:** Corrections or additions to `pokemons`, `moves`, or `maps` (and related types).
- **i18n:** New locales or fixes to existing ones in `src/i18n/`, using the same slug keys as English.
- **Docs:** Improvements to README or CONTRIBUTING.
- **Tooling:** Build/config changes that keep the library usable from npm and CDN.

## What we avoid

- Breaking the public API (exports, function signatures) without prior discussion in an issue.
- Adding large dependencies without justification.
- Game assets or content that violate Nintendo/The Pokémon Company’s guidelines.

## Questions

If something is unclear, open an issue with the “question” label or describe it in your PR.

Thank you for contributing.
