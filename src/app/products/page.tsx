import type { Metadata } from "next";
import { Database, Fingerprint } from "lucide-react";
import { CtaBanner, PageShell } from "@/components/layout/PageShell";
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
      "Verify the DKIM origin of vendor emails to prevent business email compromise and lookalike domain fraud.",
  },
  {
    icon: Database,
    title: "Zero-Knowledge Processing",
    description:
      "Processes hashes, not payment data. Metadata extraction without retaining plaintext invoice content.",
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
        eyebrow="Product"
        title={siteConfig.productName}
        description="B2B infrastructure for CFO and risk teams to automate reasonable care in accounts payable workflows."
        align="left"
      />

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="corp-panel p-5 flex gap-4">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-cyan-400" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-white font-semibold text-sm mb-1">
                  {title}
                </h2>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="/contact#form" variant="primary" size="md">
              Request API Key
            </Button>
            <Button href="/contact#form" variant="secondary" size="md">
              Documentation
            </Button>
          </div>
        </div>

        <div className="lg:sticky lg:top-20">
          <div className="corp-panel p-5">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[var(--color-border)]">
              <div className="w-2 h-2 rounded-full bg-red-400/70" />
              <div className="w-2 h-2 rounded-full bg-amber-400/70" />
              <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
              <span className="text-[11px] font-mono text-[var(--color-muted)] ml-1">
                POST /api/v1/verify/eml
              </span>
            </div>
            <pre className="text-[11px] font-mono text-[var(--color-muted)] overflow-x-auto leading-relaxed">
              <code>{sampleResponse}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <CtaBanner
          title="Evaluate the API for your team"
          description="Request access or schedule a technical walkthrough with our engineering leads."
          buttonLabel="Request access"
        />
      </div>
    </PageShell>
  );
}
