import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { programs } from "@/lib/content";

export default function ProgramsPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <span className="kicker">Programs / structured directory</span>
        <h1>One mission. Twelve active fields.</h1>
        <p>Use this directory to go straight to the program area that matches your community, organization, funding mandate or opportunity.</p>
      </section>
      <section className="content-wrap">
        <div className="program-directory">
          {programs.map((program, index) => (
            <Link key={program.slug} href={`/programs/${program.slug}`} className="program-tile">
              <span>{String(index + 1).padStart(2, "0")} / {program.audience.join(" · ")}</span>
              <h2>{program.title}</h2>
              <p>{program.short}</p>
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
