import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Plate } from "@/components/Photo";
import { Sequence } from "@/components/Sequence";
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
 * The archive is organised in four chapters, because YOCED's evidence is of
 * four kinds: the creative work it supports, what it produces on land, where it
 * has been present, and who it works alongside.
 */
const chapters = [
  {
    id: "stage",
    code: "I",
    title: "On the stage",
    body: "The creative sector, which is where a great deal of young economic activity actually happens: the heritage the work comes from, the rooms it is performed in, and the trade that sits behind it.",
  },
  {
    id: "season",
    code: "II",
    title: "The season",
    body: "One continuous operation, in order: land opened, seed planted, crop tended, harvest lifted, produce dried and sorted, then processed into something with a label on it.",
  },
  {
    id: "room",
    code: "III",
    title: "In the room",
    body: "Development work is decided in rooms as often as in fields. This chapter records where YOCED has been present and in what capacity.",
  },
  {
    id: "network",
    code: "IV",
    title: "The network",
    body: "The sites and organisations YOCED works alongside. Shown as relationships, not as endorsements.",
  },
] as const;

const sequence = [
  {
    chapter: "stage",
    code: "C-01",
    title: "Cultural heritage",
    body: "Ancestral Hands: The Art of Djembe, a film by R.G. Fondo, follows djembe making in Nairobi — the craft, and the two generations holding it. Heritage work is economic work: when a practice is held by a handful of makers, documenting it and paying the people who know it is the only version that survives.",
    tags: ["cultural-heritage"],
    field: "creatives",
  },
  {
    chapter: "stage",
    code: "C-02",
    title: "Performing arts",
    body: "Live sets at 254 Brewing Co and at house venues around Nairobi. The point of photographing the audience as well as the stage is that both halves are the business — a room that fills is what makes a date bookable a second time.",
    tags: ["performance"],
    field: "creatives",
  },
  {
    chapter: "stage",
    code: "C-03",
    title: "Venues, collaborators and the business around them",
    body: "The working side of the creative field: venue sessions, production floors and the collaborators a project is assembled from. Most of what decides whether a creative career holds is agreed in rooms like these rather than on stage.",
    tags: ["creative-business"],
    field: "creatives",
  },
  {
    chapter: "stage",
    code: "C-04",
    title: "The instrument trade",
    body: "The supply side of the music economy, photographed at an international guitar fair: makers, distributors and priced catalogues. It is a reference point for what a formalised creative sector looks like from the inside.",
    tags: ["creative-economy"],
    field: "creatives",
  },
  {
    chapter: "season",
    code: "S-01",
    title: "Opening the land",
    body: "The season starts with land preparation. A tractor pass decides how much ground one operation can realistically work; hand preparation finishes the headlands and the corners a machine cannot reach.",
    tags: ["land", "mechanisation"],
    field: "agriculture-food-security",
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
    field: "agriculture-food-security",
  },
  {
    chapter: "season",
    code: "S-04",
    title: "Harvest",
    body: "Groundnut plants are lifted with the pods still attached, then collected from the field. Timing here is unforgiving in both directions.",
    tags: ["harvest"],
    field: "agriculture-food-security",
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
    body: "Groundnuts processed and jarred as peanut butter; baking runs cooling on trays. This is the step that changes what a harvest is worth, and the reason the enterprise work and the agriculture work belong to the same organisation.",
    tags: ["value-addition"],
    field: "business-development",
  },
  {
    chapter: "season",
    code: "S-07",
    title: "Livestock and kitchen plots",
    body: "Poultry cycles, nursery beds and household vegetable plots run alongside the main season, so income does not have to wait for one harvest.",
    tags: ["livestock", "household"],
    field: "agriculture-food-security",
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
    chapter: "season",
    code: "S-09",
    title: "Holding the river bank",
    body: "Seedlings planted out to a line along a river bank and watered by hand. Roots hold ground that would otherwise wash into the water, which protects the catchment everything downstream depends on and puts tree cover back on cleared land — erosion, water and carbon answered by one afternoon's work.",
    tags: ["tree-planting"],
    field: "climate-action",
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
    field: "agriculture-food-security",
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
            Four chapters
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
            <Link href="/programs/creatives" className="btn btn--solid">
              The creatives field <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/programs/agriculture-food-security" className="btn">
              Agriculture &amp; food security <ArrowUpRight size={17} aria-hidden="true" />
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
              What follows runs in four chapters. <strong>On the stage</strong> covers the
              creative sector — heritage, performance, venues and the trade behind them.{" "}
              <strong>The season</strong> is one continuous
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

              {/* Stepped through in sequence rather than laid out as a grid:
                  these frames are an account of an activity in order, and a
                  contact sheet flattens that back into thumbnails. */}
              <Sequence
                photos={frames}
                label={`${step.code} — ${step.title}`}
                sizes="(max-width: 1180px) 100vw, 1100px"
              />
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
