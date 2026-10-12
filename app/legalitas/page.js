import Legal from "../../components/pages/Legal";
import { pageMetadata } from "../../lib/i18n";

export const metadata = pageMetadata("id", "legal");

export default function Page() {
  return <Legal lang="id" />;
}
