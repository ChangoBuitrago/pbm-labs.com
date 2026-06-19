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
        <ProseSection title="1. Website Data">
          <p>
            This website does not use cookies, analytics, tracking pixels, or
            third-party advertising. We do not maintain user accounts or
            marketing databases.
          </p>
        </ProseSection>

        <ProseSection title="2. Contact Form">
          <p>
            If you submit our contact form, the information you provide is
            transmitted by email to our team via Resend and is not stored in a
            website database. We use it only to respond to your inquiry.
          </p>
        </ProseSection>

        <ProseSection title="3. Regulatory Alignment">
          <p>
            We do not sell personal data. Our practices are designed to align
            with GDPR, HIPAA, and CCPA principles for B2B communications.
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
