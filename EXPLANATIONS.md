# Explanations (Beginner Friendly)

This file explains where to edit your website safely.

## 1) Main app shell

- File: `src/App.tsx`
- Handles:
  - active section state
  - layout structure
  - spotlight cursor effect

## 2) Page sections and navigation

- File: `src/components/Sidebar.tsx`
  - left panel title, section buttons, social links
- File: `src/components/SectionContent.tsx`
  - content for About, Current role, Publications, Interests, etc.

## 3) Static content data

- File: `src/content/siteContent.tsx`
- Contains reusable content arrays:
  - social links
  - publication groups/cards

## 4) Shared types

- File: `src/types/content.ts`
- Keeps section IDs and content item structures typed and consistent.

## 5) Styling

- File: `src/index.css`
  - global styles (colors, focus, base typography)
- File: `src/App.css`
  - layout and section/component styles

## 6) Typical edits

- Update text content:
  - `src/components/SectionContent.tsx`
- Add/remove publication cards:
  - `src/content/siteContent.tsx`
- Add/remove social links:
  - `src/content/siteContent.tsx`
- Change colors or theme tokens:
  - `src/index.css` (`:root` variables)

## 7) Quality checks before pushing

Run:

- `npm run lint`
- `npm run build`

These are also run in GitHub Actions workflows.
