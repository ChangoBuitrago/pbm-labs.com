import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/site-config";

type EngagementsSectionProps = {
  showLink?: boolean;
  limit?: number;
  numbered?: boolean;
};

export function EngagementsSection({
  showLink = true,
  limit,
  numbered = false,
}: EngagementsSectionProps) {
  const engagements = limit
    ? siteConfig.engagements.slice(0, limit)
    : siteConfig.engagements;

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-5">
        {engagements.map(({ id, project, industry, summary, services }, index) => (
          <Card key={id} hover className="flex flex-col h-full relative">
            {numbered && (
              <span className="text-5xl font-semibold text-[var(--color-board-border)] absolute top-6 right-7 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <div className="mb-5 pr-12">
              <p className="corp-eyebrow !text-[var(--color-board-muted)] !tracking-[0.18em]">
                {industry}
              </p>
              <h3 className="text-xl font-semibold text-[var(--color-board-text)] mt-2 tracking-[-0.01em]">
                {project}
              </h3>
            </div>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed flex-grow mb-6">
              {summary}
            </p>
            <ul className="flex flex-wrap gap-2 border-t border-[var(--color-board-border)] pt-5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-xs text-[var(--color-board-muted)] border border-[var(--color-board-border)] rounded-md px-2.5 py-1"
                >
                  {service}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {showLink && engagements.length < siteConfig.engagements.length && (
        <div className="mt-10">
          <Link href="/clients" className="section-link">
            View all engagements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}

export function EngagementModel() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {siteConfig.engagementModel.map(({ step, title, description }) => (
        <Card key={step}>
          <span className="text-sm font-mono text-[var(--color-board-accent)] mb-4 block">
            {step}
          </span>
          <h3 className="text-lg font-semibold text-[var(--color-board-text)] mb-2">
            {title}
          </h3>
          <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
            {description}
          </p>
        </Card>
      ))}
    </div>
  );
}

export function ExpertiseGrid() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {siteConfig.expertise.map(({ title, description }) => (
        <Card key={title} className="h-full">
          <h3 className="text-lg font-semibold text-[var(--color-board-text)] mb-2">
            {title}
          </h3>
          <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
            {description}
          </p>
        </Card>
      ))}
    </div>
  );
}

export const ClientsSection = EngagementsSection;
