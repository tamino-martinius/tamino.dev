# tamino.dev Portfolio

Personal portfolio website styled as a code editor/terminal. React 19 + TypeScript + Vite.
Deployed to GitHub Pages as static HTML/CSS/JS.

## Commands

- `npm run dev` - Dev server on port 3000
- `npm run build` - Production build
- `npm run typecheck` - TypeScript check (`tsc --noEmit`)
- `npm run lint` - Biome check
- `npm run lint:fix` - Biome auto-fix (`biome check --write`)

CI runs: typecheck → lint → build (all must pass).

## Code Style

- Biome handles linting + formatting (no ESLint/Prettier)
- 2-space indent, 100 char line width
- Run `npm run typecheck` and `npm run lint:fix` before committing
- No test suite exists

## Architecture

- `src/data.ts` - All portfolio content (jobs, education, projects, skills)
- `src/data_types.ts` - TypeScript interfaces and enums
- `src/AppContext.tsx` - Global state via React Context (language, theme)
- `src/components/` - Flat directory, one component per file
- `src/style.css` - Pure CSS with custom properties for 3 themes

## Key Patterns

- Components render as syntax-highlighted code (StringValue, NumberValue, etc.)
- Three display languages (Ruby/TypeScript/JavaScript) toggled via R/T/J keys
- Three color themes cycled via spacebar
- Hash-based navigation with scroll tracking (no router library)
- Deep linking to individual items via `data-entry` attributes
