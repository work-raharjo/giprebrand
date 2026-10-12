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
  page.js            Beranda bahasa Indonesia
  event/             Hub gip.event
  network/           Hub gip.network
  marine/            Hub gip.marine
  tentang-kami/      Halaman perusahaan
  legalitas/         Identitas badan hukum dan posisi kepatuhan
  kontak/            Jalur kontak dan pengarah formulir
  en/                Seluruh halaman versi bahasa Inggris
    page.js, event/, network/, marine/, about/, legal/, contact/
  layout.js          Metadata global dan schema Organization
  sitemap.js         Sitemap kedua bahasa, lengkap dengan anotasi alternates
  globals.css        Seluruh styling dan design token
components/
  Chrome.js          Header, footer, pengalih bahasa, ikon, helper WhatsApp
  VerticalPage.js    Template halaman hub, dipakai ketiga lini di kedua bahasa
  LeadForm.js        Formulir dengan validasi, mengirim ke WhatsApp
  StickyChat.js      Tombol WhatsApp melayang
  HtmlLang.js        Menyetel atribut lang pada <html> di sisi klien
  pages/             Isi halaman bersama: Home, About, Legal, Contact
lib/
  content.js         Data tanpa bahasa: gambar, perusahaan, kantor, partner, klien, warna aksen
  strings.js         Seluruh teks Indonesia dan Inggris
  i18n.js            Resolusi bahasa, pembentuk tautan, dan metadata per halaman
public/
  gip-mark.jpg       Logo GIP
  partners/          Logo partner teknologi
  clients/           Logo klien
```

## Dua bahasa

Bahasa Indonesia berada di akar (`/`, `/event`, `/kontak`). Bahasa Inggris memakai awalan `/en` dengan slug yang disesuaikan (`/en`, `/en/event`, `/en/contact`). Kedua versi dirender statis, bukan diterjemahkan di sisi klien, sehingga keduanya bisa diindeks mesin pencari.

Tombol pengalih berada di kanan header dalam bentuk pil dua segmen. Tombol itu menautkan ke halaman setara di bahasa lain, bukan ke beranda, jadi pembaca tidak kehilangan posisinya.

Menambah atau mengubah teks dilakukan di `lib/strings.js`. Berkas itu berisi dua objek dengan struktur identik, `id` dan `en`. Menambah kunci hanya di salah satu bahasa akan membuat teks hilang di bahasa yang lain, jadi selalu ubah keduanya.

Pemetaan rute berada di `strings.<bahasa>.routes`. Seluruh tautan internal memanggil `href(lang, key)` dari `lib/i18n.js`, bukan menulis path literal, supaya awalan dan slug tetap konsisten.

Halaman legalitas disetel `noindex` di kedua bahasa dan tidak dimasukkan ke sitemap sampai ditinjau penasihat hukum.

## Mengubah isi

Teks berada di `lib/strings.js`. Warna aksen, logo partner, logo klien, alamat kantor, dan data gambar berada di `lib/content.js`.

Warna aksen per lini:

| Lini | Aksen |
| --- | --- |
| gip.event | `#D85A30` |
| gip.network | `#7F77DD` |
| gip.marine | `#1D9E75` |

Warna aksen induk tetap navy `#1c3f94`. Warna cyan pada logo tidak dipakai sebagai warna aksen.

## Yang harus diganti sebelum peluncuran

1. **Foto.** Seluruh gambar masih berasal dari Unsplash sebagai penampung sementara. Ganti dengan dokumentasi proyek asli, terutama pada blok portfolio dan studi kasus. Lihat `CREDITS.md`.
2. **Angka kredibilitas.** Nilai pada `stats` di `lib/content.js` masih contoh, dan sekarang tampil tanpa disclaimer.
3. **Isi halaman legalitas.** Perlu ditinjau penasihat hukum sebelum dipublikasikan.

## Formulir

`LeadForm` melakukan validasi di sisi klien lalu membuka WhatsApp dengan ringkasan isian. Tidak ada data yang dikirim ke server. Jika nanti dibutuhkan penyimpanan lead, tambahkan Route Handler di `app/api/` dan panggil dari `submit()`.
