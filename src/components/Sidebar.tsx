import { socialLinks } from '../content/siteContent'
import { navGroups, sectionLabels, sectionPanelIds } from '../types/content'
import type { SectionId } from '../types/content'

type SidebarProps = {
  activeSection: SectionId
  setActiveSection: (section: SectionId) => void
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  return (
    <aside className="left-panel" aria-label="Intro">
      <div className="hero-text">
        <p className="eyebrow">Product leadership · Medtech · Assistive robotics</p>
        <h1>
          Susana
          <br />
          <span className="hero-last-name">Sánchez Restrepo</span>
        </h1>
        <p className="subtitle">
          I turn complex medical and robotic systems into products that
          clinicians, patients and operators can trust.
        </p>
        <nav className="page-nav" aria-label="Sections">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <div className="nav-group-label">{group.label}</div>
              {group.sections.map((section) => (
                <button
                  key={section}
                  type="button"
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => setActiveSection(section)}
                  aria-current={activeSection === section ? 'true' : undefined}
                  aria-controls={
                    activeSection === section ? sectionPanelIds[section] : undefined
                  }
                >
                  {sectionLabels[section]}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <p className="contact-line">
          Open to conversations about medtech product leadership, assistive
          technology and robotics communities. The quickest way to reach me is{' '}
          <a
            href="https://www.linkedin.com/in/susanasanchezr/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
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
