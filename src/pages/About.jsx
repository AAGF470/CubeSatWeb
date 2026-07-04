import { FeatureGrid } from '@aagf470/ui'
import LogoMarquee from '../components/LogoMarquee.jsx'
import { NSL_TEXT, CUBESAT_TEXT, TEAMS, ALUMNI_COMPANIES } from '../data'

const FACTS = [
  { big: '2022',  h: 'Founded', p: 'Spun out of the Northeastern Aerospace Club by undergraduate students.' },
  { big: '8',     h: 'Management team', p: 'Undergrads running the club day-to-day.' },
  { big: 'Dr. Jornet', h: 'Faculty advisor', p: 'Associate Dean of Research, Northeastern College of Engineering.' },
]

export default function About() {
  return (
    <>
      <header className="nsl-intro">
        <div className="nsl-intro__inner">
          <p className="nsl-eyebrow">About Us</p>
          <h1 className="nsl-intro__title">Students building real spacecraft.</h1>
          <p className="nsl-intro__lead">A brand-new, student-run satellite lab at Northeastern — undergrads designing, building, and flying CubeSats and more.</p>
        </div>
      </header>

      <section className="nsl-block">
        <div className="nsl-block__inner">
          <article className="nsl-detail">
            <div className="nsl-detail__media">
              <img src="/img/photos/gallery-1.jpg" alt="The atrium of Northeastern's ISEC building, with its helix staircase" loading="lazy" />
            </div>
            <div className="nsl-detail__info">
              <span className="nsl-detail__tag">Who we are</span>
              <h2 className="nsl-detail__name">Northeastern Satellite Lab</h2>
              <p className="nsl-detail__body">{NSL_TEXT}</p>
            </div>
          </article>
          <div className="nsl-cards" style={{ marginTop: '36px' }}>
            {FACTS.map(f => (
              <div key={f.h} className="nsl-info-card">
                <p className="nsl-info-card__big">{f.big}</p>
                <h3 style={{ marginTop: '6px' }}>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nsl-block nsl-block--alt">
        <div className="nsl-block__inner">
          <article className="nsl-detail nsl-detail--reverse">
            <div className="nsl-detail__media">
              <img src="/img/satellite.svg" alt="CubeSat illustration" loading="lazy" />
            </div>
            <div className="nsl-detail__info">
              <span className="nsl-detail__tag">The platform</span>
              <h2 className="nsl-detail__name">What is a CubeSat?</h2>
              <p className="nsl-detail__body">{CUBESAT_TEXT}</p>
            </div>
          </article>
        </div>
      </section>

      <FeatureGrid
        eyebrow="Our teams"
        headline="How the work splits up"
        items={TEAMS}
        columns={3}
        variant="default"
      />

      {/* Alumni & advisors */}
      <section className="nsl-block nsl-block--alt nsl-orgs">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">Alumni &amp; advisors</p>
          <h2 className="nsl-h2">The people behind the students</h2>
          <p className="nsl-sub" style={{ maxWidth: '720px' }}>
            NSL is supported by a small but dedicated group of satellite-club alumni who mentor current
            members, and by our faculty advisor Dr. Jornet, Associate Dean of Research in the Northeastern
            College of Engineering. That network follows our members after graduation, too.
          </p>
        </div>
        <div className="nsl-orgs__row">
          <p className="nsl-orgs__label">Our members &amp; alumni work at</p>
          <LogoMarquee items={ALUMNI_COMPANIES} duration={50} />
        </div>
      </section>
    </>
  )
}
