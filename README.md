# Hi, welcome to my personal website repo

I am Susana Sanchez Restrepo, and this repository contains the code for my personal website.

I built this site to share my work in robotics, software, human-centered design, and the broader ecosystem around my projects.

## What is in this repo

- A React + TypeScript + Vite single-page portfolio
- A content-driven personal website with sections for profile, recommendations, robotics work, engagements, publications, and interests
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

## Current site structure

Navigation groups live in `src/types/content.ts` (`navGroups`).

- Profile
  - `What I do`: profile, impact strip and scope of work
  - `What They Say`: selected collaborator recommendations
  - `User-Centered Development`: how users shape technical and product decisions
  - `Work & Writing`: open-source software, thesis, writing, talks and videos
- Product & medtech
  - `Current Role`: Senior Product Owner Software at Echosens, Paris
  - `Bloom Case Study`: the Extender operator interface as a product case study
  - `Assistive & Medical Devices`: PhD, Extender and the assistive robotics thread
- Engineering background
  - `Robotics Engineering`: industrial, logistics, humanoid and social robotics work
- Community
  - `Engagements`: France 2030, ROSCon France and the Paris Cybathlétique Club
  - `Le Cercle des Robots Disparus`: dedicated association project section
  - `Interests`: creative and personal threads connected to the work

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
- Pushes to `main` deploy the site to GitHub Pages with `.github/workflows/deploy.yml`.

## Accessibility

- Section switches announce changes and move focus to section headings.
- Automated accessibility checks run in tests using `jest-axe`.
- ESLint enforces JSX accessibility rules.

## Contributing

If you want to contribute, please check `CONTRIBUTING.md`.
