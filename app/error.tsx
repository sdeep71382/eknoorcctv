"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="route-status not-found" role="alert">
      <p className="eyebrow">SOMETHING WENT WRONG</p>
      <h1>We hit an unexpected error</h1>
      <p>The page could not be displayed. Please try again, or head back to the homepage.</p>
      <div className="route-actions">
        <button className="button" onClick={reset}>Try Again</button>
        <Link className="button button-ghost" href="/">Back to Home</Link>
      </div>
    </section>
  );
}
