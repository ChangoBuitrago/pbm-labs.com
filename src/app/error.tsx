"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Button, buttonClassName } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageShell width="default">
      <div className="text-center py-12">
        <p className="corp-eyebrow mb-4">Error</p>
        <h1 className="text-3xl font-semibold text-[var(--color-board-text)] mb-3">
          Something went wrong
        </h1>
        <p className="text-[var(--color-board-muted)] text-sm mb-8 max-w-md mx-auto">
          An unexpected error occurred. You can try again or return to the home
          page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className={buttonClassName({ variant: "primary", size: "md" })}
          >
            Try again
          </button>
          <Button href="/" variant="secondary" size="md">
            Back to home
          </Button>
        </div>
        <p className="text-xs text-[var(--color-board-muted)] mt-8">
          Need help?{" "}
          <Link
            href="/contact#form"
            className="text-[var(--color-board-accent)] hover:brightness-110"
          >
            Contact support
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
