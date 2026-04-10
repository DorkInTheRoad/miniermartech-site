import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Minier MarTech",
  description: "Operator-written analysis on outbound pipeline infrastructure, ICP design, and systematic deal flow origination for M&A advisors, business brokers, and PE deal teams.",
};

const articles = [
  {
    slug: "cold-outreach-isnt-broken-your-infrastructure-is",
    title: "Cold Outreach Isn't Broken. Your Infrastructure Is.",
    excerpt: "Most deal teams blame the channel when campaigns underperform. The channel isn't the problem. The system running behind it is.",
    tag: "Infrastructure",
    tagColor: "var(--accent-blue)",
    readTime: "5 min read",
  },
  {
    slug: "why-ma-advisors-lose-deal-flow",
    title: "Why M&A Advisors Lose Deal Flow to Operators with Better Data",
    excerpt: "It's not the pitch. It's not the market. The advisors consistently winning proprietary deal flow have one thing the others don't: a data layer that compounds.",
    tag: "Deal Origination",
    tagColor: "var(--accent-gold)",
    readTime: "6 min read",
  },
  {
    slug: "what-is-a-preflight-simulation",
    title: "What Is a Pre-Flight Simulation? How We Validate Every Cohort Before Launch",
    excerpt: "Before any contact group enters our pipeline, it runs through a simulation layer. Here's exactly what that means and why it changes campaign outcomes.",
    tag: "Methodology",
    tagColor: "var(--accent-teal)",
    readTime: "5 min read",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section style={{ padding: "100px 24px 60px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>
            Insights
          </div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1 }}>
            How we think about this work
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 560 }}>
            Operator-written analysis on outbound infrastructure, ICP design, and systematic deal flow origination.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                className="card-hover"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "36px 40px",
                  cursor: "pointer",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 24,
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                      color: article.tagColor, textTransform: "uppercase" as const,
                    }}>
                      {article.tag}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{article.readTime}</span>
                  </div>
                  <h2 style={{
                    fontFamily: "var(--font-fraunces)", fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12,
                    color: "var(--text)", lineHeight: 1.25,
                  }}>
                    {article.title}
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, margin: 0, maxWidth: 600 }}>
                    {article.excerpt}
                  </p>
                </div>
                <div style={{ fontSize: 22, color: "var(--text-muted)", flexShrink: 0 }}>→</div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
            Want to talk through your pipeline? One conversation is enough to know whether what we do is the right fit.
          </p>
          <Link href="/contact" className="btn-coral" style={{ padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600 }}>
            Build it With Us
          </Link>
        </div>
      </section>
    </>
  );
}
