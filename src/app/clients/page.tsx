import type { Metadata } from "next";
import { PageShell, SectionHeading } from "@/components/layout/PageShell";
import {
  ClientsSection,
  EngagementModel,
} from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Enterprise software and consulting engagements with Energy Web, The Hashgraph Group, Managination, and Wattwatchers.",
};

export default function ClientsPage() {
  return (
    <>
      <PageShell width="wide">
        <PageHeader
          eyebrow="Client Engagements"
          title="Organizations we work with"
          description="PBM Labs has delivered consulting and custom software development for enterprise teams in energy infrastructure, identity platforms, and IoT. Selected engagements are listed below."
        />
        <ClientsSection showLink={false} />
      </PageShell>

      <section className="border-t border-slate-800/60 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <SectionHeading
            eyebrow="Process"
            title="How engagements are structured"
          />
          <EngagementModel />
        </div>
      </section>
    </>
  );
}
