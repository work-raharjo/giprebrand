# Handoff: Optimasi web gip.co.id (giprebrand)

## Ringkasan

Paket ini berisi hasil optimasi situs rebrand `gip.co.id` untuk PT Galactic Indonesia Perkasa: perbaikan urutan section homepage, penulisan ulang copywriting agar lebih lugas, penerapan logo GIP baru sebagai logo mark dan motif visual, penghapusan seluruh penanda konten sementara, serta perbaikan perilaku responsif.

Repo target: `work-raharjo/giprebrand`, branch `main`, Next.js 15 App Router.

## Tentang berkas desain dalam paket ini

`GIP Site.dc.html` adalah **referensi desain dalam bentuk HTML** — prototipe satu berkas yang menampilkan seluruh 7 halaman dengan navigasi internal (state `page`, bukan routing). Berkas ini **bukan kode produksi untuk dipasang langsung**. Tugasnya adalah menerapkan perubahan yang dijelaskan di bawah ke dalam struktur Next.js yang sudah ada di repo (`app/`, `components/`, `lib/content.js`, `app/globals.css`), mengikuti pola yang sudah dipakai di sana.

Semua nilai warna, ukuran, dan spacing di prototipe berasal dari `app/globals.css` yang ada di repo, jadi mayoritas perubahan cukup dilakukan di `lib/content.js`, `components/Chrome.js`, `app/page.js`, dan penambahan media query di `app/globals.css`.

## Fidelity

**High-fidelity.** Warna, tipografi, spacing, dan copy sudah final. Font tetap Inter (weight 400–700). Token warna tidak berubah dari repo.

## Perubahan per berkas

### 1. `public/gip-mark.jpg` (berkas baru)

Salin `assets/gip-mark.jpg` dari paket ini ke `public/gip-mark.jpg`.

Logo: mark heksagonal bergaya sirkuit, ink `#14161a` dengan aksen cyan `#1BA8D5`, latar putih, rasio 1:1 (1242×1242).

Catatan: berkas sumber adalah JPEG dengan latar putih solid. Kalau tersedia versi SVG atau PNG transparan, pakai itu — akan menghilangkan kebutuhan trik blend mode pada motif (lihat poin 4).

### 2. `components/Chrome.js`

**a. Ganti monogram teks dengan logo mark.** Di `Header()` dan `Footer()`, ganti:

```jsx
<span className="logo-mark">GIP</span>
```

dengan:

```jsx
<img src="/gip-mark.jpg" alt="Logo GIP" className="logo-mark-img" width={30} height={30} />
```

CSS pendamping (tambahkan di `globals.css`):

```css
.logo-mark-img {
  width: 30px;
  height: 30px;
  border-radius: 7px;
  object-fit: cover;
}
```

Class `.logo-mark` lama boleh dihapus dari `globals.css` setelah tidak dipakai.

**b. Hapus baris kredit Unsplash di `footer-bottom`.** Hapus seluruh blok:

```jsx
<span>
  Foto sementara dari{" "}
  <a href="https://unsplash.com" style={{ textDecoration: "underline" }}>Unsplash</a>
  . Ganti dengan dokumentasi proyek sebelum peluncuran.
</span>
```

Ganti dengan identitas legal yang lebih berguna untuk procurement:

```jsx
<span>
  NPWP {company.npwp} &middot; KBLI {company.kbli}
</span>
```

**c. Copy deskripsi footer.** Ganti:

> Infrastruktur yang terpasang, menyala, dan bertahan di lokasi yang sulit.

menjadi:

> Pasang, jalankan, dan jaga infrastruktur teknis di lapangan.

### 3. `app/page.js` (homepage)

**a. Urutan section diubah.** Urutan lama: hero → tiga lini → statistik → logo klien → narasi → CTA. Urutan baru:

1. Hero
2. Tiga lini layanan (`#lini`)
3. Narasi "Kenapa satu perusahaan" — `section-alt`
4. Statistik
5. Satu blok CTA gabungan

Alasan: narasi menjelaskan kenapa tiga lini itu satu perusahaan, jadi harus langsung setelah audience splitter. Statistik jadi penutup pendukung, bukan pemotong alur.

**b. Section "Dipercaya oleh" (logo klien) dihapus seluruhnya.** Lima `.logo-slot` berisi "Klien 1"–"Klien 5" adalah penampung. Hapus section-nya; tampilkan kembali hanya kalau sudah ada logo klien asli beserta izin pakainya.

**c. Catatan disclaimer statistik dihapus.** Hapus paragraf:

> Angka bersifat contoh. Ganti dengan data operasional aktual sebelum situs diluncurkan.

Konsekuensinya: nilai `stats` di `lib/content.js` sekarang tampil tanpa disclaimer, jadi **harus** diganti data operasional aktual sebelum deploy.

**d. Copy hero.** Ganti:

- h1 lama: "Infrastruktur yang terpasang, menyala, dan bertahan di lokasi yang sulit"
- h1 baru: **"Kami pasang, jalankan, dan jaga infrastruktur teknis di lapangan"**

- paragraf lama: "Panggung yang harus hidup jam delapan pagi dan kapal yang tidak boleh kehilangan koneksi punya masalah yang sama. Kami menyelesaikannya."
- paragraf baru: **"Event production, jaringan kantor multi cabang, dan konektivitas maritim. Tiga lini, satu tim lapangan yang sama."**

Tombol hero pertama: label "Lihat layanan" → **"Lihat tiga lini"**.

**e. Copy section tiga lini.**

- h2 lama: "Pilih yang sesuai kebutuhan Anda"
- h2 baru: **"Mulai dari yang paling dekat dengan kebutuhan Anda"**

**f. Copy narasi.**

- h2 lama: "Kompetensinya sama, alatnya saja yang berbeda"
- h2 baru: **"Alatnya berbeda, pekerjaannya sama"**

- paragraf 1 baru: **"Panggung, kantor cabang, dan kapal menuntut hal yang sama dari kami: pasang cepat, jalan tanpa putus, orangnya ada di lokasi, dan tidak ada kesempatan mengulang."**
- paragraf 2 baru: **"LED, line array, switch, dan terminal satelit hanya alat kerja. Yang kami tanggung adalah semuanya bekerja pada saat dipakai."**

Tombol: "Tentang GIP" → **"Cara kami bekerja"** (tetap ke `/tentang-kami`).

**g. CTA penutup jadi satu panel.** Ganti section CTA rata-tengah dengan satu panel `--accent-soft`: judul kiri, dua tombol kanan.

Markup referensi (class baru `cta-panel`):

```jsx
<section className="section">
  <div className="wrap">
    <div className="cta-panel">
      <div>
        <h2>Ada rencana yang perlu dibicarakan</h2>
        <p>Kebutuhan event biasanya mendesak, jadi WhatsApp lebih cepat. Untuk jaringan dan maritim, kirim kerangka kebutuhannya lewat formulir.</p>
      </div>
      <div className="hero-actions">
        <a className="btn btn-solid" href={waLink("Halo GIP, saya ingin menanyakan kebutuhan event.")} target="_blank" rel="noopener">Chat WhatsApp</a>
        <Link className="btn btn-outline" href="/marine#form">Ajukan proposal konektivitas</Link>
      </div>
    </div>
  </div>
</section>
```

CSS:

```css
.cta-panel {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--accent-soft);
  padding: 46px 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.cta-panel h2 {
  color: var(--accent-dark);
}

.cta-panel p {
  font-size: 1.05rem;
  color: var(--accent-dark);
  opacity: 0.85;
  margin-top: 12px;
  max-width: 40rem;
}

@media (max-width: 700px) {
  .cta-panel {
    padding: 32px 24px;
  }
}
```

**h. Motif logo di hero.** Tambahkan di dalam `.hero-media`, setelah `<img>` foto:

```jsx
<img src="/gip-mark.jpg" alt="" className="hero-motif" />
```

CSS:

```css
.hero-motif {
  position: absolute;
  right: -140px;
  bottom: -180px;
  width: 720px;
  height: 720px;
  filter: invert(1);
  mix-blend-mode: screen;
  opacity: 0.16;
  pointer-events: none;
}

@media (max-width: 860px) {
  .hero-motif {
    width: 460px;
    height: 460px;
    right: -120px;
    bottom: -140px;
  }
}
```

`filter: invert(1)` + `mix-blend-mode: screen` membuat latar putih JPEG hilang di atas hero gelap dan hanya glyph-nya yang tampak. Kalau logo diganti PNG/SVG transparan, hapus `filter` dan `mix-blend-mode`, cukup `opacity`.

Gradien overlay hero juga diubah dari vertikal ke diagonal agar teks kiri lebih kontras:

```css
.hero-media::after {
  background: linear-gradient(105deg, rgba(9,11,15,0.94) 0%, rgba(10,12,16,0.72) 55%, rgba(10,12,16,0.5) 100%);
}
```

### 4. `components/VerticalPage.js`

**a. Motif logo di `vhero`.** Beri `position: relative; overflow: hidden` pada `.vhero`, lalu tambahkan sebagai anak pertama section:

```jsx
<img src="/gip-mark.jpg" alt="" className="vhero-motif" />
```

```css
.vhero {
  position: relative;
  overflow: hidden;
}

.vhero-motif {
  position: absolute;
  left: -120px;
  top: -120px;
  width: 420px;
  height: 420px;
  mix-blend-mode: multiply;
  opacity: 0.07;
  pointer-events: none;
}
```

`multiply` dipakai di sini karena latar `vhero` terang.

**b. Judul section layanan jadi spesifik per lini.** Sekarang ketiganya memakai h2 identik "Yang kami kerjakan pada lini ini". Ganti dengan field baru `servicesTitle` di `lib/content.js`:

| Lini | servicesTitle |
| --- | --- |
| gip.event | Yang kami kerjakan di lini ini |
| gip.connect | Yang kami kelola di lini ini |
| gip.marine | Yang kami pasang di lini ini |

**c. Copy paket dan formulir.**

- h2 paket: "Tiga tingkat, lingkup tertulis" → **"Tiga tingkat, lingkupnya tertulis"**
- catatan paket: "…Penawaran tertulis dikirim setelah lingkup dikunci." → **"…Penawaran tertulis kami kirim setelah lingkup dikunci."**
- lede formulir: "Isi ringkas saja. Kami akan menghubungi Anda untuk melengkapi detail teknisnya." → **"Isi ringkas saja. Detail teknisnya kami lengkapi lewat telepon."**

### 5. `components/LeadForm.js`

**a. Field error diberi tinggi minimum** supaya grid tidak bergeser saat pesan validasi muncul:

```css
.form-error {
  min-height: 1em;
}
```

**b. Border input merah saat error.** Tambahkan `style={{ borderColor: errors[f.label] ? "#c0392b" : undefined }}` pada `<input>`, atau class `.field input.is-error { border-color: #c0392b; }`.

**c. Copy status kirim.** "Ringkasan permintaan sudah disiapkan di WhatsApp. Jika jendela tidak terbuka, silakan izinkan popup lalu coba lagi." → **"Ringkasan permintaan sudah disiapkan di WhatsApp. Kalau jendelanya tidak terbuka, izinkan popup lalu coba lagi."**

### 6. `lib/content.js`

**a. Tambah field `servicesTitle`** pada ketiga vertical (nilai di tabel poin 4b).

**b. Copy `heroSub` gip.event.** "Kami memasang, mengoperasikan, dan membongkar seluruh perangkat teknis event Anda. Satu tim, satu tanggung jawab." → **"Kami pasang, operasikan, dan bongkar seluruh perangkat teknis event Anda. Satu tim, satu penanggung jawab."**

**c. Copy `heroSub` gip.connect.** "…Tim Anda kembali fokus ke pekerjaan utama." → **"…Tim Anda kembali fokus ke pekerjaan utamanya."**

**d. Ganti `stats` dengan angka operasional asli.** Nilai sekarang (`120+`, `99,8%`, `18`, `< 1 jam`) adalah contoh dan disclaimer-nya sudah dihapus dari UI.

### 7. `app/tentang-kami/page.js`

Copy paragraf pembuka ditulis ulang lebih lugas:

- p1: **"PT Galactic Indonesia Perkasa berkantor di Bandung dan bekerja di seluruh Indonesia. Kami mulai dari layanan jaringan terkelola, lalu masuk ke produksi teknis event dan konektivitas maritim karena pelanggan meminta hal yang sama di tiga situasi berbeda."**
- p2: **"Model bisnis kami berbasis paket bandwidth dan layanan terkelola. Perangkat di lokasi kami miliki dan rawat sendiri, sementara kapasitas upstream disediakan mitra pemegang lisensi telekomunikasi. Pembagian ini membuat tanggung jawab operasional jelas dan penanganan insiden lebih cepat."**
- section "Cara kami bekerja": **"Setiap pekerjaan dibuka dengan site survey dan ditutup dengan berita acara. Kriteria penerimaan ditulis di muka, jadi tidak ada perdebatan soal apa yang dihitung selesai. Untuk layanan berlangganan, target ketersediaan dan waktu pemulihan tercantum dalam SLA."**

Tambahkan tombol ke `/legalitas` di bawah paragraf itu (`btn btn-outline`, label "Legalitas dan kepatuhan") — sebelumnya halaman ini tidak punya jalan keluar.

### 8. `app/legalitas/page.js`

Hapus catatan penampung di akhir halaman:

> Isi halaman ini perlu ditinjau oleh penasihat hukum perusahaan sebelum dipublikasikan.

Catatan ini tidak boleh tampil ke publik. Peninjauan legal tetap wajib dilakukan sebelum deploy — pindahkan sebagai komentar kode atau issue, bukan teks halaman.

Copy paragraf "Posisi terhadap lisensi telekomunikasi" disederhanakan:

**"GIP beroperasi sebagai penyedia layanan terkelola dan penjual kembali jasa telekomunikasi. Kapasitas upstream disediakan mitra pemegang lisensi penyelenggaraan telekomunikasi, dan kewajiban yang melekat pada lisensi tersebut berada pada pemegang lisensi. GIP bertanggung jawab atas perangkat di lokasi pelanggan, konfigurasi, pemantauan, dan dukungan operasional."**

### 9. `app/kontak/page.js`

Copy lede: "Untuk kebutuhan yang mendesak, WhatsApp adalah jalur tercepat. Untuk pengadaan formal, kirimkan kerangka kebutuhan melalui surel dan kami balas dengan penawaran tertulis." → **"Untuk kebutuhan mendesak, WhatsApp jalur tercepat. Untuk pengadaan formal, kirim kerangka kebutuhan lewat surel dan kami balas dengan penawaran tertulis."**

Copy formulir: "Setiap lini memiliki formulir dengan pertanyaan yang berbeda, agar tim kami bisa menyiapkan jawaban yang tepat sejak balasan pertama." → **"Tiap lini punya pertanyaan yang berbeda, supaya tim kami bisa menyiapkan jawaban yang tepat sejak balasan pertama."**

### 10. `app/globals.css` — responsif

Media query `@media (max-width: 860px)` yang ada sudah menangani `.story`, `.vhero-grid`, `.footer-grid`, dan `.nav-hide`. Yang perlu ditambahkan:

```css
@media (max-width: 700px) {
  .header-inner {
    height: auto;
    min-height: 66px;
    padding-top: 10px;
    padding-bottom: 10px;
    flex-wrap: wrap;
    gap: 12px 20px;
  }
  .vswitch {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .hero-content {
    padding: 72px 0;
  }
  h1 {
    font-size: clamp(1.75rem, 7vw, 2.4rem);
  }
}
```

Alasan: pada layar ≤ 480px, `.vswitch` (tiga pill nama lini) masih meluber melewati lebar header karena `.header-inner` punya `height: 66px` tetap dan tidak wrap.

### 11. `CREDITS.md` dan `README.md`

`CREDITS.md` tetap dipertahankan selama foto Unsplash masih dipakai — lisensinya mengizinkan, dan kredit fotografer tetap praktik yang baik. Yang dihapus hanya baris kredit di footer situs.

Di `README.md`, checklist "Yang harus diganti sebelum peluncuran" perlu diperbarui: poin logo GIP (nomor 5) sudah selesai; poin foto, angka kredibilitas, dan tinjauan legal masih terbuka; poin logo klien berubah statusnya jadi "section dihapus, tampilkan kembali bila ada logo asli".

## Design token

Tidak ada token baru. Nilai yang dipakai, semuanya sudah ada di `app/globals.css`:

| Token | Nilai |
| --- | --- |
| `--ink` | `#14161a` |
| `--ink-soft` | `#545a63` |
| `--ink-faint` | `#8b919b` |
| `--line` | `#e4e6ea` |
| `--surface` | `#ffffff` |
| `--surface-alt` | `#f6f7f9` |
| `--brand` / `--accent` | `#1c3f94` |
| `--accent-dark` | `#142f6f` |
| `--accent-soft` | `#eef2fb` |
| `--radius` | `10px` |
| `--max` | `1140px` |

Aksen per lini tidak berubah: gip.event `#D85A30` / `#993C1D` / `#FAECE7`, gip.connect `#7F77DD` / `#534AB7` / `#EEEDFE`, gip.marine `#1D9E75` / `#0F6E56` / `#E1F5EE`.

Warna cyan logo (`#1BA8D5`) **tidak** diangkat jadi warna aksen — aksen induk tetap navy. Cyan hanya hadir di dalam logo mark itu sendiri.

Nilai baru satu-satunya: `border-radius: 16px` dan `padding: 46px 40px` pada `.cta-panel`.

## Tipografi

Inter, weight 400–700 (sama seperti repo). Skala heading di `globals.css` tidak berubah kecuali hero h1 di mobile (poin 10). Semua heading `font-weight: 600`, kecuali hero h1 yang dinaikkan ke `700`.

## Aset

| Aset | Sumber | Catatan |
| --- | --- | --- |
| `gip-mark.jpg` | Diberikan klien | 1242×1242 JPEG, latar putih. Minta versi SVG/PNG transparan kalau ada |
| Foto Unsplash | URL di `lib/content.js` | Masih penampung. Ganti dengan dokumentasi proyek GIP |
| Ikon layanan | `components/Chrome.js` | SVG stroke inline, `strokeWidth: 1.7`. Tidak berubah |

## Berkas dalam paket ini

| Berkas | Isi |
| --- | --- |
| `GIP Site.dc.html` | Prototipe HTML seluruh 7 halaman, navigasi internal via state |
| `assets/gip-mark.jpg` | Logo GIP, salin ke `public/gip-mark.jpg` |
| `README.md` | Dokumen ini |

## Urutan pengerjaan yang disarankan

1. Salin logo ke `public/`, tambahkan `.logo-mark-img`, ganti monogram di `Chrome.js`.
2. Hapus seluruh penanda sementara (footer Unsplash, disclaimer statistik, section logo klien, catatan legal).
3. Terapkan perubahan copy — semuanya string, tidak menyentuh struktur.
4. Urut ulang section homepage dan tambahkan `.cta-panel`.
5. Tambahkan motif logo di hero homepage dan `vhero`.
6. Tambahkan media query `700px` dan uji di 390px.
7. Ganti `stats` dengan angka asli, lalu jalankan tinjauan legal untuk halaman legalitas.
