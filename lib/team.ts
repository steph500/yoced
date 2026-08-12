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
};

export const team: Leader[] = [
  {
    name: "Dovies Ebbiey",
    role: "Founder & President",
    initials: "DE",
    portrait: "/assets/voices/dovies.webp",
    focus:
      "Sets YOCED's direction and carries the organisation's relationships with communities, partner organisations and the groups YOCED works through. Leads on programs, partnerships and field work.",
    fields: ["agriculture-food-systems", "women-community-empowerment", "job-creation"],
  },
  {
    name: "Stefan Juma",
    role: "Co-founder & Technology Lead",
    initials: "SJ",
    focus:
      "Leads YOCED's technology and systems work: the platform, operational tooling behind ventures and field programs, and the data layer that supports transparent reporting.",
    fields: ["technology", "business-development"],
  },
];
