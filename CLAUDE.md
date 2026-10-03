# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A design-tool export of a printable résumé page ("Resume v2"), kept on branch `v0.2` of `matiasperrone/resume` (remote `origin`). The real site is a Next.js app (`npm run dev` / `build` / `lint`, Bootstrap + SCSS, `[lang]` routes) that lives on branch `main`; this branch is a standalone static page that shares only `work.json` and the helper in `src/helpers/string.js` with it (see `github.md` for the screen-to-file map). There is no package.json, build, lint, or test setup on this branch. To view it, serve the directory statically (the page `fetch`es JSON, so `file://` won't work), e.g. `python3 -m http.server 8000`, open `http://localhost:8000/`, and use the browser's print dialog to export.

## Architecture

- `index.html` is the only page (originally exported as `Resume v2.dc.html`; `github.md` still uses the old name). It is a DC (Design Component) file, the single-file format Claude Design builds designs in: a `<x-dc>` template (markup with `{{ }}` bindings and `<sc-for>` loops) plus a `<script type="text/x-dc" data-dc-script>` block defining `class Component extends DCLogic` (`renderVals()` supplies template values). `Component` is not a `React.Component`: it is a plain logic class that the runtime in `support.js` instantiates inside its own React class wrapper, forwarding `componentDidMount`/`setState`. It cannot be a function component or use hooks.
  - The header, summary, education and technologies chip list are hardcoded in the template (`techs` array lives in the component).
  - Work experience is rendered imperatively in `componentDidMount`: it fetches `src/data/work.json`, reads the `en` key, and injects HTML for `jobs` and `oldjobs` into `jobsRef`.
- `support.js` is the generated DC runtime (header says "GENERATED from dc-runtime/src/*.ts — do not edit"). `doc-page.js` is a copied starter scaffold providing the `<doc-page size="letter" margin="0.6in">` paged-print shell. Don't hand-edit either; its usage docs are at the top of `doc-page.js`.
- `src/data/work.json` is the content source of truth, keyed by language (`en`, with a `translation` map for others). Text uses a custom tag syntax like `[b]bold[/b]` that is converted to HTML tags with a regex (`convertMDTags` in `src/helpers/string.js`, duplicated inline as `md` in the page). Job `techs` may be a string or an object of label to string; `description` entries may be a string or an array (rendered as a bullet list); `dates.to` empty means "Present".
- `src/helpers/string.js` comes from the `main` branch's Next.js app (imports `@/data/work.json`) and is not used by the page here.
- `github.md` maps this screen to upstream files (`src/components/Home/Home.jsx`, `Home.module.scss`, `WorkExperience.jsx`, `src/app/globals.scss`, `src/data/work.json`). Changes to content or design should stay compatible with those.

## Gotchas

- All styles live in `resume.css` (linked from the page's `<helmet>`; no inline `style=` attributes, including in the JS-generated job HTML). Colors and fonts (Montserrat headings, Open Sans body) are CSS custom properties on `:root` (`--color-*`, `--font-*`); use them instead of raw values when adding sections.
- Print pagination relies on `break-inside` on sections and job `<article>`s; preserve it when adding blocks.
- The title, summary, education and technologies list are duplicated between the page and `work.json` (`title`, `summary`, `education`, `technologies`); update both when changing them.
