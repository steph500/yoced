# YOCED

The website for **YOCED — Youth Corporate and Economic Development**, a youth
development ecosystem based in Nairobi, Kenya.

Production: **https://yoced.com**

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript, strict |
| UI | React 19, custom CSS design system, Motion, Lucide icons |
| Type | Archivo (grotesk), Fraunces (display serif), JetBrains Mono (atlas labels) |
| Images | Pre-optimised WebP served through `next/image` |
| Hosting | Vercel (recommended — every route is static except `/contact`) |

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

---

## The content rule

**This site publishes nothing it cannot evidence.**

There are no beneficiary counts, funding totals, employment figures, completion
rates, percentage improvements, project dates or partner endorsements anywhere in
it, because none of those have been independently verified. Photo captions
describe what is visible in the frame and stop there.

If you add content, hold that line. It is the reason the site reads as credible
to an institutional funder.

---

## Where the content lives

Everything is centralised in `lib/`. Editing a page should almost never mean
editing a component.

| File | Holds |
|---|---|
| `lib/site.ts` | Name, URL, email, phone, location, nav, **social links** |
| `lib/programs.ts` | The twelve fields and the four clusters they group into |
| `lib/ventures.ts` | The six active ventures |
| `lib/audiences.ts` | The five `/for/*` routes |
| `lib/partners.ts` | Partner organisations |
| `lib/team.ts` | Leadership |
| `lib/testimonials.ts` | The four recovered "Words of Wisdom" quotes |
| `lib/photos.ts` | The field archive: every photo, caption, alt text and tag |
| `lib/inquiry.ts` | Contact form topics and routing |
| `lib/sdg.ts` | SDG titles |

### What is evidenced, and what is still open

`lib/photos.ts` holds two intakes:

1. **Field production** — the groundnut, maize, horticulture and poultry work.
2. **Institutional and network evidence** — the National Productivity and
   Performance Conference 2026 (Kenya School of Government, 17–19 June 2026,
   where the Founder was an accredited delegate), working visits, partner farms
   and partner organisations.

Rules that hold across both:

- Anything YOCED did not photograph carries a `credit`, which renders with the
  caption. Broadcast stills are marked as such.
- Presence is described as presence. Attending a conference is not an
  endorsement by its convenors or speakers, and the site says so on `/work`.
- Another organisation's initiative is credited to them. The Guinness World
  Records tree-planting attempt is Green Earth Ambassadors Foundation's;
  YOCED attended in support, and that is exactly how it appears.
- The delegate pass has its QR code blurred before publication.

**`socialLinks` in `lib/site.ts` is the one thing still empty.** The previous
site linked Facebook, Instagram, X and LinkedIn but none of those URLs could be
verified. Add `{ label, href }` entries and the footer and contact page start
showing them. Nothing else on the site is waiting on material.

### Adding photographs

1. Put the optimised WebP in `public/field/`.
2. Add an entry to `lib/photos.ts` with `alt` (literal description of the frame),
   `caption` (editorial, still describing only the frame), `tags`, dimensions and
   a `blurDataURL` LQIP.
3. Reference the slug from a program's `photos`/`heroPhoto`, or tag it so it
   appears in the right section of `/work`.

`photo()` throws at build time on an unknown slug, so a typo fails the build
rather than shipping a broken image.

---

## The contact form

`/contact` posts to a server action (`app/contact/actions.ts`) that validates
input, checks a honeypot field and a minimum fill time, then does one of two
things:

- **With a mail provider configured** — sends the inquiry and confirms it.
- **Without one (the current default)** — returns a fully composed `mailto:`
  link with the subject already routed by topic, and the UI hands it to the
  visitor.

The form never reports a send that did not happen. To enable direct delivery, set
both variables:

```bash
RESEND_API_KEY=re_...              # https://resend.com
INQUIRY_FROM="YOCED <inquiries@yoced.com>"   # must be a verified sender domain
```

Set them in Vercel → Project → Settings → Environment Variables. Nothing else in
the site requires configuration.

---

## Deploying

Every route prerenders except `/contact`, which is dynamic because it reads
`?topic=` for prefill.

```bash
vercel                # preview
vercel --prod         # production
```

### DNS for yoced.com — action needed at the registrar

Both `yoced.com` and `www.yoced.com` are already added to the Vercel project.
The remaining step needs registrar access and could not be done from here.

**The domain currently has no working DNS.** Verified on 2026-08-11:

| Check | Result |
|---|---|
| Registrar | Namecheap, registered 2022-11-01, expires **2026-11-01** |
| Delegated nameservers | `danica.ns.cloudflare.com`, `ray.ns.cloudflare.com`, `ns01.000webhost.com`, `ns02.000webhost.com` |
| Cloudflare nameservers | return `REFUSED` — the zone is **not** hosted there |
| 000webhost nameservers | do not respond at all |
| Public resolvers (8.8.8.8 / 1.1.1.1 / 9.9.9.9) | `SERVFAIL` — nothing resolves |

The domain is delegated to four nameservers split across two providers, and
neither provider is serving the zone. That is why `yoced.com` resolves nowhere.

**This means there is no live zone to preserve** — no `MX`, `SPF`, `DKIM`,
`DMARC` or verification records are currently in effect, so no mail is routing
through `yoced.com` today. The published contact address, `yoced.ke@gmail.com`,
is a Gmail address and does not depend on this domain at all.

#### Recommended fix

At **Namecheap → Domain List → yoced.com → Nameservers**, replace all four
entries with Vercel's:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Vercel then hosts the zone and both domains verify automatically, usually within
the hour. Pick one canonical host in Vercel → Settings → Domains and let it
redirect the other.

#### Alternative, if you want to keep DNS elsewhere

Point the domain at a provider that is actually serving the zone (Namecheap
BasicDNS, or re-add it to Cloudflare), then set:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

#### If you ever want email on @yoced.com

Add the `MX` and `TXT` records at whichever provider ends up hosting the zone.
And from that point on the usual rule applies: when changing web records later,
**leave `MX`, `SPF`, `DKIM`, `DMARC` and verification records untouched.**

Re-check state at any time with:

```bash
dig yoced.com NS  +short
dig yoced.com MX  +short
npx vercel domains inspect yoced.com
```

Note the **expiry on 2026-11-01** — worth renewing regardless of the above.

### Current hosting

Production is live at **https://yoced.vercel.app** and will move to
`yoced.com` as soon as the nameservers are corrected.

## Accessibility & performance notes

- Scroll reveal is opt-in: markup ships visible and the hiding rule only applies
  after JavaScript confirms `IntersectionObserver` support and that reduced
  motion is off. Content can never be stranded invisible.
- `prefers-reduced-motion` disables the ticker, reveals and all transitions.
- Every accent colour has a `-ink` variant for text on paper and a `-lit` variant
  for text on ink, both meeting 4.5:1.
- Skip link, focus-visible rings on both grounds, keyboard-dismissable
  navigation, and labelled landmarks throughout.

---

## Technology partner

The site is built and maintained with **SelfAwareTech**
([selfawaretech.com](https://www.selfawaretech.com)), an independent technology
company acting as YOCED's technology partner. SelfAwareTech is not part of YOCED,
YOCED is not a SelfAwareTech product, and the site says so wherever the
relationship appears.
