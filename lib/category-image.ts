import { categoryImages } from "./generated/category-images";

const productFamilyImages: Record<string, string[]> = {
  CCTV: ["analog-ip-camera", "wifi-camera"],
  "Access Control": ["door-access-control", "video-door-phone", "biometric"],
  Networking: ["wireless-solutions"],
  Communication: ["intercom-epabx", "walkie-talkie"],
  Security: ["fire-sensor-system", "instrusion-alarm-system"],
  Automation: ["automatic-gate-motor", "boom-barrier", "gate-barrier"],
  "Road Safety Products": ["road-safety-products"],
  Screens: ["interactive-panel"],
};

/**
 * Maps a product href to its image category key in pageImages.
 * pageImages keys are full slugs (e.g. "/analog-ip-camera").
 */
export function productImageCategory(href: string, category: string, index = 0): string {
  const slug = href.replace(/^\//, "");
  if (categoryImages[slug]?.length) return slug;

  const familyImages = productFamilyImages[category] ?? ["homepage"];
  return familyImages[index % familyImages.length];
}
