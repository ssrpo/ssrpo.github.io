# Susan Sanchez — Personal Portfolio

A single-page portfolio built with React + TypeScript + Vite, featuring a Midnight Sun palette, sticky sidebar navigation, and rich content sections (Publications, Social Robotics, Interests).

## Quick start

1) Install dependencies
	- `npm install`
2) Run the app locally
	- `npm run dev`
3) Build for production
	- `npm run build`
4) Preview the production build
	- `npm run preview`

## Where to edit content

- Main page content lives in [src/App.tsx](src/App.tsx).
- Styles live in [src/App.css](src/App.css) and [src/index.css](src/index.css).

## Deployment (GitHub Pages)

The site is published via GitHub Pages.

1) Ensure the `base` path in [vite.config.ts](vite.config.ts) matches your repo name
2) Build with `npm run build`
3) Publish the `dist` folder to GitHub Pages (or use a GitHub Action)

## Custom domain (suziesr.xyz)

1) In GitHub Pages settings, add the custom domain `suziesr.xyz`
2) Create a `CNAME` record at your DNS provider pointing to your GitHub Pages domain

## Need help?

See [EXPLANATIONS.md](EXPLANATIONS.md) for beginner-friendly notes.
