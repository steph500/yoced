/**
 * Individual profiles published by YOCED.
 *
 * Keep these profiles separate from `team.ts`: a person can be featured for
 * their independent practice or venture without being presented as YOCED
 * leadership. New profiles only need an entry here and their own imagery under
 * `/public/assets/people`.
 */

export type Person = {
  slug: string;
  name: string;
  role: string;
  organisation: string;
  eyebrow: string;
  lede: string;
  portrait: { src: string; width: number; height: number; alt: string };
  story: { title: string; body: string[] }[];
  practiceAreas: string[];
  gallery: { src: string; width: number; height: number; alt: string; caption: string }[];
};

export const people: Person[] = [
  {
    slug: "iman-kagumba",
    name: "Iman Kagumba",
    role: "Founder & Lead Muscle Therapist",
    organisation: "Refined Therapy (Tiba Misuli)",
    eyebrow: "Founder profile / movement & recovery",
    lede:
      "Iman Kagumba brings high-performance athletic experience and therapeutic science together to help the body heal, recover and perform as one connected system.",
    portrait: {
      src: "/assets/people/iman-kagumba-portrait.webp",
      width: 1066,
      height: 1600,
      alt: "Iman Kagumba wearing a pink cycling jersey against a black background",
    },
    story: [
      {
        title: "The athlete’s perspective",
        body: [
          "A former professional mountain biker and trained social scientist, Iman spent years in competitive sport experiencing firsthand how structural muscular imbalances can cause chronic injuries, impair movement and restrict human potential.",
          "That lived athletic experience is the starting point for her work: understanding the body not as a collection of isolated parts, but as one functional system.",
        ],
      },
      {
        title: "The therapeutic discipline",
        body: [
          "To investigate the root causes of physical performance limitations, Iman combined her athletic insight with academic research in athlete training science, acupressure, sports rehabilitation and trigger point therapy.",
          "Today, she channels this specialised expertise into the Refined Therapy Doctrine — an evidence-based, clinical approach to muscular health and recovery.",
        ],
      },
    ],
    practiceAreas: [
      "Personal rehabilitation journeys",
      "Corporate wellness optimisation",
      "Advanced sports therapy",
    ],
    gallery: [
      {
        src: "/assets/people/iman-kagumba-bike-portrait.webp",
        width: 1600,
        height: 1200,
        alt: "Iman Kagumba sitting beside a mountain bike while wearing a cycling helmet",
        caption: "Iman with a mountain bike.",
      },
      {
        src: "/assets/people/iman-kagumba-community.webp",
        width: 1600,
        height: 1200,
        alt: "A group of cyclists sitting and standing together beside bicycle racks",
        caption: "A cycling community gathered beside the trailhead.",
      },
      {
        src: "/assets/people/iman-kagumba-riders.webp",
        width: 1920,
        height: 1280,
        alt: "Four mountain bikers standing with their bicycles on a dirt trail beneath a cloudy sky",
        caption: "Riders at rest on a mountain trail.",
      },
    ],
  },
];

export function getPerson(slug: string) {
  return people.find((person) => person.slug === slug);
}
