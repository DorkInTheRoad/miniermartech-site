"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 100, suffix: "+", label: "Meetings Booked" },
  { value: 12.6, suffix: "%", label: "Acceptance Rate", decimal: true },
  { value: 17, suffix: "%+", label: "Avg Reply Rate" },
  { value: 12000, suffix: "+", label: "Contacts Audited", format: true },
];

function useCounter(target: number, duration = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function MetricItem({ value, suffix, label, decimal, format, start }: {
  value: number; suffix: string; label: string; decimal?: boolean; format?: boolean; start: boolean;
}) {
  const count = useCounter(value, 1800, start);
  const display = format
    ? Math.floor(count).toLocaleString()
    : decimal
    ? count.toFixed(1)
    : Math.floor(count);
  return (
    <div style={{ textAlign: "center", padding: "0 16px" }}>
      <div style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700, color: "var(--text)", lineHeight: 1, letterSpacing: "-0.03em" }}>
        {display}{suffix}
      </div>
      <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}

export default function CounterBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !fired) setFired(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fired]);

  return (
    <section ref={ref} style={{ background: "#0d1520", padding: "80px 24px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 40 }}>
          {metrics.map((m) => (
            <MetricItem key={m.label} {...m} start={fired} />
          ))}
        </div>
      </div>
    </section>
  );
}
