import type { Metadata } from "next";
import { TermsView } from "@/components/views/LegalViews";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return <TermsView />;
}
