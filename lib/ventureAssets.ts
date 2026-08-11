/**
 * Publicly recoverable visual references from YOCED's archived website.
 * Only map an image when the asset is clearly tied to the named venture.
 */
const ventureImages: Record<string, string> = {
  "casa-furnishings": "/assets/ventures/casa-furnishings.webp",
  "slice-and-ice": "/assets/ventures/slice-and-ice.webp",
  "crafted-africa": "/assets/ventures/crafted-africa.webp",
};

export function ventureImage(slug: string) {
  return ventureImages[slug];
}
