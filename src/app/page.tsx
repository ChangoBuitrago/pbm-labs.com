import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Code,
  Cpu,
  Shield,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="animate-in">
      <main className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none -z-10" />

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.1] mb-8 text-white">
          Secure Infrastructure & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
            Software Engineering.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
          PBM Labs LLC is a specialized technology consulting firm. We design
          enterprise software architecture and build cryptographic data
          validation tools for high-stakes corporate environments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/services"
            className="bg-white text-slate-950 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-slate-200 transition-all"
          >
            Explore Our Services <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/products"
            className="px-8 py-4 rounded-lg font-semibold text-slate-300 hover:text-white transition-all border border-slate-700 hover:bg-slate-800"
          >
            View Software Products
          </Link>
        </div>
      </main>

      <section className="border-t border-slate-800/80 py-24 bg-[#050B14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Core Competencies
              </h2>
              <p className="text-slate-400">
                Our engineering team specializes in solving complex
                infrastructure and security challenges for mid-market
                organizations.
              </p>
            </div>
            <Link
              href="/services"
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 mt-4 md:mt-0"
            >
              View all services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#0B1221] border border-slate-800 flex flex-col h-full">
              <Code className="w-8 h-8 text-slate-300 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Custom Development
              </h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                End-to-end software engineering. We build internal tools, APIs,
                and scalable platforms that align with strict business
                requirements.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0B1221] border border-slate-800 flex flex-col h-full">
              <Shield className="w-8 h-8 text-slate-300 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Security Architecture
              </h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                Consulting on zero-trust implementation, business logic
                vulnerabilities, and cryptographic validation layers.
              </p>
            </div>
            <Link
              href="/products"
              className="p-8 rounded-2xl border border-slate-800 flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Cpu className="w-8 h-8 text-cyan-400 mb-6 relative z-10" />
              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
                PBM Validation API
              </h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow relative z-10">
                Discover our proprietary software solution designed to prevent
                invoice fraud via automated cryptographic verification.
              </p>
              <div className="relative z-10 text-cyan-400 text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
