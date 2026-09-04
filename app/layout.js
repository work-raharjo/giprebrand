import "./globals.css";
import { company } from "../lib/content";

export const metadata = {
  metadataBase: new URL("https://gip.co.id"),
  title: {
    default: `${company.name} | Event production, managed network, dan konektivitas maritim`,
    template: `%s | ${company.short}`,
  },
  description:
    "GIP membangun, mengoperasikan, dan membongkar infrastruktur teknis di lokasi yang sulit. Event production, managed network service, dan konektivitas maritim.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: company.name,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
