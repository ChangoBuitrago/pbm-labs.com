import type { Metadata } from "next";
import {
  CtaBanner,
  PageShell,
  SectionHeading,
} from "@/components/layout/PageShell";
import { EngagementModel, ExpertiseGrid } from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Company",
  description: siteConfig.about.headline,
};

export default function CompanyPage() {
  return (
    <PageShell width="wide">
      <PageHeader
        eyebrow="About"
        title={siteConfig.about.headline}
        description={siteConfig.about.paragraphs[0]}
        align="left"
      />

      <div className="max-w-2xl space-y-4 text-[var(--color-muted)] text-sm md:text-base leading-relaxed mb-14">
        {siteConfig.about.paragraphs.slice(1).map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <SectionHeading eyebrow="Practice Areas" title="Technical focus" />
      <ExpertiseGrid />

      <div className="mt-14">
        <SectionHeading eyebrow="Process" title="How we work" />
        <EngagementModel />
      </div>

      <div className="mt-14">
        <CtaBanner
          title="Discuss your engineering needs"
          description="We take on contract engagements with enterprise and growth-stage teams building identity, IoT, and security-sensitive platforms."
        />
      </div>
    </PageShell>
  );
}
