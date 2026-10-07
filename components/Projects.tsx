"use client";

import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

function isPlaceholder(value?: string) {
  return !value || value.includes("[") || value === "#";
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.16em] text-accent uppercase">
            Featured work
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Three projects, told as case studies
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Problem, solution, stack, role, and result — with placeholders only where real metrics
            or links still need your input.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.04}>
              <article
                id={project.slug}
                className="group overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/50"
              >
                <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="border-b border-line p-7 md:p-9 lg:border-r lg:border-b-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {project.highlight && (
                        <span className="rounded-lg bg-accent/15 px-2.5 py-1 text-xs font-semibold tracking-wide text-accent uppercase">
                          {project.highlight}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">{project.tagline}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-ink"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {!isPlaceholder(project.github) ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                        >
                          <Github size={16} aria-hidden />
                          GitHub
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-line px-4 py-2.5 text-sm text-muted">
                          <Github size={16} aria-hidden />
                          GitHub link pending
                        </span>
                      )}

                      {project.live !== undefined &&
                        (!isPlaceholder(project.live) ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-fg transition hover:opacity-90"
                          >
                            <ExternalLink size={16} aria-hidden />
                            Live demo
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-line px-4 py-2.5 text-sm text-muted">
                            <ExternalLink size={16} aria-hidden />
                            Live demo pending
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="grid gap-0 sm:grid-cols-2">
                    {[
                      { label: "Problem", body: project.problem },
                      { label: "Solution", body: project.solution },
                      { label: "My role", body: project.role },
                      { label: "Result", body: project.result },
                    ].map((block) => (
                      <div
                        key={block.label}
                        className="border-b border-line p-6 last:border-b-0 sm:border-r sm:odd:border-r sm:even:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 md:p-7"
                      >
                        <h4 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                          {block.label}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-muted">{block.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
