import Link from "next/link";
import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  Code,
  Server,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Enterprise technology consulting — custom software development, security architecture, and cloud infrastructure design.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Enterprise Technology Consulting
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          PBM Labs LLC partners with mid-market and enterprise organizations to
          design, build, and audit high-security digital infrastructure and
          custom software solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 rounded-2xl bg-[#0B1221] border border-slate-800 hover:border-cyan-500/30 transition-colors">
          <Code className="w-10 h-10 text-cyan-400 mb-6" />
          <h2 className="text-2xl font-semibold text-white mb-4">
            Custom Software Development
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            We engineer scalable, resilient software applications tailored to
            specific enterprise workflows. From API integrations to core business
            logic, our team delivers production-ready code with a focus on
            maintainability and security.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              Full-Stack Web & API Architecture
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              Legacy System Modernization
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
              High-Throughput Data Processing
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-[#0B1221] border border-slate-800 hover:border-blue-500/30 transition-colors">
          <Shield className="w-10 h-10 text-blue-400 mb-6" />
          <h2 className="text-2xl font-semibold text-white mb-4">
            Security & Cryptography Consulting
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            We help organizations implement zero-trust architectures and
            cryptographic verification layers to protect against advanced social
            engineering and data tampering threats within their corporate
            networks.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              Business Logic Vulnerability Audits
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              Cryptographic Implementation (PKI/DKIM)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              &apos;Reasonable Care&apos; Compliance Engineering
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-2xl bg-[#0B1221] border border-slate-800 hover:border-indigo-500/30 transition-colors">
          <Server className="w-10 h-10 text-indigo-400 mb-6" />
          <h2 className="text-2xl font-semibold text-white mb-4">
            Cloud Infrastructure Design
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Design and deployment of robust cloud environments. We optimize for
            high availability, disaster recovery, and strict access controls,
            ensuring your data remains isolated and secure across global
            regions.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-[#0B1221] border border-slate-800 flex flex-col justify-center items-center text-center">
          <Building2 className="w-12 h-12 text-slate-500 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            Ready to discuss your project?
          </h2>
          <p className="text-slate-400 mb-6 text-sm">
            Schedule a technical consultation with our engineering leads.
          </p>
          <Link
            href="/contact"
            className="bg-white text-slate-950 px-6 py-2 rounded-md font-medium hover:bg-slate-200 transition-colors"
          >
            Contact Consulting Team
          </Link>
        </div>
      </div>
    </div>
  );
}
