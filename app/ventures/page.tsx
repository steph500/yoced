import { PageShell } from "@/components/SiteChrome";
import { ventures } from "@/lib/content";

export default function VenturesPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="kicker">Ventures / active ecosystem</span>
        <h1>Ideas in motion.</h1>
        <p>Businesses and creative ventures connected to the YOCED ecosystem. Each venture will expand into its own case-study page as the current fieldwork photo archive is added.</p>
      </section>
      <section className="content-wrap">
        <div className="venture-grid">
          {ventures.map((venture) => (
            <article className="venture-card" key={venture.name}>
              <span className="status">{venture.status}</span>
              <h2>{venture.name}</h2>
              <p>{venture.field}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
