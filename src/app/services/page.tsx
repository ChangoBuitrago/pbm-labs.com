import type { Metadata } from "next";
import { CheckCircle2, Code, Server, Shield } from "lucide-react";
import { CtaBanner, PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";

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
      "Production-grade applications, APIs, and internal tooling — from identity SDKs to energy market platforms and mobile applications.",
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
      />

      <div className="grid md:grid-cols-3 gap-4">
        {services.map(({ icon: Icon, title, description, items }) => (
          <Card key={title} hover className="flex flex-col h-full">
            <Icon
              className="w-5 h-5 text-cyan-400/80 mb-4"
              strokeWidth={1.5}
            />
            <h2 className="text-sm font-semibold text-white mb-2">{title}</h2>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5 flex-grow">
              {description}
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-muted)] border-t border-[var(--color-border)] pt-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-cyan-500/80 shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-14">
        <CtaBanner
          title="Discuss your project"
          description="Remote-first engagements scoped to measurable engineering outcomes."
          buttonLabel="Contact consulting team"
        />
      </div>
    </PageShell>
  );
}
