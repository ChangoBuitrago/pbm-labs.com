import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/site-config";

type ClientsSectionProps = {
  showLink?: boolean;
  limit?: number;
};

export function ClientsSection({ showLink = true, limit }: ClientsSectionProps) {
  const clients = limit
    ? siteConfig.clients.slice(0, limit)
    : siteConfig.clients;

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-5">
        {clients.map(({ name, industry, summary, services }) => (
          <Card key={name} hover className="flex flex-col h-full">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="text-xs font-medium tracking-wide uppercase text-slate-500 mt-1">
                {industry}
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">
              {summary}
            </p>
            <ul className="flex flex-wrap gap-2 border-t border-slate-800/60 pt-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-xs text-slate-500 bg-slate-950/60 border border-slate-800/60 rounded px-2.5 py-1"
                >
                  {service}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {showLink && clients.length < siteConfig.clients.length && (
        <div className="mt-8">
          <Link
            href="/clients"
            className="text-sm text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors"
          >
            View all client engagements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
}

export function ClientNamesBar() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {siteConfig.clients.map(({ name }) => (
        <span
          key={name}
          className="text-sm font-medium text-slate-500 tracking-tight"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export function EngagementModel() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {siteConfig.engagementModel.map(({ step, title, description }) => (
        <Card key={step} className="relative">
          <span className="text-xs font-mono text-slate-600 mb-4 block">
            {step}
          </span>
          <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
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
          <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
        </Card>
      ))}
    </div>
  );
}
