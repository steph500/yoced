import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Plate } from "@/components/Photo";
import { reveal } from "@/lib/reveal";
import { audiences, getAudience } from "@/lib/audiences";
import { getProgram } from "@/lib/programs";
import { photo } from "@/lib/photos";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return {};
  return {
    title: audience.label,
    description: audience.lede,
    alternates: { canonical: `/for/${audience.slug}` },
    openGraph: {
      title: `${audience.label} — YOCED`,
      description: audience.lede,
      url: `/for/${audience.slug}`,
    },
  };
}

export default async function AudiencePage({ params }: Params) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();

  const hero = audience.heroPhoto ? photo(audience.heroPhoto) : undefined;
  const linkedPrograms = audience.programs.map(getProgram).filter((item) => item !== undefined);
  const others = audiences.filter((item) => item.slug !== audience.slug);

  return (
    <PageShell>
      <article data-accent={audience.accent}>
        <div className="wrap">
          <nav className="pd__crumb" aria-label="Breadcrumb" style={{ paddingTop: 32 }}>
            <Link href="/" className="code">
              YOCED
            </Link>
            <span className="code muted" aria-hidden="true">
              /
            </span>
            <span className="code label--accent" style={{ display: "inline" }}>
              {audience.label}
            </span>
          </nav>

          <header className="aud__hero">
            <div>
              <span className="aud__q">“{audience.question}”</span>
              <h1 className="grotesk pd__title">{audience.headline}</h1>
            </div>
            <div>
              <p className="lede lede--wide">{audience.lede}</p>
              <div className="btn-row" style={{ marginTop: 24 }}>
                <Link href={audience.cta.href} className="btn btn--solid">
                  {audience.cta.label} <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </header>
        </div>

        {hero ? <Plate photo={hero} priority /> : null}

        <div className="wrap">
          <section className="pd__section" aria-labelledby="offers-heading">
            <div>
              <span className="label">What you can get</span>
            </div>
            <div>
              <h2 id="offers-heading">Concretely, this.</h2>
              <ul className="defs">
                {audience.offers.map((offer, index) => (
                  <li key={offer.title} {...reveal(index * 40)}>
                    <span className="code">{String(index + 1).padStart(2, "0")}</span>
                    <span className="defs__t">{offer.title}</span>
                    <span className="defs__d">{offer.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {audience.sections.map((section, index) => (
            <section className="pd__section" key={section.title} aria-labelledby={`sec-${index}`}>
              <div>
                <span className="label">
                  {String(index + 1).padStart(2, "0")} / {section.title}
                </span>
              </div>
              <div className="pd__body">
                <h2 id={`sec-${index}`}>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="pd__section" aria-labelledby="bring-heading">
            <div>
              <span className="label">Before you write</span>
            </div>
            <div>
              <h2 id="bring-heading">What makes the first message useful.</h2>
              <ul className="ticks" style={{ maxWidth: "58ch" }}>
                {audience.bring.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {linkedPrograms.length > 0 ? (
            <section className="pd__section" aria-labelledby="fields-heading">
              <div>
                <span className="label">Your fields</span>
              </div>
              <div>
                <h2 id="fields-heading">Where to start in the atlas.</h2>
                <div className="next-fields">
                  {linkedPrograms.map((program) => (
                    <Link key={program.slug} href={`/programs/${program.slug}`}>
                      <span className="code muted">{program.code}</span>
                      <h3>{program.title}</h3>
                      <p>{program.short}</p>
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="pd__section" aria-labelledby="fields-heading">
              <div>
                <span className="label">Your fields</span>
              </div>
              <div>
                <h2 id="fields-heading">Start from the field, not from YOCED.</h2>
                <p className="muted" style={{ maxWidth: "58ch", marginBottom: 22 }}>
                  All twelve fields carry their own partnership models and their own shareable
                  page. Filter the atlas by cluster to find the ones that match your mandate.
                </p>
                <Link href="/programs" className="btn btn--solid">
                  Open the atlas <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </section>
          )}

          <section className="band band--tight">
            <div className="cta-panel">
              <div>
                <span className="label">Next step</span>
                <h2>{audience.cta.label}.</h2>
                <p>
                  The inquiry form routes by topic, so this reaches the right part of YOCED
                  without going through a general inbox first.
                </p>
              </div>
              <Link href={audience.cta.href} className="btn">
                Continue <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="band band--tight" aria-labelledby="others-heading">
            <span className="label">Not you?</span>
            <h2 className="display t-2" id="others-heading" style={{ margin: "12px 0 22px" }}>
              The other four routes.
            </h2>
            <ul className="doors">
              {others.map((item, index) => (
                <li key={item.slug} data-accent={item.accent}>
                  <Link href={`/for/${item.slug}`}>
                    <span className="code">{String(index + 1).padStart(2, "0")}</span>
                    <span className="doors__q">{item.question}</span>
                    <span className="doors__a">{item.lede}</span>
                    <span className="doors__go">
                      {item.navLabel} <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </PageShell>
  );
}
