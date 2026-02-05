# Susana Sánchez Restrepo — Personal Portfolio

A single-page portfolio built with React + TypeScript + Vite, featuring a Midnight Sun palette, sticky sidebar navigation, and rich content sections focused on social robotics, research, and creative practice.

## Highlights

- Sticky left sidebar with section navigation
- Spotlight cursor effect with reduced-motion support
- Publications grouped with visual thumbnails
- Dedicated Social Robotics section (NAO, Pepper, Mirokaï)
- Interests section with embedded media and photography
- Accessible focus states and skip link

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

## Content sections

The site is structured into:

- About
- In the In-Between
- Current role
- Social robotics
- Interests
- Publications

## Deployment (GitHub Pages)

The site can be published via GitHub Pages.

1) Build with `npm run build`
2) Publish the `dist` folder to GitHub Pages (or use a GitHub Action)

## Custom domain (suziesr.xyz)

1) In GitHub Pages settings, add the custom domain `suziesr.xyz`
2) Create a `CNAME` record at your DNS provider pointing to your GitHub Pages domain

## Need help?

See [EXPLANATIONS.md](EXPLANATIONS.md) for beginner-friendly notes.
