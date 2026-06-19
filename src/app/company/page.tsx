import type { Metadata } from "next";
import { CompanyView } from "@/components/views/CompanyView";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.about.headline,
};

export default function CompanyPage() {
  return <CompanyView />;
}
