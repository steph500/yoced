import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { clusters, programs } from "@/lib/programs";
import { ventures } from "@/lib/ventures";
import { site } from "@/lib/site";

const positions = [
  [13, 55], [23, 31], [34, 61], [43, 37], [52, 72], [61, 26],
  [70, 52], [81, 34], [88, 68], [27, 78], [58, 50], [75, 79],
] as const;

export function ImpactNetwork() {
  return (
    <section className="home-atlas" aria-labelledby="home-atlas-heading">
      <div className="home-atlas__bar">
        <div>
          <span className="home-kicker home-kicker--signal">Impact Atlas</span>
          <h2 id="home-atlas-heading">Navigate the ecosystem, not a brochure.</h2>
        </div>
        <Link href="/programs" className="home-inline-link">
          Open full atlas <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>

      <div className="home-atlas__body">
        <div className="home-network" aria-label="YOCED program network">
          <svg className="home-network__lines" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
            <path d="M90 310 C210 185 310 355 430 235 S650 190 760 285 S865 370 930 250" />
            <path d="M165 165 C250 270 320 155 410 260 S585 360 690 190 S835 165 900 350" />
            <path d="M175 410 C300 315 385 430 510 325 S710 300 860 410" />
            <path d="M255 115 C360 200 465 100 570 195 S760 225 855 115" />
          </svg>
          <div className="home-network__grid" aria-hidden="true" />
          {programs.map((program, index) => {
            const pos = positions[index] ?? [50, 50];
            const clusterIndex = clusters.findIndex((cluster) => cluster.id === program.cluster);
            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="home-network__node"
                data-cluster={clusterIndex}
                style={{ left: `${pos[0]}%`, top: `${pos[1]}%` }}
                aria-label={`${program.code}: ${program.title}`}
              >
                <span className="home-network__dot" />
                <span className="home-network__tooltip">
                  <b>{program.code}</b>
                  <span>{program.navTitle}</span>
                </span>
              </Link>
            );
          })}
          <div className="home-network__origin">
            <MapPin size={13} aria-hidden="true" /> {site.location}
          </div>
          <p className="home-network__note">Program network visualisation · not geographic coverage</p>
        </div>

        <aside className="home-atlas__summary">
          <span className="home-atlas__summary-icon" aria-hidden="true">Y</span>
          <span className="home-kicker">{site.location}</span>
          <h3>One organisation. Thirteen direct routes in.</h3>
          <dl>
            <div><dt>Active program fields</dt><dd>{programs.length}</dd></div>
            <div><dt>Active ventures</dt><dd>{ventures.length}</dd></div>
            <div><dt>Operating model</dt><dd>BPM</dd></div>
          </dl>
          <Link href="/partners" className="home-atlas__summary-link">
            Partnership directory <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </aside>
      </div>

      <div className="home-atlas__legend" aria-label="Program clusters">
        {clusters.map((cluster, index) => (
          <span key={cluster.id} data-cluster={index}>
            <i aria-hidden="true" /> {cluster.title}
          </span>
        ))}
      </div>
    </section>
  );
}
