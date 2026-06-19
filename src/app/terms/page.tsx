import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProseLayout, ProseSection } from "@/components/ui/ProseLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: June 2026"
        align="left"
      />

      <ProseLayout>
        <ProseSection title="1. B2B Services">
          <p>
            {siteConfig.legalName} (&quot;{siteConfig.name}&quot;) provides
            technology consulting and custom software development exclusively to
            business entities. By using this website, you confirm you are
            acting in a professional or commercial capacity.
          </p>
        </ProseSection>

        <ProseSection title="2. No Financial Services">
          <p>
            We are not a bank, broker, money services business, or financial
            institution. We do not process, hold, custody, or transfer currency,
            securities, or financial assets.
          </p>
        </ProseSection>

        <ProseSection title="3. Information Only">
          <p>
            Any technical outputs from our consulting or software work are
            informational. They do not constitute financial, legal, tax, or
            business advice.
          </p>
        </ProseSection>

        <ProseSection title="4. Liability">
          <p>
            To the maximum extent permitted by law, {siteConfig.name} is not
            liable for indirect, incidental, special, consequential, or punitive
            damages arising from use of this website or our services.
          </p>
        </ProseSection>

        <ProseSection title="5. Governing Law">
          <p>
            These terms are governed by the laws of the State of Wyoming, United
            States, without regard to conflict-of-law principles.
          </p>
        </ProseSection>
      </ProseLayout>
    </PageShell>
  );
}
