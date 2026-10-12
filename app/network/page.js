import VerticalPage from "../../components/VerticalPage";
import { pageMetadata } from "../../lib/i18n";

export const metadata = pageMetadata("id", "network");

export default function Page() {
  return <VerticalPage lang="id" route="network" />;
}
