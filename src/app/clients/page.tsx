import type { Metadata } from "next";
import {
  CtaBanner,
  PageShell,
  SectionHeading,
} from "@/components/layout/PageShell";
import { ClientLogoBar } from "@/components/brand/ClientLogo";
import { ClientsSection, EngagementModel } from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Enterprise software and consulting engagements with Energy Web, The Hashgraph Group, Managination, and Wattwatchers.",
};

export default function ClientsPage() {
  return (
    <PageShell width="wide">
      <PageHeader
        eyebrow="Clients"
        title="Organizations we work with"
        description="Selected enterprise engagements across energy infrastructure, identity platforms, and IoT."
        align="left"
      />

      <div className="corp-panel px-8 py-10 mb-12">
        <ClientLogoBar />
      </div>

      <ClientsSection showLink={false} />

      <div className="mt-14">
        <SectionHeading eyebrow="Process" title="Engagement model" />
        <EngagementModel />
      </div>

      <div className="mt-14">
        <CtaBanner
          title="Building something similar?"
          description="We partner with engineering teams on identity infrastructure, IoT platforms, and security-sensitive B2B software."
        />
      </div>
    </PageShell>
  );
}
