"use client";

import { Building2, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const { line1, line2, city, state, zip, country } = siteConfig.address;
  const { email } = siteConfig;

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

        <div className="md:col-span-3 bg-[#0B1221] border border-slate-800 p-8 rounded-2xl">
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
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
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors"
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
                  type="text"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors"
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
                type="email"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors"
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
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                defaultValue="Technology Consulting Services"
              >
                <option>Technology Consulting Services</option>
                <option>PBM Validation API Access</option>
                <option>Custom Software Development</option>
                <option>Other</option>
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
                rows={4}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="How can we help your engineering or finance team?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-slate-950 font-semibold py-3 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
