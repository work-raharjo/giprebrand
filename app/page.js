import Home from "../components/pages/Home";
import { pageMetadata } from "../lib/i18n";

export const metadata = pageMetadata("id", "home");

export default function Page() {
  return <Home lang="id" />;
}
