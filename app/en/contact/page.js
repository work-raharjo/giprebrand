import Contact from "../../../components/pages/Contact";
import { pageMetadata } from "../../../lib/i18n";

export const metadata = pageMetadata("en", "contact");

export default function Page() {
  return <Contact lang="en" />;
}
