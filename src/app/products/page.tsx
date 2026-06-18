import type { Metadata } from "next";
import { Database, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Software Products",
  description: `${siteConfig.productName} — B2B cryptographic email validation infrastructure for enterprise accounts payable workflows.`,
};

const features = [
  {
    icon: Fingerprint,
    title: "Cryptographic Invoice Verification",
    description:
      "Mathematically verify the DKIM origin of vendor emails to prevent Business Email Compromise (BEC) and lookalike domain fraud.",
  },
  {
    icon: Database,
    title: "Zero-Knowledge Processing",
    description:
      "We process hashes, not corporate payment data. The API extracts metadata without retaining plaintext invoice data.",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in">
      <PageHeader
        eyebrow="Flagship Product"
        title={siteConfig.productName}
        description={`Developed internally by our engineering team, the ${siteConfig.productName} is a B2B infrastructure tool designed for Chief Financial Officers and Risk Managers to automate "Reasonable Care" in Accounts Payable workflows.`}
        align="left"
      />

      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <div className="space-y-6 mb-10">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-md corp-panel flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-white font-semibold">{title}</h2>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="/contact#form" variant="primary" size="md">
              Request API Key
            </Button>
            <Button href="/contact#form" variant="secondary" size="md">
              Contact for Documentation
            </Button>
          </div>
        </div>

        <div className="corp-panel p-6">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800/60">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-slate-500 ml-2">
              POST /api/v1/verify/eml
            </span>
          </div>
          <pre className="text-xs font-mono text-slate-400 overflow-x-auto leading-relaxed">
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
  );
}
