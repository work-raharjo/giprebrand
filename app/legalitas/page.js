import { Header, Footer } from "../../components/Chrome";
import { company } from "../../lib/content";

export const metadata = {
  title: "Legalitas",
  description:
    "Informasi badan hukum, klasifikasi usaha, dan posisi kepatuhan PT Galactic Indonesia Perkasa.",
};

const rows = [
  ["Nama badan hukum", company.name],
  ["Alamat terdaftar", company.address],
  ["NPWP", company.npwp],
  ["KBLI", company.kbli],
  ["Penanggung jawab", `${company.pic}, ${company.picRole}`],
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="wrap" style={{ maxWidth: 820 }}>
            <p className="eyebrow">Legalitas dan kepatuhan</p>
            <h1>Dokumen yang biasa diminta procurement</h1>
            <p className="lede" style={{ marginTop: 18 }}>
              Halaman ini merangkum identitas badan hukum dan posisi kepatuhan kami. Salinan dokumen lengkap
              tersedia atas permintaan untuk keperluan vendor registration.
            </p>

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

            <h2 style={{ marginTop: 48 }}>Posisi terhadap lisensi telekomunikasi</h2>
            <p className="lede" style={{ marginTop: 14 }}>
              GIP beroperasi sebagai penyedia layanan terkelola dan penjual kembali jasa telekomunikasi. Kapasitas
              upstream disediakan oleh mitra pemegang lisensi penyelenggaraan telekomunikasi, dan kewajiban yang
              melekat pada lisensi tersebut berada pada pihak pemegang lisensi. GIP bertanggung jawab atas
              perangkat di lokasi pelanggan, konfigurasi, pemantauan, dan dukungan operasional.
            </p>
            <p className="form-note" style={{ marginTop: 20 }}>
              Isi halaman ini perlu ditinjau oleh penasihat hukum perusahaan sebelum dipublikasikan.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
