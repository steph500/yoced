"use client";

import Link from "next/link";
import Image from "next/image";
import { useDeferredValue, useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { clusters, type Program } from "@/lib/programs";
import type { Photo } from "@/lib/photos";

type Props = {
  programs: Program[];
  /** Hero frame per program slug, for the desktop preview pane. */
  previews: Record<string, Photo | undefined>;
  heading: string;
  intro?: string;
};

/**
 * The Impact Atlas.
 *
 * Thirteen fields presented as a ruled index rather than a grid of cards, filtered
 * by cluster and searchable across every text field in the program record. On
 * wide screens, hovering or focusing a row shows that field's photograph in a
 * sticky preview pane — additive only, so the index is complete without it.
 */
export function AtlasIndex({ programs, previews, heading, intro }: Props) {
  const [query, setQuery] = useState("");
  const [cluster, setCluster] = useState<string | null>(null);
  const [active, setActive] = useState<Program>(programs[0]);
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const needle = deferredQuery.trim().toLowerCase();
    return programs.filter((program) => {
      if (cluster && program.cluster !== cluster) return false;
      if (!needle) return true;
      return [
        program.title,
        program.code,
        program.short,
        program.lede,
        ...program.audience,
        ...program.communities,
        ...program.activities.map((item) => `${item.title} ${item.body}`),
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [programs, deferredQuery, cluster]);

  const activeCluster = clusters.find((item) => item.id === active.cluster);
  const preview = previews[active.slug];

  return (
    <section className="band on-ink" id="atlas" aria-labelledby="atlas-heading">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="label">Impact Atlas / {programs.length} active fields</span>
            <h2 className="display t-1" id="atlas-heading" style={{ marginTop: 14 }}>
              {heading}
            </h2>
          </div>
          {intro ? <p>{intro}</p> : null}
        </div>

        <div className="atlas__controls">
          <label className="atlas__search">
            <Search size={17} aria-hidden="true" />
            <span className="visually-hidden">Search the atlas</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search climate, groundnuts, IP, funding…"
            />
          </label>

          <ul className="atlas__filters">
            <li>
              <button
                type="button"
                className="chip"
                aria-pressed={cluster === null}
                onClick={() => setCluster(null)}
              >
                All fields
              </button>
            </li>
            {clusters.map((item) => (
              <li key={item.id} data-accent={item.accent}>
                <button
                  type="button"
                  className="chip"
                  aria-pressed={cluster === item.id}
                  onClick={() => setCluster((current) => (current === item.id ? null : item.id))}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="atlas__layout">
          <div>
            <p className="visually-hidden" role="status">
              {results.length} of {programs.length} fields shown.
            </p>
            {results.length === 0 ? (
              <p className="atlas__empty">
                Nothing matches “{query}”. YOCED works across thirteen fields — try a broader
                term, or{" "}
                <Link href="/contact" className="link">
                  ask us directly
                </Link>
                .
              </p>
            ) : (
              <ul className="atlas__index">
                {results.map((program) => {
                  const accent = clusters.find((item) => item.id === program.cluster)?.accent;
                  return (
                    <li
                      key={program.slug}
                      className="atlas__row"
                      data-accent={accent}
                      onMouseEnter={() => setActive(program)}
                      onFocus={() => setActive(program)}
                    >
                      <Link href={`/programs/${program.slug}`}>
                        <span className="code">{program.code}</span>
                        <span>
                          <span className="atlas__title">{program.title}</span>
                          <span className="atlas__short">{program.short}</span>
                        </span>
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <aside className="atlas__preview" aria-hidden="true" data-accent={activeCluster?.accent}>
            <div className="shot">
              {preview ? (
                <Image
                  key={preview.slug}
                  src={preview.src}
                  alt=""
                  fill
                  sizes="420px"
                  placeholder="blur"
                  blurDataURL={preview.blurDataURL}
                />
              ) : null}
            </div>
            <div className="atlas__preview-meta">
              <span className="label label--accent">
                {active.code} · {activeCluster?.title}
              </span>
              <p className="muted" style={{ fontSize: ".92rem", margin: 0 }}>
                {preview ? preview.caption : active.short}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
