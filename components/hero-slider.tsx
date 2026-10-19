"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site-data";

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => { const media = window.matchMedia("(prefers-reduced-motion: reduce)"); const update = () => setReducedMotion(media.matches); update(); media.addEventListener("change", update); return () => media.removeEventListener("change", update); }, []);
  useEffect(() => { if (paused || hovering || reducedMotion) return; const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % heroSlides.length), 6500); return () => window.clearInterval(timer); }, [paused, hovering, reducedMotion]);
  useEffect(() => { if (reducedMotion) setPaused(true); }, [reducedMotion]);
  const move = (direction: number) => setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  const slide = heroSlides[activeSlide];
  return <section className={`hero scene-${slide.scene}`} role="region" aria-roledescription="carousel" aria-label="Eknoor CCTV solutions" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onFocus={() => setHovering(true)}>
    <div className="hero-art" aria-hidden="true"><div className="screen-grid">{Array.from({ length: 9 }, (_, index) => <span key={index} />)}</div><div className="camera-orb">◉</div></div><div className="hero-overlay" /><div className="shell hero-inner"><div className="hero-copy" aria-live="polite"><p className="hero-eyebrow">▱ <span>{slide.eyebrow}</span></p><h1>{slide.line1} <span>{slide.accent}</span> {slide.line2}</h1><p>Eknoor CCTV provides CCTV installation, access control, networking, automation and security solutions for homes, offices, industries, malls and commercial spaces.</p><Link className="button" href="/contact-us">Contact Us →</Link></div></div>
    <button className="slider-arrow previous" onClick={() => move(-1)} aria-label="Previous slide">‹</button><button className="slider-arrow next" onClick={() => move(1)} aria-label="Next slide">›</button><div className="slider-dots" role="group" aria-label="Hero slide controls">{heroSlides.map((item, index) => <button key={item.scene} onClick={() => setActiveSlide(index)} className={index === activeSlide ? "active" : ""} aria-current={index === activeSlide ? "true" : undefined} aria-label={`Show slide ${index + 1}`} />)}<button className="pause-control" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume automatic slides" : "Pause automatic slides"}>{paused ? "▶" : "Ⅱ"}</button></div>
  </section>;
}
