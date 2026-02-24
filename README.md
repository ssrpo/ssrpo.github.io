# Susana Sanchez Restrepo - Personal Website

A single-page portfolio built with React, TypeScript, and Vite.

## Tech stack

- React 19
- TypeScript
- Vite
- ESLint
- GitHub Actions (CI + Pages deploy)

## Project structure

- `src/App.tsx`: app shell (state + layout wiring)
- `src/components/Sidebar.tsx`: left navigation and social links
- `src/components/SectionContent.tsx`: section rendering
- `src/content/siteContent.tsx`: static content/data
- `src/types/content.ts`: shared content types
- `src/App.css` and `src/index.css`: styles

## Local development

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Lint: `npm run lint`
4. Build: `npm run build`
5. Preview production build: `npm run preview`

## CI and deployment

- Pull requests run quality checks in `.github/workflows/ci.yml`.
- Pushes to `main` run Pages deployment in `.github/workflows/deploy.yml`.

## GitHub Pages (root setup)

This project is configured for root hosting with `base: '/'`.

To publish at `https://ssrpo.github.io/`:

1. Use a repository named `ssrpo.github.io`.
2. In repository settings, enable Pages with source `GitHub Actions`.
3. Push to `main`.

## Custom domain (later)

When DNS is ready for `suziesr.xyz`:

1. Add `suziesr.xyz` in GitHub Pages settings.
2. Add a `public/CNAME` file containing exactly `suziesr.xyz`.
3. Configure DNS records at your provider to point to GitHub Pages.
