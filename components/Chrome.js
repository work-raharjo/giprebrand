import Link from "next/link";
import { company, offices, verticalList } from "../lib/content";

const PATHS = {
  wifi: "M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01",
  display: "M3 5h18v11H3zM8 20h8M12 16v4",
  speaker: "M12 3h.01M6 3h12v18H6zM12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  bulb: "M9 18h6M10 21h4M9 14a5 5 0 1 1 6 0c-.7.6-1 1.2-1 2h-4c0-.8-.3-1.4-1-2z",
  router: "M3 13h18v7H3zM7 17h.01M11 17h.01M6 13V9a6 6 0 0 1 12 0v4",
  sitemap: "M4 15h4v4H4zM10 3h4v4h-4zM16 15h4v4h-4zM6 15v-3h12v3M12 12V7",
  activity: "M3 12h4l3 8 4-16 3 8h4",
  "shield-lock": "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM12 11v3",
  satellite: "M4 12l4-4 4 4-4 4zM13 5l6 6M15 3l6 6M12 16l4 4",
  infinity: "M6.5 9a3 3 0 1 0 0 6c3 0 4-6 7-6a3 3 0 1 1 0 6c-3 0-4-6-7-6z",
  "map-pin": "M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11zM12 10h.01",
  headset: "M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z",
};

export function Icon({ name, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name] || PATHS.activity} />
    </svg>
  );
}

export function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function LogoMark() {
  return <img src="/gip-mark.jpg" alt="Logo GIP" className="logo-mark-img" width={30} height={30} />;
}

export function waLink(text) {
  return `https://wa.me/${company.waNumber}?text=${encodeURIComponent(text)}`;
}

export function Header({ vertical }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          <LogoMark />
          <span>
            {company.domain}
            {vertical ? <span className="logo-sub"> / {vertical.slug}</span> : null}
          </span>
        </Link>

        {vertical ? (
          <nav className="vswitch" aria-label="Pilih lini layanan">
            {verticalList.map((v) => (
              <Link key={v.slug} href={`/${v.slug}`} className={v.slug === vertical.slug ? "on" : ""}>
                {v.name}
              </Link>
            ))}
          </nav>
        ) : (
          <nav className="nav" aria-label="Navigasi utama">
            {verticalList.map((v) => (
              <Link key={v.slug} href={`/${v.slug}`} className="nav-hide">
                {v.name}
              </Link>
            ))}
            <Link href="/tentang-kami" className="nav-hide">
              Tentang
            </Link>
            <Link href="/kontak" className="nav-cta">
              Hubungi kami
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: 12 }}>
              <LogoMark />
              <span>{company.domain}</span>
            </div>
            <p style={{ color: "var(--ink-soft)", maxWidth: "34ch" }}>
              Pasang, jalankan, dan jaga infrastruktur teknis di lapangan.
            </p>
          </div>

          <div>
            <h4>Layanan</h4>
            <ul>
              {verticalList.map((v) => (
                <li key={v.slug}>
                  <Link href={`/${v.slug}`}>{v.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Perusahaan</h4>
            <ul>
              <li>
                <Link href="/tentang-kami">Tentang kami</Link>
              </li>
              <li>
                <Link href="/legalitas">Legalitas</Link>
              </li>
              <li>
                <Link href="/kontak">Kontak</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </li>
              <li>
                <a href={waLink("Halo GIP, saya ingin berkonsultasi.")} target="_blank" rel="noopener">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-offices">
          <h4>Kantor</h4>
          <div className="footer-offices-grid">
            {offices.map((o) => (
              <div key={o.city}>
                <div className="office-city">{o.city}</div>
                <p>{o.addr}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {company.name}. Seluruh hak dilindungi.
          </span>
        </div>
      </div>
    </footer>
  );
}
