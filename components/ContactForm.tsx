"use client";

import { useState } from "react";
import Link from "next/link";

const needOptions = [
  "Build Outbound Pipeline",
  "Fix Broken Outbound",
  "Scale Existing Outreach",
  "Infrastructure Only",
  "LinkedIn Only",
  "Not Sure Yet",
];

const bizTypes = [
  "PE / Family Office",
  "M&A Advisory",
  "RIA / Wealth Management",
  "Business Brokerage",
  "FinTech / AI Platform",
  "Other",
];

const outboundStatus = [
  "Starting from scratch",
  "Have some tools, not working",
  "Running campaigns, need better results",
  "Active campaigns, want to add intelligence layer",
];

const steps = [
  "What brings you here?",
  "Your business",
  "Your goals",
  "Contact info",
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [need, setNeed] = useState("");
  const [bizType, setBizType] = useState("");
  const [status, setStatus] = useState("");
  const [goals, setGoals] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [loading, setLoading] = useState(false);

  const canContinue = () => {
    if (step === 1) return !!need;
    if (step === 2) return !!bizType && !!status;
    if (step === 3) return goals.length >= 40;
    if (step === 4) return !!name && !!email && !!company;
    return false;
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  if (submitted) {
    return (
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", padding: "60px 0" }}>
        <div style={{ fontSize: 48, marginBottom: 24 }}>✓</div>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 32, fontWeight: 700, color: "#4ade80", marginBottom: 16, letterSpacing: "-0.02em" }}>
          We&apos;ve got it. Expect to hear from us within 24 hours.
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 40 }}>
          Here&apos;s what happens next:
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 0, position: "relative", marginBottom: 48 }}>
          {["Review", "Strategy Call", "Kickoff"].map((stage, i) => (
            <div key={stage} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ textAlign: "center", padding: "0 20px" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", background: "var(--accent-teal)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 14, margin: "0 auto 8px",
                }}>
                  {i + 1}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>{stage}</div>
              </div>
              {i < 2 && (
                <div style={{ width: 32, height: 1, background: "var(--border-strong)", flexShrink: 0, marginBottom: 20 }} />
              )}
            </div>
          ))}
        </div>
        <Link href="/" style={{
          background: "var(--accent-coral)", color: "var(--text)", padding: "14px 28px",
          borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 600,
        }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 640, margin: "0 auto" }}>
      {/* Stepper — hidden on step 1 */}
      {step > 1 && (
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 12 }}>
            {steps.map((label, i) => {
              const num = i + 1;
              const done = step > num;
              const active = step === num;
              return (
                <div key={label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: 13,
                      background: done ? "var(--accent-teal)" : active ? "var(--accent-coral)" : "var(--bg-card)",
                      border: `2px solid ${done ? "var(--accent-teal)" : active ? "var(--accent-coral)" : "var(--border-strong)"}`,
                      color: done || active ? "#fff" : "var(--text-muted)",
                    }}>
                      {done ? "✓" : num}
                    </div>
                    <div style={{ fontSize: 10, color: active ? "var(--text)" : "var(--text-muted)", marginTop: 4, textAlign: "center", maxWidth: 72, lineHeight: 1.3 }}>
                      {label}
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      flex: 1, height: 2, background: done ? "var(--accent-teal)" : "var(--border)",
                      margin: "0 4px", marginBottom: 18, transition: "background 0.3s",
                    }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
            What brings you here?
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 32 }}>Select the option that fits best.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 36 }}>
            {needOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setNeed(opt)}
                style={{
                  background: need === opt ? "rgba(224, 93, 59, 0.12)" : "var(--bg-card)",
                  border: `2px solid ${need === opt ? "var(--accent-coral)" : "var(--border)"}`,
                  borderRadius: 10, padding: "18px 20px", cursor: "pointer",
                  textAlign: "left", fontSize: 15, color: need === opt ? "var(--text)" : "var(--text-muted)",
                  fontWeight: need === opt ? 600 : 400, transition: "all 0.15s",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
          <button
            disabled={!canContinue()}
            onClick={() => setStep(2)}
            style={{
              background: canContinue() ? "var(--accent-coral)" : "var(--bg-card)",
              color: canContinue() ? "var(--text)" : "var(--text-muted)",
              border: `2px solid ${canContinue() ? "var(--accent-coral)" : "var(--border)"}`,
              borderRadius: 8, padding: "14px 32px", fontSize: 15, fontWeight: 600,
              cursor: canContinue() ? "pointer" : "not-allowed", transition: "all 0.2s",
            }}
          >
            Continue →
          </button>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
            Tell us about your business
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 32 }}>Two quick questions.</p>

          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: "var(--text)" }}>What type of firm is this for?</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {bizTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setBizType(t)}
                  style={{
                    background: bizType === t ? "rgba(44, 95, 138, 0.15)" : "var(--bg-card)",
                    border: `2px solid ${bizType === t ? "var(--accent-blue)" : "var(--border)"}`,
                    borderRadius: 8, padding: "10px 18px", cursor: "pointer",
                    fontSize: 14, color: bizType === t ? "var(--text)" : "var(--text-muted)",
                    fontWeight: bizType === t ? 600 : 400, transition: "all 0.15s",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 36 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: "var(--text)" }}>Where is your outbound today?</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {outboundStatus.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  style={{
                    background: status === s ? "rgba(44, 95, 138, 0.15)" : "var(--bg-card)",
                    border: `2px solid ${status === s ? "var(--accent-blue)" : "var(--border)"}`,
                    borderRadius: 8, padding: "14px 18px", cursor: "pointer",
                    textAlign: "left", fontSize: 14, color: status === s ? "var(--text)" : "var(--text-muted)",
                    fontWeight: status === s ? 600 : 400, transition: "all 0.15s",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setStep(1)} style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 24px", fontSize: 14, color: "var(--text-muted)", cursor: "pointer" }}>
              ← Back
            </button>
            <button
              disabled={!canContinue()}
              onClick={() => setStep(3)}
              style={{
                background: canContinue() ? "var(--accent-coral)" : "var(--bg-card)",
                color: canContinue() ? "var(--text)" : "var(--text-muted)",
                border: `2px solid ${canContinue() ? "var(--accent-coral)" : "var(--border)"}`,
                borderRadius: 8, padding: "14px 32px", fontSize: 15, fontWeight: 600,
                cursor: canContinue() ? "pointer" : "not-allowed", transition: "all 0.2s",
              }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
            What are you trying to accomplish?
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 32 }}>The more specific, the better we can scope it on the call.</p>

          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>
              Your goals <span style={{ color: "var(--accent-coral)" }}>*</span>
            </label>
            <textarea
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="What does success look like in 90 days? Who are you trying to reach and why now?"
              rows={5}
              style={{
                width: "100%", background: "var(--bg-card)", border: "1px solid var(--border-strong)",
                borderRadius: 8, padding: "16px", fontSize: 15, color: "var(--text)",
                resize: "vertical", outline: "none", fontFamily: "var(--font-inter)", lineHeight: 1.6,
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--accent-coral)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border-strong)")}
            />
            <div style={{ fontSize: 12, color: goals.length >= 40 ? "var(--accent-teal)" : "var(--text-muted)", marginTop: 6 }}>
              {goals.length < 40 ? `${40 - goals.length} more characters to continue` : "✓ Good to go"}
            </div>
          </div>

          <div style={{ marginBottom: 36 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>
              Anything else? <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>Optional</span>
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Budget range, timing, current tools, deal sizes, target market — whatever context helps."
              rows={3}
              style={{
                width: "100%", background: "var(--bg-card)", border: "1px solid var(--border-strong)",
                borderRadius: 8, padding: "16px", fontSize: 15, color: "var(--text)",
                resize: "vertical", outline: "none", fontFamily: "var(--font-inter)", lineHeight: 1.6,
              }}
            />
          </div>

          <div style={{ background: "rgba(44, 95, 138, 0.08)", border: "1px solid rgba(44, 95, 138, 0.2)", borderRadius: 8, padding: "16px 20px", marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent-blue)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Pro tip</div>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
              Specific goals get specific plans. "15 meetings a month with LMM M&A targets in manufacturing" is more useful than "more pipeline."
            </p>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setStep(2)} style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 24px", fontSize: 14, color: "var(--text-muted)", cursor: "pointer" }}>
              ← Back
            </button>
            <button
              disabled={!canContinue()}
              onClick={() => setStep(4)}
              style={{
                background: canContinue() ? "var(--accent-coral)" : "var(--bg-card)",
                color: canContinue() ? "var(--text)" : "var(--text-muted)",
                border: `2px solid ${canContinue() ? "var(--accent-coral)" : "var(--border)"}`,
                borderRadius: 8, padding: "14px 32px", fontSize: 15, fontWeight: 600,
                cursor: canContinue() ? "pointer" : "not-allowed", transition: "all 0.2s",
              }}
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <div>
          <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
            Last step — contact info
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 32 }}>We'll reach out within 24 hours to schedule the call.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 36 }}>
            {[
              { label: "Name", placeholder: "Your full name", value: name, setter: setName, required: true },
              { label: "Email", placeholder: "Your work email", value: email, setter: setEmail, required: true, type: "email" },
              { label: "Company", placeholder: "Firm name", value: company, setter: setCompany, required: true },
              { label: "LinkedIn URL", placeholder: "linkedin.com/in/yourprofile", value: linkedin, setter: setLinkedin, required: false },
            ].map((field) => (
              <div key={field.label}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, marginBottom: 8, color: "var(--text)" }}>
                  {field.label} {field.required && <span style={{ color: "var(--accent-coral)" }}>*</span>}
                </label>
                <input
                  type={("type" in field && field.type) ? field.type as string : "text"}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  style={{
                    width: "100%", background: "var(--bg-card)", border: "1px solid var(--border-strong)",
                    borderRadius: 8, padding: "14px 16px", fontSize: 15, color: "var(--text)",
                    outline: "none", fontFamily: "var(--font-inter)", transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent-coral)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border-strong)")}
                />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <button onClick={() => setStep(3)} style={{ background: "transparent", border: "1px solid var(--border)", borderRadius: 8, padding: "14px 24px", fontSize: 14, color: "var(--text-muted)", cursor: "pointer" }}>
              ← Back
            </button>
            <button
              disabled={!canContinue() || loading}
              onClick={handleSubmit}
              style={{
                background: canContinue() && !loading ? "var(--accent-coral)" : "var(--bg-card)",
                color: canContinue() && !loading ? "var(--text)" : "var(--text-muted)",
                border: `2px solid ${canContinue() && !loading ? "var(--accent-coral)" : "var(--border)"}`,
                borderRadius: 8, padding: "16px 40px", fontSize: 16, fontWeight: 600,
                cursor: canContinue() && !loading ? "pointer" : "not-allowed", transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              {loading ? (
                <>
                  <span style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                  Sending...
                </>
              ) : "Start a Conversation"}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
