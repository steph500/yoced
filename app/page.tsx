import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ImpactAtlas } from "@/components/ImpactAtlas";
import { PageShell } from "@/components/SiteChrome";
import { pathways, programs, ventures } from "@/lib/content";

export default function HomePage() {
  const ticker = [
    "Job creation", "Business development", "Skills & education", "Intellectual property", "Agriculture", "Health", "Women empowerment", "Financial literacy", "Technology", "Youth & creative rights", "Climate action", "Rotational funding"
  ];

  return (
    <PageShell>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Nairobi, Kenya / Youth Corporate & Economic Development</span>
          <h1>Build ideas <span>into impact.</span></h1>
        </div>
        <div className="hero-note">
          <p>YOCED is an ecosystem that turns ideas into sustainable ventures, skills into livelihoods, and partnerships into measurable community impact.</p>
          <div className="hero-actions">
            <Link href="#atlas" className="button primary">Explore the atlas <ArrowDown size={17} /></Link>
            <Link href="/partners" className="button signal">Partner with us <ArrowUpRight size={17} /></Link>
          </div>
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div>{[...ticker, ...ticker].map((item, index) => <span key={`${item}-${index}`}>{item} &nbsp; ✦ &nbsp; </span>)}</div>
        </div>
      </section>

      <section className="pathways">
        <div className="pathway-grid">
          {pathways.map((pathway, index) => (
            <Link className="pathway-card" href={pathway.href} key={pathway.href}>
              <div className="pathway-number">0{index + 1} / {pathway.eyebrow}</div>
              <div>
                <h3>{pathway.label}</h3>
                <p>{pathway.copy}</p>
              </div>
              <div className="pathway-link">Enter pathway <ArrowUpRight size={18} /></div>
            </Link>
          ))}
        </div>
      </section>

      <ImpactAtlas programs={programs} />

      <section className="statement">
        <div className="statement-inner">
          <span className="kicker">One ecosystem / many doors</span>
          <p>We are deliberately broad, but never blurry. Every field has a <strong>clear route in</strong>, a shareable destination, and room to build serious partnerships.</p>
        </div>
      </section>

      <section className="archive-band">
        <div className="archive-visual" aria-label="Project photography placeholder awaiting current YOCED fieldwork photo archive" />
        <div className="archive-copy">
          <div>
            <span className="kicker">Projects / ventures / field work</span>
            <h2>Work that moves beyond the website.</h2>
            <p>YOCED supports active ventures and practical projects across creative enterprise, business development, climate, agriculture, technology and community empowerment.</p>
          </div>
          <Link href="/ventures" className="button primary">Explore {ventures.length} active ventures <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </PageShell>
  );
}
