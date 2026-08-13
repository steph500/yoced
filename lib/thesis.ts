/**
 * YOCED's economic argument, as stated by the organisation.
 *
 * This file is the one place on the site that carries figures. They are a
 * *projection* — the arithmetic of the model at national scale — and are
 * labelled as such wherever they appear. Nothing here is presented as work
 * already completed, and no figure in this file may be repeated elsewhere on
 * the site as an achievement. That distinction is the whole reason the rest of
 * the site carries no numbers at all.
 */

export type Chapter = {
  id: string;
  code: string;
  label: string;
  title: string;
  body: string[];
};

export const chapters: Chapter[] = [
  {
    id: "structure",
    code: "I",
    label: "Infrastructure & formalisation",
    title: "Structuring the system.",
    body: [
      "YOCED shifts creatives from informal gig-workers to formal, bankable brands by digitising business registration, streamlining intellectual property protection, and instituting financial record-keeping.",
      "Those three instruments are deliberately unglamorous, and they are the ones that decide everything downstream. A practice without a registration, a rights position and a set of books cannot be lent to, contracted with, or bought from at scale — however good the work is.",
    ],
  },
  {
    id: "gdp",
    code: "III",
    label: "National accounts",
    title: "GDP and global competitiveness.",
    body: [
      "Formalisation means every service, licence and sale is captured in national accounts, directly expanding Kenya's tax base and pushing the creative sector from a peripheral contributor to a primary pillar of GDP growth.",
      "When these brands operate with structured balance sheets, they stop begging for local gigs and start exporting services and intellectual property to international markets — earning foreign exchange and positioning Kenya as Africa's creative gateway.",
    ],
  },
  {
    id: "borders",
    code: "IV",
    label: "Beyond borders",
    title: "Built on commercial viability, not donor aid.",
    body: [
      "YOCED's collaboration with institutions, corporates and practitioners ensures this infrastructure is resilient — not reliant on donor aid, but fuelled by commercial viability.",
      "When a Kenyan creative brand can pitch to a global streaming platform or a multinational advertising agency with the same professionalism as a London or New York firm, Kenya's influence transcends its borders.",
      "This is not only a national vision. It is a sovereign, self-sustaining creative economy that competes globally while stabilising local communities — one fully-branded artist at a time.",
    ],
  },
];

/** The three partner roles the model depends on. */
export const partnerRoles = [
  {
    title: "Institutions",
    body: "Redesign curricula so that graduates arrive industry-ready rather than needing to be retrained by their first employer.",
  },
  {
    title: "Corporates",
    body: "Provide predictable off-take deals — the committed demand that lets a creative enterprise plan, hire and borrow against something real.",
  },
  {
    title: "Practitioners",
    body: "Offer hands-on mentorship that bridges the gap between art and commerce, from people who have already crossed it.",
  },
];

/**
 * The multiplier, stated as a derivation so the reader can see every step and
 * disagree with any of them. `note` states what the figure is and is not.
 */
export const multiplier = {
  roles: ["Photographer", "Producer", "Graphic designer", "Stylist", "Digital marketer"],
  steps: [
    {
      code: "01",
      value: "1 artist",
      body: "A single artist formalises their project into a brand. They do not work alone — they anchor a micro-economy.",
    },
    {
      code: "02",
      value: "15–20 jobs",
      body: "Sustainable, tax-compliant positions retained per creative enterprise, across production, design, styling and distribution.",
    },
    {
      code: "03",
      value: "× 300,000",
      body: "Registered creatives in Kenya — the base the model is applied across.",
    },
    {
      code: "04",
      value: "4.5–6 million",
      body: "Direct formal jobs. Not just employment: a middle-class manufacturing line for the service and digital age, absorbing a substantial portion of the youth demographic.",
    },
  ],
  note: "This is the arithmetic of the model at national scale — what the structure produces if it is built. It is a projection from a stated assumption, not a record of positions YOCED has already created. Everywhere else on this site, YOCED publishes only what it can evidence.",
};

/** The heritage doctrine — how YOCED holds its position inside global partnerships. */
export const heritage = {
  label: "Cultural heritage",
  title: "Vision beyond borders.",
  lead: "YOCED ensures that international collaboration does not dilute our DNA — it amplifies it.",
  body: [
    "Diversity in partnerships adds technical scale and global networks, but the narrative, aesthetic and rhythm remain unequivocally Kenyan. Our local brands do not mimic international trends; they disrupt global markets with original intellectual property rooted in heritage.",
    "The goal is not to assimilate, but to export a cultural standard that the world craves — authenticity. Through structured systems, global partners respect our indigenous footprint because they know originality is the ultimate premium.",
  ],
  pull: "Kenya does not change to fit the international market. We change the international market by making them pay top value for what only we can produce.",
};
