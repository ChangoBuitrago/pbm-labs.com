import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageShell width="default">
      <div className="text-center py-10">
        <p className="corp-eyebrow mb-4">404</p>
        <h1 className="text-2xl font-semibold text-white mb-2">Page not found</h1>
        <p className="text-[var(--color-muted)] text-sm mb-6 max-w-sm mx-auto">
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
