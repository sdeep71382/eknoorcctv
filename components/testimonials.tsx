"use client";

import { useState } from "react";
import { testimonials } from "@/lib/site-data";
import { SectionTitle } from "./section-title";

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const visible = [0, 1, 2].map((step) => testimonials[(offset + step) % testimonials.length]);
  const move = (direction: number) => setOffset((current) => (current + direction + testimonials.length) % testimonials.length);

  return <section className="section patterned-section testimonials-section"><div className="shell"><SectionTitle eyebrow="TESTIMONIALS" title="Trusted Feedback" accent="From Our Clients" /><div className="testimonial-wrap"><button onClick={() => move(-1)} aria-label="Previous testimonial">‹</button><div className="testimonial-grid">{visible.map((testimonial) => <article key={`${offset}-${testimonial.name}`}><div className="stars">★★★★★</div><p>{testimonial.text}</p><h3>{testimonial.name}</h3><span className="quote">”</span></article>)}</div><button onClick={() => move(1)} aria-label="Next testimonial">›</button></div><a className="button review-button" href="https://share.google/" target="_blank" rel="noopener noreferrer">Visit Our Google Reviews →</a></div></section>;
}
