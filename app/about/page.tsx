import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Minier MarTech",
  description: "Kenneth Minier. Operator background. NFL/Cowboys operations. Built Minier MarTech because the industry's outreach problem is an infrastructure problem.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kenneth Minier",
  "jobTitle": "Founder & Operator",
  "worksFor": {
    "@type": "Organization",
    "name": "Minier MarTech",
    "url": "https://miniermartech.com"
  },
  "description": "Operator with NFL/professional sports operations background. Builds systematic outbound origination infrastructure for M&A advisors, business brokers, and PE deal teams sourcing lower-middle market deal flow.",
  "knowsAbout": [
    "Outbound pipeline infrastructure",
    "ICP design and cohort architecture",
    "Sequence design and campaign operations",
    "M&A deal origination",
    "Data intelligence and behavioral modeling"
  ],
  "sameAs": ["https://www.linkedin.com/in/kennethminier"]
};

const convictions = [
  {
    title: "Operators, Not Vendors",
    color: "var(--accent-blue)",
    text: "I run the campaigns myself. No account manager between you and the work. When something breaks mid-batch, I fix it. When a sequence underperforms, I diagnose it. You hired an operator — that's what you get.",
  },
  {
    title: "Your Data Is Your Asset",
    color: "var(--accent-teal)",
    text: "Every contact that moves through your pipeline is a behavioral data point. Most agencies lock that in their platform. I build the infrastructure so it stays with you — structured, documented, and enriched over time.",
  },
  {
    title: "Build What Lasts, Not What's Easy",
    color: "var(--accent-gold)",
    text: "The easy path is blast campaigns. The hard path is pre-flight validation, cohort modeling, and sequence architecture built around actual buyer psychology. I take the hard path because it compounds.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <section style={{ padding: "100px 24px 60px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{
                borderRadius: 16,
                maxWidth: 400,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4/5",
              }}>
                <Image
                  src="/ken.jpg"
                  alt="Kenneth Minier"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>
                About
              </div>
              <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(32px, 3.5vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.1 }}>
                Kenneth Minier
              </h1>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8 }}>
                <p style={{ margin: 0 }}>
                  I came up in operations, not sales. Before any of this — the outreach infrastructure, the sequences, the data engineering — I spent years in the operational infrastructure of professional sports. That world runs on systems that don&apos;t fail, data that doesn&apos;t lie, and execution without margin for error.
                </p>
                <p style={{ margin: 0 }}>
                  I built Minier MarTech because I kept watching deal teams lose to operators who had better data and faster origination. The problem wasn&apos;t their pitch deck. It was their pipeline.
                </p>
                <p style={{ margin: 0 }}>
                  What I do is build the infrastructure behind systematic deal flow — ICP design, cohort architecture, sequence validation, and the data layer that makes every campaign smarter than the last. Not a platform. Not a tool. An operating system for origination.
                </p>
                <p style={{ margin: 0, color: "var(--text)", fontStyle: "italic", borderLeft: "3px solid var(--accent-gold)", paddingLeft: 16 }}>
                  &quot;The people who are crazy enough to think they can change the world are the ones who do.&quot; The ones who run their pipelines on generic tools are the ones who don&apos;t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              How I think about this work
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {convictions.map((c) => (
              <div key={c.title} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12,
                padding: "36px 28px", borderTop: `3px solid ${c.color}`,
              }}>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 21, fontWeight: 700, marginBottom: 16, lineHeight: 1.2, color: "var(--text)" }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>
            The path here
          </h2>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 36 }}>A note from the founder</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: 16, color: "var(--text-muted)", lineHeight: 1.85 }}>
            <p style={{ margin: 0 }}>
              The NFL taught me that there is no substitute for infrastructure. Every play you see on the field is the visible output of thousands of invisible systems — scheduling, logistics, personnel data, performance modeling. The game looks like talent. It runs on operations.
            </p>
            <p style={{ margin: 0 }}>
              I carried that framework into the deals world. Most deal teams I met were playing the game the way they&apos;d always played it — banker relationships, referrals, maybe some light LinkedIn prospecting. Some were good at it. But none of them had infrastructure.
            </p>
            <p style={{ margin: 0 }}>
              I started digging into why. The answer kept coming back the same way: the tooling existed, but nobody had built the operating layer on top of it. Apollo could scrape names. LinkedIn could send messages. But nobody was designing the psychology of the sequence, modeling the cohort before launch, or building a data retention layer that compounded over time.
            </p>
            <p style={{ margin: 0 }}>
              That&apos;s the gap I built Minier MarTech to close. Not an agency. Not a SaaS tool. An infrastructure operator that sits between your strategy and your market — and builds the system that runs behind your deal flow.
            </p>
            <p style={{ margin: 0, color: "var(--text)", fontWeight: 500 }}>
              — Ken
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 24 }}>
            Active client verticals
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["M&A Advisory", "Business Brokerage", "PE Business Development", "FinTech / AI Platforms", "Wealth Management"].map((v) => (
              <div key={v} style={{
                border: "1px solid var(--border-strong)", borderRadius: 24, padding: "10px 20px",
                fontSize: 14, color: "var(--text-muted)", background: "var(--bg-card)",
              }}>
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg)", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Work with someone who runs it himself
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 36 }}>
            No sales team. No hand-off to an account manager. One conversation with the person who will build and operate your pipeline.
          </p>
          <Link href="/contact" className="btn-coral" style={{ padding: "16px 36px", borderRadius: 8, fontSize: 16, fontWeight: 600 }}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
