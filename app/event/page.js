import VerticalPage from "../../components/VerticalPage";
import { pageMetadata } from "../../lib/i18n";

export const metadata = pageMetadata("id", "event");

export default function Page() {
  return <VerticalPage lang="id" route="event" />;
}
