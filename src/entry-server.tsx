import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import type { Lang } from './content/types'
import {
  LANGS,
  LANG_LABELS,
  PERSON_LINKS,
  SITE_URL,
  content,
  describe,
  findSection,
  pathFor,
  sectionTitle,
} from './site'

export interface Route {
  lang: Lang
  id: string
  path: string
}

export function routes(): Route[] {
  return LANGS.flatMap((lang) => content[lang].sections.map((s) => ({ lang, id: s.id, path: pathFor(lang, s.id) })))
}

export function render(lang: Lang, id: string): string {
  return renderToString(
    <StrictMode>
      <App initialLang={lang} initialId={id} />
    </StrictMode>,
  )
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function head(r: Route): string {
  const title = sectionTitle(r.lang, r.id)
  const description = describe(r.lang, r.id)
  const url = SITE_URL + r.path
  const image = SITE_URL + '/og-image.png'
  const { index } = findSection(r.lang, r.id)
  const alternates = LANGS.map(
    (l) => '<link rel="alternate" hreflang="' + LANG_LABELS[l].hreflang + '" href="' + SITE_URL + pathFor(l, r.id) + '">',
  ).join('\n    ')
  const tags = [
    '<title>' + esc(title) + '</title>',
    '<meta name="description" content="' + esc(description) + '">',
    '<link rel="canonical" href="' + url + '">',
    alternates,
    '<link rel="alternate" hreflang="x-default" href="' + SITE_URL + pathFor('en', r.id) + '">',
    '<meta property="og:type" content="' + (index === 0 ? 'profile' : 'article') + '">',
    '<meta property="og:site_name" content="Susana Sánchez Restrepo">',
    '<meta property="og:title" content="' + esc(title) + '">',
    '<meta property="og:description" content="' + esc(description) + '">',
    '<meta property="og:url" content="' + url + '">',
    '<meta property="og:locale" content="' + { en: 'en_GB', fr: 'fr_FR', es: 'es_CO' }[r.lang] + '">',
    '<meta property="og:image" content="' + image + '">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="Susana Sánchez Restrepo with a collaborative robot arm">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + esc(title) + '">',
    '<meta name="twitter:description" content="' + esc(description) + '">',
    '<meta name="twitter:image" content="' + image + '">',
  ]
  if (index === 0) tags.push('<script type="application/ld+json">' + JSON.stringify(person(r.lang)).replace(/</g, '\\u003c') + '</script>')
  return tags.join('\n    ')
}

function person(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Susana Sánchez Restrepo',
    alternateName: ['Susana Sanchez Restrepo', 'Susana Sanchez'],
    url: SITE_URL + pathFor(lang, 'about'),
    image: SITE_URL + '/assets/ssr_profile_isir.webp',
    jobTitle: 'Senior Product Owner Software',
    worksFor: { '@type': 'Organization', name: 'Echosens', url: 'https://www.echosens.com/' },
    nationality: 'Colombian',
    homeLocation: { '@type': 'Place', name: 'Paris, France' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Université de Toulouse III' },
      { '@type': 'CollegeOrUniversity', name: 'Arts et Métiers ParisTech' },
      { '@type': 'CollegeOrUniversity', name: 'Universidad EIA' },
    ],
    hasCredential: [{ '@type': 'EducationalOccupationalCredential', name: 'PhD in control and robotics' }],
    award: ["Prix de thèse La Fabrique de l'industrie (2019)"],
    knowsLanguage: ['es', 'fr', 'en'],
    knowsAbout: [
      'Product ownership',
      'Medical device software',
      'Assistive robotics',
      'Human-robot interaction',
      'Robotics',
      'ROS 2',
      'User-centered design',
    ],
    sameAs: Object.values(PERSON_LINKS),
  }
}

export function sitemap(): string {
  const today = new Date().toISOString().slice(0, 10)
  const urls = routes().map((r) => {
    const alts = LANGS.map(
      (l) => '    <xhtml:link rel="alternate" hreflang="' + LANG_LABELS[l].hreflang + '" href="' + SITE_URL + pathFor(l, r.id) + '"/>',
    ).join('\n')
    return '  <url>\n    <loc>' + SITE_URL + r.path + '</loc>\n    <lastmod>' + today + '</lastmod>\n' + alts + '\n  </url>'
  })
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n'
  )
}

export function htmlLang(lang: Lang): string {
  return content[lang].ui.htmlLang
}
