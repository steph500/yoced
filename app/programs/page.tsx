import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { AtlasIndex } from "@/components/AtlasIndex";
import { clusters, programs, programsInCluster } from "@/lib/programs";
import { photo } from "@/lib/photos";
import { sdgTitle } from "@/lib/sdg";

export const metadata: Metadata = {
  title: "Programs — twelve active fields",
  description:
    "YOCED works across twelve active fields: job creation, business development and BPM, capital, skills, financial literacy, intellectual property, agriculture, climate, health, women and community empowerment, youth and creative rights, and technology.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "YOCED programs — twelve active fields",
    description: "One organisation, twelve fields, and a direct route into each.",
    url: "/programs",
  },
};

const previews = Object.fromEntries(
  programs.map((program) => [program.slug, program.heroPhoto ? photo(program.heroPhoto) : undefined]),
);

const allSdgs = [...new Set(programs.flatMap((program) => program.sdgs))].sort((a, b) => a - b);

export default function ProgramsPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="programs-heading">
        <div className="hero__meta">
          <span className="label">Programs</span>
          <span className="label">Structured directory</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            F-01 → F-12
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="programs-heading">
          One mission. <em>Twelve</em> fields.
        </h1>
        <div className="hero__foot">
          <p>
            YOCED’s breadth is deliberate — the problems it addresses do not occur separately.
            This directory exists so that breadth never becomes your problem: go to the field
            that matches your mandate and ignore the rest.
          </p>
          <div className="btn-row">
            <Link href="/contact?topic=partnership" className="btn btn--solid">
              Partner on a field <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <AtlasIndex
        programs={programs}
        previews={previews}
        heading="Search, filter, and go straight to your field."
        intro="Filter by cluster or search across every activity, community and audience described in the twelve program records."
      />

      <section className="band wrap" aria-labelledby="grouping-heading">
        <div className="section-head">
          <div>
            <span className="label">Clusters</span>
            <h2 className="display t-1" id="grouping-heading" style={{ marginTop: 14 }}>
              Grouped by the problem, not the department.
            </h2>
          </div>
          <p>
            Four clusters of three. Most real programs cross at least two of them, which is why
            each field page carries its own cross-links.
          </p>
        </div>

        <div className="cols-2">
          {clusters.map((cluster) => (
            <div key={cluster.id} data-accent={cluster.accent}>
              <span className="label label--accent">{cluster.title}</span>
              <p style={{ marginTop: 10, fontSize: "1.05rem", maxWidth: "38ch" }}>{cluster.short}</p>
              <ul className="rows" style={{ marginTop: 14 }}>
                {programsInCluster(cluster.id).map((program) => (
                  <li key={program.slug}>
                    <Link
                      href={`/programs/${program.slug}`}
                      className="link"
                      style={{ display: "flex", justifyContent: "space-between", padding: "13px 0", width: "100%" }}
                    >
                      <span>{program.title}</span>
                      <span className="code muted">{program.code}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="band band--tight on-ink wrap" aria-labelledby="sdg-heading">
        <span className="label">Alignment</span>
        <h2 className="display t-2" id="sdg-heading" style={{ marginTop: 12, marginBottom: 10 }}>
          Sustainable Development Goals across the twelve fields.
        </h2>
        <p className="muted" style={{ maxWidth: "60ch", marginBottom: 26 }}>
          Mapped where a field genuinely works on the goal. Each program page lists only its own
          goals rather than the full set.
        </p>
        <ul className="sdgs">
          {allSdgs.map((goal) => (
            <li key={goal}>
              <b>{goal}</b>
              {sdgTitle(goal)}
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
