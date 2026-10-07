"use client";

import { ArrowDown, Download, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE, SOCIAL } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const nav = document.getElementById("site-nav");
    const offset = (nav?.offsetHeight ?? 72) + 8;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 text-sm font-medium tracking-[0.18em] text-accent uppercase"
          >
            {SITE.location}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-[clamp(2.6rem,6.4vw,5rem)] leading-[1.02] font-bold tracking-tight text-ink text-balance"
          >
            Solomon Hizkiel{" "}
            <span className="whitespace-nowrap">Kinfu</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-5 max-w-xl text-lg text-muted md:text-xl"
          >
            <span className="font-medium text-ink">{SITE.title}</span>
            <span className="mx-2 text-line">·</span>
            {SITE.valueStatement}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="focus-ring inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-accent-fg transition hover:opacity-90"
            >
              View Projects
              <ArrowDown size={16} />
            </button>
            <a
              href={SITE.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Download CV
              <Download size={16} />
            </a>
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              Contact
              <Mail size={16} />
            </button>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted"
          >
            {SOCIAL.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-md underline-offset-4 transition hover:text-accent hover:underline"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface p-7 md:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden />
          <p className="text-sm tracking-[0.16em] text-muted uppercase">Profile</p>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">Status</dt>
              <dd className="mt-1 font-display text-xl font-semibold text-ink">
                {SITE.year} · Graduating {SITE.graduation.replace("Expected ", "")}
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">Focus</dt>
              <dd className="mt-1 text-ink">
                ML · Cybersecurity · Full-stack · Entrepreneurship
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-muted uppercase">School</dt>
              <dd className="mt-1 text-ink">{SITE.university}</dd>
            </div>
          </dl>
          <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
            Open to internships, research collabs, and product roles where security-minded
            engineering meets real users.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
