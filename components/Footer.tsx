"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const getCTA = (pathname: string) => {
  if (pathname === "/" || pathname === "/case-studies") return "Engineer Your Outbound";
  if (pathname === "/how-it-works") return "Model Your Funnel";
  return "Build it With Us";
};

export default function Footer() {
  const pathname = usePathname();
  const ctaText = getCTA(pathname);
  return (
    <footer style={{ background: "#0d1520", borderTop: "1px solid var(--border)", marginTop: "auto" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48, marginBottom: 48 }}>
          {/* Left — Logo + tagline */}
          <div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: "var(--font-fraunces)", fontSize: 22, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>
                Minier MarTech
              </div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
                Outbound pipeline for deal-driven operators.
              </div>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 280 }}>
              Data-verified pipeline infrastructure for M&amp;A advisors, business brokers, and PE deal teams.
            </p>
          </div>

          {/* Center — Navigation */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
              Navigation
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ textDecoration: "none", fontSize: 14, color: "var(--text-muted)", transition: "color 0.2s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — CTA + email */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
              Get Started
            </div>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                background: "var(--accent-coral)",
                color: "var(--text)",
                padding: "12px 24px",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 16,
                transition: "background 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "var(--accent-coral-hover)")}
              onMouseOut={(e) => (e.currentTarget.style.background = "var(--accent-coral)")}
            >
              {ctaText}
            </Link>
            <div style={{ marginTop: 8 }}>
              <a
                href="mailto:ken@miniermartech.com"
                style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                ken@miniermartech.com
              </a>
            </div>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: 24 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>
            © {new Date().getFullYear()} Minier MarTech. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>
            miniermartech.com
          </p>
        </div>
      </div>
    </footer>
  );
}
