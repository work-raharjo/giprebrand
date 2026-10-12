import Link from "next/link";
import { Header, Footer, waLink } from "../Chrome";
import HtmlLang from "../HtmlLang";
import StickyChat from "../StickyChat";
import { company, offices } from "../../lib/content";
import { href, t, verticalsFor } from "../../lib/i18n";

export default function Contact({ lang = "id" }) {
  const s = t(lang);
  const lines = verticalsFor(lang);

  return (
    <>
      <HtmlLang lang={lang} />
      <Header lang={lang} route="contact" />
      <main id="konten">
        <section className="section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <p className="eyebrow">{s.contact.eyebrow}</p>
            <h1>{s.contact.title}</h1>
            <p className="lede" style={{ marginTop: 18 }}>{s.contact.lede}</p>

            <div className="grid grid-2" style={{ marginTop: 34 }}>
              <div className="card">
                <h3>{s.contact.waTitle}</h3>
                <p>{s.contact.waBody}</p>
                <div className="hero-actions">
                  <a className="btn btn-solid" href={waLink(s.form.generalGreeting)} target="_blank" rel="noopener">
                    {s.contact.waCta}
                  </a>
                </div>
              </div>
              <div className="card">
                <h3>{s.contact.mailTitle}</h3>
                <p>
                  <a href={`mailto:${company.email}`} style={{ textDecoration: "underline" }}>{company.email}</a>
                  <br />
                  <a href={`tel:${company.phone}`} style={{ textDecoration: "underline" }}>{company.phone}</a>
                </p>
                <p style={{ marginTop: 10 }}>Jakarta &middot; Batam &middot; Bandung</p>
              </div>
            </div>

            <h2 style={{ marginTop: 52 }}>{s.contact.officesTitle}</h2>
            <div className="grid grid-3" style={{ marginTop: 24 }}>
              {offices.map((o) => (
                <div className="card" key={o.city}>
                  <h3>{o.city}</h3>
                  <p>{o.addr}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: 52 }}>{s.contact.formsTitle}</h2>
            <p className="lede" style={{ marginTop: 12 }}>{s.contact.formsBody}</p>
            <div className="hero-actions">
              {lines.map((v) => (
                <Link className="btn btn-outline" href={`${href(lang, v.key)}#form`} key={v.slug}>
                  {v.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <StickyChat lang={lang} />
    </>
  );
}
