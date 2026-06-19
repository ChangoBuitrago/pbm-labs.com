import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageShell width="default">
      <div className="text-center py-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">
          404
        </p>
        <h1 className="text-3xl font-semibold text-white mb-3">
          Page not found
        </h1>
        <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
          The page you requested does not exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary" size="md">
            Back to home
          </Button>
          <Button href="/contact#form" variant="secondary" size="md">
            Contact us
          </Button>
        </div>
      </div>
    </PageShell>
  );
}
