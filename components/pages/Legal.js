import { Header, Footer } from "../Chrome";
import HtmlLang from "../HtmlLang";
import StickyChat from "../StickyChat";
import { company, offices } from "../../lib/content";
import { t } from "../../lib/i18n";

export default function Legal({ lang = "id" }) {
  const s = t(lang);
  const rows = [
    [s.legal.rows.entity, company.name],
    [s.legal.rows.address, offices[2].addr],
  ];

  return (
    <>
      <HtmlLang lang={lang} />
      <Header lang={lang} route="legal" />
      <main id="konten">
        <section className="section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <p className="eyebrow">{s.legal.eyebrow}</p>
            <h1>{s.legal.title}</h1>
            <p className="lede" style={{ marginTop: 18 }}>{s.legal.lede}</p>

            <div className="form-card" style={{ marginTop: 32, padding: 0, overflow: "hidden" }}>
              <table className="table">
                <tbody>
                  {rows.map(([k, v]) => (
                    <tr key={k}>
                      <th style={{ width: "34%" }}>{k}</th>
                      <td>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Peninjauan penasihat hukum wajib dilakukan sebelum halaman ini dipublikasikan. */}
            <h2 style={{ marginTop: 48 }}>{s.legal.licenseTitle}</h2>
            <p className="lede" style={{ marginTop: 14 }}>{s.legal.licenseBody}</p>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <StickyChat lang={lang} />
    </>
  );
}
