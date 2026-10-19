import Link from "next/link";
import { aboutParagraphs, contact } from "@/lib/site-data";

export function About() {
  return (
    <section className="section about-section">
      <div className="shell about-grid">
        <div className="about-collage" aria-label="Security installation and monitoring placeholders">
          <div className="placeholder-visual installer"><span>INSTALLATION</span></div>
          <div className="placeholder-visual operator"><span>24/7 MONITORING</span></div>
          <div className="experience-badge"><strong>13+</strong><span>YEARS OF EXPERIENCE</span></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span>▱</span> ABOUT US</p>
          <h2>About <span>Sky Secure</span></h2>
          {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="about-actions"><Link className="button" href="/about-us">Read More →</Link><a className="call-card" href={`tel:${contact.phone}`}><span>☎</span><small>Call Us<strong>{contact.phone}</strong></small></a></div>
        </div>
      </div>
    </section>
  );
}
