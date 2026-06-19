import type { Metadata } from "next";
import { PageShell, SectionHeading } from "@/components/layout/PageShell";
import {
  ClientsSection,
  EngagementModel,
  ExpertiseGrid,
} from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Company",
  description: siteConfig.about.headline,
};

export default function CompanyPage() {
  return (
    <>
      <PageShell width="wide">
        <PageHeader
          eyebrow="About"
          title={siteConfig.about.headline}
          description={siteConfig.about.paragraphs[0]}
          align="left"
        />

        <div className="max-w-3xl space-y-5 text-slate-400 text-sm md:text-base leading-relaxed mb-16">
          {siteConfig.about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <SectionHeading eyebrow="Practice Areas" title="Where we focus" />
        <ExpertiseGrid />
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
