import About from "../../../components/pages/About";
import { pageMetadata } from "../../../lib/i18n";

export const metadata = pageMetadata("en", "about");

export default function Page() {
  return <About lang="en" />;
}
