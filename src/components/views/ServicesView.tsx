"use client";

import { CheckCircle2, Code, Server, Shield } from "lucide-react";
import { CtaBand, PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { useSite } from "@/components/providers/SiteProvider";

export function ServicesView() {
  const { t } = useSite();

  const services = [
    {
      icon: Code,
      title: t.services.customTitle,
      description: t.services.customDescription,
      items: t.services.customItems,
    },
    {
      icon: Shield,
      title: t.services.securityTitle,
      description: t.services.securityDescription,
      items: t.services.securityItems,
    },
    {
      icon: Server,
      title: t.services.cloudTitle,
      description: t.services.cloudDescription,
      items: t.services.cloudItems,
    },
  ];

  return (
    <PageShell width="wide">
      <PageHeader
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        description={t.services.description}
        align="left"
        size="large"
      />

      <div className="grid md:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, title, description, items }) => (
          <Card key={title} hover className="flex flex-col h-full">
            <Icon
              className="w-5 h-5 text-[var(--color-board-accent)] mb-4"
              strokeWidth={1.5}
            />
            <h2 className="text-base font-semibold text-[var(--color-board-text)] mb-2">
              {title}
            </h2>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed mb-5 flex-grow">
              {description}
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-board-muted)] border-t border-[var(--color-board-border)] pt-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-4 h-4 text-[var(--color-board-accent)] shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-14">
        <CtaBand
          title={t.services.ctaTitle}
          description={t.services.ctaDescription}
          buttonLabel={t.common.contactUs}
        />
      </div>
    </PageShell>
  );
}
