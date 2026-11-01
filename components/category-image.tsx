import Image from "next/image";
import { categoryImages } from "@/lib/generated/category-images";

type CategoryImageProps = {
  category: string;
  className?: string;
  alt?: string;
  sizes?: string;
  preload?: boolean;
  index?: number;
};

/**
 * Picks a statically imported image from the downloaded category manifest.
 * Product slugs without dedicated imagery use the family fallback selected upstream.
 */
export function CategoryImage({
  category,
  className,
  alt = "Security solution",
  sizes = "100vw",
  preload = false,
  index = 0,
}: CategoryImageProps) {
  const normalizedCategory = category.replace(/^\/+/, "");
  const images = categoryImages[normalizedCategory] ?? categoryImages.homepage;
  const imageIndex = ((index % images.length) + images.length) % images.length;
  const asset = images[imageIndex];

  return (
    <Image
      src={asset.src}
      alt={alt === "Security solution" ? asset.alt : alt}
      className={`category-image ${className ?? ""}`.trim()}
      sizes={sizes}
      preload={preload}
      placeholder="blur"
      fill
      style={{ objectFit: "cover" }}
    />
  );
}
