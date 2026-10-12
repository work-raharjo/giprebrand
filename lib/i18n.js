import { images, verticalKeys, verticalMeta } from "./content";
import { strings } from "./strings";

export const SITE = "https://gip.co.id";
export const locales = ["id", "en"];
export const defaultLocale = "id";

export function other(lang) {
  return lang === "en" ? "id" : "en";
}

// Resolusi bahasa. Bahasa tidak dikenal jatuh ke default, bukan melempar galat,
// supaya rute yang salah ketik tetap merender sesuatu.
export function t(lang) {
  return strings[lang] || strings[defaultLocale];
}

// Tautan internal. Seluruh komponen memakai ini, jangan menulis href literal,
// karena rute Inggris punya awalan /en dan sebagian slug berbeda.
export function href(lang, routeKey) {
  return t(lang).routes[routeKey] || t(lang).routes.home;
}

// Gambar dengan alt sesuai bahasa.
export function img(lang, key) {
  return { ...images[key], alt: t(lang).imagesAlt[key] };
}

// Gabungan identitas visual (lib/content.js) dan teks (lib/strings.js).
export function vertical(lang, key) {
  const meta = verticalMeta[key];
  const text = t(lang).verticals[key];
  return {
    ...meta,
    ...text,
    services: text.services.map((s, i) => ({ ...s, icon: meta.serviceIcons[i] })),
  };
}

export function verticalsFor(lang) {
  return verticalKeys.map((k) => vertical(lang, k));
}

// Metadata per halaman, lengkap dengan canonical dan hreflang.
// Google memakai anotasi hreflang ini untuk memilih versi bahasa yang tepat.
export function pageMetadata(lang, routeKey) {
  const s = t(lang);
  const m = s.meta[routeKey];
  const path = href(lang, routeKey);
  const altPath = href(other(lang), routeKey);

  return {
    // Beranda sudah memuat nama brand, jadi template "%s | GIP" dilewati.
    title: routeKey === "home" ? { absolute: m.title } : m.title,
    description: m.description,
    keywords: m.keywords.length ? m.keywords : undefined,
    alternates: {
      canonical: path,
      languages: {
        [t("id").htmlLang]: lang === "id" ? path : altPath,
        [t("en").htmlLang]: lang === "en" ? path : altPath,
        "x-default": href(defaultLocale, routeKey),
      },
    },
    // Legalitas sengaja tidak diindeks sampai ditinjau penasihat hukum.
    robots: routeKey === "legal" ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: s.ogLocale,
      url: path,
      siteName: "PT Galactic Indonesia Perkasa",
      title: m.title,
      description: m.description,
    },
  };
}
