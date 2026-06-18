import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { line1, line2, city, state, zip } = siteConfig.address;

  return (
    <footer className="bg-[#020617] border-t border-slate-800/80 py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link
            href="/"
            className="font-bold tracking-tight flex items-center gap-2 text-lg text-white w-fit"
          >
            <div className="w-5 h-5 rounded flex items-center justify-center bg-slate-800 border border-slate-700">
              <div className="w-1.5 h-1.5 bg-white rounded-sm" />
            </div>
            {siteConfig.name}
          </Link>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            Providing enterprise technology consulting and custom software
            development services. Builders of the {siteConfig.productName} for
            B2B data validation.
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            {line1}
            <br />
            {line2}
            <br />
            {city}, {state} {zip}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-slate-400 font-mono">
              Systems Operational
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-semibold text-sm tracking-wide uppercase">
            Corporate
          </span>
          <Link
            href="/services"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Consulting Services
          </Link>
          <Link
            href="/products"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Software Products
          </Link>
          <Link
            href="/contact#form"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-semibold text-sm tracking-wide uppercase">
            Legal & Compliance
          </span>
          <Link
            href="/terms"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <p className="text-xs text-slate-600 mt-4">
            © 2026 {siteConfig.name}.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
