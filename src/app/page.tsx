import Link from "next/link";
import { ArrowRight, ChevronRight, Code, Cpu, Shield } from "lucide-react";
import {
  CtaBand,
  PageSection,
  PageShell,
  SectionHeading,
  SectionLink,
} from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  EngagementModel,
  EngagementsSection,
  ExpertiseGrid,
} from "@/components/sections/ClientsSection";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  return (
    <>
      <PageShell width="wide" hero>
        <PageHeader
          eyebrow="Enterprise Technology Consulting"
          title={
            <>
              Engineering infrastructure{" "}
              <span className="text-[var(--color-board-silver)]">
                for regulated B2B teams.
              </span>
            </>
          }
          description={siteConfig.description}
          align="left"
          size="hero"
        />
        <div className="flex flex-col sm:flex-row gap-3 -mt-2">
          <Button href="/contact#form" variant="primary" size="lg">
            Start a consultation <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            View services
          </Button>
        </div>
      </PageShell>

      <PageSection bordered>
        <SectionHeading
          eyebrow="Case Studies"
          title="Representative engagements"
          description="Anonymized project summaries across energy, identity, and enterprise software. No client identities disclosed."
          action={<SectionLink href="/clients">All engagements</SectionLink>}
        />
        <EngagementsSection showLink={false} limit={4} numbered />
      </PageSection>

      <PageSection bordered muted>
        <SectionHeading
          eyebrow="Methodology"
          title="How we deliver"
          description="A structured engagement model designed for enterprise stakeholders who need measurable outcomes."
        />
        <EngagementModel />
      </PageSection>

      <PageSection bordered>
        <SectionHeading
          eyebrow="Expertise"
          title="Practice areas"
          action={<SectionLink href="/company">About us</SectionLink>}
        />
        <ExpertiseGrid />
      </PageSection>

      <PageSection bordered muted>
        <SectionHeading
          eyebrow="Offerings"
          title="Services and products"
          action={<SectionLink href="/services">All services</SectionLink>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card hover className="flex flex-col h-full group">
            <Code
              className="w-6 h-6 text-[var(--color-board-accent)] mb-5"
              strokeWidth={1.5}
            />
            <h3 className="text-lg font-semibold text-[var(--color-board-text)] mb-2">
              Custom Development
            </h3>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed flex-grow">
              APIs, SDKs, and full-stack platforms for identity, IoT, and
              enterprise workflows.
            </p>
          </Card>

          <Card hover className="flex flex-col h-full">
            <Shield
              className="w-6 h-6 text-[var(--color-board-accent)] mb-5"
              strokeWidth={1.5}
            />
            <h3 className="text-lg font-semibold text-[var(--color-board-text)] mb-2">
              Security Architecture
            </h3>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed flex-grow">
              Cryptographic verification, access control, and compliance-oriented
              validation engineering.
            </p>
          </Card>

          <Link href="/products" className="group sm:col-span-2 lg:col-span-1">
            <Card
              hover
              className="flex flex-col h-full border-[var(--color-board-accent)]/20 group-hover:border-[var(--color-board-accent)]/40"
            >
              <Cpu
                className="w-6 h-6 text-[var(--color-board-accent)] mb-5"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-[var(--color-board-text)] mb-2">
                {siteConfig.productName}
              </h3>
              <p className="text-[var(--color-board-muted)] text-sm leading-relaxed flex-grow mb-4">
                Automated email metadata verification for accounts payable
                workflows.
              </p>
              <span className="section-link text-sm">
                Learn more <ChevronRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>
        </div>
      </PageSection>

      <PageSection>
        <CtaBand
          title="Scope your next engagement"
          description="Remote-first consulting with milestone-driven delivery. Tell us about your platform, timeline, and engineering constraints."
          buttonLabel="Contact engineering leads"
        />
      </PageSection>
    </>
  );
}
