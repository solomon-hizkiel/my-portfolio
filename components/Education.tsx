"use client";

import { SITE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Education
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Academic foundation
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="mt-10 rounded-3xl border border-line bg-surface p-7 md:flex md:items-end md:justify-between md:p-10">
            <div>
              <p className="font-mono text-sm text-accent">{SITE.graduation}</p>
              <h3 className="font-display mt-3 text-2xl font-bold text-ink md:text-3xl">
                {SITE.degree}
              </h3>
              <p className="mt-2 text-lg text-muted">{SITE.university}</p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                Coursework and personal projects spanning computing systems, software engineering,
                and security-minded product building. Currently in year five.
              </p>
            </div>
            <div className="mt-8 border-t border-line pt-6 md:mt-0 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <p className="text-xs tracking-wide text-muted uppercase">Location</p>
              <p className="mt-2 font-medium text-ink">{SITE.location}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
