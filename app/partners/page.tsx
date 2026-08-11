import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Plate } from "@/components/Photo";
import { partners } from "@/lib/partners";
import { clusters, programs, programsInCluster } from "@/lib/programs";
import { testimonials } from "@/lib/testimonials";
import { photo } from "@/lib/photos";
import { technologyPartner } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners & funders",
  description:
    "Partner with YOCED through a defined program field, venture, capability or delivery mandate. Explore partnership routes across twelve active fields in Kenya.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Partner with YOCED",
    description: "Enter through one field. The rest of the ecosystem stays available.",
    url: "/partners",
  },
};

const partnershipRoutes = programs.reduce((count, program) => count + program.partnershipModels.length, 0);

export default function PartnersPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="partners-heading">
        <div className="hero__meta">
          <span className="label">Partners · funders · collaborators</span>
          <span className="label">{programs.length} active fields</span>
          <span className="label" style={{ marginLeft: "auto" }}>{partnershipRoutes} defined partnership routes</span>
        </div>
        <h1 className="grotesk hero__headline" id="partners-heading">Enter through <em>one</em> field.</h1>
        <div className="hero__foot">
          <p>
            YOCED is broad by design, but a partnership does not have to be. Start with the
            program, geography, community, technical capability or funding objective that matches
            your mandate and the conversation stays there until there is a reason to widen it.
          </p>
          <div className="btn-row">
            <Link href="/contact?topic=partnership" className="btn btn--solid">Open a conversation <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link href="/for/funders" className="btn">Funder due diligence route <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <Plate photo={photo("partner-meeting")} priority />

      <section className="band wrap" aria-labelledby="network-heading">
        <div className="section-head">
          <div>
            <span className="label">YOCED network</span>
            <h2 className="display t-1" id="network-heading" style={{ marginTop: 14 }}>Relationships that widen what can be built.</h2>
          </div>
          <p>
            Organisations below are carried over from YOCED&apos;s previous public partner network.
            Their presence is not presented as a current funding commitment or endorsement.
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
                    <span className="label">{partner.field}</span>
                    {partner.role ? <span className="partner__role">{partner.role}</span> : null}
                  </div>
                </div>
              </>
            );
            return partner.href ? (
              <a key={partner.name} href={partner.href} className="partner" rel="noopener noreferrer" target="_blank">{inner}</a>
            ) : <div key={partner.name} className="partner">{inner}</div>;
          })}
        </div>
      </section>

      <section className="band on-ink wrap" aria-labelledby="models-heading">
        <div className="section-head">
          <div>
            <span className="label">Partnership directory</span>
            <h2 className="display t-1" id="models-heading" style={{ marginTop: 14 }}>Start with the work, not the bureaucracy.</h2>
          </div>
          <p>Every field has concrete partnership models covering delivery, technical capacity, market access, funding or combinations of them.</p>
        </div>
        {clusters.map((cluster) => (
          <div key={cluster.id} data-accent={cluster.accent} style={{ marginBottom: 34 }}>
            <span className="label label--accent">{cluster.title}</span>
            <ul className="defs" style={{ marginTop: 9 }}>
              {programsInCluster(cluster.id).map((program) => (
                <li key={program.slug}>
                  <span className="code">{program.code}</span>
                  <span className="defs__t"><Link href={`/programs/${program.slug}`} className="link">{program.title}</Link></span>
                  <span className="defs__d">{program.partnershipModels.map((model) => model.title).join(" · ")}</span>
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
            <h2 className="display t-2" id="tech-heading" style={{ marginBottom: 14 }}>{technologyPartner.name}</h2>
            <div className="prose" style={{ maxWidth: "62ch" }}>
              <p>{technologyPartner.note}</p>
              <p>The relationship is a technology partnership. YOCED remains an independent organisation.</p>
            </div>
            <a href={technologyPartner.url} className="link" rel="noopener noreferrer" target="_blank">selfawaretech.com <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      {testimonials.length > 0 ? (
        <section className="band on-ink wrap" aria-labelledby="voices-heading">
          <div className="section-head">
            <div>
              <span className="label">YOCED archive · Words of Wisdom</span>
              <h2 className="display t-1" id="voices-heading" style={{ marginTop: 14 }}>Perspectives preserved from the previous YOCED site.</h2>
            </div>
            <p>These are archived perspectives, not statements of current funding or endorsement.</p>
          </div>
          <div className="archive-voices">
            {testimonials.map((item) => (
              <article className="archive-voice" key={item.name}>
                {item.portrait ? <div className="archive-voice__portrait"><Image src={item.portrait} alt="" fill sizes="120px" /></div> : null}
                <blockquote>“{item.quote}”</blockquote>
                <p><b>{item.name}</b>{item.role ? ` · ${item.role}` : ""}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="band wrap">
        <div className="cta-panel">
          <div>
            <span className="label">Next step</span>
            <h2>Tell us the mandate. We will route it to the right field.</h2>
            <p>No generic intake maze: program, partnership, funding, delivery, venture or technology.</p>
          </div>
          <Link href="/contact?topic=partnership" className="btn">Contact YOCED <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>
    </PageShell>
  );
}
