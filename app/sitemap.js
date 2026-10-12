import { SITE, href, locales, other, t } from "../lib/i18n";

const ROUTES = [
  { key: "home", priority: 1 },
  { key: "event", priority: 0.9 },
  { key: "network", priority: 0.9 },
  { key: "marine", priority: 0.9 },
  { key: "about", priority: 0.6 },
  { key: "contact", priority: 0.6 },
  // Legalitas tidak dimasukkan: halaman itu noindex sampai ditinjau penasihat hukum.
];

export default function sitemap() {
  const now = new Date();

  return locales.flatMap((lang) =>
    ROUTES.map((r) => ({
      url: `${SITE}${href(lang, r.key)}`,
      lastModified: now,
      changeFrequency: r.priority >= 0.9 ? "monthly" : "yearly",
      priority: r.priority,
      alternates: {
        languages: {
          [t(lang).htmlLang]: `${SITE}${href(lang, r.key)}`,
          [t(other(lang)).htmlLang]: `${SITE}${href(other(lang), r.key)}`,
        },
      },
    }))
  );
}
