import Link from "next/link";
import { solutions } from "@/lib/site-data";
import { PageHero } from "./page-hero";

export function SolutionPage({ slug }: { slug: string }) {
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return null;
  return <><PageHero title={solution.title} /><section className="section detail-section"><div className="shell detail-grid"><div className="detail-visual"><span>{solution.icon}</span><strong>{solution.title}</strong></div><article><p className="eyebrow"><span>▱</span> OUR SOLUTIONS</p><h2>Integrated protection for <span>{solution.title.replace(" Solutions", "")}</span></h2><p>The public Sky Secure website presents this solution as a combination of security, communication, networking, and automation services selected for the space.</p><h3>Services listed on the public site</h3><ul className="feature-list">{solution.services.map((service) => <li key={service}>{service}</li>)}</ul><Link className="button" href="/contact-us">Discuss Your Requirement →</Link></article></div></section></>;
}
