import type { Metadata } from "next";
import {
  CtaBand,
  PageSection,
  PageShell,
  SectionHeading,
} from "@/components/layout/PageShell";
import {
  EngagementsSection,
  EngagementModel,
} from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Anonymized enterprise consulting and software development engagements across energy infrastructure, identity platforms, and IoT.",
};

export default function ClientsPage() {
  return (
    <>
      <PageShell width="wide">
        <PageHeader
          eyebrow="Case Studies"
          title="Representative project work"
          description="Anonymized summaries of enterprise consulting and custom software development. Client identities are not disclosed."
          align="left"
          size="large"
        />
        <EngagementsSection showLink={false} numbered />
      </PageShell>

      <PageSection bordered muted>
        <SectionHeading eyebrow="Methodology" title="How engagements run" />
        <EngagementModel />
      </PageSection>

      <PageSection>
        <CtaBand
          title="Building something similar?"
          description="We partner with engineering teams on identity infrastructure, IoT platforms, and security-sensitive B2B software."
        />
      </PageSection>
    </>
  );
}
