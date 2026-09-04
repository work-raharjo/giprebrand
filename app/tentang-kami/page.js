import Link from "next/link";
import { Header, Footer } from "../../components/Chrome";
import { company, images, stats } from "../../lib/content";

export const metadata = {
  title: "Tentang kami",
  description:
    "PT Galactic Indonesia Perkasa membangun dan mengoperasikan infrastruktur teknis untuk event, korporasi, dan sektor maritim.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <p className="eyebrow">Tentang kami</p>
            <h1>Satu kompetensi, tiga medan yang berbeda</h1>
            <p className="lede" style={{ marginTop: 20 }}>
              {company.name} berkantor di Jakarta, Batam, dan Bandung, serta bekerja di seluruh Indonesia. Kami
              mulai dari layanan jaringan terkelola, lalu masuk ke produksi teknis event dan konektivitas maritim
              karena pelanggan meminta hal yang sama di tiga situasi berbeda.
            </p>
            <p className="lede" style={{ marginTop: 14 }}>
              Model bisnis kami berbasis paket bandwidth dan layanan terkelola. Perangkat di lokasi kami miliki dan
              rawat sendiri, sementara kapasitas upstream disediakan mitra pemegang lisensi telekomunikasi.
              Pembagian ini membuat tanggung jawab operasional jelas dan penanganan insiden lebih cepat.
            </p>
          </div>
        </section>

        <section className="section section-alt">
          <div className="wrap">
            <div className="grid grid-4">
              {stats.map((s) => (
                <div className="stat" key={s.label} style={{ background: "var(--surface)" }}>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap story">
            <div>
              <p className="eyebrow">Cara kami bekerja</p>
              <h2>Lingkup dikunci sebelum pekerjaan dimulai</h2>
              <p className="lede" style={{ marginTop: 16 }}>
                Setiap pekerjaan dibuka dengan site survey dan ditutup dengan berita acara. Kriteria penerimaan
                ditulis di muka, jadi tidak ada perdebatan soal apa yang dihitung selesai. Untuk layanan
                berlangganan, target ketersediaan dan waktu pemulihan tercantum dalam SLA.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-outline" href="/legalitas">
                  Legalitas dan kepatuhan
                </Link>
              </div>
            </div>
            <div className="story-img">
              <img src={images.connectAlt.src} alt={images.connectAlt.alt} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
