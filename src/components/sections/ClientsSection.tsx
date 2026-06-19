import { ClientLogo } from "@/components/brand/ClientLogo";
import { Card } from "@/components/ui/Card";
import { SectionLink } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/site-config";

type ClientsSectionProps = {
  showLink?: boolean;
  limit?: number;
  compact?: boolean;
};

export function ClientsSection({
  showLink = true,
  limit,
  compact = false,
}: ClientsSectionProps) {
  const clients = limit
    ? siteConfig.clients.slice(0, limit)
    : siteConfig.clients;

  return (
    <>
      <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-2"}`}>
        {clients.map((client) => (
          <Card key={client.id} hover className="flex flex-col h-full">
            <div className="mb-5 pb-5 border-b border-[var(--color-border)]">
              <ClientLogo client={client} height={22} className="opacity-60" />
              <p className="text-[11px] font-medium tracking-wide uppercase text-[var(--color-muted)] mt-3">
                {client.industry}
              </p>
            </div>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed flex-grow">
              {client.summary}
            </p>
            {!compact && (
              <ul className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-[var(--color-border)]">
                {client.services.map((service) => (
                  <li
                    key={service}
                    className="text-[11px] text-[var(--color-muted)] bg-[var(--color-bg)]/80 border border-[var(--color-border)] rounded-md px-2 py-0.5"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>

      {showLink && clients.length < siteConfig.clients.length && (
        <div className="mt-6">
          <SectionLink href="/clients">View all clients</SectionLink>
        </div>
      )}
    </>
  );
}

export function EngagementModel() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {siteConfig.engagementModel.map(({ step, title, description }) => (
        <Card key={step}>
          <span className="text-[11px] font-mono text-cyan-500/70 mb-3 block">
            {step}
          </span>
          <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            {description}
          </p>
        </Card>
      ))}
    </div>
  );
}

export function ExpertiseGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {siteConfig.expertise.map(({ title, description }) => (
        <Card key={title} className="h-full">
          <h3 className="text-sm font-semibold text-white mb-1.5">{title}</h3>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            {description}
          </p>
        </Card>
      ))}
    </div>
  );
}

export { ClientLogoBar } from "@/components/brand/ClientLogo";
