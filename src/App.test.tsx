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
    expect(screen.getByRole('list', { name: 'Selected impact' })).toBeInTheDocument()
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
        name: /Robotics Engineering/i,
      }),
    )

    const heading = screen.getByRole('heading', { name: /Robotics Engineering/i })
    expect(heading).toHaveFocus()
    expect(
      screen.getByText('Showing Robotics Engineering section'),
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

    await user.click(screen.getByRole('button', { name: 'Bloom Case Study' }))
    expect(await axe(container)).toHaveNoViolations()
  })

  it('shows the Echosens role and the Bloom repository', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Current Role' }))
    expect(screen.getByText(/Echosens · Paris · from October 2026/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Bloom Case Study' }))
    expect(
      screen.getByRole('link', { name: 'Bloom' }),
    ).toHaveAttribute('href', 'https://github.com/ISIR-EXTENDER/bloom')
  })
})
