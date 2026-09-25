# Susana Sánchez Restrepo · personal website

Source of [suziesr.xyz](https://suziesr.xyz): the portfolio of a PhD in robotics turned Senior Product Owner Software in medtech. It covers case studies in assistive robotics, twelve years of hands-on robotics, writing and community work, in English, French and Spanish.

## What is in this repo

- A React 19 + TypeScript + Vite site, **prerendered to 30 static pages** (10 sections × 3 languages) so every page is readable without JavaScript and indexable by search engines.
- One content file for all copy and translations: `src/content/content.json`.
- A documented design system and specs in `docs/`, with interactive HTML references in `design/`.
- GitHub Actions for lint, tests (including `jest-axe`), Lighthouse CI and deployment to GitHub Pages.

## Project structure

```
src/
  App.tsx                 app shell: routing, theme, focus management
  main.tsx                client entry (hydrates prerendered HTML)
  entry-server.tsx        server render, <head> tags, JSON-LD, sitemap
  site.ts                 content access, URL scheme, helpers
  components/
    Sidebar.tsx           intro, section nav, contact, theme and language
    Blocks.tsx            every content block type
    RichText.tsx          [label](url) links inside copy
  content/
    content.json          all copy, EN / FR / ES
    types.ts              content types
  styles/
    tokens.css            design tokens, light and dark
    app.css               components and layout
scripts/prerender.mjs     writes dist/<lang>/<section>/index.html, sitemap, robots, 404
public/                   favicon, share image, assets/ (images, CV)
docs/
  DESIGN_SYSTEM.md        tokens, rules, components, accessibility
  DESIGN_SPECS.md         architecture, URLs, behaviour, build and SEO
  CONTENT_GUIDE.md        how to edit copy and translations
design/                   HTML design references (open in a browser)
```

## Run locally

```bash
npm install
npm run dev          # http://localhost:5173
npm run lint
npm run test
npm run build        # client + prerender into dist/
npm run preview      # serve dist/
npm run lighthouse:ci
```

## CI and deployment

- Pull requests run `.github/workflows/ci.yml` and the Lighthouse checks.
- Pushes to `main` build, prerender and deploy `dist/` to GitHub Pages with `.github/workflows/deploy.yml`.
- After the first deploy, submit `https://suziesr.xyz/sitemap.xml` in Google Search Console (see `docs/DESIGN_SPECS.md`).

## Accessibility

WCAG 2.2 AA is the floor:

- 44 px targets, visible focus and one h1 per page;
- real links with shareable URLs;
- focus moves to the heading on navigation, and changes are announced;
- `lang` on every page and quote;
- `prefers-reduced-motion` respected;
- automated axe checks on all 30 pages.

## Contributing

See `CONTRIBUTING.md`.
