"use client";

import { CtaBand, PageShell } from "@/components/layout/PageShell";
import { EngagementsSection } from "@/components/sections/ClientsSection";
import { PageHeader } from "@/components/ui/PageHeader";
import { useSite } from "@/components/providers/SiteProvider";

export function WorkView() {
  const { t } = useSite();

  return (
    <PageShell width="wide">
      <PageHeader
        eyebrow={t.work.eyebrow}
        title={t.work.title}
        description={t.work.description}
        align="left"
        size="large"
      />
      <EngagementsSection showLink={false} numbered />
      <div className="mt-14">
        <CtaBand
          title={t.work.ctaTitle}
          description={t.work.ctaDescription}
          buttonLabel={t.common.getInTouch}
        />
      </div>
    </PageShell>
  );
}
