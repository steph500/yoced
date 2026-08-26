import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Plate } from "@/components/Photo";
import { reveal } from "@/lib/reveal";
import { team } from "@/lib/team";
import { clusters, programs } from "@/lib/programs";
import { ventures } from "@/lib/ventures";
import { photo } from "@/lib/photos";
import { site, technologyPartner } from "@/lib/site";
import { people } from "@/lib/people";

export const metadata: Metadata = {
  title: "About",
  description:
    "YOCED is a Nairobi-based ecosystem working across thirteen fields, creative and cultural programmes, technology and practical partnerships. Led by Dovies Ebbiey and Stefan Juma.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About YOCED",
    description: "A Nairobi-based ecosystem connecting youth development, creative work, technology and practical partnerships.",
    url: "/about",
  },
};

const principles = [
  {
    title: "Operations before ideas",
    body: "A venture becomes real when its work is written down, costed and repeatable. That discipline comes from Business Process Management, and it is the through-line of everything YOCED does.",
  },
  {
    title: "Breadth on purpose",
    body: "Employment, land, money, health and rights fail together. Thirteen fields is not scope creep — it is an admission that these problems do not occur separately.",
  },
  {
    title: "Structure over slogans",
    body: "Breadth is only a problem when it is disorganised. Every field has its own page, its own communities and its own route in, so nobody has to navigate YOCED to reach the part that concerns them.",
  },
  {
    title: "Only what we can evidence",
    body: "This site publishes no beneficiary counts, funding totals or success rates, because none have been independently verified. It publishes the work instead.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="about-heading">
        <div className="hero__meta">
          <span className="label">About</span>
          <span className="label">{site.legalName}</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            {site.location}
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="about-heading">
          An ecosystem, not a <em>programme</em>.
        </h1>
        <div className="hero__foot">
          <p>
            YOCED exists to help young people, creatives and communities move from capability to
            income — through enterprises that operate, work that pays, skills attached to real
            opportunity, and funding that keeps moving.
          </p>
          <div className="btn-row">
            <Link href="/how-it-works" className="btn btn--solid">
              How YOCED works <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/work" className="btn">
              See the field work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Plate photo={photo("training-session")} priority />

      <section className="band wrap" aria-labelledby="what-heading">
        <div className="railed">
          <span className="label">What YOCED is</span>
          <div className="prose" style={{ maxWidth: "62ch" }}>
            <h2 className="display t-2" id="what-heading" style={{ marginBottom: 18 }}>
              Youth Corporate and Economic Development.
            </h2>
            <p>
              YOCED works at the point where young people, entrepreneurs, creatives, businesses
              and communities try to convert what they can do into something that pays. That
              conversion is where most development effort is lost, and it is almost never a
              question of ambition.
            </p>
            <p>
              The organisation’s roots are in Business Process Management and Business Process
              Outsourcing — disciplines concerned with how work is actually structured, costed and
              made repeatable. Applied to youth enterprise, that background is unusual, and it is
              the reason YOCED’s programs tend to produce something operable rather than something
              described.
            </p>
            <p>
              Today that runs across {programs.length} active fields and {ventures.length} active
              ventures, from land preparation and groundnut processing to furniture, film and
              craft.
            </p>
          </div>
        </div>
      </section>

      <section className="band on-ink wrap" aria-labelledby="principles-heading">
        <span className="label">How we work</span>
        <h2 className="display t-1" id="principles-heading" style={{ margin: "14px 0 34px" }}>
          Four things that decide everything else.
        </h2>
        <ul className="defs">
          {principles.map((principle, index) => (
            <li key={principle.title} {...reveal(index * 40)}>
              <span className="code">{String(index + 1).padStart(2, "0")}</span>
              <span className="defs__t">{principle.title}</span>
              <span className="defs__d">{principle.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="band wrap" aria-labelledby="structure-heading">
        <div className="section-head">
          <div>
            <span className="label">Structure</span>
            <h2 className="display t-1" id="structure-heading" style={{ marginTop: 14 }}>
              How the organisation is arranged.
            </h2>
          </div>
          <p>
            Four clusters, thirteen fields, six ventures, and a set of routes designed around who
            is arriving rather than around the org chart.
          </p>
        </div>
        <ul className="defs">
          {clusters.map((cluster) => (
            <li key={cluster.id} data-accent={cluster.accent}>
              <span className="code">{cluster.id.slice(0, 3).toUpperCase()}</span>
              <span className="defs__t">{cluster.title}</span>
              <span className="defs__d">{cluster.short}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="band wrap" aria-labelledby="leadership-heading">
        <div className="section-head">
          <div>
            <span className="label">Leadership</span>
            <h2 className="display t-1" id="leadership-heading" style={{ marginTop: 14 }}>
              Two leads, one operating system.
            </h2>
          </div>
          <p>
            Roles and remits — what each position is accountable for, and the fields it leads on.
          </p>
        </div>

        <div className="leaders">
          {team.map((person) => (
            <article className="leader" key={person.name} {...reveal()}>
              <span className="leader__initials" aria-hidden="true">
                {person.initials}
              </span>
              {person.portrait ? (
                <div className="shot leader__portrait">
                  <Image
                    src={person.portrait}
                    alt={`${person.name}, ${person.role}`}
                    fill
                    sizes="220px"
                  />
                </div>
              ) : null}
              <span className="leader__role">{person.role}</span>
              <h3 className="leader__name">{person.name}</h3>
              <p className="leader__focus">{person.focus}</p>
              {person.external ? (
                <a href={person.external.href} className="leader__link" rel="noopener noreferrer" target="_blank">
                  {person.external.label} <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : null}
              <ul className="tags">
                {person.fields.map((slug) => {
                  const program = programs.find((item) => item.slug === slug);
                  return program ? <li key={slug}>{program.navTitle}</li> : null;
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="band band--tight wrap" aria-labelledby="people-heading">
        <div className="section-head">
          <div>
            <span className="label">People to know</span>
            <h2 className="display t-1" id="people-heading" style={{ marginTop: 14 }}>
              A practice, in full.
            </h2>
          </div>
          <p>
            Individual profiles make the people and specialised work around YOCED easier to find,
            understand and share.
          </p>
        </div>

        <div className="featured-people">
          {people.map((person) => (
            <Link href={`/people/${person.slug}`} className="featured-person" key={person.slug}>
              <div className="featured-person__image">
                <Image
                  src={person.portrait.src}
                  alt={person.portrait.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 42vw"
                />
              </div>
              <div className="featured-person__copy">
                <span className="label">{person.eyebrow}</span>
                <h3>{person.name}</h3>
                <p className="featured-person__role">{person.role}</p>
                <p>{person.organisation}</p>
                <span className="link">
                  Read profile <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="band band--tight wrap" aria-labelledby="tech-heading">
        <div className="railed">
          <span className="label">{technologyPartner.role}</span>
          <div className="prose" style={{ maxWidth: "62ch" }}>
            <h2 className="display t-3" id="tech-heading" style={{ marginBottom: 14 }}>
              {technologyPartner.name}
            </h2>
            <p>{technologyPartner.note}</p>
            <p>
              <a href={technologyPartner.url} className="link" rel="noopener noreferrer" target="_blank">
                selfawaretech.com <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="band wrap">
        <div className="cta-panel" data-accent="field">
          <div>
            <span className="label">Get in touch</span>
            <h2>Based in {site.location}. Working wherever the field work is.</h2>
            <p>
              {site.email} · {site.phone}
            </p>
          </div>
          <Link href="/contact" className="btn">
            Contact YOCED <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
