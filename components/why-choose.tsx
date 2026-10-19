import { SectionTitle } from "./section-title";

const reasons = [
  ["Certified Engineers", "Trained & experienced technicians for reliable installation."],
  ["Quick Installation", "Trained & experienced technicians for reliable installation."],
  ["Best After Sales Services", "Anyone can install products, but after-sales service is the most critical part of a security system."],
  ["Trusted Since 2013", "Serving customers with reliability and commitment."],
  ["High-Quality Equipment", "We use genuine and tested security products."],
];

export function WhyChoose() {
  return <section className="section why-section"><div className="shell"><SectionTitle eyebrow="WHY CHOOSE US" title="Why Choose" accent="Sky Secure" /><div className="reason-grid">{reasons.map(([title, text]) => <article key={title}><div className="reason-icon">◎</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}
