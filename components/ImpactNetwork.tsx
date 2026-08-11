import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { clusters, programs } from "@/lib/programs";
import { ventures } from "@/lib/ventures";
import { site } from "@/lib/site";

/*
 * Program nodes are intentionally arranged over an Africa-shaped graphic to echo
 * the approved visual concept. They represent relationships between YOCED fields,
 * not offices, beneficiaries or geographic coverage. The UI states that explicitly.
 */
const positions = [
  [31, 33], [40, 24], [49, 34], [57, 27], [65, 39], [37, 48],
  [48, 48], [58, 53], [44, 62], [54, 67], [47, 76], [61, 72],
] as const;

export function ImpactNetwork() {
  return (
    <section className="home-atlas" aria-labelledby="home-atlas-heading">
      <div className="home-atlas__bar">
        <div>
          <span className="home-kicker home-kicker--signal">Impact Atlas · Program network</span>
          <h2 id="home-atlas-heading">Explore how YOCED’s fields connect.</h2>
        </div>
        <Link href="/programs" className="home-inline-link">
          Open full atlas <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>

      <div className="home-atlas__body">
        <div className="home-network" aria-label="YOCED program relationship network">
          <svg className="home-network__map" viewBox="0 0 700 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <defs>
              <radialGradient id="africaGlow" cx="50%" cy="48%" r="55%">
                <stop offset="0" stopColor="#c9ff16" stopOpacity=".17" />
                <stop offset="1" stopColor="#c9ff16" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="africaFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#2d3940" />
                <stop offset="1" stopColor="#151f25" />
              </linearGradient>
            </defs>
            <ellipse cx="350" cy="220" rx="245" ry="185" fill="url(#africaGlow)" />
            <path
              className="home-network__africa"
              d="M337 31 C292 29 248 42 214 61 L179 89 L151 116 L120 153 L139 181 L177 195 L195 223 L229 242 L248 278 L270 311 L289 354 L311 390 L335 357 L347 319 L374 293 L393 261 L423 239 L444 206 L474 187 L499 154 L481 124 L456 104 L441 77 L405 59 L374 42 Z"
              fill="url(#africaFill)"
            />
            <path className="home-network__africa" d="M511 246 C523 263 526 286 518 308 C512 324 503 337 495 342 C490 322 493 304 498 286 C503 268 505 255 511 246 Z" fill="url(#africaFill)" />
            <g className="home-network__routes">
              <path d="M224 143 C287 114 354 111 409 143 S469 198 424 225" />
              <path d="M280 100 C319 154 357 183 421 185 S456 225 386 267" />
              <path d="M215 202 C276 180 332 213 364 256 S357 310 316 342" />
              <path d="M319 132 C330 185 324 222 290 267 S311 315 365 300" />
              <path d="M252 235 C322 230 368 215 427 168" />
            </g>
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
          <p className="home-network__note">Program relationships · not geographic coverage</p>
        </div>

        <aside className="home-atlas__summary">
          <span className="home-atlas__summary-icon" aria-hidden="true">Y</span>
          <span className="home-kicker">{site.location}</span>
          <h3>One organisation. Twelve direct routes in.</h3>
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
