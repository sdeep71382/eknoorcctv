"use client";

import { useState } from "react";
import { onTabListKeyDown } from "@/lib/tab-keys";
import { clientGroups } from "@/lib/site-data";
import { SectionTitle } from "./section-title";

export function ClientLogos() {
  const groups = Object.keys(clientGroups); const [activeGroup, setActiveGroup] = useState(groups[0]); const tabId = (group: string) => `client-tab-${group.replaceAll(" ", "-")}`;
  return <section className="section clients-section"><div className="shell"><SectionTitle eyebrow="CLIENTS" title="Our" accent="Majors Clients" /><div className="tab-list client-tabs" role="tablist" aria-label="Client categories" onKeyDown={onTabListKeyDown}>{groups.map((group) => <button id={tabId(group)} role="tab" aria-selected={activeGroup === group} aria-controls="client-panel" tabIndex={activeGroup === group ? 0 : -1} key={group} className={activeGroup === group ? "active" : ""} onClick={() => setActiveGroup(group)}>{group}</button>)}</div><div id="client-panel" className="client-grid" role="tabpanel" aria-labelledby={tabId(activeGroup)}>{clientGroups[activeGroup].map((client) => <div className="logo-tile" key={client}>{client}</div>)}</div></div></section>;
}
