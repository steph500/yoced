import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { reveal } from "@/lib/reveal";
import { ventures } from "@/lib/ventures";
import { getProgram } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Six active ventures in the YOCED ecosystem: Casa Furnishings, Sweet & Fancy, Slice & Ice, Fashion & Design, Film and Crafted Africa — across furniture, food, apparel, film and craft.",
  alternates: { canonical: "/ventures" },
  openGraph: {
    title: "YOCED ventures",
    description: "Six active businesses across furniture, food, apparel, film and craft.",
    url: "/ventures",
  },
};

export default function VenturesPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="ventures-heading">
        <div className="hero__meta">
          <span className="label">Ventures</span>
          <span className="label">All active</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            {ventures.length} businesses
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="ventures-heading">
          Where the model gets <em>tested</em>.
        </h1>
        <div className="hero__foot">
          <p>
            A development model is only as good as the businesses it produces. These six are
            where YOCED’s enterprise support meets a customer, a margin and a payroll.
          </p>
          <div className="btn-row">
            <Link href="/contact?topic=partnership" className="btn btn--solid">
              Work with a venture <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="band band--tight wrap">
        <ul className="ventures">
          {ventures.map((venture, index) => (
            <li key={venture.slug} data-accent={venture.accent} {...reveal(index * 40)}>
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

      <section className="band on-ink wrap" aria-labelledby="how-heading">
        <div className="section-head">
          <div>
            <span className="label">How ventures sit inside YOCED</span>
            <h2 className="display t-1" id="how-heading" style={{ marginTop: 14 }}>
              Supported, not owned outright.
            </h2>
          </div>
          <p>
            Ventures carry their own operations and their own customers. YOCED’s role is the
            layer underneath.
          </p>
        </div>

        <ul className="defs">
          <li>
            <span className="code">01</span>
            <span className="defs__t">Business development</span>
            <span className="defs__d">
              Process mapping, costing and the operational systems that let a venture be
              delegated and grown.{" "}
              <Link href="/programs/business-development" className="link">
                {getProgram("business-development")?.code}
              </Link>
            </span>
          </li>
          <li>
            <span className="code">02</span>
            <span className="defs__t">Capital</span>
            <span className="defs__d">
              Working capital through the rotational funding model, for ventures that are
              operationally ready.{" "}
              <Link href="/programs/capital-rotational-funding" className="link">
                {getProgram("capital-rotational-funding")?.code}
              </Link>
            </span>
          </li>
          <li>
            <span className="code">03</span>
            <span className="defs__t">Employment structure</span>
            <span className="defs__d">
              Defined roles and training routes so ventures can take on young people at entry
              level and keep them.{" "}
              <Link href="/programs/job-creation" className="link">
                {getProgram("job-creation")?.code}
              </Link>
            </span>
          </li>
          <li>
            <span className="code">04</span>
            <span className="defs__t">Ownership and rights</span>
            <span className="defs__d">
              For the creative ventures, establishing what the maker owns before it is shown to
              anyone larger.{" "}
              <Link href="/programs/intellectual-property" className="link">
                {getProgram("intellectual-property")?.code}
              </Link>
            </span>
          </li>
        </ul>
      </section>

      <section className="band wrap">
        <div className="cta-panel" data-accent="clay">
          <div>
            <span className="label">Buyers, suppliers, partners</span>
            <h2>Every venture here is open to commercial relationships.</h2>
            <p>
              Orders, stockist relationships, supply, equipment, site partnerships and training
              placements. Say which venture and YOCED will connect it directly.
            </p>
          </div>
          <Link href="/contact?topic=partnership" className="btn">
            Get in touch <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
