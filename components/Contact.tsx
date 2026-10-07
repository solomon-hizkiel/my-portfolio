"use client";

import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { SITE, SOCIAL } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (key) {
      try {
        emailjs.init(key);
      } catch {
        // ignore init errors; send can still pass the key
      }
    }
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    const payload = {
      from_name: form.name,
      from_email: form.email,
      reply_to: form.email,
      subject: form.subject || `Portfolio message from ${form.name}`,
      message: form.message,
    };

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, payload, publicKey);
        setStatus("Message sent — thank you. I will reply soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Send failed (${res.status})`);
        setStatus("Message sent — thank you. I will reply soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
          payload.subject,
        )}&body=${encodeURIComponent(
          `From: ${form.name} <${form.email}>\n\n${form.message}`,
        )}`;
        window.location.href = mailto;
        setStatus("Opening your email app as a fallback (configure EmailJS for in-page send).");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not send. Try again later.";
      setStatus(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">Contact</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Let's build something thoughtful
          </h2>
          <p className="mt-4 text-muted">
            Internships, collaborations, or product ideas — send a note. I read every message.
          </p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">Email</dt>
              <dd>
                <a
                  href={`mailto:${SITE.email}`}
                  className="focus-ring mt-1 inline-block text-lg font-medium text-ink underline-offset-4 hover:text-accent hover:underline"
                >
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">Phone</dt>
              <dd className="mt-1 text-lg font-medium text-ink">{SITE.phone}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">Social</dt>
              <dd className="mt-2 flex flex-wrap gap-4">
                {SOCIAL.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-sm font-medium text-muted underline-offset-4 hover:text-accent hover:underline"
                  >
                    {s.name}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-line bg-surface p-6 md:p-8"
            noValidate={false}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block font-medium text-ink">Name</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="focus-ring w-full rounded-xl border border-line bg-canvas px-4 py-3 text-ink outline-none placeholder:text-muted"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block font-medium text-ink">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="focus-ring w-full rounded-xl border border-line bg-canvas px-4 py-3 text-ink outline-none placeholder:text-muted"
                  placeholder="you@email.com"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm">
              <span className="mb-2 block font-medium text-ink">Subject</span>
              <input
                name="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="focus-ring w-full rounded-xl border border-line bg-canvas px-4 py-3 text-ink outline-none placeholder:text-muted"
                placeholder="What’s this about?"
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className="mb-2 block font-medium text-ink">Message</span>
              <textarea
                required
                name="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="focus-ring w-full resize-y rounded-xl border border-line bg-canvas px-4 py-3 text-ink outline-none placeholder:text-muted"
                placeholder="Tell me about the role, idea, or question."
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="focus-ring mt-6 inline-flex rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-fg transition hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send message"}
            </button>
            {status && (
              <p className="mt-4 text-sm text-muted" role="status" aria-live="polite">
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
