// Data yang tidak bergantung bahasa.
// Seluruh teks berbahasa Indonesia dan Inggris berada di lib/strings.js.

const U = (id) =>
  `https://images.unsplash.com/photo-${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920`;

export const images = {
  hero: { src: U("1657208431551-cbf415b8ef26"), credit: "Scarlett Alt", creditUrl: "https://unsplash.com/@scarlettalt" },
  event: { src: U("1785807047494-0832619a3018"), credit: "Kaue Martins Bergamasco", creditUrl: "https://unsplash.com/@_raccoon_holmes" },
  eventAlt: { src: U("1761618291331-535983ae4296"), credit: "Ivan Lom", creditUrl: "https://unsplash.com/@ilom" },
  connect: { src: U("1762163516269-3c143e04175c"), credit: "Domaintechnik", creditUrl: "https://unsplash.com/@fslfsl" },
  connectAlt: { src: U("1783683783819-e6cb806bba69"), credit: "Manuel Luikenga", creditUrl: "https://unsplash.com/@manuel_luikenga" },
  marine: { src: U("1724597500306-a4cbb7d1324e"), credit: "Bent Van Aeken", creditUrl: "https://unsplash.com/@bentje" },
  marineAlt: { src: U("1670121180583-39ab653a071c"), credit: "Nathan Cima", creditUrl: "https://unsplash.com/@nathan_cima" },
  crowd: { src: U("1729553199933-c897fea4f41f"), credit: "Bennie Bates", creditUrl: "https://unsplash.com/@bennieray" },
};

export const company = {
  name: "PT Galactic Indonesia Perkasa",
  short: "GIP",
  domain: "gip.co.id",
  phone: "022-87326585",
  waNumber: "6288295970000",
  email: "sales@gip.co.id",
  presalesEmail: "andy@gip.co.id",
  npwp: "0428 6684 6142 9000",
  kbli: "62209 dan 61994",
  pic: "Andy Sastrawinata",
  picRole: "GM Presales",
};

// Kantor. Diambil dari gip.co.id. Alamat tidak diterjemahkan.
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

// Logo partner dan klien. Berkas lokal di public/partners dan public/clients.
// maxWidth per logo: rasio ekstrem seperti Fortinet (8.9:1) butuh cap lebih lebar
// supaya bobot optiknya setara logo lain.
export const partners = [
  { name: "Speedcast", src: "/partners/speedcast.svg", maxWidth: 118 },
  { name: "Ruijie", src: "/partners/ruijie.png", maxWidth: 106 },
  { name: "Ruckus", src: "/partners/ruckus.svg", maxWidth: 116 },
  { name: "Multipolar Technology", src: "/partners/multipolar.webp", maxWidth: 100 },
  { name: "Fortinet", src: "/partners/fortinet.png", maxWidth: 200 },
  { name: "HPE Aruba", src: "/partners/aruba-wordmark.png", maxWidth: 114 },
];

export const clients = [
  { name: "OMS Group", src: "/clients/oms-group.png" },
  { name: "MEO", src: "/clients/meo.png" },
  { name: "Pertamina Hulu Energi", src: "/clients/pertamina-hulu-energi.png" },
  { name: "ExxonMobil", src: "/clients/exxonmobil.png" },
  { name: "PLN", src: "/clients/pln.png" },
  { name: "Sinar Mas", src: "/clients/sinarmas.svg" },
];

// Identitas visual per lini. Nama brand dan warna aksen sama di kedua bahasa.
export const verticalMeta = {
  event: {
    key: "event",
    slug: "event",
    name: "gip.event",
    accent: "#D85A30",
    accentDark: "#993C1D",
    accentSoft: "#FAECE7",
    image: "event",
    heroImage: "eventAlt",
    ctaPrimaryType: "wa",
    ctaSecondaryHref: "#layanan",
    serviceIcons: ["wifi", "display", "speaker", "bulb"],
    areaServed: "ID",
  },
  network: {
    key: "network",
    slug: "network",
    name: "gip.network",
    accent: "#7F77DD",
    accentDark: "#534AB7",
    accentSoft: "#EEEDFE",
    image: "connect",
    heroImage: "connect",
    ctaPrimaryType: "form",
    ctaSecondaryHref: "#bukti",
    serviceIcons: ["router", "sitemap", "activity", "shield-lock"],
    areaServed: "ID",
  },
  marine: {
    key: "marine",
    slug: "marine",
    name: "gip.marine",
    accent: "#1D9E75",
    accentDark: "#0F6E56",
    accentSoft: "#E1F5EE",
    image: "marine",
    heroImage: "marineAlt",
    ctaPrimaryType: "form",
    ctaSecondaryHref: "#bukti",
    serviceIcons: ["satellite", "infinity", "map-pin", "headset"],
    areaServed: "Worldwide",
  },
};

export const verticalKeys = ["event", "network", "marine"];
