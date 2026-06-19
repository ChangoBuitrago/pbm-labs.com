"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Button, buttonClassName } from "@/components/ui/Button";
import { useSite } from "@/components/providers/SiteProvider";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { t } = useSite();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageShell width="default">
      <div className="text-center py-12">
        <p className="corp-eyebrow mb-4">{t.error.eyebrow}</p>
        <h1 className="text-3xl font-semibold text-[var(--color-board-text)] mb-3">
          {t.error.title}
        </h1>
        <p className="text-[var(--color-board-muted)] text-sm mb-8 max-w-md mx-auto">
          {t.error.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className={buttonClassName({ variant: "primary", size: "md" })}
          >
            {t.error.tryAgain}
          </button>
          <Button href="/" variant="secondary" size="md">
            {t.error.backHome}
          </Button>
        </div>
        <p className="text-xs text-[var(--color-board-muted)] mt-8">
          {t.error.needHelp}{" "}
          <Link
            href="/contact"
            className="text-[var(--color-board-accent)] hover:brightness-110"
          >
            {t.error.contactSupport}
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
