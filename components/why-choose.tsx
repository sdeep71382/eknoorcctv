"use client";

import { motion, useReducedMotion } from "motion/react";
import { CheckCircle, Headphones, Settings, ShieldCheck, Users } from "lucide-react";
import { SectionTitle } from "./section-title";
import { SpotlightCard } from "./aceternity-foundation";

const reasons = [
  { icon: Users, title: "Site-Led Planning", text: "Recommendations begin with your space, risks, coverage needs and daily workflow." },
  { icon: Settings, title: "Careful Installation", text: "Systems are planned to reduce disruption and keep controls practical to use." },
  { icon: Headphones, title: "After-Sales Support", text: "Help remains available after installation for maintenance and system questions." },
  { icon: ShieldCheck, title: "Integrated Approach", text: "CCTV, access control, networking and automation can work as one considered system." },
  { icon: CheckCircle, title: "Product-Fit Guidance", text: "Options are selected around compatibility, site conditions and your priorities." },
];

export function WhyChoose() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="section why-section">
      <div className="shell">
        <SectionTitle eyebrow="WHY CHOOSE US" title="Why Choose" accent="Eknoor CCTV" />
        <div className="reason-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <SpotlightCard
                key={reason.title}
                className="reason-card"
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="reason-icon"
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Icon size={32} strokeWidth={2} />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                >
                  {reason.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {reason.text}
                </motion.p>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
