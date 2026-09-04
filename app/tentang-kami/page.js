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
              {company.name} berkedudukan di Bandung dan bekerja di seluruh Indonesia. Kami memulai dari layanan
              jaringan terkelola, lalu berkembang ke produksi teknis event dan konektivitas maritim karena
              pelanggan kami membutuhkan hal yang sama di tiga situasi yang berbeda.
            </p>
            <p className="lede" style={{ marginTop: 14 }}>
              Model bisnis kami berbasis paket bandwidth dan layanan terkelola. Perangkat di lokasi kami miliki dan
              kami rawat sendiri, sementara kapasitas upstream disediakan oleh mitra pemegang lisensi
              telekomunikasi. Struktur ini membuat tanggung jawab operasional jelas dan waktu penanganan insiden
              lebih pendek.
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
                Setiap pekerjaan diawali site survey dan diakhiri berita acara. Kriteria penerimaan ditulis di muka,
                sehingga tidak ada perdebatan mengenai apa yang dianggap selesai. Untuk layanan berlangganan,
                target ketersediaan dan waktu pemulihan tercantum dalam SLA.
              </p>
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
