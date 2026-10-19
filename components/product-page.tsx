import Link from "next/link";
import { products } from "@/lib/site-data";
import { PageHero } from "./page-hero";

export function ProductPage({ slug }: { slug: string }) {
  const product = products.find((item) => item.href === `/${slug}`);
  if (!product) return null;
  const related = products.filter((item) => item.category === product.category && item.href !== product.href).slice(0, 3);
  return <><PageHero title={product.label} /><section className="section detail-section"><div className="shell detail-grid"><div className="detail-visual product-detail"><span>{product.icon}</span><strong>{product.category}</strong></div><article><p className="eyebrow"><span>▱</span> {product.category.toUpperCase()}</p><h2>{product.label}</h2><p>{product.label} is listed in the public Sky Secure product range under {product.category}. Contact the team for the models, specifications, compatibility, and installation options currently offered.</p><h3>Publicly offered service path</h3><ul className="feature-list"><li>Requirement discussion</li><li>System design and product selection</li><li>Installation support</li><li>Ongoing maintenance and after-sales service</li></ul><Link className="button" href="/contact-us">Contact Us →</Link></article></div>{related.length > 0 && <div className="related-products"><h2>Related {product.category} products</h2><div>{related.map((item) => <Link key={item.href} href={item.href}><span>{item.icon}</span><strong>{item.label}</strong></Link>)}</div></div>}</section></>;
}
