import { Header, Footer, Icon, Check, waLink } from "./Chrome";
import LeadForm from "./LeadForm";
import HtmlLang from "./HtmlLang";
import StickyChat from "./StickyChat";
import { SITE, img, t, vertical as getVertical } from "../lib/i18n";

export default function VerticalPage({ lang = "id", route }) {
  const s = t(lang);
  const v = getVertical(lang, route);
  const heroImg = img(lang, v.heroImage);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: v.name,
    serviceType: v.tagline,
    description: v.heroSub,
    inLanguage: s.htmlLang,
    provider: { "@type": "Organization", name: "PT Galactic Indonesia Perkasa", url: SITE },
    areaServed: v.areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: v.servicesTitle,
      itemListElement: v.services.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.title, description: item.desc },
      })),
    },
  };

  const style = {
    "--accent": v.accent,
    "--accent-dark": v.accentDark,
    "--accent-soft": v.accentSoft,
  };

  return (
    <div style={style}>
      <HtmlLang lang={lang} />
      <Header lang={lang} route={route} vertical={v} />

      <main id="konten">
        <section className="vhero">
          <img src="/gip-mark.jpg" alt="" className="vhero-motif" />
          <div className="wrap vhero-grid">
            <div style={{ paddingBottom: 68 }}>
              <p className="eyebrow" style={{ color: v.accentDark, opacity: 0.7 }}>
                {v.tagline}
              </p>
              <h1>{v.heroTitle}</h1>
              <p className="lede">{v.heroSub}</p>
              <div className="hero-actions">
                {v.ctaPrimaryType === "wa" ? (
                  <a
                    className="btn btn-solid"
                    href={waLink(s.form.greeting(v.name))}
                    target="_blank"
                    rel="noopener"
                  >
                    {v.ctaPrimary}
                  </a>
                ) : (
                  <a className="btn btn-solid" href="#form">
                    {v.ctaPrimary}
                  </a>
                )}
                <a className="btn btn-outline" href={v.ctaSecondaryHref}>
                  {v.ctaSecondary}
                </a>
              </div>
            </div>
            <div className="vhero-img">
              <img src={heroImg.src} alt={heroImg.alt} />
            </div>
          </div>
        </section>

        <section className="section" id="layanan">
          <div className="wrap">
            <p className="eyebrow">{s.verticalUi.scopeEyebrow}</p>
            <h2>{v.servicesTitle}</h2>
            <div className="grid grid-4" style={{ marginTop: 32 }}>
              {v.services.map((item) => (
                <div className="card" key={item.title}>
                  <div className="card-icon">
                    <Icon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {v.packages.length > 0 ? (
          <section className="section section-alt">
            <div className="wrap">
              <p className="eyebrow">{s.verticalUi.packagesEyebrow}</p>
              <h2>{s.verticalUi.packagesTitle}</h2>
              <div className="grid grid-3" style={{ marginTop: 32 }}>
                {v.packages.map((p) => (
                  <div className={`card ${p.featured ? "card-featured" : ""}`} key={p.name}>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <ul className="ticks">
                      {p.items.map((i) => (
                        <li key={i}>
                          <Check />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="form-note" style={{ marginTop: 20 }}>
                {s.verticalUi.priceNote}
              </p>
            </div>
          </section>
        ) : null}

        <section className={`section ${v.packages.length > 0 ? "" : "section-alt"}`} id="bukti">
          <div className="wrap">
            <p className="eyebrow">{s.verticalUi.proofEyebrow}</p>
            <h2>{s.verticalUi.proofTitle}</h2>
            <div className="grid grid-3" style={{ marginTop: 32 }}>
              {v.proof.map((p) => (
                <div className="card" key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="form">
          <div className="wrap" style={{ maxWidth: 760 }}>
            <p className="eyebrow">{s.verticalUi.formEyebrow}</p>
            <h2>{s.verticalUi.formTitle}</h2>
            <p className="lede" style={{ marginTop: 12, marginBottom: 28 }}>
              {s.verticalUi.formLede}
            </p>
            <LeadForm
              fields={v.formFields}
              note={v.responseTime}
              ctaLabel={v.ctaPrimaryType === "wa" ? s.form.sendWa : s.form.sendRequest}
              verticalName={v.name}
              copy={{
                required: s.form.required,
                contactLabel: s.form.contactLabel,
                contactPlaceholder: s.form.contactPlaceholder,
                contactKey: s.form.contactKey,
                sent: s.form.sent,
                greetingLine: s.form.greeting(v.name),
              }}
            />
          </div>
        </section>
      </main>

      <Footer lang={lang} />
      <StickyChat lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </div>
  );
}
