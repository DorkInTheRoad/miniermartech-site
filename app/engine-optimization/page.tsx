import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engine Optimization — Minier MarTech",
  description: "Turn raw contact data into predictive intelligence. Our Engine Optimization framework scores 12,000+ contacts, identifies deal-ready segments, and compounds your competitive advantage with every campaign.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Engine Optimization",
      "description": "Predictive contact scoring, cohort ranking, and market intelligence built on behavioral campaign data. Turn signal into a proprietary asset that improves with every batch.",
      "provider": {
        "@type": "Organization",
        "name": "Minier MarTech",
        "url": "https://miniermartech.com"
      },
      "areaServed": "United States",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "750",
        "highPrice": "2500",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "47",
        "description": "Average improvement: +340% in qualified lead accuracy within 90 days"
      }
    }
  ]
};

export default function EngineOptimizationPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #111827 0%, #0d1a2e 60%, #111827 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "-10%", width: "50%", height: "70%",
          background: "radial-gradient(ellipse, rgba(44, 95, 138, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "69px 24px 80px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(44, 95, 138, 0.15)", border: "1px solid rgba(44, 95, 138, 0.3)",
              borderRadius: 20, padding: "6px 14px", marginBottom: 32,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                Turns campaign data into predictive intelligence
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 24,
            }}>
              Engine Optimization.<br />
              <span style={{ color: "var(--accent-gold)" }}>Your Data Becomes the Moat.</span>
            </h1>

            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 600,
              marginBottom: 40,
            }}>
              Most teams treat outbound campaigns as one-time efforts. That's leaving 340% of your competitive advantage on the table. Engine Optimization turns every campaign into proprietary market intelligence — contact scoring, cohort ranking, and deal-readiness signals that improve with every batch.
            </p>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-coral" style={{
                padding: "16px 32px", borderRadius: 8, fontSize: 16, fontWeight: 600,
              }}>
                Start a Conversation
              </Link>
              <Link href="/how-it-works" className="link-arrow">
                See How It Works <span style={{ fontSize: 18 }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Engine Optimization */}
      <section style={{ padding: "100px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24 }}>
              What Engine Optimization Actually Means
            </h2>
            <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 640, margin: "0 auto", lineHeight: 1.8 }}>
              Engine Optimization is the layer between raw outreach data and competitive advantage. Every contact that moves through your pipeline generates a signal — reply patterns, response timing, objection themes, deal-readiness indicators. Most teams lose this data. We capture, structure, and model it into a proprietary scoring system that gets smarter with every campaign.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 80 }}>
            {[
              {
                num: "01",
                title: "Contact Scoring",
                desc: "Every contact is scored across 12+ behavioral dimensions: reply propensity, deal-readiness signals, message receptivity, timing sensitivity, and objection patterns. Your next campaign targets the highest-probability segment.",
              },
              {
                num: "02",
                title: "Cohort Ranking",
                desc: "Contacts aren't random. Engine Optimization segments your list into tiers: buyers (immediate action), influencers (future paths), and non-buyers (save for next cycle). Focus outreach where conversion probability is highest.",
              },
              {
                num: "03",
                title: "Market Intelligence",
                desc: "Aggregate data reveals industry trends, seasonal deal-readiness patterns, and competitive positioning signals. Monthly reports show what's working, what's shifting, and where opportunity is hiding.",
              },
            ].map((item) => (
              <div
                key={item.num}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "40px 32px",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "var(--accent-teal)", marginBottom: 20, textTransform: "uppercase" }}>
                  {item.num}
                </div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)", lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section style={{ padding: "80px 24px", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            border: "1px dashed var(--accent-gold)",
            borderRadius: 16,
            padding: "60px 48px",
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "var(--accent-gold)", textTransform: "uppercase", marginBottom: 24 }}>
              The Compounding Effect
            </div>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>
              Each Campaign Gets Smarter
            </h2>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 640, margin: "0 auto" }}>
              Batch 1: You learn which cohorts respond. Batch 2: Your sequences improve based on response data. Batch 3: You're only targeting high-probability segments. By month 6, your cost-per-meeting has dropped 60% and your deal-ready signal accuracy is +340% above baseline. That's the moat.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "100px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 64, textAlign: "center" }}>
            Engine Optimization Packages
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                name: "Quarterly Baseline",
                price: "$750",
                period: "one-time",
                color: "var(--accent-blue)",
                features: [
                  "Initial data audit of your current campaigns",
                  "Scoring model built on 90+ days of historical data",
                  "Baseline cohort segmentation report",
                  "Recommendations for next 3 campaigns",
                  "8 hours of consultation"
                ],
                cta: "Start with Audit",
              },
              {
                name: "Monthly Intelligence",
                price: "$1,200",
                period: "/month",
                color: "var(--accent-purple)",
                featured: true,
                features: [
                  "All Baseline features, ongoing",
                  "Monthly scoring model updates",
                  "Weekly cohort performance reports",
                  "Predictive deal-readiness scoring",
                  "Market intelligence briefs",
                  "Direct access for questions",
                ],
                cta: "Build the Moat",
              },
              {
                name: "Custom Enterprise",
                price: "From $2,500",
                period: "/month",
                color: "var(--accent-teal)",
                features: [
                  "All Monthly Intelligence features",
                  "Custom AI model training on your data",
                  "Real-time cohort scoring API",
                  "Automated segment triggers",
                  "Custom reporting dashboard",
                  "Quarterly strategy reviews",
                ],
                cta: "Let's Design Your System",
              },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: "var(--bg-card)",
                  border: tier.featured ? `2px solid ${tier.color}` : "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "40px 32px",
                  position: "relative",
                  transform: tier.featured ? "scale(1.02)" : "scale(1)",
                  transition: "transform 0.3s",
                }}
              >
                {tier.featured && (
                  <div style={{ position: "absolute", top: -12, left: 20, background: tier.color, color: "var(--text)", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    Recommended
                  </div>
                )}
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: tier.color, marginBottom: 16, textTransform: "uppercase" }}>
                  {tier.name}
                </div>
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 700, color: "var(--text)", lineHeight: 1 }}>
                    {tier.price}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--text-muted)", marginTop: 4 }}>
                    {tier.period}
                  </div>
                </div>
                <ul style={{ marginBottom: 40, listStyle: "none", padding: 0 }}>
                  {tier.features.map((feature, i) => (
                    <li key={i} style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 12, paddingLeft: 20, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: tier.color, fontWeight: 700 }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-coral" style={{
                  width: "100%",
                  padding: "14px 24px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: "center",
                  display: "block",
                  textDecoration: "none",
                }}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ken */}
      <section style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, textAlign: "center" }}>
            Why Engine Optimization Works
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 760, margin: "0 auto 64px", lineHeight: 1.8, textAlign: "center" }}>
            We've scored 12,000+ contacts across 47 active campaigns. That data lives in the system. Every client's model improves from every other client's learnings. Your competitive advantage compounds.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, textAlign: "center" }}>
            {[
              { stat: "12,000+", label: "Contacts Scored" },
              { stat: "17%+", label: "Average Reply Rate" },
              { stat: "12.6%", label: "Acceptance Rate" },
              { stat: "340%", label: "Accuracy Improvement" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: "var(--accent-gold)", lineHeight: 1, marginBottom: 12 }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: 14, color: "var(--text-muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #0d1a2e 0%, #111827 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.15 }}>
            Ready to Turn Data Into Advantage?
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", marginBottom: 40, lineHeight: 1.6 }}>
            Start with a $750 Pipeline Audit to understand where your current data is, then we'll design an Engine Optimization system built for your ICP.
          </p>
          <Link href="/contact" className="btn-coral" style={{
            padding: "18px 40px", borderRadius: 8, fontSize: 17, fontWeight: 600,
          }}>
            Start a Conversation
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
