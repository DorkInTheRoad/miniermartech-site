import Link from "next/link";
import CounterInline from "@/components/CounterInline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies — Minier MarTech",
  description:
    "Live campaigns producing real results. Verified metrics from M&A advisory, business brokerage, and PE deal origination. Infrastructure that compounds.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section
        style={{
          padding: "100px 24px 60px",
          textAlign: "center",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Results, Not Promises.
          </h1>
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.6 }}>
            Live campaigns producing real results. Verified metrics. Infrastructure that compounds
            over time.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#4ade80",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
              }}
            >
              Featured — Active Engagement
            </span>
          </div>

          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-strong)",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 0 }}>
              <div style={{ padding: "48px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase" as const,
                    marginBottom: 8,
                  }}
                >
                  Client Type
                </div>
                <div
                  style={{ fontSize: 16, color: "var(--text)", marginBottom: 24, fontWeight: 500 }}
                >
                  M&amp;A Advisory Firm (Anonymized)
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                    marginBottom: 32,
                  }}
                >
                  {[
                    { label: "Engagement Duration", val: "10+ months" },
                    { label: "Deal Vertical", val: "Lower-Middle Market M&A" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        style={{
                          fontSize: 11,
                          color: "var(--text-muted)",
                          textTransform: "uppercase" as const,
                          letterSpacing: "0.08em",
                          marginBottom: 4,
                          fontWeight: 600,
                        }}
                      >
                        {item.label}
                      </div>
                      <div style={{ fontSize: 15, color: "var(--text)", fontWeight: 500 }}>
                        {item.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    fontStyle: "italic",
                    marginBottom: 32,
                    padding: "12px 16px",
                    background: "rgba(248,247,244,0.04)",
                    borderRadius: 6,
                    lineHeight: 1.6,
                  }}
                >
                  Context: Client grew AUM from $150M to nearly $1B during engagement period.
                  Outreach contributed to deal flow pipeline — not attributed as the sole driver of
                  AUM growth.
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    {
                      label: "Problem",
                      text: "Relying on banker referrals and cold inbound for deal flow. No systematic way to identify motivated sellers before they engaged a broker.",
                    },
                    {
                      label: "Solution",
                      text: "Data-verified ICP design targeting LMM business owners in specific revenue and industry segments. 8-touch LinkedIn sequence with cohort-specific psychology. Pre-flight simulation before every batch load.",
                    },
                    {
                      label: "Result",
                      text: "15+ qualified meetings per month at 17% average reply rate across active cohorts. Seller database now owned and enriched — compounding value every batch.",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: "var(--accent-blue)",
                          textTransform: "uppercase" as const,
                          letterSpacing: "0.08em",
                          marginBottom: 6,
                        }}
                      >
                        {item.label}
                      </div>
                      <p
                        style={{
                          fontSize: 15,
                          color: "var(--text-muted)",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "var(--bg-secondary)",
                  borderLeft: "1px solid var(--border)",
                  padding: "48px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  minWidth: 200,
                  justifyContent: "center",
                }}
              >
                {[
                  { value: 15, suffix: "+/Mo", label: "Meetings Booked" },
                  { value: 17, suffix: "%", label: "Reply Rate" },
                  { value: 10, suffix: "+ Mo", label: "Active Engagement" },
                ].map((m) => (
                  <div
                    key={m.label}
                    style={{
                      textAlign: "center",
                      padding: "20px 16px",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                    }}
                  >
                    <CounterInline value={m.value} suffix={m.suffix} />
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        textTransform: "uppercase" as const,
                        letterSpacing: "0.08em",
                        marginTop: 6,
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 24px 80px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(22px, 2.5vw, 30px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 32,
            }}
          >
            Additional engagements
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                badge: "LIVE",
                color: "var(--accent-purple)",
                title: "AI-Enabled Collections Platform",
                sub: "FinTech / B2B SaaS",
                metrics: [
                  { value: 44, suffix: "", label: "Target Accounts" },
                  { value: 3, suffix: "", label: "Buyer Journeys Built" },
                  { value: 100, suffix: "%", label: "Manual Sourcing Eliminated" },
                ],
                desc: "Fully custom cohort architecture for a B2B AI platform targeting enterprise collections and recovery operations. Three distinct buyer personas, each with independent sequences and pre-flight simulation.",
              },
              {
                badge: "LIVE",
                color: "var(--accent-teal)",
                title: "M&A / PE Operator — Data Hygiene Audit",
                sub: "Data Quality Engineering",
                metrics: [
                  { value: 12181, suffix: "", label: "Contacts Audited", format: true },
                  { value: 2920, suffix: "", label: "Bad Contacts Removed", format: true },
                  { value: 24, suffix: "%", label: "Reduction Rate" },
                ],
                desc: "Full data audit of existing contact database from a leading outreach vendor. 24% of records contained invalid emails, stale titles, or duplicate entries. Database rebuilt clean before any campaign launched.",
              },
            ].map((study) => (
              <div
                key={study.title}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "28px 28px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        background: study.color + "22",
                        color: study.color,
                        padding: "3px 10px",
                        borderRadius: 12,
                      }}
                    >
                      {study.badge}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{study.sub}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontSize: 20,
                      fontWeight: 700,
                      marginBottom: 12,
                      lineHeight: 1.2,
                      color: "var(--text)",
                    }}
                  >
                    {study.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: 24,
                    }}
                  >
                    {study.desc}
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {study.metrics.map((m, idx) => (
                    <div
                      key={m.label}
                      style={{
                        padding: "20px 12px",
                        textAlign: "center",
                        borderRight: idx < 2 ? "1px solid var(--border)" : "none",
                      }}
                    >
                      <CounterInline
                        value={m.value}
                        suffix={m.suffix}
                        format={"format" in m ? (m.format as boolean) : false}
                        small
                      />
                      <div
                        style={{
                          fontSize: 10,
                          color: "var(--text-muted)",
                          textTransform: "uppercase" as const,
                          letterSpacing: "0.06em",
                          marginTop: 4,
                          lineHeight: 1.4,
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{ padding: "80px 24px", background: "var(--bg-secondary)", textAlign: "center" }}
      >
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(26px, 3vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Your pipeline could be next
          </h2>
          <p
            style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 36 }}
          >
            Start with a $750 Pipeline Audit. We diagnose, you decide.
          </p>
          <Link
            href="/contact"
            className="btn-coral"
            style={{ padding: "16px 36px", borderRadius: 8, fontSize: 16, fontWeight: 600 }}
          >
            Engineer Your Outbound
          </Link>
        </div>
      </section>
    </>
  );
}
