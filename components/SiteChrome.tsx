"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const nav = [
  ["Programs", "/programs"],
  ["Ventures", "/ventures"],
  ["Partners", "/partners"],
  ["About", "/about"]
] as const;

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="YOCED home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      <span className="brand-word">YOCED</span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Brand />
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} className={pathname.startsWith(href) ? "active" : ""}>
            {label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className="header-cta">
        Work with us <ArrowUpRight size={16} />
      </Link>
      <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-panel" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {nav.map(([label, href], index) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}><span>05</span>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Brand />
          <p>Youth Corporate and Economic Development</p>
        </div>
        <div>
          <span className="footer-label">Find us</span>
          <p>Nairobi, Kenya<br />+254 726 647052<br />yoced.ke@gmail.com</p>
        </div>
        <div>
          <span className="footer-label">Navigate</span>
          <p><Link href="/programs">Programs</Link><br /><Link href="/ventures">Ventures</Link><br /><Link href="/partners">Partners</Link></p>
        </div>
        <div>
          <span className="footer-label">Technology partner</span>
          <p>SelfAwareTech</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} YOCED</span>
        <span>Ideas → systems → livelihoods → impact</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><Footer /></>;
}
