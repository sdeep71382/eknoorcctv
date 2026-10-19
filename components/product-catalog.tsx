"use client";

import Link from "next/link";
import { useState } from "react";
import { onTabListKeyDown } from "@/lib/tab-keys";
import { productCategories, products } from "@/lib/site-data";
import { SectionTitle } from "./section-title";

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("CCTV");
  const shownProducts = activeCategory === "GPS" ? [] : products.filter((product) => product.category === activeCategory);
  const tabId = (category: string) => `product-tab-${category.replaceAll(" ", "-")}`;
  return <section className="section products-section" id="products"><div className="shell"><SectionTitle eyebrow="PRODUCTS" title="Products" accent="We Offer" /><div className="tab-list" role="tablist" aria-label="Product categories" onKeyDown={onTabListKeyDown} tabIndex={0}>{productCategories.map((category) => <button id={tabId(category)} key={category} role="tab" aria-selected={activeCategory === category} aria-controls="product-panel" tabIndex={activeCategory === category ? 0 : -1} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><div id="product-panel" role="tabpanel" aria-labelledby={tabId(activeCategory)}>{activeCategory === "GPS" ? <div className="gps-panel"><h3>GPS Solutions</h3><p>Contact Eknoor CCTV for GPS tracking and vehicle monitoring solutions.</p></div> : <div className="product-grid">{shownProducts.map((product) => <Link href={product.href} className="product-card" key={product.href}><div className={`product-visual tone-${products.indexOf(product) % 4}`}><span>{product.icon}</span><i aria-hidden="true" /></div><h3>{product.label}</h3></Link>)}</div>}</div></div></section>;
}
