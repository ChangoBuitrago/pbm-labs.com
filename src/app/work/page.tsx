import type { Metadata } from "next";
import { CtaBand, PageShell } from "@/components/layout/PageShell";
import { EngagementsSection } from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Anonymized enterprise consulting and software development engagements across energy infrastructure, identity platforms, and IoT.",
};

export default function WorkPage() {
  return (
    <PageShell width="wide">
      <PageHeader
        eyebrow="Work"
        title="Representative project work"
        description="Anonymized summaries of enterprise consulting and custom software development."
        align="left"
        size="large"
      />
      <EngagementsSection showLink={false} numbered />
      <div className="mt-14">
        <CtaBand
          title="Building something similar?"
          description="We partner with engineering teams on identity infrastructure, IoT platforms, and security-sensitive B2B software."
        />
      </div>
    </PageShell>
  );
}
