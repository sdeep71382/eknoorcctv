"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { externalLinks, testimonials } from "@/lib/site-data";
import { SectionTitle } from "./section-title";

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const visible = [0, 1, 2].map((step) => testimonials[(offset + step) % testimonials.length]);
  const move = (direction: number) => setOffset((current: number) => (current + direction + testimonials.length) % testimonials.length);

  return (
    <section className="section patterned-section testimonials-section">
      <div className="shell">
        <SectionTitle eyebrow="TESTIMONIALS" title="Trusted Feedback" accent="From Our Clients" />
        <div className="testimonial-wrap">
          <motion.button
            onClick={() => move(-1)}
            aria-label="Previous testimonial"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
          >
            ‹
          </motion.button>
          <motion.div
            className="testimonial-grid"
            animate={prefersReducedMotion ? undefined : { x: -offset * 33.33 }}
            transition={prefersReducedMotion ? undefined : { type: "spring", stiffness: 300, damping: 30 }}
          >
            {visible.map((testimonial, index) => (
              <motion.article
                key={`${offset}-${testimonial.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="stars" aria-label="Five-star review">
                  {"★".repeat(5)}
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.1 }}
                >
                  {testimonial.text}
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
                >
                  {testimonial.name}
                </motion.h3>
                <span className="quote" aria-hidden="true">
                  ”
                </span>
              </motion.article>
            ))}
          </motion.div>
          <motion.button
            onClick={() => move(1)}
            aria-label="Next testimonial"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
          >
            ›
          </motion.button>
        </div>
        {externalLinks.googleReviews && (
          <a className="button review-button" href={externalLinks.googleReviews} target="_blank" rel="noopener noreferrer">
            Visit Our Google Reviews →
          </a>
        )}
      </div>
    </section>
  );
}
