import { Link } from 'react-router-dom'
import { HeroSection, FeatureGrid, Faq } from '@aagf470/ui'
import LogoMarquee from '../components/LogoMarquee.jsx'
import MailingList from '../components/MailingList.jsx'
import { NSL_TEXT, CUBESAT_TEXT, BEYOND_CUBESATS_TEXT, TEAMS, PARTNERS, ALUMNI_COMPANIES } from '../data'

export default function Home() {
  return (
    <>
      {/* Hero — hero.jpg (ISEC atrium) behind the standard HeroSection */}
      <div className="nsl-hero">
        <img
          className="nsl-hero__photo"
          src="/img/photos/hero.jpg"
          alt="The atrium of Northeastern's ISEC building, with its helix staircase"
        />
        <HeroSection
          eyebrow="Northeastern Satellite Lab · Est. 2022"
          headline="Welcome to Northeastern's Satellite Lab."
          subtext="We're a student-run club designing, building, and launching CubeSats and more — real spacecraft, built by undergrads across hardware, software, and simulations."
          ctas={[
            { label: 'Explore our work',      href: '/projects', variant: 'solid' },
            { label: 'Join the mailing list', href: '/contact',  variant: 'ghost' },
          ]}
          layout="centered"
        />
      </div>

      <Faq
        eyebrow="Get to know us"
        headline="The basics"
        items={[
          { q: 'What is NSL?',        a: NSL_TEXT },
          { q: 'What is a CubeSat?',  a: CUBESAT_TEXT },
        ]}
        variant="alt"
      />

      {/* Not only CubeSats */}
      <section className="nsl-block">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">More than CubeSats</p>
          <h2 className="nsl-h2">Satellites are just the start</h2>
          <p className="nsl-sub" style={{ maxWidth: '720px', marginBottom: 0 }}>{BEYOND_CUBESATS_TEXT}</p>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Our teams"
        headline="Three teams, one spacecraft"
        subtext="Every member joins a team and builds real flight hardware, software, or mission analysis — mechanical, electrical, and computing students all have a home here."
        items={TEAMS}
        columns={3}
        variant="default"
      />

      {/* Partners + alumni — one section, two marquee rows */}
      <section className="nsl-block nsl-block--alt nsl-orgs">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">Partners &amp; people</p>
          <h2 className="nsl-h2">We don't do it alone</h2>
          <p className="nsl-sub">The agencies, labs, and university teams we build alongside — and where our members and alumni go on to work.</p>
        </div>

        <div className="nsl-orgs__row">
          <p className="nsl-orgs__label">Partners, collaborators &amp; mentors</p>
          <LogoMarquee items={PARTNERS} duration={36} />
        </div>

        <div className="nsl-orgs__row">
          <p className="nsl-orgs__label">Our members &amp; alumni work at</p>
          <LogoMarquee items={ALUMNI_COMPANIES} reverse duration={50} />
        </div>
      </section>

      {/* Work teaser */}
      <section className="nsl-block nsl-block--alt">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">Our work</p>
          <h2 className="nsl-h2">Missions, competitions, and open-source tools</h2>
          <div className="nsl-worklinks">
            <Link className="nsl-worklink" to="/projects">
              <span className="nsl-worklink__eyebrow">Full portfolio</span>
              <div className="nsl-worklink__title">Projects</div>
              <p className="nsl-worklink__body">Everything we're building — active satellite &amp; ground-station programs, competitions like NASA Space to Soil, and open-source R&amp;D.</p>
              <span className="nsl-worklink__cta">See all projects →</span>
            </Link>
            <Link className="nsl-worklink" to="/programs">
              <span className="nsl-worklink__eyebrow">Flagship programs</span>
              <div className="nsl-worklink__title">Programs</div>
              <p className="nsl-worklink__body">The deep dive on our flagship flight experiments — PROVES Atlas, Teralink-1, and the Sub-THz Ground Station.</p>
              <span className="nsl-worklink__cta">See our programs →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mailing list */}
      <section className="nsl-block">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">Stay in the loop</p>
          <h2 className="nsl-h2">Are you a NU or NSL community member?</h2>
          <p className="nsl-sub">Join our mailing list for meeting times, launch news, and ways to get involved.</p>
          <MailingList />
        </div>
      </section>
    </>
  )
}
