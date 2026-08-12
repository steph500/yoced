import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Plate } from "@/components/Photo";
import { reveal } from "@/lib/reveal";
import { partners } from "@/lib/partners";
import { clusters, programs, programsInCluster } from "@/lib/programs";
import { testimonials } from "@/lib/testimonials";
import { photo } from "@/lib/photos";
import { technologyPartner } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "How partnership works at YOCED: enter through one of twelve fields, with stated partnership models for each. Network includes MKJ Law LLP, Kenbright, 254 Brewing Co, Twenty Fifth Hive, Njoki Karuoya Creative & Media Centre, PesaSwap and technology partner SelfAwareTech.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partner with YOCED",
    description: "Enter through one field. The rest of the ecosystem stays available.",
    url: "/partners",
  },
};

export default function PartnersPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="partners-heading">
        <div className="hero__meta">
          <span className="label">Partners · funders · collaborators</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            12 fields, 40+ partnership models
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="partners-heading">
          Enter through <em>one</em> field.
        </h1>
        <div className="hero__foot">
          <p>
            You do not have to engage with all of YOCED to work with YOCED. Each field carries
            its own partnership models, its own communities and its own page — built to be
            circulated internally without the rest of the organisation attached.
          </p>
          <div className="btn-row">
            <Link href="/contact?topic=partnership" className="btn btn--solid">
              Open a conversation <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/for/funders" className="btn">
              For funders <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Plate photo={photo("partner-meeting")} priority />

      <section className="band wrap" aria-labelledby="network-heading">
        <div className="section-head">
          <div>
            <span className="label">Network</span>
            <h2 className="display t-1" id="network-heading" style={{ marginTop: 14 }}>
              Organisations in the YOCED network.
            </h2>
          </div>
          <p>
            Listed as network rather than endorsement. Nothing on this page states that an
            organisation currently funds YOCED, and outreach history is not treated as
            partnership.
          </p>
        </div>

        <div className="partners">
          {partners.map((partner, index) => {
            const inner = (
              <>
                <span className="code muted">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <span className="partner__name">{partner.name}</span>
                  <div className="partner__foot" style={{ marginTop: 14 }}>
                    <span className="label" style={{ letterSpacing: ".08em" }}>
                      {partner.field}
                    </span>
                    {partner.role ? <span className="partner__role">{partner.role}</span> : null}
                  </div>
                </div>
              </>
            );
            return partner.href ? (
              <a
                key={partner.name}
                href={partner.href}
                className="partner"
                rel="noopener noreferrer"
                target="_blank"
                data-accent="slate"
                {...reveal(index * 30)}
              >
                {inner}
              </a>
            ) : (
              <div key={partner.name} className="partner" {...reveal(index * 30)}>
                {inner}
              </div>
            );
          })}
        </div>

        <p className="muted" style={{ marginTop: 22, fontSize: ".88rem", maxWidth: "70ch" }}>
          Two further logos appeared on YOCED’s previous website but could not be identified with
          confidence from the surviving material. They have been left out rather than guessed at.
        </p>
      </section>

      <section className="band on-ink wrap" aria-labelledby="models-heading">
        <div className="section-head">
          <div>
            <span className="label">Partnership directory</span>
            <h2 className="display t-1" id="models-heading" style={{ marginTop: 14 }}>
              Start with the field, not the bureaucracy.
            </h2>
          </div>
          <p>
            Every field lists the specific ways an organisation can work on it — funding,
            technical capacity, market access, delivery or all four.
          </p>
        </div>

        {clusters.map((cluster) => (
          <div key={cluster.id} data-accent={cluster.accent} style={{ marginBottom: 40 }}>
            <span className="label label--accent" style={{ marginBottom: 6 }}>
              {cluster.title}
            </span>
            <ul className="defs">
              {programsInCluster(cluster.id).map((program) => (
                <li key={program.slug}>
                  <span className="code">{program.code}</span>
                  <span className="defs__t">
                    <Link href={`/programs/${program.slug}`} className="link">
                      {program.title}
                    </Link>
                  </span>
                  <span className="defs__d">
                    {program.partnershipModels.map((model) => model.title).join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="band wrap" aria-labelledby="tech-heading">
        <div className="railed">
          <span className="label">{technologyPartner.role}</span>
          <div>
            <h2 className="display t-2" id="tech-heading" style={{ marginBottom: 16 }}>
              {technologyPartner.name}
            </h2>
            <div className="prose" style={{ maxWidth: "60ch" }}>
              <p>{technologyPartner.note}</p>
              <p>
                YOCED is not owned by SelfAwareTech, SelfAwareTech is not a YOCED program, and
                YOCED is not a SelfAwareTech product. The relationship is a partnership on
                technology, and it is described that way everywhere on this site.
              </p>
            </div>
            <p style={{ marginTop: 18 }}>
              <a href={technologyPartner.url} className="link" rel="noopener noreferrer" target="_blank">
                selfawaretech.com <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {testimonials.length > 0 ? (
        <section className="band on-ink wrap" aria-labelledby="voices-heading">
          <span className="label">In their words</span>
          <h2 className="display t-1" id="voices-heading" style={{ margin: "14px 0 32px" }}>
            What partners say.
          </h2>
          <ul className="rows">
            {testimonials.map((item) => (
              <li key={item.name} style={{ padding: "28px 0" }}>
                <blockquote
                  className="display t-3"
                  style={{ margin: 0, maxWidth: "44ch", fontWeight: 400 }}
                >
                  “{item.quote}”
                </blockquote>
                <p className="label" style={{ marginTop: 16 }}>
                  {item.name}
                  {item.role ? ` · ${item.role}` : ""}
                  {item.organisation ? ` · ${item.organisation}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="band wrap">
        <div className="cta-panel" data-accent="slate">
          <div>
            <span className="label">Next step</span>
            <h2>Tell us the field and the mandate. We will do the routing.</h2>
            <p>
              {programs.length} fields, each with its own partnership route. Name yours in the
              inquiry form and the conversation starts in the right place.
            </p>
          </div>
          <Link href="/contact?topic=partnership" className="btn">
            Contact YOCED <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
