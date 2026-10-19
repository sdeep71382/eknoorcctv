import Link from "next/link";

export function PageHero({ title, parent = "Home" }: { title: string; parent?: string }) {
  return <section className="page-hero"><div className="page-hero-grid" aria-hidden="true" /><div className="shell"><p><Link href="/">{parent}</Link> / {title}</p><h1>{title}</h1></div></section>;
}
