/**
 * Props for the scroll-reveal effect.
 *
 * Deliberately a plain module rather than part of the client component: server
 * components call this during render, and anything exported from a "use client"
 * file becomes a client reference that cannot be invoked on the server.
 *
 * The markup this produces is inert until `RevealProvider` opts the document in,
 * so content is never hidden when JavaScript does not run.
 */
export function reveal(delayMs = 0) {
  return {
    "data-reveal": "pending",
    "data-reveal-delay": delayMs || undefined,
  } as const;
}
