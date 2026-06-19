"use client";

import { ArrowRight, Code, Shield } from "lucide-react";
import {
  CtaBand,
  PageSection,
  PageShell,
  SectionHeading,
  SectionLink,
} from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { useSite } from "@/components/providers/SiteProvider";
import { EngagementsSection } from "@/components/sections/ClientsSection";

export function HomeView() {
  const { t } = useSite();

  return (
    <>
      <PageShell width="wide" hero>
        <PageHeader
          eyebrow={t.home.eyebrow}
          title={
            <>
              {t.home.title}{" "}
              <span className="text-[var(--color-board-silver)]">
                {t.home.titleAccent}
              </span>
            </>
          }
          description={t.meta.siteDescription}
          align="left"
          size="hero"
        />
        <div className="flex flex-col sm:flex-row gap-3 -mt-2">
          <Button href="/contact" variant="primary" size="lg">
            {t.common.contactUs} <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            {t.home.viewServices}
          </Button>
        </div>
      </PageShell>

      <PageSection bordered>
        <SectionHeading
          eyebrow={t.home.workEyebrow}
          title={t.home.workTitle}
          description={t.home.workDescription}
          action={<SectionLink href="/work">{t.common.viewAll}</SectionLink>}
        />
        <EngagementsSection showLink={false} limit={3} numbered />
      </PageSection>

      <PageSection bordered muted>
        <SectionHeading
          eyebrow={t.home.servicesEyebrow}
          title={t.home.servicesTitle}
          action={<SectionLink href="/services">{t.common.allServices}</SectionLink>}
        />
        <div className="grid sm:grid-cols-2 gap-5">
          <Card hover className="flex flex-col h-full">
            <Code
              className="w-5 h-5 text-[var(--color-board-accent)] mb-4"
              strokeWidth={1.5}
            />
            <h3 className="text-base font-semibold text-[var(--color-board-text)] mb-2">
              {t.home.customDevTitle}
            </h3>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
              {t.home.customDevDescription}
            </p>
          </Card>

          <Card hover className="flex flex-col h-full">
            <Shield
              className="w-5 h-5 text-[var(--color-board-accent)] mb-4"
              strokeWidth={1.5}
            />
            <h3 className="text-base font-semibold text-[var(--color-board-text)] mb-2">
              {t.home.securityTitle}
            </h3>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
              {t.home.securityDescription}
            </p>
          </Card>
        </div>
      </PageSection>

      <PageSection>
        <CtaBand
          title={t.home.ctaTitle}
          description={t.home.ctaDescription}
          buttonLabel={t.common.getInTouch}
        />
      </PageSection>
    </>
  );
}
