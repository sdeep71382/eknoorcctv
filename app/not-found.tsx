import Link from "next/link";

export default function NotFound() {
  return <section className="route-status not-found"><p className="eyebrow">404 ERROR</p><h1>Page not found</h1><p>The requested public page does not exist in this recreation.</p><Link className="button" href="/">Return Home →</Link></section>;
}
