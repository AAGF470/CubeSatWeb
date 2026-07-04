import { Link } from 'react-router-dom'
import { PROGRAMS, COMPETITIONS, RND, PROJECT_POCS } from '../data'

export default function Projects() {
  const dewsat = COMPETITIONS.find(c => c.id === 'dewsat')
  const gtoc   = COMPETITIONS.find(c => c.id === 'gtoc-14')

  return (
    <>
      <header className="nsl-intro">
        <div className="nsl-intro__inner">
          <p className="nsl-eyebrow">Projects</p>
          <h1 className="nsl-intro__title">Everything we're building</h1>
          <p className="nsl-intro__lead">Active satellite and ground-station programs, national competitions, and open-source R&amp;D — the full portfolio.</p>
        </div>
      </header>

      {/* 1 — Active satellite & ground-station programs */}
      <section className="nsl-block">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">Active satellite &amp; ground station programs</p>
          <h2 className="nsl-h2">Missions in flight and on the bench</h2>

          {PROGRAMS.map((p, i) => (
            <article key={p.id} className={`nsl-detail${i % 2 ? ' nsl-detail--reverse' : ''}`} style={i === 0 ? { marginTop: '32px' } : undefined}>
              <div className="nsl-detail__media">
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
              </div>
              <div className="nsl-detail__info">
                <span className="nsl-detail__tag">{p.status}</span>
                <h3 className="nsl-detail__name">{p.name}</h3>
                <p className="nsl-detail__body">{p.body}</p>
                {p.window && <p className="nsl-detail__meta">{p.window}</p>}
                {p.collaborators && <p className="nsl-detail__meta">{p.collaborators}</p>}
                {p.placeholder && <p className="nsl-detail__ph">Placeholder copy — full details coming from the team</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 2 — Competitions */}
      <section className="nsl-block nsl-block--alt">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">Competitions</p>
          <h2 className="nsl-h2">Taking on the hard problems</h2>

          <article className="nsl-detail" style={{ marginTop: '32px' }}>
            <div className="nsl-detail__media">
              <img src={dewsat.image} alt={dewsat.imageAlt} loading="lazy" />
            </div>
            <div className="nsl-detail__info">
              <span className="nsl-detail__tag">{dewsat.status}</span>
              <h3 className="nsl-detail__name">{dewsat.name}</h3>
              <p className="nsl-detail__body">{dewsat.body}</p>
              {dewsat.collaborators && <p className="nsl-detail__meta">{dewsat.collaborators}</p>}
            </div>
          </article>

          {/* Deliberately low-key (mixed feedback on emphasis) */}
          <div className="nsl-callout">
            <div className="nsl-callout__row">
              <span className="nsl-callout__name">{gtoc.name}</span>
              <span className="nsl-callout__tag">{gtoc.status}</span>
            </div>
            <p className="nsl-callout__body">{gtoc.body}</p>
          </div>
        </div>
      </section>

      {/* 3 — R&D projects */}
      <section className="nsl-block">
        <div className="nsl-block__inner">
          <p className="nsl-eyebrow">R&amp;D projects</p>
          <h2 className="nsl-h2">Open-source by default</h2>
          <p className="nsl-sub">Tools and hardware we build in the open — usable by any student or researcher.</p>

          <div className="nsl-rnd">
            {RND.map(r => (
              <div key={r.title} className="nsl-rnd__card">
                <div className="nsl-rnd__head">
                  <h3 className="nsl-rnd__title">{r.title}</h3>
                  <span className="nsl-rnd__tag">{r.status}</span>
                </div>
                <p className="nsl-rnd__body">{r.body}</p>
                {r.collaborators && <p className="nsl-detail__meta">{r.collaborators}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points of contact — small print */}
      <section className="nsl-block nsl-block--alt" style={{ padding: '36px 0' }}>
        <div className="nsl-block__inner">
          <div className="nsl-pocs">
            <p className="nsl-pocs__title">Project points of contact</p>
            {PROJECT_POCS.map(p => (
              <p key={p.project} className="nsl-pocs__line"><strong>{p.project}</strong> — {p.contacts}</p>
            ))}
            <p className="nsl-pocs__line">All other projects — reach out through the <Link to="/contact">contact page</Link>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
