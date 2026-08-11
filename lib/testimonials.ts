/**
 * "Words of Wisdom" recovered from YOCED's previous website screenshots
 * (IMG_4638 through IMG_4643, archived from the 2022 yoced.com profile).
 * Wording is preserved; only obvious spacing around punctuation is normalised.
 * These are perspectives from the YOCED archive, not claims of current funding.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role?: string;
  organisation?: string;
  portrait?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Dovies Ebbiey",
    role: "Entrepreneur",
    portrait: "/assets/voices/dovies.webp",
    quote:
      "We live at a time where technology and innovation is moving on an unbelievable pace. We need to support the young minds of the world and encourage their curious selves to keep on changing the world and make it a place we would love to call home",
  },
  {
    name: "Nzisa Matulu",
    role: "Journalist",
    portrait: "/assets/voices/nzisa.webp",
    quote:
      "I am a youth project enthusiast and keep at the pioneering front of technology advancement. My goal is to have equity and equality of youths to all growth opportunities. I have partnered with international entities to bring forth Employment & Empowerment opportunities, future technologies and their implementation in the African continent.",
  },
  {
    name: "Fundi Ngundi",
    role: "Economist & Development Professional Consultant",
    portrait: "/assets/voices/fundi.webp",
    quote:
      "Africa has the youngest population in the world, and is expected to grow exceeding all other continents. The economic implications of this will be huge and investors from all around the globe need to take note of this untapped market and be ahead of the curve.",
  },
  {
    name: "Tim Janot",
    role: "Head Investment and Portfolio Manager",
    portrait: "/assets/voices/tim.webp",
    quote:
      "I am exited to see where Africa ends up in the next Decade compared to other parts of the world. I help businesses upscale and navigate markets to maximize on profitability.",
  },
];

export const hasTestimonials = testimonials.length > 0;
