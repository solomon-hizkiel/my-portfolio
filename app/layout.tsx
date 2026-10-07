import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const description = `${SITE.name} — ${SITE.title} at ${SITE.university}. ${SITE.valueStatement}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://solomonhizkiel.vercel.app"),
  title: {
    default: `${SITE.name} | Portfolio`,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [
    "Solomon Hizkiel Kinfu",
    "portfolio",
    "Addis Ababa University",
    "machine learning",
    "cybersecurity",
    "Next.js",
    "StayEthio",
    "Fin-Guardian",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${SITE.name} | Portfolio`,
    description,
    siteName: `${SITE.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Portfolio`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f0d" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-canvas font-sans text-ink antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
