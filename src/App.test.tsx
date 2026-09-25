import { axe, toHaveNoViolations } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'
import { LANGS, content, parsePath, pathFor } from './site'

expect.extend(toHaveNoViolations)

beforeEach(() => {
  window.history.replaceState(null, '', '/')
})

describe('App', () => {
  it('renders What I do as the default section', () => {
    render(<App initialLang="en" initialId="about" />)
    expect(screen.getByRole('heading', { level: 1, name: /What I do/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /What I do/ })).toHaveAttribute('aria-current', 'page')
  })

  it('navigates with real links, updates the URL and moves focus to the heading', async () => {
    const user = userEvent.setup()
    render(<App initialLang="en" initialId="about" />)
    await user.click(screen.getByRole('link', { name: /Bloom case study/ }))
    const heading = screen.getByRole('heading', { level: 1, name: /Bloom, an operator interface/ })
    expect(heading).toHaveFocus()
    expect(window.location.pathname).toBe('/bloom/')
    expect(screen.getByText(/Showing section: Bloom/)).toBeInTheDocument()
  })

  it('switches language and keeps the current section', async () => {
    const user = userEvent.setup()
    render(<App initialLang="en" initialId="bloom" />)
    await user.click(screen.getByRole('link', { name: 'Français' }))
    expect(window.location.pathname).toBe('/fr/bloom/')
    expect(screen.getByRole('heading', { level: 1, name: /Bloom, une interface opérateur/ })).toBeInTheDocument()
  })

  it('offers previous and next links', () => {
    render(<App initialLang="en" initialId="current" />)
    expect(screen.getByRole('link', { name: /Previous/ })).toHaveAttribute('href', '/work/')
    expect(screen.getByRole('link', { name: /Next/ })).toHaveAttribute('href', '/bloom/')
  })

  it('has no detectable accessibility violations in every section and language', async () => {
    for (const lang of LANGS) {
      for (const s of content[lang].sections) {
        const { container, unmount } = render(<App initialLang={lang} initialId={s.id} />)
        expect(await axe(container), lang + '/' + s.id).toHaveNoViolations()
        unmount()
      }
    }
  }, 60000)

  it('keeps every language in step', () => {
    const ids = content.en.sections.map((s) => s.id)
    for (const lang of LANGS) expect(content[lang].sections.map((s) => s.id)).toEqual(ids)
  })

  it('round-trips paths', () => {
    for (const lang of LANGS) {
      for (const s of content[lang].sections) expect(parsePath(pathFor(lang, s.id))).toEqual({ lang, id: s.id })
    }
  })
})
