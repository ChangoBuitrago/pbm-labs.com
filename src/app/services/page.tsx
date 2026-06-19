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

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Enterprise technology consulting — custom software development, security architecture, and cloud infrastructure design.",
};

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "We engineer scalable, resilient software applications tailored to specific enterprise workflows. From API integrations to core business logic, our team delivers production-ready code with a focus on maintainability and security.",
    items: [
      "Full-Stack Web & API Architecture",
      "Legacy System Modernization",
      "High-Throughput Data Processing",
    ],
  },
  {
    icon: Shield,
    title: "Security & Cryptography Consulting",
    description:
      "We help organizations implement zero-trust architectures and cryptographic verification layers to protect against advanced social engineering and data tampering threats within their corporate networks.",
    items: [
      "Business Logic Vulnerability Audits",
      "Cryptographic Implementation (PKI/DKIM)",
      "'Reasonable Care' Compliance Engineering",
    ],
  },
  {
    icon: Server,
    title: "Cloud Infrastructure Design",
    description:
      "Design and deployment of robust cloud environments. We optimize for high availability, disaster recovery, and strict access controls, ensuring your data remains isolated and secure across global regions.",
    items: [
      "High Availability & Disaster Recovery",
      "Strict Access Controls",
      "Multi-Region Deployment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageShell width="wide">
      <PageHeader
        eyebrow="Consulting"
        title="Enterprise technology consulting"
        description="PBM Labs partners with mid-market and enterprise organizations to design, build, and audit high-security digital infrastructure and custom software solutions."
      />

      <div className="grid md:grid-cols-3 gap-5">
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

      <div className="mt-10 corp-panel p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
              Schedule a technical consultation with our engineering leads.
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
