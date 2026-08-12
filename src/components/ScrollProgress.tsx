"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import type { MutableRefObject, ReactNode } from "react";

const ScrollContext = createContext<MutableRefObject<number> | null>(null);

/**
 * Publishes document scroll progress (0 -> 1) through a ref.
 * A ref is used deliberately: the WebGL scene reads it every frame without
 * triggering a React re-render of the document content.
 */
export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const progress = useRef(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <ScrollContext.Provider value={progress}>{children}</ScrollContext.Provider>;
}

export function useScrollProgress(): MutableRefObject<number> {
  const ctx = useContext(ScrollContext);
  const fallback = useRef(0);
  return ctx ?? fallback;
}
