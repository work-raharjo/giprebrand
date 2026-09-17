const SITE = "https://gip.co.id";

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/event", priority: 0.9 },
    { path: "/network", priority: 0.9 },
    { path: "/marine", priority: 0.9 },
    { path: "/tentang-kami", priority: 0.6 },
    { path: "/kontak", priority: 0.6 },
    { path: "/legalitas", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.priority >= 0.9 ? "monthly" : "yearly",
    priority: r.priority,
  }));
}
