"use client";

import { SITE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">About</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Engineer · builder · curious operator
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p>
              I&apos;m {SITE.name}, a {SITE.year} {SITE.degree} student at{" "}
              {SITE.university}, graduating {SITE.graduation.replace("Expected ", "")}. I care
              about shipping software that is useful, secure, and grounded in real contexts —
              especially products that serve people in Ethiopia and beyond.
            </p>
            <p>
              My interests sit at the crossroads of machine learning, cybersecurity, software
              development, and entrepreneurship. That mix shows up in work like StayEthio (local
              hospitality product) and Fin-Guardian (financial-security OSINT tooling for an
              international olympiad).
            </p>

            <div className="grid gap-6 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-surface p-5">
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                  Interests
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {SITE.interests.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-line bg-surface p-5">
                <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                  Languages
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {SITE.languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between gap-3">
                      <span>{lang.name}</span>
                      <span className="text-accent">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
