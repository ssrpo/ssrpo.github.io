# Explanations (Beginner Friendly)

This file explains how the website is put together and what you can safely edit.

## 1) The main page

- File: [src/App.tsx](src/App.tsx)
- This file holds the content for your portfolio (your name, about text, projects, skills, etc.).
- You can update the text inside the `skills`, `interests`, `projects`, and `socials` arrays.

## 2) The styles

- File: [src/index.css](src/index.css)
  - Global styles (background, colors, fonts).
- File: [src/App.css](src/App.css)
  - Layout and component styles (cards, buttons, bento grid).

If you change colors, the safest place is in `:root` inside `src/index.css`.

## 3) How to update your info

- Replace the name, subtitle, and paragraphs in `src/App.tsx`.
- Update the email in the `mailto:` links.
- Add or remove projects by editing the `projects` array.

## 4) Common edits

- Add a new card: copy any `<section className="card ...">` block.
- Change layout: edit the grid rules in `src/App.css` under the `@media (min-width: 900px)` section.

## 5) Helpful reminders

- Keep text short for a clean, minimal look.
- Don’t worry about perfection — it’s okay to iterate.

If you want help, just tell me what you want to change and I’ll do it for you.
