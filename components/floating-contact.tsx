"use client";

import { useEffect, useState } from "react";

export function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="floating-stack" role="group" aria-label="Page controls">
      <button
        className={showTop ? "floating-btn top show" : "floating-btn top"}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <span aria-hidden="true">↑</span>
        <span className="floating-tip" aria-hidden="true">Top</span>
      </button>
    </div>
  );
}
