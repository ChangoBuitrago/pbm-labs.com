"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/components/providers/SiteProvider";

export default function NotFound() {
  const { t } = useSite();

  return (
    <PageShell width="default">
      <div className="text-center py-12">
        <p className="corp-eyebrow mb-4">{t.notFound.eyebrow}</p>
        <h1 className="text-3xl font-semibold text-[var(--color-board-text)] mb-3">
          {t.notFound.title}
        </h1>
        <p className="text-[var(--color-board-muted)] text-sm mb-8 max-w-md mx-auto">
          {t.notFound.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary" size="md">
            {t.notFound.backHome}
          </Button>
          <Button href="/contact" variant="secondary" size="md">
            {t.common.contactUs}
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
