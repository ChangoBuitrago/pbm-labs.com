"use client";

import { useEffect, useState } from "react";
import { Building2, CheckCircle2, Mail } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { useSite } from "@/components/providers/SiteProvider";
import { ButtonSubmit } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionLabel } from "@/components/ui/Card";
import { siteConfig } from "@/lib/site-config";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  inquiryType: "",
  message: "",
  _hp: "",
};

export function ContactView() {
  const { t } = useSite();
  const { line1, line2, city, state, zip, country } = siteConfig.address;
  const { email } = siteConfig;

  const inquiryOptions = [
    t.contact.inquiryConsulting,
    t.contact.inquiryDevelopment,
    t.contact.inquiryOther,
  ];

  const [form, setForm] = useState({
    ...emptyForm,
    inquiryType: inquiryOptions[0],
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setForm((prev) => ({ ...prev, inquiryType: inquiryOptions[0] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t.contact.inquiryConsulting]);

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
      setForm({ ...emptyForm, inquiryType: inquiryOptions[0] });
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
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
        align="left"
      />

      <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-start">
        <aside className="corp-panel p-6 space-y-6 lg:sticky lg:top-24">
          <div>
            <SectionLabel>{t.contact.headquarters}</SectionLabel>
            <div className="flex items-start gap-3 mt-2">
              <Building2
                className="w-4 h-4 text-[var(--color-board-muted)] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <p className="text-[var(--color-board-muted)] text-sm leading-relaxed">
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

          <div className="border-t border-[var(--color-board-border)] pt-6">
            <SectionLabel>{t.contact.email}</SectionLabel>
            <div className="flex items-center gap-3 mt-2">
              <Mail
                className="w-4 h-4 text-[var(--color-board-muted)] shrink-0"
                strokeWidth={1.5}
              />
              <a
                href={`mailto:${email}`}
                className="text-[var(--color-board-silver)] hover:text-[var(--color-board-text)] transition-colors text-sm break-all"
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
              <p className="text-[var(--color-board-text)] font-semibold text-lg mb-2">
                {t.contact.messageSent}
              </p>
              <p className="text-[var(--color-board-muted)] text-sm mb-6 max-w-xs mx-auto">
                {t.contact.messageSentDescription}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-[var(--color-board-accent)] hover:brightness-110 text-sm font-medium transition-colors"
              >
                {t.contact.sendAnother}
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
                    className="text-xs font-medium text-[var(--color-board-muted)] uppercase tracking-wide"
                  >
                    {t.contact.firstName}
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
                    placeholder={t.contact.placeholderFirstName}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-medium text-[var(--color-board-muted)] uppercase tracking-wide"
                  >
                    {t.contact.lastName}
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
                    placeholder={t.contact.placeholderLastName}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-[var(--color-board-muted)] uppercase tracking-wide"
                >
                  {t.contact.corporateEmail}
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
                  placeholder={t.contact.placeholderEmail}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="inquiryType"
                  className="text-xs font-medium text-[var(--color-board-muted)] uppercase tracking-wide"
                >
                  {t.contact.inquiryType}
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
                  className="text-xs font-medium text-[var(--color-board-muted)] uppercase tracking-wide"
                >
                  {t.contact.message}
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
                  placeholder={t.contact.placeholderMessage}
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
                {status === "loading" ? t.contact.sending : t.contact.sendMessage}
              </ButtonSubmit>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
}
