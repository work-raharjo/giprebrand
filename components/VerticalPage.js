import { Header, Footer, Icon, Check, waLink } from "./Chrome";
import LeadForm from "./LeadForm";
import { images } from "../lib/content";

export default function VerticalPage({ v }) {
  const heroImg = images[v.heroImage];
  const style = {
    "--accent": v.accent,
    "--accent-dark": v.accentDark,
    "--accent-soft": v.accentSoft,
  };

  return (
    <div style={style}>
      <Header vertical={v} />

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
                {v.ctaPrimary.type === "wa" ? (
                  <a
                    className="btn btn-solid"
                    href={waLink(`Halo GIP, saya ingin menanyakan ${v.name}.`)}
                    target="_blank"
                    rel="noopener"
                  >
                    {v.ctaPrimary.label}
                  </a>
                ) : (
                  <a className="btn btn-solid" href="#form">
                    {v.ctaPrimary.label}
                  </a>
                )}
                <a className="btn btn-outline" href={v.ctaSecondary.href}>
                  {v.ctaSecondary.label}
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
            <p className="eyebrow">Lingkup layanan</p>
            <h2>{v.servicesTitle}</h2>
            <div className="grid grid-4" style={{ marginTop: 32 }}>
              {v.services.map((s) => (
                <div className="card" key={s.title}>
                  <div className="card-icon">
                    <Icon name={s.icon} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {v.packages.length > 0 ? (
          <section className="section section-alt">
            <div className="wrap">
              <p className="eyebrow">Paket</p>
              <h2>Tiga tingkat, lingkupnya tertulis</h2>
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
                Harga menyesuaikan durasi, venue, dan hasil site survey. Penawaran tertulis kami kirim setelah
                lingkup dikunci.
              </p>
            </div>
          </section>
        ) : null}

        <section className={`section ${v.packages.length > 0 ? "" : "section-alt"}`} id="bukti">
          <div className="wrap">
            <p className="eyebrow">Bukti dan jaminan</p>
            <h2>Yang bisa Anda periksa sebelum memutuskan</h2>
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
            <p className="eyebrow">Mulai percakapan</p>
            <h2>Kirim kebutuhan Anda</h2>
            <p className="lede" style={{ marginTop: 12, marginBottom: 28 }}>
              Isi ringkas saja. Detail teknisnya kami lengkapi lewat telepon.
            </p>
            <LeadForm
              fields={v.formFields}
              note={v.responseTime}
              ctaLabel={v.ctaPrimary.type === "wa" ? "Kirim lewat WhatsApp" : "Kirim permintaan"}
              verticalName={v.name}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
