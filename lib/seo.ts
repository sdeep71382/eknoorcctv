import type { Metadata } from "next";
import { products, solutions } from "./site-data";

export const siteName = "Eknoor CCTV";
export const siteDescription = "Eknoor CCTV - CCTV installation, access control, networking, automation and security solutions in Chandigarh.";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export function getRouteMetadata(slug: string): Metadata {
  const solution = solutions.find((item) => item.slug === slug);
  const product = products.find((item) => item.href === `/${slug}`);
  const title = slug === "about-us" ? "About Us" : slug === "contact-us" ? "Contact Us" : solution?.title || product?.label || "Page Not Found";
  const description = solution
    ? `Explore Eknoor CCTV's ${solution.title} services and solutions.`
    : product
      ? `View Eknoor CCTV's ${product.label} product category and contact options.`
      : slug === "about-us"
        ? "Learn about Eknoor CCTV - CCTV installation, access control, networking, automation and security solutions in Chandigarh."
        : slug === "contact-us"
          ? "Contact Eknoor CCTV for CCTV installation, access control, networking, automation and security solutions."
          : "The requested page was not found.";

  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title, description, url: `/${slug}`, type: "website" },
    twitter: { card: "summary_large_image", title, description },
    robots: slug === "about-us" || slug === "contact-us" || solution || product ? undefined : { index: false, follow: false },
  };
}
