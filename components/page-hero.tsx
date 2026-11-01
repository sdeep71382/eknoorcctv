import Link from "next/link";

export function PageHero({ title, parent, parentHref = "/" }: { title: string; parent?: string; parentHref?: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="shell">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            {parent && <li><Link href={parentHref}>{parent}</Link></li>}
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1>{title}</h1>
      </div>
    </section>
  );
}
