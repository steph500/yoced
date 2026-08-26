import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/SiteChrome";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { people, getPerson } from "@/lib/people";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};

  return {
    title: `${person.name} — ${person.role}`,
    description: person.lede,
    alternates: { canonical: `/people/${person.slug}` },
    openGraph: {
      title: `${person.name} — ${person.organisation}`,
      description: person.lede,
      url: `/people/${person.slug}`,
      type: "profile",
      images: [{ url: person.portrait.src, width: person.portrait.width, height: person.portrait.height }],
    },
  };
}

export default async function PersonPage({ params }: Params) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();

  return (
    <PageShell>
      <BreadcrumbSchema
        trail={[
          { name: "YOCED", path: "/" },
          { name: "People", path: "/about" },
          { name: person.name, path: `/people/${person.slug}` },
        ]}
      />

      <article data-accent="saffron">
        <header className="profile-hero on-ink">
          <div className="wrap">
            <nav className="pd__crumb profile-hero__crumb" aria-label="Breadcrumb">
              <Link href="/about" className="code">
                About YOCED
              </Link>
              <span className="code muted" aria-hidden="true">
                /
              </span>
              <span className="code label--accent" style={{ display: "inline" }}>
                {person.name}
              </span>
            </nav>

            <div className="profile-hero__grid">
              <div className="profile-hero__copy">
                <span className="label label--accent">{person.eyebrow}</span>
                <h1 className="grotesk profile-hero__title">{person.name}</h1>
                <p className="profile-hero__role">{person.role}</p>
                <p className="profile-hero__organisation">{person.organisation}</p>
                <p className="lede profile-hero__lede">{person.lede}</p>
              </div>

              <div className="profile-hero__portrait">
                <Image
                  src={person.portrait.src}
                  alt={person.portrait.alt}
                  width={person.portrait.width}
                  height={person.portrait.height}
                  sizes="(max-width: 760px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        <div className="wrap">
          {person.story.map((section, index) => (
            <section className="pd__section" key={section.title} aria-labelledby={`story-${index}`}>
              <div>
                <span className="label">{String(index + 1).padStart(2, "0")} / Profile</span>
              </div>
              <div className="pd__body">
                <h2 id={`story-${index}`}>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="pd__section" aria-labelledby="practice-heading">
            <div>
              <span className="label">03 / In practice</span>
            </div>
            <div>
              <h2 id="practice-heading">Recovery built around the whole body.</h2>
              <ul className="ticks profile-practice">
                {person.practiceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <section className="profile-gallery wrap" aria-labelledby="gallery-heading">
          <div className="section-head">
            <div>
              <span className="label">In motion</span>
              <h2 className="display t-2" id="gallery-heading" style={{ marginTop: 14 }}>
                The experience behind the practice.
              </h2>
            </div>
            <p>
              Images from Iman’s mountain biking life — the high-performance environment that
              informs her approach to movement, recovery and muscular health.
            </p>
          </div>

          <div className="profile-gallery__grid">
            {person.gallery.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="band wrap">
          <div className="cta-panel" data-accent="saffron">
            <div>
              <span className="label">More YOCED stories</span>
              <h2>Meet the people doing the work.</h2>
              <p>
                YOCED’s work is shaped by people building practices, businesses and routes into
                stronger livelihoods.
              </p>
            </div>
            <Link href="/about" className="btn">
              About YOCED <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
