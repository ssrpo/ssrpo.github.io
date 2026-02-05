# Susan Sanchez — Personal Brand Website

A minimal, elegant portfolio built with React + TypeScript. It uses a bento-style layout to show skills, interests, and projects in a calm and authentic way.

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

This project is ready to deploy to GitHub Pages.

1) Create a repository in https://github.com/ssrpo
2) Push this project to that repo
3) Set the base path if your repo name is not `ssrpo` (update `base` in [vite.config.ts](vite.config.ts))
4) Build with `npm run build`
5) Publish the `dist` folder to GitHub Pages (you can use a GitHub Action later)

## Custom domain (suziesr.xyz)

1) In GitHub Pages settings, add the custom domain `suziesr.xyz`
2) Create a `CNAME` record at your DNS provider pointing to your GitHub Pages domain

## Need help?

See [EXPLANATIONS.md](EXPLANATIONS.md) for beginner-friendly notes.
