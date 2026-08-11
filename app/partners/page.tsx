import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { partners, programs } from "@/lib/content";

export default function PartnersPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="kicker">Partners / funders / collaborators</span>
        <h1>Find the part of YOCED that fits your mandate.</h1>
        <p>Partnerships can be program-specific or cross-sector. The structure below makes it easy to enter through one field while still accessing the wider YOCED ecosystem.</p>
      </section>

      <section className="content-wrap">
        <span className="kicker">Ecosystem partners</span>
        <div className="partner-cloud" style={{ marginTop: 22 }}>
          {partners.map((partner, index) => (
            <div className="partner-item" key={partner}>
              <strong>{partner}</strong>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="atlas-section">
        <div className="section-head">
          <div>
            <span className="kicker">Partnership directory</span>
            <h2>Start with the field, not the bureaucracy.</h2>
          </div>
          <p>Choose a YOCED field that overlaps with your organization, then open a direct conversation around that program.</p>
        </div>
        <div className="atlas-grid">
          {programs.map((program, index) => (
            <article className={`atlas-card accent-${program.accent}`} key={program.slug}>
              <div className="atlas-index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{program.title}</h3>
              <p>{program.short}</p>
              <a href={`mailto:yoced.ke@gmail.com?subject=Partnership: ${encodeURIComponent(program.title)}`}>Discuss partnership <ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
