"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  // Logo is loaded from /public/logo.png

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(17, 24, 39, 0.97)" : "rgba(17, 24, 39, 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(248, 247, 244, 0.08)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: scrolled ? "12px 0" : "18px 0",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div style={{ height: 50, width: 50, overflow: "hidden", flexShrink: 0 }}>
              <img
                src="/logo.png"
                alt="Minier MarTech Logo Icon"
                style={{ height: 50, width: "auto", objectFit: "contain", objectPosition: "left" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontFamily: "var(--font-fraunces)", fontSize: 18, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>
                Minier MarTech
              </span>
              <span style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>
                Outbound Infrastructure
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: 14,
                fontWeight: pathname === link.href ? 600 : 400,
                color: pathname === link.href ? "var(--text)" : "var(--text-muted)",
                transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseOut={(e) => (e.currentTarget.style.color = pathname === link.href ? "var(--text)" : "var(--text-muted)")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              background: "var(--accent-coral)",
              color: "var(--text)",
              padding: "10px 20px",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              transition: "background 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "var(--accent-coral-hover)"; e.currentTarget.style.transform = "scale(1.03)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "var(--accent-coral)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            Start a Conversation
          </Link>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="mobile-nav">
          <Link
            href="/contact"
            style={{
              background: "var(--accent-coral)",
              color: "var(--text)",
              padding: "8px 14px",
              borderRadius: 6,
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Talk to Us
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", padding: 4 }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          padding: "16px 24px 24px",
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                textDecoration: "none",
                fontSize: 16,
                color: pathname === link.href ? "var(--text)" : "var(--text-muted)",
                borderBottom: "1px solid var(--border)",
                fontWeight: pathname === link.href ? 600 : 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
