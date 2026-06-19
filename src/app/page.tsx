import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Code,
  Cpu,
  Shield,
} from "lucide-react";
import { PageSection, PageShell, SectionHeading } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import {
  ClientNamesBar,
  ClientsSection,
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
              Custom software and{" "}
              <span className="text-slate-400">infrastructure engineering</span>{" "}
              for enterprise teams.
            </>
          }
          description={siteConfig.description}
          align="left"
          size="large"
        />
        <div className="flex flex-col sm:flex-row gap-3 -mt-4 mb-12">
          <Button href="/services" variant="primary" size="lg">
            Our Services <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/contact#form" variant="secondary" size="lg">
            Contact
          </Button>
        </div>
        <ClientNamesBar />
      </PageShell>

      <PageSection bordered>
        <SectionHeading
          eyebrow="Client Engagements"
          title="Trusted by enterprise engineering teams"
          action={
            <Link
              href="/clients"
              className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 w-fit transition-colors"
            >
              View all clients <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />
        <ClientsSection showLink={false} limit={4} />
      </PageSection>

      <PageSection bordered muted>
        <SectionHeading
          eyebrow="Practice Areas"
          title="Technical depth across platform engineering"
          action={
            <Link
              href="/company"
              className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 w-fit transition-colors"
            >
              About the company <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />
        <ExpertiseGrid />
      </PageSection>

      <PageSection bordered>
        <SectionHeading
          eyebrow="Services & Products"
          title="Consulting and proprietary software"
          action={
            <Link
              href="/services"
              className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 w-fit transition-colors"
            >
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card hover className="flex flex-col h-full">
            <Code className="w-7 h-7 text-slate-400 mb-5" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-white mb-2">
              Custom Development
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-grow">
              APIs, admin tooling, and full-stack applications — from identity
              SDKs to IoT backends and internal business platforms.
            </p>
          </Card>

          <Card hover className="flex flex-col h-full">
            <Shield className="w-7 h-7 text-slate-400 mb-5" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-white mb-2">
              Security Architecture
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed flex-grow">
              Cryptographic verification, access control design, and data
              validation layers for regulated B2B environments.
            </p>
          </Card>

          <Link href="/products" className="group sm:col-span-2 lg:col-span-1">
            <Card
              hover
              className="flex flex-col h-full border-blue-900/30 group-hover:border-blue-800/50"
            >
              <Cpu className="w-7 h-7 text-blue-400 mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-2">
                {siteConfig.productName}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4">
                Internal software product for automated email metadata
                verification in accounts payable workflows.
              </p>
              <span className="text-sm text-blue-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </Link>
        </div>
      </PageSection>
    </>
  );
}
