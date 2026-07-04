import { ContactSection } from '@aagf470/ui'
import MailingList from '../components/MailingList.jsx'
import { CONTACT_EMAIL, SOCIALS } from '../data'

export default function Contact() {
  return (
    <>
      <header className="nsl-intro">
        <div className="nsl-intro__inner">
          <p className="nsl-eyebrow">Contact</p>
          <h1 className="nsl-intro__title">Get in touch</h1>
          <p className="nsl-intro__lead">
            Questions, collaborations, or want to join? Email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)' }}>{CONTACT_EMAIL}</a>{' '}
            or use the form below.
          </p>
        </div>
      </header>

      <ContactSection
        eyebrow="Reach the lab"
        headline="Send us a message"
        subtext="Whether you're a prospective member, a collaborator, or press — drop us a line and we'll get back to you."
        email={CONTACT_EMAIL}
        variant="default"
      />

      <section className="nsl-block nsl-block--alt" id="mailing">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">Mailing list</p>
          <h2 className="nsl-h2">Join our mailing list</h2>
          <p className="nsl-sub">For NU and NSL community members — meeting times, launch news, and opportunities to get involved.</p>
          <MailingList />
          <p className="nsl-footnote" style={{ marginTop: '18px' }}>
            Project-specific mailing lists (Teralink-1, THz ground station) are coming soon.
          </p>
        </div>
      </section>

      <section className="nsl-block">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">Follow along</p>
          <h2 className="nsl-h2">Find us on social</h2>
          <div className="nsl-socials">
            {/* TODO: real URLs — see SOCIALS in data.js */}
            {SOCIALS.map(s => (
              <a key={s.label} className="nsl-chip" href={s.href}>{s.label}</a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
