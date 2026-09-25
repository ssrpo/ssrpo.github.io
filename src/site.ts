import raw from './content/content.json'
import type { ContentFile, Lang, LangContent, Section } from './content/types'

export const content = raw as unknown as ContentFile
export const SITE_URL = 'https://suziesr.xyz'
export const LANGS: Lang[] = ['en', 'fr', 'es']
export const LANG_LABELS: Record<Lang, { short: string; name: string; hreflang: string }> = {
  en: { short: 'EN', name: 'English', hreflang: 'en' },
  fr: { short: 'FR', name: 'Français', hreflang: 'fr' },
  es: { short: 'ES', name: 'Español (Colombia)', hreflang: 'es-CO' },
}
export const GROUP_ORDER = ['profile', 'product', 'eng', 'community'] as const
export const EMAIL_PARTS = ['susisanchezr', 'gmail.com']

export const PERSON_LINKS = {
  linkedin: 'https://www.linkedin.com/in/susanasanchezr/',
  scholar: 'https://scholar.google.fr/citations?user=YJdKzGAAAAAJ&hl=fr',
  github: 'https://github.com/ssrpo',
  instagram: 'https://instagram.com/mindful.lente',
  youtube: 'https://youtube.com/@SusanaSanchezRestrepo',
  medium: 'https://heart-robotics.medium.com/',
}

export function langContent(lang: Lang): LangContent {
  return content[lang]
}

export function pathFor(lang: Lang, id: string): string {
  const prefix = lang === 'en' ? '' : '/' + lang
  const first = content[lang].sections[0].id
  return id === first ? prefix + '/' : prefix + '/' + id + '/'
}

export function parsePath(pathname: string): { lang: Lang; id: string } {
  const parts = pathname.split('/').filter(Boolean)
  let lang: Lang = 'en'
  if (parts[0] === 'fr' || parts[0] === 'es') lang = parts.shift() as Lang
  const ids = content[lang].sections.map((s) => s.id)
  const id = parts[0] && ids.includes(parts[0]) ? parts[0] : ids[0]
  return { lang, id }
}

export function asset(src: string): string {
  const mapped = content.links[src] ?? src
  if (/^https?:\/\//.test(mapped)) return mapped
  return '/' + mapped.replace(/^\//, '')
}

export function plain(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}

export function findSection(lang: Lang, id: string): { section: Section; index: number } {
  const sections = content[lang].sections
  const index = Math.max(0, sections.findIndex((s) => s.id === id))
  return { section: sections[index], index }
}

export function sectionTitle(lang: Lang, id: string): string {
  const { section, index } = findSection(lang, id)
  const ui = content[lang].ui
  return index === 0 ? ui.docTitle : section.title + ' · Susana Sánchez Restrepo'
}

export function describe(lang: Lang, id: string): string {
  const { section } = findSection(lang, id)
  const intro = section.blocks.find((b) => b.type === 'intro')
  const text = plain(section.summary ?? (intro && intro.type === 'intro' ? intro.lead : ''))
  return text.length > 160 ? text.slice(0, 157).replace(/\s+\S*$/, '') + '…' : text
}

export function quoteLang(text: string): string {
  return /[àâçéèêëîïôûùüÿœ]|\b(les|le|la|de|elle|une)\b/i.test(text) ? 'fr' : 'en'
}
