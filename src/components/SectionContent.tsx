import type { RefObject } from 'react'
import explorerImage from '../assets/explorer.png'
import explorerManImage from '../assets/explorer_man.png'
import extenderUserImage from '../assets/extender_real.png'
import profileImage from '../assets/ssr_profile_isir.webp'
import { bloomDriveScreenshot, bloomRepoUrl, extenderOrgUrl } from '../content/siteContent'
import type { PublicationGroup, SectionId } from '../types/content'

type SectionContentProps = {
  activeSection: SectionId
  baseUrl: string
  publicationGroups: PublicationGroup[]
  sectionHeadingRef: RefObject<HTMLHeadingElement | null>
}

const impactTiles = [
  {
    value: '7 engineers',
    label: 'Software team I led at Niryo, owning the Ned2 roadmap and quality process.',
  },
  {
    value: '2 robots',
    label: 'Explorer and Kinova Gen3 run Bloom, with CI driving both simulations end to end.',
  },
  {
    value: '3 languages',
    label: 'Bloom runtime shells in English, Spanish and French, with accessible input profiles.',
  },
  {
    value: 'France 2030',
    label: 'Expert reviewer in robotics and AI, and coordinator of ROSCon France.',
  },
]

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
          <div className="section-header">
            <h2 id="about-heading" ref={sectionHeadingRef} tabIndex={-1}>
              What I do
            </h2>
            <div className="about-flow">
              <figure className="profile-portrait">
                <img
                  src={profileImage}
                  alt="Portrait of Susana Sanchez Restrepo"
                  loading="lazy"
                />
              </figure>
              <p className="section-lead">
                I lead software products for complex, regulated systems: medical
                devices and assistive robots that have to work for clinicians,
                patients and operators, not only in the lab.
              </p>
              <p>
                From October 2026, I am Senior Product Owner Software at{' '}
                <a href="https://www.echosens.com/" target="_blank" rel="noreferrer">
                  Echosens
                </a>{' '}
                in Paris. Before that I built and shipped Bloom, the operator
                interface of the Extender assistive robotics project at ISIR, led
                a software team in industrial robotics, and worked on humanoid and
                social robots. My background spans research, industry and product
                environments, with a constant focus on systems that are robust,
                understandable and deployable.
              </p>
              <p>
                I am most at home where technical complexity meets real users,
                operational constraints and the need to make good decisions
                collectively.
              </p>
            </div>
          </div>
          <div className="section-body">
            <ul className="impact-strip" aria-label="Selected impact">
              {impactTiles.map((tile) => (
                <li className="impact-tile" key={tile.value}>
                  <span className="impact-value">{tile.value}</span>
                  <span className="impact-label">{tile.label}</span>
                </li>
              ))}
            </ul>
            <blockquote className="pull-quote">
              <p>
                “Susana a un vrai mindset produit ! Elle ne reste pas cantonnée à
                la technique, elle cherche à comprendre les enjeux business et les
                besoins utilisateur.”
              </p>
              <footer>Yasmine Khansari · Lead UX, SoftBank Robotics Europe</footer>
            </blockquote>
            <div className="content-stack about-details">
              <p>
                Concretely, my work has covered product framing and roadmaps,
                specifications, real-time control laws, robot-agnostic software
                architectures, teleoperation and supervision interfaces, and
                validation on real platforms rather than only in isolated
                prototypes.
              </p>
              <p>
                I have worked on collaborative robots in factories, mobile
                logistics robots, humanoid and social robots, and assistive
                manipulators for people with disabilities. Across these different
                contexts, I keep returning to the same question: how can complex
                systems become both technically strong and genuinely useful for the
                people who interact with them?
              </p>
              <p>
                My work often sits at the interface between disciplines. I am
                comfortable translating between researchers, engineers, users,
                clinicians, product stakeholders, partners and clients, and I see
                that translation as part of the product work, not as something
                separate from it.
              </p>
              <p>
                Alongside project work, I contribute through expert review,
                community coordination and association projects, from France 2030
                and ROSCon France to the Paris Cybathlétique Club and cultural
                initiatives. Together, these activities reflect the broader vision
                behind my work: complex systems as technical objects, but also as
                human, social and collective realities.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'recommendations' && (
        <section className="section" id="recommendations" aria-labelledby="recommendations-heading">
          <div className="section-header">
            <h2 id="recommendations-heading" ref={sectionHeadingRef} tabIndex={-1}>
              What They Say
            </h2>
            <p className="section-lead">
              Selected words from product leaders, designers, engineers and
              partners I have worked with. What they describe is the pattern I
              try to bring to every product: judgement about what to build and
              when, technical depth, clarity for the people around the table, and
              care for the people on the other side of the interface.
            </p>
          </div>
          <div className="section-body">
            <div className="quote-grid card-stack">
              <article className="quote-card">
                <p className="quote-text">
                  “Susana a un vrai mindset produit ! Elle ne reste pas cantonnée
                  à la technique, elle cherche à comprendre les enjeux business et
                  les besoins utilisateur. Elle pose les bonnes questions,
                  challenge et creuse les sujets en profondeur.”
                </p>
                <p className="quote-meta">Yasmine Khansari · Lead UX, SoftBank Robotics Europe</p>
              </article>
              <article className="quote-card">
                <p className="quote-text">
                  “Son appétence pour les méthodologies de co-construction et
                  l'importance d'une posture user centric… et sa capacité socle à
                  cadrer et produire des solutions viables.”
                </p>
                <p className="quote-meta">Alexandre Joubert · CPO &amp; Head of Product</p>
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
            </div>
          </div>
        </section>
      )}

      {activeSection === 'user-centered' && (
        <section className="section" id="user-centered" aria-labelledby="user-centered-heading">
          <h2 id="user-centered-heading" ref={sectionHeadingRef} tabIndex={-1}>
            User-Centered Development
          </h2>
          <p>
            One constant across my work is the importance of the user. Whether
            I am building robotics systems, operator tools or software products,
            I do not see development as only a technical exercise. I see it as
            a process of understanding real situations, real constraints and the
            people who will live with the result.
          </p>
          <p>
            That perspective was already central in my Ph.D., where I worked on
            collaborative robots designed to assist people in factories through
            comanipulation and skill teaching by demonstration. The goal was not
            only to make the robot perform well, but to make collaboration more
            intuitive, comfortable and meaningful for the person working with
            it.
          </p>
          <p>
            This approach shaped my assistive robotics work on the Extender
            project, where technical choices were constantly driven by user
            workshops, clinical realities and the question of how a robotic arm
            can support daily autonomy without taking agency away from the
            person using it. Bloom, the operator interface I built for it, was
            designed around accessible input profiles and a review checklist
            before any screen reaches a user.
          </p>
          <p>
            It is also what I carry into product ownership in medtech: the
            product is not the feature list, but the experience a clinician or a
            patient has with the device, inside real workflows and real
            constraints.
          </p>
          <p>
            It has also shaped my software and product work. Through Banana Army
            and Rumble Studio, I spent a lot of time doing UX review, UX
            research, product framing, specification work and interface
            thinking. I worked on translating needs into concrete features,
            questioning assumptions, clarifying use cases and making sure the
            product experience stayed coherent from the user side as well as the
            technical side.
          </p>
          <p>
            This interest is also something I have cultivated more explicitly,
            including through a Google course on UX foundations. For me, UX is
            not separate from engineering. It is part of building better
            systems: systems that people can understand, trust and actually
            adopt.
          </p>
          <h3>How this appears in my work</h3>
          <ul className="focus-list">
            <li>User workshops, co-design sessions and field constraints integrated into technical decisions</li>
            <li>Product framing, use-case definition and specification work for software and robotics projects</li>
            <li>UX review and interface thinking for HMI, teleoperation and web-based tools</li>
            <li>Long-term focus on systems that support human agency rather than forcing rigid usage patterns</li>
          </ul>
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
          <div className="section-header">
            <h2 id="current-work-heading" ref={sectionHeadingRef} tabIndex={-1}>
              Current Role — Senior Product Owner Software
            </h2>
            <p className="section-meta">
              Echosens · Paris · from October 2026
            </p>
          </div>
          <div className="section-body section-blocks">
            <div className="content-stack">
              <p className="section-lead">
                From October 2026, I join{' '}
                <a href="https://www.echosens.com/" target="_blank" rel="noreferrer">
                  Echosens
                </a>{' '}
                in Paris as Senior Product Owner Software. Echosens develops
                FibroScan, a non-invasive medical device for the assessment of
                chronic liver disease, used by clinicians in more than 100
                countries.
              </p>
              <p>
                I own the software side of the product: turning clinical, user and
                business needs into a clear vision, roadmap and backlog, and
                prioritising with R&amp;D, clinical, regulatory, quality and market
                teams so that what ships is coherent, usable and compliant.
              </p>
              <p>
                This role brings together what I have practised across robotics
                and assistive technology: framing products for complex, regulated
                systems, keeping the user at the centre of technical decisions, and
                steering multidisciplinary teams from discovery to delivery.
              </p>
            </div>
          </div>

          <h3>What I focus on</h3>
          <ul className="focus-list">
            <li>Product ownership of medical-device software: vision, roadmap, backlog and release scope</li>
            <li>Discovery with clinicians, users and market teams, translated into specifications engineers can build</li>
            <li>Working within medical-device constraints: risk management, usability engineering and the software lifecycle</li>
            <li>Cross-functional alignment between R&amp;D, clinical, regulatory, quality and business stakeholders</li>
          </ul>

          <h3>Working in a regulated product</h3>
          <p>
            Medical-device software is shaped by a small set of frameworks:
            IEC 62304 for the software lifecycle, ISO 14971 for risk management,
            IEC 62366-1 for usability engineering, ISO 13485 for the quality
            system and the EU Medical Device Regulation for market access. For a
            product owner they are not paperwork at the end. They decide how a
            backlog is cut, what a release can contain, which user needs must be
            traced to a verified requirement and when a usability finding blocks
            a ship date.
          </p>
          <p>
            I met these frameworks on the Extender project, where the robotic arm
            is developed in a medical-device context with Orthopus, and I built
            Bloom&apos;s safety and usability decisions around risk: a latched STOP,
            one command owner per session, an audit log and a review checklist
            before a screen reaches a user. At Echosens I work inside a full
            medical-device quality system, and I treat these frameworks as part
            of the product, not as a constraint on it.
          </p>

          <h3>Why medtech</h3>
          <ul className="focus-list">
            <li>Devices that change a care pathway need product decisions grounded in clinical reality, not only in technology</li>
            <li>Assistive robotics in a medical-device context taught me to design for patients, clinicians and regulation at once</li>
            <li>I keep contributing to assistive technology through open source and the Paris Cybathlétique Club</li>
          </ul>
        </section>
      )}

      {activeSection === 'extender' && (
        <section className="section" id="extender" aria-labelledby="extender-heading">
          <div className="section-header">
            <h2 id="extender-heading" ref={sectionHeadingRef} tabIndex={-1}>
              Bloom — A Product Case Study
            </h2>
            <p className="section-meta">
              Extender project · ISIR, Sorbonne University / CNRS, Paris · 2026
            </p>
          </div>
          <div className="section-body section-blocks">
            <div className="content-stack">
              <p className="section-lead">
                <a href={bloomRepoUrl} target="_blank" rel="noreferrer">
                  Bloom
                </a>{' '}
                is the operator interface I designed, built and shipped for the{' '}
                <a href="https://orthopus.com/explorer/" target="_blank" rel="noreferrer">
                  Extender
                </a>{' '}
                project, an ANR project between ISIR and Orthopus in which
                wheelchair users drive an assistive robotic arm to perform
                everyday tasks. In September 2026 it became the official Extender
                operator interface, replacing the previous tablet application.
              </p>
              <p>
                This page tells it as a product story: the problem, the users and
                constraints, the decisions I made and why, what shipped, and what I
                would do next. I keep contributing to the open{' '}
                <a href={extenderOrgUrl} target="_blank" rel="noreferrer">
                  ISIR-EXTENDER
                </a>{' '}
                ecosystem beyond the project itself.
              </p>
            </div>
            <figure className="section-visual section-visual-wide">
              <img
                src={extenderUserImage}
                alt="A wheelchair user drives the Explorer arm, which holds a bottle. Icons show the possible inputs: muscle contraction, voice, brain activity, residual movement and gaze."
                loading="lazy"
              />
              <figcaption>
                The Extender problem in one picture: many possible inputs, one
                arm, one person who must stay in control. Illustration by ORTHOPUS.
              </figcaption>
            </figure>
          </div>

          <h3>The problem</h3>
          <p>
            Extender&apos;s earlier interfaces coupled screen layout, input devices,
            ROS transport and one robot. Every user study, every new assistive
            device and every second robot meant new code, and safety behaviour
            was scattered between the screen and the robot. The lab needed one
            interface system that researchers could reconfigure without a
            developer, that operators could trust, and that clinicians could put
            in front of a participant.
          </p>

          <h3>Users and constraints</h3>
          <ul className="focus-list">
            <li>People with limited upper-limb mobility, driving the arm from a tablet, a joystick, a gamepad or a single assistive switch</li>
            <li>Researchers and clinicians who run studies and need to compose a screen, review it and hand it to a participant safely</li>
            <li>A medical-device context: risk-driven safety, traceable behaviour and an audit trail, not only a working demo</li>
            <li>Two robots, the Orthopus Explorer and a Kinova Gen3, with different limits: Explorer has no slip ring and hard joint limits</li>
            <li>Lab tablets at 1024 by 600 pixels, three working languages, and a control stack that was being rewritten at the same time</li>
          </ul>

          <h3>Product decisions and why</h3>
          <ul className="focus-list decision-list">
            <li>
              <strong>One control model, two surfaces.</strong> A visual Builder and a
              kiosk Runtime render the same application, screen, widget, theme,
              profile and guardrail model, so a researcher composes a screen and the
              operator gets exactly what was reviewed.
            </li>
            <li>
              <strong>Safety lives in the backend.</strong> Allowlists, rate limits,
              validation, an audit log and one command owner per session are enforced
              server-side. A screen cannot bypass them, whichever device it runs on.
            </li>
            <li>
              <strong>A latched STOP that everyone can press.</strong> STOP is a
              reserved region on every screen, latches the software command path and
              refuses every command source until it is released, even for a
              read-only supervisor.
            </li>
            <li>
              <strong>A review checklist before a screen reaches a user.</strong> An app
              cannot be opened as a role until it passes an action-based checklist:
              targets it will refuse, controls that are too small to touch, missing
              STOP. Usability findings block, they do not warn.
            </li>
            <li>
              <strong>ROS stays at the adapter boundary.</strong> The frontend never
              imports ROS. A FastAPI backend translates, so Bloom can serve a robot
              beyond Extender and the interface survived the control stack rewrite.
            </li>
            <li>
              <strong>Simulation first, and CI that drives the robots.</strong> Every
              release runs end to end against both robot simulations and checks each
              effect on the ROS graph, so hardware time is spent on validation, not
              on discovering regressions.
            </li>
            <li>
              <strong>Ship the apps, not only the tool.</strong> Explorer Manager and
              Kinova Manager are tracked seed applications that a newcomer can open in
              ten minutes, which made the product real for the team before it was
              finished.
            </li>
          </ul>

          <h3>What shipped</h3>
          <div className="section-body section-blocks">
            <figure className="section-visual section-visual-wide">
              <img
                src={bloomDriveScreenshot}
                alt="Bloom operator interface showing the Explorer Manager Drive screen with its STOP rail"
                loading="lazy"
              />
              <figcaption>
                Bloom 0.2.0, September 2026: the Explorer Manager Drive screen with its STOP rail.
              </figcaption>
            </figure>
            <ul className="focus-list">
              <li>Touch, keyboard and gamepad input composed into one 6-DoF command, plus single-switch scanning profiles for assistive devices</li>
              <li>Explorer Manager and Kinova Manager apps: Drive, Positions, Robot feedback, Command sources, Joystick Lab and a read-only Supervisor mirror</li>
              <li>English, Spanish and French runtime shells, a guided operator practice and a Bloom Debug view with live joint states and the Jacobian</li>
              <li>ROS 2 adapters for the command manager, generic topics, services, topic discovery and a gripper camera stream on its own socket</li>
              <li>Release 0.2.0 under the MIT license, with tutorials, an operator safety guide and decision records for every architectural choice</li>
            </ul>
          </div>

          <h3>What I would do next</h3>
          <ul className="focus-list">
            <li>Hardware acceptance on the target tablets and both arms, with the assistive switches the scanning profiles were designed for</li>
            <li>The 1024 by 600 collapse layouts and paired desktop apps from the design handoff, then a native-speaker pass on Spanish and French</li>
            <li>Safety zones in the interface, once the controller exposes the Cartesian constraints the QP library already implements</li>
            <li>A short explainer of the hybrid control mode so that researchers, clinicians and operators describe it the same way</li>
          </ul>

          <h3>The wider Extender work in 2026</h3>
          <ul className="focus-list">
            <li>Moved the whole workspace to Ubuntu 24.04 and ROS 2 Jazzy, and maintain the workspace entry point, build guide and shared Python environment</li>
            <li>Built and then retired the first tablet teleoperation path (React app and WebSocket backend) once Bloom covered it</li>
            <li>Connected Bloom to the new three-layer control architecture: control modes, rotation frames, named poses and live parameter tuning</li>
            <li>Drove visual servoing from Bloom and ported the AprilTag detection package to the new baseline</li>
            <li>Rebased the Petanque assistive demonstrator (PEPR Robotics) onto the new stack through a dedicated Bloom app</li>
            <li>Wrote the organisation profile, tutorials and contribution rules that onboard newcomers to the stack</li>
          </ul>

          <h3>Research and coordination</h3>
          <ul className="focus-list">
            <li>Research in shared control and assistive manipulation, with scientific writing and paper submissions (ICRA)</li>
            <li>Co-design sessions and experimental studies shaped by user, clinical and ecological constraints</li>
            <li>Coordination across researchers, engineers, clinicians and industrial partners</li>
            <li>Real-time control laws and robot-agnostic software foundations in C++, Python and ROS 2</li>
          </ul>
        </section>
      )}

      {activeSection === 'assistive-robotics' && (
        <section className="section" id="assistive-robotics" aria-labelledby="assistive-robotics-heading">
          <div className="section-header">
            <h2 id="assistive-robotics-heading" ref={sectionHeadingRef} tabIndex={-1}>
              Assistive &amp; Medical Devices
            </h2>
            <div className="content-stack">
              <p className="section-lead">
                Assistive robotics and medical devices have been a long-running
                thread in my work, from my Ph.D. on human-robot comanipulation in
                industrial settings to robotic assistance for people with
                disabilities in a medical-device context, and now to product
                ownership of medical-device software.
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
                Assistive robotics, for me, means designing devices that are
                technically capable and genuinely compatible with everyday human
                life.
              </p>
            </div>
          </div>
          <div className="section-body section-blocks">
            <div className="content-stack">
              <p>
                This vision continued in a different context through the{' '}
                <a href="https://orthopus.com/explorer/" target="_blank" rel="noreferrer">
                  Extender
                </a>{' '}
                project at ISIR, where the question becomes one of daily autonomy.
                The goal is to help wheelchair users operate a robotic arm in real
                life, through control interfaces and interaction strategies that are
                technically robust, clinically relevant and respectful of the
                user&apos;s own way of acting.
              </p>
              <p>
                What connects the Ph.D., Extender and my product work is the same
                engineering and product question: how to build assistance that
                remains adaptable, understandable and useful without taking agency
                away from the person.
              </p>
              <p>
                The software dimension of this work is visible in the open{' '}
                <a href={extenderOrgUrl} target="_blank" rel="noreferrer">
                  ISIR-EXTENDER
                </a>{' '}
                ecosystem, a modular ROS 2 stack for assistive manipulation, and in{' '}
                <a href={bloomRepoUrl} target="_blank" rel="noreferrer">
                  Bloom
                </a>
                , the accessible operator interface I built for it. The Bloom case
                study tells that story in full. Both reflect the kind of technical
                foundation I care about in assistive systems: reusable, testable
                and connected to real usage constraints.
              </p>
            </div>
            <figure className="section-visual">
              <div className="section-visual-pair">
                <img
                  src={explorerImage}
                  alt="Explorer assistive robotic arm for daily autonomy"
                  loading="lazy"
                />
                <img
                  src={explorerManImage}
                  alt="Illustration of assistive robotics supporting autonomy from a wheelchair"
                  loading="lazy"
              />
            </div>
            <figcaption>
              Explorer robot by ORTHOPUS.
            </figcaption>
          </figure>
            <div>
              <h3>Technical and Product Dimensions</h3>
              <ul className="focus-list">
                <li>Shared control and teleoperation strategies for assistive manipulators in real tasks</li>
                <li>Robot-agnostic software architecture designed for reuse across platforms and experiments</li>
                <li>Operator interfaces and feedback loops shaped by usability, safety and deployment constraints</li>
                <li>Continuity between industrial comanipulation research and assistive systems for daily autonomy</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'publications' && (
        <section className="section" id="publications" aria-labelledby="publications-heading">
          <div className="section-header">
            <h2 id="publications-heading" ref={sectionHeadingRef} tabIndex={-1}>
              Work &amp; Writing
            </h2>
            <div className="section-intro content-stack">
              <p className="section-lead">
                Software I build in the open, and what I write and say about
                robotics, human–machine interaction and assistive technology, from
                peer-reviewed research to talks and long-form articles.
              </p>
              <p>
                This page collects a few entry points. If you&apos;re new here,
                start with Bloom for the product work, the PhD thesis for depth,
                or the talks and articles for a more accessible overview.
              </p>
            </div>
          </div>
          <div className="section-body">
            <div className="content-groups">
            {publicationGroups.map((group) => (
              <section key={group.title} className="content-group">
                <div className="group-header">
                  <h3>{group.title}</h3>
                  <p className="group-description">{group.description}</p>
                </div>
                <div className="card-list card-stack">
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
          </div>
        </section>
      )}

      {activeSection === 'engineering' && (
        <section className="section" id="engineering" aria-labelledby="engineering-heading">
          <div className="section-header">
            <h2 id="engineering-heading" ref={sectionHeadingRef} tabIndex={-1}>
              Robotics Engineering
            </h2>
            <p className="section-lead">
              My product judgement rests on years of building robots that had to
              work beyond the prototype: industrial cobots, mobile logistics
              robots, and humanoid and social robots. Across these environments,
              what stayed constant is my interest in reliable software, clear
              interfaces between teams and decisions made with deployment in mind
              from the start.
            </p>
          </div>
          <div className="section-body section-blocks">
            <div className="robot-entry">
              <h3 className="interest-title">
                <a href="https://niryo.com/nate/" target="_blank" rel="noreferrer">
                  Niryo
                </a>
              </h3>
              <div className="robot-meta">Industrial robotics · software roadmap and team leadership</div>
              <p className="robot-description">
                I worked on Ned2, leading the software roadmap around that robot,
                coordinated a software team of 7 people, improved quality and
                validation processes, and contributed to architecture decisions that
                later fed into Niryo&apos;s more recent Nate platform. Nate reflects a
                direction that is very close to my own vision of industrial
                robotics: modular, deployable and built around real operational
                needs.
              </p>
            </div>

            <div className="robot-entry">
              <h3 className="interest-title">
                <a href="https://www.movu-robotics.com/en-US" target="_blank" rel="noreferrer">
                  Movu Robotics
                </a>
              </h3>
              <div className="robot-meta">Mobile logistics robots in a constrained production environment</div>
              <p className="robot-description">
                I worked on mobile logistics robots, combining ROS-based state
                machines, RGB-D and lidar perception, human tracking and technical
                coordination across a small multidisciplinary team.
              </p>
            </div>

            <div className="robot-entry">
              <h3 className="interest-title">
                <a
                  href="https://list.cea.fr/en/page/cortex-a-software-suite-for-faster-and-easier-robot-controller-engineering/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CEA-List
                </a>
              </h3>
              <div className="robot-meta">Foundations in robot control and controller engineering</div>
              <p className="robot-description">
                I built my foundations in robotic control, programming by
                demonstration, dynamic modeling and real-time modular C++ software
                for industrial robot controller engineering.
              </p>
            </div>

            <div className="robot-entry">
              <h3 className="interest-title">SoftBank Robotics Europe</h3>
              <div className="robot-meta">Humanoid and social robotics in real-world contexts</div>
              <p className="robot-description">
                I worked on perception and interaction modules for humanoid and
                social robots, especially around Pepper. The work combined C++ and
                Python development with context understanding, environment analysis
                and expressive interaction design.
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
              </ul>
            </div>

            <div className="robot-entry">
              <h3 className="interest-title">ISIR and humanoid/social interaction research</h3>
              <div className="robot-meta">Humanoid and assistive interaction in research settings</div>
              <p className="robot-description">
                At ISIR, this line of interest continued through interaction work
                around humanoid and social robots, including robots designed for
                healthcare and assistive environments. What matters to me here is
                not the robot as an object, but the quality of the relationship it
                creates with users, caregivers and surrounding teams.
              </p>
            </div>

            <div>
              <h3>What this experience includes</h3>
              <ul className="focus-list">
                <li>Architecture of complex robotic software systems in C++, Python and ROS</li>
                <li>Coordination between software, hardware, UX, production and prospective clients</li>
                <li>Validation, quality and deployment thinking for robots used beyond the lab</li>
                <li>Perception, navigation and interaction for robots in constrained operational environments</li>
                <li>Attention to perception, expressivity and trust in embodied robotics</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'ecosystem' && (
        <section className="section" id="ecosystem" aria-labelledby="ecosystem-heading">
          <h2 id="ecosystem-heading" ref={sectionHeadingRef} tabIndex={-1}>
            Engagements
          </h2>
          <p>
            A product leader is only as good as their contact with the people the
            product is for and with the ecosystem it lives in. Beyond project
            work, I keep that contact through expert review, community
            coordination and user-centered associations. These roles keep me
            close to strategic questions, technical communities and real users of
            assistive and robotic systems.
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
            On the assistive side, I am the Secretary of the{' '}
            <a
              href="https://www.helloasso.com/associations/paris-cybathletique-club"
              target="_blank"
              rel="noreferrer"
            >
              Paris Cybathlétique Club
            </a>{' '}
            (PCC) and in charge of its communications, since September 2026. The
            association gathers upper-limb prosthesis users, researchers and
            clinicians around assistive technology and cybathletic practice. It
            is where I hear, every month, what assistive technology feels like
            from the user&apos;s side.
          </p>
          <p>
            Through PCC and the open ISIR-EXTENDER ecosystem, I keep taking part
            in the development of assistive technologies beyond my Extender
            project contributions.
          </p>
          <p>
            I am also involved in{' '}
            <a href="https://lecercledesrobotsdisparus.org/" target="_blank" rel="noreferrer">
              Le Cercle des Robots Disparus
            </a>
            , a new association project dedicated to the reuse of robots and
            scientific equipment for education, art and social impact.
          </p>

          <h3>How these roles feed the product work</h3>
          <ul className="focus-list">
            <li>Evaluating robotics and AI projects beyond novelty alone, with attention to maturity and usefulness</li>
            <li>Contributing to technical communities around open robotics tools and shared practices</li>
            <li>Running an association&apos;s secretariat and communications, close to the people assistive technology is for</li>
            <li>Staying connected to users, associations and communities that shape assistive robotics in practice</li>
            <li>Bridging strategic, technical and human perspectives across the ecosystem</li>
          </ul>
        </section>
      )}

      {activeSection === 'cercle' && (
        <section className="section" id="cercle" aria-labelledby="cercle-heading">
          <h2 id="cercle-heading" ref={sectionHeadingRef} tabIndex={-1}>
            Le Cercle des Robots Disparus
          </h2>
          <p>
            <a href="https://lecercledesrobotsdisparus.org/" target="_blank" rel="noreferrer">
              Le Cercle des Robots Disparus
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
            For me, the association extends a broader vision of robotics: one
            that values transmission, cultural imagination and social utility
            alongside engineering. Forgotten machines can become educational,
            artistic and collective entry points into robotics again. It is
            also a product question in disguise: what a machine is worth once
            its first market is gone, and who gets to decide.
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
              Since I was a teenager, I have been drawn to robots, interactive
              objects and machines that act in the world. Not as technical
              curiosities, but as presences: things that invite gesture,
              attention, play, care or surprise.
            </p>
            <p className="interest-description">
              What has never changed is this conviction: the most important
              thing about a machine is not the machine itself, but the human
              relationship it makes possible. This is why robotics, interactive
              art, embodied systems and unusual interfaces all belong to the
              same landscape for me.
            </p>
            <p className="interest-description">
              I am especially drawn to projects where machines become occasions
              for curiosity, collective experience and new ways of sensing the
              world. The Museomix project below is one trace of that early
              impulse: building technical objects that are also cultural,
              relational and alive.
            </p>
          </div>

          <div className="interest-block">
            <h3 className="interest-title">Interactive installation (Museomix 2013)</h3>
            <p className="interest-description">
              Museomix was an early lesson in interdisciplinary making:
              designers, technologists, makers and storytellers building
              together under real constraints, in public, in a museum. What
              stayed with me was not only the prototype, but the feeling that a
              technical object can also become a shared cultural experience.
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
            frame products, how I think about robotic behavior and how I
            navigate interdisciplinary collaboration. Observing carefully,
            designing with care and staying grounded in real interactions are as
            important to me as any product or technical decision I make.
          </p>
        </section>
      )}
    </>
  )
}
