/**
 * Organisations shown on the YOCED partners page.
 *
 * These are the organisations carried over from YOCED's previous website plus
 * SelfAwareTech as technology partner. Nothing here states that an organisation
 * currently provides funding, or describes the scope or value of any engagement —
 * none of that has been verified.
 *
 * `field` is the organisation's own sector, which is what a visitor needs in
 * order to understand the shape of YOCED's network.
 *
 * Two further logos appeared on the previous site but could not be identified
 * with confidence from the surviving material. They are deliberately omitted
 * rather than guessed at.
 *
 * `logo` is intentionally absent for every entry: no partner logo files were
 * available, and a redrawn approximation of another organisation's mark would be
 * worse than an honest typographic treatment. Add a path here when real assets
 * are supplied and the wordmark component will use them.
 */

export type Partner = {
  name: string;
  field: string;
  /** Set when the relationship itself is confirmed and specific. */
  role?: string;
  href?: string;
  logo?: string;
};

export const partners: Partner[] = [
  { name: "MKJ Law LLP", field: "Legal" },
  { name: "Kenbright", field: "Actuarial & financial services" },
  { name: "254 Brewing Co", field: "Beverage & hospitality" },
  { name: "Twenty Fifth Hive", field: "Enterprise & innovation" },
  { name: "Njoki Karuoya Creative & Media Centre", field: "Creative & media" },
  { name: "PesaSwap", field: "Financial technology" },
  {
    name: "SelfAwareTech",
    field: "Technology",
    role: "Technology Partner",
    href: "https://www.selfawaretech.com",
  },
];
