# tamino.dev

A personal portfolio website styled as a code editor / terminal. Your CV renders
as syntax-highlighted source that visitors can read in **Ruby, TypeScript, or
JavaScript** (toggle with `R` / `T` / `J`) across **three color themes** (cycle
with the spacebar).

Built with React 19 + TypeScript + Vite and deployed to GitHub Pages as static
HTML/CSS/JS.

## Quick start

```bash
npm install
npm run dev      # dev server on http://localhost:3000
```

| Command             | What it does                          |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Dev server on port 3000               |
| `npm run build`     | Production build to `dist/`           |
| `npm run preview`   | Preview the production build locally  |
| `npm run typecheck` | TypeScript check (`tsc --noEmit`)     |
| `npm run lint`      | Biome lint/format check               |
| `npm run lint:fix`  | Biome auto-fix                        |

---

## Make it your own

Fork the repo, then work through the checklist below. **Almost all of your
content lives in one file — `src/data.ts`.** A handful of items live in the
static browser shell (page title, icons, PWA manifest) because they have to
exist before the JavaScript loads.

### 1. Your content — `src/data.ts`

This single file holds everything that renders on the page. Edit the values and
the site updates. The exports, top to bottom:

**Identity (the header block)**

```ts
export const myName = "Tamino Martinius";
export const profession = "I speak Code";
export const street = "Lehdenstr. 21";   // ┐
export const postalCode = "06847";        // ├ shown in the legal/imprint footer
export const city = "Dessau";             // ┘
export const legalEmail = "lawyer@zaku.eu"; // legal contact in the footer
export const emails = ["io@tamino.dev", ...]; // one is picked at random on load
export const socialNetworks = { codepen: "...", twitter: "...", ... };
export const links = { github: "...", metrics: "..." };
```

> Tip: `socialNetworks` and `links` are plain `{ label: url }` maps — add, remove,
> or rename keys freely; each one renders as a labelled line.

**Skills** — first define each skill as a `Skill` (`{ level, name }`, where
`level` is `0`–`1` and drives the skill bar), then arrange them into the `skills`
tree (groups → subgroups → skills). Reuse the same skill consts in your CV and
project entries.

**Curriculum Vitae** — `curriculumVitae` is an ordered array of `Job` and
`Education` entries (see the shapes in `src/data_types.ts`). Each references skill
consts so the matching skills light up.

**Showcases** — `projects`, `talks`, `packages`, `experiments`, and `misc` are
all arrays of `ShowCase` (`name`, `description`, `startsAt`/`endsAt`, `urls`,
`skills`). Add or delete entries as you like.

> Delete whole sections you don't need by emptying the array (e.g.
> `export const talks = [];`) — empty sections simply don't render.

### 2. Browser shell & metadata

These can't read from `data.ts`, so edit them by hand:

- **`index.html`**
  - `<title>` (line ~5) and the `apple-mobile-web-app-title` /
    `application-name` meta tags — currently `~/tamino.dev/main.ts`.
  - `<meta name="description">` and `<meta name="keywords">` (SEO).
  - The loader prompt path `~/tamino.dev` and branch ` main` (line ~232) — the
    fake terminal line shown during the boot animation.
  - `theme-color` / status-bar color if you change the palette.
- **`public/manifest.json`** — set `name` and `short_name` (PWA install name).
  Heads up: these ship with a literal `#{title}` placeholder — replace it with
  your real name.
- **`public/browserconfig.xml`** — Windows tile color.
- **`package.json`** — the `name` field.
- **`LICENSE`** — update the copyright holder (MIT license — keep it, relicense,
  or remove as you prefer).

### 3. Icons & images — `public/`

- Replace the logos: `logo@16x16.png`, `logo@32x32.png`, `logo@150x150.png`,
  `logo@180x180.png`, `logo@192x192.png`, `logo@512x512.png`, and `favicon.ico`.
  They're referenced from `index.html`, `manifest.json`, and `browserconfig.xml`.
- `public/dribbble/` holds demo GIFs that aren't referenced anywhere — safe to
  delete.

### 4. Terminal branding (the `~/tamino.dev` prompt)

The fake shell prompt and a hidden console easter egg use the site name in two
React files. Search-and-replace `~/tamino.dev` and the GitHub URL in:

- `src/components/CommandLine.tsx` — the visible `~/tamino.dev … main … cat`
  prompt above your profile.
- `src/AppContext.tsx` — a `console.log` greeting (the "view source" easter egg)
  with your repo link.

---

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. A separate `ci.yml` runs typecheck → lint → build on
every push and PR.

To turn it on in your fork:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main`. The Actions tab shows the deploy; the URL appears in the
   workflow summary.

**⚠️ Base path gotcha.** Assets are referenced from the site root (`/logo@32x32.png`,
etc.), which works when the site is served from a domain root:

- A user/org page (`yourname.github.io`) or a custom domain → works as-is.
- A **project page** (`yourname.github.io/your-repo/`) → those absolute paths
  404. Fix it by setting the base in `vite.config.ts`:

  ```ts
  export default defineConfig({
    base: "/your-repo/",
    // ...
  });
  ```

**Custom domain.** To serve from your own domain, add a `CNAME` file to `public/`
(so it's copied into the build) containing your domain, e.g. `example.com`, and
set the custom domain under Settings → Pages.

---

## How it works

- Components render the data as syntax-highlighted "source code"
  (`StringValue`, `NumberValue`, `Variable`, …) rather than normal markup.
- Three display languages (Ruby / TypeScript / JavaScript) are toggled with
  `R` / `T` / `J`; one is chosen at random on each load.
- Three color themes cycle with the spacebar.
- Hash-based navigation with scroll tracking — no router library. Individual
  entries are deep-linkable via their `data-entry` attribute (e.g. `#legal`).

## Project layout

```
src/
  data.ts          # ← all portfolio content (edit this)
  data_types.ts    # TypeScript interfaces & enums for the data
  AppContext.tsx   # global state (language, theme)
  App.tsx          # page composition
  components/       # one component per file, rendered as code
  style.css         # pure CSS, custom properties for the 3 themes
index.html          # browser shell, boot animation, meta tags
public/             # icons, manifest, static assets
```

## Code style

Biome handles linting and formatting (no ESLint/Prettier): 2-space indent,
100-char line width. Run `npm run typecheck` and `npm run lint:fix` before
committing. CI must pass typecheck → lint → build. There is no test suite.

## License

MIT — see [LICENSE](./LICENSE).
