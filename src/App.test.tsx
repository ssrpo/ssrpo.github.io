import { axe, toHaveNoViolations } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

expect.extend(toHaveNoViolations)

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

  it('announces section changes and moves focus to the section heading', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Social robotics' }))

    const heading = screen.getByRole('heading', { name: /Social & Interactive Robotics/i })
    expect(heading).toHaveFocus()
    expect(screen.getByText('Showing Social robotics section')).toBeInTheDocument()
  })

  it('has no detectable accessibility violations in key sections', async () => {
    const user = userEvent.setup()
    const { container } = render(<App />)

    expect(await axe(container)).toHaveNoViolations()

    await user.click(screen.getByRole('button', { name: 'Current role' }))
    expect(await axe(container)).toHaveNoViolations()
  })
})
