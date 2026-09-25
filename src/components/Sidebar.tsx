import type { MouseEvent } from 'react'
import type { Lang, LangContent } from '../content/types'
import { EMAIL_PARTS, GROUP_ORDER, LANGS, LANG_LABELS, PERSON_LINKS, pathFor } from '../site'

export type ThemePref = 'system' | 'light' | 'dark'

interface Props {
  c: LangContent
  lang: Lang
  activeId: string
  menuOpen: boolean
  theme: ThemePref
  onToggleMenu: () => void
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
  onTheme: (t: ThemePref) => void
}

const num = (i: number) => String(i + 1).padStart(2, '0')

export function Sidebar({ c, lang, activeId, menuOpen, theme, onToggleMenu, onNavigate, onTheme }: Props) {
  const ui = c.ui
  const activeIndex = c.sections.findIndex((s) => s.id === activeId)
  const openMail = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = 'mailto:' + EMAIL_PARTS.join('@')
  }

  return (
    <aside className="sidebar" aria-label="Intro">
      <p className="positioning">{ui.positioning}</p>
      <p className="name">
        Susana
        <br />
        <span>Sánchez Restrepo</span>
      </p>
      <p className="pitch">
        {ui.pitchA}
        <mark>{ui.pitchB}</mark>
      </p>
      <p className="now">
        <span className="now-dot" aria-hidden="true" />
        <span>
          <strong>{ui.nowLabel}</strong> {ui.nowText}
        </span>
      </p>

      <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="sections-nav" onClick={onToggleMenu}>
        <span>{menuOpen ? ui.menuClose : ui.menu}</span>
        <span className="menu-current" aria-hidden="true">
          {num(activeIndex)} · {c.sections[activeIndex].nav}
        </span>
      </button>

      <nav id="sections-nav" className="nav" data-open={menuOpen} aria-label={ui.menu}>
        {GROUP_ORDER.map((g) => (
          <div className="nav-group" key={g}>
            <div className="nav-label">{c.groups[g]}</div>
            {c.sections.map((s, i) =>
              s.group !== g ? null : (
                <a
                  key={s.id}
                  href={pathFor(lang, s.id)}
                  className="nav-item"
                  aria-current={s.id === activeId ? 'page' : undefined}
                  onClick={(e) => onNavigate(e, pathFor(lang, s.id))}
                >
                  <span className="nav-num" aria-hidden="true">{num(i)}</span>
                  {s.nav}
                </a>
              ),
            )}
          </div>
        ))}
      </nav>

      <div className="contact" role="group" aria-label={ui.elsewhere}>
        <a className="cta" href={PERSON_LINKS.linkedin} target="_blank" rel="noreferrer">
          {ui.cta}
          <span aria-hidden="true">↗</span>
        </a>
        <a className="icon-btn" href="/#contact" onClick={openMail} aria-label={ui.email}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="stroke">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </a>
        <a className="icon-btn" href={PERSON_LINKS.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 10.5L5.2 9 12 5.5 18.8 9 12 13.5ZM6 16.5v2.1C6 20.99 8.69 22 12 22s6-1.01 6-3.4v-2.1l-6 3.2-6-3.2Z" />
          </svg>
        </a>
        <a className="icon-btn" href={PERSON_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.36-1.18-3.36-1.18-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.64-1.33-2.22-.26-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.69-4.57 4.94.36.32.69.94.69 1.9v2.82c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
          </svg>
        </a>
        <a className="icon-btn" href={PERSON_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5.25-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
          </svg>
        </a>
      </div>
      <a className="cv-link" href="/assets/CV_Susana_Sanchez_Restrepo.pdf" download="CV_Susana_Sanchez_Restrepo.pdf">
        {ui.cv}
        <span aria-hidden="true">↓</span>
      </a>

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
    </aside>
  )
}
