"use client";

import { useEffect } from "react";

/**
 * Scroll reveal, built so it can never hide content.
 *
 * Markup ships with `data-reveal="pending"` but no hiding styles. The hiding
 * rule is scoped to `html.js-reveal`, and this component only adds that class
 * once it has confirmed IntersectionObserver support and reduced motion is off.
 * If the script fails, is blocked, or the user prefers reduced motion, every
 * element simply stays visible.
 */
export function RevealProvider() {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          window.setTimeout(() => el.setAttribute("data-reveal", "shown"), delay);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const scan = () => {
      for (const el of document.querySelectorAll('[data-reveal="pending"]')) {
        observer.observe(el);
      }
    };

    scan();
    // Re-scan after client navigation swaps the tree.
    const mutation = new MutationObserver(scan);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
