import VerticalPage from "../../components/VerticalPage";
import { verticals } from "../../lib/content";

export const metadata = {
  title: "Managed network service",
  description:
    "Desain, instalasi, monitoring 24/7, dan eskalasi jaringan kantor serta multi cabang dalam satu layanan terkelola dengan SLA tertulis.",
  keywords: [
    "managed network service Indonesia",
    "managed wifi kantor",
    "jaringan multi cabang",
    "monitoring jaringan 24 jam",
    "SLA jaringan perusahaan",
  ],
  alternates: { canonical: "/network" },
  openGraph: {
    title: "gip.network | Managed network service",
    description: "Jaringan kantor dan multi cabang yang dirancang, dipasang, dan diawasi penuh.",
    url: "/network",
  },
};

export default function Page() {
  return <VerticalPage v={verticals.network} />;
}
