import type { Metadata } from "next";
import { CookiesView } from "@/components/views/LegalViews";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${siteConfig.name}.`,
};

export default function CookiesPage() {
  return <CookiesView />;
}
