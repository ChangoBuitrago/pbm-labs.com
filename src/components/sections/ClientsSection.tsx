"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSite } from "@/components/providers/SiteProvider";
import { Card } from "@/components/ui/Card";

const ENGAGEMENT_KEYS = ["grid", "identity", "credential", "energy"] as const;
const EXPERTISE_KEYS = ["identity", "iot", "fullstack", "security"] as const;

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
  const { t } = useSite();
  const keys = limit ? ENGAGEMENT_KEYS.slice(0, limit) : ENGAGEMENT_KEYS;

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-5">
        {keys.map((key, index) => {
          const engagement = t.engagements[key];
          return (
            <Card key={key} hover className="flex flex-col h-full relative">
              {numbered && (
                <span className="text-5xl font-semibold text-[var(--color-board-border)] absolute top-6 right-7 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              )}
              <div className="mb-5 pr-12">
                <p className="corp-eyebrow !text-[var(--color-board-muted)] !tracking-[0.18em]">
                  {engagement.industry}
                </p>
                <h3 className="text-xl font-semibold text-[var(--color-board-text)] mt-2 tracking-[-0.01em]">
                  {engagement.project}
                </h3>
              </div>
              <p className="text-[var(--color-board-muted)] text-sm leading-relaxed flex-grow mb-6">
                {engagement.summary}
              </p>
              <ul className="flex flex-wrap gap-2 border-t border-[var(--color-board-border)] pt-5">
                {engagement.services.map((service) => (
                  <li
                    key={service}
                    className="text-xs text-[var(--color-board-muted)] border border-[var(--color-board-border)] rounded-md px-2.5 py-1"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>

      {showLink && limit && limit < ENGAGEMENT_KEYS.length && (
        <div className="mt-10">
          <Link href="/work" className="section-link">
            {t.common.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}

export function ExpertiseGrid() {
  const { t } = useSite();

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {EXPERTISE_KEYS.map((key) => {
        const area = t.expertise[key];
        return (
          <Card key={key} className="h-full">
            <h3 className="text-lg font-semibold text-[var(--color-board-text)] mb-2">
              {area.title}
            </h3>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
              {area.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}

export const ClientsSection = EngagementsSection;
