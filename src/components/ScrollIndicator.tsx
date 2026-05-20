"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ScrollIndicator() {
  const pathname = usePathname();
  const [showIndicator, setShowIndicator] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const hasContentBelow = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollBottom = window.scrollY + winHeight;

      return docHeight - scrollBottom > 8;
    };

    const updateIndicator = (scrolling: boolean) => {
      setShowIndicator(!scrolling && hasContentBelow());
    };

    const handleScroll = () => {
      isScrollingRef.current = true;
      updateIndicator(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        updateIndicator(false);
      }, 150);
    };

    const handleResize = () => updateIndicator(isScrollingRef.current);
    const resizeObserver = new ResizeObserver(() =>
      updateIndicator(isScrollingRef.current),
    );

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    resizeObserver.observe(document.body);

    // Check initial state
    updateIndicator(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [pathname]);

  if (!showIndicator) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2 animate-bounce rounded-full bg-black/70 p-3 shadow-lg backdrop-blur"
    >
      <svg
        className="w-6 h-6 text-[#D4AF37]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}
