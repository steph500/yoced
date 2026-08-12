/** Shared inquiry vocabulary, used by the form, the server action and the routes that deep-link into it. */

export type TopicId =
  | "program"
  | "partnership"
  | "funding"
  | "youth"
  | "entrepreneur"
  | "community"
  | "corporate"
  | "technology"
  | "media";

export type Topic = {
  id: TopicId;
  label: string;
  /** Prefix used in the subject line so inquiries sort themselves in the inbox. */
  subject: string;
  hint: string;
};

export const topics: Topic[] = [
  {
    id: "program",
    label: "Program inquiry",
    subject: "Program",
    hint: "A question about one of the thirteen fields.",
  },
  {
    id: "partnership",
    label: "Partnership",
    subject: "Partnership",
    hint: "Your organisation wants to work with YOCED on a field.",
  },
  {
    id: "funding",
    label: "Funding",
    subject: "Funding",
    hint: "Grant, capital, or a rotational funding pool.",
  },
  {
    id: "youth",
    label: "Youth support",
    subject: "Youth",
    hint: "Skills, work, placement or mentorship.",
  },
  {
    id: "entrepreneur",
    label: "Enterprise support",
    subject: "Enterprise",
    hint: "You are building or running a business.",
  },
  {
    id: "community",
    label: "Community group",
    subject: "Community",
    hint: "A farming, women's, savings or youth group.",
  },
  {
    id: "corporate",
    label: "Corporate collaboration",
    subject: "Corporate",
    hint: "CSR, supply chain or an employment pipeline.",
  },
  {
    id: "technology",
    label: "Technology",
    subject: "Technology",
    hint: "Engineering, product, infrastructure or data.",
  },
  {
    id: "media",
    label: "Media & general",
    subject: "Media",
    hint: "Press, speaking, or anything else.",
  },
];

export const topicIds = topics.map((topic) => topic.id);

export function isTopicId(value: unknown): value is TopicId {
  return typeof value === "string" && (topicIds as string[]).includes(value);
}

export function topicById(id: TopicId): Topic {
  const found = topics.find((topic) => topic.id === id);
  if (!found) throw new Error(`Unknown topic: ${id}`);
  return found;
}
