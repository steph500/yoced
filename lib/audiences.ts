/**
 * Audience routes.
 *
 * YOCED covers twelve fields and five very different kinds of visitor. These
 * routes exist so that each visitor can answer one question quickly: where do I
 * belong here?
 *
 * Each audience has genuinely different content — not one template with the
 * nouns swapped. `sections` is a free list so a route can say what it needs to
 * say and stop.
 */

export type Audience = {
  slug: string;
  label: string;
  /** Shown in navigation and pathway cards. */
  navLabel: string;
  question: string;
  headline: string;
  lede: string;
  accent: "clay" | "saffron" | "field" | "slate";
  /** Straight answer to "what can I actually get". */
  offers: { title: string; body: string }[];
  sections: { title: string; body: string[] }[];
  /** What YOCED needs from this visitor for the conversation to be useful. */
  bring: string[];
  programs: string[];
  cta: { label: string; href: string };
  inquiryTopic: string;
  heroPhoto?: string;
};

export const audiences: Audience[] = [
  {
    slug: "youth",
    label: "For young people",
    navLabel: "Youth",
    question: "I am looking for skills, work or a way in.",
    headline: "Start where the work is.",
    lede: "YOCED is not a place to register and wait. The routes below all connect to something that is already running — a field operation, a venture, a training cycle, a venture that needs people.",
    accent: "saffron",
    offers: [
      {
        title: "Practical training",
        body: "Skills taught against real work — agronomy, post-harvest handling, production, craft, digital and business skills.",
      },
      {
        title: "Work and placement",
        body: "Roles inside YOCED-supported ventures, partner businesses and field operations, including seasonal and project work.",
      },
      {
        title: "Mentorship",
        body: "Access to people who have run the thing you are trying to do, after the training ends.",
      },
      {
        title: "A route into enterprise",
        body: "If you would rather build something than be employed, the enterprise support route starts at Business Development.",
      },
    ],
    sections: [
      {
        title: "What this is not",
        body: [
          "It is not a jobs board, and YOCED does not hold a list of vacancies at other companies.",
          "It is not a grant application. Money in the YOCED ecosystem attaches to ventures with a working operation behind them, and that operation comes first.",
        ],
      },
      {
        title: "If you are in a rural area",
        body: [
          "The agriculture work is the most active part of YOCED and it is where the most work exists — land preparation, planting, weeding, harvest, drying and sorting, and the processing that follows.",
          "Poultry and horticulture run shorter cycles alongside the main season, which matters if you need income before a harvest closes.",
        ],
      },
      {
        title: "If you are a creative",
        body: [
          "Two things decide whether creative work pays: whether you own what you made, and whether your practice runs like a business. Intellectual Property covers the first, Business Development the second, and Youth & Creative Rights covers the terms you are being offered.",
        ],
      },
    ],
    bring: [
      "What you can already do, honestly stated",
      "Where you are, and whether you can travel",
      "Whether you are looking for work or building something",
      "How much time you actually have available",
    ],
    programs: ["skills-education", "job-creation", "agriculture-food-systems", "financial-literacy"],
    cta: { label: "Talk to YOCED", href: "/contact?topic=youth" },
    inquiryTopic: "youth",
    heroPhoto: "planting-ridges",
  },
  {
    slug: "entrepreneurs",
    label: "For entrepreneurs",
    navLabel: "Entrepreneurs",
    question: "I have a business, or the beginning of one.",
    headline: "The part nobody trained you for.",
    lede: "YOCED's enterprise support starts with the operational layer under your business — process, costing, records — because that is what determines whether it can grow, be delegated, or be funded.",
    accent: "clay",
    offers: [
      {
        title: "Process mapping",
        body: "Documenting how your business actually works, then rebuilding it so it is repeatable and can be handed to someone else.",
      },
      {
        title: "Costing that survives a real order",
        body: "What your product genuinely costs to make and deliver, and what it therefore has to sell for.",
      },
      {
        title: "Records you can be funded on",
        body: "The administrative spine a lender, buyer or partner needs to be able to read.",
      },
      {
        title: "Access to rotational funding",
        body: "Working capital support for ventures that are operationally viable, structured to return value so the next venture can be reached.",
      },
    ],
    sections: [
      {
        title: "The order matters",
        body: [
          "Funding does not come first. A venture with no defined process and no costing cannot use capital well, and a funder cannot assess it. The business development work is what makes the funding conversation possible.",
          "This is also why YOCED asks for your numbers early. Not to judge them — most are messy at the start — but because there is no useful conversation without them.",
        ],
      },
      {
        title: "What rotational funding is, and is not",
        body: [
          "It is a model where support given to a viable venture returns value into the ecosystem so the same capital can reach the next business. Terms are agreed directly, case by case.",
          "It is not an investment product, a guaranteed facility or a regulated fund. YOCED is not a licensed financial institution and does not present itself as one.",
        ],
      },
      {
        title: "If you are already trading",
        body: [
          "The most common blockers YOCED sees in trading businesses are the same three: business money mixed with household money, a price set by what competitors charge rather than by cost, and no way to accept an order larger than one day's capacity.",
          "All three are fixable, and none of them require more capital to fix.",
        ],
      },
    ],
    bring: [
      "What you sell and who buys it",
      "Your costs, however roughly you currently track them",
      "What is actually stopping you right now",
      "Whether anyone else can run the business without you",
    ],
    programs: ["business-development", "capital-rotational-funding", "financial-literacy", "intellectual-property"],
    cta: { label: "Start an enterprise conversation", href: "/contact?topic=entrepreneur" },
    inquiryTopic: "entrepreneur",
    heroPhoto: "groundnut-peanut-butter",
  },
  {
    slug: "partners",
    label: "For partners",
    navLabel: "Partners",
    question: "My organisation works in one of these fields.",
    headline: "Enter through one field. The rest stays available.",
    lede: "You do not have to engage with all of YOCED to work with YOCED. Each of the twelve fields has its own page, its own partnership models and its own route in — and each one is built to be sent to a colleague on its own.",
    accent: "slate",
    offers: [
      {
        title: "Field-specific engagement",
        body: "Work entirely within the program area that matches your mandate, with a shareable page to circulate internally.",
      },
      {
        title: "Community reach",
        body: "YOCED's standing relationships with communities, farming groups and youth networks, for organisations that have capacity but not reach.",
      },
      {
        title: "Delivery capacity",
        body: "Organisation and follow-through on the ground for programs designed elsewhere.",
      },
      {
        title: "Cross-sector connection",
        body: "Where your work touches another field — agriculture and climate, health and gender, IP and creative economy — the connection already exists internally.",
      },
    ],
    sections: [
      {
        title: "How YOCED describes its own capacity",
        body: [
          "YOCED has not published verified impact numbers, and this site does not carry any. What is documented is the work itself: field operations with photography, active ventures, and a defined model in each program area.",
          "If a partnership requires measurement, building that measurement properly is part of the scope rather than something claimed in advance.",
        ],
      },
      {
        title: "What YOCED brings, specifically",
        body: [
          "Reach into communities that are difficult to work in from Nairobi, and the trust that takes time to build.",
          "A Business Process Management background, which means program design tends to produce something operable rather than something described.",
          "An existing ecosystem of ventures, so a program with an enterprise component has somewhere to land.",
        ],
      },
      {
        title: "The boundaries",
        body: [
          "YOCED is not a clinical, legal or financial services provider. In health, protection and legal matters its role is reach, organisation and referral — with the professional capacity coming from the partner.",
          "SelfAwareTech is an independent technology company acting as YOCED's technology partner. It is not part of YOCED and YOCED is not part of it.",
        ],
      },
    ],
    bring: [
      "The field or fields your mandate covers",
      "Geography, if you are restricted to one",
      "Whether you bring funding, technical capacity, market access or all three",
      "Your reporting and compliance requirements",
    ],
    programs: [],
    cta: { label: "Open a partnership conversation", href: "/contact?topic=partnership" },
    inquiryTopic: "partnership",
    heroPhoto: "partner-meeting",
  },
  {
    slug: "funders",
    label: "For funders",
    navLabel: "Funders",
    question: "I am assessing whether YOCED is fundable.",
    headline: "What we can evidence, and what we cannot.",
    lede: "This page exists because due diligence deserves a straight answer. Here is what YOCED can document, where the gaps are, and what a first engagement would sensibly look like.",
    accent: "field",
    offers: [
      {
        title: "Fund a defined field",
        body: "Twelve program areas, each with its own scope, communities and partnership models. Funding can be restricted to one.",
      },
      {
        title: "Fund a rotational pool",
        body: "Capital directed at viable youth ventures, structured to return value into the pool. Governance and reporting agreed up front.",
      },
      {
        title: "Fund an enterprise cohort",
        body: "A defined group of ventures through a full business development cycle, with the operational outputs as deliverables.",
      },
      {
        title: "Fund measurement",
        body: "Building the data layer that makes future reporting evidential rather than estimated.",
      },
    ],
    sections: [
      {
        title: "What is documented",
        body: [
          "Active field operations, photographed: land preparation, mechanisation, planting, weeding, harvest, drying, sorting, and processing into a packaged product.",
          "Six active ventures across furniture, food, apparel, film and craft.",
          "A defined model in each of twelve program areas, with stated partnership routes.",
          "Working relationships with the organisations listed on the partners page.",
        ],
      },
      {
        title: "What is not claimed",
        body: [
          "This site publishes no beneficiary counts, funding totals, employment figures, completion rates or percentage improvements — because none have been independently verified.",
          "The organisations on the partners page are shown as part of YOCED's network. None is presented as a current funder, and no endorsement is implied by their presence.",
          "Historical outreach to development organisations is not treated as partnership. Contact is not a commitment, and this site does not present it as one.",
        ],
      },
      {
        title: "A sensible first engagement",
        body: [
          "A restricted, single-field grant with a defined scope and a measurement component built into it. That produces evidence rather than assertions, and it gives both sides something real to assess before anything larger.",
          "For capital rather than grant funding, a small first rotational pool in one sector, with the governance documented from the start.",
        ],
      },
    ],
    bring: [
      "Your mandate and any geographic restriction",
      "Reporting standards and due diligence requirements",
      "Whether you fund grants, capital, technical assistance or all three",
      "Your timeline, including your board cycle",
    ],
    programs: [],
    cta: { label: "Request a funding conversation", href: "/contact?topic=funding" },
    inquiryTopic: "funding",
    heroPhoto: "groundnut-harvest-drying",
  },
  {
    slug: "communities",
    label: "For communities",
    navLabel: "Communities",
    question: "We are a group, and we want to work with YOCED.",
    headline: "Groups get further than individuals.",
    lede: "Farming groups, women's groups, savings groups, youth groups and cooperatives are the structures YOCED works through most effectively — because they already carry the trust and the organisation that a program otherwise has to build from nothing.",
    accent: "field",
    offers: [
      {
        title: "Group training",
        body: "Training and mobilisation sessions built around what the group is actually trying to do.",
      },
      {
        title: "Production organisation",
        body: "Coordinating land preparation, planting, harvest and post-harvest handling at a scale an individual household cannot reach.",
      },
      {
        title: "Shared access",
        body: "Mechanisation, inputs and processing that only make sense when a group shares them.",
      },
      {
        title: "Group finance",
        body: "Working with savings and rotating structures the group already uses, rather than replacing them.",
      },
    ],
    sections: [
      {
        title: "Why groups",
        body: [
          "A tractor pass, a drying floor and a processing step are all uneconomic for one household and straightforward for fifteen. The same is true of a buyer relationship: nobody contracts with a single smallholder, and everybody will talk to an organised group with consistent output.",
          "Groups also carry accountability that programs cannot manufacture. Where a group already functions, work started with it tends to survive after the program ends.",
        ],
      },
      {
        title: "Women's and community groups",
        body: [
          "Much of YOCED's women and community work runs through existing groups, because they are the setting where issues around income, safety, health and education can be raised at all.",
          "Where a matter needs professional support — clinical, legal, protection — YOCED's role is to connect the group to a partner qualified to provide it.",
        ],
      },
      {
        title: "What YOCED asks",
        body: [
          "That the group is genuinely functioning, with people who show up and some way of making decisions together. It does not need to be registered or formal.",
          "And that the group is clear about what it wants. A group with a specific objective gets a specific program; a group without one gets a conversation first.",
        ],
      },
    ],
    bring: [
      "How many people are actively involved",
      "What the group already does together",
      "Where you are located",
      "The specific thing you want to change",
    ],
    programs: ["agriculture-food-systems", "women-community-empowerment", "financial-literacy", "health-wellbeing"],
    cta: { label: "Contact YOCED", href: "/contact?topic=community" },
    inquiryTopic: "community",
    heroPhoto: "training-session",
  },
];

export const audienceBySlug = new Map(audiences.map((audience) => [audience.slug, audience]));

export function getAudience(slug: string): Audience | undefined {
  return audienceBySlug.get(slug);
}
