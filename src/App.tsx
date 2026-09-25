import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { MouseEvent } from 'react'
import { BlockView } from './components/Blocks'
import { RichText } from './components/RichText'
import { Sidebar } from './components/Sidebar'
import type { ThemePref } from './components/Sidebar'
import type { Lang } from './content/types'
import { findSection, langContent, parsePath, pathFor, sectionTitle } from './site'
import './styles/tokens.css'
import './styles/app.css'

interface Props {
  initialLang: Lang
  initialId: string
}

const THEME_KEY = 'suziesr-theme-pref'
const num = (i: number) => String(i + 1).padStart(2, '0')
const THEME_EVENT = 'suziesr-theme'

function subscribeTheme(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener(THEME_EVENT, callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(THEME_EVENT, callback)
  }
}

function readTheme(): ThemePref {
  try {
    const t = localStorage.getItem(THEME_KEY)
    return t === 'light' || t === 'dark' ? t : 'system'
  } catch {
    return 'system'
  }
}

export default function App({ initialLang, initialId }: Props) {
  const [route, setRoute] = useState({ lang: initialLang, id: initialId })
  const [menuOpen, setMenuOpen] = useState(false)
  const theme = useSyncExternalStore(subscribeTheme, readTheme, () => 'system' as ThemePref)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const moved = useRef(false)

  const c = langContent(route.lang)
  const ui = c.ui
  const { section, index } = findSection(route.lang, route.id)
  const prev = c.sections[index - 1]
  const next = c.sections[index + 1]

  useEffect(() => {
    const onPop = () => {
      moved.current = true
      setRoute(parsePath(window.location.pathname))
      setMenuOpen(false)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    document.documentElement.lang = ui.htmlLang
    document.title = sectionTitle(route.lang, route.id)
    if (moved.current) {
      moved.current = false
      window.scrollTo(0, 0)
      headingRef.current?.focus({ preventScroll: true })
    }
  }, [route, ui.htmlLang])

  const onNavigate = useCallback((event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    if (href !== window.location.pathname) window.history.pushState(null, '', href)
    moved.current = true
    setRoute(parsePath(href))
    setMenuOpen(false)
  }, [])

  const onTheme = (t: ThemePref) => {
    const root = document.documentElement
    if (t === 'system') delete root.dataset.theme
    else root.dataset.theme = t
    try {
      if (t === 'system') localStorage.removeItem(THEME_KEY)
      else localStorage.setItem(THEME_KEY, t)
    } catch {
      /* storage unavailable */
    }
    window.dispatchEvent(new Event(THEME_EVENT))
  }

  const ctx = { lang: route.lang, ui, onNavigate }
  const kicker = num(index) + ' · ' + c.groups[section.group] + (section.caseStudy ? ' · ' + ui.caseStudy : '')

  return (
    <div className="page">
      <a href="#content" className="skip">{ui.skip}</a>
      <div className="layout">
        <Sidebar
          c={c}
          lang={route.lang}
          activeId={section.id}
          menuOpen={menuOpen}
          theme={theme}
          onToggleMenu={() => setMenuOpen((o) => !o)}
          onNavigate={onNavigate}
          onTheme={onTheme}
        />
        <main id="content" className="content">
          <p className="sr-only" aria-live="polite">{ui.showing + section.title}</p>
          <article aria-labelledby="section-title" className="section">
            <header className="section-head">
              <p className="kicker">{kicker}</p>
              <h1 id="section-title" ref={headingRef} tabIndex={-1} className="h2">
                {section.title}
              </h1>
              {section.meta && <p className="meta">{section.meta}</p>}
            </header>
            {section.summary && (
              <div className="summary">
                <span className="label">{ui.inShort}</span>
                <p>
                  <RichText text={section.summary} lang={route.lang} onNavigate={onNavigate} />
                </p>
              </div>
            )}
            {section.blocks.map((b, i) => (
              <BlockView key={section.id + i} block={b} ctx={ctx} />
            ))}
            <nav className="pager" aria-label={ui.pager}>
              {prev ? (
                <a href={pathFor(route.lang, prev.id)} rel="prev" onClick={(e) => onNavigate(e, pathFor(route.lang, prev.id))}>
                  <span className="label">← {ui.prev}</span>
                  <span className="pager-title">{prev.nav}</span>
                </a>
              ) : (
                <span />
              )}
              {next && (
                <a className="next" href={pathFor(route.lang, next.id)} rel="next" onClick={(e) => onNavigate(e, pathFor(route.lang, next.id))}>
                  <span className="label">{ui.next} →</span>
                  <span className="pager-title">{next.nav}</span>
                </a>
              )}
            </nav>
          </article>
        </main>
      </div>
    </div>
  )
}
