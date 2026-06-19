import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for enterprise technology consulting.`,
};

export default function ContactPage() {
  return (
    <PageShell width="default">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Email our team directly. This website does not collect or store personal information."
        align="left"
      />

      <div className="corp-panel p-8 max-w-md">
        <Mail
          className="w-5 h-5 text-[var(--color-board-accent)] mb-4"
          strokeWidth={1.5}
        />
        <p className="text-sm text-[var(--color-board-muted)] mb-6 leading-relaxed">
          For consulting inquiries, project scoping, or general questions, reach
          us at:
        </p>
        <Button href={`mailto:${siteConfig.email}`} variant="primary" size="md">
          {siteConfig.email}
        </Button>
      </div>
    </PageShell>
  );
}
