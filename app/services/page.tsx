import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Minier MarTech",
  description: "From infrastructure to intelligence to custom AI engineering. Three-phase service model for M&A advisors, business brokers, and PE deal teams.",
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "serviceType": "Outbound Pipeline Design & Execution",
      "provider": { "@type": "Organization", "name": "Minier MarTech", "url": "https://miniermartech.com" },
      "description": "ICP design, cohort architecture, data hygiene, and sequence execution for M&A advisors, business brokers, and PE deal teams. LinkedIn-led campaigns reach 700–5,000 contacts per month depending on tier, producing a 17%+ reply rate and 12.6% acceptance rate for meeting requests.",
      "areaServed": "United States",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "1500",
        "highPrice": "3500",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "month" }
      }
    },
    {
      "@type": "Service",
      "serviceType": "Data Intelligence & Predictive Scoring",
      "provider": { "@type": "Organization", "name": "Minier MarTech", "url": "https://miniermartech.com" },
      "description": "Predictive lead scoring, market intelligence reports, and content infrastructure built on behavioral data from active outbound campaigns. Turns campaign signal into a proprietary intelligence asset.",
      "areaServed": "United States"
    },
    {
      "@type": "Service",
      "serviceType": "Outbound Pipeline Audit",
      "provider": { "@type": "Organization", "name": "Minier MarTech", "url": "https://miniermartech.com" },
      "description": "A $750 diagnostic of your current outbound infrastructure, ICP fit, and data quality — the entry point before any retainer commitment.",
      "areaServed": "United States",
      "offers": {
        "@type": "Offer",
        "price": "750",
        "priceCurrency": "USD"
      }
    }
  ]
};

const phases = [
  {
    num: "Phase 1",
    title: "Pipeline Design & Execution",
    timeline: "Months 1–3",
    color: "var(--accent-blue)",
    desc: "The foundational layer. ICP design, cohort architecture, data hygiene, and sequence execution — built and operated end-to-end.",
    tiers: [
      { name: "LinkedIn Foundation", price: "$1,500/mo", contacts: "~700 contacts", responses: "~30–40", meetings: "8–12" },
      { name: "Multi-Channel", price: "$2,500/mo", contacts: "~2,500 contacts", responses: "~100–140", meetings: "18–28" },
      { name: "Scale", price: "$3,500/mo", contacts: "~5,000 contacts", responses: "~200–280", meetings: "35–55" },
    ],
  },
  {
    num: "Phase 2",
    title: "Data Intelligence",
    timeline: "Months 3–6",
    color: "var(--accent-purple)",
    desc: "Once your pipeline is generating signal, we model it. Predictive scoring and market intelligence reports built on your behavioral data.",
    tiers: [
      { name: "Predictive Lead Scoring", price: "$750/mo", contacts: "Ongoing model", responses: "Score updates", meetings: "Monthly calibration" },
      { name: "Market Intelligence Reports", price: "$1,200/mo", contacts: "Segment analysis", responses: "ICP refinement", meetings: "Quarterly deep-dives" },
    ],
  },
  {
    num: "Phase 3",
    title: "The AI Moat",
    timeline: "Months 6+",
    color: "var(--accent-teal)",
    desc: "Custom engineering built on top of your proprietary data. Automation, AI chatbots, persona engines, and knowledge systems that compound your competitive advantage.",
    tiers: [
      { name: "Custom Automation", price: "From $2,500", contacts: "Workflow design", responses: "Integration build", meetings: "Ongoing optimization" },
      { name: "Custom AI Chatbots", price: "From $3,500", contacts: "Training data prep", responses: "Model deployment", meetings: "Quarterly retraining" },
      { name: "Knowledge Engine Retainer", price: "$4,500/mo", contacts: "Full system", responses: "Continuous enrichment", meetings: "Monthly review" },
    ],
  },
];

const verticals = [
  {
    title: "PE Business Development",
    icon: "📊",
    color: "var(--accent-teal)",
    points: [
      "PE and family office BD teams sourcing proprietary deal flow",
      "Direct-to-founder targeting in the LMM",
      "Need infrastructure that doesn't rely on banker relationships",
    ],
  },
  {
    title: "M&A Advisory",
    icon: "⚖",
    color: "var(--accent-blue)",
    points: [
      "Boutique M&A advisors in the lower-middle market",
      "Success-fee model — seller origination is the constraint",
      "Need systematic, data-verified deal flow to compete with larger shops",
    ],
  },
  {
    title: "RIA Consolidation & Roll-Up",
    icon: "📈",
    color: "var(--accent-coral)",
    points: [
      "RIA roll-up platforms and acquirers targeting independent advisors",
      "Independent RIA owners managing $100M–$750M AUM are the constraint",
      "Need systematic outreach to reach advisors before a banker does",
    ],
  },
  {
    title: "Business Brokerage",
    icon: "🤝",
    color: "var(--accent-purple)",
    points: [
      "IBBA/CBI-credentialed brokers in the $500K–$10M deal range",
      "Spend more time selling listings than finding sellers",
      "Need proactive seller identification infrastructure",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <section style={{ padding: "100px 24px 60px", textAlign: "center", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 16 }}>
            Services
          </div>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1 }}>
            Services
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6 }}>
            From infrastructure to intelligence to innovation.
          </p>
        </div>
      </section>

      {phases.map((phase, i) => (
        <section key={phase.num} style={{ padding: "80px 24px", background: i % 2 === 0 ? "var(--bg)" : "var(--bg-secondary)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 24, marginBottom: 48, flexWrap: "wrap" as const }}>
              <div style={{
                background: phase.color, color: "#fff", padding: "6px 16px", borderRadius: 20,
                fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" as const, flexShrink: 0,
              }}>
                {phase.num}
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8, lineHeight: 1.2 }}>
                  {phase.title}
                  <span style={{ fontSize: 15, fontFamily: "var(--font-inter)", color: "var(--text-muted)", fontWeight: 400, marginLeft: 16 }}>
                    {phase.timeline}
                  </span>
                </h2>
                <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 640, lineHeight: 1.7 }}>{phase.desc}</p>
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ background: phase.color + "22", borderBottom: `2px solid ${phase.color}` }}>
                    <th style={{ textAlign: "left", padding: "14px 20px", color: "var(--text)", fontWeight: 600, whiteSpace: "nowrap" as const }}>Tier</th>
                    <th style={{ textAlign: "left", padding: "14px 20px", color: "var(--text)", fontWeight: 600, whiteSpace: "nowrap" as const }}>Monthly Cost</th>
                    <th style={{ textAlign: "left", padding: "14px 20px", color: "var(--text)", fontWeight: 600, whiteSpace: "nowrap" as const }}>Contacts Reached</th>
                    <th style={{ textAlign: "left", padding: "14px 20px", color: "var(--text)", fontWeight: 600, whiteSpace: "nowrap" as const }}>Responses</th>
                    <th style={{ textAlign: "left", padding: "14px 20px", color: "var(--text)", fontWeight: 600, whiteSpace: "nowrap" as const }}>Qualified Meetings</th>
                  </tr>
                </thead>
                <tbody>
                  {phase.tiers.map((tier, j) => (
                    <tr key={tier.name} style={{ background: j % 2 === 0 ? "var(--bg-card)" : "transparent", borderBottom: "1px solid var(--border)" }}>
                      <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--text)" }}>{tier.name}</td>
                      <td style={{ padding: "14px 20px", color: phase.color, fontWeight: 600 }}>{tier.price}</td>
                      <td style={{ padding: "14px 20px", color: "var(--text-muted)" }}>{tier.contacts}</td>
                      <td style={{ padding: "14px 20px", color: "var(--text-muted)" }}>{tier.responses}</td>
                      <td style={{ padding: "14px 20px", color: "var(--text-muted)" }}>{tier.meetings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>
              Who this is for
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)" }}>Four operator verticals. One infrastructure problem.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {verticals.map((v) => (
              <div key={v.title} style={{
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 28px",
                borderTop: `3px solid ${v.color}`,
              }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 22, fontWeight: 700, marginBottom: 16, color: "var(--text)" }}>{v.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {v.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                      <span style={{ color: v.color, flexShrink: 0, marginTop: 2 }}>✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Not your typical agency
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              {
                label: "Typical Agency",
                accent: false,
                items: [
                  "Generic templates sent to bulk lists",
                  "No ICP validation before launch",
                  "Platform-dependent — they own the data",
                  "No behavioral modeling or signal capture",
                  "Month-to-month with no compounding value",
                  "Vanity metrics over qualified pipeline",
                ],
                icon: "✗",
                iconColor: "#ef4444",
              },
              {
                label: "Minier MarTech",
                accent: true,
                items: [
                  "Cohort-specific sequences validated pre-launch",
                  "ICP research and persona modeling first",
                  "You own every contact record and signal",
                  "Behavioral data captured and enriched over time",
                  "System compounds value with every batch",
                  "Qualified meetings and reply rates as north stars",
                ],
                icon: "✓",
                iconColor: "#4ade80",
              },
            ].map((col) => (
              <div key={col.label} style={{
                background: col.accent ? "rgba(44, 95, 138, 0.08)" : "var(--bg-card)",
                border: col.accent ? "2px solid var(--accent-blue)" : "1px solid var(--border)",
                borderRadius: 12, padding: "32px 28px",
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: col.accent ? "var(--accent-blue)" : "var(--text-muted)", marginBottom: 24, letterSpacing: "0.02em" }}>
                  {col.label}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text-muted)", lineHeight: 1.5 }}>
                      <span style={{ color: col.iconColor, fontWeight: 700, flexShrink: 0 }}>{col.icon}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ala Carte Services */}
      <section style={{ padding: "80px 24px", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 12 }}>
              Standalone Services
            </div>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>
              Before the retainer — or alongside it
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 520, margin: "0 auto" }}>
              Two fixed-scope engagements. No ongoing commitment required.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {/* Pipeline Audit */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "40px 36px", borderTop: "3px solid var(--accent-coral)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--accent-coral)", textTransform: "uppercase" as const, marginBottom: 16 }}>
                Entry Point
              </div>
              <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8, color: "var(--text)" }}>
                $750 Pipeline Audit
              </h3>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                A diagnostic of your current outbound infrastructure, ICP fit, and data quality. Written assessment with specific recommendations — before any retainer commitment.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                {["ICP definition review", "Contact data quality assessment", "Sequence structure analysis", "Infrastructure gap report", "Prioritized recommendations"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--accent-coral)", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-coral" style={{ padding: "13px 28px", borderRadius: 8, fontSize: 14, fontWeight: 600, display: "inline-block" }}>
                Start a Conversation
              </Link>
            </div>

            {/* Engine Optimization */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "40px 36px", borderTop: "3px solid var(--accent-teal)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--accent-teal)", textTransform: "uppercase" as const, marginBottom: 16 }}>
                Ala Carte
              </div>
              <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8, color: "var(--text)" }}>
                Engine Optimization
              </h3>
              <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                SEO, GEO, and AEO audit and optimization — structured so your site gets cited by AI tools (ChatGPT, Perplexity, Google AI Overviews) when your prospects are researching. Built for B2B service businesses.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                {["Technical SEO audit", "LLM crawler configuration (robots.txt, llms.txt)", "JSON-LD schema implementation (Organization, Service, FAQPage)", "AI citation gap analysis", "Off-site citation strategy"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--accent-teal)", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" style={{ padding: "13px 28px", borderRadius: 8, fontSize: 14, fontWeight: 600, display: "inline-block", border: "1px solid var(--accent-teal)", color: "var(--accent-teal)", textDecoration: "none" }}>
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg)", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Not sure where to start?
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 36 }}>
            One conversation is enough to know whether what we build is the right fit for your pipeline.
          </p>
          <Link href="/contact" className="btn-coral" style={{ padding: "16px 36px", borderRadius: 8, fontSize: 16, fontWeight: 600 }}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
