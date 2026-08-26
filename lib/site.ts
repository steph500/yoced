/**
 * Single source of truth for YOCED's identity, contact details and navigation.
 * Update here, not in components.
 */

export const site = {
  name: "YOCED",
  legalName: "Youth Corporate and Economic Development",
  url: "https://yoced.com",
  tagline: "One ecosystem. Many doors.",
  description:
    "YOCED is a Kenyan ecosystem for youth-led economic development, creative work, technology and practical partnerships — turning ideas into ventures, pilots, skills and long-term economic participation.",
  email: "yoced.ke@gmail.com",
  phone: "+254 740 334262",
  phoneHref: "tel:+254740334262",
  locality: "Nairobi",
  country: "Kenya",
  location: "Nairobi, Kenya",
} as const;

export const technologyPartner = {
  name: "SelfAwareTech",
  role: "Technology Partner",
  url: "https://www.selfawaretech.com",
  note: "SelfAwareTech is an independent technology company. It builds and maintains YOCED's digital platform as a partner, not as part of the organisation.",
} as const;

/**
 * Social profiles.
 *
 * The previous YOCED site linked Facebook, Instagram, X and LinkedIn, but none of
 * those URLs could be verified from the material available. Rather than publish a
 * broken or wrong handle, this list stays empty and every social surface on the
 * site hides itself until real URLs are added here.
 */
export type SocialLink = { label: string; href: string };
export const socialLinks: SocialLink[] = [];

export const primaryNav = [
  { label: "Programs", href: "/programs" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Field work", href: "/work" },
  { label: "Ventures", href: "/ventures" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
] as const;
