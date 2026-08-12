import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { reveal } from "@/lib/reveal";
import { getVenture, ventures } from "@/lib/ventures";
import { getProgram } from "@/lib/programs";
import { site } from "@/lib/site";
import { BreadcrumbSchema } from "@/components/StructuredData";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ventures.map((venture) => ({ slug: venture.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) return {};
  return {
    title: `${venture.name} — ${venture.sector}`,
    description: venture.lede,
    alternates: { canonical: `/ventures/${venture.slug}` },
    openGraph: {
      title: `${venture.name} — a YOCED venture`,
      description: venture.lede,
      url: `/ventures/${venture.slug}`,
      type: "article",
    },
  };
}

export default async function VenturePage({ params }: Params) {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) notFound();

  const linkedPrograms = venture.programs.map(getProgram).filter((item) => item !== undefined);
  const others = ventures.filter((item) => item.slug !== venture.slug).slice(0, 3);

  return (
    <PageShell>
      <BreadcrumbSchema
        trail={[
          { name: "YOCED", path: "/" },
          { name: "Ventures", path: "/ventures" },
          { name: venture.name, path: `/ventures/${venture.slug}` },
        ]}
      />
      <article data-accent={venture.accent}>
        <div className="wrap">
          <nav className="pd__crumb" aria-label="Breadcrumb" style={{ paddingTop: 32 }}>
            <Link href="/ventures" className="code">
              Ventures
            </Link>
            <span className="code muted" aria-hidden="true">
              /
            </span>
            <span className="code label--accent" style={{ display: "inline" }}>
              {venture.sector}
            </span>
            <span className="code muted" style={{ marginLeft: "auto" }}>
              {venture.status}
            </span>
          </nav>

          <header className="vd__hero">
            <div>
              <div className="vd__cipher" aria-hidden="true">
                {venture.cipher}
              </div>
              <h1 className="grotesk pd__title">{venture.name}</h1>
            </div>
            <div>
              <p className="lede lede--wide">{venture.lede}</p>
              <div className="btn-row" style={{ marginTop: 24 }}>
                <Link
                  href={`/contact?topic=partnership&venture=${venture.slug}`}
                  className="btn btn--solid"
                >
                  Work with {venture.name} <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </header>

          <section className="pd__section" aria-labelledby="market-heading">
            <div>
              <span className="label">01 / The market</span>
            </div>
            <div className="pd__body">
              <h2 id="market-heading">What this sector is really like.</h2>
              {venture.sectorNote.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="pd__section" aria-labelledby="support-heading">
            <div>
              <span className="label">02 / YOCED’s role</span>
            </div>
            <div>
              <h2 id="support-heading">How the enterprise model applies here.</h2>
              <ul className="defs">
                {venture.support.map((item, index) => (
                  <li key={item.title} {...reveal(index * 40)}>
                    <span className="code">{String(index + 1).padStart(2, "0")}</span>
                    <span className="defs__t">{item.title}</span>
                    <span className="defs__d">{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="pd__section" aria-labelledby="open-heading">
            <div>
              <span className="label">03 / Open to</span>
            </div>
            <div>
              <h2 id="open-heading">Concretely, what you can bring or ask for.</h2>
              <ul className="open-to">
                {venture.openTo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="muted" style={{ marginTop: 24, maxWidth: "58ch", fontSize: ".93rem" }}>
                Capability details, pricing and current capacity are held by the venture rather
                than published here. Name the venture in an inquiry and YOCED will connect you
                directly.
              </p>
            </div>
          </section>

          <section className="pd__section" aria-labelledby="fields-heading">
            <div>
              <span className="label">04 / Fields</span>
            </div>
            <div>
              <h2 id="fields-heading">The YOCED fields behind this venture.</h2>
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

          <section className="band band--tight">
            <div className="cta-panel">
              <div>
                <span className="label">Direct route</span>
                <h2>Talk to {venture.name}.</h2>
                <p>
                  Inquiries go to {site.email} and are routed to the venture. Say what you need —
                  an order, a supply relationship, equipment, a placement — and it moves from
                  there.
                </p>
              </div>
              <Link href={`/contact?topic=partnership&venture=${venture.slug}`} className="btn">
                Send an inquiry <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className="band band--tight" aria-labelledby="others-heading">
            <span className="label">Also active</span>
            <h2 className="display t-2" id="others-heading" style={{ margin: "12px 0 22px" }}>
              Other ventures in the ecosystem.
            </h2>
            <ul className="ventures">
              {others.map((item) => (
                <li key={item.slug} data-accent={item.accent}>
                  <Link href={`/ventures/${item.slug}`}>
                    <span className="cipher" aria-hidden="true">
                      {item.cipher}
                    </span>
                    <span>
                      <span className="ventures__name">{item.name}</span>
                      <span className="ventures__sector">{item.sector}</span>
                    </span>
                    <span className="doors__a ventures__blurb">{item.short}</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
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
