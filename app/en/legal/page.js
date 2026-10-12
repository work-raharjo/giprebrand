import Legal from "../../../components/pages/Legal";
import { pageMetadata } from "../../../lib/i18n";

export const metadata = pageMetadata("en", "legal");

export default function Page() {
  return <Legal lang="en" />;
}
