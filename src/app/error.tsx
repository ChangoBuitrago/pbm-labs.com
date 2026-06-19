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
      <div className="text-center py-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">
          Error
        </p>
        <h1 className="text-3xl font-semibold text-white mb-3">
          Something went wrong
        </h1>
        <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
          An unexpected error occurred. You can try again or return to the home
          page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-md bg-white text-slate-950 hover:bg-slate-100 transition-colors"
          >
            Try again
          </button>
          <Button href="/" variant="secondary" size="md">
            Back to home
          </Button>
        </div>
        <p className="text-xs text-slate-600 mt-8">
          Need help?{" "}
          <Link href="/contact#form" className="text-blue-400 hover:text-blue-300">
            Contact support
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
