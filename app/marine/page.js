import VerticalPage from "../../components/VerticalPage";
import { verticals } from "../../lib/content";

export const metadata = {
  title: "Maritime and remote connectivity",
  description:
    "Starlink maritime dan paket unlimited untuk kapal serta lokasi terpencil, dikelola penuh oleh tim GIP.",
};

export default function Page() {
  return <VerticalPage v={verticals.marine} />;
}
