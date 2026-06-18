import type { Metadata } from "next";
import { Lock, Mail, Server } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `B2B Privacy Policy for ${siteConfig.name} — enterprise technology consulting and software development.`,
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-slate-300 animate-in">
      <div className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
          B2B Privacy Policy
        </h1>
        <p className="text-slate-500 font-mono text-sm">Last Updated: June 2026</p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">
            1. Information We Collect
          </h2>
          <p className="leading-relaxed mb-4 text-slate-400">
            As a technology consulting and software provider, our collection of
            data is strictly limited to information necessary to manage business
            engagements and operate our infrastructure.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <strong className="text-slate-200 block mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4 text-cyan-500" /> Client Data
              </strong>
              <p className="text-slate-400 text-sm">
                Corporate email addresses, business names, and billing details
                required for consulting contracts and invoicing.
              </p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <strong className="text-slate-200 block mb-2 flex items-center gap-2">
                <Server className="w-4 h-4 text-cyan-500" /> Infrastructure Data
              </strong>
              <p className="text-slate-400 text-sm">
                When utilizing our validation APIs, we process payloads
                programmatically to extract metadata (DKIM, domains, hashes)
                without storing plaintext business contents.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">
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
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl text-center mt-12">
            <Mail className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-white mb-2">
              Contact Compliance
            </h2>
            <p className="text-slate-400 mb-4">
              For any inquiries regarding privacy or data handling during our
              consulting engagements, please contact us.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-cyan-400 hover:text-cyan-300 font-medium"
            >
              {siteConfig.email}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
