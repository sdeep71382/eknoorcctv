import type { Metadata } from "next";
import { About } from "@/components/about";
import { BrandCarousel } from "@/components/brand-carousel";
import { ClientLogos } from "@/components/client-logos";
import { HeroSlider } from "@/components/hero-slider";
import { ProductCatalog } from "@/components/product-catalog";
import { Solutions } from "@/components/solutions";
import { Testimonials } from "@/components/testimonials";
import { WhyChoose } from "@/components/why-choose";
import { siteDescription, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Integrated Security Solutions | ${siteName}`,
  description: siteDescription,
  alternates: { canonical: "/" },
};

export default function Home() {
  return <><HeroSlider /><About /><Solutions /><ProductCatalog /><WhyChoose /><BrandCarousel /><Testimonials /><ClientLogos /></>;
}
