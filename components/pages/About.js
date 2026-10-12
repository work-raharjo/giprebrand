import Link from "next/link";
import { Header, Footer } from "../Chrome";
import HtmlLang from "../HtmlLang";
import StickyChat from "../StickyChat";
import { href, img, t } from "../../lib/i18n";

export default function About({ lang = "id" }) {
  const s = t(lang);
  const side = img(lang, "connectAlt");

  return (
    <>
      <HtmlLang lang={lang} />
      <Header lang={lang} route="about" />
      <main id="konten">
        <section className="section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <p className="eyebrow">{s.about.eyebrow}</p>
            <h1>{s.about.title}</h1>
            <p className="lede" style={{ marginTop: 20 }}>{s.about.p1}</p>
            <p className="lede" style={{ marginTop: 14 }}>{s.about.p2}</p>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap">
            <div className="grid grid-4">
              {s.stats.map((stat) => (
                <div className="stat" key={stat.label} style={{ background: "var(--surface)" }}>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap story">
            <div>
              <p className="eyebrow">{s.about.workEyebrow}</p>
              <h2>{s.about.workTitle}</h2>
              <p className="lede" style={{ marginTop: 16 }}>{s.about.workBody}</p>
              <div className="hero-actions">
                <Link className="btn btn-outline" href={href(lang, "legal")}>
                  {s.legal.eyebrow}
                </Link>
              </div>
            </div>
            <div className="story-img">
              <img src={side.src} alt={side.alt} />
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <StickyChat lang={lang} />
    </>
  );
}
