import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Plate } from "@/components/Photo";
import { Sequence } from "@/components/Sequence";
import { reveal } from "@/lib/reveal";
import { BreadcrumbSchema, ProgramSchema } from "@/components/StructuredData";
import { clusterOf, getProgram, programs } from "@/lib/programs";
import { getVenture } from "@/lib/ventures";
import { photo, photoSet } from "@/lib/photos";
import { sdgTitle } from "@/lib/sdg";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.short,
    alternates: { canonical: `/programs/${program.slug}` },
    openGraph: {
      title: `${program.title} — YOCED`,
      description: program.short,
      url: `/programs/${program.slug}`,
      type: "article",
    },
  };
}

export default async function ProgramPage({ params }: Params) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const cluster = clusterOf(program);
  const hero = program.heroPhoto ? photo(program.heroPhoto) : undefined;
  // The agriculture field carries 26 frames. A program page shows a curated set
  // and sends the rest to /work rather than dumping the whole archive inline.
  const allFrames = program.photos.filter((item) => item !== program.heroPhoto);
  const GALLERY_LIMIT = 12;
  const gallery = photoSet(...allFrames.slice(0, GALLERY_LIMIT));
  const remaining = allFrames.length - gallery.length;
  const related = program.related.map(getProgram).filter((item) => item !== undefined);
  const linkedVentures = program.ventures.map(getVenture).filter((item) => item !== undefined);

  return (
    <PageShell>
      <BreadcrumbSchema
        trail={[
          { name: "YOCED", path: "/" },
          { name: "Programs", path: "/programs" },
          { name: program.title, path: `/programs/${program.slug}` },
        ]}
      />
      <ProgramSchema
        name={program.title}
        description={program.short}
        path={`/programs/${program.slug}`}
        audience={program.audience}
      />
      <article data-accent={cluster.accent}>
        <header className="pd__hero">
          <nav className="pd__crumb" aria-label="Breadcrumb">
            <Link href="/programs" className="code">
              Programs
            </Link>
            <span className="code muted" aria-hidden="true">
              /
            </span>
            <span className="code label--accent" style={{ display: "inline" }}>
              {cluster.title}
            </span>
            <span className="code muted" style={{ marginLeft: "auto" }}>
              {program.code}
            </span>
          </nav>

          <h1 className="grotesk pd__title">{program.title}</h1>

          <div className="pd__intro">
            <p className="lede lede--wide">{program.lede}</p>
            <div className="prose">
              <p>{program.short}</p>
              <div className="btn-row" style={{ marginTop: 20 }}>
                <Link href={`/contact?topic=partnership&field=${program.slug}`} className="btn btn--solid">
                  Partner on this field <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </header>

        {hero ? <Plate photo={hero} priority /> : null}

        <div className="wrap">
          <div className="pd__facts" style={{ marginTop: hero ? "clamp(34px,4vw,60px)" : 0 }}>
            <div>
              <span className="label">Who this is for</span>
              <p>{program.audience.join(" · ")}</p>
            </div>
            <div>
              <span className="label">Cluster</span>
              <p>{cluster.title}</p>
            </div>
            <div>
              <span className="label">Goals mapped</span>
              <p>{program.sdgs.map((goal) => `SDG ${goal}`).join(" · ")}</p>
            </div>
          </div>

          <section className="pd__section" aria-labelledby="context-heading">
            <div>
              <span className="label">01 / Context</span>
            </div>
            <div className="pd__body">
              <h2 id="context-heading">What this field is actually up against.</h2>
              {program.context.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="pd__section" aria-labelledby="approach-heading">
            <div>
              <span className="label">02 / Approach</span>
            </div>
            <div className="pd__body">
              <h2 id="approach-heading">How YOCED works here.</h2>
              {program.approach.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="pd__section" aria-labelledby="activities-heading">
            <div>
              <span className="label">03 / Activities</span>
            </div>
            <div>
              <h2 id="activities-heading">What happens in practice.</h2>
              <ul className="defs">
                {program.activities.map((activity, index) => (
                  <li key={activity.title} {...reveal(index * 40)}>
                    <span className="code">{String(index + 1).padStart(2, "0")}</span>
                    <span className="defs__t">{activity.title}</span>
                    <span className="defs__d">{activity.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {program.topics ? (
            <section className="pd__section" aria-labelledby="topics-heading">
              <div>
                <span className="label">04 / Inside this field</span>
              </div>
              <div>
                <h2 id="topics-heading">The specific areas within it.</h2>
                <ul className="defs">
                  {program.topics.map((topic, index) => (
                    <li key={topic.title} {...reveal(index * 35)}>
                      <span className="code">·</span>
                      <span className="defs__t">{topic.title}</span>
                      <span className="defs__d">{topic.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {program.furtherReading ? (
            <section className="pd__section" aria-labelledby="further-heading">
              <div>
                <span className="label">Read on</span>
              </div>
              <div className="pd__body">
                <h2 id="further-heading">{program.furtherReading.title}</h2>
                <p>{program.furtherReading.body}</p>
                <p style={{ marginTop: 6 }}>
                  <Link href={program.furtherReading.href} className="link">
                    Read the argument <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </section>
          ) : null}

          <section className="pd__section" aria-labelledby="communities-heading">
            <div>
              <span className="label">{program.topics ? "05" : "04"} / Communities</span>
            </div>
            <div>
              <h2 id="communities-heading">Who this field reaches.</h2>
              <ul className="ticks" style={{ maxWidth: "60ch" }}>
                {program.communities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {gallery.length > 0 ? (
          <section className="band band--tight" aria-labelledby="photos-heading">
            <div className="wrap section-head">
              <div>
                <span className="label">Field archive</span>
                <h2 className="display t-2" id="photos-heading" style={{ marginTop: 12 }}>
                  Photographed on site.
                </h2>
              </div>
              <div>
                <p style={{ marginBottom: remaining > 0 ? 14 : 0 }}>
                  Captions describe the frame only. No outcome is claimed by any image here.
                </p>
                {remaining > 0 ? (
                  <Link href="/work" className="link">
                    {remaining} more frames in the field archive{" "}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </div>
            {/* One frame at a time, in order — a field's photography is a
                sequence of an activity, not a wall of thumbnails. */}
            <div className="wrap">
              <Sequence photos={gallery} label={`${program.title} — field archive`} />
            </div>
          </section>
        ) : null}

        <div className="wrap">
          <section className="pd__section" aria-labelledby="partnership-heading">
            <div>
              <span className="label">Partnership</span>
            </div>
            <div>
              <h2 id="partnership-heading">Ways to work with YOCED on this field.</h2>
              <ul className="defs">
                {program.partnershipModels.map((model, index) => (
                  <li key={model.title} {...reveal(index * 40)}>
                    <span className="code">{String(index + 1).padStart(2, "0")}</span>
                    <span className="defs__t">{model.title}</span>
                    <span className="defs__d">{model.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="pd__section" aria-labelledby="sdg-heading">
            <div>
              <span className="label">Alignment</span>
            </div>
            <div>
              <h2 id="sdg-heading">Sustainable Development Goals.</h2>
              <p className="muted" style={{ maxWidth: "56ch", marginBottom: 20 }}>
                Only the goals this field genuinely works on are listed.
              </p>
              <ul className="sdgs">
                {program.sdgs.map((goal) => (
                  <li key={goal}>
                    <b>{goal}</b>
                    {sdgTitle(goal)}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {linkedVentures.length > 0 ? (
            <section className="pd__section" aria-labelledby="ventures-heading">
              <div>
                <span className="label">Ventures</span>
              </div>
              <div>
                <h2 id="ventures-heading">Where this field shows up in the ecosystem.</h2>
                <ul className="ventures">
                  {linkedVentures.map((venture) => (
                    <li key={venture.slug} data-accent={venture.accent}>
                      <Link href={`/ventures/${venture.slug}`}>
                        <span className="cipher" aria-hidden="true">
                          {venture.cipher}
                        </span>
                        <span>
                          <span className="ventures__name">{venture.name}</span>
                          <span className="ventures__sector">{venture.sector}</span>
                        </span>
                        <span className="doors__a ventures__blurb">{venture.short}</span>
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          <section className="band band--tight">
            <div className="cta-panel">
              <div>
                <span className="label">Send this page on</span>
                <h2>This page is built to travel on its own.</h2>
                <p>
                  {site.url}/programs/{program.slug} — share it with a colleague, a funder or a
                  specialist partner without them having to understand the rest of YOCED first.
                </p>
              </div>
              <Link href={`/contact?topic=partnership&field=${program.slug}`} className="btn">
                Start here <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </section>

          {related.length > 0 ? (
            <section className="band band--tight" aria-labelledby="related-heading">
              <span className="label">Connected fields</span>
              <h2 className="display t-2" id="related-heading" style={{ margin: "12px 0 26px" }}>
                What this field runs into.
              </h2>
              <div className="next-fields">
                {related.map((item) => (
                  <Link key={item.slug} href={`/programs/${item.slug}`}>
                    <span className="code muted">{item.code}</span>
                    <h3>{item.title}</h3>
                    <p>{item.short}</p>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>
    </PageShell>
  );
}
