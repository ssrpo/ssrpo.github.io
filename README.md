# Hi, welcome to my personal website repo

I am Susana Sanchez Restrepo, and this repository contains the code for my personal website.

I built this site to share my work in robotics, software, and human-centered design.

## What is in this repo

- A React + TypeScript + Vite single-page portfolio
- My sections (About, Current Role, Social Robotics, Publications, Interests)
- A GitHub Actions pipeline for quality checks and deployment

## Tech stack

- React 19
- TypeScript
- Vite
- ESLint (with accessibility rules)
- Vitest + React Testing Library + jest-axe
- Lighthouse CI

## Project structure

- `src/App.tsx`: app shell and state wiring
- `src/components/Sidebar.tsx`: left navigation and social links
- `src/components/SectionContent.tsx`: main section content rendering
- `src/content/siteContent.tsx`: static content/data
- `src/types/content.ts`: shared types
- `src/App.css` and `src/index.css`: styles

## Run locally

1. Install dependencies
   - `npm install`
2. Start dev server
   - `npm run dev`
3. Run quality checks
   - `npm run lint`
   - `npm run test`
   - `npm run build`
   - `npm run lighthouse:ci` (requires Chrome locally; always runs in CI)

## CI and deployment

- Pull requests run checks from `.github/workflows/ci.yml`.
- Pull requests also run Lighthouse checks from `.github/workflows/lighthouse.yml`.
- Pushes to `main` deploy the site with `.github/workflows/deploy.yml`.

## Accessibility

- Section switches announce changes and move focus to section headings.
- Automated accessibility checks run in tests using `jest-axe`.
- ESLint enforces JSX accessibility rules.

## Root URL setup (GitHub Pages)

This project uses `base: '/'`, so it is ready for root hosting.

## Contributing

If you want to contribute, please check `CONTRIBUTING.md`.
