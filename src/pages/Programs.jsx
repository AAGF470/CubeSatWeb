import { Link } from 'react-router-dom'
import { PROGRAMS } from '../data'

export default function Programs() {
  return (
    <>
      <header className="nsl-intro">
        <div className="nsl-intro__inner">
          <p className="nsl-eyebrow">Programs</p>
          <h1 className="nsl-intro__title">Programs</h1>
          <p className="nsl-intro__lead">
            Our flagship satellite and ground-station programs — some call them flight experiments —
            at the scale of multi-semester missions: real hardware, real launches, and teams of a dozen
            or more students working with national partners.
          </p>
        </div>
      </header>

      <section className="nsl-block">
        <div className="nsl-block__inner">
          {PROGRAMS.map((p, i) => (
            <article key={p.id} className={`nsl-detail${i % 2 ? ' nsl-detail--reverse' : ''}`}>
              <div className="nsl-detail__media">
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
              </div>
              <div className="nsl-detail__info">
                <span className="nsl-detail__tag">{p.status}</span>
                <h2 className="nsl-detail__name">{p.name}</h2>
                <p className="nsl-detail__body">{p.body}</p>
                {p.scale && (
                  <dl className="nsl-scale">
                    {p.scale.map(s => (
                      <div key={s.label} className="nsl-scale__item">
                        <dt className="nsl-scale__label">{s.label}</dt>
                        <dd className="nsl-scale__big">{s.big}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {p.collaborators && <p className="nsl-detail__meta">{p.collaborators}</p>}
                {p.placeholder && <p className="nsl-detail__ph">Placeholder copy — full details coming from the team</p>}
              </div>
            </article>
          ))}

          <p className="nsl-footnote">
            Looking for competitions and open-source R&amp;D too? The full portfolio lives on the{' '}
            <Link to="/projects">Projects page</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
