import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site-config";

const companyLinks = [
  { href: "/services", label: "Consulting Services" },
  { href: "/products", label: "Software Products" },
  { href: "/contact#form", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#060a10] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Link href="/" className="w-fit hover:opacity-90 transition-opacity">
            <Logo size="md" />
          </Link>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 sm:gap-16 lg:gap-24">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400">
                Company
              </span>
              {companyLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400">
                Legal
              </span>
              {legalLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400">
                Email
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-slate-500 hover:text-white transition-colors w-fit"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
