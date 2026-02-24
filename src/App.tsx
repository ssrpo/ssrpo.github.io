import { useEffect, useState } from 'react'
import { getPublicationGroups } from './content/siteContent'
import { SectionContent } from './components/SectionContent'
import { Sidebar } from './components/Sidebar'
import type { SectionId } from './types/content'
import './App.css'

function App() {
  const baseUrl = import.meta.env.BASE_URL
  const [activeSection, setActiveSection] = useState<SectionId>('about')

  useEffect(() => {
    let frameId = 0

    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (event.clientX / innerWidth) * 100
      const y = (event.clientY / innerHeight) * 100

      if (frameId) {
        cancelAnimationFrame(frameId)
      }

      frameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--spotlight-x', `${x}%`)
        document.documentElement.style.setProperty('--spotlight-y', `${y}%`)
      })
    }

    window.addEventListener('mousemove', handleMove)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [])

  const publicationGroups = getPublicationGroups(baseUrl)

  return (
    <div className="page vibrant">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="spotlight" aria-hidden="true" />
      <div className="layout">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main id="content" className="right-panel" aria-label="Content">
          <SectionContent
            activeSection={activeSection}
            baseUrl={baseUrl}
            publicationGroups={publicationGroups}
          />
        </main>
      </div>
    </div>
  )
}

export default App
