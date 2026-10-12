import Home from "../../components/pages/Home";
import { pageMetadata } from "../../lib/i18n";

export const metadata = pageMetadata("en", "home");

export default function Page() {
  return <Home lang="en" />;
}
