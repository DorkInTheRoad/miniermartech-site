import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold Outreach Isn't Broken. Your Infrastructure Is. — Minier MarTech",
  description: "Most deal teams blame the channel when campaigns underperform. The problem isn't cold outreach — it's the absence of infrastructure behind it. Here's what that actually means.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does cold outreach fail for M&A advisors and business brokers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cold outreach fails most often because of infrastructure problems, not channel problems. The three root causes are: (1) poor ICP definition — contacting people outside the true buyer profile, (2) no cohort architecture — sending the same sequence to fundamentally different personas, and (3) no signal capture — failing to retain behavioral data that would improve future outreach. The channel works when the system behind it is built correctly.",
      },
    },
    {
      "@type": "Question",
      "name": "What is outbound pipeline infrastructure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outbound pipeline infrastructure is the system layer behind outreach campaigns: ICP research and scoring, contact data sourcing and hygiene, cohort segmentation, sequence design, pre-launch validation, behavioral signal capture, and data enrichment over time. Infrastructure is what separates a campaign that compounds value with every batch from one that resets every month.",
      },
    },
    {
      "@type": "Question",
      "name": "What reply rate should M&A advisors expect from cold outbound?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Well-built outbound infrastructure targeting the right ICP produces 12–18% reply rates and 10–15% acceptance rates for meeting requests. Industry benchmarks for generic cold outreach are 3–5% acceptance. The gap comes from ICP precision, cohort-specific sequencing, and pre-launch validation — not from sending more volume.",
      },
    },
    {
      "@type": "Question",
      "name": "What is ICP design and why does it matter for deal origination?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ICP (Ideal Contact Profile) design is the process of defining exactly who your outbound should target — industry, geography, company size, deal readiness signals, and psychological profile. For deal origination, a precise ICP means every outreach dollar reaches someone with a real probability of being a seller, source, or counterpart. Without ICP design, outbound is random and produces random results.",
      },
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section style={{ padding: "100px 24px 60px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Link href="/insights" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
            ← Insights
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--accent-blue)", textTransform: "uppercase" as const }}>
              Infrastructure
            </span>
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>5 min read</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24 }}>
            Cold Outreach Isn't Broken. Your Infrastructure Is.
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.7 }}>
            Most deal teams blame the channel when campaigns underperform. The channel isn't the problem. The system running behind it is.
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "80px 24px 100px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 16, lineHeight: 1.85, color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: 28 }}>

            <p>
              When an outbound campaign underperforms, the instinct is to blame the channel. Cold email is dead. LinkedIn is too saturated. Nobody responds to outreach anymore. But in our experience running campaigns for M&A advisors, business brokers, and PE deal teams, the channel is almost never the actual problem. The problem is what's behind it — or more precisely, what's missing.
            </p>

            <p>
              LinkedIn outreach produces a 17%+ reply rate when built correctly. It produces 3–5% when built like most agencies build it. That gap doesn't come from the channel. It comes from infrastructure.
            </p>

            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginTop: 16 }}>
              What infrastructure actually means
            </h2>

            <p>
              Infrastructure is the system layer behind the campaign. Most people think outbound is: write a sequence, load it into a tool, hit send. That's not outbound infrastructure. That's just sending emails.
            </p>

            <p>
              Real infrastructure has five components:
            </p>

            <ul style={{ paddingLeft: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              <li><strong style={{ color: "var(--text)" }}>ICP design.</strong> Not a vague description of your ideal client. A scored, segmented definition of exactly who you're targeting, why, and how deal-ready they are. Without this, you're sending messages into a population that doesn't match your thesis.</li>
              <li><strong style={{ color: "var(--text)" }}>Cohort architecture.</strong> Different contact segments require different sequences. A boutique M&A advisor sourcing lower-middle market deals does not respond to the same message as an IBBA-credentialed broker or a PE BD director. Sending one sequence to all three is how campaigns fail.</li>
              <li><strong style={{ color: "var(--text)" }}>Data hygiene.</strong> Contact data decays at roughly 30% per year. If you're working from a list that's 18 months old, a third of your contacts are already invalid. Bounces hurt deliverability. Bad data produces bad signal.</li>
              <li><strong style={{ color: "var(--text)" }}>Pre-launch validation.</strong> Before a contact group enters the pipeline, it should be modeled — what are the objections, what's the likely response pattern, where are the psychological sticking points in the sequence? Skipping this step is why so many campaigns launch, underperform, and never get better.</li>
              <li><strong style={{ color: "var(--text)" }}>Signal capture and enrichment.</strong> Every response — positive, neutral, or negative — is data. Who replied in which tone, at which touch, on which day. This data is what makes your second batch better than your first. Without it, every campaign starts from zero.</li>
            </ul>

            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginTop: 16 }}>
              Why most outbound campaigns don't have this
            </h2>

            <p>
              Because building it takes time and expertise that most deal teams don't have — and most agencies don't offer. The typical agency model is: deliver a template, load a list, report on open rates. There's no ICP modeling, no cohort architecture, no signal capture. The list is often not theirs to keep. When the engagement ends, so does everything they learned.
            </p>

            <p>
              This is why the same team can run four campaigns and see no improvement. They're not building anything. They're just running the same undifferentiated process on a new list each time.
            </p>

            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginTop: 16 }}>
              What the alternative looks like
            </h2>

            <p>
              The outbound systems we build start with research, not a template. Before a single message is sent, we've mapped the ICP, segmented the contact cohort, designed the sequence around the specific psychology of that buyer, and run the cohort through a pre-launch simulation that surfaces likely objections and optimizes for the most productive entry point.
            </p>

            <p>
              When the campaign runs, every signal is captured — who responded, at what touch, with what sentiment. That data gets retained and enriched. It feeds the next batch. Over time, the system becomes a proprietary intelligence asset. The data belongs to the client, not the platform.
            </p>

            <p>
              The difference in outcome is measurable. Our active LinkedIn campaigns produce a 12.6% connection acceptance rate and 17%+ reply rate — compared to a typical industry baseline of 3–5% acceptance. That gap is infrastructure, not luck.
            </p>

            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text)", marginTop: 16 }}>
              The question worth asking
            </h2>

            <p>
              Before running another outbound campaign, ask: what happens to everything we learn? If the answer is "it goes away when the campaign ends," you don't have infrastructure. You have a one-time spend that resets every cycle.
            </p>

            <p>
              If you want the data to compound — if you want each batch to be smarter than the last — the system has to be built to hold it.
            </p>

            {/* CTA */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: 40, marginTop: 16 }}>
              <p style={{ fontSize: 15, marginBottom: 24, color: "var(--text-muted)" }}>
                The $750 Pipeline Audit is designed for exactly this conversation — a diagnostic of your current outbound infrastructure before any retainer commitment.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" as const }}>
                <Link href="/contact" className="btn-coral" style={{ padding: "13px 28px", borderRadius: 8, fontSize: 14, fontWeight: 600 }}>
                  Start a Conversation
                </Link>
                <Link href="/services" style={{ padding: "13px 28px", borderRadius: 8, fontSize: 14, fontWeight: 600, border: "1px solid var(--border)", color: "var(--text-muted)", textDecoration: "none" }}>
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
