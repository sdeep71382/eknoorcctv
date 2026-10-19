import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { PageHero } from "@/components/page-hero";
import { ProductPage } from "@/components/product-page";
import { SolutionPage } from "@/components/solution-page";
import { allPublicSlugs, products, solutions } from "@/lib/site-data";
import { getRouteMetadata } from "@/lib/seo";

export function generateStaticParams() { return allPublicSlugs.map((slug) => ({ slug })); }

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return getRouteMetadata(slug);
}

export default async function PublicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "about-us") return <><PageHero title="About Us" /><About /></>;
  if (slug === "contact-us") return <><PageHero title="Contact Us" /><Contact /></>;
  if (solutions.some((solution) => solution.slug === slug)) return <SolutionPage slug={slug} />;
  if (products.some((product) => product.href === `/${slug}`)) return <ProductPage slug={slug} />;
  notFound();
}
