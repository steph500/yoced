"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import type { Photo } from "@/lib/photos";

const ADVANCE_MS = 5200;

/** Hydration is the only "change" here, so there is nothing to subscribe to. */
const subscribeNever = () => () => {};

/**
 * A slideshow that steps through a set of frames in order.
 *
 * Built on a scroll-snap track rather than a transform carousel: every frame
 * and every caption is real markup in the document, so touch, trackpad and
 * find-in-page all work on the whole set without going through this component,
 * and the buttons only ever drive `scrollTo`. The controls are rendered after
 * mount rather than server-side, so nothing inert is shown.
 *
 * Advancing pauses on hover, on focus, when the tab is hidden, and entirely
 * under prefers-reduced-motion. There is also an explicit pause control, which
 * WCAG requires for anything that moves on its own.
 */
export function Sequence({
  photos,
  label,
  sizes = "(max-width: 1180px) 100vw, 1100px",
  priority = false,
  autoplay = true,
}: {
  photos: Photo[];
  /** Names the slideshow for screen readers — say what these frames are of. */
  label: string;
  sizes?: string;
  priority?: boolean;
  autoplay?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const count = photos.length;

  // False on the server and on the first client render, true from hydration
  // onward — so the controls exist only once they can actually do something.
  const mounted = useSyncExternalStore(subscribeNever, () => true, () => false);

  const goTo = useCallback((next: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;
    const target = ((next % count) + count) % count;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target * track.clientWidth, behavior: reduced || !smooth ? "auto" : "smooth" });
  }, [count]);

  // The track is the source of truth for which slide is showing: it moves
  // under a drag or a flick as well as under the buttons.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = track.clientWidth || 1;
        setIndex(Math.min(count - 1, Math.max(0, Math.round(track.scrollLeft / width))));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [count]);

  useEffect(() => {
    if (!autoplay || !mounted || paused || held || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => {
        const next = (current + 1) % count;
        goTo(next);
        return next;
      });
    }, ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [autoplay, mounted, paused, held, count, goTo]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
  };

  const active = photos[index] ?? photos[0];

  return (
    <div
      className="slides"
      role="group"
      aria-roledescription="slideshow"
      aria-label={label}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <div
        className="slides__track"
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`${label} — use the left and right arrow keys to move between frames`}
      >
        {photos.map((frame, position) => (
          <figure
            className="slides__slide"
            key={frame.slug}
            aria-roledescription="slide"
            aria-label={`${position + 1} of ${count}`}
          >
            <div className="shot" data-fit={frame.fit ?? "cover"}>
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                sizes={sizes}
                placeholder="blur"
                blurDataURL={frame.blurDataURL}
                priority={priority && position === 0}
                quality={82}
              />
            </div>
            <figcaption className="slides__caption">
              <span className="code">{String(position + 1).padStart(2, "0")}</span>
              <span>
                {frame.caption}
                {frame.credit ? <span className="figure__credit">{frame.credit}</span> : null}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {mounted && count > 1 ? (
        <div className="slides__bar">
          <span className="code slides__count" aria-hidden="true">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>

          <ol className="slides__dots">
            {photos.map((frame, position) => (
              <li key={frame.slug}>
                <button
                  type="button"
                  aria-current={position === index}
                  aria-label={`Go to frame ${position + 1}: ${frame.caption}`}
                  onClick={() => goTo(position)}
                />
              </li>
            ))}
          </ol>

          <div className="slides__nav">
            {autoplay ? (
              <button
                type="button"
                className="slides__btn"
                onClick={() => setPaused((value) => !value)}
                aria-label={paused ? "Resume the slideshow" : "Pause the slideshow"}
              >
                {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
              </button>
            ) : null}
            <button
              type="button"
              className="slides__btn"
              onClick={() => goTo(index - 1)}
              aria-label="Previous frame"
            >
              <ArrowLeft size={15} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="slides__btn"
              onClick={() => goTo(index + 1)}
              aria-label="Next frame"
            >
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>

          {/* Announced quietly, so a screen reader following the slideshow is
              told what it moved to without the caption being read twice. */}
          <p className="visually-hidden" role="status">
            Frame {index + 1} of {count}. {active.caption}
          </p>
        </div>
      ) : null}
    </div>
  );
}
