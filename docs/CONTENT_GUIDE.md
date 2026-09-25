# Content guide

All copy lives in **`src/content/content.json`**: one object per language (`en`, `fr`, `es`), plus `quotes` (shared, kept in their original language) and `links` (named assets and URLs such as `thesis` or `scholar`).

## Editing

- **Change a sentence:** find it in `content.json` and edit it in all three languages.
- **Links inside text** use Markdown syntax:
  - external: `[Niryo](https://niryo.com/)`, which opens in a new tab;
  - internal: `[Bloom](#bloom)`, which goes to the Bloom section in the current language.
- **Add a section:** add an object with the same `id` to `en.sections`, `fr.sections` and `es.sections`, at the same position. The tests fail if the languages drift apart.
- **Groups:** a section's `group` must be one of `profile`, `product`, `eng` or `community`.
- **Images:** put the file in `public/assets/` and reference it as `assets/name.png`. Always write alt text in each language, and credit the source in the caption.
- **CV:** replace `public/assets/CV_Susana_Sanchez_Restrepo.pdf`. If you add an English CV, point the `cv` link to it per language in `Sidebar.tsx`.

## Writing rules

- Every section except the first needs a `summary` ("In short"): 60 words or fewer, outcome first.
- Prefer `rows` to bullet lists: a 1–3 word term, then one sentence.
- One fact, one place. If the same story is useful elsewhere, link to its section.
- No em dashes. Use a comma, a colon or a new sentence instead.
- Sentence case for titles and navigation labels.

## Languages

| Code | Name | `htmlLang` | Notes |
| --- | --- | --- | --- |
| `en` | English | `en` | Default, served at `/`. |
| `fr` | Français | `fr` | Served at `/fr/`. |
| `es` | Español (Colombia) | `es-CO` | Served at `/es/`. Formal "usted", Colombian vocabulary ("computador", "hoja de vida"). |

Names of products, companies and standards (Bloom, IEC 62304, ROS 2) are never translated.
