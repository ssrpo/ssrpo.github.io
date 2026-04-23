import type { RefObject } from 'react'
import type { PublicationGroup, SectionId } from '../types/content'

type SectionContentProps = {
  activeSection: SectionId
  baseUrl: string
  publicationGroups: PublicationGroup[]
  sectionHeadingRef: RefObject<HTMLHeadingElement | null>
}

export function SectionContent({
  activeSection,
  baseUrl,
  publicationGroups,
  sectionHeadingRef,
}: SectionContentProps) {
  return (
    <>
      {activeSection === 'about' && (
        <section className="section" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading" ref={sectionHeadingRef} tabIndex={-1}>
            About
          </h2>
          <p>
            I design robotic systems for real-world use, with a profile that
            combines robotics engineering, software architecture and
            multidisciplinary coordination.
          </p>
          <p>
            My background spans research, industry and product environments. I
            have worked on assistive robotic manipulators, industrial robot
            software, mobile logistics robots and social robots, with a common
            thread: making complex systems robust, understandable and deployable.
          </p>
          <p>
            I work comfortably across command and control, distributed software,
            experimentation, product framing and project steering. That includes
            real-time robotics development in C++, ROS 2 and Python, but also
            translating constraints between engineers, researchers, users,
            clinicians, partners and clients.
          </p>
          <p>
            I care about systems that are technically rigorous and also usable
            in practice. For me, a good robotic system is not only a good demo
            or a good paper. It is a system that can be tested, maintained,
            trusted and integrated into a real environment.
          </p>
          <p>
            Alongside this technical work, I also contribute as an expert
            reviewer in robotics and AI for France 2030 and as a coordinator
            for ROSCon France. These roles reflect a part of my profile I value
            deeply: connecting technical depth with ecosystem, strategy and
            collective progress.
          </p>
        </section>
      )}

      {activeSection === 'in-between' && (
        <section className="section" id="in-between" aria-labelledby="in-between-heading">
          <h2 id="in-between-heading" ref={sectionHeadingRef} tabIndex={-1}>
            In the In-Between
          </h2>
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
        <section className="section" id="current-work" aria-labelledby="current-work-heading">
          <h2 id="current-work-heading" ref={sectionHeadingRef} tabIndex={-1}>
            Current role — Robotics Research Engineer
          </h2>
          <p>
            ISIR · Sorbonne University, Paris
          </p>
          <p>
            I currently work on the control and software architecture of
            assistive robotic manipulators at ISIR (Sorbonne University),
            within the{' '}
            <a
              href="https://orthopus.com/explorer/"
              target="_blank"
              rel="noreferrer"
            >
              Extender
            </a>{' '}
            project. The goal is to enable wheelchair users to perform everyday
            tasks using an assistive robotic arm deployed in real-world
            contexts.
          </p>
          <p>
            This work sits at the intersection of robotic control, software
            modularity, user studies and clinical realities. It requires both
            technical depth and close coordination between laboratory,
            industrial and care-oriented stakeholders.
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
            <li>
              Shared software foundations deployed across several robot platforms
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
            <li>
              Experimental design shaped by user, clinical and ecological constraints
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
            <li>
              Coordination across researchers, engineers, clinicians and industrial partners
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
            <li>
              Coordinator for ROSCon France and expert reviewer in robotics and AI for France 2030
            </li>
          </ul>
        </section>
      )}

      {activeSection === 'publications' && (
        <section className="section" id="publications" aria-labelledby="publications-heading">
          <h2 id="publications-heading" ref={sectionHeadingRef} tabIndex={-1}>
            Publications & Videos
          </h2>
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
        <section className="section" id="social-robotics" aria-labelledby="social-robotics-heading">
          <h2 id="social-robotics-heading" ref={sectionHeadingRef} tabIndex={-1}>
            Social & Interactive Robotics
          </h2>
          <p className="interest-description">
            I have worked with iconic social robots designed to interact with
            people in expressive and situated ways. These experiences shaped how
            I think about physical presence, context, trust and human–robot
            rapport, and they continue to inform my current work.
          </p>
          <div className="robot-entry">
            <h3 className="interest-title">
              <a
                href="https://aldebaran.com/en/"
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
            <div className="robot-image">
              <img
                src={`${baseUrl}nao.jpg`}
                alt="NAO humanoid robot used for research and education"
                loading="lazy"
              />
            </div>
          </div>

          <div className="robot-entry">
            <h3 className="interest-title">
              <a
                href="https://us.softbankrobotics.com/pepper"
                target="_blank"
                rel="noreferrer"
              >
                Pepper robot (SoftBank Robotics)
              </a>
            </h3>
            <div className="robot-meta">Social interaction robot</div>
            <p className="robot-description">
              At SoftBank Robotics Europe, my work focused on perception,
              interaction and expressivity for the Pepper robot, with the goal
              of creating richer and more contextual interactions.
            </p>
            <h4 className="interest-subtitle">
              Enhancing expressivity and human–robot interaction
            </h4>
            <p className="robot-description">
              I contributed to environment awareness, perception and expressive
              voice interaction, combining robotics engineering with affective
              computing, natural language processing and human–robot interaction
              research.
            </p>
            <ul className="robot-sublist">
              <li>Environment awareness and perception strategies for social interaction</li>
              <li>Research in affective computing, emotion theories and NLP for robotics</li>
              <li>Expressive TTS systems using machine learning and deep learning</li>
              <li>Contextual prosody modulation and emotion-aware voice synthesis</li>
              <li>Collaboration with PhD researchers in the H2020 ANIMATAS project</li>
            </ul>
            <p className="robot-description">
              I also supervised master’s students and collaborated with PhD
              researchers, in a setting where technology, psychology and design
              met very directly.
            </p>
            <div className="robot-image">
              <img
                src={`${baseUrl}pepper.jpg`}
                alt="Pepper social robot standing in an indoor environment"
                loading="lazy"
              />
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
              with wonder in healthcare and social environments. At Sorbonne
              University I am also involved in interaction-related work around
              these robots, exploring playful and meaningful human-robot
              engagement.
            </p>
            <div className="robot-image">
              <img
                src={`${baseUrl}mirokajpg`}
                alt="Mirokaï assistive companion robot concept"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {activeSection === 'interests' && (
        <section className="section" id="interests" aria-labelledby="interests-heading">
          <h2 id="interests-heading" ref={sectionHeadingRef} tabIndex={-1}>
            Interests
          </h2>
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
            <div className="photo-grid">
              <img
                src={`${baseUrl}insta.png`}
                alt="Photography collage from the mindful.lente Instagram project"
                loading="lazy"
              />
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
    </>
  )
}
