import About from "../../components/pages/About";
import { pageMetadata } from "../../lib/i18n";

export const metadata = pageMetadata("id", "about");

export default function Page() {
  return <About lang="id" />;
}
