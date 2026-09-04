# giprebrand

Situs rebrand `gip.co.id` untuk PT Galactic Indonesia Perkasa. Satu induk, tiga sub-brand: `gip.event`, `gip.connect`, dan `gip.marine`.

Dibangun dengan Next.js 15 (App Router). Seluruh halaman ter-render statis, tanpa database dan tanpa variabel lingkungan.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Deploy ke Vercel

Vercel mendeteksi Next.js secara otomatis. Impor repositori ini, biarkan seluruh pengaturan pada nilai bawaan, lalu deploy. Tidak ada environment variable yang perlu diisi.

## Struktur

```
app/
  page.js            Homepage, audience splitter tiga lini
  event/             Hub gip.event
  connect/           Hub gip.connect
  marine/            Hub gip.marine
  tentang-kami/      Halaman perusahaan
  legalitas/         Identitas badan hukum dan posisi kepatuhan
  kontak/            Jalur kontak dan pengarah formulir
  globals.css        Seluruh styling dan design token
components/
  Chrome.js          Header, footer, ikon, logo mark, helper WhatsApp
  VerticalPage.js    Template halaman hub, dipakai ketiga lini
  LeadForm.js        Formulir dengan validasi, mengirim ke WhatsApp
lib/
  content.js         Seluruh teks, warna aksen, data gambar, partner, klien, kantor
public/
  gip-mark.jpg       Logo GIP
  partners/          Logo partner teknologi
  clients/           Logo klien
```

## Mengubah isi

Hampir seluruh teks berada di `lib/content.js`. Menambah layanan, mengubah paket, mengganti warna aksen, atau menyesuaikan field formulir cukup dilakukan di berkas tersebut tanpa menyentuh komponen.

Warna aksen per lini:

| Lini | Aksen |
| --- | --- |
| gip.event | `#D85A30` |
| gip.connect | `#7F77DD` |
| gip.marine | `#1D9E75` |

Warna aksen induk tetap navy `#1c3f94`. Warna cyan pada logo tidak dipakai sebagai warna aksen.

## Yang harus diganti sebelum peluncuran

1. **Foto.** Seluruh gambar masih berasal dari Unsplash sebagai penampung sementara. Ganti dengan dokumentasi proyek asli, terutama pada blok portfolio dan studi kasus. Lihat `CREDITS.md`.
2. **Angka kredibilitas.** Nilai pada `stats` di `lib/content.js` masih contoh, dan sekarang tampil tanpa disclaimer.
3. **Isi halaman legalitas.** Perlu ditinjau penasihat hukum sebelum dipublikasikan.

## Formulir

`LeadForm` melakukan validasi di sisi klien lalu membuka WhatsApp dengan ringkasan isian. Tidak ada data yang dikirim ke server. Jika nanti dibutuhkan penyimpanan lead, tambahkan Route Handler di `app/api/` dan panggil dari `submit()`.
