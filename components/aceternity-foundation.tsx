"use client";

import type { ReactNode } from "react";
import type { HTMLMotionProps } from "motion/react";
import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

type ClassNameProps = { className?: string };

export function BackgroundGrid({ className = "" }: ClassNameProps) {
  return (
    <span
      className={`aceternity-grid-background ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export function BentoGrid({
  children,
  className = "",
}: { children: ReactNode } & ClassNameProps) {
  return (
    <div className={`aceternity-bento-grid ${className}`.trim()}>
      {children}
    </div>
  );
}

export function SpotlightCard({
  children,
  className = "",
  onPointerMove,
  ...props
}: HTMLMotionProps<"article"> & ClassNameProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      {...props}
      className={`aceternity-spotlight-card ${className}`.trim()}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onPointerMove={(event) => {
        onPointerMove?.(event);
        if (prefersReducedMotion) return;

        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          "--spotlight-x",
          `${event.clientX - bounds.left}px`,
        );
        event.currentTarget.style.setProperty(
          "--spotlight-y",
          `${event.clientY - bounds.top}px`,
        );
      }}
    >
      {children}
    </motion.article>
  );
}

/**
 * Compatibility prototype for Aceternity's Resizable Navbar pattern.
 * Phase 2 will decide whether it should replace the existing navigation shell.
 */
export function ResizableNavbar({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & ClassNameProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const updateCompactState = () => {
      const nextCompact = window.scrollY > 48;
      setIsCompact((current) => current === nextCompact ? current : nextCompact);
    };

    updateCompactState();
    window.addEventListener("scroll", updateCompactState, { passive: true });
    return () => window.removeEventListener("scroll", updateCompactState);
  }, []);

  return (
    <motion.div
      {...props}
      className={`aceternity-resizable-navbar ${className}`.trim()}
      data-compact={isCompact || undefined}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              maxWidth: isCompact ? "68rem" : "78.125rem",
              borderRadius: isCompact ? "1.25rem" : "0.875rem",
            }
      }
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
