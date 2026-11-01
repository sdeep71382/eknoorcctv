import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { contact, externalLinks, products, solutions } from "@/lib/site-data";
import { ContactDetail } from "./contact-detail";

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  x: "X",
} as const;

const footerProducts = products.slice(0, 5);

export function Footer() {
  const configuredSocials = Object.entries(socialLabels).flatMap(([key, label]) => {
    const href = externalLinks[key as keyof typeof socialLabels];
    return href ? [{ href, label }] : [];
  });

  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <section className="footer-brand" aria-labelledby="footer-brand-heading">
          <p className="footer-eyebrow">Integrated security partner</p>
          <div className="footer-brand-lockup">
            <span aria-hidden="true"><ShieldCheck size={24} /></span>
            <h2 id="footer-brand-heading">Eknoor CCTV</h2>
          </div>
          <p>Integrated CCTV, access control, networking and automation solutions for homes and businesses.</p>
          <div className="footer-location"><MapPin size={17} aria-hidden="true" /><span>{contact.address}</span></div>
        </section>

        <nav className="footer-column" aria-labelledby="footer-explore-heading">
          <h2 id="footer-explore-heading">Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/#solutions">Solutions</Link>
          <Link href="/#products">Products</Link>
          <Link href="/contact-us">Contact</Link>
        </nav>

        <nav className="footer-column" aria-labelledby="footer-solutions-heading">
          <h2 id="footer-solutions-heading">Solutions</h2>
          {solutions.map((solution) => (
            <Link key={solution.slug} href={`/${solution.slug}`}>{solution.title}</Link>
          ))}
        </nav>

        <nav className="footer-column" aria-labelledby="footer-products-heading">
          <h2 id="footer-products-heading">Products</h2>
          {footerProducts.map((product) => (
            <Link key={product.href} href={product.href}>{product.label}</Link>
          ))}
        </nav>

        <section className="footer-column footer-contact" aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading">Contact</h2>
          <ContactDetail kind="phone" value={contact.phone}>
            <Phone size={16} aria-hidden="true" /><span>Support: {contact.phone}</span>
          </ContactDetail>
          <ContactDetail kind="phone" value={contact.sales}>
            <Phone size={16} aria-hidden="true" /><span>Sales: {contact.sales}</span>
          </ContactDetail>
          <ContactDetail kind="email" value={contact.email}>
            <Mail size={16} aria-hidden="true" /><span>{contact.email}</span>
          </ContactDetail>
          <ContactDetail kind="whatsapp" value={contact.whatsapp}>
            <MessageCircle size={16} aria-hidden="true" /><span>WhatsApp: {contact.whatsapp}</span>
          </ContactDetail>
          <p className="footer-placeholder-note">Contact details are placeholders and are not active yet.</p>
        </section>
      </div>

      <div className="shell footer-meta">
        <div className="footer-external" aria-label="External links">
          {configuredSocials.length > 0 ? configuredSocials.map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
          )) : <span className="footer-status">Social links pending verification</span>}
          {externalLinks.googleReviews ? (
            <a href={externalLinks.googleReviews} target="_blank" rel="noopener noreferrer">Google Reviews</a>
          ) : <span className="footer-status">Google Reviews link pending</span>}
        </div>
        <p className="copyright">© {new Date().getFullYear()} Eknoor CCTV. All rights reserved.</p>
      </div>
    </footer>
  );
}
