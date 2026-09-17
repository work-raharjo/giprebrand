import VerticalPage from "../../components/VerticalPage";
import { verticals } from "../../lib/content";

export const metadata = {
  title: "Maritime and remote connectivity",
  description:
    "Starlink unlimited untuk kapal dan lokasi terpencil, di perairan Indonesia maupun internasional. Instalasi, aktivasi, dan dukungan 24/7 oleh tim GIP.",
  keywords: [
    "Starlink maritime Indonesia",
    "internet kapal",
    "konektivitas maritim",
    "internet lokasi terpencil tambang",
    "Starlink rute internasional",
  ],
  alternates: { canonical: "/marine" },
  openGraph: {
    title: "gip.marine | Maritime and remote connectivity",
    description: "Koneksi yang ikut berlayar, di perairan Indonesia maupun internasional.",
    url: "/marine",
  },
};

export default function Page() {
  return <VerticalPage v={verticals.marine} />;
}
