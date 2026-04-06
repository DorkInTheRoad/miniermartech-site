import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Minier MarTech",
  description: "The five-stage process: ICP design, pre-flight validation, campaign execution, monthly optimization, and intelligence compounding.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Minier MarTech build outbound pipeline for M&A advisors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minier MarTech designs outbound origination systems for M&A advisors in five stages: ICP research and cohort architecture, pre-flight contact simulation, campaign execution with live signal capture, monthly optimization, and ongoing data intelligence. Every contact record and behavioral signal is retained by the client — not locked in a platform."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Minier MarTech and a typical outbound marketing agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike typical agencies that send generic templates to bulk lists, Minier MarTech models each contact cohort before launch using a pre-flight simulation. Sequences are tuned to specific buyer psychology. All data — contact records, response signals, enrichment accuracy — stays with the client. The system compounds value with every batch rather than resetting each month."
      }
    },
    {
      "@type": "Question",
      "name": "What results can M&A deal teams expect from outbound pipeline infrastructure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active Minier MarTech campaigns have achieved a 17%+ reply rate and 12.6% acceptance rate — compared to a typical cold outbound acceptance rate of 3–5%. At the Scale tier, campaigns reach approximately 480 contacts per month and generate 12–24 qualified meetings."
      }
    },
    {
      "@type": "Question",
      "name": "How do business brokers use outbound infrastructure to find sellers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IBBA/CBI-credentialed business brokers use Minier MarTech to build proactive seller identification pipelines. Instead of waiting on referrals, brokers get a systematic ICP-mapped outreach system targeting business owners in the $500K–$10M deal range by industry, geography, and succession readiness signals."
      }
    },
    {
      "@type": "Question",
      "name": "What is the entry point to work with Minier MarTech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The entry point is a $750 Pipeline Audit — a diagnostic of your current outbound infrastructure, ICP fit, and data quality. It produces a written assessment and recommendations before any retainer commitment."
      }
    }
  ]
};

const stages = [
  {
    num: "01",
    title: "Client Design",
    sub: "ICP Research + Cohort Architecture",
    color: "var(--accent-blue)",
    desc: "We map your ideal seller or counterparty profile at the granular level — title, firm size, deal type, deal stage, and psychological trigger. Then we build cohort segments that reflect real buying psychology, not demographic buckets.",
    timeline: "Wk 1–2",
  },
  {
    num: "02",
    title: "Batch Pre-flight",
    sub: "Contact Modeling + Sequence Validation",
    color: "var(--accent-purple)",
    desc: "Before any message goes out, every cohort runs through a simulation layer. We model how your specific personas will respond to each sequence touch — and we fix weak points before they cost you warm leads.",
    timeline: "Wk 3–4",
  },
  {
    num: "03",
    title: "Campaign Execution",
    sub: "Live Pipeline + Signal Capture",
    color: "var(--accent-teal)",
    desc: "Sequences go live with a precise cadence. Every reply, connection, view, and silence is captured as a behavioral data point. We're not just sending messages — we're building a signal database from day one.",
    timeline: "Wk 5+",
  },
  {
    num: "04",
    title: "Monthly Optimization",
    sub: "Performance Review + Sequence Changelog",
    color: "var(--accent-amber)",
    desc: "Every month, we pull the data and run a full performance review. Open rates, reply rates, meeting conversion, cohort-level signal patterns. The sequence gets updated based on what the field data tells us.",
    timeline: "Mo 3+",
  },
  {
    num: "05",
    title: "Intelligence Compounding",
    sub: "Data Enrichment + Model Calibration",
    color: "var(--accent-gold)",
    desc: "At six months, your data set becomes a genuine competitive asset. We run enrichment passes, recalibrate the predictive model, and begin building the intelligence layer that makes every future campaign faster and sharper.",
    timeline: "Mo 6+",
  },
];

const faqs = [
  {
    q: "How many contacts do you reach per month?",
    a: "It depends on the tier. The LinkedIn Foundation tier targets roughly 160 contacts per month. Multi-Channel doubles that to around 320. The Scale tier runs at approximately 480. Volume is always matched to the quality of your ICP — we don't push contacts through a pipeline that hasn't been validated.",
  },
  {
    q: "What does 'data hygiene' actually mean in practice?",
    a: "Before any contact enters a campaign, we run a validation pass — checking for invalid emails, stale titles, duplicate entries, and enrichment accuracy. The Chad/OurCFO audit we ran found 24% bad data across 12,181 contacts from a leading vendor. That's the problem we're solving. Bad data doesn't just waste spend — it damages your sender reputation.",
  },
  {
    q: "Do I need to have existing outbound infrastructure?",
    a: "No. Most clients start from scratch. We handle the tooling, the ICP architecture, the sequence build, and the data layer. You bring domain knowledge about your market — we build the infrastructure around it.",
  },
  {
    q: "What's the difference between Phase 1 and the later phases?",
    a: "Phase 1 is execution — we're building and running your pipeline. Phases 2 and 3 are intelligence layers built on top of the behavioral data your Phase 1 campaigns generate. You can't skip to Phase 2 without the signal data. The system compounds because Phase 1 creates the raw material for everything that follows.",
  },
  {
    q: "How long before we see meetings?",
    a: "Most clients see qualified meetings within the first four to six weeks of campaigns going live. The first two weeks are typically prospecting and early acceptance activity. Replies and meeting requests follow in weeks three through six as the sequence progresses through the later touches.",
  },
  {
    q: "What happens to our data if we stop the engagement?",
    a: "You keep everything. All contact records, behavioral data, sequence files, and enrichment data are yours. We document the full data structure so you can migrate to any system or operator. Data ownership is not a marketing line — it's how the engagement is structured from day one.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Header */}
      <section style={{ padding: "100px 24px 60px", textAlign: "center", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>
            Process
          </div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1 }}>
            How It Works
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6 }}>
            Five stages. Each one feeds the next. The system compounds over time.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 27, top: 0, bottom: 0, width: 2,
            background: "linear-gradient(to bottom, var(--accent-blue), var(--accent-gold))",
            opacity: 0.3,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
            {stages.map((stage) => (
              <div key={stage.num} style={{ display: "flex", gap: 36, alignItems: "flex-start" }}>
                {/* Node */}
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
                  background: stage.color, display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, color: "#fff", zIndex: 1, position: "relative",
                  boxShadow: `0 0 0 4px var(--bg), 0 0 0 6px ${stage.color}33`,
                }}>
                  {stage.num}
                </div>
                {/* Content */}
                <div style={{ paddingTop: 8, flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                    <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 24, fontWeight: 700, color: "var(--text)", margin: 0, lineHeight: 1.2 }}>
                      {stage.title}
                    </h3>
                    <span style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                      color: stage.color, background: stage.color + "18", padding: "3px 10px", borderRadius: 12,
                    }}>
                      {stage.timeline}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: stage.color, fontWeight: 500, marginBottom: 12, letterSpacing: "0.02em" }}>
                    {stage.sub}
                  </div>
                  <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 640, margin: 0 }}>
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline expectations bar */}
      <section style={{ padding: "60px 24px", background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 700, textAlign: "center", marginBottom: 40, letterSpacing: "-0.02em" }}>
            What to expect, and when
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {stages.map((s) => (
              <div key={s.num} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "20px 16px",
                borderTop: `3px solid ${s.color}`, textAlign: "center",
              }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: s.color, marginBottom: 6, fontFamily: "var(--font-fraunces)" }}>
                  {s.timeline}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", textAlign: "center", marginBottom: 48 }}>
            Common questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--bg-secondary)", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
            See the process in action
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 36 }}>
            One conversation to map out what a five-stage pipeline looks like for your specific market and deal flow goals.
          </p>
          <Link href="/contact" style={{
            background: "var(--accent-coral)", color: "var(--text)", padding: "16px 36px",
            borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 600, display: "inline-block",
          }}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details style={{ borderBottom: "1px solid var(--border)" }}>
      <summary style={{
        padding: "20px 0", cursor: "pointer", fontSize: 16, fontWeight: 600,
        color: "var(--text)", listStyle: "none", display: "flex", justifyContent: "space-between",
        alignItems: "center", gap: 16,
        userSelect: "none",
      }}>
        {q}
        <span style={{ fontSize: 20, color: "var(--text-muted)", flexShrink: 0, transition: "transform 0.2s" }}>+</span>
      </summary>
      <div style={{ paddingBottom: 20, paddingRight: 32 }}>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>{a}</p>
      </div>
    </details>
  );
}
