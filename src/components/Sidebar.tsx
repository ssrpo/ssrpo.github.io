import { socialLinks } from '../content/siteContent'
import type { SectionId } from '../types/content'

type SidebarProps = {
  activeSection: SectionId
  setActiveSection: (section: SectionId) => void
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <aside className="left-panel" aria-label="Intro">
      <div className="hero-text">
        <p className="eyebrow">Robotics · Software · Mindful crafting</p>
        <h1>
          Susana
          <br />
          Sánchez Restrepo
        </h1>
        <p className="subtitle">
          I design robotic systems that work with people — not the other way
          around.
        </p>
        <nav className="page-nav" aria-label="Sections">
          <button
            type="button"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
            aria-current={activeSection === 'about' ? 'true' : undefined}
          >
            About
          </button>
          <div className="nav-subgroup" role="group" aria-label="About subsections">
            <button
              type="button"
              className={`nav-link sub ${
                activeSection === 'in-between' ? 'active' : ''
              }`}
              onClick={() => setActiveSection('in-between')}
              aria-current={activeSection === 'in-between' ? 'true' : undefined}
            >
              In the In-Between
            </button>
          </div>
          <button
            type="button"
            className={`nav-link ${activeSection === 'current' ? 'active' : ''}`}
            onClick={() => setActiveSection('current')}
            aria-current={activeSection === 'current' ? 'true' : undefined}
          >
            Current role
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'social-robotics' ? 'active' : ''}`}
            onClick={() => setActiveSection('social-robotics')}
            aria-current={activeSection === 'social-robotics' ? 'true' : undefined}
          >
            Social robotics
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'interests' ? 'active' : ''}`}
            onClick={() => setActiveSection('interests')}
            aria-current={activeSection === 'interests' ? 'true' : undefined}
          >
            Interests
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'publications' ? 'active' : ''}`}
            onClick={() => setActiveSection('publications')}
            aria-current={activeSection === 'publications' ? 'true' : undefined}
          >
            Publications
          </button>
        </nav>
        <section className="footer-links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="icon-link"
            >
              {link.icon}
            </a>
          ))}
        </section>
      </div>
    </aside>
  )
}
