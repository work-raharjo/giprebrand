import "./globals.css";
import StickyChat from "../components/StickyChat";
import { company, offices, verticalList } from "../lib/content";

const SITE = "https://gip.co.id";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "GIP | Event production, managed network, dan konektivitas maritim",
    template: `%s | ${company.short}`,
  },
  description:
    "GIP memasang, menjalankan, dan menjaga infrastruktur teknis di lapangan. Event production, managed network service, dan konektivitas maritim dengan cakupan Starlink global.",
  applicationName: company.name,
  authors: [{ name: company.name, url: SITE }],
  creator: company.name,
  publisher: company.name,
  keywords: [
    "event production Indonesia",
    "rental sound system",
    "rental LED videotron",
    "event network wifi",
    "managed network service",
    "managed wifi multi cabang",
    "Starlink maritime Indonesia",
    "konektivitas kapal",
    "internet lokasi terpencil",
    "Speedcast partner Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE,
    siteName: company.name,
    title: "GIP | Event production, managed network, dan konektivitas maritim",
    description:
      "Tiga lini layanan, satu tim lapangan. Event production, managed network service, dan konektivitas maritim.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIP | Infrastruktur teknis di lapangan",
    description:
      "Event production, managed network service, dan konektivitas maritim dengan cakupan Starlink global.",
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
    availableLanguage: ["id", "en"],
  },
  makesOffer: verticalList.map((v) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: v.name, description: v.cardBlurb },
  })),
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <StickyChat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
