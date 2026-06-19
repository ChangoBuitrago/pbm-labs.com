import type { Metadata } from "next";
import { CtaBand, PageSection, PageShell, SectionHeading } from "@/components/layout/PageShell";
import { ExpertiseGrid } from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
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
          size="large"
        />

        <div className="max-w-2xl text-[var(--color-board-muted)] text-sm leading-relaxed">
          {siteConfig.about.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4">
              {paragraph}
            </p>
          ))}
        </div>
      </PageShell>

      <PageSection bordered muted>
        <SectionHeading eyebrow="Expertise" title="Practice areas" />
        <ExpertiseGrid />
      </PageSection>

      <PageSection>
        <CtaBand
          title="Discuss your engineering needs"
          description="Contract engagements for enterprise and growth-stage teams."
        />
      </PageSection>
    </>
  );
}
