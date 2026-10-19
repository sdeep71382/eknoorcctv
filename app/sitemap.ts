import type { MetadataRoute } from "next";
import { allPublicSlugs } from "@/lib/site-data";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", ...allPublicSlugs];
  return routes.map((route, index) => ({
    url: `${siteUrl}/${route}`,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "about-us" || route === "contact-us" ? 0.8 : 0.7,
  }));
}
