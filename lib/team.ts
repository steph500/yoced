/**
 * YOCED leadership.
 *
 * Roles are confirmed — Dovies Ebbiey's title is corroborated by his accredited
 * delegate pass for the National Productivity and Performance Conference 2026.
 * `focus` states the remit of the role. No stock or generated portraits are used.
 */
export type Leader = {
  name: string;
  role: string;
  initials: string;
  focus: string;
  fields: string[];
  portrait?: string;
  external?: { href: string; label: string };
};

export const team: Leader[] = [
  {
    name: "Dovies Ebbiey",
    role: "Founder & President",
    initials: "DE",
    portrait: "/assets/voices/dovies.webp",
    focus:
      "Sets YOCED's direction and carries relationships with communities, partner organisations and the groups YOCED works through. Leads on programs, partnerships, field work and YOCED's creative and cultural direction.",
    fields: ["agriculture-food-security", "women-community-empowerment", "job-creation"],
  },
  {
    name: "Stefan Juma",
    role: "Co-founder & Technology & Applied AI Lead",
    initials: "SJ",
    focus:
      "A Full-Stack & Applied AI Software Engineer, Stefan leads YOCED's product engineering, AI systems, technical strategy and implementation — from prototypes and digital platforms to the operational tooling behind ventures and field programs.",
    fields: ["technology", "business-development"],
    external: { href: "https://www.selfawaretech.com/", label: "Technical work through SelfAwareTech" },
  },
];
