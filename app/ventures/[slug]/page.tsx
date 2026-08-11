import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { getVenture, ventures } from "@/lib/ventures";
import { getProgram } from "@/lib/programs";
import { site } from "@/lib/site";
import { ventureImage } from "@/lib/ventureAssets";
import { BreadcrumbSchema } from "@/components/StructuredData";

type Params = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return ventures.map((venture) => ({ slug: venture.slug })); }
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) return {};
  return {
    title: `${venture.name} — ${venture.sector}`,
    description: venture.lede,
    alternates: { canonical: `/ventures/${venture.slug}` },
    openGraph: { title: `${venture.name} — a YOCED venture`, description: venture.lede, url: `/ventures/${venture.slug}`, type: "article" },
  };
}

export default async function VenturePage({ params }: Params) {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) notFound();
  const image = ventureImage(venture.slug);
  const linkedPrograms = venture.programs.map(getProgram).filter((item) => item !== undefined);
  const others = ventures.filter((item) => item.slug !== venture.slug).slice(0,3);

  return (
    <PageShell>
      <BreadcrumbSchema trail={[{name:"YOCED",path:"/"},{name:"Ventures",path:"/ventures"},{name:venture.name,path:`/ventures/${venture.slug}`}]} />
      <article data-accent={venture.accent}>
        <header className="venture-detail-hero">
          <div className="venture-detail-hero__copy">
            <nav className="pd__crumb" aria-label="Breadcrumb"><Link href="/ventures" className="code">Ventures</Link><span className="code muted">/</span><span className="code">{venture.sector}</span></nav>
            <span className="venture-detail-hero__cipher">{venture.cipher}</span>
            <h1>{venture.name}</h1>
            <p>{venture.lede}</p>
            <div className="btn-row"><Link href={`/contact?topic=partnership&venture=${venture.slug}`} className="btn btn--solid">Work with {venture.name} <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
          </div>
          <div className="venture-detail-hero__media" data-empty={!image}>
            {image ? <Image src={image} alt="" fill priority sizes="(max-width: 900px) 100vw, 50vw" /> : <span>{venture.cipher}</span>}
            <div className="venture-detail-hero__flag">{venture.status} · {venture.sector}</div>
          </div>
        </header>

        <div className="wrap">
          <section className="pd__section"><div><span className="label">01 / The market</span></div><div className="pd__body"><h2>What this sector is like.</h2>{venture.sectorNote.map((paragraph)=><p key={paragraph.slice(0,40)}>{paragraph}</p>)}</div></section>
          <section className="pd__section"><div><span className="label">02 / YOCED&apos;s role</span></div><div><h2>How the enterprise model applies here.</h2><ul className="defs">{venture.support.map((item,index)=><li key={item.title}><span className="code">{String(index+1).padStart(2,"0")}</span><span className="defs__t">{item.title}</span><span className="defs__d">{item.body}</span></li>)}</ul></div></section>
          <section className="pd__section"><div><span className="label">03 / Open to</span></div><div><h2>What an external party can bring or ask for.</h2><ul className="open-to">{venture.openTo.map((item)=><li key={item}>{item}</li>)}</ul><p className="muted" style={{marginTop:20}}>Current capacity, pricing and commercial details are handled directly by the venture rather than guessed here.</p></div></section>
          <section className="pd__section"><div><span className="label">04 / Connected fields</span></div><div><h2>The YOCED programs behind this venture.</h2><div className="next-fields">{linkedPrograms.map((program)=><Link key={program.slug} href={`/programs/${program.slug}`}><span className="code muted">{program.code}</span><h3>{program.title}</h3><p>{program.short}</p><ArrowUpRight size={18} aria-hidden="true" /></Link>)}</div></div></section>
        </div>

        <section className="band wrap"><div className="cta-panel"><div><span className="label">Direct route</span><h2>Talk to {venture.name}.</h2><p>Inquiries route through {site.email}. Say what you need and YOCED will connect the conversation to the venture.</p></div><Link href={`/contact?topic=partnership&venture=${venture.slug}`} className="btn">Send an inquiry <ArrowUpRight size={17} aria-hidden="true" /></Link></div></section>

        <section className="band wrap"><span className="label">Also active</span><div className="venture-mini-grid">{others.map((item)=>{const otherImage=ventureImage(item.slug);return <Link key={item.slug} href={`/ventures/${item.slug}`}><span className="venture-mini-grid__media" data-empty={!otherImage}>{otherImage?<Image src={otherImage} alt="" fill sizes="220px"/>:<b>{item.cipher}</b>}</span><span><b>{item.name}</b><small>{item.sector}</small></span><ArrowUpRight size={16} aria-hidden="true"/></Link>;})}</div></section>
      </article>
    </PageShell>
  );
}
