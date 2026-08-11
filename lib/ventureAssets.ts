/**
 * Venture imagery.
 *
 * Three low-resolution frames were recovered from YOCED's archived website
 * (156-702px wide, heavily recompressed). Displayed at card size they were
 * blurry, badly cropped or too dark to read, and having imagery on three of six
 * ventures broke the grid into two visual systems.
 *
 * So the map is empty and all six ventures render the same typographic cipher
 * card. Add a real photograph here — 1200px wide or better — and that venture
 * will use it automatically; the cipher stays as the fallback.
 */
const ventureImages: Record<string, string> = {};

export function ventureImage(slug: string) {
  return ventureImages[slug];
}
