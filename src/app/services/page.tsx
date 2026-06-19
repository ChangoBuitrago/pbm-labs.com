import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  Code,
  Server,
  Shield,
} from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { ExpertiseGrid } from "@/components/sections/ClientsSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Custom software development, identity infrastructure, IoT platform engineering, and security architecture for enterprise B2B teams.",
};

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Production-grade applications, APIs, and internal tooling. Our work spans identity SDKs, energy market platforms, mobile applications, and backend services for enterprise clients including Energy Web, Wattwatchers, and The Hashgraph Group.",
    items: [
      "Full-stack web & API architecture",
      "Mobile & edge applications",
      "SDK and developer tooling",
    ],
  },
  {
    icon: Shield,
    title: "Security & Cryptography Consulting",
    description:
      "Cryptographic verification layers, access control design, and data validation tooling. We implement DKIM-based integrity checks, zero-knowledge processing patterns, and audit-ready engineering for B2B compliance workflows.",
    items: [
      "Cryptographic implementation (PKI / DKIM)",
      "Business logic vulnerability audits",
      "Compliance-oriented validation tooling",
    ],
  },
  {
    icon: Server,
    title: "Cloud & Platform Infrastructure",
    description:
      "Backend services, IoT device integration, and cloud deployment for high-availability platforms. Experience includes grid flexibility markets, real-time energy monitoring, and distributed identity infrastructure at scale.",
    items: [
      "IoT & device cloud integration",
      "High-throughput data pipelines",
      "Multi-region deployment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageShell width="wide">
      <PageHeader
        eyebrow="Consulting"
        title="Enterprise technology consulting"
        description="PBM Labs delivers contract engineering and technical advisory for organizations building identity platforms, IoT systems, and security-sensitive B2B software."
      />

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {services.map(({ icon: Icon, title, description, items }) => (
          <Card key={title} hover className="flex flex-col h-full">
            <Icon className="w-7 h-7 text-slate-400 mb-5" strokeWidth={1.5} />
            <h2 className="text-lg font-semibold text-white mb-3">{title}</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">
              {description}
            </p>
            <ul className="space-y-2 text-sm text-slate-400 border-t border-slate-800/60 pt-5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-6">
          Related practice areas
        </h2>
        <ExpertiseGrid />
      </div>

      <div className="corp-panel p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-start gap-4">
          <Building2
            className="w-8 h-8 text-slate-600 shrink-0 mt-0.5"
            strokeWidth={1.5}
          />
          <div>
            <h2 className="text-lg font-semibold text-white mb-1">
              Discuss your project
            </h2>
            <p className="text-slate-500 text-sm max-w-md leading-relaxed">
              Remote-first engagements with {siteConfig.name}. Scope a technical
              consultation with our engineering leads.
            </p>
          </div>
        </div>
        <Button href="/contact#form" variant="primary" size="md" className="shrink-0">
          Contact Consulting Team
        </Button>
      </div>
    </PageShell>
  );
}
