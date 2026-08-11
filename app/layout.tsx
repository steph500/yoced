import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://yoced.com"),
  title: {
    default: "YOCED | Youth Corporate and Economic Development",
    template: "%s | YOCED"
  },
  description: "YOCED is a youth development ecosystem turning ideas into sustainable ventures, skills into livelihoods and partnerships into measurable community impact.",
  openGraph: {
    title: "YOCED | Build ideas into impact",
    description: "Explore YOCED programs, ventures, partnerships and youth development pathways.",
    url: "https://yoced.com",
    siteName: "YOCED",
    locale: "en_KE",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
