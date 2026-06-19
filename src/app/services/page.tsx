import type { Metadata } from "next";
import { CheckCircle2, Code, Server, Shield } from "lucide-react";
import { CtaBand, PageShell } from "@/components/layout/PageShell";
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
      "Production-grade applications, APIs, and internal tooling for identity SDKs, energy market platforms, mobile applications, and backend services.",
    items: [
      "Full-stack web & API architecture",
      "Mobile & edge applications",
      "SDK and developer tooling",
    ],
  },
  {
    icon: Shield,
    title: "Security & Cryptography",
    description:
      "Verification layers, access control design, and validation tooling for B2B compliance workflows.",
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
      "Backend services, IoT integration, and cloud deployment for high-availability platforms at scale.",
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
        description="Contract engineering and technical advisory for identity platforms, IoT systems, and security-sensitive B2B software."
        align="left"
        size="large"
      />

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {services.map(({ icon: Icon, title, description, items }) => (
          <Card key={title} hover className="flex flex-col h-full">
            <Icon
              className="w-6 h-6 text-[var(--color-board-accent)] mb-5"
              strokeWidth={1.5}
            />
            <h2 className="text-lg font-semibold text-[var(--color-board-text)] mb-3">
              {title}
            </h2>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed mb-6 flex-grow">
              {description}
            </p>
            <ul className="space-y-2.5 text-sm text-[var(--color-board-muted)] border-t border-[var(--color-board-border)] pt-5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-4 h-4 text-[var(--color-board-accent)] shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mb-16">
        <p className="corp-eyebrow mb-6">Related expertise</p>
        <ExpertiseGrid />
      </div>

      <CtaBand
        title="Discuss your project"
        description={`Remote-first engagements with ${siteConfig.name}. Scope a technical consultation with our engineering leads.`}
        buttonLabel="Contact consulting team"
      />
    </PageShell>
  );
}
