import Link from "next/link";

export default function NotFound() {
  return (
    <section className="route-status not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or may have moved.</p>
      <div className="route-actions">
        <Link className="button" href="/">Back to Home →</Link>
        <Link className="button button-ghost" href="/contact-us">Contact Us</Link>
      </div>
    </section>
  );
}
