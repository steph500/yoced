/** Single source of truth for YOCED identity, contact details and navigation. */
export const site = {
  name: "YOCED",
  legalName: "Youth Corporate and Economic Development",
  /** Lockup form — the ampersand keeps the sidebar subtitle to two lines. */
  shortLegalName: "Youth Corporate & Economic Development",
  url: "https://yoced.com",
  tagline: "Build ideas into impact.",
  description:
    "YOCED is a Kenyan youth development ecosystem that helps young people, creatives and communities turn capability into sustainable ventures, livelihoods, skills and long-term economic participation across twelve active fields.",
  email: "yoced.ke@gmail.com",
  phone: "+254 726 647052",
  phoneHref: "tel:+254726647052",
  locality: "Nairobi",
  country: "Kenya",
  location: "Nairobi, Kenya",
} as const;

export const technologyPartner = {
  name: "SelfAwareTech",
  role: "Technology Partner",
  url: "https://www.selfawaretech.com",
  note: "SelfAwareTech is an independent technology company and YOCED technology partner. It is not part of YOCED, and YOCED is not a SelfAwareTech product.",
} as const;

/** Previous YOCED pages showed Facebook, Instagram, X and LinkedIn, but current URLs remain unverified. */
export type SocialLink = { label: string; href: string };
export const socialLinks: SocialLink[] = [];

export const primaryNav = [
  { label: "Programs", href: "/programs" },
  { label: "Field work", href: "/work" },
  { label: "Ventures", href: "/ventures" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
] as const;
