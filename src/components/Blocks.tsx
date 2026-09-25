import type { MouseEvent } from 'react'
import type { Block, Lang, Pair, UiStrings } from '../content/types'
import { asset, content, quoteLang } from '../site'
import { RichText } from './RichText'

interface Ctx {
  lang: Lang
  ui: UiStrings
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void
}

const num = (i: number) => String(i + 1).padStart(2, '0')

function Rows({ rows, ctx }: { rows: Pair[]; ctx: Ctx }) {
  return (
    <dl className="rows">
      {rows.map(([term, text], i) => (
        <div className="row" key={i}>
          <dt>
            <RichText text={term} lang={ctx.lang} onNavigate={ctx.onNavigate} />
          </dt>
          <dd>
            <RichText text={text} lang={ctx.lang} onNavigate={ctx.onNavigate} />
          </dd>
        </div>
      ))}
    </dl>
  )
}

function Chevron() {
  return (
    <span className="chev" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </span>
  )
}

export function BlockView({ block, ctx }: { block: Block; ctx: Ctx }) {
  const rt = (text: string) => <RichText text={text} lang={ctx.lang} onNavigate={ctx.onNavigate} />
  switch (block.type) {
    case 'intro':
      return (
        <div className="intro">
          <figure className="portrait">
            <img src="/assets/ssr_profile_isir.webp" alt={ctx.ui.portraitAlt} width="168" height="168" />
          </figure>
          <p className="lead">{block.lead}</p>
          <p className="body">{block.text}</p>
        </div>
      )
    case 'h3':
      return <h2 className="h3">{block.text}</h2>
    case 'p':
      return <p className="body">{rt(block.text)}</p>
    case 'rows':
      return <Rows rows={block.rows} ctx={ctx} />
    case 'impact':
      return (
        <ul className="impact">
          {block.items.map(([value, text], i) => (
            <li key={i}>
              <span className="impact-value">{value}</span>
              <span className="impact-text">{text}</span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="pull" lang={quoteLang(block.text)}>
          <p>“{block.text}”</p>
          <footer>
            <strong>{block.name}</strong> · {block.role}
          </footer>
        </blockquote>
      )
    case 'quotes':
      return (
        <div className="quotes">
          {content.quotes.map((q, i) => (
            <figure key={i}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote lang={quoteLang(q.text)}>{q.text}</blockquote>
              <figcaption>
                <strong>{q.name}</strong> · {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      )
    case 'cards':
      return (
        <ol className="cards">
          {block.items.map(([title, text], i) => (
            <li key={i}>
              <span className="card-num" aria-hidden="true">{num(i)}</span>
              <div>
                <span className="card-title">{title}</span>
                <span className="card-text">{text}</span>
              </div>
            </li>
          ))}
        </ol>
      )
    case 'families':
      return (
        <div className="families">
          {block.items.map(([label, quote], i) => (
            <figure key={i}>
              <figcaption>{label}</figcaption>
              <blockquote>“{quote}”</blockquote>
            </figure>
          ))}
        </div>
      )
    case 'figure':
      return (
        <figure className="figure">
          <img src={asset(block.src)} alt={block.alt} loading="lazy" />
          <figcaption>{block.caption}</figcaption>
        </figure>
      )
    case 'figures':
    case 'shots':
      return (
        <figure className={block.type === 'shots' ? 'figure shots' : 'figure pair'}>
          <div>
            {block.items.map(([src, alt], i) => (
              <img key={i} src={asset(src)} alt={alt} loading="lazy" />
            ))}
          </div>
          <figcaption>{block.caption}</figcaption>
        </figure>
      )
    case 'pubs':
      return (
        <div className="pubs">
          {block.groups.map((g, gi) => (
            <section key={gi} aria-labelledby={'pub-' + gi}>
              <h2 id={'pub-' + gi} className="label">{g.title}</h2>
              <div className="pub-list">
                {g.items.map((it, i) => (
                  <a key={i} className="pub" href={asset(it.href)} target="_blank" rel="noreferrer">
                    <span className="pub-media" aria-hidden="true">
                      <img src={asset(it.image)} alt="" loading="lazy" />
                    </span>
                    <span className="pub-body">
                      <span className="pub-title">{it.title}</span>
                      <span className="pub-meta">{it.meta}</span>
                    </span>
                    <span className="pub-label">
                      {it.label} <span aria-hidden="true">↗</span>
                    </span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      )
    case 'timeline':
      return (
        <ol className="timeline">
          {block.items.map((t, i) => (
            <li key={i}>
              <span className="tl-years">{t.years}</span>
              <div className="tl-body">
                <div>
                  <h2 className="tl-org">{rt(t.org)}</h2>
                  <span className="tl-role">{t.role}</span>
                </div>
                <p>{rt(t.text)}</p>
                {t.bullets && t.bullets.length > 0 && (
                  <ul>
                    {t.bullets.map((b, bi) => (
                      <li key={bi}>{rt(b)}</li>
                    ))}
                  </ul>
                )}
                {t.figs && t.figs.length > 0 && (
                  <div className="tl-figs">
                    {t.figs.map(([src, alt], fi) => (
                      <img key={fi} src={asset(src)} alt={alt} loading="lazy" />
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )
    case 'details':
      return (
        <div className="details">
          {block.items.map((it, i) => (
            <details key={i}>
              <summary>
                <span>
                  <span className="sum-title">{it.title}</span>
                  <span className="sum-teaser">{it.teaser}</span>
                </span>
                <Chevron />
              </summary>
              <div className="details-body">
                {(it.paras ?? []).map((p, pi) => (
                  <p key={pi} className="body">{rt(p)}</p>
                ))}
                {it.img && <img className="details-img" src={asset(it.img)} alt={it.imgAlt ?? ''} loading="lazy" />}
                {it.video && (
                  <div className="video">
                    <iframe src={it.video} title={it.videoTitle ?? ''} loading="lazy" allow="fullscreen; picture-in-picture" allowFullScreen />
                  </div>
                )}
                {it.links && (
                  <div className="link-row">
                    {it.links.map(([text, href], li) => (
                      <a key={li} href={href} target="_blank" rel="noreferrer">
                        {text} ↗
                      </a>
                    ))}
                  </div>
                )}
                {it.rows && <Rows rows={it.rows} ctx={ctx} />}
                {it.list && (
                  <ul className="plain-list">
                    {it.list.map((x, xi) => (
                      <li key={xi}>{x}</li>
                    ))}
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>
      )
  }
}
