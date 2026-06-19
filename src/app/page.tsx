import { ArrowRight, Code, Shield } from "lucide-react";
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
import { EngagementsSection } from "@/components/sections/ClientsSection";
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
          <Button href="/contact" variant="primary" size="lg">
            Contact us <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            View services
          </Button>
        </div>
      </PageShell>

      <PageSection bordered>
        <SectionHeading
          eyebrow="Work"
          title="Selected engagements"
          description="Anonymized project summaries. No client identities disclosed."
          action={<SectionLink href="/work">View all</SectionLink>}
        />
        <EngagementsSection showLink={false} limit={3} numbered />
      </PageSection>

      <PageSection bordered muted>
        <SectionHeading
          eyebrow="Services"
          title="What we deliver"
          action={<SectionLink href="/services">All services</SectionLink>}
        />
        <div className="grid sm:grid-cols-2 gap-5">
          <Card hover className="flex flex-col h-full">
            <Code
              className="w-5 h-5 text-[var(--color-board-accent)] mb-4"
              strokeWidth={1.5}
            />
            <h3 className="text-base font-semibold text-[var(--color-board-text)] mb-2">
              Custom Development
            </h3>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
              APIs, SDKs, and full-stack platforms for identity, IoT, and
              enterprise workflows.
            </p>
          </Card>

          <Card hover className="flex flex-col h-full">
            <Shield
              className="w-5 h-5 text-[var(--color-board-accent)] mb-4"
              strokeWidth={1.5}
            />
            <h3 className="text-base font-semibold text-[var(--color-board-text)] mb-2">
              Security Architecture
            </h3>
            <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
              Cryptographic verification, access control, and compliance-oriented
              validation engineering.
            </p>
          </Card>
        </div>
      </PageSection>

      <PageSection>
        <CtaBand
          title="Discuss your project"
          description="Remote consulting with milestone-driven delivery for enterprise engineering teams."
          buttonLabel="Get in touch"
        />
      </PageSection>
    </>
  );
}
