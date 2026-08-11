import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { ventures } from "@/lib/ventures";
import { ventureImage } from "@/lib/ventureAssets";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Six active ventures in the YOCED ecosystem across furniture, food, apparel, film and craft.",
  alternates: { canonical: "/ventures" },
  openGraph: { title: "YOCED ventures", description: "Six active ventures connected to YOCED's enterprise model.", url: "/ventures" },
};

export default function VenturesPage() {
  return (
    <PageShell>
      <section className="hero" aria-labelledby="ventures-heading">
        <div className="hero__meta"><span className="label">Active ventures</span><span className="label">{ventures.length} businesses</span></div>
        <h1 className="grotesk hero__headline" id="ventures-heading">Ideas that reached the <em>market</em>.</h1>
        <div className="hero__foot">
          <p>
            YOCED&apos;s enterprise work is meant to become operational, not remain a workshop exercise.
            These are the active ventures currently carried in the ecosystem. Commercial capacity,
            pricing and current order information are handled directly rather than invented on this site.
          </p>
          <Link href="/contact?topic=partnership" className="btn btn--solid">Work with a venture <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="band wrap">
        <div className="venture-gallery">
          {ventures.map((venture) => {
            const image = ventureImage(venture.slug);
            return (
              <Link key={venture.slug} href={`/ventures/${venture.slug}`} className="venture-gallery__card">
                <div className="venture-gallery__media" data-empty={!image}>
                  {image ? <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" /> : <span>{venture.cipher}</span>}
                  <div className="venture-gallery__veil" />
                  <span className="venture-gallery__status">{venture.status}</span>
                </div>
                <div className="venture-gallery__body">
                  <span className="code">{venture.cipher}</span>
                  <div><h2>{venture.name}</h2><p>{venture.short}</p><small>{venture.sector}</small></div>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="band on-ink wrap">
        <div className="section-head">
          <div><span className="label">How ventures sit inside YOCED</span><h2 className="display t-1" style={{marginTop:14}}>The operating layer underneath.</h2></div>
          <p>Business development, working-capital routes, employment structure, ownership and market access connect differently depending on the venture.</p>
        </div>
        <div className="venture-model-grid">
          <div><span>01</span><b>Business systems</b><p>Process mapping, costing, records and the operational structure behind growth.</p></div>
          <div><span>02</span><b>Capital readiness</b><p>Funding conversations come after an operation can be assessed, not before.</p></div>
          <div><span>03</span><b>Employment</b><p>Ventures can become places where skills translate into real roles and production experience.</p></div>
          <div><span>04</span><b>Ownership</b><p>Creative ventures connect directly to YOCED&apos;s intellectual-property and rights work.</p></div>
        </div>
      </section>

      <section className="band wrap"><div className="cta-panel"><div><span className="label">Buyers · suppliers · collaborators</span><h2>Ask about a real venture directly.</h2><p>Orders, supply, equipment, placements, technical support or other commercial relationships.</p></div><Link href="/contact?topic=partnership" className="btn">Start an inquiry <ArrowUpRight size={17} aria-hidden="true" /></Link></div></section>
    </PageShell>
  );
}
