import { site, socialLinks } from "@/lib/site";

/**
 * JSON-LD.
 *
 * Kept to facts stated elsewhere on the site: identity, location, contact and
 * the fields YOCED works in. No founding date, size, funding or award data is
 * emitted, because none of it is verified.
 */
function Ld({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Escaping `<` prevents a `</script>` sequence in data from closing the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function OrganizationSchema({ knowsAbout }: { knowsAbout: string[] }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "NGO",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        alternateName: site.legalName,
        url: site.url,
        description: site.description,
        email: site.email,
        telephone: site.phone,
        logo: `${site.url}/icon.svg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.locality,
          addressCountry: "KE",
        },
        areaServed: { "@type": "Country", name: site.country },
        knowsAbout,
        ...(socialLinks.length > 0 ? { sameAs: socialLinks.map((link) => link.href) } : {}),
      }}
    />
  );
}

export function WebSiteSchema() {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-KE",
      }}
    />
  );
}

export function BreadcrumbSchema({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: trail.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `${site.url}${crumb.path}`,
        })),
      }}
    />
  );
}

/** Used for program fields, which are services rather than articles. */
export function ProgramSchema({
  name,
  description,
  path,
  audience,
}: {
  name: string;
  description: string;
  path: string;
  audience: string[];
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${site.url}${path}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Country", name: site.country },
        audience: audience.map((item) => ({ "@type": "Audience", audienceType: item })),
      }}
    />
  );
}
