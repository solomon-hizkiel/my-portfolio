"use client";

import { SKILL_GROUPS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">Skills</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Capabilities grouped the way I work
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Machine learning curiosity, security-minded tooling, modern web stacks, and practical
            shipping tools.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <article className="h-full rounded-3xl border border-line bg-surface p-6 md:p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{group.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-line bg-canvas px-3 py-1.5 text-sm text-ink"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
