import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";
import { InquiryForm } from "@/components/InquiryForm";
import { isTopicId, type TopicId } from "@/lib/inquiry";
import { getProgram } from "@/lib/programs";
import { getVenture } from "@/lib/ventures";
import { audiences } from "@/lib/audiences";
import { site, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact YOCED in ${site.location}. Program inquiries, partnership, funding, youth and enterprise support, community groups, corporate collaboration, technology and media — routed by topic. ${site.email} · ${site.phone}`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact YOCED",
    description: "Tell us the field, and we will route it from there.",
    url: "/contact",
  },
};

type Search = Promise<{ topic?: string; field?: string; venture?: string }>;

export default async function ContactPage({ searchParams }: { searchParams: Search }) {
  const params = await searchParams;
  const initialTopic: TopicId = isTopicId(params.topic) ? params.topic : "program";
  const program = params.field ? getProgram(params.field) : undefined;
  const venture = params.venture ? getVenture(params.venture) : undefined;

  return (
    <PageShell>
      <section className="hero" aria-labelledby="contact-heading">
        <div className="hero__meta">
          <span className="label">Contact</span>
          <span className="label">{site.location}</span>
          <span className="label" style={{ marginLeft: "auto" }}>
            Routed by topic
          </span>
        </div>
        <h1 className="grotesk hero__headline" id="contact-heading">
          Start with what you want to <em>move</em>.
        </h1>
      </section>

      <section className="band band--tight wrap">
        <div className="contact">
          <div>
            {program || venture ? (
              <div className="form-note">
                {program ? (
                  <>
                    Starting from <strong>{program.title}</strong> ({program.code}). That context
                    travels with your message.{" "}
                    <Link href={`/programs/${program.slug}`} className="link">
                      Back to the field
                    </Link>
                  </>
                ) : null}
                {venture ? (
                  <>
                    Starting from <strong>{venture.name}</strong>. Your inquiry will be routed to
                    the venture.{" "}
                    <Link href={`/ventures/${venture.slug}`} className="link">
                      Back to the venture
                    </Link>
                  </>
                ) : null}
              </div>
            ) : null}

            <InquiryForm initialTopic={initialTopic} field={params.field} venture={params.venture} />
          </div>

          <aside>
            <span className="label">Direct</span>
            <div className="contact__direct" style={{ marginTop: 12 }}>
              <a href={`mailto:${site.email}`}>
                <span>
                  <Mail size={17} aria-hidden="true" />
                  {site.email}
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href={site.phoneHref}>
                <span>
                  <Phone size={17} aria-hidden="true" />
                  {site.phone}
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <div>
                <span>
                  <MapPin size={17} aria-hidden="true" />
                  {site.location}
                </span>
              </div>
            </div>

            {socialLinks.length > 0 ? (
              <>
                <span className="label" style={{ marginTop: 34 }}>
                  Elsewhere
                </span>
                <div className="contact__direct" style={{ marginTop: 12 }}>
                  {socialLinks.map((link) => (
                    <a key={link.href} href={link.href} rel="noopener noreferrer" target="_blank">
                      <span>{link.label}</span>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </>
            ) : null}

            <span className="label" style={{ marginTop: 34 }}>
              Not sure where you fit?
            </span>
            <ul className="rows" style={{ marginTop: 12 }}>
              {audiences.map((audience) => (
                <li key={audience.slug}>
                  <Link
                    href={`/for/${audience.slug}`}
                    className="link"
                    style={{ display: "flex", justifyContent: "space-between", padding: "13px 0", width: "100%" }}
                  >
                    <span>{audience.label}</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="muted" style={{ fontSize: ".87rem", marginTop: 26, lineHeight: 1.55 }}>
              YOCED is a small organisation. Replies come from people rather than from a system,
              so a clear first message genuinely speeds things up.
            </p>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
