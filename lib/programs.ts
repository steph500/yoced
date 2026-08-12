/**
 * The twelve active YOCED program fields.
 *
 * Content rules that apply to every entry in this file:
 *  - No beneficiary counts, funding figures, dates, completion claims or partner
 *    endorsements. YOCED has not published verified numbers, so none appear here.
 *  - `context` describes the problem. `approach` describes how YOCED works.
 *    `activities` describes what actually happens. Nothing is stated as achieved.
 *  - `photos` may only reference frames that genuinely relate to the field.
 *    A field with no authentic photography leaves the array empty rather than
 *    borrowing an unrelated image.
 */

export type ClusterId = "enterprise" | "capability" | "land" | "community";

export type Cluster = {
  id: ClusterId;
  title: string;
  short: string;
  accent: string;
};

export const clusters: Cluster[] = [
  {
    id: "enterprise",
    title: "Enterprise & Capital",
    short: "Building businesses that can employ people and outlive a grant cycle.",
    accent: "clay",
  },
  {
    id: "capability",
    title: "Capability & Ownership",
    short: "The skills, money sense and legal ownership that make opportunity stick.",
    accent: "saffron",
  },
  {
    id: "land",
    title: "Land, Food & Climate",
    short: "Production, resilience and wellbeing in the places people actually live.",
    accent: "field",
  },
  {
    id: "community",
    title: "Community, Rights & Access",
    short: "Who gets to participate, on what terms, and with what protection.",
    accent: "slate",
  },
];

export type Program = {
  slug: string;
  /** Atlas reference code, used as a visual index across the site. */
  code: string;
  title: string;
  /** Short label for dense navigation. */
  navTitle: string;
  cluster: ClusterId;
  short: string;
  lede: string;
  context: string[];
  approach: string[];
  activities: { title: string; body: string }[];
  communities: string[];
  partnershipModels: { title: string; body: string }[];
  audience: string[];
  sdgs: number[];
  related: string[];
  ventures: string[];
  heroPhoto?: string;
  photos: string[];
  /** Optional topic directory for fields broad enough to need one. */
  topics?: { title: string; body: string }[];
};

export const programs: Program[] = [
  {
    slug: "job-creation",
    code: "F-01",
    title: "Job Creation",
    navTitle: "Job Creation",
    cluster: "enterprise",
    short: "Work that exists because someone built the enterprise behind it.",
    lede: "Most youth employment programs end at the certificate. YOCED works at the other end — on the enterprises, contracts and seasonal operations that actually have payroll attached to them.",
    context: [
      "Kenya trains far more young people than its formal labour market absorbs. The gap is not usually a gap in willingness or even in skill; it is a gap in demand. Jobs exist where an enterprise has customers, working capital and a reason to hire.",
      "That means employment work and enterprise work cannot be separated. A training program that produces graduates into a market with no openings has moved the problem, not solved it.",
    ],
    approach: [
      "YOCED approaches job creation from the employer side first. We work with ventures, farms, service operations and partner businesses on the operational capacity that makes hiring possible, then connect young people into the roles that capacity creates.",
      "Where work is seasonal or project-based — land preparation, planting, harvest, post-harvest handling, production runs, event and media production — we treat it as real, countable work and build the coordination around it rather than dismissing it as informal.",
    ],
    activities: [
      {
        title: "Enterprise-side capacity",
        body: "Working with businesses and ventures on the operations, systems and market position that let them take on people.",
      },
      {
        title: "Work placement and coordination",
        body: "Connecting young people to roles inside YOCED-supported ventures, partner businesses and field operations.",
      },
      {
        title: "Seasonal and project labour",
        body: "Organising crews for land preparation, planting, weeding, harvest and post-harvest work, and treating that coordination as a professional function.",
      },
      {
        title: "Employer partnerships",
        body: "Building relationships with companies that need reliable talent pipelines and are willing to structure entry-level routes.",
      },
    ],
    communities: [
      "Young people entering the labour market",
      "Graduates and trainees without a first placement",
      "Rural and peri-urban work crews",
      "Small businesses ready to take on their first employees",
    ],
    partnershipModels: [
      {
        title: "Employer pipeline",
        body: "Structure entry-level roles, internships or seasonal crews with YOCED handling sourcing, briefing and coordination.",
      },
      {
        title: "Enterprise co-investment",
        body: "Back the growth of a specific venture where the growth plan has jobs attached to it.",
      },
      {
        title: "Programme delivery",
        body: "Fund or co-deliver a defined employment initiative in a sector or county where you already work.",
      },
    ],
    audience: ["Youth", "Employers", "Funders", "County partners"],
    sdgs: [1, 8, 10],
    related: ["business-development", "skills-education", "capital-rotational-funding"],
    ventures: ["casa-furnishings", "crafted-africa", "film"],
    heroPhoto: "weeding-team",
    photos: ["weeding-team", "planting-ridges", "opening-furrows", "groundnut-sorting", "machinery-yard"],
  },
  {
    slug: "business-development",
    code: "F-02",
    title: "Business Development & BPM",
    navTitle: "Business Development & BPM",
    cluster: "enterprise",
    short: "Turning an idea into an operation that can be run by someone other than its founder.",
    lede: "Business Process Management is where YOCED started, and it is still the discipline underneath everything else. A venture becomes real when its work is written down, repeatable and measurable.",
    context: [
      "Young founders rarely fail for lack of an idea. They fail on the unglamorous layer underneath it: no defined process, no costing that survives contact with a real order, no record-keeping, no way to hand a task to someone else without it breaking.",
      "That layer is exactly what Business Process Management addresses, and it is almost never included in entrepreneurship training aimed at young people.",
    ],
    approach: [
      "YOCED brings a Business Process Management and Business Process Outsourcing background to enterprise support. We map how a venture actually works, find where value leaks, and rebuild the process so the business can be delegated, priced properly and grown.",
      "The output is not a business plan document. It is a working operation: defined roles, a costing model the founder understands, records that a lender or partner can read, and a market position that holds up under scrutiny.",
    ],
    activities: [
      {
        title: "Process mapping and redesign",
        body: "Documenting how a venture currently operates, then rebuilding the sequence so it is repeatable and can be handed over.",
      },
      {
        title: "Costing and pricing",
        body: "Getting unit economics right — what a product genuinely costs to make and deliver, and what it has to sell for.",
      },
      {
        title: "Operational systems",
        body: "Record-keeping, inventory, supplier terms and the basic administrative spine a business needs to be fundable.",
      },
      {
        title: "Market and growth readiness",
        body: "Positioning, customer definition and the preparation required before a venture approaches buyers, lenders or investors.",
      },
      {
        title: "Outsourcing and shared services",
        body: "Applying BPO thinking so small ventures can share functions they cannot each afford alone.",
      },
    ],
    communities: [
      "Early-stage youth-led ventures",
      "Micro and small enterprises with a customer base but no systems",
      "Cooperatives and producer groups",
      "Creative businesses moving from commissions to operations",
    ],
    partnershipModels: [
      {
        title: "Enterprise support cohorts",
        body: "Fund a defined cohort of ventures through a structured business development cycle.",
      },
      {
        title: "Corporate supply chain",
        body: "Use YOCED to bring small suppliers up to the operational standard your procurement requires.",
      },
      {
        title: "Technical partnership",
        body: "Contribute specialist expertise — finance, legal, logistics, quality — into the support offered to ventures.",
      },
    ],
    audience: ["Entrepreneurs", "SMEs", "Corporate partners", "Cooperatives"],
    sdgs: [8, 9, 17],
    related: ["job-creation", "capital-rotational-funding", "financial-literacy"],
    ventures: ["casa-furnishings", "sweet-and-fancy", "slice-and-ice", "fashion-and-design"],
    heroPhoto: "partner-meeting",
    photos: [
      "partner-meeting",
      "conference-delegate-pass",
      "conference-delegation",
      "institutional-handshake",
      "training-session",
      "groundnut-peanut-butter",
    ],
  },
  {
    slug: "capital-rotational-funding",
    code: "F-03",
    title: "Capital & Rotational Funding",
    navTitle: "Capital & Rotational Funding",
    cluster: "enterprise",
    short: "A funding model built to keep moving instead of being spent once.",
    lede: "YOCED's rotational funding concept is designed so that support given to one viable venture can return value into the ecosystem and reach the next one. It is an active model, and it is deliberately described here in concept rather than in the language of a regulated fund.",
    context: [
      "Youth ventures in Kenya sit in a well-known gap. Grants are small, one-directional and end. Commercial lending asks for collateral and a trading history that a young founder does not have. Between the two, viable businesses stall for want of comparatively modest working capital.",
      "A single disbursement also has a structural weakness: whatever it achieves, it achieves once. The money does not come back to do it again.",
    ],
    approach: [
      "Rotational funding treats support as circulating rather than terminal. A venture that receives support contributes value back into the pool as it becomes able to — through repayment, a contribution arrangement, or a reciprocal contribution to another venture in the ecosystem — so that the same capital can support the next business.",
      "Ventures are selected on operational viability, not on presentation. A venture that has been through YOCED's business development work has already produced the costing, records and process documentation that make a funding decision possible.",
      "YOCED is not a licensed financial institution and does not offer investment products, guaranteed returns or deposit-taking services. Specific terms are agreed directly with the venture and with any partner providing capital.",
    ],
    activities: [
      {
        title: "Venture readiness",
        body: "Preparing ventures so that a funding conversation has real numbers behind it.",
      },
      {
        title: "Support allocation",
        body: "Directing available support to ventures on the basis of viability and readiness.",
      },
      {
        title: "Return and rotation",
        body: "Agreeing how value returns into the pool so the next venture can be reached.",
      },
      {
        title: "Funder structuring",
        body: "Working with funders and partners on the structure, governance and reporting a specific pool requires.",
      },
    ],
    communities: [
      "Youth-led ventures with demand but no working capital",
      "Producer and processing groups needing seasonal finance",
      "Ventures already inside the YOCED enterprise support pipeline",
    ],
    partnershipModels: [
      {
        title: "Capital partner",
        body: "Provide the capital for a defined pool, with structure, governance and reporting agreed up front.",
      },
      {
        title: "Sector-restricted pool",
        body: "Fund rotation limited to a sector or county that matches your mandate — agriculture, creative enterprise, women-led business.",
      },
      {
        title: "Technical and legal partner",
        body: "Help build the agreements, safeguards and administration a rotating pool needs to run properly.",
      },
    ],
    audience: ["Entrepreneurs", "Funders", "Development finance", "Corporate CSR"],
    sdgs: [1, 8, 9, 17],
    related: ["business-development", "job-creation", "financial-literacy"],
    ventures: ["casa-furnishings", "sweet-and-fancy", "slice-and-ice"],
    heroPhoto: "groundnut-peanut-butter",
    photos: ["groundnut-peanut-butter", "groundnut-harvest-drying", "partner-meeting"],
  },
  {
    slug: "skills-education",
    code: "F-04",
    title: "Skills & Education",
    navTitle: "Skills & Education",
    cluster: "capability",
    short: "Training aimed at a specific opportunity, not at a certificate.",
    lede: "YOCED builds training around work that exists — a crop that needs agronomy, a venture that needs an operator, a production that needs a crew. The point of reference is always the opportunity on the other side.",
    context: [
      "Skills programs are easy to run and hard to make count. A course fills a room and produces certificates; whether it changes anyone's income depends almost entirely on whether it was built around a real opportunity.",
      "Young people are acutely aware of this. Attendance drops when training is generic, and holds when the route from the session to the work is visible.",
    ],
    approach: [
      "We design training backwards from the opportunity: identify the work, identify what it demands, then build the shortest honest path from where someone is to where that work starts.",
      "Delivery is practical and situated — in fields, workshops, production spaces and working sessions rather than only in classrooms — and it is paired with mentorship so that people have somewhere to take a problem after the training ends.",
    ],
    activities: [
      {
        title: "Practical technical training",
        body: "Agronomy, post-harvest handling, production, craft, digital and business skills taught against real work.",
      },
      {
        title: "Mentorship",
        body: "Ongoing access to people who have run the thing being taught, not only to those who teach it.",
      },
      {
        title: "Group training and mobilisation",
        body: "Working sessions with farming groups, community groups and cohorts of young entrepreneurs.",
      },
      {
        title: "Professional development",
        body: "Workplace readiness, communication and the professional habits that decide whether a first placement becomes a second one.",
      },
    ],
    communities: [
      "Young people preparing to enter work or self-employment",
      "Farming and producer groups",
      "Creative practitioners moving toward commercial work",
      "Small business owners and their staff",
    ],
    partnershipModels: [
      {
        title: "Curriculum and delivery partner",
        body: "Bring specialist content or trainers into a YOCED program in your field.",
      },
      {
        title: "Training sponsorship",
        body: "Fund a defined training cycle with a specific cohort and a specific opportunity attached.",
      },
      {
        title: "Institutional link",
        body: "Connect a school, college or TVET institution into practical placement and field-based learning.",
      },
    ],
    audience: ["Youth", "Training partners", "Schools & TVETs", "Employers"],
    sdgs: [4, 8, 10],
    related: ["job-creation", "financial-literacy", "agriculture-food-systems"],
    ventures: ["crafted-africa", "fashion-and-design", "film"],
    heroPhoto: "training-session",
    photos: ["training-session", "nursery-beds", "partner-meeting", "groundnut-sorting"],
  },
  {
    slug: "financial-literacy",
    code: "F-05",
    title: "Financial Literacy & Money Mastery",
    navTitle: "Financial Literacy",
    cluster: "capability",
    short: "The money habits that decide whether income becomes anything.",
    lede: "Money Mastery is YOCED's practical financial capability work. It deals with the ordinary decisions — pricing, saving, separating business money from household money, borrowing — that quietly determine whether a good season or a good contract turns into anything lasting.",
    context: [
      "Income and financial security are not the same thing. Ventures with real revenue collapse because business and personal money were never separated. Households with a good harvest end the year no better off because nothing was set aside against the next one.",
      "Digital lending has made credit easy to reach and expensive to misjudge, which raises the cost of not understanding it.",
    ],
    approach: [
      "YOCED teaches financial capability in the same terms people actually use — a season, an order, a rent cycle, a school fees deadline — rather than in abstract personal-finance language.",
      "For ventures, this connects directly to the business development work: the same costing and record-keeping that makes a business manageable is what makes it fundable.",
    ],
    activities: [
      {
        title: "Money management",
        body: "Budgeting, saving, and separating enterprise money from household money.",
      },
      {
        title: "Business finance literacy",
        body: "Costing, margins, cash flow and reading your own records well enough to make decisions from them.",
      },
      {
        title: "Credit and debt",
        body: "Understanding what borrowing costs, when it is worth it, and how to avoid the traps that follow easy digital credit.",
      },
      {
        title: "Savings and group finance",
        body: "Working with savings groups and rotating structures that communities already trust and use.",
      },
    ],
    communities: [
      "Young people earning a first income",
      "Entrepreneurs and small traders",
      "Savings groups and community financial structures",
      "Women managing household and business income together",
    ],
    partnershipModels: [
      {
        title: "Financial institution partnership",
        body: "Deliver financial capability alongside products that young people and small enterprises can actually access.",
      },
      {
        title: "Programme sponsorship",
        body: "Fund financial capability delivery inside a specific community, cohort or sector.",
      },
      {
        title: "Content partnership",
        body: "Co-develop practical material with a bank, insurer, cooperative or fintech partner.",
      },
    ],
    audience: ["Youth", "Entrepreneurs", "Financial partners", "Savings groups"],
    sdgs: [1, 4, 8],
    related: ["business-development", "capital-rotational-funding", "women-community-empowerment"],
    ventures: ["sweet-and-fancy", "slice-and-ice"],
    photos: ["training-session", "partner-meeting"],
  },
  {
    slug: "intellectual-property",
    code: "F-06",
    title: "Intellectual Property",
    navTitle: "Intellectual Property",
    cluster: "capability",
    short: "Owning what you made, and being able to earn from it.",
    lede: "Young creators and innovators frequently give away the most valuable thing they own without realising it. YOCED works on the awareness, documentation and legal routes that let original work stay with the person who made it.",
    context: [
      "Designs get copied, music gets used without licence, product concepts move to a larger company after a pitch, and craftspeople sell the thing but never the design. In most of these cases nothing was stolen in a dramatic sense — ownership was simply never established or written down.",
      "Formal IP advice sits behind a cost and a vocabulary that most young creators never get past.",
    ],
    approach: [
      "YOCED works on the practical end: what you own by default, what you have to register, what a contract needs to say, and what to do before you show your work to a larger party.",
      "Where a matter needs qualified legal advice, YOCED's role is to make sure the creator understands the situation and reaches the right professional — not to substitute for one.",
    ],
    activities: [
      {
        title: "IP awareness",
        body: "Practical sessions on copyright, trademarks, designs and what protection actually applies to a given piece of work.",
      },
      {
        title: "Documentation practice",
        body: "Keeping the records, dates and drafts that establish authorship before a dispute exists.",
      },
      {
        title: "Contracts and licensing",
        body: "Understanding commissioning terms, licensing, and what to negotiate before signing.",
      },
      {
        title: "Commercialisation",
        body: "Turning protected work into a revenue route — licensing, production, brand.",
      },
    ],
    communities: [
      "Designers, artists, musicians and film-makers",
      "Craft producers and their cooperatives",
      "Product innovators and early-stage founders",
      "Fashion and creative businesses",
    ],
    partnershipModels: [
      {
        title: "Legal partnership",
        body: "Provide pro bono or subsidised advice, clinics or review capacity for creators inside YOCED programs.",
      },
      {
        title: "Rights education",
        body: "Co-deliver IP awareness with an institution, collecting society or industry body.",
      },
      {
        title: "Sector programme",
        body: "Fund IP support targeted at a specific creative sector.",
      },
    ],
    audience: ["Creators", "Innovators", "Legal partners", "Creative businesses"],
    sdgs: [8, 9, 16],
    related: ["youth-creative-rights", "business-development", "skills-education"],
    ventures: ["crafted-africa", "fashion-and-design", "film"],
    photos: [],
  },
  {
    slug: "agriculture-food-systems",
    code: "F-07",
    title: "Agriculture & Food Systems",
    navTitle: "Agriculture & Food Systems",
    cluster: "land",
    short: "Farming treated as a business, from land preparation to the jar on the shelf.",
    lede: "This is the field where YOCED's work is most visible. Land preparation, planting, weeding, harvest, drying, sorting and value addition — groundnuts, maize, horticulture and poultry — run as commercial operations that young people can actually earn from.",
    context: [
      "Agriculture is the sector most available to rural young people and the one they are least likely to choose, because it is presented to them as subsistence rather than as enterprise. The reputational problem is real, and it is mostly a consequence of how the work has been organised.",
      "The economics change at two points: mechanisation, which decides how much land one operation can work, and value addition, which decides what the harvest is worth once it leaves the field. Smallholders are usually cut off from both.",
    ],
    approach: [
      "YOCED runs agriculture as a production business. Land is opened mechanically where that makes sense and by hand where it does not. Planting, weeding and harvest are coordinated as scheduled work with crews attached to them.",
      "Post-harvest handling gets the same attention as growing — drying, sorting and storage are where quality and price are won or lost. Value addition is the point of the exercise: groundnuts turned into packaged peanut butter earn a different living from groundnuts sold in sacks.",
      "Horticulture and poultry run alongside the main crops as shorter-cycle enterprises, which matters when someone needs income before the season closes.",
    ],
    activities: [
      {
        title: "Land preparation and mechanisation",
        body: "Opening land with tractors and implements, with hand preparation on the edges and headlands.",
      },
      {
        title: "Planting and crop management",
        body: "Coordinated planting, weeding and crop management across groundnuts, maize and vegetables.",
      },
      {
        title: "Harvest and post-harvest handling",
        body: "Lifting, threshing, drying and sorting — the stage that decides quality and price.",
      },
      {
        title: "Value addition",
        body: "Processing produce into packaged goods, so the margin stays closer to where the crop was grown.",
      },
      {
        title: "Horticulture",
        body: "Kale, capsicum, tomatoes and other short-cycle crops grown for both household use and local sale.",
      },
      {
        title: "Poultry",
        body: "Brooding and production cycles run as a defined enterprise with feed, housing and schedule planned in.",
      },
    ],
    communities: [
      "Young people in rural and peri-urban areas",
      "Smallholder farmers and farming groups",
      "Households running kitchen gardens as a first income",
      "Producer groups moving toward processing",
    ],
    partnershipModels: [
      {
        title: "Value chain partnership",
        body: "Work with YOCED on a specific crop from production through processing to market.",
      },
      {
        title: "Mechanisation access",
        body: "Support access to equipment for producers who cannot reach it individually.",
      },
      {
        title: "Offtake and market",
        body: "Provide a route to market for produce or processed goods.",
      },
      {
        title: "Technical partnership",
        body: "Bring agronomy, post-harvest or food safety expertise into the work.",
      },
    ],
    audience: ["Youth", "Farmers", "Agriculture partners", "Buyers & processors", "Funders"],
    sdgs: [1, 2, 8, 12],
    related: ["climate-action", "job-creation", "business-development"],
    ventures: [],
    heroPhoto: "field-preparation",
    photos: [
      "field-preparation",
      "ploughing",
      "tractor-and-hand",
      "planting-ridges",
      "seed-in-hand",
      "maize-seed",
      "weeding-team",
      "groundnut-rows",
      "groundnut-field",
      "groundnut-lifted",
      "groundnut-lifting",
      "groundnut-harvest-drying",
      "groundnut-drying",
      "groundnut-sorting",
      "groundnut-peanut-butter",
      "capsicum-harvest",
      "capsicum-in-hand",
      "kale-seedling-rows",
      "kale-field",
      "nursery-beds",
      "leafy-greens",
      "kitchen-garden",
      "poultry-brooder",
      "chicks-with-feed",
      "machinery-yard",
      "maize-field",
      "partner-farm-kale",
      "partner-farm-kale-rows",
      "partner-farm-brassica",
      "partner-farm-young-crop",
      "partner-farm-green-crop",
    ],
    topics: [
      {
        title: "Groundnuts and value addition",
        body: "The most developed line of work — production, drying, sorting and processing into packaged peanut butter.",
      },
      {
        title: "Maize and staple crops",
        body: "Mechanised land preparation and coordinated planting on staple crops.",
      },
      {
        title: "Horticulture",
        body: "Kale, capsicum and tomatoes as short-cycle enterprises alongside the main season, on YOCED plots and on partner farms.",
      },
      {
        title: "Poultry",
        body: "Brooding and production cycles as a defined small enterprise.",
      },
    ],
  },
  {
    slug: "climate-action",
    code: "F-08",
    title: "Climate Action & Resilience",
    navTitle: "Climate Action & Resilience",
    cluster: "land",
    short: "Climate work that pays its way, because otherwise it does not last.",
    lede: "For the communities YOCED works with, climate is not a future scenario — it is this season's rainfall. Our climate work is built into how land, energy, waste and production are handled, because practices that cost a household money are not adopted twice.",
    context: [
      "Rainfall has become less predictable in exactly the places where income depends on it most. Households absorb that risk directly: a failed season is not a statistic but a year of school fees.",
      "Climate programs frequently fail on adoption. A practice that improves resilience but reduces this year's income will be abandoned, regardless of how well it was explained.",
    ],
    approach: [
      "YOCED treats resilience as an economic question. The practices we work on — soil management, residue return, mulching, water-conscious production, crop choice — are the ones that also protect yield and reduce cost.",
      "Circular economy thinking runs through the production work: crop residue has a use, waste streams have a value, and inputs that can be produced locally should be.",
      "Renewable energy and environmental awareness sit alongside this as areas where YOCED works with partners who bring the specific technical capacity.",
    ],
    activities: [
      {
        title: "Soil and land management",
        body: "Mulching, residue return and preparation practices that hold soil condition across seasons.",
      },
      {
        title: "Resilient production",
        body: "Crop choice, timing and water-conscious methods that reduce exposure to a bad season.",
      },
      {
        title: "Circular economy",
        body: "Putting crop residue and waste streams back to use rather than treating them as disposal.",
      },
      {
        title: "Renewable energy",
        body: "Working with partners on practical energy access for production and households.",
      },
      {
        title: "Biodiversity and environment",
        body: "Tree cover, land condition and environmental awareness alongside production work. YOCED attended Green Earth Ambassadors Foundation's Guinness World Records tree-planting attempt at Kessup Forest, Elgeiyo Marakwet, in support — the attempt was theirs.",
      },
    ],
    communities: [
      "Farming households exposed to seasonal variability",
      "Rural young people whose income depends on land",
      "Producer groups managing shared land and water",
      "Communities managing waste and energy access",
    ],
    partnershipModels: [
      {
        title: "Climate-linked agriculture",
        body: "Fund or co-deliver resilience practices inside a working production system, where adoption can actually be observed.",
      },
      {
        title: "Renewable energy partnership",
        body: "Bring energy technology and technical capacity into production and household use.",
      },
      {
        title: "Circular economy initiative",
        body: "Develop a specific waste-to-value stream with YOCED and a local producer group.",
      },
      {
        title: "Research and measurement",
        body: "Work with YOCED on documenting practice and outcomes properly, so results can be reported honestly.",
      },
    ],
    audience: ["Climate organisations", "Communities", "Youth", "Development partners", "Energy partners"],
    sdgs: [2, 7, 12, 13, 15],
    related: ["agriculture-food-systems", "health-wellbeing", "technology"],
    ventures: [],
    heroPhoto: "crop-residue",
    photos: [
      "crop-residue",
      "green-earth-record-notice",
      "prepared-plot",
      "kitchen-garden",
      "tractor-and-hand",
      "maize-field",
      "groundnut-field",
    ],
  },
  {
    slug: "health-wellbeing",
    code: "F-09",
    title: "Health & Wellbeing",
    navTitle: "Health & Wellbeing",
    cluster: "land",
    short: "Removing the health barriers that quietly end economic participation.",
    lede: "YOCED's health work is targeted rather than general. We focus on the points where a health barrier directly stops someone from working, learning or earning — and we work with health partners who bring the clinical capacity we do not.",
    context: [
      "Health and income are tied together in both directions. Illness stops work and drains savings; low income delays treatment until it costs more. For young people the interruption often lands at the exact moment a first job or first business is being established.",
      "Nutrition, menstrual health and mental health are the barriers that come up most often in YOCED's community work, and they are the ones most likely to be handled quietly rather than addressed.",
    ],
    approach: [
      "YOCED is not a clinical organisation and does not present itself as one. Our role is awareness, access and the practical arrangements that reduce a barrier — and connecting communities to partners who provide care.",
      "Nutrition connects directly to the agriculture work: a household growing vegetables for sale is also feeding itself differently, and that link is worth being deliberate about.",
      "Mental health is addressed as part of community wellbeing rather than as a separate specialist topic, because stigma is the reason it stays unaddressed.",
    ],
    activities: [
      {
        title: "Health awareness",
        body: "Practical community sessions on the health issues that most affect participation in work and school.",
      },
      {
        title: "Nutrition and food",
        body: "Connecting household food production to nutrition, particularly for children and young mothers.",
      },
      {
        title: "Menstrual health access",
        body: "Addressing the product access and facility gaps that keep girls out of school. Delivered with the Women & Community Empowerment field.",
      },
      {
        title: "Mental health and stigma",
        body: "Community-level work on wellbeing, stigma and support, including around mental disability.",
      },
      {
        title: "Partner referral",
        body: "Connecting communities to health providers and partners with clinical capacity.",
      },
    ],
    communities: [
      "Girls and young women",
      "Young people in and out of school",
      "Rural households",
      "People living with disabilities",
    ],
    partnershipModels: [
      {
        title: "Health provider partnership",
        body: "Bring clinical services, screening or referral capacity into communities where YOCED already works.",
      },
      {
        title: "Menstrual health programme",
        body: "Fund or supply a defined access programme in specific schools or communities.",
      },
      {
        title: "Nutrition initiative",
        body: "Link nutrition work to household food production in YOCED's agriculture areas.",
      },
    ],
    audience: ["Health partners", "Communities", "Youth", "Schools", "Funders"],
    sdgs: [2, 3, 5, 10],
    related: ["women-community-empowerment", "agriculture-food-systems", "skills-education"],
    ventures: [],
    photos: ["kitchen-garden", "leafy-greens", "capsicum-harvest"],
  },
  {
    slug: "women-community-empowerment",
    code: "F-10",
    title: "Women & Community Empowerment",
    navTitle: "Women & Community Empowerment",
    cluster: "community",
    short: "Economic agency, safety and inclusion — as one connected problem.",
    lede: "This is the broadest field YOCED runs, because the barriers facing women, girls and vulnerable community members do not arrive separately. Income, safety, education, health and inclusion move together, and a program that addresses only one of them tends to lose ground on the others.",
    context: [
      "YOCED's community research and program work in rural areas surfaced a consistent pattern. Girls miss school during menstruation because sanitary products and facilities are not reliably available, and the missed days accumulate into a widening gap. Early and unwanted pregnancy interrupts education, often permanently, and is compounded where sex education is absent or partial.",
      "Women whose income depends entirely on a spouse have limited ability to leave an unsafe situation or to make decisions about their own or their children's future. Widows and orphans face the same dependence with fewer options again.",
      "People living with disabilities — including mental disability — face exclusion that is social before it is practical, and stigma keeps both the exclusion and its cost unspoken.",
      "Violence and sexual assault sit underneath all of this, and are least likely to be reported where a woman has no independent income and no safe place to raise it.",
    ],
    approach: [
      "YOCED treats economic independence as the foundation, because it is what converts every other intervention into something a woman can act on. Skills, enterprise support, financial capability and access to funding are applied here directly.",
      "Alongside that, the field works on the specific barriers: menstrual health access so girls stay in school, education that is complete rather than partial, safe environments where issues can be raised, and inclusion for people living with disabilities.",
      "Sensitive work is done with partners who have the mandate and the professional capacity for it. YOCED's role is reach, organisation, economic pathways and follow-through — not clinical or legal service provision.",
      "This field sits inside YOCED rather than defining it. Someone whose mandate is women and girls can work with YOCED entirely here; the wider ecosystem is available but not imposed.",
    ],
    activities: [
      {
        title: "Economic independence",
        body: "Enterprise support, skills and financial capability directed specifically at women's own income.",
      },
      {
        title: "Menstrual health and school attendance",
        body: "Addressing product access and facilities so that menstruation stops being a reason to miss school.",
      },
      {
        title: "Education and information",
        body: "Complete, age-appropriate education including sex education, delivered with appropriate partners.",
      },
      {
        title: "Safe environments",
        body: "Community settings where women and girls can raise issues, including violence and assault, and be connected to support.",
      },
      {
        title: "Widows, orphans and vulnerable households",
        body: "Practical support pathways for households with the least fallback.",
      },
      {
        title: "Disability inclusion",
        body: "Participation and access for people living with physical and mental disability, and work against the stigma that drives exclusion.",
      },
    ],
    communities: [
      "Women and girls in rural and peri-urban communities",
      "Girls in and at risk of leaving school",
      "Widows, orphans and vulnerable households",
      "People living with disabilities",
      "Community and women's groups",
    ],
    partnershipModels: [
      {
        title: "Women's economic empowerment",
        body: "Fund enterprise support, skills and capital access directed specifically at women-led income.",
      },
      {
        title: "Girls' education and menstrual health",
        body: "Support a defined school or community programme addressing attendance and product access.",
      },
      {
        title: "Protection and support services",
        body: "Bring professional capacity — counselling, legal, clinical — into communities where YOCED has reach and trust.",
      },
      {
        title: "Disability inclusion",
        body: "Partner on access, participation and anti-stigma work.",
      },
    ],
    audience: ["Women & girls", "Community organisations", "Funders", "Health partners", "Schools"],
    sdgs: [1, 3, 4, 5, 10, 16],
    related: ["health-wellbeing", "financial-literacy", "skills-education"],
    ventures: ["sweet-and-fancy", "fashion-and-design"],
    heroPhoto: "kitchen-garden",
    photos: ["kitchen-garden", "weeding-team", "groundnut-sorting", "nursery-beds"],
    topics: [
      {
        title: "Menstrual health and school attendance",
        body: "Product access, facilities and the information gap that turns a monthly event into lost education.",
      },
      {
        title: "Early and unwanted pregnancy",
        body: "Education, information and support pathways, delivered with partners qualified to provide them.",
      },
      {
        title: "Financial independence",
        body: "Women's own income as the precondition for most other choices — including the choice to leave.",
      },
      {
        title: "Widows and orphans",
        body: "Households carrying the same dependence with the fewest available options.",
      },
      {
        title: "Disability and stigma",
        body: "Access and participation for people living with physical and mental disability.",
      },
      {
        title: "Violence and safe environments",
        body: "Places where an issue can be raised, and a route to professional support when it is.",
      },
    ],
  },
  {
    slug: "youth-creative-rights",
    code: "F-11",
    title: "Youth & Creative Rights",
    navTitle: "Youth & Creative Rights",
    cluster: "community",
    short: "Young and creative work, on fair terms.",
    lede: "Young people and creative practitioners generate a large share of Kenya's economic and cultural energy while holding very little of the leverage. This field is about representation, fair terms and the practical structures that let that change.",
    context: [
      "The creative economy runs substantially on young labour under informal arrangements — unpaid exposure work, commissions with no contract, credit that is given and then quietly withdrawn.",
      "Individually, a young creator has almost no ability to renegotiate this. Collectively, and with the right structures, they have considerably more.",
    ],
    approach: [
      "YOCED works on the practical side of rights: understanding the terms you are agreeing to, having somewhere to go when they are broken, and building the collective structures that make an individual position stronger.",
      "This connects directly to the Intellectual Property field, which handles ownership, and to Business Development, which handles the operational side of turning creative practice into a business.",
      "Representation matters here too — young people appearing in the decisions that shape their own economic conditions rather than only in their outcomes.",
    ],
    activities: [
      {
        title: "Rights awareness",
        body: "Practical understanding of contracts, payment terms, credit and what recourse exists.",
      },
      {
        title: "Creative economy support",
        body: "Helping creative practice become a functioning business rather than a series of favours.",
      },
      {
        title: "Solidarity and collective structures",
        body: "Networks and groups that give individual practitioners a stronger negotiating position.",
      },
      {
        title: "Representation",
        body: "Getting young voices into the forums where decisions about youth economic conditions are made.",
      },
    ],
    communities: [
      "Young creative practitioners",
      "Film, media and production crews",
      "Designers, makers and performers",
      "Youth groups and networks",
    ],
    partnershipModels: [
      {
        title: "Industry partnership",
        body: "Work with YOCED on fair engagement standards inside a creative sector.",
      },
      {
        title: "Policy and advocacy",
        body: "Bring YOCED's community reach into policy work on youth economic conditions.",
      },
      {
        title: "Programme support",
        body: "Fund rights awareness and collective structure building in a specific sector.",
      },
    ],
    audience: ["Youth", "Creators", "Policy partners", "Industry bodies"],
    sdgs: [8, 10, 16],
    related: ["intellectual-property", "skills-education", "job-creation"],
    ventures: ["film", "fashion-and-design", "crafted-africa"],
    photos: [],
  },
  {
    slug: "technology",
    code: "F-12",
    title: "Technology & Digital Transformation",
    navTitle: "Technology & Digital",
    cluster: "community",
    short: "Technology as infrastructure for the rest of the work — not as a separate project.",
    lede: "YOCED uses technology where it removes a real constraint: reaching people, coordinating work, keeping records that hold up, and giving ventures a route to market beyond their immediate area. Technology that does not do one of those things does not get built.",
    context: [
      "Digital transformation programs frequently deliver tools that nobody uses, because the tool was the goal. In the communities YOCED works with, the binding constraints are connectivity, cost, device access and — most often — whether the thing being digitised was working in the first place.",
      "A venture with no defined process does not benefit from a system. It benefits from a defined process, and then from a system.",
    ],
    approach: [
      "We start from the constraint, not the technology. Coordination of field crews, record-keeping for a venture that needs to be fundable, market reach for a producer group — each of these has a technology answer only after the underlying operation is sound.",
      "Digital skills are treated as part of the Skills & Education field rather than as a separate track, so that they attach to specific work.",
      "YOCED's platform and digital infrastructure are built with SelfAwareTech, an independent technology company working as YOCED's technology partner.",
    ],
    activities: [
      {
        title: "Digital strategy",
        body: "Deciding what should be digitised, in what order, and what should not be.",
      },
      {
        title: "Operational systems",
        body: "Records, coordination and reporting tools for ventures and field operations.",
      },
      {
        title: "Market access",
        body: "Digital routes to customers for ventures and producer groups.",
      },
      {
        title: "Digital capability",
        body: "Practical digital skills attached to specific work, delivered through the skills programs.",
      },
      {
        title: "Data and reporting",
        body: "Recording work properly so that what YOCED reports to partners is documented rather than estimated.",
      },
    ],
    communities: [
      "Ventures and producer groups needing systems",
      "Young people building digital capability",
      "Partner organisations needing reliable reporting",
      "Field operations that need coordination",
    ],
    partnershipModels: [
      {
        title: "Technology partnership",
        body: "Contribute engineering, product or infrastructure capacity to YOCED's platform and programs.",
      },
      {
        title: "Digital inclusion",
        body: "Fund access — devices, connectivity, capability — where it is the actual constraint.",
      },
      {
        title: "Data and measurement",
        body: "Build the measurement layer that lets YOCED and its partners report on work honestly.",
      },
    ],
    audience: ["Technology partners", "Youth", "Organisations", "Funders"],
    sdgs: [4, 8, 9, 17],
    related: ["business-development", "skills-education", "climate-action"],
    ventures: ["film"],
    photos: ["machinery-yard", "partner-meeting"],
  },
];

export const programBySlug = new Map(programs.map((program) => [program.slug, program]));

export function getProgram(slug: string): Program | undefined {
  return programBySlug.get(slug);
}

export function clusterOf(program: Program): Cluster {
  const found = clusters.find((cluster) => cluster.id === program.cluster);
  if (!found) throw new Error(`Unknown cluster: ${program.cluster}`);
  return found;
}

export function programsInCluster(id: ClusterId): Program[] {
  return programs.filter((program) => program.cluster === id);
}
