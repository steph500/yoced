import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { programs } from "@/lib/programs";
import { audiences } from "@/lib/audiences";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <div className="wrap state">
        <span className="label">404 / off the map</span>
        <h1>This page is not in the atlas.</h1>
        <p>
          The link may be out of date, or the page may have moved during the site rebuild.
          Everything YOCED does lives in one of the thirteen fields below.
        </p>
        <div className="btn-row" style={{ marginTop: 10 }}>
          <Link href="/" className="btn btn--solid">
            Back to the start <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link href="/programs" className="btn">
            Open the atlas <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <section className="band band--tight wrap">
        <span className="label">Thirteen fields</span>
        <ul className="rows" style={{ marginTop: 16 }}>
          {programs.map((program) => (
            <li key={program.slug}>
              <Link
                href={`/programs/${program.slug}`}
                className="link"
                style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", width: "100%" }}
              >
                <span>{program.title}</span>
                <span className="code muted">{program.code}</span>
              </Link>
            </li>
          ))}
        </ul>

        <span className="label" style={{ marginTop: 40 }}>
          Or start from who you are
        </span>
        <ul className="rows" style={{ marginTop: 16 }}>
          {audiences.map((audience) => (
            <li key={audience.slug}>
              <Link
                href={`/for/${audience.slug}`}
                className="link"
                style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", width: "100%" }}
              >
                <span>{audience.label}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
