import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProseLayout, ProseSection } from "@/components/ui/ProseLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: June 2026"
        align="left"
      />

      <ProseLayout>
        <ProseSection title="1. No Personal Data">
          <p>
            This website does not collect, store, or process personally
            identifiable information (PII). There are no contact forms, account
            systems, cookies, analytics, tracking pixels, or third-party data
            collection on this site.
          </p>
        </ProseSection>

        <ProseSection title="2. Regulatory Alignment">
          <p>
            Because we do not process personal data through this website, our
            operations are designed to align with privacy frameworks including
            GDPR, HIPAA, and CCPA. No data subject requests are required for
            site visitors — there is nothing to access, correct, or delete.
          </p>
        </ProseSection>

        <ProseSection title="3. Email Contact">
          <p>
            If you contact us via your own email client, that communication
            occurs outside this website and is governed by your email provider.
            We do not operate web-based data collection for inquiries.
          </p>
        </ProseSection>

        <ProseSection title="4. Questions">
          <p>
            Privacy questions:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--color-board-accent)] hover:brightness-110"
            >
              {siteConfig.email}
            </a>
          </p>
        </ProseSection>
      </ProseLayout>
    </PageShell>
  );
}
