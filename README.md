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
- ESLint
- Vitest + React Testing Library

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

## CI and deployment

- Pull requests run checks from `.github/workflows/ci.yml`.
- Pushes to `main` deploy the site with `.github/workflows/deploy.yml`.

## Root URL setup (GitHub Pages)

This project uses `base: '/'`, so it is ready for root hosting.

To publish at `https://ssrpo.github.io/`:

1. Use a repository named exactly `ssrpo.github.io`.
2. In repository settings, enable GitHub Pages with source `GitHub Actions`.
3. Push to `main`.

## Custom domain (planned)

I plan to use `suziesr.xyz`.

Once DNS is ready:

1. Add `suziesr.xyz` in GitHub Pages settings.
2. Add `public/CNAME` with exactly:
   - `suziesr.xyz`
3. Configure DNS records at the domain provider to point to GitHub Pages.

## Contributing

If you want to contribute, please check `CONTRIBUTING.md`.
