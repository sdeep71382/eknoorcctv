"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="route-status not-found" role="alert"><p className="eyebrow">APPLICATION ERROR</p><h1>Something went wrong</h1><p>The page could not be displayed. No form data was sent.</p><button className="button" onClick={reset}>Try Again</button></section>;
}
