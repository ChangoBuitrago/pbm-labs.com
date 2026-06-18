import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  inquiryType: string;
  message: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const { firstName, lastName, email, inquiryType, message } =
    body as Record<string, unknown>;

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof inquiryType !== "string" ||
    typeof message !== "string"
  ) {
    return null;
  }

  const trimmed = {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim(),
    inquiryType: inquiryType.trim(),
    message: message.trim(),
  };

  if (
    !trimmed.firstName ||
    !trimmed.lastName ||
    !trimmed.email ||
    !trimmed.inquiryType ||
    !trimmed.message ||
    !isValidEmail(trimmed.email)
  ) {
    return null;
  }

  return trimmed;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json(
      { error: "Please fill in all required fields with valid values." },
      { status: 400 },
    );
  }

  const from =
    process.env.RESEND_FROM_EMAIL ??
    `hello@${siteConfig.domain}`;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  const subject = `[${siteConfig.shortName} Contact] ${payload.inquiryType} — ${payload.firstName} ${payload.lastName}`;

  const text = [
    `New contact form submission from ${siteConfig.domain}`,
    "",
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Email: ${payload.email}`,
    `Inquiry type: ${payload.inquiryType}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
    <p><strong>Inquiry type:</strong> ${payload.inquiryType}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, "<br>")}</p>
  `;

  const { error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);

    const message =
      error.statusCode === 403
        ? "Email delivery is not fully configured yet. Please email us directly."
        : "Failed to send message. Please try again or email us directly.";

    return NextResponse.json({ error: message }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
