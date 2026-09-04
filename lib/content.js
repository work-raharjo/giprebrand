const U = (id) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920`;

export const images = {
  hero: {
    src: U("1657208431551-cbf415b8ef26"),
    alt: "Sorot lampu panggung menembus ruangan gelap berkabut",
    credit: "Scarlett Alt",
    creditUrl: "https://unsplash.com/@scarlettalt",
  },
  event: {
    src: U("1785807047494-0832619a3018"),
    alt: "Panggung utama dengan layar LED besar dan tata cahaya berwarna",
    credit: "Kaue Martins Bergamasco",
    creditUrl: "https://unsplash.com/@_raccoon_holmes",
  },
  eventAlt: {
    src: U("1761618291331-535983ae4296"),
    alt: "Pertunjukan panggung dengan penonton di ruang gelap",
    credit: "Ivan Lom",
    creditUrl: "https://unsplash.com/@ilom",
  },
  connect: {
    src: U("1762163516269-3c143e04175c"),
    alt: "Rak server dengan indikator hijau menyala",
    credit: "Domaintechnik",
    creditUrl: "https://unsplash.com/@fslfsl",
  },
  connectAlt: {
    src: U("1783683783819-e6cb806bba69"),
    alt: "Kabel ethernet terpasang pada perangkat jaringan",
    credit: "Manuel Luikenga",
    creditUrl: "https://unsplash.com/@manuel_luikenga",
  },
  marine: {
    src: U("1724597500306-a4cbb7d1324e"),
    alt: "Pandangan udara kapal kontainer di tengah laut",
    credit: "Bent Van Aeken",
    creditUrl: "https://unsplash.com/@bentje",
  },
  marineAlt: {
    src: U("1670121180583-39ab653a071c"),
    alt: "Kapal kontainer besar di perairan terminal",
    credit: "Nathan Cima",
    creditUrl: "https://unsplash.com/@nathan_cima",
  },
  crowd: {
    src: U("1729553199933-c897fea4f41f"),
    alt: "Kerumunan penonton di ruang pertunjukan gelap",
    credit: "Bennie Bates",
    creditUrl: "https://unsplash.com/@bennieray",
  },
};

export const company = {
  name: "PT Galactic Indonesia Perkasa",
  short: "GIP",
  domain: "gip.co.id",
  phone: "022-87326585",
  waNumber: "6282126851122",
  email: "sales@gip.co.id",
  presalesEmail: "andy@gip.co.id",
  npwp: "0428 6684 6142 9000",
  kbli: "62209 dan 61994",
  pic: "Andy Sastrawinata",
  picRole: "GM Presales",
};

// Kantor. Diambil dari gip.co.id.
export const offices = [
  {
    city: "Jakarta",
    addr: "Pelindo Tower, Jl. Yos Sudarso No. 9 Lantai 4, Rawabadak Utara, Koja, Jakarta Utara 14230",
  },
  {
    city: "Batam",
    addr: "Aria Office Tower, Jl. Harbour Bay Level 7 Unit 11, Sungai Jodoh, Batu Ampar, Batam 29444",
  },
  {
    city: "Bandung",
    addr: "Jl. Buah Batu No. 161, Turangga, Lengkong, Kota Bandung 40265",
  },
];

// Logo partner dan klien. Sementara diambil langsung dari gip.co.id.
// Untuk produksi, unduh berkasnya ke public/partners dan public/clients
// lalu ubah src menjadi path lokal.
export const partners = [
  { name: "Speedcast", src: "https://www.gip.co.id/partners/speedcast.svg" },
  { name: "Ruijie", src: "https://www.gip.co.id/partners/ruijie.svg" },
  { name: "Ruckus", src: "https://www.gip.co.id/partners/ruckus.svg" },
  { name: "Multipolar Technology", src: "https://www.gip.co.id/partners/multipolar.webp" },
];

export const clients = [
  { name: "OMS Group", src: "https://www.gip.co.id/clients/oms-group.png" },
  { name: "MEO", src: "https://www.gip.co.id/clients/meo.png" },
  { name: "Pertamina Hulu Energi", src: "https://www.gip.co.id/clients/pertamina-hulu-energi.png" },
  { name: "ExxonMobil", src: "https://www.gip.co.id/clients/exxonmobil.png" },
  { name: "PLN", src: "https://www.gip.co.id/clients/pln.png" },
  { name: "Sinar Mas", src: "https://www.gip.co.id/clients/sinarmas.svg" },
];

// TODO ganti dengan data operasional aktual sebelum peluncuran.
export const stats = [
  { label: "Event ditangani", value: "120+" },
  { label: "Uptime rata rata", value: "99,8%" },
  { label: "Kota dijangkau", value: "18" },
  { label: "Respons awal", value: "< 1 jam" },
];

export const verticals = {
  event: {
    slug: "event",
    name: "gip.event",
    accent: "#D85A30",
    accentDark: "#993C1D",
    accentSoft: "#FAECE7",
    tagline: "Event technology and production",
    cardBlurb: "Jaringan, LED, sound, dan lighting untuk event yang tidak boleh gagal.",
    heroTitle: "Semuanya harus menyala tepat waktu, sekali jalan",
    heroSub:
      "Kami pasang, operasikan, dan bongkar seluruh perangkat teknis event Anda. Satu tim, satu penanggung jawab.",
    image: "event",
    heroImage: "eventAlt",
    servicesTitle: "Yang kami kerjakan di lini ini",
    ctaPrimary: { label: "Chat lewat WhatsApp", type: "wa" },
    ctaSecondary: { label: "Lihat paket", href: "#layanan" },
    responseTime: "Respons di bawah 1 jam pada jam kerja",
    services: [
      { icon: "wifi", title: "Event network", desc: "Wifi enterprise dual band, cabling, uplink redundan" },
      { icon: "display", title: "LED dan visual", desc: "Videotron indoor dan outdoor, switcher, operator" },
      { icon: "speaker", title: "Sound system", desc: "Line array, mixing, mikrofon, monitor panggung" },
      { icon: "bulb", title: "Lighting dan rigging", desc: "Moving head, par, truss, dan struktur panggung" },
    ],
    proof: [
      { title: "Portfolio venue", desc: "Dokumentasi pemasangan di gedung dan ruang terbuka" },
      { title: "Paket transparan", desc: "Essential, Pro, dan Maxima dengan lingkup tertulis" },
      { title: "Tim onsite", desc: "Engineer standby selama event berlangsung" },
    ],
    formFields: [
      { label: "Nama event", placeholder: "Product launch Q4" },
      { label: "Tanggal pelaksanaan", placeholder: "12 Oktober 2026" },
      { label: "Venue", placeholder: "Oil Building Center Thamrin" },
      { label: "Perkiraan jumlah pax", placeholder: "300" },
    ],
    packages: [
      {
        name: "Essential",
        desc: "Untuk rapat, workshop, dan gathering skala kecil.",
        items: ["Wifi dual band", "Network cabling", "Engineer onsite 8 jam", "Install dan dismantle"],
      },
      {
        name: "Pro",
        desc: "Untuk konferensi dan aktivasi brand dengan kebutuhan visual.",
        items: [
          "Seluruh lingkup Essential",
          "Uplink satelit LEO cadangan",
          "LED atau proyeksi",
          "Sound dan lighting dasar",
        ],
        featured: true,
      },
      {
        name: "Maxima",
        desc: "Untuk event besar dengan multi stage dan siaran langsung.",
        items: [
          "Seluruh lingkup Pro",
          "Uplink redundan penuh",
          "Line array dan moving head",
          "Site survey dan rehearsal",
        ],
      },
    ],
  },
  connect: {
    slug: "connect",
    name: "gip.connect",
    accent: "#7F77DD",
    accentDark: "#534AB7",
    accentSoft: "#EEEDFE",
    tagline: "Managed network service",
    cardBlurb: "Jaringan kantor dan multi cabang yang dirancang, dipasang, dan diawasi penuh.",
    heroTitle: "Jaringan yang tidak perlu Anda pikirkan lagi",
    heroSub:
      "Desain, instalasi, monitoring, dan eskalasi dalam satu layanan terkelola. Tim Anda kembali fokus ke pekerjaan utamanya.",
    image: "connect",
    heroImage: "connect",
    servicesTitle: "Yang kami kelola di lini ini",
    ctaPrimary: { label: "Jadwalkan konsultasi", type: "form" },
    ctaSecondary: { label: "Lihat lingkup SLA", href: "#bukti" },
    responseTime: "Respons 1 sampai 2 hari kerja",
    services: [
      { icon: "router", title: "Managed wifi", desc: "Controller terpusat, segmentasi, captive portal" },
      { icon: "sitemap", title: "Multi cabang", desc: "Topologi seragam, konfigurasi terstandardisasi" },
      { icon: "activity", title: "Monitoring 24/7", desc: "Alert proaktif sebelum pengguna melapor" },
      { icon: "shield-lock", title: "Segmentasi dan kontrol", desc: "Pemisahan trafik tamu, staf, dan operasional" },
    ],
    proof: [
      { title: "SLA tertulis", desc: "Target uptime, waktu respons, dan waktu pemulihan" },
      { title: "Laporan bulanan", desc: "Ketersediaan, insiden, dan rekomendasi perbaikan" },
      { title: "Dokumentasi topologi", desc: "Diagram dan inventaris perangkat yang selalu diperbarui" },
    ],
    formFields: [
      { label: "Nama perusahaan", placeholder: "PT Contoh Nusantara" },
      { label: "Jumlah lokasi", placeholder: "6 cabang" },
      { label: "Perkiraan jumlah pengguna", placeholder: "250" },
      { label: "Penyedia saat ini", placeholder: "Opsional" },
    ],
    packages: [],
  },
  marine: {
    slug: "marine",
    name: "gip.marine",
    accent: "#1D9E75",
    accentDark: "#0F6E56",
    accentSoft: "#E1F5EE",
    tagline: "Maritime and remote connectivity",
    cardBlurb: "Starlink unlimited untuk kapal dan lokasi terpencil, di perairan Indonesia maupun internasional.",
    heroTitle: "Koneksi yang ikut berlayar, di perairan Indonesia maupun internasional",
    heroSub: "Cakupan Starlink global, instalasi dan pengelolaan penuh oleh tim GIP. Anda cukup berlayar.",
    image: "marine",
    heroImage: "marineAlt",
    servicesTitle: "Yang kami pasang di lini ini",
    ctaPrimary: { label: "Ajukan proposal", type: "form" },
    ctaSecondary: { label: "Tanya area cakupan", href: "#bukti" },
    responseTime: "Respons 1 sampai 2 hari kerja",
    services: [
      { icon: "satellite", title: "Starlink maritime", desc: "Instalasi, aktivasi, dan monitoring perangkat" },
      { icon: "infinity", title: "Paket unlimited", desc: "Alokasi dan prioritas trafik per kapal" },
      {
        icon: "map-pin",
        title: "Rute internasional",
        desc: "Perairan Indonesia, Asia Tenggara, dan pelayaran lintas negara",
      },
      { icon: "headset", title: "Dukungan 24/7", desc: "NOC dan eskalasi langsung ke penyedia upstream" },
    ],
    proof: [
      {
        title: "Area cakupan global",
        desc: "Konfirmasi ketersediaan per rute, termasuk perairan internasional dan laut lepas",
      },
      { title: "SLA dan uptime", desc: "Angka yang bisa diverifikasi, bukan klaim pemasaran" },
      { title: "Partner Speedcast", desc: "Kapasitas melalui Speedcast, official partner Starlink" },
    ],
    formFields: [
      { label: "Nama kapal atau lokasi", placeholder: "MV Contoh Bahari" },
      { label: "Rute atau wilayah operasi", placeholder: "Surabaya hingga Makassar" },
      { label: "Jumlah pengguna", placeholder: "24 kru" },
      { label: "Target mulai layanan", placeholder: "November 2026" },
    ],
    packages: [],
  },
};

export const verticalList = [verticals.event, verticals.connect, verticals.marine];
