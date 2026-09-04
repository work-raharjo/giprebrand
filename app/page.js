import Link from "next/link";
import { Header, Footer, waLink } from "../components/Chrome";
import { images, stats, verticalList } from "../lib/content";

export default function Home() {
  return (
    <>
      <a href="#konten" className="skip">
        Lompat ke konten
      </a>
      <Header />

      <main id="konten">
        <section className="hero">
          <div className="hero-media">
            <img src={images.hero.src} alt={images.hero.alt} />
          </div>
          <div className="wrap">
            <div className="hero-content">
              <p className="eyebrow hero-eyebrow">PT Galactic Indonesia Perkasa</p>
              <h1>Infrastruktur yang terpasang, menyala, dan bertahan di lokasi yang sulit</h1>
              <p>
                Panggung yang harus hidup jam delapan pagi dan kapal yang tidak boleh kehilangan koneksi punya
                masalah yang sama. Kami menyelesaikannya.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#lini">
                  Lihat layanan
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
            <h2>Pilih yang sesuai kebutuhan Anda</h2>
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

        <section className="section section-alt">
          <div className="wrap">
            <p className="eyebrow">Rekam jejak gabungan</p>
            <div className="grid grid-4" style={{ marginTop: 8 }}>
              {stats.map((s) => (
                <div className="stat" key={s.label} style={{ background: "var(--surface)" }}>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>
            <p className="form-note" style={{ marginTop: 18 }}>
              Angka bersifat contoh. Ganti dengan data operasional aktual sebelum situs diluncurkan.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="eyebrow">Dipercaya oleh</p>
            <div className="logos">
              {["Klien 1", "Klien 2", "Klien 3", "Klien 4", "Klien 5"].map((l) => (
                <div className="logo-slot" key={l}>
                  {l}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap story">
            <div>
              <p className="eyebrow">Kenapa satu perusahaan</p>
              <h2>Kompetensinya sama, alatnya saja yang berbeda</h2>
              <p className="lede" style={{ marginTop: 18 }}>
                Event production dan konektivitas maritim terlihat seperti dua dunia. Pada praktiknya keduanya
                menuntut hal yang identik: deployment cepat, uptime yang tidak bisa ditawar, tim yang hadir di
                lokasi, dan tidak ada ruang untuk mengulang.
              </p>
              <p className="lede">
                LED, sound, lighting, switch, dan terminal satelit hanyalah alat. Yang kami jual adalah kepastian
                bahwa semuanya bekerja saat dibutuhkan.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-outline" href="/tentang-kami">
                  Tentang GIP
                </Link>
              </div>
            </div>
            <div className="story-img">
              <img src={images.crowd.src} alt={images.crowd.alt} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap" style={{ textAlign: "center" }}>
            <h2>Ada rencana yang perlu dibicarakan</h2>
            <p className="lede" style={{ margin: "14px auto 28px" }}>
              Dua jalur, sesuai jenis kebutuhan Anda.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <a
                className="btn btn-solid"
                href={waLink("Halo GIP, saya ingin menanyakan kebutuhan event.")}
                target="_blank"
                rel="noopener"
              >
                Chat WhatsApp untuk event
              </a>
              <Link className="btn btn-outline" href="/marine#form">
                Ajukan proposal konektivitas
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
