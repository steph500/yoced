/**
 * Active YOCED ventures.
 *
 * All six are confirmed active. YOCED has not published trading histories,
 * revenue, staff numbers or founding dates for any of them, so none appear here.
 *
 * Each entry describes three things that are actually known and verifiable:
 *  1. the market the venture operates in,
 *  2. how YOCED's enterprise support model applies to a venture in that market,
 *  3. what a partner, buyer or collaborator can realistically do next.
 *
 * `sectorNote` is market context, not a claim about the venture's own operations.
 */

export type Venture = {
  slug: string;
  name: string;
  sector: string;
  /** Two-letter reference used as a graphic device. */
  cipher: string;
  status: "Active";
  short: string;
  lede: string;
  sectorNote: string[];
  /** How YOCED's model applies to a venture in this market. */
  support: { title: string; body: string }[];
  /** Concrete things an external party can offer or ask for. */
  openTo: string[];
  programs: string[];
  accent: "clay" | "saffron" | "field" | "slate";
};

export const ventures: Venture[] = [
  {
    slug: "casa-furnishings",
    name: "Casa Furnishings",
    sector: "Furniture & interiors",
    cipher: "CF",
    status: "Active",
    short: "Furniture and interior finishing for homes and workspaces.",
    lede: "Casa Furnishings works in furniture and interior fit-out — the point where manufacturing capability, craft skill and a retail customer meet.",
    sectorNote: [
      "Furniture is one of the few sectors where a Kenyan workshop competes directly with imports on the same shelf. Local makers win on customisation, lead time and repair; they lose on finishing consistency, costing discipline and the working capital needed to hold stock.",
      "It is also unusually good at creating employment. A furniture operation needs joinery, upholstery, finishing, delivery and installation — a spread of roles at different skill levels, which is exactly the shape of employment that youth job creation needs.",
    ],
    support: [
      {
        title: "Production process",
        body: "Mapping and standardising how a piece moves from order to delivery, so quality does not depend on who happens to be working that day.",
      },
      {
        title: "Costing and pricing",
        body: "Getting the true cost of a piece — materials, labour, waste, finishing, delivery — into the price.",
      },
      {
        title: "Working capital",
        body: "Furniture ties money up in materials and stock before a sale. This is the classic case for rotational funding rather than a grant.",
      },
      {
        title: "Employment structure",
        body: "Building the roles and training routes that let the workshop take on young people at entry level.",
      },
    ],
    openTo: [
      "Contract and bulk furnishing orders",
      "Interior fit-out partnerships",
      "Working capital and equipment support",
      "Materials supply relationships",
      "Apprenticeship and training placements",
    ],
    programs: ["business-development", "job-creation", "capital-rotational-funding"],
    accent: "clay",
  },
  {
    slug: "sweet-and-fancy",
    name: "Sweet & Fancy",
    sector: "Food & confectionery",
    cipher: "SF",
    status: "Active",
    short: "Confectionery and prepared food for events and everyday orders.",
    lede: "Sweet & Fancy operates in prepared food and confectionery — a market with a low barrier to entry, an unforgiving margin, and a direct line to women's enterprise.",
    sectorNote: [
      "Food enterprise is where a very large share of women-led businesses in Kenya begin, because it can start from a home kitchen with what is already there. The same accessibility is why so many stay small: pricing is often set by what neighbours charge rather than by cost, and business money and household money share a pocket.",
      "The businesses that break out of that pattern do so on three things — consistent product, real costing, and the ability to take an order larger than one day's capacity.",
    ],
    support: [
      {
        title: "Costing and margin",
        body: "Separating what a product costs from what it is being sold for, which in food is usually where the whole problem lives.",
      },
      {
        title: "Production consistency",
        body: "Recipes, batch sizes and process written down, so a larger order does not mean a different product.",
      },
      {
        title: "Money separation",
        body: "Financial capability work that puts business income and household income on separate lines.",
      },
      {
        title: "Order capacity",
        body: "Building the scheduling and capital position to accept events and bulk orders.",
      },
    ],
    openTo: [
      "Event and corporate catering orders",
      "Retail and stockist relationships",
      "Equipment and working capital support",
      "Food safety and packaging expertise",
    ],
    programs: ["business-development", "financial-literacy", "women-community-empowerment"],
    accent: "saffron",
  },
  {
    slug: "slice-and-ice",
    name: "Slice & Ice",
    sector: "Food & beverage",
    cipher: "SI",
    status: "Active",
    short: "Fast-service food and beverage.",
    lede: "Slice & Ice works in fast-service food and beverage — high transaction volume, thin per-unit margin, and everything decided by location, consistency and speed.",
    sectorNote: [
      "Quick-service food is a volume business disguised as a small one. Ten shillings of unnoticed waste per order is invisible on any single sale and decisive across a month.",
      "It is also one of the most immediate employers of young people, and one of the few where someone can move from counter to supervision to management inside the same operation within a realistic timeframe.",
    ],
    support: [
      {
        title: "Unit economics",
        body: "Cost per item including waste and energy — the number that decides whether volume is profit or just activity.",
      },
      {
        title: "Stock and waste control",
        body: "Purchasing, storage and portioning systems that stop margin leaking quietly.",
      },
      {
        title: "Service process",
        body: "A repeatable service sequence, so throughput at peak does not depend on improvisation.",
      },
      {
        title: "Team progression",
        body: "Defined roles that give young staff somewhere to go beyond the entry position.",
      },
    ],
    openTo: [
      "Site and location partnerships",
      "Supply and distribution relationships",
      "Equipment and working capital support",
      "Entry-level employment placements",
    ],
    programs: ["business-development", "job-creation", "financial-literacy"],
    accent: "clay",
  },
  {
    slug: "fashion-and-design",
    name: "Fashion & Design",
    sector: "Apparel & design",
    cipher: "FD",
    status: "Active",
    short: "Apparel design and production.",
    lede: "Fashion & Design works in apparel — a sector where Kenyan design talent is abundant and the production, ownership and commercial layers underneath it are usually missing.",
    sectorNote: [
      "The constraint in Kenyan fashion is rarely creative. It is production capacity, consistent sizing and finishing, and the ability to fulfil a repeat order at the same standard as the sample.",
      "Ownership is the second constraint. Designs are copied routinely, and most designers have never established what they own or written it into a commission agreement. That makes this venture a direct case for YOCED's intellectual property work.",
    ],
    support: [
      {
        title: "Production capability",
        body: "Moving from one-off pieces to a repeatable production run without losing the standard set by the sample.",
      },
      {
        title: "Design ownership",
        body: "Establishing and documenting what the designer owns, before it is shown to a larger party.",
      },
      {
        title: "Commercial terms",
        body: "Commission agreements, licensing and pricing that reflect the work rather than the eagerness.",
      },
      {
        title: "Market route",
        body: "Getting collections in front of buyers who order more than once.",
      },
    ],
    openTo: [
      "Retail and wholesale buying",
      "Production and manufacturing partnerships",
      "Textile and materials supply",
      "Intellectual property and legal support",
      "Design training placements",
    ],
    programs: ["intellectual-property", "business-development", "creatives"],
    accent: "slate",
  },
  {
    slug: "film",
    name: "Film",
    sector: "Film & media production",
    cipher: "FM",
    status: "Active",
    short: "Film and media production.",
    lede: "Film is YOCED's production venture — and the clearest example of why creative rights and business systems belong in the same conversation.",
    sectorNote: [
      "Production is project work: a crew assembles, delivers and disperses. That structure creates real short-term employment across a wide range of roles, and it is also where the worst terms in the creative economy are set — unpaid exposure work, credit promised and withdrawn, commissions with nothing written down.",
      "Production is also the capability that every other part of YOCED needs. Documenting field work properly is what makes it possible to report on it honestly.",
    ],
    support: [
      {
        title: "Production management",
        body: "Scheduling, budgeting and crewing a project so it delivers without consuming its own margin.",
      },
      {
        title: "Rights and contracts",
        body: "Clear terms on ownership, licensing, credit and payment before a project starts.",
      },
      {
        title: "Crew development",
        body: "Bringing young people into production roles with a route beyond runner.",
      },
      {
        title: "Documentation capability",
        body: "Recording YOCED's own field work to a standard partners can rely on.",
      },
    ],
    openTo: [
      "Commercial and documentary production briefs",
      "Equipment access and partnerships",
      "Crew training placements",
      "Distribution and broadcast relationships",
    ],
    programs: ["creatives", "intellectual-property", "job-creation", "technology"],
    accent: "slate",
  },
  {
    slug: "crafted-africa",
    name: "Crafted Africa",
    sector: "Craft & design",
    cipher: "CA",
    status: "Active",
    short: "Craft production and design for local and export markets.",
    lede: "Crafted Africa works in craft and design — the sector where the gap between what a maker earns and what a piece finally sells for is widest, and most fixable.",
    sectorNote: [
      "Craft has a persistent structural problem: the maker is paid for labour and materials while the design value and the export margin are captured further down the chain. The skill is local; the ownership usually is not.",
      "Fixing that needs three things together — design ownership established up front, production consistent enough for a buyer to reorder, and a market relationship the makers themselves hold.",
    ],
    support: [
      {
        title: "Design ownership",
        body: "Establishing that the design belongs to the maker, and building it into how work is sold.",
      },
      {
        title: "Production standard",
        body: "Consistency and finishing at a level that supports a repeat export order.",
      },
      {
        title: "Market relationships",
        body: "Direct buyer relationships held by the producers rather than by an intermediary.",
      },
      {
        title: "Skills transfer",
        body: "Training routes that bring young makers into the craft with commercial understanding attached.",
      },
    ],
    openTo: [
      "Wholesale and export buying",
      "Retail stockist relationships",
      "Design collaboration",
      "Craft skills training partnerships",
    ],
    programs: ["intellectual-property", "skills-education", "job-creation"],
    accent: "field",
  },
];

export const ventureBySlug = new Map(ventures.map((venture) => [venture.slug, venture]));

export function getVenture(slug: string): Venture | undefined {
  return ventureBySlug.get(slug);
}
