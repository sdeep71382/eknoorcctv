import Link from "next/link";
import { BackgroundGrid } from "./aceternity-foundation";
import { CategoryImage } from "./category-image";

export function HeroSlider() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <div className="hero-image-wrap">
        <CategoryImage
          category="society-commercial-space-solutions"
          className="hero-image category-image"
          alt="CCTV surveillance protecting a residential society and commercial property"
          sizes="100vw"
          preload
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <BackgroundGrid className="hero-grid" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow">▱ <span>WELCOME TO EKNOOR CCTV</span></p>
          <h1 id="home-hero-title">Advanced security solutions for <span>every space</span></h1>
          <p>
            Eknoor CCTV provides CCTV installation, access control, networking, automation and security solutions for homes, offices, industries, malls and commercial spaces.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact-us">
              Get a Free Quote <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-ghost hero-secondary" href="/#solutions">
              Explore Solutions
            </Link>
          </div>
          <ul className="hero-proof" aria-label="Service highlights">
            <li>Site-led planning</li>
            <li>Turnkey installation</li>
            <li>After-sales support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
