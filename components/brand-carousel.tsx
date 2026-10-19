import { brands } from "@/lib/site-data";
import { SectionTitle } from "./section-title";

export function BrandCarousel() {
  return <section className="section brands-section"><div className="shell"><SectionTitle eyebrow="BRANDS" title="Brands We Are" accent="Dealing With" /><div className="brand-track" role="region" aria-label="Brands we deal with" tabIndex={0} style={{overflowX: 'auto', WebkitOverflowScrolling: 'touch'}}>{brands.map((brand) => <div className="logo-tile" key={brand}>{brand}</div>)}</div></div></section>;
}
