import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Figure, Plate } from "@/components/Photo";
import { photo, photos } from "@/lib/photos";
import { getProgram } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Field work",
  description:
    "The YOCED evidence archive: field production from land preparation to value addition, institutional presence including the National Productivity and Performance Conference 2026, and the partner sites and organisations YOCED works with.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "YOCED field work",
    description: "Documented work, institutional presence and network — photographed on site.",
    url: "/work",
  },
};

/**
 * The archive is organised in three chapters, because YOCED's evidence is of
 * three kinds: what it produces, where it is present, and who it works with.
 */
const chapters = [
  {
    id: "season",
    code: "I",
    title: "The season",
    body: "One continuous operation, in order: land opened, seed planted, crop tended, harvest lifted, produce dried and sorted, then processed into something with a label on it.",
  },
  {
    id: "room",
    code: "II",
    title: "In the room",
    body: "Development work is decided in rooms as often as in fields. This chapter records where YOCED has been present and in what capacity.",
  },
  {
    id: "network",
    code: "III",
    title: "The network",
    body: "The sites and organisations YOCED works alongside. Shown as relationships, not as endorsements.",
  },
] as const;

const sequence = [
  {
    chapter: "season",
    code: "S-01",
    title: "Opening the land",
    body: "The season starts with land preparation. A tractor pass decides how much ground one operation can realistically work; hand preparation finishes the headlands and the corners a machine cannot reach.",
    tags: ["land", "mechanisation"],
    field: "agriculture-food-systems",
  },
  {
    chapter: "season",
    code: "S-02",
    title: "Planting",
    body: "Seed goes in behind the plough, along opened ridges, with the planting team spread across the field. This is coordinated, scheduled work — which is what makes it employment rather than chores.",
    tags: ["planting"],
    field: "job-creation",
  },
  {
    chapter: "season",
    code: "S-03",
    title: "The crop",
    body: "Groundnuts, maize and horticulture. Weeding is the labour peak of the season and the point at which a crop is either kept or lost.",
    tags: ["crop"],
    field: "agriculture-food-systems",
  },
  {
    chapter: "season",
    code: "S-04",
    title: "Harvest",
    body: "Groundnut plants are lifted with the pods still attached, then collected from the field. Timing here is unforgiving in both directions.",
    tags: ["harvest"],
    field: "agriculture-food-systems",
  },
  {
    chapter: "season",
    code: "S-05",
    title: "After the field",
    body: "Drying, threshing and sorting. Post-harvest handling gets less attention than growing and decides more of the price.",
    tags: ["post-harvest"],
    field: "climate-action",
  },
  {
    chapter: "season",
    code: "S-06",
    title: "Value addition",
    body: "Groundnuts processed and jarred as peanut butter. This is the step that changes what a harvest is worth, and the reason the enterprise work and the agriculture work belong to the same organisation.",
    tags: ["value-addition"],
    field: "business-development",
  },
  {
    chapter: "season",
    code: "S-07",
    title: "Livestock and kitchen plots",
    body: "Poultry cycles, nursery beds and household vegetable plots run alongside the main season, so income does not have to wait for one harvest.",
    tags: ["livestock", "household"],
    field: "agriculture-food-systems",
  },
  {
    chapter: "season",
    code: "S-08",
    title: "Groups and training",
    body: "Training sessions, farming-group mobilisation and working meetings. Most of the field work only happens because this part happened first.",
    tags: ["training"],
    field: "skills-education",
  },
  {
    chapter: "room",
    code: "R-01",
    title: "National Productivity and Performance Conference, 2026",
    body: "YOCED attended the National Productivity and Performance Conference at the Kenya School of Government, Lower Kabete, from 17 to 19 June 2026, under the theme Productivity for Fiscal Sustainability and Efficient Service Delivery. Dovies Ebbiey was accredited as a delegate in his capacity as Founder. Attendance is what the pass evidences — nothing beyond it is claimed, and no endorsement by the convenors or by any speaker is implied.",
    tags: ["conference"],
    field: "business-development",
  },
  {
    chapter: "room",
    code: "R-02",
    title: "Working visits",
    body: "Meetings with institutions, partners and collaborators. These are the conversations in which programme scope, access and delivery actually get agreed.",
    tags: ["meeting"],
    field: "technology",
  },
  {
    chapter: "network",
    code: "N-01",
    title: "Partner farms",
    body: "Production sites YOCED works alongside rather than operates. The horticulture here runs at a scale and standard that a single household rarely reaches on its own, which is the argument for organising producers into groups.",
    tags: ["partner-farm"],
    field: "agriculture-food-systems",
  },
  {
    chapter: "network",
    code: "N-02",
    title: "Organisations",
    body: "The people and organisations in YOCED's network, including a Guinness World Records tree-planting attempt run by Green Earth Ambassadors Foundation, which YOCED attended in support.",
    tags: ["partner", "climate"],
    field: "climate-action",
  },
];

export default function WorkPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="work-heading">
        <div className="hero__meta">
          <span className="label">Evidence archive</span>
          <span className="label">{photos.length} frames</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            Three chapters
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="work-heading">
          The work, <em>documented</em>.
        </h1>
        <div className="hero__foot">
          <p>
            What YOCED produces, where it has been present, and who it works with. Captions
            describe what is in the frame and stop there — no beneficiary counts, no yields, no
            outcome claims. Anything YOCED did not photograph carries its source.
          </p>
          <div className="btn-row">
            <Link href="/programs/agriculture-food-systems" className="btn btn--solid">
              The agriculture field <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Plate photo={photo("machinery-yard")} priority />

      <section className="band band--tight wrap">
        <div className="railed">
          <span className="label">Why it matters</span>
          <div className="prose" style={{ maxWidth: "62ch" }}>
            <p>
              Development organisations are usually assessed on numbers they cannot substantiate.
              YOCED publishes what it can evidence instead: the work, the rooms it has been in,
              and the organisations it works alongside.
            </p>
            <p>
              What follows runs in three chapters. <strong>The season</strong> is one continuous
              operation — land opened, seed planted, crop tended, harvest lifted, produce dried
              and sorted, then processed. Read end to end it is the argument for why the
              agriculture, employment and enterprise fields sit in one organisation.
            </p>
            <p>
              <strong>In the room</strong> records where YOCED has been present and in what
              capacity. <strong>The network</strong> shows the sites and organisations YOCED works
              alongside. Presence and association are exactly that — neither is presented as
              partnership, funding or endorsement.
            </p>
          </div>
        </div>
      </section>

      {sequence.map((step, index) => {
        const frames = photos.filter((frame) => step.tags.some((tag) => frame.tags.includes(tag)));
        if (frames.length === 0) return null;
        const program = getProgram(step.field);
        const chapter = chapters.find((item) => item.id === step.chapter);
        const opensChapter = index === 0 || sequence[index - 1].chapter !== step.chapter;
        return (
          <div key={step.code}>
          {opensChapter && chapter ? (
            <section className="band band--tight on-ink" aria-labelledby={`${chapter.id}-heading`}>
              <div className="wrap railed">
                <span className="label label--accent">Chapter {chapter.code}</span>
                <div>
                  <h2 className="display t-1" id={`${chapter.id}-heading`}>
                    {chapter.title}
                  </h2>
                  <p className="muted" style={{ maxWidth: "58ch", marginTop: 16 }}>
                    {chapter.body}
                  </p>
                </div>
              </div>
            </section>
          ) : null}
          <section className="band band--tight" aria-labelledby={`${step.code}-heading`}>
            <div className="wrap">
              <div className="section-head">
                <div>
                  <span className="label">{step.code}</span>
                  <h2 className="display t-2" id={`${step.code}-heading`} style={{ marginTop: 12 }}>
                    {step.title}
                  </h2>
                </div>
                <div>
                  <p style={{ marginBottom: 14 }}>{step.body}</p>
                  {program ? (
                    <Link href={`/programs/${program.slug}`} className="link">
                      {program.code} {program.title} <ArrowUpRight size={15} aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </div>

              <div className="sheet">
                {frames.map((frame, frameIndex) => (
                  <Figure
                    key={frame.slug}
                    photo={frame}
                    index={frameIndex + 1}
                    sizes="(max-width: 520px) 100vw, (max-width: 760px) 50vw, 25vw"
                  />
                ))}
              </div>
            </div>
          </section>
          </div>
        );
      })}

      <section className="band wrap">
        <div className="cta-panel" data-accent="field">
          <div>
            <span className="label">Documentation</span>
            <h2>If a partnership needs measurement, building it is part of the scope.</h2>
            <p>
              YOCED does not publish impact figures it has not verified. Where a partner requires
              evidence, the measurement layer is designed into the work rather than asserted
              afterwards.
            </p>
          </div>
          <Link href="/for/funders" className="btn">
            For funders <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
