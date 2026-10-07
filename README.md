# Solomon Hizkiel Kinfu — Portfolio

Modern recruiter-ready portfolio built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **next-themes**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

Copy `.env.example` to `.env.local` and set either EmailJS or a Formspree endpoint:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
# or
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/xxxxx
```

Without env vars, the form falls back to `mailto:`.

## Content

Edit `lib/data.ts` for achievements, projects, skills, and social links. Replace `[PLACEHOLDER]` values with your real links and metrics.

## Deploy (free)

### Vercel (recommended)

1. Push this folder to GitHub.
2. Go to [vercel.com](https://vercel.com) → Import project → select the repo.
3. Framework preset: **Next.js**. Add env vars if you use EmailJS.
4. Deploy. Update `metadataBase` in `app/layout.tsx` to your real domain.

### Netlify

1. Import the GitHub repo at [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next` (or use the official Next.js runtime).
4. Add the same env vars as above.
