"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import type { Program } from "@/lib/content";

export function ImpactAtlas({ programs }: { programs: Program[] }) {
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return programs;
    return programs.filter((program) =>
      [program.title, program.short, program.description, ...program.audience, ...program.outcomes]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [programs, query]);

  return (
    <section className="atlas-section" id="atlas">
      <div className="section-head">
        <div>
          <span className="kicker">Impact Atlas / 12 active fields</span>
          <h2>Go directly to the work that matters to you.</h2>
        </div>
        <label className="atlas-search">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search youth, climate, funding..." />
        </label>
      </div>

      <div className="atlas-grid">
        {filtered.map((program, index) => (
          <motion.article
            key={program.slug}
            className={`atlas-card accent-${program.accent}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.25) }}
          >
            <div className="atlas-index">{String(index + 1).padStart(2, "0")}</div>
            <h3>{program.title}</h3>
            <p>{program.short}</p>
            <div className="atlas-audience">
              {program.audience.slice(0, 2).map((item) => <span key={item}>{item}</span>)}
            </div>
            <Link href={`/programs/${program.slug}`} aria-label={`Explore ${program.title}`}>
              Explore field <ArrowUpRight size={17} />
            </Link>
          </motion.article>
        ))}
      </div>
      {filtered.length === 0 && <p className="empty-state">No exact match. Try a broader field or audience.</p>}
    </section>
  );
}
