import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/SiteChrome";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { getFieldSpotlight, fieldSpotlights } from "@/lib/fieldSpotlights";
import { getProgram } from "@/lib/programs";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return fieldSpotlights.map((spotlight) => ({ slug: spotlight.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const spotlight = getFieldSpotlight(slug);
  if (!spotlight) return {};

  return {
    title: spotlight.title,
    description: spotlight.lede,
    alternates: { canonical: `/spotlights/${spotlight.slug}` },
    openGraph: {
      title: `${spotlight.title} — YOCED spotlight`,
      description: spotlight.lede,
      url: `/spotlights/${spotlight.slug}`,
      type: "article",
      images: [{ url: spotlight.hero.src, width: spotlight.hero.width, height: spotlight.hero.height }],
    },
  };
}

export default async function SpotlightPage({ params }: Params) {
  const { slug } = await params;
  const spotlight = getFieldSpotlight(slug);
  if (!spotlight) notFound();
  const field = getProgram(spotlight.field);

  return (
    <PageShell>
      <BreadcrumbSchema
        trail={[
          { name: "YOCED", path: "/" },
          ...(field ? [{ name: field.title, path: `/programs/${field.slug}` }] : []),
          { name: spotlight.title, path: `/spotlights/${spotlight.slug}` },
        ]}
      />

      <article data-accent="clay">
        <header className="spotlight-hero">
          <div className="wrap">
            <nav className="pd__crumb" aria-label="Breadcrumb">
              {field ? (
                <Link href={`/programs/${field.slug}`} className="code">
                  {field.navTitle}
                </Link>
              ) : (
                <Link href="/about" className="code">
                  YOCED
                </Link>
              )}
              <span className="code muted" aria-hidden="true">
                /
              </span>
              <span className="code label--accent" style={{ display: "inline" }}>
                Spotlight
              </span>
            </nav>

            <div className="spotlight-hero__grid">
              <div>
                <span className="label label--accent">{spotlight.label}</span>
                <h1 className="grotesk spotlight-hero__title">{spotlight.title}</h1>
                <p className="lede lede--wide">{spotlight.lede}</p>
              </div>
              <div className="spotlight-hero__art">
                <Image
                  src={spotlight.hero.src}
                  alt={spotlight.hero.alt}
                  width={spotlight.hero.width}
                  height={spotlight.hero.height}
                  priority
                  sizes="(max-width: 760px) min(100vw - 40px, 520px), 34vw"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="wrap">
          {spotlight.sections.map((section, index) => (
            <section className="pd__section" key={section.title} aria-labelledby={`spotlight-${index}`}>
              <div>
                <span className="label">{String(index + 1).padStart(2, "0")} / Esha’s Radio</span>
              </div>
              <div className="pd__body">
                <h2 id={`spotlight-${index}`}>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="pd__section" aria-labelledby="formats-heading">
            <div>
              <span className="label">04 / Expect</span>
            </div>
            <div>
              <h2 id="formats-heading">Many ways into the culture.</h2>
              <ul className="ticks spotlight-formats">
                {spotlight.formats.map((format) => (
                  <li key={format}>{format}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <section className="spotlight-gallery wrap" aria-labelledby="gallery-heading">
          <div className="section-head">
            <div>
              <span className="label">Visual identity</span>
              <h2 className="display t-2" id="gallery-heading" style={{ marginTop: 14 }}>
                A space made for discovery.
              </h2>
            </div>
            <p>
              Esha’s Radio brings music, stories and other forms of creative expression into one
              welcoming cultural space.
            </p>
          </div>
          <div className="spotlight-gallery__grid">
            {spotlight.gallery.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 760px) 33vw, 20vw"
              />
            ))}
          </div>
        </section>

        {field ? (
          <section className="band wrap">
            <div className="cta-panel" data-accent="clay">
              <div>
                <span className="label">Women & Community Empowerment</span>
                <h2>Creative expression belongs in the wider work.</h2>
                <p>
                  Discover the field that connects economic agency, safety, inclusion and the
                  spaces where communities can be heard.
                </p>
              </div>
              <Link href={`/programs/${field.slug}`} className="btn">
                Explore the field <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </section>
        ) : null}
      </article>
    </PageShell>
  );
}
