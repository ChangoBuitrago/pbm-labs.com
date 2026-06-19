"use client";

import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProseLayout, ProseSection } from "@/components/ui/ProseLayout";
import { useSite } from "@/components/providers/SiteProvider";
import { siteConfig } from "@/lib/site-config";

export function TermsView() {
  const { t } = useSite();
  const sections = Object.values(t.terms.sections);

  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow={t.common.legal}
        title={t.terms.title}
        description={t.common.lastUpdated}
        align="left"
      />

      <ProseLayout>
        {sections.map((section) => (
          <ProseSection key={section.title} title={section.title}>
            <p>{section.body}</p>
          </ProseSection>
        ))}
      </ProseLayout>
    </PageShell>
  );
}

export function PrivacyView() {
  const { t } = useSite();
  const { website, contact, regulatory, questions } = t.privacy.sections;

  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow={t.common.legal}
        title={t.privacy.title}
        description={t.common.lastUpdated}
        align="left"
      />

      <ProseLayout>
        <ProseSection title={website.title}>
          <p>{website.body}</p>
        </ProseSection>
        <ProseSection title={contact.title}>
          <p>{contact.body}</p>
        </ProseSection>
        <ProseSection title={regulatory.title}>
          <p>{regulatory.body}</p>
        </ProseSection>
        <ProseSection title={questions.title}>
          <p>
            {questions.body}{" "}
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

export function CookiesView() {
  const { t } = useSite();
  const sections = Object.values(t.cookies.sections);

  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow={t.common.legal}
        title={t.cookies.title}
        description={t.common.lastUpdated}
        align="left"
      />

      <ProseLayout>
        {sections.map((section) => (
          <ProseSection key={section.title} title={section.title}>
            <p>{section.body}</p>
          </ProseSection>
        ))}
      </ProseLayout>
    </PageShell>
  );
}
