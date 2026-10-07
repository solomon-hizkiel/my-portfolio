import { SITE, SOCIAL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-xl font-bold text-ink">
            {SITE.shortName}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            {SITE.valueStatement}
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm">
          {SOCIAL.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring text-muted underline-offset-4 hover:text-accent hover:underline"
            >
              {s.name}
            </a>
          ))}
        </div>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {SITE.name}. {SITE.location}.
        </p>
      </div>
    </footer>
  );
}
