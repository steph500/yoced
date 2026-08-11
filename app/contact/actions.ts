"use server";

import { isTopicId, topicById, type TopicId } from "@/lib/inquiry";
import { site } from "@/lib/site";

export type InquiryState =
  | { status: "idle" }
  /** Delivered by the mail provider. */
  | { status: "sent"; reference: string }
  /**
   * No mail provider is configured, so the inquiry is handed back as a fully
   * composed mailto: link. Nothing is silently dropped and nothing is faked.
   */
  | { status: "compose"; mailto: string; subject: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

const MAX = { name: 120, email: 160, organisation: 160, message: 4000 } as const;

/** Deliberately permissive: the goal is to catch typos, not to police valid addresses. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: FormDataEntryValue | null, limit: number): string {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

/** Strip CR/LF so user input can never inject extra headers into the outgoing mail. */
function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildBody(input: {
  name: string;
  email: string;
  organisation: string;
  message: string;
  topic: TopicId;
  field: string;
  venture: string;
}): string {
  const lines = [
    `Topic: ${topicById(input.topic).label}`,
    input.field ? `Field: ${input.field}` : null,
    input.venture ? `Venture: ${input.venture}` : null,
    `Name: ${input.name}`,
    input.organisation ? `Organisation: ${input.organisation}` : null,
    `Email: ${input.email}`,
    "",
    input.message,
  ];
  return lines.filter((line) => line !== null).join("\n");
}

export async function submitInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Honeypot. Real people never see this field, so anything in it is a bot.
  if (clean(formData.get("company"), 200) !== "") {
    return { status: "error", message: "That submission could not be accepted." };
  }

  // Minimum fill time. Bots post instantly; people do not.
  const startedAt = Number(formData.get("startedAt"));
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 2500) {
    return {
      status: "error",
      message: "That was submitted a little too quickly. Please try again.",
    };
  }

  const name = clean(formData.get("name"), MAX.name);
  const email = clean(formData.get("email"), MAX.email);
  const organisation = clean(formData.get("organisation"), MAX.organisation);
  const message = clean(formData.get("message"), MAX.message);
  const topicRaw = formData.get("topic");
  const field = clean(formData.get("field"), 80);
  const venture = clean(formData.get("venture"), 80);

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Please give us a name to reply to.";
  if (!EMAIL.test(email)) fieldErrors.email = "That does not look like a working email address.";
  if (message.length < 20) fieldErrors.message = "A sentence or two of context, at minimum.";
  if (!isTopicId(topicRaw)) fieldErrors.topic = "Choose the topic that fits best.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Some details still need attention.", fieldErrors };
  }

  const topic = topicRaw as TopicId;
  const subject = headerSafe(`[${topicById(topic).subject}] ${name}${organisation ? ` — ${organisation}` : ""}`);
  const body = buildBody({ name, email, organisation, message, topic, field, venture });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM;

  // Without a configured provider the form composes the message instead of
  // pretending to send it. See README for the two environment variables.
  if (!apiKey || !from) {
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { status: "compose", mailto, subject };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [site.email],
        reply_to: headerSafe(email),
        subject,
        text: body,
      }),
    });

    if (!response.ok) throw new Error(`Mail provider responded ${response.status}`);
    const result = (await response.json()) as { id?: string };
    return { status: "sent", reference: result.id?.slice(0, 8) ?? "received" };
  } catch (error) {
    console.error("Inquiry delivery failed", error);
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { status: "compose", mailto, subject };
  }
}
