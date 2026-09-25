export type Lang = 'en' | 'fr' | 'es'
export type GroupKey = 'profile' | 'product' | 'eng' | 'community'
export type Pair = [string, string]

export interface PubItem {
  title: string
  meta: string
  label: string
  image: string
  href: string
}

export interface TimelineItem {
  years: string
  org: string
  role: string
  text: string
  bullets?: string[]
  figs?: Pair[]
}

export interface DetailItem {
  title: string
  teaser: string
  paras?: string[]
  rows?: Pair[]
  list?: string[]
  img?: string
  imgAlt?: string
  video?: string
  videoTitle?: string
  links?: Pair[]
}

export type Block =
  | { type: 'intro'; lead: string; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'rows'; rows: Pair[] }
  | { type: 'impact'; items: Pair[] }
  | { type: 'quote'; text: string; name: string; role: string }
  | { type: 'quotes' }
  | { type: 'cards'; items: Pair[] }
  | { type: 'families'; items: Pair[] }
  | { type: 'figure'; src: string; alt: string; caption: string }
  | { type: 'figures'; items: Pair[]; caption: string }
  | { type: 'shots'; items: Pair[]; caption: string }
  | { type: 'pubs'; groups: { title: string; items: PubItem[] }[] }
  | { type: 'timeline'; items: TimelineItem[] }
  | { type: 'details'; items: DetailItem[] }

export interface Section {
  id: string
  group: GroupKey
  nav: string
  title: string
  meta?: string
  summary?: string
  caseStudy?: boolean
  blocks: Block[]
}

export interface UiStrings {
  htmlLang: string
  docTitle: string
  skip: string
  positioning: string
  pitchA: string
  pitchB: string
  nowLabel: string
  nowText: string
  menu: string
  menuClose: string
  cta: string
  email: string
  cv: string
  inShort: string
  caseStudy: string
  prev: string
  next: string
  pager: string
  theme: string
  auto: string
  light: string
  dark: string
  language: string
  showing: string
  portraitAlt: string
  elsewhere: string
}

export interface LangContent {
  ui: UiStrings
  groups: Record<GroupKey, string>
  sections: Section[]
}

export interface Quote {
  text: string
  name: string
  role: string
}

export interface ContentFile {
  quotes: Quote[]
  links: Record<string, string>
  en: LangContent
  fr: LangContent
  es: LangContent
}
