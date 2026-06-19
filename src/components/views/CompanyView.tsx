"use client";

import { CtaBand, PageSection, PageShell, SectionHeading } from "@/components/layout/PageShell";
import { ExpertiseGrid } from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { useSite } from "@/components/providers/SiteProvider";

export function CompanyView() {
  const { t } = useSite();

  return (
    <>
      <PageShell width="wide">
        <PageHeader
          eyebrow={t.company.eyebrow}
          title={t.company.title}
          description={t.company.paragraph1}
          align="left"
          size="large"
        />

        <div className="max-w-2xl text-[var(--color-board-muted)] text-sm leading-relaxed">
          <p className="mt-4">{t.company.paragraph2}</p>
        </div>
      </PageShell>

      <PageSection bordered muted>
        <SectionHeading
          eyebrow={t.company.expertiseEyebrow}
          title={t.company.expertiseTitle}
        />
        <ExpertiseGrid />
      </PageSection>

      <PageSection>
        <CtaBand
          title={t.company.ctaTitle}
          description={t.company.ctaDescription}
          buttonLabel={t.common.getInTouch}
        />
      </PageSection>
    </>
  );
}
