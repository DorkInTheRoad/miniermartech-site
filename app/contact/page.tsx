import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start a Conversation — Minier MarTech",
  description: "Tell us about your outbound goals. We'll respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <section style={{ padding: "80px 24px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1 }}>
            Start a Conversation
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.7 }}>
            We build your outbound pipeline and expand from there. Tell us a bit about where you are and what you're trying to accomplish.
          </p>
        </div>
      </section>

      <section style={{ padding: "20px 24px 100px" }}>
        <ContactForm />
      </section>

      <section style={{ padding: "40px 24px 60px", textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 8 }}>
          Prefer to reach out directly?
        </p>
        <a href="mailto:ken@miniermartech.com" style={{ fontSize: 16, color: "var(--text)", fontWeight: 500, textDecoration: "none" }}>
          ken@miniermartech.com
        </a>
      </section>
    </>
  );
}
