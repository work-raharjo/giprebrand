import Link from "next/link";
import { Header, Footer, waLink } from "../../components/Chrome";
import { company, offices, verticalList } from "../../lib/content";

export const metadata = {
  title: "Kontak",
  description: "Hubungi PT Galactic Indonesia Perkasa untuk kebutuhan event, jaringan, dan konektivitas maritim.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <p className="eyebrow">Kontak</p>
            <h1>Mari bicara</h1>
            <p className="lede" style={{ marginTop: 18 }}>
              Untuk kebutuhan mendesak, WhatsApp jalur tercepat. Untuk pengadaan formal, kirim kerangka kebutuhan
              lewat surel dan kami balas dengan penawaran tertulis.
            </p>

            <div className="grid grid-2" style={{ marginTop: 34 }}>
              <div className="card">
                <h3>WhatsApp</h3>
                <p>Respons di bawah satu jam pada jam kerja.</p>
                <div className="hero-actions">
                  <a className="btn btn-solid" href={waLink("Halo GIP, saya ingin berkonsultasi.")} target="_blank" rel="noopener">
                    Buka WhatsApp
                  </a>
                </div>
              </div>
              <div className="card">
                <h3>Surel dan telepon</h3>
                <p>
                  <a href={`mailto:${company.email}`} style={{ textDecoration: "underline" }}>{company.email}</a>
                  <br />
                  <a href={`tel:${company.phone}`} style={{ textDecoration: "underline" }}>{company.phone}</a>
                </p>
                <p style={{ marginTop: 10 }}>Jakarta &middot; Batam &middot; Bandung</p>
              </div>
            </div>

            <h2 style={{ marginTop: 52 }}>Kantor</h2>
            <div className="grid grid-3" style={{ marginTop: 24 }}>
              {offices.map((o) => (
                <div className="card" key={o.city}>
                  <h3>{o.city}</h3>
                  <p>{o.addr}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: 52 }}>Formulir sesuai lini layanan</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Tiap lini punya pertanyaan yang berbeda, supaya tim kami bisa menyiapkan jawaban yang tepat sejak
              balasan pertama.
            </p>
            <div className="hero-actions">
              {verticalList.map((v) => (
                <Link className="btn btn-outline" href={`/${v.slug}#form`} key={v.slug}>
                  {v.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
