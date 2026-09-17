import VerticalPage from "../../components/VerticalPage";
import { verticals } from "../../lib/content";

export const metadata = {
  title: "Event technology and production",
  description:
    "Jaringan event, LED videotron, sound system, dan lighting. Satu tim untuk install, operasional, dan dismantle. Paket Essential, Pro, dan Maxima.",
  keywords: [
    "event production Indonesia",
    "rental LED videotron",
    "rental sound system event",
    "wifi event enterprise",
    "lighting rigging panggung",
  ],
  alternates: { canonical: "/event" },
  openGraph: {
    title: "gip.event | Event technology and production",
    description: "Jaringan, LED, sound, dan lighting untuk event yang tidak boleh gagal.",
    url: "/event",
  },
};

export default function Page() {
  return <VerticalPage v={verticals.event} />;
}
