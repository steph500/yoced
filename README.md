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
| `lib/testimonials.ts` | Testimonials (currently empty — see below) |
| `lib/photos.ts` | The field archive: every photo, caption, alt text and tag |
| `lib/inquiry.ts` | Contact form topics and routing |
| `lib/sdg.ts` | SDG titles |

### Deliberately empty, waiting on real material

Three things are intentionally blank rather than invented. Each one hides its own
UI when empty, so nothing breaks and no gap appears.

1. **`socialLinks` in `lib/site.ts`.** The previous site linked Facebook,
   Instagram, X and LinkedIn, but none of those URLs could be verified. Add
   `{ label, href }` entries and the footer and contact page start showing them.
2. **`testimonials` in `lib/testimonials.ts`.** The old site carried quotes
   attributed to Dovies Ebbiey, Nzisa Matulu, Fundi Ngundi and Tim Janot. The
   exact wording could not be recovered, and a reconstructed testimonial is not a
   testimonial. Add verbatim quotes and the section appears on `/partners`.
3. **`portrait` in `lib/team.ts`.** No leadership photography was supplied. The
   leadership cards use a designed typographic treatment instead. Add a path to
   an image in `public/` and the portrait renders automatically.

Partner logos work the same way: `logo` on a `Partner` is optional and currently
unset for every entry, because no logo files were available and an approximation
of another organisation's mark would be worse than clean type.

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

### DNS for yoced.com

Add both domains in Vercel (`yoced.com` and `www.yoced.com`), pick one as
canonical and let Vercel redirect the other. Then set **only** these records:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> **Do not remove any other record.** `MX`, `TXT` (SPF/DKIM/DMARC) and any
> verification records must stay exactly as they are — `yoced.ke@gmail.com` and
> any mail routing depend on them. Only the `A`/`CNAME` records above should
> change. Confirm the current zone before editing:
>
> ```bash
> dig yoced.com  MX  +short
> dig yoced.com  TXT +short
> dig www.yoced.com CNAME +short
> ```

---

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
