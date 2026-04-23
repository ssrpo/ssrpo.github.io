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
  const showInBetween = false

  return (
    <>
      {activeSection === 'about' && (
        <section className="section" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading" ref={sectionHeadingRef} tabIndex={-1}>
            What I do
          </h2>
          <p>
            I design robotic systems for real-world use, combining robotics
            engineering, software architecture and multidisciplinary
            coordination.
          </p>
          <p>
            My background spans research, industry and product environments,
            from assistive robotics to industrial and social robotics, with a
            constant focus on systems that are robust, understandable and
            deployable.
          </p>
          <p>
            I work across control, distributed software, experimentation,
            product framing and project steering, with a strong interest in the
            human realities that shape how technical systems are actually used.
          </p>
          <p>
            Concretely, this includes real-time control laws, robot-agnostic
            software architectures, teleoperation and supervision interfaces,
            perception and interaction modules, and the validation of systems
            on real robotic platforms rather than only in isolated prototypes.
          </p>
          <p>
            I have worked on collaborative robots in factories, mobile
            logistics robots, humanoid and social robots, and assistive
            manipulators for people with disabilities. Across these different
            contexts, I keep returning to the same question: how can robotics
            become both technically strong and genuinely useful in the lives of
            the people who interact with it?
          </p>
          <p>
            My work also often sits at the interface between disciplines. I am
            comfortable translating between researchers, engineers, users,
            clinicians, product stakeholders, partners and clients, and I see
            that translation as part of the technical work, not as something
            separate from it.
          </p>
          <p>
            Alongside project work, I contribute through expert review,
            community coordination and association projects, from France 2030
            and ROSCon France to user-centered and cultural initiatives around
            robotics. Together, these activities reflect the broader vision
            behind my work: robotics as an engineering discipline, but also as
            a human, social and collective practice.
          </p>
        </section>
      )}

      {activeSection === 'recommendations' && (
        <section className="section" id="recommendations" aria-labelledby="recommendations-heading">
          <h2 id="recommendations-heading" ref={sectionHeadingRef} tabIndex={-1}>
            What They Say
          </h2>
          <p>
            Selected words from collaborators across research, product and
            industrial environments. These recommendations reflect the same
            patterns I try to bring to projects: technical depth, product
            clarity, interdisciplinary thinking and care for people.
          </p>
          <div className="quote-grid">
            <article className="quote-card">
              <p className="quote-text">
                “une vision transverse de la robotique qui intègre pleinement
                les sciences humaines”
              </p>
              <p className="quote-meta">David Gouaillier · ORTHOPUS</p>
            </article>
            <article className="quote-card">
              <p className="quote-text">
                “First impressed by her robotics and software engineering
                skills, we rapidly were amazed how quick she learned HRI”
              </p>
              <p className="quote-meta">Marine Chamoux · SoftBank Robotics Europe</p>
            </article>
            <article className="quote-card">
              <p className="quote-text">
                “I would describe Susana as a software engineer with a strong
                product mindset.”
              </p>
              <p className="quote-meta">Miriam Bilać · SoftBank Robotics Europe</p>
            </article>
            <article className="quote-card">
              <p className="quote-text">
                “Elle sait également prendre les décisions qu'il faut au bon moment.”
              </p>
              <p className="quote-meta">Clément Hénichard · Niryo</p>
            </article>
            <article className="quote-card">
              <p className="quote-text">
                “Susana can break down complex problems into simple terms,
                making presentations much clearer.”
              </p>
              <p className="quote-meta">Damien Toomey · SoftBank Robotics Europe</p>
            </article>
          </div>
        </section>
      )}

      {showInBetween && activeSection === 'in-between' && (
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

      {activeSection === 'industrial-robotics' && (
        <section className="section" id="industrial-robotics" aria-labelledby="industrial-robotics-heading">
          <h2 id="industrial-robotics-heading" ref={sectionHeadingRef} tabIndex={-1}>
            <span className="section-heading-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5h4v4H8zM12 7h4l2 2v3l-3 2-2 5h-2l1-5-2-2V9z" />
              </svg>
            </span>
            Industrial robotics
          </h2>
          <p>
            A significant part of my experience is rooted in industrial
            robotics, where software architecture, systems integration,
            deployment constraints and technical leadership all matter at once.
          </p>
          <p>
            At{' '}
            <a href="https://niryo.com/nate/" target="_blank" rel="noreferrer">
              Niryo
            </a>
            , I worked on Ned2, leading the software roadmap around that robot,
            coordinated a software team of 7 people, improved quality and
            validation processes, and contributed to architecture decisions that
            later fed into Niryo&apos;s more recent{' '}
            <a href="https://niryo.com/nate/" target="_blank" rel="noreferrer">
              Nate
            </a>{' '}
            platform. Nate reflects a direction that is very close to my own
            vision of industrial robotics: modular, deployable and built around
            real operational needs.
          </p>
          <p>
            At{' '}
            <a href="https://www.movu-robotics.com/en-US" target="_blank" rel="noreferrer">
              Movu Robotics
            </a>
            , I worked on mobile logistics robots in a constrained production
            environment, combining ROS-based state machines, RGB-D and lidar
            perception, human tracking and technical coordination across a small
            multidisciplinary team.
          </p>
          <p>
            Earlier, at{' '}
            <a
              href="https://list.cea.fr/en/page/cortex-a-software-suite-for-faster-and-easier-robot-controller-engineering/"
              target="_blank"
              rel="noreferrer"
            >
              CEA-List
            </a>
            , I built my foundations in robotic control, programming by
            demonstration, dynamic modeling and real-time modular C++ software
            for industrial robot controller engineering.
          </p>
          <p>
            Across these environments, what has remained constant is my interest
            in systems that work beyond the prototype stage: reliable software,
            clear interfaces between teams and decisions made with deployment in
            mind from the start.
          </p>

          <h3>What this experience includes</h3>
          <ul className="focus-list">
            <li>Architecture of complex robotic software systems in C++, Python and ROS</li>
            <li>Coordination between software, hardware, UX, production and prospective clients</li>
            <li>Validation, quality and deployment thinking for robots used beyond the lab</li>
            <li>Perception, navigation and interaction for robots in constrained operational environments</li>
          </ul>
        </section>
      )}

      {activeSection === 'assistive-robotics' && (
        <section className="section" id="assistive-robotics" aria-labelledby="assistive-robotics-heading">
          <h2 id="assistive-robotics-heading" ref={sectionHeadingRef} tabIndex={-1}>
            <span className="section-heading-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-2 6h4l2 3v7h-2v-5h-1l-1 5h-2l1-5H9v5H7v-7l3-3Z" />
              </svg>
            </span>
            Assistive robotics
          </h2>
          <p>
            Assistive robotics has been a long-running thread in my work, from
            my Ph.D. on human-robot comanipulation in industrial settings to my
            current work on robotic assistance for people with disabilities.
          </p>
          <p>
            My doctoral research focused on helping people work with
            collaborative robots in factories through more intuitive physical
            interaction. The core question was how to make cobots easier to
            guide, more comfortable to work with and more teachable through
            demonstration instead of rigid programming alone.
          </p>
          <p>
            In that work, I explored comanipulation scenarios where a person and
            a collaborative robot share a task, and proposed methods to create
            robot assistance skills by demonstration. A central contribution was
            an iterative approach based on kinesthetic teaching and displacement
            splines, allowing workers to teach virtual guides that support the
            robot during the task while preserving flexibility and comfort.
          </p>
          <p>
            Today, this vision continues in a different context through the{' '}
            <a href="https://orthopus.com/explorer/" target="_blank" rel="noreferrer">
              Extender
            </a>{' '}
            project at ISIR, where assistive robotics is directed toward daily
            autonomy. The goal is to help wheelchair users operate a robotic arm
            in real life, through control interfaces and interaction strategies
            that are technically robust but also usable, safe and respectful of
            the user&apos;s own way of acting.
          </p>
          <p>
            What connects the Ph.D. and the current work is the same underlying
            belief: assistance is not about replacing human agency. It is about
            building robotic systems that adapt to people, learn from how they
            move and collaborate, and provide support without taking over.
          </p>

          <h3>What this work is about</h3>
          <ul className="focus-list">
            <li>Human-robot comanipulation and collaborative assistance in real tasks</li>
            <li>Teaching robot skills by demonstration rather than relying only on explicit programming</li>
            <li>Designing assistive behaviors that improve comfort, intuitiveness and trust</li>
            <li>Bridging industrial cobot research and today&apos;s assistive robotics for daily autonomy</li>
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
            <span className="section-heading-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M6 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm12 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM12 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 8c3.5 0 6 1.6 6 4v2h-2v-2c0-1.1-1.7-2-4-2s-4 .9-4 2v2H6v-2c0-2.4 2.5-4 6-4Z" />
              </svg>
            </span>
            Social & Interactive Robotics
          </h2>
          <p className="interest-description">
            Another important thread in my work is social and humanoid robotics,
            where interaction quality, context awareness and embodiment matter
            as much as technical performance. These experiences continue to
            shape how I think about trust, expressivity and human-robot
            relationships.
          </p>
          <div className="robot-entry">
            <h3 className="interest-title">SoftBank Robotics Europe</h3>
            <div className="robot-meta">Humanoid and social robotics in real-world contexts</div>
            <p className="robot-description">
              At SoftBank Robotics Europe, I worked on perception and
              interaction modules for humanoid and social robots, especially
              around Pepper. The work combined C++ and Python development with
              context understanding, environment analysis and expressive
              interaction design.
            </p>
            <p className="robot-description">
              A strong part of this work focused on expressive voice and social
              interaction, combining robotics with affective computing, natural
              language processing and human-robot interaction research. It also
              included collaboration with PhD researchers in the H2020 ANIMATAS
              project and supervision of student work.
            </p>
            <ul className="robot-sublist">
              <li>Environment awareness and perception strategies for social interaction</li>
              <li>Research in affective computing, emotion theories and NLP for robotics</li>
              <li>Expressive TTS systems using machine learning and deep learning</li>
              <li>Contextual prosody modulation and emotion-aware voice synthesis</li>
              <li>Collaboration with PhD researchers in the H2020 ANIMATAS project</li>
            </ul>
          </div>

          <div className="robot-entry">
            <h3 className="interest-title">ISIR and humanoid/social interaction research</h3>
            <div className="robot-meta">Humanoid and assistive interaction in research settings</div>
            <p className="robot-description">
              At ISIR, this line of interest continues through interaction work
              around humanoid and social robots, including robots designed for
              healthcare and assistive environments. What matters to me here is
              not the robot as an object, but the quality of the relationship it
              creates with users, caregivers and surrounding teams.
            </p>
            <p className="robot-description">
              This work extends questions I have been exploring for years:
              how embodied systems are perceived, how interaction becomes more
              intuitive and how technical design can support social presence
              without becoming superficial or overly scripted.
            </p>
            <ul className="robot-sublist">
              <li>Humanoid and social interaction as a complement to control and systems work</li>
              <li>Attention to perception, expressivity and trust in embodied robotics</li>
              <li>Experience bridging engineering, research and human-centered design questions</li>
              <li>Continuity between social robotics and today&apos;s assistive robotics work</li>
            </ul>
          </div>
        </section>
      )}

      {activeSection === 'ecosystem' && (
        <section className="section" id="ecosystem" aria-labelledby="ecosystem-heading">
          <h2 id="ecosystem-heading" ref={sectionHeadingRef} tabIndex={-1}>
            Engagements
          </h2>
          <p>
            Beyond project work, I also contribute to the robotics ecosystem
            through expert review, community coordination and user-centered
            associations. These roles complement my engineering work by keeping
            me connected to strategic questions, technical communities and real
            users of robotics systems.
          </p>
          <p>
            I contribute as an expert reviewer in robotics and AI within the{' '}
            <a href="https://www.info.gouv.fr/grand-dossier/france-2030/gouvernance-unifiee" target="_blank" rel="noreferrer">
              France 2030
            </a>{' '}
            ecosystem, where projects are assessed through the lens of technical
            maturity, robustness and deployment potential.
          </p>
          <p>
            I am also a coordinator for{' '}
            <a href="https://roscon.ros.org/fr/2026/" target="_blank" rel="noreferrer">
              ROSCon France
            </a>
            , contributing to organization, partner and sponsor coordination,
            and to the broader dynamics of the ROS-speaking robotics community.
          </p>
          <p>
            On the assistive side, I am a member of the{' '}
            <a
              href="https://www.helloasso.com/associations/paris-cybathletique-club"
              target="_blank"
              rel="noreferrer"
            >
              Paris Cyberathletic Club
            </a>
            , an association that helps keep my work anchored in practical,
            embodied and user-centered robotics.
          </p>
          <p>
            I am also involved in{' '}
            <a href="https://lecercledesrobotsdisparus.org/" target="_blank" rel="noreferrer">
              Le cercle des robots disparus
            </a>
            , a new association project dedicated to the reuse of robots and
            scientific equipment for education, art and social impact.
          </p>

          <h3>How these roles complement my work</h3>
          <ul className="focus-list">
            <li>Evaluating robotics and AI projects beyond novelty alone, with attention to maturity and usefulness</li>
            <li>Contributing to technical communities around open robotics tools and shared practices</li>
            <li>Staying connected to users, associations and communities that shape assistive robotics in practice</li>
            <li>Bridging strategic, technical and human perspectives across the ecosystem</li>
          </ul>
        </section>
      )}

      {activeSection === 'cercle' && (
        <section className="section" id="cercle" aria-labelledby="cercle-heading">
          <h2 id="cercle-heading" ref={sectionHeadingRef} tabIndex={-1}>
            Le cercle des robots disparus
          </h2>
          <p>
            <a href="https://lecercledesrobotsdisparus.org/" target="_blank" rel="noreferrer">
              Le cercle des robots disparus
            </a>{' '}
            is a new association project dedicated to the reuse of robots and
            scientific equipment for education, art and social impact.
          </p>
          <p>
            This project reflects something I care about deeply: giving
            technological objects a second life and creating new forms of access
            to robotics outside the usual product and research pipelines.
            Robots do not have to remain locked in labs, demos or obsolete
            inventories to stay meaningful.
          </p>
          <p>
            For me, the association also extends a broader vision of robotics:
            one that values transmission, cultural imagination and social
            utility alongside engineering. It opens space for education,
            artistic exploration and collective reuse, while keeping technical
            objects alive in new contexts and new stories.
          </p>
          <p>
            I also see it as a way of generating attention around another side
            of robotics: memory, reuse and cultural life. Forgotten machines
            can become educational, artistic and social entry points into
            robotics again.
          </p>

          <h3>Why this matters to me</h3>
          <ul className="focus-list">
            <li>Creating new access points to robotics for education and public engagement</li>
            <li>Giving robots and scientific equipment a second life through reuse</li>
            <li>Building bridges between engineering, art and social impact</li>
            <li>Making robotics culture richer, more open and more collective</li>
          </ul>
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
            <h3 className="interest-title">Robots and interactive machines</h3>
            <p className="interest-description">
              Since I was a teenager, I have been drawn to building robots,
              interactive objects and machines that do something in the world
              rather than stay abstract. Long before every project was carefully
              documented, I was already fascinated by the encounter between a
              machine and the person facing it.
            </p>
            <p className="interest-description">
              What has stayed constant through the years is this conviction: the
              most important thing about machines is not the machine itself, but
              the human relationship it creates. This is why robots,
              interactive art, embodied systems and unusual interfaces have
              always felt close to my robotics work.
            </p>
            <p className="interest-description">
              I am especially drawn to projects where machines become occasions
              for attention, curiosity and shared experience. A good trace of
              that mindset is the Museomix project below, at the crossroads of
              interactive installation, collective creation and human-centered
              experimentation.
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
