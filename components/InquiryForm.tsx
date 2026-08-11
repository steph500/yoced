"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowUpRight, Send } from "lucide-react";
import { submitInquiry, type InquiryState } from "@/app/contact/actions";
import { topics, type TopicId } from "@/lib/inquiry";
import { site } from "@/lib/site";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn--solid" disabled={pending}>
      {pending ? "Sending…" : "Send inquiry"}
      <Send size={16} aria-hidden="true" />
    </button>
  );
}

/**
 * The inquiry form.
 *
 * Routing happens by topic so a message lands in the right conversation rather
 * than in a general inbox. Spam handling is a honeypot plus a minimum fill time,
 * both server-checked — no third-party captcha, no external dependency.
 *
 * When no mail provider is configured the action returns a fully composed
 * mailto: link and this component hands it to the visitor. The form never
 * reports a send that did not happen.
 */
export function InquiryForm({
  initialTopic,
  field,
  venture,
}: {
  initialTopic: TopicId;
  field?: string;
  venture?: string;
}) {
  const [state, formAction] = useActionState<InquiryState, FormData>(submitInquiry, {
    status: "idle",
  });
  const [topic, setTopic] = useState<TopicId>(initialTopic);
  const startedAt = useRef<number>(0);
  const resultRef = useRef<HTMLDivElement>(null);

  // Set on the client so a cached page cannot ship a stale timestamp.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (state.status !== "idle") resultRef.current?.focus();
  }, [state]);

  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  if (state.status === "sent") {
    return (
      <div className="form-result" tabIndex={-1} ref={resultRef} role="status">
        <h3>Inquiry received.</h3>
        <p>
          Thank you — your message reached YOCED and someone will reply to the address you gave.
          Reference {state.reference}.
        </p>
      </div>
    );
  }

  return (
    <>
      {state.status === "compose" ? (
        <div className="form-result" tabIndex={-1} ref={resultRef} role="status">
          <h3>One step left.</h3>
          <p>
            Your inquiry is ready and formatted. Open it in your email app to send it to{" "}
            {site.email} — that way it arrives directly from your own address and replies come
            straight back to you.
          </p>
          <a className="btn btn--solid" href={state.mailto}>
            Open “{state.subject}” <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      ) : null}

      {state.status === "error" ? (
        <div className="form-result" data-state="error" tabIndex={-1} ref={resultRef} role="alert">
          <h3>Not sent yet.</h3>
          <p>{state.message}</p>
        </div>
      ) : null}

      <form
        action={(formData) => {
          // Read in the action rather than during render: refs are not render-safe.
          formData.set("startedAt", String(startedAt.current));
          return formAction(formData);
        }}
        noValidate
      >
        {field ? <input type="hidden" name="field" value={field} /> : null}
        {venture ? <input type="hidden" name="venture" value={venture} /> : null}

        {/* Honeypot: hidden from people, irresistible to bots. */}
        <div aria-hidden="true" className="visually-hidden">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <fieldset style={{ border: 0, padding: 0, margin: "0 0 8px" }}>
          <legend className="label" style={{ marginBottom: 12 }}>
            What is this about?
          </legend>
          <div className="topics">
            {topics.map((item) => (
              <label className="topic" key={item.id}>
                <input
                  type="radio"
                  name="topic"
                  value={item.id}
                  checked={topic === item.id}
                  onChange={() => setTopic(item.id)}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
          <p className="field__hint" style={{ marginTop: -12, marginBottom: 24 }}>
            {topics.find((item) => item.id === topic)?.hint}
          </p>
        </fieldset>

        <div className="cols-2">
          <label className="field" data-invalid={Boolean(errors.name)}>
            <span>Your name</span>
            <input
              name="name"
              autoComplete="name"
              required
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {errors.name ? (
              <span className="field__error" id="err-name">
                {errors.name}
              </span>
            ) : null}
          </label>

          <label className="field" data-invalid={Boolean(errors.email)}>
            <span>Email</span>
            <input
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            {errors.email ? (
              <span className="field__error" id="err-email">
                {errors.email}
              </span>
            ) : null}
          </label>
        </div>

        <label className="field">
          <span>Organisation or group (optional)</span>
          <input name="organisation" autoComplete="organization" />
        </label>

        <label className="field" data-invalid={Boolean(errors.message)}>
          <span>What are you working on?</span>
          <textarea
            name="message"
            required
            minLength={20}
            aria-describedby={errors.message ? "err-message" : "hint-message"}
            placeholder="The field, community, opportunity or partnership you have in mind — and what you need from YOCED."
          />
          {errors.message ? (
            <span className="field__error" id="err-message">
              {errors.message}
            </span>
          ) : (
            <span className="field__hint" id="hint-message">
              Specific beats polished. A few concrete sentences is plenty.
            </span>
          )}
        </label>

        <div className="btn-row" style={{ marginTop: 8 }}>
          <SubmitButton />
          <a href={`mailto:${site.email}`} className="btn">
            Or email directly <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </form>
    </>
  );
}
