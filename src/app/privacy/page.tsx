import type { Metadata } from "next";
import { PrivacyView } from "@/components/views/LegalViews";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
