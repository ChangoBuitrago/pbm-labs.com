import type { Metadata } from "next";
import { Database, Fingerprint } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
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

const sampleResponse = `{
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
}`;

export default function ProductsPage() {
  return (
    <PageShell width="wide">
      <PageHeader
        eyebrow="Flagship Product"
        title={siteConfig.productName}
        description={`Developed internally by our engineering team, the ${siteConfig.productName} is a B2B infrastructure tool designed for Chief Financial Officers and Risk Managers to automate "Reasonable Care" in Accounts Payable workflows.`}
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-5">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="corp-panel p-5 flex gap-4">
                <div className="w-10 h-10 rounded-md bg-slate-950/60 border border-slate-800/60 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-white font-semibold text-sm mb-1">
                    {title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact#form" variant="primary" size="md">
              Request API Key
            </Button>
            <Button href="/contact#form" variant="secondary" size="md">
              Contact for Documentation
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:sticky lg:top-24">
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
              <code>{sampleResponse}</code>
            </pre>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
