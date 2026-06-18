import type { Metadata } from "next";
import { Lock, Mail, Server } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `B2B Privacy Policy for ${siteConfig.name} — enterprise technology consulting and software development.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 text-slate-300 animate-in">
      <PageHeader
        eyebrow="Legal"
        title="B2B Privacy Policy"
        description="Last updated: June 2026"
        align="left"
      />

      <div className="space-y-10 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            1. Information We Collect
          </h2>
          <p className="leading-relaxed mb-4 text-slate-400">
            As a technology consulting and software provider, our collection of
            data is strictly limited to information necessary to manage business
            engagements and operate our infrastructure.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="corp-panel p-5">
              <strong className="text-slate-200 block mb-2 flex items-center gap-2 text-sm">
                <Lock className="w-4 h-4 text-blue-500" strokeWidth={1.5} />{" "}
                Client Data
              </strong>
              <p className="text-slate-500 text-sm">
                Corporate email addresses, business names, and billing details
                required for consulting contracts and invoicing.
              </p>
            </div>
            <div className="corp-panel p-5">
              <strong className="text-slate-200 block mb-2 flex items-center gap-2 text-sm">
                <Server className="w-4 h-4 text-blue-500" strokeWidth={1.5} />{" "}
                Infrastructure Data
              </strong>
              <p className="text-slate-500 text-sm">
                When utilizing our validation APIs, we process payloads
                programmatically to extract metadata (DKIM, domains, hashes)
                without storing plaintext business contents.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            2. No Sale of Data
          </h2>
          <p className="leading-relaxed text-slate-400">
            We strictly provide engineering services and enterprise software. We
            do not sell, rent, or lease Client data, metadata, or processed
            information to any third parties, data brokers, or advertising
            networks under any circumstances.
          </p>
        </section>

        <section>
          <div className="corp-panel p-8 text-center">
            <Mail
              className="w-7 h-7 text-slate-500 mx-auto mb-3"
              strokeWidth={1.5}
            />
            <h2 className="text-base font-semibold text-white mb-2">
              Contact Compliance
            </h2>
            <p className="text-slate-500 mb-4 text-sm">
              For inquiries regarding privacy or data handling during consulting
              engagements, please contact us.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
