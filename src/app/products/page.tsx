import Link from "next/link";
import type { Metadata } from "next";
import { Database, Fingerprint } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Software Products",
  description: `${siteConfig.productName} — B2B cryptographic email validation infrastructure for enterprise accounts payable workflows.`,
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 mb-8 uppercase tracking-wider font-semibold">
        Flagship Software Product
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            {siteConfig.productName}
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Developed internally by our engineering team, the {siteConfig.productName}{" "}
            is a B2B infrastructure tool designed for Chief Financial Officers
            and Risk Managers to automate &quot;Reasonable Care&quot; in Accounts
            Payable workflows.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 shrink-0">
                <Fingerprint className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-lg">
                  Cryptographic Invoice Verification
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Mathematically verify the DKIM origin of vendor emails to
                  prevent Business Email Compromise (BEC) and lookalike domain
                  fraud.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 shrink-0">
                <Database className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h2 className="text-white font-semibold text-lg">
                  Zero-Knowledge Processing
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  We process hashes, not corporate payment data. The API
                  extracts metadata without retaining plaintext invoice data.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact#form"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-cyan-500/20"
            >
              Request API Key
            </Link>
            <Link
              href="/contact#form"
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact for Documentation
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 blur-3xl rounded-full" />
          <div className="relative bg-[#0B1221] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800/50">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-slate-500 ml-2">
                POST /api/v1/verify/eml
              </span>
            </div>
            <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
              <code>
                {`{
  "status": "success",
  "data": {
    "authenticity": "VERIFIED",
    "origin_domain": "vendor-corp.com",
    "dkim_signature": "valid",
    "attachments": [
      {
        "filename": "invoice_0042.pdf",
        "integrity": "intact",
        "sha256": "8f434346648f6b96df89..."
      }
    ],
    "timestamp": "2026-06-18T14:30:00Z"
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
