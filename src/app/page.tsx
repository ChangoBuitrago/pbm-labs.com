import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Code,
  Cpu,
  Globe,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/site-config";

const trustItems = [
  { icon: Building2, label: "B2B Enterprise Only" },
  { icon: Globe, label: "U.S. Registered LLC" },
  { icon: Shield, label: "Security-First Engineering" },
];

export default function HomePage() {
  return (
    <div className="animate-in">
      <main className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-950/20 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400/90 mb-6">
            Enterprise Technology Consulting
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] mb-7 text-white">
            Secure infrastructure and{" "}
            <span className="text-slate-400">software engineering</span> for
            enterprise teams.
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
            {siteConfig.name} designs enterprise software architecture and builds
            cryptographic data validation tools for high-stakes corporate
            environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Button href="/services" variant="primary" size="lg">
              Our Services <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/products" variant="secondary" size="lg">
              Software Products
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-8 border-t border-slate-800/60">
            {trustItems.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-sm text-slate-500"
              >
                <Icon className="w-4 h-4 text-slate-600" strokeWidth={1.5} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="border-t border-slate-800/60 py-20 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-3">
                Core Competencies
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                Engineering expertise for complex corporate environments
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 w-fit transition-colors"
            >
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Card hover className="flex flex-col h-full">
              <Code className="w-7 h-7 text-slate-400 mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-2">
                Custom Development
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                End-to-end software engineering — internal tools, APIs, and
                scalable platforms aligned with strict business requirements.
              </p>
            </Card>

            <Card hover className="flex flex-col h-full">
              <Shield className="w-7 h-7 text-slate-400 mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-2">
                Security Architecture
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                Zero-trust implementation, business logic vulnerability audits,
                and cryptographic validation layers.
              </p>
            </Card>

            <Link href="/products" className="group">
              <Card
                hover
                className="flex flex-col h-full border-blue-900/30 group-hover:border-blue-800/50"
              >
                <Cpu
                  className="w-7 h-7 text-blue-400 mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {siteConfig.productName}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4">
                  Proprietary software for automated cryptographic verification
                  in accounts payable workflows.
                </p>
                <span className="text-sm text-blue-400 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
