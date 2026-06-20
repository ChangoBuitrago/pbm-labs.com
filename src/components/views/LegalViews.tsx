"use client";

import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProseLayout, ProseSection } from "@/components/ui/ProseLayout";
import { useSite } from "@/components/providers/SiteProvider";
import { siteConfig } from "@/lib/site-config";

const TERMS_ORDER = [
  "acceptance",
  "b2b",
  "financial",
  "information",
  "use",
  "ip",
  "thirdParty",
  "disclaimer",
  "liability",
  "changes",
  "law",
  "contact",
] as const;

const PRIVACY_ORDER = [
  "collect",
  "purposes",
  "website",
  "contact",
  "processors",
  "retention",
  "security",
  "rights",
  "questions",
] as const;

const COOKIES_ORDER = [
  "overview",
  "essential",
  "optional",
  "manage",
] as const;

function CompanyBlock() {
  return (
  <>
    <p>
      {siteConfig.address.line2}
      <br />
      {siteConfig.address.city}, {siteConfig.address.state}{" "}
      {siteConfig.address.zip}
      <br />
      {siteConfig.address.country}
    </p>
    <p className="mt-4">
      Email:{" "}
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-[var(--color-board-accent)] hover:brightness-110"
      >
        {siteConfig.email}
      </a>
    </p>
  </>
  );
}

export function TermsView() {
  const { t } = useSite();

  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow={t.common.legal}
        title={t.terms.title}
        description={t.common.lastUpdated}
        align="left"
      />

      <ProseLayout>
        <ProseSection title={siteConfig.legalName}>
          <CompanyBlock />
        </ProseSection>

        {TERMS_ORDER.map((key) => {
          const section = t.terms.sections[key];
          return (
            <ProseSection key={key} title={section.title}>
              <p>{section.body}</p>
            </ProseSection>
          );
        })}
      </ProseLayout>
    </PageShell>
  );
}

export function PrivacyView() {
  const { t } = useSite();

  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow={t.common.legal}
        title={t.privacy.title}
        description={t.common.lastUpdated}
        align="left"
      />

      <ProseLayout>
        <ProseSection title={siteConfig.legalName}>
          <CompanyBlock />
        </ProseSection>

        {PRIVACY_ORDER.map((key) => {
          const section = t.privacy.sections[key];
          if (key === "questions") {
            return (
              <ProseSection key={key} title={section.title}>
                <p>
                  {section.body}{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[var(--color-board-accent)] hover:brightness-110"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </ProseSection>
            );
          }
          return (
            <ProseSection key={key} title={section.title}>
              <p>{section.body}</p>
            </ProseSection>
          );
        })}
      </ProseLayout>
    </PageShell>
  );
}

export function CookiesView() {
  const { t } = useSite();

  return (
    <PageShell width="narrow">
      <PageHeader
        eyebrow={t.common.legal}
        title={t.cookies.title}
        description={t.common.lastUpdated}
        align="left"
      />

      <ProseLayout>
        <ProseSection title={siteConfig.legalName}>
          <CompanyBlock />
        </ProseSection>

        {COOKIES_ORDER.map((key) => {
          const section = t.cookies.sections[key];
          return (
            <ProseSection key={key} title={section.title}>
              <p>{section.body}</p>
            </ProseSection>
          );
        })}
      </ProseLayout>
    </PageShell>
  );
}
