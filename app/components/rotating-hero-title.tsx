"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type RotatingHeroTitleProps = {
  phrases: string[];
};

export function RotatingHeroTitle({ phrases }: RotatingHeroTitleProps) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const completedCycleRef = useRef(false);

  const currentPhrase = useMemo(() => phrases[index] ?? "", [phrases, index]);

  useEffect(() => {
    if (!currentPhrase) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      const frameId = window.requestAnimationFrame(() => {
        setDisplayedText(currentPhrase);
        setShowCaret(false);
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    let timeoutId = 0;
    let frameId = 0;
    let charIndex = 0;
    const isFinalPhrase = completedCycleRef.current && index === 0;

    const typeNext = () => {
      charIndex += 1;
      setDisplayedText(currentPhrase.slice(0, charIndex));

      if (charIndex < currentPhrase.length) {
        timeoutId = window.setTimeout(typeNext, 55);
        return;
      }

      if (isFinalPhrase) {
        setShowCaret(false);
        return;
      }

      timeoutId = window.setTimeout(() => {
        setIndex((current) => {
          if (current === phrases.length - 1) {
            completedCycleRef.current = true;
            return 0;
          }

          return current + 1;
        });
      }, 1500);
    };

    frameId = window.requestAnimationFrame(() => {
      setDisplayedText("");
      setShowCaret(true);
      timeoutId = window.setTimeout(typeNext, 180);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [currentPhrase, index, phrases.length]);

  return (
    <span aria-live="polite" className="rotating-hero-title">
      {displayedText}
      {showCaret ? <span className="typewriter-caret" aria-hidden="true" /> : null}
    </span>
  );
}
