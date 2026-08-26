/**
 * The work YOCED can do with partners bringing an idea into an African context.
 *
 * This is a flexible collaboration shape, not a menu of fixed consulting
 * packages. Each engagement begins with what a partner needs to learn or move.
 */

export const executionCapabilities = [
  {
    title: "Creative & cultural",
    body: "Music, film, performance, storytelling, creator programmes, cultural projects, events and creative workshops — shaped with the people and context they are for.",
    accent: "saffron",
  },
  {
    title: "Technology & applied AI",
    body: "Web and mobile products, AI systems, automation, data layers, prototypes and technical architecture — from the first working version to the systems behind it.",
    accent: "slate",
  },
  {
    title: "Africa execution & partnerships",
    body: "Local discovery, relationship-building, workshops, participant recruitment, user testing, pilots and practical delivery — the work that makes an idea real here.",
    accent: "field",
  },
] as const;

export const executionSteps = [
  {
    code: "01",
    title: "Explore",
    body: "Start with the objective, the local context and the questions that still need answering.",
  },
  {
    code: "02",
    title: "Shape",
    body: "Turn insight into a useful direction through research, workshops, creative direction and technical scoping.",
  },
  {
    code: "03",
    title: "Pilot",
    body: "Test the smallest honest version: a prototype, programme, activation, MVP or limited-market experiment.",
  },
  {
    code: "04",
    title: "Build",
    body: "Make the thing: software, AI, creative production, operational systems or programme delivery.",
  },
  {
    code: "05",
    title: "Learn & scale",
    body: "Listen to what the work shows, gather feedback and decide what earns the next stage.",
  },
] as const;
