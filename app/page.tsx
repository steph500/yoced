import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { ImpactNetwork } from "@/components/ImpactNetwork";
import { audiences } from "@/lib/audiences";
import { partners } from "@/lib/partners";
import { photo } from "@/lib/photos";
import { technologyPartner } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";
import { ventures } from "@/lib/ventures";
import { ventureImage } from "@/lib/ventureAssets";

const heroPhoto = photo("training-session");

const bpmStages = [
  ["01", "Design", "Identify the current process and the change that is needed."],
  ["02", "Modelling", "Test proposed changes against the variables that can break them."],
  ["03", "Execution", "Put the process into operation with the tools needed to manage it."],
  ["04", "Monitoring", "Track completion, effectiveness and where the process is leaking value."],
  ["05", "Optimisation", "Apply what the evidence shows and improve the system again."],
] as const;

const featuredQuote = testimonials.find((item) => item.name === "Fundi Ngundi") ?? testimonials[0];

export default function HomePage() {
  return (
    <PageShell>
      <div className="home-signalbar" role="note">
        <span><i aria-hidden="true" /> YOCED partnership & programme platform</span>
        <Link href="/partners">Explore partnership routes <ArrowUpRight size={13} aria-hidden="true" /></Link>
      </div>

      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-hero__copy">
          <span className="home-kicker">Youth Corporate & Economic Development · Kenya</span>
          <h1 id="home-heading">Build ideas<br />into <mark>impact.</mark></h1>
          <p className="home-hero__lede">
            Empowering youth. Building ventures. Strengthening communities. Advancing sustainable
            economic development through partnerships that scale.
          </p>
          <div className="home-actions">
            <Link href="/programs" className="home-button home-button--signal">
              Explore programs <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/partners" className="home-button home-button--dark">
              Partner with YOCED <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="home-audience-strip" aria-label="Explore YOCED by audience">
            <span>I want to explore as:</span>
            <div>
              {audiences.map((audience) => (
                <Link key={audience.slug} href={`/for/${audience.slug}`}>{audience.navLabel}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="home-hero__visual">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
            placeholder="blur"
            blurDataURL={heroPhoto.blurDataURL}
          />
          <div className="home-hero__veil" aria-hidden="true" />
          <div className="home-purpose-card">
            <span className="home-kicker">Our purpose</span>
            <p>
              Unlock the potential of young people and local economies through innovation,
              enterprise and strategic partnerships.
            </p>
            <Link href="/about">Our approach <ArrowUpRight size={13} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <div className="home-atlas-layout" id="impact-atlas">
        <ImpactNetwork />
        <aside className="home-partner-rail" aria-labelledby="partner-rail-heading">
          <span className="home-kicker">Our partners</span>
          <h2 id="partner-rail-heading">Partnerships that widen what YOCED can do.</h2>
          <div className="home-partner-list">
            {partners.map((partner) => (
              <div key={partner.name} className="home-partner-item">
                <span className="home-partner-item__mark">{partner.name.slice(0, 2).toUpperCase()}</span>
                <span><b>{partner.name}</b><small>{partner.role ?? partner.field}</small></span>
              </div>
            ))}
          </div>
          <p className="home-partner-rail__note">
            Network relationships vary by initiative. Outreach history is not presented as partnership.
          </p>
          <Link href="/partners" className="home-inline-link">View all partners <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </aside>
      </div>

      <section className="home-ventures" aria-labelledby="ventures-heading">
        <div className="home-section-title home-section-title--compact">
          <div>
            <span className="home-kicker">Ventures we support</span>
            <h2 id="ventures-heading">Enterprise is where the model meets the market.</h2>
          </div>
          <Link href="/ventures" className="home-inline-link">See all ventures <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
        <div className="home-venture-track">
          {ventures.map((venture) => {
            const image = ventureImage(venture.slug);
            return (
              <Link key={venture.slug} href={`/ventures/${venture.slug}`} className="home-venture-card">
                <span className="home-venture-card__media" data-empty={!image}>
                  {image ? <Image src={image} alt="" fill sizes="240px" /> : <span>{venture.cipher}</span>}
                  <i aria-hidden="true" />
                </span>
                <span className="home-venture-card__body">
                  <b>{venture.name}</b>
                  <small>{venture.sector}</small>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {featuredQuote ? (
        <section className="home-perspective" aria-labelledby="perspective-heading">
          <div className="home-perspective__quote">
            <span className="home-kicker">From the YOCED archive · Words of Wisdom</span>
            <blockquote id="perspective-heading">“{featuredQuote.quote}”</blockquote>
            <p><b>{featuredQuote.name}</b> · {featuredQuote.role}</p>
          </div>
          <div className="home-perspective__media">
            {featuredQuote.portrait ? <Image src={featuredQuote.portrait} alt="" fill sizes="360px" /> : null}
          </div>
        </section>
      ) : null}

      <section className="home-operating" aria-labelledby="operating-heading">
        <div className="home-operating__intro">
          <span className="home-kicker home-kicker--signal">Business Process Management</span>
          <h2 id="operating-heading">The operating discipline underneath the mission.</h2>
          <p>
            YOCED’s earlier material defined BPM through five stages. That structure remains useful:
            programs should be designed, tested, run, measured and improved rather than left as intentions.
          </p>
          <Link href="/programs/business-development" className="home-button home-button--outline">Explore BPM <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <ol className="home-bpm-grid">
          {bpmStages.map(([number, title, body]) => (
            <li key={number}>
              <span>{number}</span>
              <b>{title}</b>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-partners-band" aria-labelledby="partners-band-heading">
        <div>
          <span className="home-kicker">Partner network</span>
          <h2 id="partners-band-heading">Built to collaborate.</h2>
        </div>
        <div className="home-wordmarks">
          {partners.map((partner) => (
            <span key={partner.name} data-tech={partner.name === technologyPartner.name}>
              {partner.name}
              {partner.role ? <small>{partner.role}</small> : null}
            </span>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div>
          <span className="home-kicker home-kicker--signal">Partnerships · funding · programme delivery</span>
          <h2>Bring the mandate. We will route you to the right part of YOCED.</h2>
          <p>
            Tell us the field, geography, communities, capability or funding objective you are working with.
            The conversation starts there, not with a generic organisation deck.
          </p>
        </div>
        <Link href="/contact?topic=partnership" className="home-button home-button--signal">
          Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </PageShell>
  );
}
