import VerticalPage from "../../components/VerticalPage";
import { verticals } from "../../lib/content";

export const metadata = {
  title: "Managed network service",
  description:
    "Desain, instalasi, monitoring, dan eskalasi jaringan kantor serta multi cabang dalam satu layanan terkelola.",
};

export default function Page() {
  return <VerticalPage v={verticals.connect} />;
}
