# Design system · suziesr.xyz

**Paper, ink, pink and a little yellow.** The portfolio of Susana Sánchez Restrepo keeps the original sidebar-and-sections site and runs it on one set of tokens, so every size, space and colour has one reason to exist. WCAG 2.2 AA is the floor, not the goal.

Tokens live in `src/styles/tokens.css`. Components live in `src/styles/app.css`. An interactive reference (with a light/dark toggle) is in `design/Design System.dc.html`.

## 1. Principles

1. **Quiet by default.** Ink on warm paper does the work. Colour marks meaning, it never decorates.
2. **Summary first.** Every section except the first opens with an "In short" box a recruiter can read in ten seconds. Depth lives in collapsibles.
3. **One token per job.** No near-duplicate sizes or spaces. A value that is not in this file does not ship.
4. **Accessible is the style.** Large body text, 44 px targets, visible focus, real headings.

## 2. Colour

Contrast is deliberately softer than pure black on white (about 14:1 instead of 21:1): calmer to read, still far above AA.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | `#FBF8F5` | `#111014` | Page paper |
| `--surface` | `#FFFFFF` | `#1A181F` | Cards, icon buttons, pills |
| `--surface-2` | `#F4EEE9` | `#221F28` | "In short" box, hover |
| `--ink` | `#2B2529` | `#ECE7EA` | Headings, lead text, row terms |
| `--ink-2` | `#5F565B` | `#B3ACB2` | Body, meta, captions |
| `--line` | ink at 13% | ink at 13% | Every rule and border |
| `--pink` | `#C42A78` | `#EE72B0` | Kickers, numbers, CTA, link underline, focus ring |
| `--on-pink` | `#FFFFFF` | `#1A1618` | Text on the CTA |
| `--yellow` | `#F6D46B` | `#E7C96A` | Status dot only |
| `--yellow-soft` | `#FCEFC4` | `#3A3322` | Active nav item, status-dot halo |
| `--marker` | `#FBE39A` | yellow at 32% | Positioning-line highlight |

Measured contrast on `--bg`:

- `--ink`: 14.2:1 light, 15.5:1 dark.
- `--ink-2`: 6.7:1 light, 8.5:1 dark.
- `--pink`: 7.2:1 light, 6.9:1 dark, so it is safe for text.

### The yellow rule

Yellow appears in exactly three places, each answering a question a visitor has. It is always a background under ink, never text on paper (yellow text fails contrast in light mode).

1. **What do you do?** The marker under the positioning line in the sidebar. One phrase per page.
2. **Where are you now?** The 8 px status dot before the current role.
3. **Where am I?** The active navigation item, together with `aria-current="page"` so colour is never the only signal.

### Themes

- `Auto` follows `prefers-color-scheme`.
- `Light` and `Dark` set `data-theme` on `<html>` and are saved to `localStorage` under `suziesr-theme-pref`.
- An inline script in `index.html` applies the saved theme before first paint, so there is no flash.

## 3. Typography

- **Newsreader** for display and headings, weight 400 only. It is a lower-contrast serif, easier on the eye than a Didone.
- **Source Sans 3** for everything else, weights 400 and 600.

| Token | Spec | Example |
| --- | --- | --- |
| display | Newsreader clamp(44–64) / 1.0, −0.02em | Name in the sidebar |
| h1 (section) | Newsreader clamp(34–44) / 1.08, −0.015em | "Robotics and product career" |
| h2 (sub-block) | Newsreader 26 / 1.2 (timeline and summaries: 24–25) | "What shipped" |
| lead | Source Sans 21 / 1.5, ink | First paragraph of a section |
| body | Source Sans 18 / 1.65, ink-2 | Paragraphs |
| row | Source Sans 16 semibold (term) · 17 regular (text) | Label rows |
| meta | Source Sans 15, ink-2 | Places, dates, captions (captions 14) |
| kicker | Source Sans 13 semibold, +0.08em, uppercase, pink | "06 · Product & medtech · Case study" |

Rules:

- Body line length is capped by the 780 px content column (about 68 characters). Use `text-wrap: pretty` on paragraphs and `balance` on section titles.
- Italic serif is reserved for quotations.
- Uppercase only for kickers and group labels (four words or fewer), always tracked +0.08em or more.
- Sentence case for every heading and navigation label.

## 4. Space, shape, layout

**Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 (`--space-1` … `--space-9`).

- 32 between blocks in a section.
- 24 between row columns and inside boxes.
- 16 between paragraphs.
- 12 in card grids and between a kicker and its title.

**Radius:**

- 8 for controls and navigation items.
- 10 for icon buttons and the menu toggle.
- 14 for cards, figures and the "In short" box.
- 999 for pills and the CTA.

**Lines:** 1 px `--line` only. No shadows, no gradients, no coloured left borders.

**Layout:**

| Breakpoint | Rules |
| --- | --- |
| ≥ 1024 | Page max 1440, padding 96 / 48 / 96 / 72. Sidebar `clamp(320px, 30vw, 420px)`. Gap `clamp(56px, 8vw, 128px)`. Content max 780. |
| ≥ 768 wide and ≥ 650 tall | The sidebar scrolls with the page and never scrolls on its own. Only the section list is sticky, 24 px from the top, and it is pinned only when all of it fits on screen. The contact buttons and CV sit at the foot of the sidebar, level with the pager. The theme and language switches sit at the top right of the page, in their own band above the content. |
| ≤ 1100 | Label rows and timeline stack (term above text). |
| 768–1023 | Sidebar `clamp(280px, 36vw, 380px)`, gap 48. Two-column grids (quotes, cards, families, screenshot pairs) collapse to one. |
| < 768 | Single column, sidebar unstuck, page padding 20. The theme and language switches open the page, right-aligned. The section list collapses behind a "Sections" button that shows the current section. Publication thumbnails go 16:9. Pager stacks. |

## 5. Components

| Component | Spec |
| --- | --- |
| **Section header** | Kicker (number · group · "Case study" when relevant), then h1, then optional meta line. The h1 receives focus on navigation (`tabindex="-1"`). |
| **In short** | `--surface-2`, radius 14, padding 20 × 24. Label "In short" in 12 px caps, then 18 px ink text of 60 words or fewer. Required on every section except the first. |
| **Label rows** (`<dl>`) | Replace bullet lists. Term column 200 px, 16 semibold. Text 17 ink-2. 1 px rules between rows. Use 3–6 rows; more means the content wants a collapsible or cutting. |
| **Impact figures** | At most 4 per section. Newsreader 36 pink value and a 15 px one-line context. Cards with 14 radius and 1 px line. Real numbers only, each with its source nearby. |
| **Numbered cards** (`<ol>`) | Case studies only. Pink Newsreader 28 number, 17 semibold title, 16 ink-2 reason. Two columns, one below 1024. |
| **Family quotes** | Three first-person user sentences in italic serif under a caps label. |
| **Collapsible** (`<details>`) | Summary is at least 64 px tall: Newsreader 24 title, 15 px teaser, and a 36 px round chevron that rotates 180° when open. Closed by default. Stacked with 1 px rules, no gaps. Content stays findable with Ctrl+F. |
| **Timeline** (`<ol>`) | Newest first. 120 px year column in pink tabular figures. Organisation (linked) in Newsreader 25, role in 15 ink-2, 2–3 sentences, then up to three bullets and an optional 4:3 image pair. |
| **Publication card** | Whole card is one link. 144 × 96 thumbnail (decorative, `alt=""`), 18 semibold title, 15 meta, pink type label with ↗. Hover: pink border and `--surface-2`. |
| **Figure** | Radius 14, 1 px line, 14 px caption in ink-2 that credits the source. Screenshot pairs crop to 16:10 from the top left. |
| **Quote** | Italic Newsreader 20–24. Name in 15 semibold ink, then role. The original language is kept and marked with `lang`. |
| **Primary CTA** | "Let's talk on LinkedIn ↗", 48 px pink pill. Only one on the site, at the bottom of the sidebar next to the icon buttons. |
| **Icon button** | 48 × 48, radius 10, 1 px line. Always has an `aria-label`. |
| **Segmented control** | Theme (Auto, Light, Dark) and language (EN, FR, ES). Pill container, 40 px buttons with a 44 px minimum width. The selected item is ink on paper. Theme buttons use `aria-pressed`; language links use `aria-current`, `hreflang` and their own `lang`. |
| **Pager** | Previous and next cards at the end of each section: 13 px caps label, then the section name in Newsreader 21. |

## 6. Accessibility

- **Contrast:** text at least 4.5:1 (achieved: 6.7:1 or more). Non-text UI at least 3:1.
- **Targets:** every interactive element is at least 44 × 44 px.
- **Focus:** 3 px pink outline with a 3 px offset on `:focus-visible`. Never removed.
- **Structure:** each page has one h1 (the section title) and h2 for sub-blocks. Landmarks: `aside` "Intro", `nav` "Sections", `main`, `nav` "More sections". A skip link comes first in tab order.
- **Navigation:** real links with real URLs. On change, the page scrolls to the top, the h1 receives focus and a polite live region announces the section. The browser back button works.
- **Languages:** `<html lang>` follows the page (`en`, `fr`, `es-CO`). Quotes in another language carry their own `lang`.
- **Motion:** only 150–250 ms colour and rotation transitions, all disabled under `prefers-reduced-motion`.
- **Images:** informative images have descriptive alt text. Decorative thumbnails use `alt=""`.
- **Reflow:** usable at 320 px wide and at 200% zoom with no horizontal scroll.
- **Automated checks:** `jest-axe` runs on every section in every language, and Lighthouse CI requires an accessibility score of 100.

## 7. Writing rules

**Do**

- First person, active voice, concrete verbs: built, shipped, led.
- Real numbers with their context.
- Lead each section with the outcome, then the how.
- Keep French quotes in French.

**Don't**

- Tell the same story twice. Each fact lives in one section; other sections link to it.
- Write paragraphs over 90 words.
- Use stats without a source, or emoji.
- Use "passionate", "innovative" or "cutting-edge".
- Use em dashes. Use a comma, a colon or a new sentence instead.
