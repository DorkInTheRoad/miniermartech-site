import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Data Ownership Matters More Than Volume — Minier MarTech",
  description: "Most teams maximize campaign volume and lose the data. Smart operators own their contact data and behavioral signals, turning every campaign into proprietary intelligence. Here's why that's worth 10x the short-term results.",
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Why Data Ownership Matters More Than Volume",
      "description": "Why retaining behavioral signals from every campaign creates a sustainable competitive advantage that other tools cannot replicate.",
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
          "name": "What is behavioral data in outbound campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Behavioral data is every signal captured during an outreach campaign: who replied and who didn't, which email subject line had the highest open rate, which sequence touch drove the most responses, what objections came back, timing patterns, sentiment analysis, and deal-readiness signals. Most teams capture this data and discard it after the campaign ends. Smart operators retain and structure it.",
          },
        },
        {
          "@type": "Question",
          "name": "Why do most teams lose their campaign data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because they outsource outbound to platforms (Apollo, RocketReach, bulk email vendors) that own the data, not them. The campaign runs, results come out, and the data stays locked inside the platform. Even if they export it, there's no structure, no historical baseline, no way to improve subsequent campaigns. The platform wins. The operator loses.",
          },
        },
        {
          "@type": "Question",
          "name": "How does data ownership create a sustainable moat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Data compounds. Campaign 1 generates baseline signals. Campaign 2 is informed by Campaign 1's reply patterns, objection themes, and timing data — so reply rates improve. Campaign 3 improves further because you've now seen 2 batches of behavioral patterns. By month 12, you have 12 batches worth of proprietary intelligence that no external tool, no competitor, no consultant can replicate. That's the moat.",
          },
        },
        {
          "@type": "Question",
          "name": "What's the financial impact of data ownership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Year 1 (volume-driven): Send 5,000 emails, get 3–5% reply rate, 12 qualified meetings. Cost-per-meeting: ~$1,000. Year 2 (data-driven): Same 5,000 emails but informed by Year 1 signals. 15–18% reply rate, 50+ qualified meetings. Cost-per-meeting: ~$200. The difference is your data. The platform approach compounds volume; the ownership approach compounds efficiency.",
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
            <span style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Long-term Advantage</span>
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
              Why Data Ownership Matters More Than Volume
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 600 }}>
              Most deal teams chase volume: bigger lists, more emails, higher send rates. Smart operators chase data. Here's why owning your behavioral signals is worth 10x the short-term optimization.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--bg)", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24 }}>The Volume Trap</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          I can send 10,000 emails to business owners in your ICP. LinkedIn limits apply, deliverability is what it is, but the math is simple: more volume = more responses = more meetings.
        </p>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          Except it doesn't work that way at scale. Volume without structure produces noise. You're paying per-message but not learning from each message. Campaign 10 is just as inefficient as Campaign 1 because the platform you're using doesn't let you own the data.
        </p>

        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24, marginTop: 48 }}>What Data Ownership Actually Means</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          Owning your data means you capture and structure every signal from every campaign:
        </p>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 48 }}>
          <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>→</span>
            <strong>Reply patterns:</strong> Which contacts replied? When? To which subject line? To which sequence touch?
          </li>
          <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>→</span>
            <strong>Objection themes:</strong> "Not interested in selling" vs. "not the right fit" vs. "call me in 6 months" — each signals something different
          </li>
          <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>→</span>
            <strong>Sentiment signals:</strong> Positive, neutral, negative, defer — not just binary reply/no-reply
          </li>
          <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>→</span>
            <strong>Timing calibration:</strong> Did Tuesday work better than Thursday? Morning vs. afternoon? This shifts by ICP and season
          </li>
          <li style={{ marginBottom: 12, paddingLeft: 20, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "var(--accent-teal)", fontWeight: 700 }}>→</span>
            <strong>Enrichment accuracy:</strong> Which data sources were accurate? Which had wrong job titles or out-of-date contact info?
          </li>
        </ul>

        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24, marginTop: 48 }}>The Compounding Effect: 12 Months of Data</h2>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px", marginBottom: 48 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--accent-teal)", marginBottom: 20 }}>Month 1–2: Baseline</h3>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8 }}>
            Send 2,000 emails. Get 80 replies (4% baseline). Land 8 meetings. Extract learnings: which subject lines worked, which verticalsresponded best, which days/times converted.
          </p>
        </div>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px", marginBottom: 48 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--accent-teal)", marginBottom: 20 }}>Month 3–4: Iteration 1</h3>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8 }}>
            Send 2,000 more emails. But now you're targeting cohorts that worked, using subject lines from top performers, sending at optimal times. Result: 100 replies (5%). 10 meetings. Cost-per-meeting drops from $1,000 → $800.
          </p>
        </div>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px", marginBottom: 48 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--accent-teal)", marginBottom: 20 }}>Month 5–6: Iteration 2</h3>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8 }}>
            Now you have 2 campaigns worth of data. You're modeling objection patterns. You understand which personality types respond to which messaging angles. Result: 140 replies (7%). 14 meetings. Cost-per-meeting: $570.
          </p>
        </div>

        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: "32px", marginBottom: 48 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--accent-teal)", marginBottom: 20 }}>Month 12: Optimization</h3>
          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8 }}>
            6 campaigns of behavioral data. Your ICP definition is now precise. Your sequence is tuned to actual response patterns, not theory. Your timing is calibrated. Result: 250+ replies (12.5%). 50 meetings. Cost-per-meeting: $240.
          </p>
        </div>

        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24, marginTop: 48 }}>Why This Is a Moat</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          A competitor who copies your process today will still be 6 months behind because they don't have your historical data. Your 12-month knowledge base can't be replicated. They'd have to run 12 more months of campaigns to get to your level.
        </p>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          This is why platform-based approaches (Apollo, RocketReach, standard email tools) will never give you the same advantage. The platform owns the data. You own the volume. But the operator who owns the data owns the business.
        </p>

        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginBottom: 24, marginTop: 48 }}>The Platform Trap</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          Here's the trap most teams fall into: You sign up for Apollo or Salesforce. You send campaigns through their platform. Results come back. The data lives in their dashboard. When you leave the platform (or they change pricing), your data either stays with them or becomes a messy CSV export you can't act on.
        </p>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
          You spent 12 months generating proprietary intelligence about your ICP, and you don't actually own it.
        </p>

        <h2 style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 700, marginbottom: 24, marginTop: 48 }}>What Smart Operators Do</h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 48 }}>
          Smart operators build their outbound infrastructure like they own it — because they do. They structure contact data. They tag replies by cohort and sentiment. They track which sequence touches drove responses. They model objection patterns. They own every behavioral signal from every campaign.
        </p>

        <div style={{
          background: "var(--bg-secondary)",
          border: "1px dashed var(--accent-gold)",
          borderRadius: 12,
          padding: "32px",
          textAlign: "center",
        }}>
          <h3 style={{ fontFamily: "var(--font-fraunces)", fontSize: 22, fontWeight: 700, marginBottom: 16 }}>The Math Is Stark</h3>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 20 }}>
            <strong>Volume-first approach:</strong> 12 months, 50,000 emails, 2,500 replies, 250 meetings, $1,000/meeting.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.8 }}>
            <strong>Data ownership approach:</strong> 12 months, 24,000 emails, 3,000 replies, 300 meetings, $200/meeting.
          </p>
          <p style={{ fontSize: 16, color: "var(--accent-gold)", lineHeight: 1.8, marginTop: 20, fontWeight: 600 }}>
            Same calendar time. Half the email volume. 20% more meetings. 80% lower cost. Because the data improved every iteration.
          </p>
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 24 }}>
            Ready to build a data-owned outbound infrastructure?
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
