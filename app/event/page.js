import VerticalPage from "../../components/VerticalPage";
import { verticals } from "../../lib/content";

export const metadata = {
  title: "Event technology and production",
  description:
    "Jaringan, LED, sound, dan lighting untuk event. Satu tim untuk install, operasional, dan dismantle.",
};

export default function Page() {
  return <VerticalPage v={verticals.event} />;
}
