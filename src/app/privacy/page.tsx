import type { Metadata } from "next";
import { Lock, Mail, Server } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProseLayout, ProseSection } from "@/components/ui/ProseLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `B2B Privacy Policy for ${siteConfig.name} — enterprise technology consulting and software development.`,
};

export default function PrivacyPage() {
  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow="Legal"
        title="B2B Privacy Policy"
        description="Last updated: June 2026"
        align="left"
      />

      <ProseLayout>
        <ProseSection title="1. Information We Collect">
          <p>
            As a technology consulting and software provider, our collection of
            data is strictly limited to information necessary to manage business
            engagements and operate our infrastructure.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-md border border-[var(--color-board-border)] bg-[var(--color-board-bg)]/60 p-4">
              <strong className="text-[var(--color-board-text)] block mb-2 flex items-center gap-2 text-sm">
                <Lock className="w-4 h-4 text-[var(--color-board-accent)]" strokeWidth={1.5} />
                Client Data
              </strong>
              <p className="text-[var(--color-board-muted)] text-sm">
                Corporate email addresses, business names, and billing details
                required for consulting contracts and invoicing.
              </p>
            </div>
            <div className="rounded-md border border-[var(--color-board-border)] bg-[var(--color-board-bg)]/60 p-4">
              <strong className="text-[var(--color-board-text)] block mb-2 flex items-center gap-2 text-sm">
                <Server className="w-4 h-4 text-[var(--color-board-accent)]" strokeWidth={1.5} />
                Infrastructure Data
              </strong>
              <p className="text-[var(--color-board-muted)] text-sm">
                When utilizing our validation APIs, we process payloads
                programmatically to extract metadata (DKIM, domains, hashes)
                without storing plaintext business contents.
              </p>
            </div>
          </div>
        </ProseSection>

        <ProseSection title="2. No Sale of Data">
          <p>
            We strictly provide engineering services and enterprise software. We
            do not sell, rent, or lease Client data, metadata, or processed
            information to any third parties, data brokers, or advertising
            networks under any circumstances.
          </p>
        </ProseSection>

        <ProseSection title="3. Contact">
          <div className="text-center py-2">
            <Mail
              className="w-6 h-6 text-[var(--color-board-muted)] mx-auto mb-3"
              strokeWidth={1.5}
            />
            <p className="text-[var(--color-board-muted)] mb-3 text-sm">
              For inquiries regarding privacy or data handling during consulting
              engagements, please contact us.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--color-board-accent)] hover:brightness-110 font-medium text-sm transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </ProseSection>
      </ProseLayout>
    </PageShell>
  );
}
