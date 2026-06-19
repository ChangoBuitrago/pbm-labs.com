"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";

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
      <div className="text-center py-10">
        <p className="corp-eyebrow mb-4">Error</p>
        <h1 className="text-2xl font-semibold text-white mb-2">
          Something went wrong
        </h1>
        <p className="text-[var(--color-muted)] text-sm mb-6 max-w-sm mx-auto">
          An unexpected error occurred. You can try again or return home.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 hover:from-cyan-400 hover:to-cyan-300 transition-all"
          >
            Try again
          </button>
          <Button href="/" variant="secondary" size="md">
            Back to home
          </Button>
        </div>
        <p className="text-xs text-[var(--color-muted)]/70 mt-6">
          Need help?{" "}
          <Link href="/contact#form" className="text-cyan-400 hover:text-cyan-300">
            Contact support
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
