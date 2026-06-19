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
        description="Consulting inquiries and product access requests."
        align="left"
      />

      <div className="grid lg:grid-cols-[240px_1fr] gap-6 lg:gap-10 items-start">
        <aside className="corp-panel p-5 space-y-5 lg:sticky lg:top-20">
          <div>
            <SectionLabel>Headquarters</SectionLabel>
            <div className="flex items-start gap-2.5 mt-1">
              <Building2
                className="w-3.5 h-3.5 text-[var(--color-muted)] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
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

          <div className="border-t border-[var(--color-border)] pt-5">
            <SectionLabel>Email</SectionLabel>
            <div className="flex items-center gap-2.5 mt-1">
              <Mail
                className="w-3.5 h-3.5 text-[var(--color-muted)] shrink-0"
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

        <div id="form" className="corp-panel p-6 md:p-7 scroll-mt-20 min-w-0">
          {status === "success" ? (
            <div className="text-center py-10 md:py-12">
              <CheckCircle2
                className="w-9 h-9 text-emerald-400 mx-auto mb-3"
                strokeWidth={1.5}
              />
              <p className="text-white font-semibold mb-1">Message sent</p>
              <p className="text-[var(--color-muted)] text-sm mb-5 max-w-xs mx-auto">
                We&apos;ll respond at the email you provided.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                    className="text-[11px] font-medium text-[var(--color-muted)] uppercase tracking-wide"
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
                    className="text-[11px] font-medium text-[var(--color-muted)] uppercase tracking-wide"
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
                  className="text-[11px] font-medium text-[var(--color-muted)] uppercase tracking-wide"
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
                  className="text-[11px] font-medium text-[var(--color-muted)] uppercase tracking-wide"
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
                  className="text-[11px] font-medium text-[var(--color-muted)] uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  disabled={status === "loading"}
                  className="corp-input resize-none"
                  placeholder="How can we help?"
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
