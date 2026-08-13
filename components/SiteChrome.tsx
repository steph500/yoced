import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { YocedMark } from "./Brand";
import { programs } from "@/lib/programs";
import { audiences } from "@/lib/audiences";
import { site, socialLinks, technologyPartner } from "@/lib/site";

function Footer() {
  return (
    <footer className="footer on-ink">
      <div className="footer__grid">
        <div>
          <YocedMark size={34} accent="var(--saffron)" />
          <p className="footer__say">{site.tagline}</p>
          <p className="muted" style={{ fontSize: ".9rem", maxWidth: "34ch" }}>
            {site.legalName}. A youth development ecosystem based in {site.location}.
          </p>
          <div className="footer__tech">
            <span className="label">{technologyPartner.role}</span>
            <a href={technologyPartner.url} rel="noopener noreferrer" target="_blank">
              {technologyPartner.name}
            </a>
            <p>{technologyPartner.note}</p>
          </div>
        </div>

        <div>
          <span className="label">Fields</span>
          <ul className="footer__list">
            {programs.slice(0, 6).map((program) => (
              <li key={program.slug}>
                <Link href={`/programs/${program.slug}`}>{program.navTitle}</Link>
              </li>
            ))}
            <li>
              <Link href="/programs">All thirteen fields →</Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="label">Routes</span>
          <ul className="footer__list">
            {audiences.map((audience) => (
              <li key={audience.slug}>
                <Link href={`/for/${audience.slug}`}>{audience.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/how-it-works">How YOCED works</Link>
            </li>
            <li>
              <Link href="/work">Field work</Link>
            </li>
            <li>
              <Link href="/ventures">Ventures</Link>
            </li>
            <li>
              <Link href="/partners">Partners</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>

        <div>
          <span className="label">Contact</span>
          <ul className="footer__list">
            <li>
              <a href={`mailto:${site.email}`}>
                <Mail size={14} aria-hidden="true" style={{ display: "inline", verticalAlign: "-2px", marginRight: 8 }} />
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref}>
                <Phone size={14} aria-hidden="true" style={{ display: "inline", verticalAlign: "-2px", marginRight: 8 }} />
                {site.phone}
              </a>
            </li>
            <li className="muted" style={{ fontSize: ".93rem" }}>
              <MapPin size={14} aria-hidden="true" style={{ display: "inline", verticalAlign: "-2px", marginRight: 8 }} />
              {site.location}
            </li>
            <li style={{ paddingTop: 10 }}>
              <Link href="/contact">Send an inquiry →</Link>
            </li>
          </ul>

          {socialLinks.length > 0 ? (
            <ul className="footer__list" style={{ marginTop: 18 }}>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} rel="noopener noreferrer" target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="footer__bottom">
        <span>
          © {new Date().getFullYear()} {site.legalName}
        </span>
        <span>Ideas → systems → livelihoods</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
