"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { onTabListKeyDown } from "@/lib/tab-keys";
import { productImageCategory } from "@/lib/category-image";
import { productCategories, products } from "@/lib/site-data";
import { SectionTitle } from "./section-title";
import { SpotlightCard } from "./aceternity-foundation";
import { CategoryImage } from "./category-image";

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("CCTV");
  const [query, setQuery] = useState("");
  const term = query.trim().toLowerCase();
  const prefersReducedMotion = useReducedMotion();

  const categoryProducts = products.filter((product) => product.category === activeCategory);
  const searchResults = useMemo(
    () => (term ? products.filter((product) => `${product.label} ${product.category}`.toLowerCase().includes(term)) : []),
    [term],
  );
  const shownProducts = term ? searchResults : categoryProducts;

  const tabId = (category: string) => `product-tab-${category.replaceAll(" ", "-")}`;

  return (
    <section className="section products-section" id="products">
      <div className="shell">
        <SectionTitle eyebrow="PRODUCTS" title="Products" accent="We Offer" />
        <div className="catalog-search">
          <label className="sr-only" htmlFor="product-search">Search products</label>
          <span className="catalog-search-icon" aria-hidden="true">⌕</span>
          <input
            id="product-search"
            type="search"
            value={query}
            placeholder="Search cameras, access control, networking…"
            autoComplete="off"
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button type="button" className="catalog-search-clear" onClick={() => setQuery("")} aria-label="Clear search">
              ✕
            </button>
          )}
        </div>

        {!term && (
          <div className="tab-list" role="tablist" aria-label="Product categories" onKeyDown={onTabListKeyDown}>
            {productCategories.map((category) => (
              <motion.button
                id={tabId(category)}
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls="product-panel"
                tabIndex={activeCategory === category ? 0 : -1}
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        )}

        <div id="product-panel" role={term ? undefined : "tabpanel"} aria-labelledby={term ? undefined : tabId(activeCategory)}>
          {term ? (
            <>
              <p className="catalog-count" role="status" aria-live="polite">
                {shownProducts.length} {shownProducts.length === 1 ? "product" : "products"} matching “{query.trim()}”
              </p>
              {shownProducts.length > 0 ? (
                <div className="product-grid">
                  {shownProducts.map((product, index) => (
                    <SpotlightCard
                      key={product.href}
                      className="product-card"
                      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <Link href={product.href}>
                        <div className={`product-visual tone-${products.indexOf(product) % 4}`}>
                          <CategoryImage category={productImageCategory(product.href, product.category, index)} index={index} sizes="(max-width: 767px) 100vw, 33vw" />
                          <i aria-hidden="true" />
                        </div>
                        <h3>{product.label}</h3>
                        <p className="product-category">{product.category}</p>
                      </Link>
                    </SpotlightCard>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <span aria-hidden="true">⌕</span>
                  <h3>No products found</h3>
                  <p>We could not find anything for “{query.trim()}”. Try another term or browse by category.</p>
                  <button className="button" type="button" onClick={() => setQuery("")}>
                    Clear search
                  </button>
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="product-grid">
                {shownProducts.map((product, index) => (
                  <SpotlightCard
                    key={product.href}
                    className="product-card"
                    whileHover={prefersReducedMotion ? undefined : { y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Link href={product.href}>
                      <div className={`product-visual tone-${products.indexOf(product) % 4}`}>
                        <CategoryImage category={productImageCategory(product.href, product.category, index)} index={index} sizes="(max-width: 767px) 100vw, 33vw" />
                        <i aria-hidden="true" />
                      </div>
                      <h3>{product.label}</h3>
                      <p className="product-category">{product.category}</p>
                    </Link>
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
