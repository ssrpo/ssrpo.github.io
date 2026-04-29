import { socialLinks } from '../content/siteContent'
import { sectionPanelIds } from '../types/content'
import type { SectionId } from '../types/content'

type SidebarProps = {
  activeSection: SectionId
  setActiveSection: (section: SectionId) => void
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const showInBetween = false

  return (
    <aside className="left-panel" aria-label="Intro">
      <div className="hero-text">
        <p className="eyebrow">Interactive systems · Software · Mindful crafting</p>
        <h1>
          Susana
          <br />
          <span className="hero-last-name">Sánchez Restrepo</span>
        </h1>
        <p className="subtitle">
          I design complex interactive systems that work with people, not the
          other way around.
        </p>
        <nav className="page-nav" aria-label="Sections">
          <div className="nav-group">
            <div className="nav-group-label">Profile</div>
            <button
              type="button"
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
              aria-current={activeSection === 'about' ? 'true' : undefined}
              aria-controls={activeSection === 'about' ? sectionPanelIds.about : undefined}
            >
              What I do
            </button>
            <button
              type="button"
              className={`nav-link ${activeSection === 'user-centered' ? 'active' : ''}`}
              onClick={() => setActiveSection('user-centered')}
              aria-current={activeSection === 'user-centered' ? 'true' : undefined}
              aria-controls={
                activeSection === 'user-centered'
                  ? sectionPanelIds['user-centered']
                  : undefined
              }
            >
              User-Centered Development
            </button>
            <button
              type="button"
              className={`nav-link ${activeSection === 'publications' ? 'active' : ''}`}
              onClick={() => setActiveSection('publications')}
              aria-current={activeSection === 'publications' ? 'true' : undefined}
              aria-controls={
                activeSection === 'publications' ? sectionPanelIds.publications : undefined
              }
            >
              Publications
            </button>
            <button
              type="button"
              className={`nav-link ${activeSection === 'recommendations' ? 'active' : ''}`}
              onClick={() => setActiveSection('recommendations')}
              aria-current={activeSection === 'recommendations' ? 'true' : undefined}
              aria-controls={
                activeSection === 'recommendations'
                  ? sectionPanelIds.recommendations
                  : undefined
              }
            >
              What They Say
            </button>
          </div>
          {showInBetween && (
            <div className="nav-subgroup" role="group" aria-label="About subsections">
              <button
                type="button"
                className={`nav-link sub ${
                  activeSection === 'in-between' ? 'active' : ''
                }`}
                onClick={() => setActiveSection('in-between')}
                aria-current={activeSection === 'in-between' ? 'true' : undefined}
                aria-controls={
                  activeSection === 'in-between' ? sectionPanelIds['in-between'] : undefined
                }
              >
                In the In-Between
              </button>
            </div>
          )}
          <div className="nav-group">
            <div className="nav-group-label">Interactive systems</div>
            <button
              type="button"
              className={`nav-link ${activeSection === 'current' ? 'active' : ''}`}
              onClick={() => setActiveSection('current')}
              aria-current={activeSection === 'current' ? 'true' : undefined}
              aria-controls={activeSection === 'current' ? sectionPanelIds.current : undefined}
            >
              Current Role
            </button>
            <button
              type="button"
              className={`nav-link ${activeSection === 'assistive-robotics' ? 'active' : ''}`}
              onClick={() => setActiveSection('assistive-robotics')}
              aria-current={activeSection === 'assistive-robotics' ? 'true' : undefined}
              aria-controls={
                activeSection === 'assistive-robotics'
                  ? sectionPanelIds['assistive-robotics']
                  : undefined
              }
            >
              Assistive & Medical Devices
            </button>
            <button
              type="button"
              className={`nav-link ${activeSection === 'social-robotics' ? 'active' : ''}`}
              onClick={() => setActiveSection('social-robotics')}
              aria-current={activeSection === 'social-robotics' ? 'true' : undefined}
              aria-controls={
                activeSection === 'social-robotics' ? sectionPanelIds['social-robotics'] : undefined
              }
            >
              Human-Robot Interaction
            </button>
            <button
              type="button"
              className={`nav-link ${activeSection === 'industrial-robotics' ? 'active' : ''}`}
              onClick={() => setActiveSection('industrial-robotics')}
              aria-current={activeSection === 'industrial-robotics' ? 'true' : undefined}
              aria-controls={
                activeSection === 'industrial-robotics'
                  ? sectionPanelIds['industrial-robotics']
                  : undefined
              }
            >
              Industrial Robotics
            </button>
          </div>
          <div className="nav-group">
            <div className="nav-group-label">Beyond Projects</div>
            <button
              type="button"
              className={`nav-link ${activeSection === 'ecosystem' ? 'active' : ''}`}
              onClick={() => setActiveSection('ecosystem')}
              aria-current={activeSection === 'ecosystem' ? 'true' : undefined}
              aria-controls={activeSection === 'ecosystem' ? sectionPanelIds.ecosystem : undefined}
            >
              Engagements
            </button>
            <button
              type="button"
              className={`nav-link ${activeSection === 'cercle' ? 'active' : ''}`}
              onClick={() => setActiveSection('cercle')}
              aria-current={activeSection === 'cercle' ? 'true' : undefined}
              aria-controls={activeSection === 'cercle' ? sectionPanelIds.cercle : undefined}
            >
              Le Cercle des Robots Disparus
            </button>
            <button
              type="button"
              className={`nav-link ${activeSection === 'interests' ? 'active' : ''}`}
              onClick={() => setActiveSection('interests')}
              aria-current={activeSection === 'interests' ? 'true' : undefined}
              aria-controls={activeSection === 'interests' ? sectionPanelIds.interests : undefined}
            >
              Interests
            </button>
          </div>
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
