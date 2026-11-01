import Link from "next/link";
import { solutions } from "@/lib/site-data";
import { BentoGrid, SpotlightCard } from "./aceternity-foundation";
import { SectionTitle } from "./section-title";
import { CategoryImage } from "./category-image";

export function Solutions() {
  return (
    <section className="section patterned-section" id="solutions">
      <div className="shell">
        <SectionTitle
          eyebrow="SERVICES"
          title="Comprehensive Security And"
          accent="Surveillance Solutions"
        />
        <BentoGrid className="solutions-grid">
          {solutions.map((solution) => (
            <SpotlightCard className="solution-card" key={solution.slug}>
              <div className="solution-visual">
                <CategoryImage category={solution.slug} sizes="(max-width: 767px) 100vw, 33vw" />
                <small>
                  SECURE {solution.title.replace(" Solutions", "").toUpperCase()}
                </small>
              </div>
              <h3>{solution.title}</h3>
              <ul>
                {solution.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <Link href={`/${solution.slug}`}>Read More →</Link>
            </SpotlightCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
