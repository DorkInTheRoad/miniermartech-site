"use client";

import { useEffect, useRef, useState } from "react";

export default function CounterInline({ value, suffix, format, small }: {
  value: number; suffix: string; format?: boolean; small?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !fired) setFired(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [fired]);

  useEffect(() => {
    if (!fired) return;
    let startTime: number | null = null;
    const duration = 1600;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(eased * value);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [fired, value]);

  const display = format ? Math.floor(count).toLocaleString() : Math.floor(count);

  return (
    <div ref={ref} style={{
      fontFamily: "var(--font-fraunces)",
      fontSize: small ? "clamp(22px, 2.5vw, 28px)" : "clamp(32px, 3vw, 42px)",
      fontWeight: 700,
      color: "var(--text)",
      letterSpacing: "-0.02em",
      lineHeight: 1,
    }}>
      {display}{suffix}
    </div>
  );
}
