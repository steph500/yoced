"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Brand } from "./Brand";
import { clusters, programsInCluster } from "@/lib/programs";
import { audiences } from "@/lib/audiences";
import { primaryNav } from "@/lib/site";

/**
 * Site header.
 *
 * Both the program mega-panel and the mobile drawer animate entirely in CSS —
 * the panel via a `grid-template-rows: 0fr → 1fr` transition, the drawer via
 * opacity and transform. That keeps an animation library out of the bundle for
 * what amounts to two transitions.
 *
 * The drawer stays mounted and is marked `inert` when closed, so it is fully
 * removed from the tab order and the accessibility tree without unmounting.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  // Close both surfaces whenever the route changes. Adjusting state during
  // render is the supported pattern here — an effect would paint one frame with
  // the old menu still open.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMega(false);
    setDrawer(false);
  }

  // Escape closes; a pointer press outside the header closes the mega panel.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMega(false);
      setDrawer(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMega(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  // Lock background scroll and move focus with the drawer.
  useEffect(() => {
    if (drawer) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
      return () => {
        document.body.style.overflow = previous;
      };
    }
    return undefined;
  }, [drawer]);

  const closeDrawer = () => {
    setDrawer(false);
    burgerRef.current?.focus();
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className="header"
        ref={headerRef}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setMega(false);
        }}
      >
        <div className="header__inner">
          <Brand withFullName />

          <nav className="nav" aria-label="Primary">
            <button
              type="button"
              className="nav__trigger"
              aria-expanded={mega}
              aria-controls="program-navigator"
              onClick={() => setMega((open) => !open)}
            >
              Programs <ChevronDown size={14} aria-hidden="true" />
            </button>
            {primaryNav
              .filter((item) => item.href !== "/programs")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav__link"
                  data-active={isActive(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <Link href="/contact" className="btn header__cta">
            Work with us <ArrowUpRight size={16} aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="burger"
            ref={burgerRef}
            aria-label="Open menu"
            aria-expanded={drawer}
            onClick={() => setDrawer(true)}
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>

        <div id="program-navigator" className="mega on-ink" data-open={mega} inert={!mega}>
          <div className="mega__clip">
            <div className="mega__inner">
              {clusters.map((cluster) => (
                <div className="mega__cluster" key={cluster.id} data-accent={cluster.accent}>
                  <span className="label label--accent">{cluster.title}</span>
                  {programsInCluster(cluster.id).map((program) => (
                    <Link key={program.slug} href={`/programs/${program.slug}`} className="mega__link">
                      <span className="code">{program.code}</span>
                      <span>{program.navTitle}</span>
                    </Link>
                  ))}
                </div>
              ))}
              <div className="mega__foot">
                <Link href="/programs" className="link">
                  All twelve fields <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
                {audiences.map((audience) => (
                  <Link key={audience.slug} href={`/for/${audience.slug}`} className="link">
                    {audience.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        data-open={drawer}
        inert={!drawer}
      >
        <div className="drawer__top">
          <Brand />
          <button
            type="button"
            className="drawer__close"
            ref={closeRef}
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="drawer__group drawer__primary">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </div>

        {clusters.map((cluster) => (
          <div className="drawer__group" key={cluster.id} data-accent={cluster.accent}>
            <span className="label label--accent">{cluster.title}</span>
            {programsInCluster(cluster.id).map((program) => (
              <Link key={program.slug} href={`/programs/${program.slug}`}>
                {program.navTitle}
                <span className="code">{program.code}</span>
              </Link>
            ))}
          </div>
        ))}

        <div className="drawer__group">
          <span className="label">Find your route</span>
          {audiences.map((audience) => (
            <Link key={audience.slug} href={`/for/${audience.slug}`}>
              {audience.label}
              <span className="code">→</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
