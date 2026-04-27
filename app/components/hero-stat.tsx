"use client";

import { useEffect, useRef, useState } from "react";

type HeroStatProps = {
  label: string;
  suffix?: string;
  value: number;
};

export function HeroStat({ label, suffix = "", value }: HeroStatProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const prefersReducedMotion = useRef(false);
  const statRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = statRef.current;

    if (!element) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    let animationFrame = 0;

    if (prefersReducedMotion.current) {
      animationFrame = window.requestAnimationFrame(() => {
        setCount(value);
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [hasStarted, value]);

  return (
    <div className="hero-stat" ref={statRef}>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}
