import Link from "next/link";
import { solutions } from "@/lib/site-data";
import { PageHero } from "./page-hero";
import { CategoryImage } from "./category-image";

export function SolutionPage({ slug }: { slug: string }) {
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return null;
  const others = solutions.filter((item) => item.slug !== solution.slug).slice(0, 3);
  return (
    <>
      <PageHero title={solution.title} parent="Our Solutions" parentHref="/#solutions" />
      <section className="section detail-section">
        <div className="shell detail-grid">
          <div className="detail-visual"><CategoryImage category={solution.slug} sizes="(max-width: 767px) 100vw, 45vw" preload /><strong>{solution.title}</strong></div>
          <article>
            <p className="eyebrow"><span>▱</span> OUR SOLUTIONS</p>
            <h2>Integrated protection for <span>{solution.title.replace(" Solutions", "")}</span></h2>
            <p>Eknoor CCTV combines the right mix of security, communication, networking and automation for this space, from the first survey to installation and ongoing support.</p>
            <h3>What we cover</h3>
            <ul className="feature-list">{solution.services.map((service) => <li key={service}>{service}</li>)}</ul>
            <div className="detail-actions">
              <Link className="button" href="/contact-us">Discuss Your Requirement →</Link>
              <Link className="button button-ghost" href="/#solutions">All Solutions</Link>
            </div>
          </article>
        </div>
        {others.length > 0 && (
          <div className="shell related-products">
            <h2>Other solutions</h2>
            <div>
              {others.map((item) => (
                <Link key={item.slug} href={`/${item.slug}`}><span>{item.icon}</span><strong>{item.title}</strong></Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
