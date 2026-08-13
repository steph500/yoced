import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { Plate } from "@/components/Photo";
import { reveal } from "@/lib/reveal";
import { photo } from "@/lib/photos";
import { chapters, heritage, multiplier, partnerRoles } from "@/lib/thesis";

export const metadata: Metadata = {
  title: "How YOCED works",
  description:
    "YOCED's economic argument: formalising creative practice through business registration, intellectual property protection and financial record-keeping — and what that produces in employment, GDP and export competitiveness.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How YOCED works",
    description:
      "From informal gig-workers to formal, bankable brands — the infrastructure, the multiplier, and the case for a self-sustaining creative economy.",
    url: "/how-it-works",
  },
};

const [structure, gdp, borders] = chapters;

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="hiw-heading">
        <div className="hero__meta">
          <span className="label">The argument</span>
          <span className="label">Infrastructure · Multiplier · Export</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            Four parts
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="hiw-heading">
          From gig-workers to <em className="stroke">bankable brands</em>.
        </h1>
        <div className="hero__foot">
          <p>
            The creative sector is not short of talent. It is short of the structure that lets
            talent be lent to, contracted with and bought from. This is how YOCED builds that
            structure, and what it produces when it holds.
          </p>
          <div className="btn-row">
            <Link href="/programs/creatives" className="btn btn--solid">
              The Creatives field <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/contact?topic=partnership" className="btn">
              Partner on this <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Plate photo={photo("stage-house-audience")} priority />

      {/* I — Structuring the system ------------------------------------- */}
      <section className="band wrap" aria-labelledby="structure-heading">
        <div className="railed">
          <span className="label label--accent">
            {structure.code} / {structure.label}
          </span>
          <div>
            <h2 className="display t-1" id="structure-heading">
              {structure.title}
            </h2>
            <div className="prose" style={{ maxWidth: "62ch", marginTop: 22 }}>
              {structure.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band band--tight wrap" aria-labelledby="roles-heading">
        <div className="section-head">
          <div>
            <span className="label">Who does what</span>
            <h2 className="display t-2" id="roles-heading" style={{ marginTop: 14 }}>
              Three partners, three distinct jobs.
            </h2>
          </div>
          <p>
            The model does not work with one of these missing. Each partner supplies something
            the others structurally cannot.
          </p>
        </div>
        <ul className="defs">
          {partnerRoles.map((role, index) => (
            <li key={role.title} {...reveal(index * 45)}>
              <span className="code">{String(index + 1).padStart(2, "0")}</span>
              <span className="defs__t">{role.title}</span>
              <span className="defs__d">{role.body}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* II — The multiplier --------------------------------------------- */}
      <section className="band on-ink" aria-labelledby="math-heading">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="label label--accent">II / The exponential employment multiplier</span>
              <h2 className="display t-1" id="math-heading" style={{ marginTop: 14 }}>
                The math.
              </h2>
            </div>
            <p>
              One formalised artist anchors a micro-economy. Set out step by step, so that every
              assumption in it is visible and arguable.
            </p>
          </div>

          <ul className="ledger">
            {multiplier.steps.map((step, index) => (
              <li key={step.code} {...reveal(index * 50)}>
                <span className="code">{step.code}</span>
                <span className="ledger__value display">{step.value}</span>
                <span className="ledger__body">{step.body}</span>
              </li>
            ))}
          </ul>

          <div className="ledger__roles">
            <span className="label">The micro-economy a single brand retains</span>
            <ul className="tags" style={{ gap: 10, marginTop: 14 }}>
              {multiplier.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>

          <p className="ledger__note">{multiplier.note}</p>
        </div>
      </section>

      {/* III — GDP -------------------------------------------------------- */}
      <section className="band wrap" aria-labelledby="gdp-heading">
        <div className="railed">
          <span className="label label--accent">
            {gdp.code} / {gdp.label}
          </span>
          <div>
            <h2 className="display t-1" id="gdp-heading">
              {gdp.title}
            </h2>
            <div className="prose" style={{ maxWidth: "62ch", marginTop: 22 }}>
              {gdp.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IV — Beyond borders ---------------------------------------------- */}
      <section className="band band--tight wrap" aria-labelledby="borders-heading">
        <div className="railed">
          <span className="label label--accent">
            {borders.code} / {borders.label}
          </span>
          <div>
            <h2 className="display t-1" id="borders-heading">
              {borders.title}
            </h2>
            <div className="prose" style={{ maxWidth: "62ch", marginTop: 22 }}>
              {borders.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural heritage ------------------------------------------------ */}
      <section className="band on-ink" aria-labelledby="heritage-heading" data-accent="saffron">
        <div className="wrap">
          <div className="railed">
            <span className="label label--accent">{heritage.label}</span>
            <div>
              <h2 className="display t-1" id="heritage-heading">
                {heritage.title}
              </h2>
              <p className="lede lede--wide" style={{ marginTop: 22 }}>
                {heritage.lead}
              </p>
              <div className="prose" style={{ maxWidth: "62ch", marginTop: 22 }}>
                {heritage.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="wrap" style={{ marginTop: "clamp(40px, 5vw, 72px)" }}>
          <p className="display t-2 pull">{heritage.pull}</p>
        </div>
      </section>

      <Plate photo={photo("stage-house-trio")} />

      <section className="band wrap">
        <div className="cta-panel" data-accent="clay">
          <div>
            <span className="label">Build it with us</span>
            <h2>The structure is the product. It needs partners to exist.</h2>
            <p>
              Institutions with curricula to redesign, corporates with off-take to commit, and
              practitioners with something to teach — each has a defined role in this model.
            </p>
          </div>
          <Link href="/contact?topic=partnership" className="btn">
            Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
