/**
 * Testimonials.
 *
 * YOCED's previous website carried testimonials attributed to Dovies Ebbiey,
 * Nzisa Matulu, Fundi Ngundi and Tim Janot. The exact wording of those quotes
 * could not be recovered from the material available for this rebuild, and a
 * testimonial that is paraphrased or reconstructed is not a testimonial.
 *
 * So this list stays empty. Every testimonial surface on the site checks it and
 * renders nothing when it is empty — there is no gap, no placeholder and no
 * invented quote.
 *
 * To restore them: add entries below with the verbatim quote and the person's
 * confirmed role. The section will appear automatically wherever it is used.
 */

export type Testimonial = {
  /** Verbatim quote. Never paraphrase into this field. */
  quote: string;
  name: string;
  role?: string;
  organisation?: string;
};

export const testimonials: Testimonial[] = [];

export const hasTestimonials = testimonials.length > 0;
