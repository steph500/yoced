/**
 * Shareable stories and initiatives that sit within a YOCED field.
 *
 * These are intentionally separate from programs, ventures and leadership.
 * A spotlight can be a guest, an independent initiative or a creative practice;
 * attaching it to a field gives visitors context without overstating ownership.
 */

export type FieldSpotlight = {
  slug: string;
  title: string;
  label: string;
  field: string;
  lede: string;
  hero: { src: string; width: number; height: number; alt: string };
  sections: { title: string; body: string[] }[];
  formats: string[];
  gallery: { src: string; width: number; height: number; alt: string }[];
};

export const fieldSpotlights: FieldSpotlight[] = [
  {
    slug: "esha-radio",
    title: "Esha’s Radio",
    label: "Featured initiative / Women & Community Empowerment",
    field: "women-community-empowerment",
    lede:
      "A space where sound meets stories, art, culture and everything in between.",
    hero: {
      src: "/assets/spotlights/esha-radio-logo.webp",
      width: 750,
      height: 750,
      alt: "Esha’s Radio logo with a green radio illustration on a peach circle",
    },
    sections: [
      {
        title: "More than just sound",
        body: [
          "Esha’s Radio is a space for music lovers, curious minds and anyone who believes music is more than just sound.",
          "Born from a genuine love for music and the stories behind it, Esha’s Radio brings together carefully curated playlists, guest DJ mixes, artist stories, poetry, music history and fun facts that make listeners hear their favourite songs a little differently.",
        ],
      },
      {
        title: "A place to discover",
        body: [
          "From discovering a new groove to learning the story behind a legendary song, Esha’s Radio is about enjoying music, discovering something new and celebrating the culture that surrounds it.",
          "The programme will include monthly themed playlists, guest DJ mixes, artist stories, music history, fun music facts, poetry and plenty of musical discoveries.",
        ],
      },
      {
        title: "Growing with creativity",
        body: [
          "Esha’s Radio is looking beyond music, exploring different art forms and creating a space where music can meet poetry, visual art, storytelling and other forms of creative expression.",
          "Because creativity does not live in one box.",
        ],
      },
    ],
    formats: [
      "Monthly themed playlists",
      "Guest DJ mixes",
      "Artist stories and music history",
      "Poetry, visual art and storytelling",
    ],
    gallery: [
      {
        src: "/assets/spotlights/esha-radio-portrait-one.webp",
        width: 1080,
        height: 1920,
        alt: "A portrait of a woman wearing a black top and a purple pendant necklace",
      },
      {
        src: "/assets/spotlights/esha-radio-portrait-two.webp",
        width: 1080,
        height: 1920,
        alt: "A portrait of a woman wearing a sleeveless dark top",
      },
      {
        src: "/assets/spotlights/esha-radio-portrait-three.webp",
        width: 1080,
        height: 1920,
        alt: "A smiling portrait of a woman wearing a patterned top",
      },
    ],
  },
];

export function getFieldSpotlight(slug: string) {
  return fieldSpotlights.find((spotlight) => spotlight.slug === slug);
}

export function spotlightsForField(field: string) {
  return fieldSpotlights.filter((spotlight) => spotlight.field === field);
}
