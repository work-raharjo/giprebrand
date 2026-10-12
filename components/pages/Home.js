import Link from "next/link";
import { Header, Footer, waLink } from "../Chrome";
import HtmlLang from "../HtmlLang";
import StickyChat from "../StickyChat";
import { clients, partners } from "../../lib/content";
import { href, img, t, verticalsFor } from "../../lib/i18n";

export default function Home({ lang = "id" }) {
  const s = t(lang);
  const lines = verticalsFor(lang);
  const hero = img(lang, "hero");
  const crowd = img(lang, "crowd");

  return (
    <>
      <HtmlLang lang={lang} />
      <Header lang={lang} route="home" />

      <main id="konten">
        <section className="hero">
          <div className="hero-media">
            <img src={hero.src} alt={hero.alt} />
            <img src="/gip-mark.jpg" alt="" className="hero-motif" />
          </div>
          <div className="wrap">
            <div className="hero-content">
              <p className="eyebrow hero-eyebrow">{s.home.eyebrow}</p>
              <h1>{s.home.title}</h1>
              <p>{s.home.sub}</p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#lini">
                  {s.home.ctaLines}
                </a>
                <Link className="btn btn-ghost-light" href={href(lang, "about")}>
                  {s.home.ctaAbout}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="lini">
          <div className="wrap">
            <p className="eyebrow">{s.home.linesEyebrow}</p>
            <h2>{s.home.linesTitle}</h2>
            <div className="grid grid-3" style={{ marginTop: 34 }}>
              {lines.map((v) => {
                const card = img(lang, v.image);
                return (
                  <Link
                    href={href(lang, v.key)}
                    className="vcard"
                    key={v.slug}
                    style={{ "--accent": v.accent, "--accent-dark": v.accentDark }}
                  >
                    <div className="vcard-img">
                      <img src={card.src} alt={card.alt} />
                    </div>
                    <div className="vcard-body">
                      <span className="vcard-tag" style={{ color: v.accentDark }}>
                        {v.tagline}
                      </span>
                      <h3>{v.name}</h3>
                      <p>{v.cardBlurb}</p>
                      <span className="vcard-link" style={{ color: v.accentDark }}>
                        {s.nav.enter} &rarr;
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-proof">
          <div className="wrap">
            <div className="proof-grid">
              <div>
                <p className="eyebrow">{s.home.partnersLabel}</p>
                <div className="logo-row">
                  {partners.map((p) => (
                    <img className="logo-row-item" key={p.name} src={p.src} alt={p.name} style={{ maxWidth: p.maxWidth }} />
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">{s.home.clientsLabel}</p>
                <div className="logo-row">
                  {clients.map((c) => (
                    <img className="logo-row-item is-client" key={c.name} src={c.src} alt={c.name} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap story">
            <div>
              <p className="eyebrow">{s.home.storyEyebrow}</p>
              <h2>{s.home.storyTitle}</h2>
              <p className="lede" style={{ marginTop: 18 }}>
                {s.home.storyP1}
              </p>
              <p className="lede">{s.home.storyP2}</p>
              <div className="hero-actions">
                <Link className="btn btn-outline" href={href(lang, "about")}>
                  {s.home.storyCta}
                </Link>
              </div>
            </div>
            <div className="story-img">
              <img src={crowd.src} alt={crowd.alt} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              {s.home.statsEyebrow}
            </p>
            <div className="grid grid-4">
              {s.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cta-panel">
              <div>
                <h2>{s.home.ctaTitle}</h2>
                <p>{s.home.ctaBody}</p>
              </div>
              <div className="hero-actions">
                <a className="btn btn-solid" href={waLink(s.form.eventGreeting)} target="_blank" rel="noopener">
                  {s.home.ctaWa}
                </a>
                <Link className="btn btn-outline" href={`${href(lang, "marine")}#form`}>
                  {s.home.ctaProposal}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      <StickyChat lang={lang} />
    </>
  );
}
