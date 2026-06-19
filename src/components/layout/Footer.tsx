import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { line1, line2, city, state, zip } = siteConfig.address;

  return (
    <footer className="border-t border-slate-800/60 bg-[#060a10] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/60">
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="w-fit hover:opacity-90 transition-opacity">
              <Logo size="md" />
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Enterprise technology consulting and custom software development.
              Builders of the {siteConfig.productName} for B2B data validation.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              {line1}
              <br />
              {line2}
              <br />
              {city}, {state} {zip}
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400">
              Corporate
            </span>
            <Link
              href="/services"
              className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
            >
              Consulting Services
            </Link>
            <Link
              href="/products"
              className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
            >
              Software Products
            </Link>
            <Link
              href="/contact#form"
              className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
            >
              Contact
            </Link>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400">
              Legal & Compliance
            </span>
            <Link
              href="/terms"
              className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
            >
              Privacy Policy
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2026 {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-slate-500 font-mono tracking-wide">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
