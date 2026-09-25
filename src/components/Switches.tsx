import type { MouseEvent } from 'react'
import type { Lang, LangContent } from '../content/types'
import { LANGS, LANG_LABELS, pathFor } from '../site'

export type ThemePref = 'system' | 'light' | 'dark'

interface Props {
  ui: LangContent['ui']
  lang: Lang
  activeId: string
  theme: ThemePref
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
  onTheme: (t: ThemePref) => void
}

export function Switches({ ui, lang, activeId, theme, onNavigate, onTheme }: Props) {
  return (
    <div className="switches">
      <div className="seg" role="group" aria-label={ui.theme}>
        {(
          [
            ['system', ui.auto],
            ['light', ui.light],
            ['dark', ui.dark],
          ] as [ThemePref, string][]
        ).map(([v, label]) => (
          <button key={v} type="button" aria-pressed={theme === v} onClick={() => onTheme(v)}>
            {label}
          </button>
        ))}
      </div>
      <nav className="seg" aria-label={ui.language}>
        {LANGS.map((l) => (
          <a
            key={l}
            href={pathFor(l, activeId)}
            hrefLang={LANG_LABELS[l].hreflang}
            lang={LANG_LABELS[l].hreflang}
            aria-label={LANG_LABELS[l].name}
            aria-current={l === lang ? 'true' : undefined}
            onClick={(e) => onNavigate(e, pathFor(l, activeId))}
          >
            {LANG_LABELS[l].short}
          </a>
        ))}
      </nav>
    </div>
  )
}
