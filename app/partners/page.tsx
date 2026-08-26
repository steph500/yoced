import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Plate } from "@/components/Photo";
import { Sequence } from "@/components/Sequence";
import { reveal } from "@/lib/reveal";
import { partners } from "@/lib/partners";
import { clusters, programs, programsInCluster } from "@/lib/programs";
import { testimonials } from "@/lib/testimonials";
import { photo, photoSet } from "@/lib/photos";
import { technologyPartner } from "@/lib/site";
import { AfricaExecution } from "@/components/AfricaExecution";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Work with YOCED on African market exploration, creative and technology programmes, workshops, prototypes, pilots and local implementation — through thirteen connected fields.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partner with YOCED",
    description: "Enter through one field. The rest of the ecosystem stays available.",
    url: "/partners",
  },
};

const networkPhotos = photoSet(
  "partner-254-brewing",
  "venue-254-sitting",
  "venue-254-brewhouse",
  "conference-delegation",
  "institutional-handshake",
  "creative-collaborators",
  "partner-farm-kale",
  "green-earth-record-notice",
  "institutional-delegation",
  "partner-network-evening",
);

export default function PartnersPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="partners-heading">
        <div className="hero__meta">
          <span className="label">Partners · founders · collaborators</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            13 fields, 45+ partnership models
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="partners-heading">
          Bring the idea. Make it real <em>here</em>.
        </h1>
        <div className="hero__foot">
          <p>
            YOCED works with international and local organisations that need African context and
            practical execution: market exploration, workshops, creative programmes, technical
            prototypes, pilots and implementation. Start with the question; the relevant field,
            people and route take shape from there.
          </p>
          <div className="btn-row">
            <Link href="/contact?topic=africa-project" className="btn btn--solid">
              Explore a partnership <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/for/funders" className="btn">
              For funders <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Plate photo={photo("partner-meeting")} priority />

      <AfricaExecution id="partners-execution-heading" />

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

      <section className="band band--tight wrap" aria-labelledby="evidence-heading">
        <div className="section-head">
          <div>
            <span className="label">In practice</span>
            <h2 className="display t-1" id="evidence-heading" style={{ marginTop: 14 }}>
              What the network looks like on the ground.
            </h2>
          </div>
          <p>
            Rooms, sites and organisations. Presence and association are shown as exactly that —
            neither is a claim of funding or endorsement.
          </p>
        </div>
        <div className="wrap">
          <Sequence photos={networkPhotos} label="Organisations and sites in the YOCED network" />
        </div>
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
          <span className="label">Words of wisdom · from the YOCED archive</span>
          <h2 className="display t-1" id="voices-heading" style={{ margin: "14px 0 18px" }}>
            Voices carried forward.
          </h2>
          <p className="muted" style={{ maxWidth: "62ch", marginBottom: 34 }}>
            Recovered verbatim from YOCED’s earlier published profile. These are perspectives from
            the archive, not statements of current funding.
          </p>
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
