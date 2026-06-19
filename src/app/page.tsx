import { ArrowRight, Code, Cpu, Shield } from "lucide-react";
import {
  CtaBanner,
  PageSection,
  PageShell,
  SectionHeading,
  SectionLink,
} from "@/components/layout/PageShell";
import { ClientLogoBar } from "@/components/brand/ClientLogo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { ExpertiseGrid } from "@/components/sections/ClientsSection";
import { siteConfig } from "@/lib/site-config";

const offerings = [
  {
    icon: Code,
    title: "Custom Development",
    description:
      "APIs, SDKs, and full-stack platforms for identity, IoT, and enterprise workflows.",
    href: "/services",
  },
  {
    icon: Shield,
    title: "Security Architecture",
    description:
      "Cryptographic verification, access control, and compliance-oriented validation.",
    href: "/services",
  },
  {
    icon: Cpu,
    title: siteConfig.productName,
    description:
      "Automated email metadata verification for accounts payable teams.",
    href: "/products",
    accent: true,
  },
];

export default function HomePage() {
  return (
    <>
      <PageShell width="wide" hero>
        <PageHeader
          eyebrow="Enterprise Technology Consulting"
          title={
            <>
              Infrastructure engineering{" "}
              <span className="text-[var(--color-muted)]">for teams that ship.</span>
            </>
          }
          description={siteConfig.description}
          align="left"
          size="large"
        />
        <div className="flex flex-col sm:flex-row gap-3 -mt-2 mb-14">
          <Button href="/services" variant="primary" size="lg">
            Our Services <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/contact#form" variant="secondary" size="lg">
            Contact
          </Button>
        </div>

        <div className="corp-panel px-8 py-10">
          <p className="corp-eyebrow mb-6 text-center">Selected clients</p>
          <ClientLogoBar />
        </div>
      </PageShell>

      <PageSection bordered>
        <SectionHeading
          eyebrow="Capabilities"
          title="What we deliver"
          action={<SectionLink href="/services">All services</SectionLink>}
        />
        <div className="grid sm:grid-cols-3 gap-4">
          {offerings.map(({ icon: Icon, title, description, href, accent }) => (
            <a key={title} href={href} className="group block h-full">
              <Card
                hover
                className={`flex flex-col h-full ${accent ? "border-cyan-900/30 group-hover:border-cyan-700/40" : ""}`}
              >
                <Icon
                  className={`w-5 h-5 mb-4 ${accent ? "text-cyan-400" : "text-[var(--color-muted)]"}`}
                  strokeWidth={1.5}
                />
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed flex-grow">
                  {description}
                </p>
              </Card>
            </a>
          ))}
        </div>
      </PageSection>

      <PageSection bordered muted>
        <SectionHeading
          eyebrow="Practice Areas"
          title="Where we focus"
          action={<SectionLink href="/company">About us</SectionLink>}
        />
        <ExpertiseGrid />
      </PageSection>

      <PageSection bordered>
        <CtaBanner
          title="Ready to scope an engagement?"
          description="Remote-first consulting with measurable engineering outcomes. Tell us about your platform, timeline, and team."
          buttonLabel="Start a conversation"
        />
      </PageSection>
    </>
  );
}
