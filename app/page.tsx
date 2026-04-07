import Link from "next/link";
import CounterBar from "@/components/CounterBar";

export default function Home() {
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

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(44, 95, 138, 0.15)", border: "1px solid rgba(44, 95, 138, 0.3)",
              borderRadius: 20, padding: "6px 14px", marginBottom: 32,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                Campaigns live for PE teams, M&amp;A advisors, RIAs &amp; brokers
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
              Elite Outbound Campaigns.<br />
              <span style={{ color: "var(--accent-gold)" }}>Enterprise-Grade Engineering.</span>
            </h1>

            <p style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 600,
              marginBottom: 40,
            }}>
              We design your origination pipeline, model your contacts, simulate their campaigns before they enter the funnel, and convert every campaign into a proprietary intelligence asset your competitors cannot replicate.
            </p>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/contact" className="btn-coral" style={{
                padding: "16px 32px", borderRadius: 8, fontSize: 16, fontWeight: 600,
              }}>
                Book a Strategy Call
              </Link>
              <Link href="/how-it-works" className="link-arrow">
                See How It Works <span style={{ fontSize: 18 }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section style={{ padding: "100px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
              How we build your pipeline
            </h2>
            <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
              Three layers. Each one feeds the next.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              {
                num: "01",
                title: "Precision Design",
                desc: "Every campaign is architected around a specific buyer psychology. ICP research, cohort segmentation, and sequence design built for the exact mindset you're targeting — not a generic template.",
                color: "var(--accent-blue)",
                accent: false,
              },
              {
                num: "02",
                title: "Pre-flight Simulation",
                desc: "Before any contact group enters the pipeline, it is run through a full simulation against your sequence. We model cohort fit, tune messaging to the specific buyer, and validate before the first message goes out. No blind loads. Ever.",
                color: "var(--accent-purple)",
                accent: false,
              },
              {
                num: "03",
                title: "Intelligence Retention",
                desc: "Every contact that moves through the system generates a behavioral record. Response signals, engagement patterns, enrichment accuracy — captured, structured, and owned by you. The data compounds over time.",
                color: "var(--accent-teal)",
                accent: true,
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="card-hover"
                style={{
                  background: "var(--bg-card)",
                  border: pillar.accent ? `1px solid ${pillar.color}` : "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "36px 32px",
                  cursor: "default",
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: pillar.color, marginBottom: 20, textTransform: "uppercase" as const }}>
                  {pillar.num}
                </div>
                <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 22, fontWeight: 700, marginBottom: 14, color: "var(--text)", lineHeight: 1.2 }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Ownership */}
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
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", color: "var(--accent-gold)", textTransform: "uppercase" as const, marginBottom: 24 }}>
              Data Ownership Guarantee
            </div>
            <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.2 }}>
              You own your data. Full stop.
            </h2>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 640, margin: "0 auto" }}>
              Every contact that moves through your pipeline generates a behavioral record — response signals, engagement patterns, enrichment accuracy — captured, structured, and retained as your proprietary asset. The longer the system runs, the more precise every future campaign becomes.
            </p>
          </div>
        </div>
      </section>

      {/* Results Bar */}
      <CounterBar />

      {/* CTA Banner */}
      <section style={{
        padding: "100px 24px",
        background: "linear-gradient(135deg, #0d1a2e 0%, #111827 100%)",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.15 }}>
            Ready to build predictable pipeline?
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", marginBottom: 40, lineHeight: 1.6 }}>
            One conversation to scope your ICP, audit your current outreach, and map out what a consistent pipeline looks like for your business.
          </p>
          <Link href="/contact" className="btn-coral" style={{
            padding: "18px 40px", borderRadius: 8, fontSize: 17, fontWeight: 600,
          }}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
