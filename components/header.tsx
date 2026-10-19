"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, products, solutions } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState<{ pathname: string; menuOpen: boolean; panel: "solutions" | "products" | null }>({ pathname, menuOpen: false, panel: null });
  const menuOpen = navigation.pathname === pathname && navigation.menuOpen;
  const panel = navigation.pathname === pathname ? navigation.panel : null;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setNavigation({ pathname: window.location.pathname, menuOpen: false, panel: null }); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.main-header')) return;
      if (!target.closest('.main-nav') && !target.closest('.menu-toggle')) {
        setNavigation({ pathname, menuOpen: false, panel: null });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [menuOpen, pathname]);

  const togglePanel = (nextPanel: "solutions" | "products") => setNavigation((current) => ({ pathname, menuOpen: current.pathname === pathname && current.menuOpen, panel: current.pathname === pathname && current.panel === nextPanel ? null : nextPanel }));
  const current = (href: string) => pathname === href ? "page" as const : undefined;

  return <header>
    <div className="utility-bar"><div className="shell utility-inner"><div className="utility-contact"><a href={`tel:${contact.phone}`}>☎ {contact.phone}</a><a href={`mailto:${contact.email}`}>✉ {contact.email}</a><span>● {contact.address}</span></div><div className="socials" aria-hidden="true"><span>f</span><span>◎</span><span>𝕏</span></div></div></div>
    <div className="main-header"><div className="shell nav-shell">
      <Link href="/" className="logo"><span className="sr-only">Eknoor CCTV home</span><strong>Eknoor</strong><span>CCTV</span><small>SECURITY SOLUTIONS</small></Link>
      <button className="menu-toggle" onClick={() => setNavigation({ pathname, menuOpen: !menuOpen, panel: menuOpen ? panel : null })} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label="Toggle navigation">☰</button>
      <nav id="primary-navigation" className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        <Link href="/" aria-current={current("/")}>Home</Link><Link href="/about-us" aria-current={current("/about-us")}>About Us</Link>
        <div className="nav-dropdown"><button onClick={() => togglePanel("solutions")} aria-expanded={panel === "solutions"} aria-controls="solutions-menu" aria-haspopup="true">Our Solutions <span aria-hidden="true">⌄</span></button><div id="solutions-menu" className={panel === "solutions" ? "dropdown-panel show" : "dropdown-panel"}>{solutions.map((solution) => <Link key={solution.slug} href={`/${solution.slug}`}>{solution.title}</Link>)}</div></div>
        <div className="nav-dropdown product-dropdown"><button onClick={() => togglePanel("products")} aria-expanded={panel === "products"} aria-controls="products-menu" aria-haspopup="true">Our Product Range <span aria-hidden="true">⌄</span></button><div id="products-menu" className={panel === "products" ? "mega-panel show" : "mega-panel"}>{Array.from(new Set(products.map((product) => product.category))).map((category) => <div key={category}><h3>{category}</h3>{products.filter((product) => product.category === category).map((product) => <Link key={product.href} href={product.href}>{product.label}</Link>)}</div>)}</div></div>
        <Link href="/contact-us" aria-current={current("/contact-us")}>Contact Us</Link>
      </nav><Link href="/contact-us" className="button header-cta">☎ <span>Let’s Talk</span></Link>
    </div></div>
  </header>;
}
