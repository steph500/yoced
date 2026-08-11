import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./modern/01.css";
import "./modern/02.css";
import "./modern/03.css";
import "./modern/04.css";
import "./modern/05.css";
import "./modern/06-system.css";
import { RevealRuntime } from "@/components/Reveal";
import { OrganisationSchema, WebSiteSchema } from "@/components/StructuredData";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yoced",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "YOCED — Youth Corporate and Economic Development",
    template: "%s · YOCED",
  },
  description: site.description,
  applicationName: "YOCED",
  keywords: [
    "YOCED",
    "Youth Corporate and Economic Development",
    "youth economic development Kenya",
    "youth enterprise Kenya",
    "agriculture youth Kenya",
    "women empowerment Kenya",
    "business development Kenya",
    "Nairobi youth organisation",
    "SDG Kenya",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: site.url,
    siteName: site.name,
    title: "YOCED — Youth Corporate and Economic Development",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "YOCED — Youth Corporate and Economic Development",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "nonprofit",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d151a",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <OrganisationSchema />
        <WebSiteSchema />
        <RevealRuntime />
        {children}
      </body>
    </html>
  );
}
