"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { aboutParagraphs, contact } from "@/lib/site-data";
import { ContactDetail } from "./contact-detail";
import { CategoryImage } from "./category-image";

export function About() {
  return (
    <section className="section about-section">
      <div className="shell about-grid">
        <div className="about-media">
          <CategoryImage category="about-us" sizes="(max-width: 900px) 100vw, 44vw" />
        </div>
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow"><span>▱</span> ABOUT US</p>
          <h2>About <span>Eknoor CCTV</span></h2>
          {aboutParagraphs.map((paragraph) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.div
            className="about-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link className="button" href="/about-us">
              Read More →
            </Link>
            <ContactDetail className="call-card" kind="phone" value={contact.phone}>
              <span>☎</span>
              <small>Call Us<strong>{contact.phone}</strong></small>
            </ContactDetail>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
