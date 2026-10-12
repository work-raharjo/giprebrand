import VerticalPage from "../../../components/VerticalPage";
import { pageMetadata } from "../../../lib/i18n";

export const metadata = pageMetadata("en", "network");

export default function Page() {
  return <VerticalPage lang="en" route="network" />;
}
