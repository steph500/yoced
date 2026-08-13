import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { AtlasIndex } from "@/components/AtlasIndex";
import { Plate } from "@/components/Photo";
import { Sequence } from "@/components/Sequence";
import { reveal } from "@/lib/reveal";
import { clusters, programs, programsInCluster } from "@/lib/programs";
import { audiences } from "@/lib/audiences";
import { ventures } from "@/lib/ventures";
import { partners } from "@/lib/partners";
import { photo, photoSet } from "@/lib/photos";
import { site } from "@/lib/site";

const previews = Object.fromEntries(
  programs.map((program) => [program.slug, program.heroPhoto ? photo(program.heroPhoto) : undefined]),
);

const roomPhotos = photoSet(
  "conference-plenary",
  "conference-delegate-pass",
  "conference-address",
  "conference-delegates",
  "conference-performance",
  "institutional-delegation",
);

const tickerItems = programs.map((program) => `${program.code} ${program.title}`);

const reelPhotos = photoSet(
  "ancestral-hands-key-art",
  "stage-254-lead",
  "stage-house-audience",
  "field-preparation",
  "groundnut-lifted",
  "weeding-team",
  "groundnut-peanut-butter",
  "riverbank-tree-planting",
  "conference-delegation",
  "partner-farm-kale",
  "partner-254-brewing",
  "training-session",
);

export default function HomePage() {
  return (
    <PageShell>
      {/* Hero ---------------------------------------------------------- */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__meta">
          <span className="label">{site.location}</span>
          <span className="label">Enterprise · Land · Skills · Capital</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            13 fields · 6 ventures
          </span>
        </div>

        <h1 className="grotesk hero__headline" id="hero-heading">
          Ideas are cheap. <em className="stroke">Operations</em> are what last.
        </h1>

        <div className="hero__foot">
          <p>
            YOCED builds the layer underneath youth opportunity in Kenya — the enterprises,
            field operations, skills and funding routes that turn capability into an income
            that survives the season.
          </p>
          <div className="btn-row">
            <Link href="#atlas" className="btn btn--solid">
              Open the atlas <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/work" className="btn">
              See the field work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          <span>{tickerItems.join(" ")}</span>
          <span>{tickerItems.join(" ")}</span>
        </div>
      </div>

      {/* Documentary opener — the first photograph anyone sees. ---------- */}
      <Plate photo={photo("land-preparation-crew")} priority />

      {/* Audience doors ------------------------------------------------ */}
      <section className="band wrap" aria-labelledby="doors-heading">
        <div className="section-head">
          <div>
            <span className="label">Where do I belong here?</span>
            <h2 className="display t-1" id="doors-heading" style={{ marginTop: 14 }}>
              Five routes in. Pick the one that describes you.
            </h2>
          </div>
          <p>
            YOCED is deliberately broad, so the first job of this site is to get you out of the
            parts that are not yours.
          </p>
        </div>

        <ul className="doors">
          {audiences.map((audience, index) => (
            <li key={audience.slug} data-accent={audience.accent} {...reveal(index * 45)}>
              <Link href={`/for/${audience.slug}`}>
                <span className="code">{String(index + 1).padStart(2, "0")}</span>
                <span className="doors__q">{audience.question}</span>
                <span className="doors__a">{audience.lede}</span>
                <span className="doors__go">
                  {audience.navLabel} <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* The atlas ------------------------------------------------------ */}
      <AtlasIndex
        programs={programs}
        previews={previews}
        heading="Thirteen fields, one organisation, and a direct route into each."
        intro="Every field below has its own page, its own partnership models and its own URL — built to be sent to a colleague on its own without dragging the rest of YOCED along with it."
      />

      {/* Statement ------------------------------------------------------ */}
      <section className="statement wrap" aria-labelledby="statement-heading">
        <span className="label" id="statement-heading">
          One ecosystem / many doors
        </span>
        <p className="display">
          Broad is not the same as <span className="mark">blurry</span>. Employment, land,
          money, health and rights fail together — so we stopped pretending they could be
          fixed separately.
        </p>
      </section>

      {/* The argument ----------------------------------------------------- */}
      <section className="band band--tight wrap" aria-labelledby="hiw-band-heading">
        <div className="section-head">
          <div>
            <span className="label">The argument</span>
            <h2 className="display t-1" id="hiw-band-heading" style={{ marginTop: 14 }}>
              One formalised artist anchors a micro-economy.
            </h2>
          </div>
          <p>
            Registration, an intellectual property position and a set of books are what turn a
            practice into something that can be lent to, contracted with and exported. That is
            the whole mechanism, and it scales.
          </p>
        </div>
        <p>
          <Link href="/how-it-works" className="link">
            How YOCED works — the infrastructure, the multiplier and the export case{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </p>
      </section>

      {/* Institutional presence ------------------------------------------ */}
      <section className="band band--tight wrap" aria-labelledby="room-heading">
        <div className="railed">
          <span className="label">In the room</span>
          <div>
            <h2 className="display t-2" id="room-heading">
              Development is decided in rooms as often as in fields.
            </h2>
            <div className="prose" style={{ maxWidth: "60ch", marginTop: 18 }}>
              <p>
                YOCED attended the National Productivity and Performance Conference 2026 at the
                Kenya School of Government, Lower Kabete, with its Founder accredited as a
                delegate. Presence is what that evidences — and presence is worth showing, because
                it is where scope, access and delivery get agreed.
              </p>
            </div>
            <p style={{ marginTop: 20 }}>
              <Link href="/work" className="link">
                See the record <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Stepped in sequence, captioned rather than cropped: the delegate pass
          has to stay readable, and the broadcast frames carry their source. */}
      <div className="wrap">
        <Sequence photos={roomPhotos} label="YOCED institutional presence" />
      </div>

      {/* Clusters ------------------------------------------------------- */}
      <section className="band on-ink" aria-labelledby="clusters-heading">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">How the thirteen fit together</span>
              <h2 className="display t-1" id="clusters-heading" style={{ marginTop: 14 }}>
                Four clusters.
              </h2>
            </div>
            <p>
              The fields are grouped by the problem they solve, not by the department that runs
              them. Most real work crosses at least two.
            </p>
          </div>

          <div className="clusters">
            {clusters.map((cluster) => (
              <div className="cluster" key={cluster.id} data-accent={cluster.accent} {...reveal()}>
                <div>
                  <span className="label label--accent">{cluster.title}</span>
                  <h3 className="cluster__title">{cluster.short}</h3>
                </div>
                <ul className="cluster__fields">
                  {programsInCluster(cluster.id).map((program) => (
                    <li key={program.slug}>
                      <Link href={`/programs/${program.slug}`}>
                        <span className="code">{program.code}</span>
                        <span>{program.title}</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field work ----------------------------------------------------- */}
      <section className="band" aria-labelledby="work-heading">
        <div className="wrap section-head">
          <div>
            <span className="label">Field archive / photographed, not illustrated</span>
            <h2 className="display t-1" id="work-heading" style={{ marginTop: 14 }}>
              This is the work, as it actually looks.
            </h2>
          </div>
          <p>
            The creative sector, field production, institutional presence and the partner
            network. Captions describe what is in the frame and nothing more, and anything YOCED
            did not photograph carries its source.
          </p>
        </div>

        <div className="wrap">
          <Sequence photos={reelPhotos} label="YOCED field archive" />
          <div className="archive-cta">
            <p className="muted" style={{ fontSize: ".95rem", maxWidth: "52ch" }}>
              Four chapters: the creative sector, on stage and behind it; the season, from land
              preparation to a jar on a shelf; the rooms YOCED has been present in; and the sites
              and organisations it works alongside.
            </p>
            <Link href="/work" className="btn btn--solid">
              Open the full archive <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ventures ------------------------------------------------------- */}
      <section className="band wrap" aria-labelledby="ventures-heading">
        <div className="section-head">
          <div>
            <span className="label">Active ventures / {ventures.length}</span>
            <h2 className="display t-1" id="ventures-heading" style={{ marginTop: 14 }}>
              Businesses, not case studies.
            </h2>
          </div>
          <p>
            Six active ventures across furniture, food, apparel, film and craft — each one a
            live test of whether the enterprise model actually holds.
          </p>
        </div>

        <ul className="ventures">
          {ventures.map((venture) => (
            <li key={venture.slug} data-accent={venture.accent} {...reveal()}>
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
      </section>

      {/* Partners ------------------------------------------------------- */}
      <section className="band band--tight on-ink" aria-labelledby="partners-heading">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label">Network</span>
              <h2 className="display t-2" id="partners-heading" style={{ marginTop: 14 }}>
                Organisations in the YOCED network.
              </h2>
            </div>
            <p>
              Shown as network, not as endorsement. Nothing here states that an organisation
              currently funds YOCED.
            </p>
          </div>

          <ul className="tags" style={{ gap: 10 }}>
            {partners.map((partner) => (
              <li key={partner.name} style={{ fontSize: ".8rem", padding: "9px 15px" }}>
                {partner.name}
                {partner.role ? ` · ${partner.role}` : ""}
              </li>
            ))}
          </ul>

          <p style={{ marginTop: 28 }}>
            <Link href="/partners" className="link">
              How partnership works at YOCED <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* Close ---------------------------------------------------------- */}
      <section className="band wrap">
        <div className="cta-panel" data-accent="clay">
          <div>
            <span className="label">Start a conversation</span>
            <h2>Tell us which field, and we will route it from there.</h2>
            <p>
              Program inquiry, partnership, funding, youth support, corporate collaboration,
              media or technology — the form routes each one to the right part of YOCED.
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
