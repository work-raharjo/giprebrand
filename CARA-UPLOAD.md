# Cara upload ke GitHub

Isi folder ini adalah versi baru repo `work-raharjo/giprebrand`, sudah lengkap
dan siap menimpa berkas lama.

## Berkas yang diubah

| Berkas | Perubahan |
| --- | --- |
| `app/page.js` | Urutan section baru, copy hero baru, section partner dan klien, panel CTA gabungan, motif logo di hero. Section slot "Klien 1-5" dihapus |
| `app/globals.css` | Class baru `.logo-mark-img`, `.hero-motif`, `.vhero-motif`, `.cta-panel`, `.logo-row`, `.footer-offices`. Media query 700px untuk header dan footer. Gradien hero jadi diagonal |
| `app/layout.js` | Deskripsi metadata disesuaikan |
| `app/tentang-kami/page.js` | Copy ditulis ulang, tiga kota kantor, tombol ke halaman legalitas |
| `app/legalitas/page.js` | Catatan "perlu ditinjau penasihat hukum" dipindah jadi komentar kode, copy disederhanakan |
| `app/kontak/page.js` | Copy diperbaiki, section Kantor berisi tiga alamat |
| `app/event/page.js`, `app/connect/page.js`, `app/marine/page.js` | Metadata description gip.marine disesuaikan ke cakupan global |
| `components/Chrome.js` | Monogram teks "GIP" diganti logo mark, baris kredit Unsplash di footer diganti NPWP dan KBLI, blok Kantor di footer, email `sales@gip.co.id` |
| `components/VerticalPage.js` | Motif logo di vhero, judul section layanan per lini, copy paket dan formulir |
| `components/LeadForm.js` | Border input merah saat error, tinggi pesan error tetap, copy status kirim |
| `lib/content.js` | `servicesTitle` per lini, data `partners`, `clients`, `offices`, copy gip.marine diposisikan global, email jadi `sales@gip.co.id` |
| `README.md` | Checklist peluncuran diperbarui |
| `CREDITS.md` | Catatan logo partner dan klien |
| `public/gip-mark.jpg` | Berkas baru, logo GIP |

## Langkah upload

1. Buka repo `giprebrand` di GitHub.
2. Timpa berkas lama dengan berkas dari folder ini, mempertahankan struktur direktori yang sama.
3. `public/gip-mark.jpg` adalah berkas baru, pastikan ikut terunggah.
4. `package-lock.json` tidak ada di folder ini karena tidak berubah. Biarkan yang lama.
5. Commit dan tunggu Vercel deploy otomatis.

## Yang masih perlu dikerjakan setelah upload

1. **Logo partner dan klien** sementara diambil langsung dari `https://www.gip.co.id/partners/` dan `/clients/`. Unduh ke `public/partners/` dan `public/clients/`, lalu ubah `src` di `lib/content.js` jadi path lokal. Selama URL lama masih hidup, section ini tetap tampil normal.
2. **Angka `stats`** di `lib/content.js` masih contoh dan sekarang tampil tanpa disclaimer. Ganti dengan data operasional aktual.
3. **Foto Unsplash** masih penampung. Ganti dengan dokumentasi proyek GIP.
4. **Halaman legalitas** perlu tinjauan penasihat hukum.
5. **Logo GIP** masih JPEG berlatar putih. Kalau ada versi SVG atau PNG transparan, ganti dan hapus `filter: invert(1)` serta `mix-blend-mode` pada `.hero-motif` di `globals.css`.
