import Image from "next/image";
import type { Photo } from "@/lib/photos";
import { reveal } from "@/lib/reveal";

const shared = (photo: Photo) => ({
  src: photo.src,
  alt: photo.alt,
  placeholder: "blur" as const,
  blurDataURL: photo.blurDataURL,
});

/**
 * A cropped frame that fills its container. The parent controls aspect ratio,
 * which is what lets the mosaic and reel layouts stay uneven on purpose.
 */
export function Shot({
  photo,
  sizes = "(max-width: 760px) 100vw, 45vw",
  priority = false,
  className = "",
}: {
  photo: Photo;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`shot ${className}`.trim()} data-fit={photo.fit ?? "cover"}>
      <Image {...shared(photo)} alt={photo.alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}

/** A shot plus its caption and reference code. */
export function Figure({
  photo,
  sizes,
  index,
  priority,
  animate = true,
  className = "",
}: {
  photo: Photo;
  sizes?: string;
  index?: number;
  priority?: boolean;
  /** Off inside horizontally scrolled containers, where a vertical reveal reads wrong. */
  animate?: boolean;
  className?: string;
}) {
  return (
    <figure className={`figure ${className}`.trim()} {...(animate ? reveal() : {})}>
      <Shot photo={photo} sizes={sizes} priority={priority} />
      <figcaption>
        <span className="code">{index === undefined ? "◆" : String(index).padStart(3, "0")}</span>
        <span>
          {photo.caption}
          {photo.credit ? <span className="figure__credit">{photo.credit}</span> : null}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Full-bleed documentary band. The source frames are natively about 20:9, so
 * this crop is the one the photographs were actually composed for.
 */
export function Plate({
  photo,
  priority = false,
  caption = true,
  sizes = "100vw",
}: {
  photo: Photo;
  priority?: boolean;
  caption?: boolean;
  sizes?: string;
}) {
  return (
    <figure className="figure plate-figure">
      <div className="plate">
        <Image {...shared(photo)} alt={photo.alt} fill sizes={sizes} priority={priority} quality={82} />
      </div>
      {caption ? (
        <figcaption className="plate__caption">
          {/* Attribution has to travel with the frame here too — a full-bleed
              plate is the most prominent place an image appears on the site. */}
          <span className="code">{photo.credit ? photo.credit.toUpperCase() : "FIELD ARCHIVE"}</span>
          <span>{photo.caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Horizontal reel, used in place of a three-column gallery. */
export function Reel({ photos, children }: { photos: Photo[]; children?: React.ReactNode }) {
  return (
    <div className="reel" tabIndex={0} role="group" aria-label="Field photography, scrollable">
      {photos.map((photo, index) => (
        <Figure
          key={photo.slug}
          photo={photo}
          index={index + 1}
          animate={false}
          sizes="(max-width: 760px) 84vw, 520px"
        />
      ))}
      {children ? <div className="reel__end">{children}</div> : null}
    </div>
  );
}

/** Deliberately uneven grid so a page of photographs does not read as thumbnails. */
export function Mosaic({ photos, sizes = "(max-width: 760px) 50vw, 30vw" }: { photos: Photo[]; sizes?: string }) {
  return (
    <div className="mosaic">
      {photos.map((photo) => (
        <Shot key={photo.slug} photo={photo} sizes={sizes} />
      ))}
    </div>
  );
}
