import "./globals.css";
import { company } from "../lib/content";

export const metadata = {
  metadataBase: new URL("https://gip.co.id"),
  title: {
    default: `${company.name} | Event production, managed network, dan konektivitas maritim`,
    template: `%s | ${company.short}`,
  },
  description:
    "GIP memasang, menjalankan, dan menjaga infrastruktur teknis di lapangan. Event production, managed network service, dan konektivitas maritim dengan cakupan Starlink global.",
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
