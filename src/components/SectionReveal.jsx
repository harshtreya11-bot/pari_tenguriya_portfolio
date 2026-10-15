import React, { useEffect, useRef, useState } from "react";

// Global listener set to avoid layout thrashing and maintain 60-120fps
const listeners = new Set();
let isTicking = false;

function onScrollOrResize() {
  if (!isTicking) {
    isTicking = true;
    window.requestAnimationFrame(() => {
      listeners.forEach((cb) => {
        try {
          cb();
        } catch {
          // ignore error
        }
      });
      isTicking = false;
    });
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize, { passive: true });
  window.addEventListener("orientationchange", onScrollOrResize, {
    passive: true,
  });
}

/**
 * SectionReveal — 3D Depth Stacking Scroll Animation
 * - Upcoming section slides up into the foreground in crisp focus
 * - Active section sits front and center
 * - Previous section recedes back into 3D depth with gentle scaling & blur
 */
export default function SectionReveal({
  children,
  delay = "0ms",
  className = "",
  isHero = false,
}) {
  const ref = useRef(null);
  const [state, setState] = useState(isHero ? "active" : "upcoming");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkPosition = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const scrollY = window.scrollY || window.pageYOffset || 0;

      // Hero edge-case: If near the very top of the page, Hero is always active
      if (isHero && scrollY < 80) {
        setState("active");
        return;
      }

      // Check if user is scrolled to the absolute bottom of the document
      const docHeight = document.documentElement.scrollHeight;
      const isAtBottom = window.innerHeight + scrollY >= docHeight - 40;

      // Receding threshold:
      // When the bottom of the section moves above the top 28% of the viewport,
      // it has been scrolled past and recedes into the background.
      const recedingThreshold = vh * 0.28;

      // Active threshold:
      // When the top of the section enters into view (within 86% of viewport height),
      // it slides up into the foreground.
      const activeThreshold = vh * 0.86;

      if (rect.bottom < recedingThreshold && !isAtBottom) {
        setState("receding");
      } else if (rect.top <= activeThreshold) {
        setState("active");
      } else {
        setState(isHero ? "active" : "upcoming");
      }
    };

    // Initial check
    checkPosition();

    // Check again after fonts/images layout render
    const t1 = setTimeout(checkPosition, 100);
    const t2 = setTimeout(checkPosition, 400);

    listeners.add(checkPosition);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      listeners.delete(checkPosition);
    };
  }, [isHero]);

  return (
    <div
      ref={ref}
      className={`sr-wrapper sr-${state} ${state !== "upcoming" ? "sr-visible" : ""} ${className}`}
      style={{ "--sr-delay": delay }}
    >
      {children}
    </div>
  );
}
