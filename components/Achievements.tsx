"use client";

import { Award, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="flex flex-col gap-2 border-b border-line px-6 py-5 md:flex-row md:items-end md:justify-between md:px-8">
              <div>
                <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
                  Highlights
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                  Achievements
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted">
                Competitive recognition in AI building and international financial security.
              </p>
            </div>

            <ul className="grid divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">
              {ACHIEVEMENTS.map((item, i) => (
                <li key={item.title} className="flex gap-4 px-6 py-7 md:px-8">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-canvas text-accent">
                    {i === 0 ? <Trophy size={20} aria-hidden /> : <Award size={20} aria-hidden />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                      {item.place}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
