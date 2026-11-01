import Link from "next/link";
import { products } from "@/lib/site-data";
import { PageHero } from "./page-hero";
import { productImageCategory } from "@/lib/category-image";
import { CategoryImage } from "./category-image";

const categoryHighlights: Record<string, string[]> = {
  CCTV: ["Full HD and 4K options", "Day/night and low-light recording", "Remote viewing on mobile", "Local and cloud storage options"],
  "Access Control": ["Fingerprint, card and PIN entry", "Door and gate integration", "Attendance and reporting", "Fail-safe locking hardware"],
  Networking: ["Structured cabling", "Fiber and copper backbones", "Managed switches and routers", "Wi-Fi coverage planning"],
  Communication: ["Multi-point audio coverage", "Clear, low-latency audio", "Central control and zoning", "Scalable to any building size"],
  Security: ["Early-warning detection", "Siren and alert integration", "Tamper-resistant hardware", "Monitoring-ready outputs"],
  Automation: ["Automatic open and close", "Remote and sensor control", "Safety reversing sensors", "Heavy-duty motors"],
  "Road Safety Products": ["High-visibility materials", "Durable, weather-resistant builds", "Traffic calming and control", "Site-specific layouts"],
  Screens: ["Large-format displays", "Indoor and outdoor options", "Content management ready", "Professional mounting"],
  GPS: ["Live vehicle tracking", "Route history and geofencing", "Driver behaviour reports", "Fleet dashboards"],
};

export function ProductPage({ slug }: { slug: string }) {
  const product = products.find((item) => item.href === `/${slug}`);
  if (!product) return null;
  const related = products.filter((item) => item.category === product.category && item.href !== product.href).slice(0, 3);
  const highlights = categoryHighlights[product.category] ?? ["Genuine products", "Professional installation", "Warranty support", "After-sales service"];
  const imageCategory = productImageCategory(product.href, product.category);
  return (
    <>
      <PageHero title={product.label} parent="Our Products" parentHref="/#products" />
      <section className="section detail-section">
        <div className="shell detail-grid">
          <div className="detail-visual product-detail"><CategoryImage category={imageCategory} sizes="(max-width: 767px) 100vw, 45vw" preload /><strong>{product.category}</strong></div>
          <article>
            <p className="eyebrow"><span>▱</span> {product.category.toUpperCase()}</p>
            <h2>{product.label}</h2>
            <p>{product.label} is part of the Eknoor CCTV range under {product.category}. Talk to our team for the models, specifications, compatibility and installation options that fit your site.</p>
            <h3>What you get</h3>
            <ul className="feature-list">{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="detail-actions">
              <Link className="button" href="/contact-us">Get a Free Quote →</Link>
              <Link className="button button-ghost" href="/#products">Browse All Products</Link>
            </div>
          </article>
        </div>
        {related.length > 0 && (
          <div className="shell related-products">
            <h2>Related {product.category} products</h2>
            <div>
              {related.map((item) => (
                <Link key={item.href} href={item.href}><span>{item.icon}</span><strong>{item.label}</strong></Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
