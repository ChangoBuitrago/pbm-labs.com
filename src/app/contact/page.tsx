"use client";

import { useEffect, useState } from "react";
import { Building2, Mail } from "lucide-react";
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
    <div className="max-w-5xl mx-auto px-6 py-20 animate-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Contact Us
        </h1>
        <p className="text-slate-400">
          Get in touch with our consulting team or request access to our
          enterprise software.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-cyan-500" /> Corporate
              Headquarters
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {line1}
              <br />
              {line2}
              <br />
              {city}, {state} {zip}
              <br />
              {country}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-500" /> Email
            </h2>
            <a
              href={`mailto:${email}`}
              className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
            >
              {email}
            </a>
          </div>
        </div>

        <div
          id="form"
          className="md:col-span-3 bg-[#0B1221] border border-slate-800 p-8 rounded-2xl scroll-mt-24"
        >
          {status === "success" ? (
            <div className="text-center py-8">
              <p className="text-white font-semibold text-lg mb-2">
                Message sent
              </p>
              <p className="text-slate-400 text-sm mb-6">
                Thanks for reaching out. We&apos;ll get back to you at the email
                you provided.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-slate-300"
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
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-60"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-slate-300"
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
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-60"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300"
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
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-60"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="inquiryType"
                  className="text-sm font-medium text-slate-300"
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
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-60"
                >
                  {inquiryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-300"
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
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-60"
                  placeholder="How can we help your engineering or finance team?"
                />
              </div>

              {status === "error" && errorMessage && (
                <p className="text-sm text-red-400" role="alert">
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-white text-slate-950 font-semibold py-3 rounded-lg hover:bg-slate-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
