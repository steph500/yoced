import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { Brand } from "./Brand";
import { programs } from "@/lib/programs";
import { audiences } from "@/lib/audiences";
import { site, socialLinks, technologyPartner } from "@/lib/site";

function Footer() {
  return (
    <footer className="portal-footer">
      <div className="portal-footer__grid">
        <div className="portal-footer__identity">
          <Brand withFullName />
          <p>{site.description}</p>
          <Link href="/about" className="portal-footer__link">
            About YOCED <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div>
          <span className="portal-footer__label">Programs</span>
          <ul>
            {programs.slice(0, 5).map((program) => (
              <li key={program.slug}>
                <Link href={`/programs/${program.slug}`}>{program.navTitle}</Link>
              </li>
            ))}
            <li><Link href="/programs">All twelve fields →</Link></li>
          </ul>
        </div>

        <div>
          <span className="portal-footer__label">Explore as</span>
          <ul>
            {audiences.map((audience) => (
              <li key={audience.slug}>
                <Link href={`/for/${audience.slug}`}>{audience.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="portal-footer__label">Get involved</span>
          <ul>
            <li><Link href="/partners">Partner with us</Link></li>
            <li><Link href="/ventures">Active ventures</Link></li>
            <li><Link href="/work">Field archive</Link></li>
            <li><Link href="/contact?topic=funding">Funding conversation</Link></li>
            <li><Link href="/contact">General inquiry</Link></li>
          </ul>
        </div>

        <div>
          <span className="portal-footer__label">Contact</span>
          <ul className="portal-footer__contact">
            <li><a href={`mailto:${site.email}`}><Mail size={13} aria-hidden="true" /> {site.email}</a></li>
            <li><a href={site.phoneHref}><Phone size={13} aria-hidden="true" /> {site.phone}</a></li>
            <li><span><MapPin size={13} aria-hidden="true" /> {site.location}</span></li>
          </ul>
          <div className="portal-footer__tech">
            <span>{technologyPartner.role}</span>
            <a href={technologyPartner.url} rel="noopener noreferrer" target="_blank">
              {technologyPartner.name} <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
          {socialLinks.length > 0 ? (
            <ul className="portal-footer__social">
              {socialLinks.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="portal-footer__bottom">
        <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
        <span>Building ideas · strengthening systems · creating opportunity</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="portal-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <div className="portal-stage">
        <div className="portal-canvas">
          <main id="main" className="portal-main">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
