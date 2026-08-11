import { PageShell } from "@/components/SiteChrome";
import { team } from "@/lib/content";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="kicker">About YOCED</span>
        <h1>An ecosystem for youth-led economic development.</h1>
        <p>YOCED, Youth Corporate and Economic Development, exists to help young people, creatives and communities move from ideas and capability to sustainable ventures, livelihoods and long-term economic participation.</p>
      </section>

      <section className="content-wrap">
        <div className="content-grid">
          <article className="content-card">
            <span className="kicker">How we work</span>
            <h2>Ideas become systems.</h2>
            <p>YOCED combines business development, training, networks, funding pathways, technology, research and program partnerships. Our roots include Business Process Management and Business Process Outsourcing approaches that help ideas become structured, measurable and scalable.</p>
          </article>
          <article className="content-card">
            <span className="kicker">Why we are broad</span>
            <h2>Economic development is connected.</h2>
            <p>Employment, health, education, climate, finance, agriculture, technology, rights and entrepreneurship rarely exist in isolation. YOCED keeps these fields connected while giving each one its own clear program route.</p>
          </article>
        </div>
      </section>

      <section className="content-wrap" style={{ paddingTop: 0 }}>
        <span className="kicker">Leadership</span>
        <div className="team-grid" style={{ marginTop: 22 }}>
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <span className="monogram" aria-hidden="true">{person.initials}</span>
              <h2>{person.name}</h2>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
