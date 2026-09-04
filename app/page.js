import Link from "next/link";
import { Header, Footer, waLink } from "../components/Chrome";
import { clients, images, partners, stats, verticalList } from "../lib/content";

export default function Home() {
  return (
    <>
      <Header />

      <main id="konten">
        <section className="hero">
          <div className="hero-media">
            <img src={images.hero.src} alt={images.hero.alt} />
            <img src="/gip-mark.jpg" alt="" className="hero-motif" />
          </div>
          <div className="wrap">
            <div className="hero-content">
              <p className="eyebrow hero-eyebrow">PT Galactic Indonesia Perkasa</p>
              <h1>Kami pasang, jalankan, dan jaga infrastruktur teknis di lapangan</h1>
              <p>
                Event production, jaringan kantor multi cabang, dan konektivitas maritim. Tiga lini, satu tim
                lapangan yang sama.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#lini">
                  Lihat tiga lini
                </a>
                <Link className="btn btn-ghost-light" href="/tentang-kami">
                  Tentang GIP
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="lini">
          <div className="wrap">
            <p className="eyebrow">Tiga lini layanan</p>
            <h2>Mulai dari yang paling dekat dengan kebutuhan Anda</h2>
            <div className="grid grid-3" style={{ marginTop: 34 }}>
              {verticalList.map((v) => (
                <Link
                  href={`/${v.slug}`}
                  className="vcard"
                  key={v.slug}
                  style={{ "--accent": v.accent, "--accent-dark": v.accentDark }}
                >
                  <div className="vcard-img">
                    <img src={images[v.image].src} alt={images[v.image].alt} />
                  </div>
                  <div className="vcard-body">
                    <span className="vcard-tag" style={{ color: v.accentDark }}>
                      {v.tagline}
                    </span>
                    <h3>{v.name}</h3>
                    <p>{v.cardBlurb}</p>
                    <span className="vcard-link" style={{ color: v.accentDark }}>
                      Masuk &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-proof">
          <div className="wrap">
            <div className="proof-grid">
              <div>
                <p className="eyebrow">Partner teknologi</p>
                <div className="logo-row">
                  {partners.map((p) => (
                    <img className="logo-row-item" key={p.name} src={p.src} alt={p.name} />
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow">Klien</p>
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
              <p className="eyebrow">Kenapa satu perusahaan</p>
              <h2>Alatnya berbeda, pekerjaannya sama</h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Panggung, kantor cabang, dan kapal menuntut hal yang sama dari kami: pasang cepat, jalan tanpa
                putus, orangnya ada di lokasi, dan tidak ada kesempatan mengulang.
              </p>
              <p className="lede">
                LED, line array, switch, dan terminal satelit hanya alat kerja. Yang kami tanggung adalah semuanya
                bekerja pada saat dipakai.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-outline" href="/tentang-kami">
                  Cara kami bekerja
                </Link>
              </div>
            </div>
            <div className="story-img">
              <img src={images.crowd.src} alt={images.crowd.alt} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: 20 }}>
              Rekam jejak gabungan
            </p>
            <div className="grid grid-4">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="cta-panel">
              <div>
                <h2>Ada rencana yang perlu dibicarakan</h2>
                <p>
                  Kebutuhan event biasanya mendesak, jadi WhatsApp lebih cepat. Untuk jaringan dan maritim, kirim
                  kerangka kebutuhannya lewat formulir.
                </p>
              </div>
              <div className="hero-actions">
                <a
                  className="btn btn-solid"
                  href={waLink("Halo GIP, saya ingin menanyakan kebutuhan event.")}
                  target="_blank"
                  rel="noopener"
                >
                  Chat WhatsApp
                </a>
                <Link className="btn btn-outline" href="/marine#form">
                  Ajukan proposal konektivitas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
