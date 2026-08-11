"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, RotateCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Route error", error);
  }, [error]);

  return (
    <div className="wrap state">
      <span className="label">Error / something broke on our side</span>
      <h1>That did not load.</h1>
      <p>
        This is a fault in the site rather than anything you did. Reloading usually clears it. If
        it keeps happening, tell us at yoced.ke@gmail.com and mention what you were trying to
        reach.
      </p>
      {error.digest ? (
        <p className="code muted">Reference {error.digest}</p>
      ) : null}
      <div className="btn-row" style={{ marginTop: 10 }}>
        <button type="button" className="btn btn--solid" onClick={reset}>
          Try again <RotateCw size={16} aria-hidden="true" />
        </button>
        <Link href="/" className="btn">
          Back to the start <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
