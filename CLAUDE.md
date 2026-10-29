# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **bun** (use `bun install`, `bun run <script>`). No test suite is configured.

- `bun run dev` — dev server
- `bun run build` — production build
- `bun run lint` — `next lint --fix` (note: it auto-fixes)
- `bun start` — runs `next start`, which Next warns does NOT work with `output: 'standalone'`; the standalone server is `node .next/standalone/server.js` (needs `public/` and `.next/static` copied into `.next/standalone/`).

Deployment: `ecosystem.config.js` (PM2, runs `bun start` on port 3001) behind nginx (`NGINX_CONFIG.md`, Laravel Forge-managed).

## Architecture

Bilingual (en/es) single-page résumé built with Next.js App Router (JS/JSX, `@/` alias → `src/`), react-bootstrap and SCSS.

- **All content lives in `src/data/work.json`**, keyed by language (`en`, `es`). Each language object holds the profile, `jobs`, `oldjobs`, `technologies`, `education`, and a `translation` map used for UI strings. Adding content means editing both languages.
- **Routing**: `/` renders English (`src/app/page.jsx`); `/[lang]` renders `en`/`es`; `/download/[lang]` serves the PDF download page; `/availability` is a standalone page (own root layout, `availability.layout.css`) meant to be embedded in an iframe for calendar booking. `[lang]` sets `dynamicParams = false`, so unknown languages 404.
- **SEO/metadata**: `src/utils/generic.js` exports `generateStaticParams` and `generateMetadata` (title, canonical/hreflang, OpenGraph, favicons), reused by the `[lang]` pages. Falls back to `en` for unknown languages.
- **State**: `src/contexts/WorkContext.jsx` (`WorkProvider` / `useWorkContext`) is a client context exposing `language` and the active `work` object; components read from it rather than importing the JSON directly.
- **i18n helpers**: `<Translate text="..."/>` and `t()` in `src/helpers/string.js` look up `work.json[lang].translation`, falling back to the original string. `convertMDTags` turns the JSON's `[b]text[/b]`-style tags into HTML; `stripMDTags` removes them (used for meta descriptions).
- Components are folders with an `index.jsx` re-export (`Home`, `WorkExperience`, `Download`, `Translate`, etc.).
- PDFs and images are static assets under `public/`.
