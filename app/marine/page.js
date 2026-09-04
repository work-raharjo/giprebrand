import VerticalPage from "../../components/VerticalPage";
import { verticals } from "../../lib/content";

export const metadata = {
  title: "Maritime and remote connectivity",
  description:
    "Starlink unlimited untuk kapal dan lokasi terpencil, di perairan Indonesia maupun internasional. Dikelola penuh oleh tim GIP.",
};

export default function Page() {
  return <VerticalPage v={verticals.marine} />;
}
