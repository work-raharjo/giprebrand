import "./globals.css";
import { company, offices } from "../lib/content";
import { SITE, locales, t, verticalsFor } from "../lib/i18n";

// Metadata di sini hanya yang berlaku untuk seluruh halaman. Judul, deskripsi,
// canonical, dan hreflang per halaman dibangun oleh pageMetadata di lib/i18n.js.
export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: t("id").meta.home.title,
    template: `%s | ${company.short}`,
  },
  description: t("id").meta.home.description,
  applicationName: company.name,
  authors: [{ name: company.name, url: SITE }],
  creator: company.name,
  publisher: company.name,
  twitter: {
    card: "summary_large_image",
    title: "GIP | Infrastruktur teknis di lapangan",
    description: t("id").meta.home.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: "GIP",
  url: SITE,
  logo: `${SITE}/gip-mark.jpg`,
  email: company.email,
  telephone: company.phone,
  areaServed: "ID",
  address: offices.map((o) => ({
    "@type": "PostalAddress",
    addressLocality: o.city,
    streetAddress: o.addr,
    addressCountry: "ID",
  })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${company.waNumber}`,
    contactType: "sales",
    availableLanguage: locales,
  },
  makesOffer: verticalsFor("id").map((v) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: v.name, description: v.cardBlurb },
  })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </body>
    </html>
  );
}
