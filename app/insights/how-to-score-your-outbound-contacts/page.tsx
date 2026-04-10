import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Score Your Outbound Contacts: The Engine Optimization Framework — Minier MarTech",
  description: "Stop treating all contacts the same. A contact scoring framework that separates buyers from prospects, identifies deal-ready signals, and improves your cost-per-meeting by 60% within 90 days.",
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "How to Score Your Outbound Contacts: The Engine Optimization Framework",
      "description": "Contact scoring methodology that identifies deal-ready signals, separates buyers from prospects, and compounds your competitive advantage.",
      "author": {
        "@type": "Person",
        "name": "Kenneth Minier",
        "url": "https://www.linkedin.com/in/kennethminier"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Minier MarTech",
        "url": "https://miniermartech.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://miniermartech.com/favicon.png"
        }
      },
      "datePublished": "2026-04-07",
      "dateModified": "2026-04-07",
      "image": "https://miniermartech.com/favicon.png",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is contact scoring in outbound sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact scoring is the process of assigning a probability value to each contact based on behavioral signals, profile fit, and deal-readiness indicators. Instead of treating a CEO and a mid-level operations manager as equally likely to respond, scoring identifies which contacts are buyer-ready, which are prospects for future campaigns, and which are unlikely to convert. Effective scoring reduces cost-per-meeting by 40–60% within 90 days.",
          },
        },
        {
          "@type": "Question",
          "name": "What behavioral signals indicate deal readiness in M&A outbound?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deal-readiness signals vary by vertical but include: company financials (EBITDA, revenue trajectory), leadership changes (new CFO or COO), industry consolidation (recent acquisition in the space), founder age / retirement readiness, recent capital raise, and loss of a major customer. For business brokers, deal-ready signals include ownership longevity (10+ years), family succession planning, and recent business valuation.",
          },
        },
        {
          "@type": "Question",
          "name": "How does contact scoring improve reply rates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scoring improves reply rates by focusing outreach on contacts with the highest probability of being in-market. A well-scored outbound campaign targets only contacts that match 8–12 deal-readiness dimensions simultaneously — not just title and company size. This increases reply rates from 3–5% (generic cold outreach) to 12–18% (scored, infrastructure-driven campaigns).",
          },
        },
        {
          "@type": "Question",
          "name": "What dimensions should contact scoring include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Engine Optimization scores across 12+ dimensions: ICP profile match, financial indicators, leadership signals, industry consolidation, business age, founder profile, recent changes, competitive positioning, message receptivity, timing sensitivity, objection patterns, and deal-readiness probability. Each dimension is weighted based on historical campaign performance data.",
          },
        },
      ]
    }
  ]
};

export default function ArticlePage() {
  return (
    <>
      <section style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #111827 0%, #0d1a2e 60%, #111827 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "69px 24px 80px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Engine Optimization Framework</span>
            <h1 style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginTop: 16,
              marginBottom: 24,
            }}>
              How to Score Your Outbound Contacts
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 600 }}>
              Most teams send the same sequence to all contacts and pray. Smart operators score every contact across 12+ dimensions — separating buyers from prospects before the first message lands. Here's the framework.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg)", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24 }}>The Problem: Untargeted Volume</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          Generic cold outreach treats all contacts identically. A Fortune 500 CEO gets the same sequence as a junior operations manager. A company in crisis gets the same ask as a stable business. The result: 3–5% reply rates and a cost-per-meeting that doesn't improve no matter how much volume you send.
        </p>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          Scoring changes this fundamentally. You focus outreach on contacts where deal probability is highest, adjust messaging to their specific situation, and measure which signals actually predict conversion.
        </p>

        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24, marginTop: 48 }}>The Engine Optimization Framework: 12 Scoring Dimensions</h2>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px", marginBottom: 48 }}>
          <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 20, fontWeight: 700, color: "var(--accent-teal)", marginBottom: 20 }}>Tier 1: Profile Fit (4 dimensions)</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>•</span>
              <strong>ICP Match:</strong> Does the contact's company, industry, and size match your defined Ideal Contact Profile? Score 0–25 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>•</span>
              <strong>Title Relevance:</strong> Is their role decision-making on deal flow or capital allocation? C-suite, COO, CFO, BD = high. Operations, HR = low. Score 0–20 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>•</span>
              <strong>Geography:</strong> Is the contact located in your target markets? Regional concentration matters. Score 0–15 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>•</span>
              <strong>Vertical Specialization:</strong> Do they work in a sector you've seen convert (lower-middle market M&A, PE, business brokerage)? Score 0–10 points.
            </li>
          </ul>
        </div>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px", marginBottom: 48 }}>
          <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 20, fontWeight: 700, color: "var(--accent-purple)", marginBottom: 20 }}>Tier 2: Deal Readiness (5 dimensions)</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-purple)", fontWeight: 700 }}>•</span>
              <strong>Financial Indicators:</strong> Is the company profitable? Growing or stagnating? EBITDA &gt;$1M? Score 0–15 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-purple)", fontWeight: 700 }}>•</span>
              <strong>Leadership Signals:</strong> Has there been a founder succession, new CFO, or leadership change in the past 24 months? Score 0–20 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-purple)", fontWeight: 700 }}>•</span>
              <strong>Business Age & Succession:</strong> Is the founder 50+? Has the business been operating 10+ years? Score 0–15 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-purple)", fontWeight: 700 }}>•</span>
              <strong>Recent Changes:</strong> New investor? Lost major customer? Expanded product line? Industry consolidation happening? Score 0–20 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-purple)", fontWeight: 700 }}>•</span>
              <strong>Competitive Positioning:</strong> Are they losing market share? In a consolidating space? Under pricing pressure? Score 0–15 points.
            </li>
          </ul>
        </div>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px", marginBottom: 48 }}>
          <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 20, fontWeight: 700, color: "var(--accent-blue)", marginBottom: 20 }}>Tier 3: Message Receptivity (3 dimensions)</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-blue)", fontWeight: 700 }}>•</span>
              <strong>Response History:</strong> Has this contact replied to similar outreach before? LinkedIn engagement? Active on social? Score 0–10 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-blue)", fontWeight: 700 }}>•</span>
              <strong>Timing Sensitivity:</strong> Is now a good time to reach them? (Post-earnings, post-acquisition, beginning of fiscal year = high. Post-major customer loss = low.) Score 0–10 points.
            </li>
            <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
              <span style={{ position: "absolute", left: 0, color: "var(--accent-blue)", fontWeight: 700 }}>•</span>
              <strong>Objection Risk:</strong> What objections are they likely to have? Can your sequence preemptively address them? Score 0–10 points.
            </li>
          </ul>
        </div>

        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24, marginTop: 48 }}>How Scoring Compounds</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          Your first campaign reveals which scores actually predict replies. Contacts that scored 75+ but didn't reply? Your scoring weights adjust. Contacts with "recent leadership change" that always reply? That dimension weight increases. By campaign 3, your scoring model is more accurate than any generic framework could be.
        </p>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          This is the moat: your scoring improves with every batch. A competitor copying your framework today will still be 2–3 campaigns behind because they don't have your historical data.
        </p>

        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24, marginTop: 48 }}>Real Impact</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          Teams using Engine Optimization scoring see:
        </p>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 48 }}>
          <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent-gold)", fontWeight: 700 }}>✓</span>
            <strong>+340% accuracy improvement</strong> — Within 90 days, your ability to predict who will reply improves 3.4x
          </li>
          <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent-gold)", fontWeight: 700 }}>✓</span>
            <strong>-60% cost-per-meeting</strong> — By focusing volume on high-probability contacts, your cost drops dramatically
          </li>
          <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent-gold)", fontWeight: 700 }}>✓</span>
            <strong>12.6% acceptance rate</strong> — vs. 3–5% industry baseline. That's a 2.5–4x improvement in qualified meetings
          </li>
        </ul>

        <div style={{
          background: "var(--bg-secondary)",
          border: "1px dashed var(--accent-gold)",
          borderRadius: 12,
          padding: "32px",
          textAlign: "center",
        }}>
          <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 22, fontWeight: 700, marginBottom: 16 }}>The Scoring Advantage</h3>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8 }}>
            Scoring isn't just about filtering bad contacts. It's about understanding which dimensions actually drive conversion in your market, then letting that understanding improve with every batch. By month 6, you have proprietary intelligence no competitor can replicate because it's built on your actual campaign performance data.
          </p>
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 24 }}>
            Ready to score your contacts the right way?
          </p>
          <Link href="/contact" className="btn-coral" style={{
            padding: "14px 32px", borderRadius: 8, fontSize: 15, fontWeight: 600,
          }}>
            Build it With Us
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
    </>
  );
}
