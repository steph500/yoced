import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site, technologyPartner } from "@/lib/site";
import { RevealProvider } from "@/components/Reveal";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import { programs } from "@/lib/programs";
import "./globals.css";
import "./modern/01.css";
import "./modern/02.css";
import "./modern/03.css";
import "./modern/04.css";
import "./modern/05.css";
import "./modern/06-system.css";
import "./modern/07-mockup-match.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-yoced",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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
  themeColor: "#0f171c",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" className={inter.variable}>
      <body>
        <OrganizationSchema knowsAbout={programs.map((program) => program.title)} />
        <WebSiteSchema />
        <RevealProvider />
        {children}
      </body>
    </html>
  );
}
