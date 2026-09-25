# Design and build specs · suziesr.xyz v2

How the site is structured, how it behaves and how it is built. Visual rules are in `DESIGN_SYSTEM.md`; editing content is covered in `CONTENT_GUIDE.md`.

## Information architecture

Ten sections in four groups. Every section exists in English, French and Spanish (Colombia) with the same `id`.

| # | id | Group | Purpose |
| --- | --- | --- | --- |
| 01 | `about` | Profile | Who I am, four impact figures, the career path in one table |
| 02 | `recommendations` | Profile | Seven quotes from colleagues, in their original language |
| 03 | `work` | Profile | Open source, thesis, writing, talks and video (the only list of publications) |
| 04 | `current` | Product & medtech | Senior Product Owner Software, Echosens |
| 05 | `bloom` | Product & medtech | Case study: Bloom, the Extender operator interface |
| 06 | `consortium` | Product & medtech | Case study: a shared language across seven disciplines |
| 07 | `career` | Engineering & research | Dated timeline, 2014 to 2026 |
| 08 | `academia` | Engineering & research | PhD, CEA software, education, distinctions |
| 09 | `community` | Community | France 2030, ROSCon France, spOken, PCC, Le Cercle |
| 10 | `interests` | Community | Beyond work: machines, Museomix, photography |

## URLs

| Language | Home | Section |
| --- | --- | --- |
| English | `/` | `/bloom/` |
| French | `/fr/` | `/fr/bloom/` |
| Spanish | `/es/` | `/es/bloom/` |

- `pathFor(lang, id)` and `parsePath(pathname)` in `src/site.ts` are the only places that know this scheme.
- In-content links written as `[label](#bloom)` are rewritten to the current language's URL.
- Unknown paths fall back to the language's first section (GitHub Pages serves `404.html`, which is the English home).
- The language switch links to the same section in the other language.

## Page anatomy

```
┌───────────── sidebar (sticky) ─────────────┐┌──────── main ────────┐
│ positioning kicker                         ││ kicker               │
│ Susana / Sánchez Restrepo   (display)      ││ h1 section title     │
│ pitch with marker highlight                ││ meta                 │
│ ● Now: role                                ││ In short             │
│ [Sections ▾]        (mobile only)          ││ blocks…              │
│ nav: 4 groups × numbered links             ││ collapsibles         │
│ [Let's talk on LinkedIn ↗] ✉ 🎓 GH IG      ││ ← previous  next →   │
│ Download CV ↓                              │└──────────────────────┘
│ (Auto|Light|Dark)  (EN|FR|ES)              │
└────────────────────────────────────────────┘
```

## Content blocks

A section is a list of blocks rendered by `src/components/Blocks.tsx`:

- `intro`: the portrait plus two paragraphs.
- `h3`: a sub-block heading.
- `p`: a paragraph.
- `rows`: label rows.
- `impact`: impact figures.
- `quote`: one pull quote.
- `quotes`: all the recommendations.
- `cards`: numbered cards.
- `families`: three user sentences.
- `figure`: one image.
- `figures`: an image pair on white.
- `shots`: a pair of 16:10 screenshots.
- `pubs`: publication cards.
- `timeline`: the dated career list.
- `details`: collapsibles with optional paragraphs, rows, list, image, video and links.

Types are in `src/content/types.ts`.

## Behaviour

| Interaction | Result |
| --- | --- |
| Click a section link | `history.pushState`, render the section, scroll to top, focus the h1, announce "Showing section: …". Modifier-clicks open a new tab as usual. |
| Back / forward | `popstate` restores the section, with the same focus handling. |
| Language switch | Navigates to the same section in the other language. `<html lang>` and the document title update. |
| Theme switch | Auto removes `data-theme`; Light and Dark set it and save it. |
| Mobile "Sections" button | Toggles the nav (`aria-expanded`); choosing a section closes it. |
| Collapsible | Native `<details>`; the chevron rotates in 200 ms. |
| Email button | Builds `mailto:` on click; the address is not written in the HTML. |
| CV link | Downloads `assets/CV_Susana_Sanchez_Restrepo.pdf` (French version). |

## Build and findability

`npm run build` does four things:

1. `tsc -b` and `vite build` create the client bundle in `dist/`.
2. `vite build --ssr src/entry-server.tsx` creates a server bundle.
3. `scripts/prerender.mjs` renders **30 static pages** (10 sections × 3 languages) into `dist/<path>/index.html`. Each page gets:
   - its own `<title>` and meta description (from the section's "In short");
   - a canonical URL;
   - `hreflang` alternates for en, fr and es-CO, plus x-default;
   - Open Graph and Twitter tags with the absolute `https://suziesr.xyz/og-image.png` (1200 × 630);
   - on each home page, a JSON-LD `Person` record (name and spelling variants, job title, employer, alumni, languages, `sameAs` profiles).
4. The same script also writes `sitemap.xml` (with alternates), `robots.txt` and `404.html`, then deletes the server bundle.

React hydrates the prerendered HTML, so crawlers and people without JavaScript get the full text.

**After the first deploy:**

1. Add `suziesr.xyz` to Google Search Console and Bing Webmaster Tools, and submit `https://suziesr.xyz/sitemap.xml`.
2. Put `https://suziesr.xyz` in the website field of LinkedIn, Google Scholar, GitHub, Medium and YouTube. Those backlinks, plus the `sameAs` list, are what make Google connect the site to the name.
3. Check the link preview with the LinkedIn Post Inspector.

## Assets

Everything lives in `public/assets/`, referenced as `/assets/…`.

| Asset | Source |
| --- | --- |
| Profile photo | The author |
| Explorer images and the Extender illustration | ORTHOPUS, credited in captions |
| Bloom screenshots and GIF | `ISIR-EXTENDER/bloom` `docs/assets` (MIT) |
| Consortium photo | The author, taken at a working session |
| Pepper and NAO photos | SoftBank Robotics; check the licence before publishing, and add a credit |

## Testing

`npm test` runs:

- the navigation tests: links, URL, focus, live region, language switch and pager;
- a path round-trip check;
- a check that all three languages have the same sections;
- `jest-axe` on every section in every language.

`npm run lighthouse:ci` asserts accessibility 100, SEO and best practices at least 95, and warns if performance drops below 85.
