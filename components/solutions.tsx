import Link from "next/link";
import { solutions } from "@/lib/site-data";
import { SectionTitle } from "./section-title";

export function Solutions() {
  return (
    <section className="section patterned-section" id="solutions">
      <div className="shell">
        <SectionTitle eyebrow="SERVICES" title="Comprehensive Security And" accent="Surveillance Solutions" />
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.slug}>
              <div className="solution-visual"><span>{solution.icon}</span><small>SECURE {solution.title.replace(" Solutions", "").toUpperCase()}</small></div>
              <h3>{solution.title}</h3>
              <ul>{solution.services.map((service) => <li key={service}>{service}</li>)}</ul>
              <Link href={`/${solution.slug}`}>Read More →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
