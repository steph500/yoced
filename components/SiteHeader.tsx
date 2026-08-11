"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Grid2X2,
  Handshake,
  Home,
  Images,
  Mail,
  MapPin,
  Menu,
  Users,
  X,
} from "lucide-react";
import { Brand } from "./Brand";
import { programs } from "@/lib/programs";
import { ventures } from "@/lib/ventures";
import { partners } from "@/lib/partners";
import { site } from "@/lib/site";

const nav = [
  { label: "Home", href: "/", icon: Home },
  { label: "Impact Atlas", href: "/programs", icon: Grid2X2 },
  { label: "Field work", href: "/work", icon: Images },
  { label: "Ventures", href: "/ventures", icon: Briefcase },
  { label: "Partners", href: "/partners", icon: Handshake },
  { label: "Leadership", href: "/about", icon: Users },
  { label: "Contact", href: "/contact", icon: Mail },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <aside className="portal-sidebar" aria-label="YOCED navigation">
        <div className="portal-sidebar__brand">
          <Brand withFullName />
        </div>

        <nav className="portal-nav" aria-label="Primary">
          {nav.map((item) => {
            const Icon = item.icon;
            const isActive = active(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="portal-nav__item"
                data-active={isActive}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{item.label}</span>
                {isActive ? <span className="portal-nav__pulse" aria-hidden="true" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="portal-sidebar__snapshot" aria-label="YOCED at a glance">
          <div className="portal-sidebar__snapshot-head">
            <span className="portal-live-dot" aria-hidden="true" />
            <span>YOCED AT A GLANCE</span>
          </div>
          <dl>
            <div>
              <dt>Active fields</dt>
              <dd>{programs.length}</dd>
            </div>
            <div>
              <dt>Active ventures</dt>
              <dd>{ventures.length}</dd>
            </div>
            <div>
              <dt>Network organisations</dt>
              <dd>{partners.length}</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd className="portal-sidebar__place">{site.locality}</dd>
            </div>
          </dl>
          <Link href="/partners" className="portal-sidebar__snapshot-link">
            Partnership routes <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </div>

        <div className="portal-sidebar__foot">
          <span>© {new Date().getFullYear()} YOCED</span>
          <span><MapPin size={12} aria-hidden="true" /> {site.location}</span>
        </div>
      </aside>

      <header className="portal-mobile-header">
        <Brand withFullName />
        <button
          ref={triggerRef}
          type="button"
          className="portal-menu-button"
          aria-label="Open site menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={21} aria-hidden="true" />
        </button>
      </header>

      <div className="portal-mobile-drawer" data-open={open} inert={!open} role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="portal-mobile-drawer__top">
          <Brand withFullName />
          <button
            ref={closeRef}
            type="button"
            className="portal-menu-button"
            aria-label="Close site menu"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
          >
            <X size={21} aria-hidden="true" />
          </button>
        </div>
        <nav className="portal-mobile-nav" aria-label="Mobile primary">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} data-active={active(item.href)} onClick={() => setOpen(false)}>
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            );
          })}
        </nav>
        <Link href="/contact?topic=partnership" className="portal-mobile-cta" onClick={() => setOpen(false)}>
          Partner with YOCED <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
