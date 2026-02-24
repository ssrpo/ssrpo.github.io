import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders About as the default section', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })

  it('switches section when a nav button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Current role' }))

    expect(
      screen.getByRole('heading', { name: /Current role/i }),
    ).toBeInTheDocument()
  })
})
