"use client";

import { useEffect, useState } from "react";
import { Building2, CheckCircle2, Mail } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { ButtonSubmit } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionLabel } from "@/components/ui/Card";
import { siteConfig } from "@/lib/site-config";

const inquiryOptions = [
  "Technology Consulting Services",
  "PBM Validation API Access",
  "Custom Software Development",
  "Other",
] as const;

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  inquiryType: inquiryOptions[0] as string,
  message: "",
  _hp: "",
};

export default function ContactPage() {
  const { line1, line2, city, state, zip, country } = siteConfig.address;
  const { email } = siteConfig;

  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const scrollToForm = () => {
      if (window.location.hash === "#form") {
        document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToForm();
    window.addEventListener("hashchange", scrollToForm);
    return () => window.removeEventListener("hashchange", scrollToForm);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email us directly.");
    }
  }

  function updateField<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  return (
    <PageShell width="default">
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Reach our consulting team or request access to enterprise software."
      />

      <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
        <aside className="corp-panel p-6 space-y-6 lg:sticky lg:top-24">
          <div>
            <SectionLabel>Headquarters</SectionLabel>
            <div className="flex items-start gap-3 mt-2">
              <Building2
                className="w-4 h-4 text-slate-600 mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <p className="text-slate-500 text-sm leading-relaxed">
                {line1}
                <br />
                {line2}
                <br />
                {city}, {state} {zip}
                <br />
                {country}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800/60 pt-6">
            <SectionLabel>Email</SectionLabel>
            <div className="flex items-center gap-3 mt-2">
              <Mail
                className="w-4 h-4 text-slate-600 shrink-0"
                strokeWidth={1.5}
              />
              <a
                href={`mailto:${email}`}
                className="text-slate-300 hover:text-white transition-colors text-sm break-all"
              >
                {email}
              </a>
            </div>
          </div>
        </aside>

        <div id="form" className="corp-panel p-6 md:p-8 scroll-mt-24 min-w-0">
          {status === "success" ? (
            <div className="text-center py-12 md:py-16">
              <CheckCircle2
                className="w-10 h-10 text-emerald-500 mx-auto mb-4"
                strokeWidth={1.5}
              />
              <p className="text-white font-semibold text-lg mb-2">
                Message sent
              </p>
              <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto">
                Thank you for reaching out. We&apos;ll respond at the email you
                provided.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="_hp"
                value={form._hp}
                onChange={(e) => updateField("_hp", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-medium text-slate-400 uppercase tracking-wide"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    disabled={status === "loading"}
                    className="corp-input"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-medium text-slate-400 uppercase tracking-wide"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    disabled={status === "loading"}
                    className="corp-input"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-400 uppercase tracking-wide"
                >
                  Corporate Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  disabled={status === "loading"}
                  className="corp-input"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="inquiryType"
                  className="text-xs font-medium text-slate-400 uppercase tracking-wide"
                >
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={form.inquiryType}
                  onChange={(e) => updateField("inquiryType", e.target.value)}
                  disabled={status === "loading"}
                  className="corp-input"
                >
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-400 uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  disabled={status === "loading"}
                  className="corp-input resize-none"
                  placeholder="How can we help your engineering or finance team?"
                />
              </div>

              {status === "error" && errorMessage && (
                <p className="text-sm text-red-400/90" role="alert">
                  {errorMessage}
                </p>
              )}

              <ButtonSubmit
                type="submit"
                disabled={status === "loading"}
                size="md"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </ButtonSubmit>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
}
