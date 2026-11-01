"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { onTabListKeyDown } from "@/lib/tab-keys";
import { clientGroups } from "@/lib/site-data";
import { clientLogoImages } from "@/lib/images";
import { SectionTitle } from "./section-title";

const CLIENT_ALT: Record<string, string> = {
  DULEVO: "Dulevo",
  "BLUE STAR": "Blue Star",
  "Filtration System": "Filtration System",
  "Lion Services": "Lion Services",
  StockHolding: "StockHolding",
  "Cosmic Healers": "Cosmic Healers",
  Wipro: "Wipro",
  "The Indian Express": "Indian Express",
  "Peninsula Data": "Peninsula Data",
  "Maven Wave": "Maven Wave",
  Metallite: "Metallite",
  "Secure Industries": "Secure Industries",
  "Metro Town": "Metro Town",
  Piccadily: "Piccadily",
  "Urban Estate": "Urban Estate",
  "Green Enclave": "Green Enclave",
  "City Homes": "City Homes",
  "Sunrise Society": "Sunrise Society",
  Immunetic: "Immunetic",
  HealthCorp: "HealthCorp",
  Medline: "Medline",
  "Bio Labs": "Bio Labs",
  "Care Plus": "Care Plus",
  "Pharma One": "Pharma One",
  SRM: "SRM",
  "ITBP Academy": "ITBP Academy",
  "City College": "City College",
  "Scholars Hub": "Scholars Hub",
  "Public School": "Public School",
  "Learning Tree": "Learning Tree",
  Flipkart: "Flipkart",
  "Metro Mall": "Metro Mall",
  "Business Park": "Business Park",
  "Market Square": "Market Square",
  "Central Plaza": "Central Plaza",
  "Retail Hub": "Retail Hub",
  "Grand Stay": "Grand Stay",
  "City Hotel": "City Hotel",
  "Royal Inn": "Royal Inn",
  "Park Suites": "Park Suites",
  "Hospitality Group": "Hospitality Group",
  "Brother Gym": "Brother Gym",
  ITBP: "ITBP",
  Maven: "Maven",
};

export function ClientLogos() {
  const groups = Object.keys(clientGroups);
  const [activeGroup, setActiveGroup] = useState(groups[0]);
  const prefersReducedMotion = useReducedMotion();
  const tabId = (group: string) => `client-tab-${group.replaceAll(" ", "-")}`;

  return (
    <section className="section clients-section">
      <div className="shell">
        <SectionTitle eyebrow="CLIENTS" title="Our" accent="Major Clients" />
        <div className="tab-list client-tabs" role="tablist" aria-label="Client categories" onKeyDown={onTabListKeyDown} tabIndex={0}>
          {groups.map((group) => (
            <motion.button
              id={tabId(group)}
              role="tab"
              aria-selected={activeGroup === group}
              aria-controls="client-panel"
              tabIndex={activeGroup === group ? 0 : -1}
              key={group}
              className={activeGroup === group ? "active" : ""}
              onClick={() => setActiveGroup(group)}
              whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
            >
              {group}
            </motion.button>
          ))}
        </div>
        <motion.div
          id="client-panel"
          className="client-grid"
          role="tabpanel"
          aria-labelledby={tabId(activeGroup)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {clientGroups[activeGroup].map((client, index) => {
            const imageIndex = index % clientLogoImages.length;
            return (
              <motion.div
                key={client}
                className="logo-tile"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={clientLogoImages[imageIndex]}
                  alt={CLIENT_ALT[client] ?? client}
                  width={120}
                  height={60}
                  className="client-logo"
                  loading="lazy"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
