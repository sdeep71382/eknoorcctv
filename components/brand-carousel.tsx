"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { brands } from "@/lib/site-data";
import { brandLogoImages } from "@/lib/images";
import { SectionTitle } from "./section-title";

const BRAND_ALT: Record<string, string> = {
  Honeywell: "Honeywell security systems",
  Dahua: "Dahua CCTV cameras",
  Panasonic: "Panasonic security",
  AJAX: "AJAX security",
  HIKVISION: "Hikvision cameras",
  "TP-Link": "TP-Link networking",
  Godrej: "Godrej security",
  "Western Digital": "Western Digital storage",
  "CP PLUS": "CP PLUS cameras",
  TOSHIBA: "Toshiba security",
  "D-Link": "D-Link networking",
  OZONE: "OZONE security",
  Secureye: "Secureye cameras",
  onetouch: "Onetouch access control",
  MATRIX: "Matrix security",
};

export function BrandCarousel() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="section brands-section">
      <div className="shell">
        <SectionTitle eyebrow="BRANDS" title="Brands We Are" accent="Dealing With" />
        <div className="brand-track" role="region" aria-label="Brands we deal with" tabIndex={0}>
          <div className="marquee">
            {brands.map((brand, index) => {
              const imageSrc = brandLogoImages[index] ?? "/images/homepage/b1.png";
              return (
                <div className="logo-tile" key={brand}>
                  <Image
                    src={imageSrc}
                    alt={BRAND_ALT[brand] ?? brand}
                    width={200}
                    height={100}
                    className="brand-logo"
                    loading="lazy"
                  />
                </div>
              );
            })}
            {brands.map((brand, index) => {
              const imageSrc = brandLogoImages[index] ?? "/images/homepage/b1.png";
              return (
                <div className="logo-tile" key={`${brand}-2`} aria-hidden="true">
                  <Image
                    src={imageSrc}
                    alt=""
                    width={200}
                    height={100}
                    className="brand-logo"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
