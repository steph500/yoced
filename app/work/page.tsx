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
    "The YOCED field archive: land preparation, mechanisation, planting, weeding, groundnut and maize harvest, drying and sorting, horticulture, poultry, value addition and training sessions — photographed on site.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "YOCED field work",
    description: "Documented project work, photographed on site. No outcome claims attached.",
    url: "/work",
  },
};

/** The archive reads as a sequence, because the work is one. */
const sequence = [
  {
    code: "S-01",
    title: "Opening the land",
    body: "The season starts with land preparation. A tractor pass decides how much ground one operation can realistically work; hand preparation finishes the headlands and the corners a machine cannot reach.",
    tags: ["land", "mechanisation"],
    field: "agriculture-food-systems",
  },
  {
    code: "S-02",
    title: "Planting",
    body: "Seed goes in behind the plough, along opened ridges, with the planting team spread across the field. This is coordinated, scheduled work — which is what makes it employment rather than chores.",
    tags: ["planting"],
    field: "job-creation",
  },
  {
    code: "S-03",
    title: "The crop",
    body: "Groundnuts, maize and horticulture. Weeding is the labour peak of the season and the point at which a crop is either kept or lost.",
    tags: ["crop"],
    field: "agriculture-food-systems",
  },
  {
    code: "S-04",
    title: "Harvest",
    body: "Groundnut plants are lifted with the pods still attached, then collected from the field. Timing here is unforgiving in both directions.",
    tags: ["harvest"],
    field: "agriculture-food-systems",
  },
  {
    code: "S-05",
    title: "After the field",
    body: "Drying, threshing and sorting. Post-harvest handling gets less attention than growing and decides more of the price.",
    tags: ["post-harvest"],
    field: "climate-action",
  },
  {
    code: "S-06",
    title: "Value addition",
    body: "Groundnuts processed and jarred as peanut butter. This is the step that changes what a harvest is worth, and the reason the enterprise work and the agriculture work belong to the same organisation.",
    tags: ["value-addition"],
    field: "business-development",
  },
  {
    code: "S-07",
    title: "Livestock and kitchen plots",
    body: "Poultry cycles, nursery beds and household vegetable plots run alongside the main season, so income does not have to wait for one harvest.",
    tags: ["livestock", "horticulture", "household"],
    field: "agriculture-food-systems",
  },
  {
    code: "S-08",
    title: "Rooms and groups",
    body: "Training sessions, farming-group mobilisation and working meetings with local partners. Most of the field work only happens because this part happened first.",
    tags: ["meeting", "training"],
    field: "skills-education",
  },
];

export default function WorkPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="work-heading">
        <div className="hero__meta">
          <span className="label">Field archive</span>
          <span className="label">{photos.length} frames</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            Photographed on site
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="work-heading">
          The work, <em>documented</em>.
        </h1>
        <div className="hero__foot">
          <p>
            Every image here is an original photograph from YOCED project work. Captions describe
            what is in the frame and stop there — no beneficiary counts, no yields, no dates, no
            outcome claims.
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
              YOCED has chosen to publish what it can actually evidence instead, which for now
              means the work itself.
            </p>
            <p>
              What follows is one continuous operation, in sequence: land opened, seed planted,
              crop tended, harvest lifted, produce dried and sorted, and finally processed into
              something with a label on it. Read end to end, it is the argument for why the
              agriculture, employment and enterprise fields sit in the same organisation.
            </p>
          </div>
        </div>
      </section>

      {sequence.map((step, index) => {
        const frames = photos.filter((frame) => step.tags.some((tag) => frame.tags.includes(tag)));
        if (frames.length === 0) return null;
        const program = getProgram(step.field);
        return (
          <section className="band band--tight" key={step.code} aria-labelledby={`${step.code}-heading`}>
            <div className="wrap">
              <div className="section-head">
                <div>
                  <span className="label">
                    {step.code} / Sequence {index + 1} of {sequence.length}
                  </span>
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
