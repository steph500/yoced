import { notFound } from "next/navigation";
import { PageShell } from "@/components/SiteChrome";
import { programs } from "@/lib/content";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find((item) => item.slug === slug);
  if (!program) notFound();

  return (
    <PageShell>
      <article className="program-detail">
        <section className="program-detail-hero">
          <div>
            <span className="kicker">YOCED program field</span>
            <h1>{program.title}</h1>
          </div>
          <div className="program-detail-side">
            <p>{program.description}</p>
          </div>
        </section>

        <section className="detail-strip">
          <div>
            <span>Who this is for</span>
            <h3>{program.audience.join(" · ")}</h3>
          </div>
          <div>
            <span>What we build toward</span>
            <h3>{program.outcomes[0]}</h3>
          </div>
          <div>
            <span>Partnership route</span>
            <h3>Program-specific collaboration</h3>
          </div>
        </section>

        <section className="content-wrap">
          <div className="content-grid">
            <article className="content-card">
              <span className="kicker">Program outcomes</span>
              <h2>What this field is designed to move.</h2>
              <ul className="list-clean">
                {program.outcomes.map((outcome, index) => <li key={outcome}><span>{outcome}</span><span>0{index + 1}</span></li>)}
              </ul>
            </article>
            <article className="content-card">
              <span className="kicker">Partner with this field</span>
              <h2>A direct door into YOCED.</h2>
              <p>This page is designed to be shared independently with partners whose mandate matches this field. It keeps the conversation focused while connecting back to the wider YOCED ecosystem.</p>
              <p><a className="button primary" href={`mailto:yoced.ke@gmail.com?subject=YOCED ${encodeURIComponent(program.title)} partnership`}>Start a conversation</a></p>
            </article>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
