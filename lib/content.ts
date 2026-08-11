export type Program = {
  slug: string;
  title: string;
  short: string;
  description: string;
  outcomes: string[];
  audience: string[];
  accent: string;
};

export const programs: Program[] = [
  {
    slug: "job-creation",
    title: "Job Creation",
    short: "Pathways from talent to dignified work.",
    description: "YOCED connects practical skills, enterprise development and partner networks to create sustainable employment pathways for young people.",
    outcomes: ["Employability pathways", "Enterprise-led job creation", "Partner and employer connections"],
    audience: ["Youth", "Employers", "Funders"],
    accent: "lime"
  },
  {
    slug: "business-development",
    title: "Business Development & BPM",
    short: "Turn ideas into ventures that can operate, grow and last.",
    description: "Our business process management approach helps entrepreneurs move from idea and prototype to structured operations, market readiness and sustainable growth.",
    outcomes: ["Business modelling", "Operational systems", "Market and growth readiness"],
    audience: ["Entrepreneurs", "SMEs", "Corporate partners"],
    accent: "blue"
  },
  {
    slug: "skills-education",
    title: "Skills & Education",
    short: "Learning designed around real economic opportunity.",
    description: "Training, mentorship and exposure programs help young people build professional, creative, digital and entrepreneurial capabilities that translate into action.",
    outcomes: ["Practical training", "Mentorship", "Professional development"],
    audience: ["Youth", "Training partners", "Schools"],
    accent: "coral"
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    short: "Help creators understand, protect and commercialize their work.",
    description: "YOCED supports awareness around intellectual property, creative ownership and the systems young innovators need to protect and derive value from original work.",
    outcomes: ["IP awareness", "Creator protection", "Commercialization readiness"],
    audience: ["Creators", "Innovators", "Legal partners"],
    accent: "violet"
  },
  {
    slug: "agriculture-food-systems",
    title: "Agriculture & Food Systems",
    short: "Youth enterprise, resilience and opportunity across the food economy.",
    description: "We develop pathways for young people to participate in agriculture and agribusiness while supporting resilient, resource-conscious and commercially viable food systems.",
    outcomes: ["Youth agribusiness", "Food security", "Resilient production"],
    audience: ["Farmers", "Youth", "Agriculture partners"],
    accent: "green"
  },
  {
    slug: "health-wellbeing",
    title: "Health & Wellbeing",
    short: "Healthy communities are a foundation for economic participation.",
    description: "YOCED works with partners on health awareness, access and community wellbeing, especially where health barriers directly limit education, livelihoods and opportunity.",
    outcomes: ["Health awareness", "Community wellbeing", "Access partnerships"],
    audience: ["Communities", "Health partners", "Youth"],
    accent: "aqua"
  },
  {
    slug: "women-community-empowerment",
    title: "Women & Community Empowerment",
    short: "Economic agency, safety and opportunity for women and vulnerable communities.",
    description: "This program brings together financial independence, menstrual health access, education, protection, disability inclusion and long-term support pathways for women, girls and vulnerable groups.",
    outcomes: ["Economic empowerment", "Girls' education support", "Protection and inclusion"],
    audience: ["Women & girls", "Community organizations", "Funders"],
    accent: "rose"
  },
  {
    slug: "financial-literacy",
    title: "Financial Literacy & Money Mastery",
    short: "Make financial capability part of everyday economic empowerment.",
    description: "YOCED helps young people and entrepreneurs build practical understanding of money, planning, business finance and the habits required for long-term economic resilience.",
    outcomes: ["Money management", "Business finance literacy", "Financial resilience"],
    audience: ["Youth", "Entrepreneurs", "Financial partners"],
    accent: "gold"
  },
  {
    slug: "technology",
    title: "Technology & Digital Transformation",
    short: "Use technology as infrastructure for access, scale and better systems.",
    description: "From digital strategy to practical tools, YOCED uses technology to expand access, improve operations and give youth-led ideas stronger routes to market and scale.",
    outcomes: ["Digital strategy", "Technology enablement", "Data-conscious systems"],
    audience: ["Youth", "Organizations", "Technology partners"],
    accent: "electric"
  },
  {
    slug: "youth-creative-rights",
    title: "Youth & Creative Rights",
    short: "Build an economy where young and creative voices can participate fairly.",
    description: "We advocate for opportunity, solidarity, representation and practical systems that help youth and creative communities participate in social and economic development.",
    outcomes: ["Youth representation", "Creative economy support", "Rights awareness"],
    audience: ["Youth", "Creators", "Policy partners"],
    accent: "orange"
  },
  {
    slug: "climate-action",
    title: "Climate Action & Resilience",
    short: "Connect climate responsibility with livelihoods and local opportunity.",
    description: "Our climate work spans renewable energy, biodiversity, circular economy thinking, resilient agriculture, environmental awareness and practical adaptation strategies.",
    outcomes: ["Climate resilience", "Circular economy", "Renewable and nature-positive pathways"],
    audience: ["Communities", "Climate partners", "Youth"],
    accent: "mint"
  },
  {
    slug: "capital-rotational-funding",
    title: "Capital & Rotational Funding",
    short: "Create practical funding pathways that keep opportunity moving.",
    description: "YOCED's rotational funding model is designed to help viable youth ventures access support while recycling value back into the ecosystem so more ideas can move forward.",
    outcomes: ["Venture support", "Capital recycling", "Sustainable funding pathways"],
    audience: ["Entrepreneurs", "Funders", "Investment partners"],
    accent: "yellow"
  }
];

export const ventures = [
  { name: "Casa Furnishings", field: "Furniture & interiors", status: "Active" },
  { name: "Sweet & Fancy", field: "Food & creative enterprise", status: "Active" },
  { name: "Fashion & Design", field: "Creative economy", status: "Active" },
  { name: "Film", field: "Media & production", status: "Active" },
  { name: "Slice & Ice", field: "Food enterprise", status: "Active" },
  { name: "Crafted Africa", field: "Craft & design", status: "Active" }
];

export const partners = [
  "MKJ Law LLP",
  "254 Brewing Co",
  "Kenbright",
  "Twenty Fifth Hive",
  "Njoki Karuoya Creative & Media Centre",
  "PesaSwap",
  "SelfAwareTech"
];

export const pathways = [
  { href: "/programs", label: "Explore programs", eyebrow: "For communities & youth", copy: "Find the exact YOCED program, support pathway or field that matches your goal." },
  { href: "/partners", label: "Partner with YOCED", eyebrow: "For funders & organizations", copy: "Navigate directly to a program area, partnership opportunity or cross-sector initiative." },
  { href: "/ventures", label: "See ventures", eyebrow: "For entrepreneurs & collaborators", copy: "Explore businesses and creative ventures connected to the YOCED ecosystem." }
];

export const team = [
  { name: "Dovies Ebbiey", role: "Founder & President", initials: "DE" },
  { name: "Stefan Juma", role: "Co-founder & Technology Lead", initials: "SJ" }
];
