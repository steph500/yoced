/**
 * YOCED leadership.
 *
 * Only the two confirmed leadership positions appear here. `focus` describes the
 * remit of the role, which is established. No biographies, career histories or
 * dates are included, because none were available and none may be invented.
 *
 * `portrait` is absent for both: no leadership photography was supplied. The
 * leadership component handles that with a designed typographic treatment rather
 * than a stock portrait or a grey silhouette. Add a path here when real portraits
 * exist and the component will use them.
 */

export type Leader = {
  name: string;
  role: string;
  initials: string;
  /** The remit of the role, not a biography. */
  focus: string;
  /** Fields this role leads on, by program slug. */
  fields: string[];
  portrait?: string;
};

export const team: Leader[] = [
  {
    name: "Dovies Ebbiey",
    role: "Founder & President",
    initials: "DE",
    focus:
      "Sets YOCED's direction and carries the organisation's relationships — with communities, partner organisations and the groups YOCED works through. Leads on programs, partnerships and the field work.",
    fields: ["agriculture-food-systems", "women-community-empowerment", "job-creation"],
  },
  {
    name: "Stefan Juma",
    role: "Co-founder & Technology Lead",
    initials: "SJ",
    focus:
      "Leads YOCED's technology and systems work — the platform, the operational tooling behind ventures and field programs, and the data layer that lets YOCED report on its work honestly.",
    fields: ["technology", "business-development"],
  },
];
