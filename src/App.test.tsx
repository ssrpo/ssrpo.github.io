import { axe, toHaveNoViolations } from 'jest-axe'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

expect.extend(toHaveNoViolations)

describe('App', () => {
  it('renders What I do as the default section', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'What I do' })).toBeInTheDocument()
  })

  it('switches section when a nav button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Current Role' }))

    expect(
      screen.getByRole('heading', { name: /Current Role/i }),
    ).toBeInTheDocument()
  })

  it('announces section changes and moves focus to the section heading', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(
      screen.getByRole('button', {
        name: /Human-Robot Interaction/i,
      }),
    )

    const heading = screen.getByRole('heading', { name: /Human-Robot Interaction/i })
    expect(heading).toHaveFocus()
    expect(
      screen.getByText('Showing Human-Robot Interaction section'),
    ).toBeInTheDocument()
  })

  it('has no detectable accessibility violations in key sections', async () => {
    const user = userEvent.setup()
    const { container } = render(<App />)

    expect(await axe(container)).toHaveNoViolations()

    await user.click(screen.getByRole('button', { name: 'Current Role' }))
    expect(await axe(container)).toHaveNoViolations()

    await user.click(screen.getByRole('button', { name: 'Assistive & Medical Devices' }))
    expect(await axe(container)).toHaveNoViolations()
  })
})
