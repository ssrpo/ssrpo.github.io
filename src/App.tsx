import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const baseUrl = import.meta.env.BASE_URL
  const [activeSection, setActiveSection] = useState<
    | 'home'
    | 'about'
    | 'in-between'
    | 'current'
    | 'publications'
    | 'social-robotics'
    | 'interests'
  >('about')

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

  // Bento content (copied from the provided data source).
  const socialLinks = [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/susanasanchezr/',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5a2.48 2.48 0 1 1 0 4.96 2.48 2.48 0 0 1 0-4.96ZM3 9h3.96v12H3V9Zm7.5 0h3.8v1.64h.05c.53-1 1.83-2.04 3.77-2.04 4.03 0 4.78 2.65 4.78 6.1V21h-3.96v-5.64c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21H10.5V9Z" />
        </svg>
      ),
    },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.fr/citations?user=YJdKzGAAAAAJ&hl=fr',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm0 10.5L5.2 9 12 5.5 18.8 9 12 13.5ZM6 16.5v2.1C6 20.99 8.69 22 12 22s6-1.01 6-3.4v-2.1l-6 3.2-6-3.2Z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/ssrpo',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.36-1.18-3.36-1.18-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.64-1.33-2.22-.26-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.69-4.57 4.94.36.32.69.94.69 1.9v2.82c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/mindful.lente',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5.25-3.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
        </svg>
      ),
    },
  ]

  const publicationGroups = [
    {
      title: 'Thesis & Academic',
      description: 'Foundational academic work.',
      items: [
        {
          title: 'PhD thesis (2018)',
          meta: 'Thesis · Robotics · 2018',
          label: 'PDF',
          image: `${baseUrl}phd.webp`,
          href: 'https://theses.hal.science/tel-01785574',
        },
      ],
    },
    {
      title: 'Articles & Writing',
      description: 'Long-form writing and essays.',
      items: [
        {
          title: 'Heart Robotics (Medium)',
          meta: 'Article · Medium',
          label: 'Article',
          image: `${baseUrl}heart.png`,
          href: 'https://heart-robotics.medium.com/',
        },
        {
          title: 'Collaborer avec la machine',
          meta: 'Article · FNAC',
          label: 'Book page',
          image: `${baseUrl}fnac.jpg`,
          href: 'https://www.fnac.com/a14942090/Anne-Sophie-Dubey-Collaborer-avec-la-machine-quels-changements-pour-l-operateur',
        },
      ],
    },
    {
      title: 'Talks & Slides',
      description: 'Talks and slide decks.',
      items: [
        {
          title: 'Robotique collaborative (SlideShare)',
          meta: 'Slides · SlideShare',
          label: 'Slides',
          image: `${baseUrl}slides.png`,
          href: 'https://www.slideshare.net/La_Fabrique_Industrie/la-robotique-collaborative-comme-moyen-de-soulager-loprateur',
        },
      ],
    },
    {
      title: 'Videos',
      description: 'Video entry points.',
      items: [
        {
          title: 'YouTube channel',
          meta: 'Video · YouTube',
          label: 'Channel',
          image: 'https://i.ytimg.com/vi/0AzRyneaVMY/hqdefault.jpg',
          href: 'https://youtube.com/@SusanaSanchezRestrepo',
        },
        {
          title: 'Robotics webinar (YouTube)',
          meta: 'Video · YouTube',
          label: 'Webinar',
          image: 'https://i.ytimg.com/vi/0AzRyneaVMY/hqdefault.jpg',
          href: 'https://www.youtube.com/watch?v=0AzRyneaVMY',
        },
      ],
    },
  ]

  return (
    <div className={`page vibrant ${activeSection === 'home' ? 'home-page' : ''}`}>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="spotlight" aria-hidden="true" />
      <div className={`layout ${activeSection === 'home' ? 'layout-home' : ''}`}>
        {activeSection !== 'home' && (
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
                    aria-current={
                      activeSection === 'in-between' ? 'true' : undefined
                    }
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
                  className={`nav-link ${
                    activeSection === 'social-robotics' ? 'active' : ''
                  }`}
                  onClick={() => setActiveSection('social-robotics')}
                  aria-current={
                    activeSection === 'social-robotics' ? 'true' : undefined
                  }
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
                  className={`nav-link ${
                    activeSection === 'publications' ? 'active' : ''
                  }`}
                  onClick={() => setActiveSection('publications')}
                  aria-current={
                    activeSection === 'publications' ? 'true' : undefined
                  }
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
        )}

        <main
          id="content"
          className={`right-panel ${activeSection === 'home' ? 'right-panel-home' : ''}`}
          aria-label="Content"
        >
          {activeSection === 'about' && (
            <section className="section" id="about">
              <h2>About</h2>
              <p>
                I design assistive robotic systems with a human-first mindset,
                working at the intersection of robotics, software and mindful
                crafting.
              </p>
              <p>
                My current work focuses on the control of robotic manipulators
                for assistive applications, particularly within the Extender
                project. The goal is simple to state and complex to achieve:
                enabling people who rely on wheelchairs to perform everyday
                tasks using a robotic arm that feels intuitive, safe and
                supportive in real life.
              </p>
              <p>
                This work requires more than writing control laws or building
                software architectures. It means staying close to users,
                clinicians and real-world contexts and letting those
                interactions shape technical decisions. I spend my time moving
                between real-time control in C++, modular robotic software
                architectures, experimentation tools and continuous dialogue
                with the people these systems are meant to support.
              </p>
              <p>
                My background spans robotics, software engineering, human–
                machine interaction and product thinking. I care deeply about
                systems that are robust and scalable, but also about clarity,
                embodiment and trust. For me, a successful system is not only
                one that works, but one that fits naturally into human routines
                without demanding constant attention.
              </p>
              <p>
                I enjoy working in this in-between space — where engineering
                meets lived experience, where constraints meet creativity and
                where machines stop being impressive objects and start becoming
                quiet companions. This balance between technical rigor and
                human presence
                is what keeps my work grounded and meaningful.
              </p>
            </section>
          )}

          {activeSection === 'in-between' && (
            <section className="section" id="in-between">
              <h2>In the In-Between</h2>
              <p>
                I’ve tried to define my role many times. Engineer, Researcher,
                Designer, Product person — each label captures a part of what I
                do and none of them tells the full story. I work in-between them.
              </p>
              <p>
                My work lives in the spaces between roles. I design and build
                machines, but I also think about how they are perceived,
                trusted and integrated into everyday life. I write code, but I
                also listen, observe, question and adjust. I care as much about{' '}
                system behavior as I do about the relationships these systems
                create with the people who use them.
              </p>
              <p>
                Rather than choosing a single title, I’ve chosen a way of
                working. One that values care over speed, clarity over
                complexity and presence over abstraction.{' '}
                Mindful is not a skill set or a role — it’s a reminder to stay
                attentive to context, impact and the humans on the other side of
                the interface.
              </p>
              <p>
                This openness is intentional. It leaves room for learning, for
                evolution and for building systems that are{' '}
                technically sound while remaining deeply connected to real life.
              </p>
            </section>
          )}

          {activeSection === 'current' && (
            <section className="section" id="current-work">
              <h2>Current role — Robotics Research Engineer</h2>
              <p>
                ISIR · Sorbonne University, Paris
              </p>
              <p>
                I currently work on the control and software architecture of
                assistive robotic manipulators at ISIR (Sorbonne University),
                within the{' '}
                <a
                  href="https://orthopus.com/fr/explorer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Extender
                </a>{' '}
                project. 
                The project aims to enable wheelchair users to perform everyday
                tasks using an assistive robotic arm deployed in real-world
                contexts.
              </p>

              <h3>Technical activities</h3>
              <ul className="focus-list">
                <li>
                  Real-time control laws for assistive manipulators (C++ and ROS 2)
                </li>
                <li>Modular and robot-agnostic software architectures</li>
                <li>
                  Shared-control strategies for assistive manipulation
                </li>
                <li>
                  Web interfaces for teleoperation and experiments (FastAPI and React)
                </li>
              </ul>

              <h3>Research activities</h3>
              <ul className="focus-list">
                <li>
                  Research in shared control and assistive robotics
                </li>
                <li>
                  Bridging control, interaction and real-world usage
                </li>
                <li>
                  Scientific writing and paper submissions (ICRA)
                </li>
              </ul>

              <h3>Product & interdisciplinary coordination</h3>
              <ul className="focus-list">
                <li>
                  Translating user and clinical needs into technical decisions
                </li>
                <li>
                  Reference documentation linking user, clinical and technical
                  constraints
                </li>
                <li>
                  Contribution to project roadmap across user, clinical and technical
                  levels
                </li>
                <li>
                  Co-design sessions and experimental studies with users
                </li>
              </ul>

              <h3>Engagement & community</h3>
              <ul className="focus-list">
                <li>
                  Member of the{' '}
                  <a
                    href="https://www.helloasso.com/associations/paris-cybathletique-club"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Paris Cyberathletic Club
                  </a>
                </li>
                <li>
                  Participation in user-centered workshops and co-design events
                </li>
              </ul>
            </section>
          )}

          {activeSection === 'publications' && (
            <section className="section" id="publications">
              <h2>Publications & Videos</h2>
              <div className="section-intro">
                <p>
                  I write and share work at the intersection of robotics,
                  human–machine interaction and assistive technology — from
                  peer-reviewed research to practical
                  talks and long-form articles.
                </p>
                <p>
                  This page collects a few entry points. If you're new here,
                  start with the PhD thesis for depth, or the talks and
                  articles for a more accessible
                  overview.
                </p>
              </div>
              <div className="content-groups">
                {publicationGroups.map((group) => (
                  <section key={group.title} className="content-group">
                    <div className="group-header">
                      <h3>{group.title}</h3>
                      <p className="group-description">{group.description}</p>
                    </div>
                    <div className="card-list">
                      {group.items.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="card-link"
                          aria-label={item.title}
                        >
                          <div className="card-media" aria-hidden="true">
                            <img
                              src={item.image}
                              alt=""
                              loading="lazy"
                              width={160}
                              height={110}
                            />
                          </div>
                          <div className="card-body">
                            <div className="card-title">{item.title}</div>
                            <div className="card-meta">{item.meta}</div>
                            {item.label && (
                              <div className="card-label">{item.label}</div>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </section>
          )}

          {activeSection === 'social-robotics' && (
            <section className="section" id="social-robotics">
              <h2>Social & Interactive Robotics</h2>
              <p className="interest-description">
                I work with iconic social robots designed to interact with people
                in rich, expressive ways. These experiences teach me about physical
                presence, social context and human–robot rapport — lessons that
                continue to influence how I think about embodied interaction today.
              </p>
              <div className="robot-entry">
                <h3 className="interest-title">
                  <a
                    href="https://en.wikipedia.org/wiki/Nao_(robot)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    NAO robot (Aldebaran)
                  </a>
                </h3>
                <div className="robot-meta">Humanoid research platform</div>
                <p className="robot-description">
                  The NAO humanoid robot, developed by Aldebaran Robotics, is a
                  programmable platform used worldwide for research, education and
                  expressive interaction. Working with NAO taught me how movement,
                  speech and perception shape human-machine engagement.
                </p>
                <div className="robot-image" aria-hidden="true">
                  <img src={`${baseUrl}nao.jpg`} alt="" loading="lazy" />
                </div>
              </div>

              <div className="robot-entry">
                <h3 className="interest-title">
                  <a
                    href="https://en.wikipedia.org/wiki/Pepper_(robot)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pepper robot (Aldebaran)
                  </a>
                </h3>
                <div className="robot-meta">Social interaction robot</div>
                <p className="robot-description">
                  Pepper is a semi-humanoid robot designed to recognize basic human
                  emotions and engage people in everyday contexts. It was widely
                  showcased in retail, public spaces and research experiments
                  exploring social presence and robot-mediated interaction.
                </p>
                <h4 className="interest-subtitle">
                  Enhancing expressivity and human–robot interaction
                </h4>
                <p className="robot-description">
                  At Aldebaran Robotics, my work focused on enhancing the expressivity
                  and human–robot interaction experience of the Pepper robot.
                </p>
                <p className="robot-description">
                  On the technical side, I contributed to improving the robot’s
                  environment awareness and perception capabilities, enabling more
                  contextual and responsive interactions. I also worked on expressive
                  interaction through voice, combining research in emotion theories,
                  affective computing and natural language processing for robotics.
                </p>
                <p className="robot-description">
                  This included the development of expressive text-to-speech systems,
                  exploring contextual prosody modification, style transfer and
                  emotion conveyed through voice using machine learning and deep
                  learning approaches. These explorations were driven by the idea
                  that voice is a powerful carrier of intention, emotion and social
                  presence.
                </p>
                <ul className="robot-sublist">
                  <li>Environment awareness and perception strategies for social interaction</li>
                  <li>Research in affective computing, emotion theories and NLP for robotics</li>
                  <li>Expressive TTS systems using machine learning and deep learning</li>
                  <li>Contextual prosody modulation and emotion-aware voice synthesis</li>
                  <li>Collaboration with PhD researchers on persuasion in HRI (H2020 ANIMATAS project)</li>
                </ul>
                <p className="robot-description">
                  Beyond development and research, I supervised master’s students and
                  collaborated closely with PhD students within the European H2020
                  ANIMATAS project, exploring persuasion and social influence in
                  human–robot interaction.
                </p>
                <p className="robot-description">
                  This work sits at the crossroads of technology, psychology and
                  design — where robots become expressive artifacts and interaction
                  becomes a creative, relational experience rather than a purely
                  functional one.
                </p>
                <div className="robot-image" aria-hidden="true">
                  <img src={`${baseUrl}pepper.jpg`} alt="" loading="lazy" />
                </div>
              </div>

              <div className="robot-entry">
                <h3 className="interest-title">
                  <a href="https://enchanted.tools/" target="_blank" rel="noreferrer">
                    Enchanted Tools — Mirokaï robots
                  </a>
                </h3>
                <div className="robot-meta">Assistive companion robot</div>
                <p className="robot-description">
                  The Mirokaï robots, developed by Enchanted Tools, blend utility
                  with wonder to assist, engage and inspire in healthcare and social
                  environments. At Sorbonne University I’m also involved in
                  developing interactions with Miroki robots, exploring playful and
                  meaningful human-robot engagement.
                </p>
                <div className="robot-image" aria-hidden="true">
                  <img src={`${baseUrl}mirokajpg`} alt="" loading="lazy" />
                </div>
              </div>
            </section>
          )}

          {activeSection === 'interests' && (
            <section className="section" id="interests">
              <h2>Interests</h2>
              <div className="interest-intro">
                <p>
                  I believe most problems are design problems. They live in
                  relationships — between humans, machines, environments and the
                  stories we tell ourselves about how things should work.
                </p>
                <p>
                  These interests shape how I observe the world, how I collaborate
                  and how I design technical systems. They are part of my daily
                  practice as an engineer, researcher and interdisciplinary bridge.
                </p>
              </div>

              <div className="interest-block">
                <h3 className="interest-title">Interactive installation (Museomix 2013)</h3>
                <p className="interest-description">
                  An interactive installation exploring perception, presence and
                  embodied interaction. A hands-on way of thinking about how humans
                  relate to machines beyond interfaces. An early exploration of
                  collective creation, rapid prototyping and human-centered
                  experimentation in cultural spaces — a formative experience in
                  designing with constraints, people and real-world context.
                </p>
                <div className="video-embed">
                  <iframe
                    src="https://player.vimeo.com/video/79545850"
                    title="Interactive installation video"
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="interest-links">
                  <a
                    href="https://museomix.org/editions/2013/paris-2013/prototypes/buro9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buro9 prototype
                  </a>
                  <a
                    href="https://www.bertrandlanthiez.com/works/museomix-2013-archi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Museomix Archi
                  </a>
                </div>
              </div>

              <div className="interest-block">
                <h3 className="interest-title">Photography</h3>
                <div className="interest-links">
                  <a
                    href="https://instagram.com/mindful.lente"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram — mindful.lente
                  </a>
                </div>
                <p className="interest-description">
                  Photography as a way of observing the world slowly. Framing, light,
                  patience and attention — a personal practice of mindfulness and
                  perception.
                </p>
                <div className="photo-grid" aria-hidden="true">
                  <img src={`${baseUrl}insta.png`} alt="" loading="lazy" />
                </div>
              </div>

              <p className="interest-outro">
                All these practices feed back into my work. They influence how I
                design software architectures, how I think about robotic behavior and
                how I navigate interdisciplinary collaboration. Observing carefully,
                designing with care and staying grounded in real interactions are as
                important to me as writing code.
              </p>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
