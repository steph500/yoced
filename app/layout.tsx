import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces, JetBrains_Mono } from "next/font/google";
import { site, technologyPartner } from "@/lib/site";
import { RevealProvider } from "@/components/Reveal";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import { programs } from "@/lib/programs";
import "./globals.css";

/** Workhorse grotesk: interface, body copy, tight display lines. */
const sans = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/** Editorial display serif. The `SOFT`/`WONK` axes give the headings character. */
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

/** Atlas codes, labels and captions. */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.legalName}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "youth development Kenya",
    "youth employment",
    "agribusiness Kenya",
    "enterprise development",
    "business process management",
    "climate resilience",
    "women empowerment Kenya",
    "Nairobi",
    "Africa innovation partnerships",
    "creative technology Africa",
    "African market pilots",
    "AI product development Kenya",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_KE",
    url: site.url,
    title: `${site.name} — ${site.legalName}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.legalName}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "nonprofit",
  other: { "technology-partner": technologyPartner.name },
};

export const viewport: Viewport = {
  themeColor: "#f6f2e9",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <OrganizationSchema knowsAbout={programs.map((program) => program.title)} />
        <WebSiteSchema />
        <RevealProvider />
        {children}
      </body>
    </html>
  );
}
