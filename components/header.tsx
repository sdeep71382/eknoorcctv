"use client";

import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useCallback,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { contact, products, solutions } from "@/lib/site-data";
import { ResizableNavbar } from "./aceternity-foundation";
import { ContactDetail } from "./contact-detail";

type Panel = "solutions" | "products" | null;
type NavigationState = { pathname: string; menuOpen: boolean; panel: Panel };

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const mouseOpenedPanelRef = useRef<Exclude<Panel, null> | null>(null);
  const hoverCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [navigation, setNavigation] = useState<NavigationState>({
    pathname,
    menuOpen: false,
    panel: null,
  });

  const menuOpen = navigation.pathname === pathname && navigation.menuOpen;
  const panel = navigation.pathname === pathname ? navigation.panel : null;
  const productGroups = Array.from(new Set(products.map((product) => product.category)));

  const updateNavigation = useCallback((updates: Partial<Omit<NavigationState, "pathname">>) =>
    setNavigation((current) => ({
      pathname,
      menuOpen: current.pathname === pathname ? current.menuOpen : false,
      panel: current.pathname === pathname ? current.panel : null,
      ...updates,
    })), [pathname]);

  const cancelPendingHoverClose = useCallback(() => {
    if (hoverCloseTimerRef.current === null) return;
    clearTimeout(hoverCloseTimerRef.current);
    hoverCloseTimerRef.current = null;
  }, []);

  const closeAll = useCallback(() => {
    cancelPendingHoverClose();
    setNavigation({ pathname, menuOpen: false, panel: null });
  }, [cancelPendingHoverClose, pathname]);

  useEffect(() => {
    cancelPendingHoverClose();
    mouseOpenedPanelRef.current = null;
    setNavigation({ pathname, menuOpen: false, panel: null });
  }, [cancelPendingHoverClose, pathname]);

  const focusPanelTrigger = useCallback((activePanel: Exclude<Panel, null>) => {
    const trigger = activePanel === "solutions" ? solutionsButtonRef.current : productsButtonRef.current;
    queueMicrotask(() => trigger?.focus());
  }, []);

  useEffect(() => () => cancelPendingHoverClose(), [cancelPendingHoverClose]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      if (panel) {
        const activePanel = panel;
        updateNavigation({ panel: null });
        focusPanelTrigger(activePanel);
        return;
      }

      if (menuOpen) {
        updateNavigation({ menuOpen: false, panel: null });
        queueMicrotask(() => menuButtonRef.current?.focus());
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [focusPanelTrigger, menuOpen, panel, updateNavigation]);

  useEffect(() => {
    if (!menuOpen && !panel) return;

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeAll();
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, [closeAll, menuOpen, panel]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1101px)");
    const closeMobileMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) closeAll();
    };

    desktopQuery.addEventListener("change", closeMobileMenuOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeMobileMenuOnDesktop);
  }, [closeAll]);

  const togglePanel = (
    event: ReactMouseEvent<HTMLButtonElement>,
    nextPanel: Exclude<Panel, null>,
  ) => {
    if (event.detail > 0 && mouseOpenedPanelRef.current === nextPanel && panel === nextPanel) return;
    updateNavigation({ panel: panel === nextPanel ? null : nextPanel });
  };

  const enterPanel = (
    event: ReactPointerEvent<HTMLDivElement>,
    nextPanel: Exclude<Panel, null>,
  ) => {
    if (event.pointerType === "mouse") {
      cancelPendingHoverClose();
      if (panel && panel !== nextPanel) return;
      mouseOpenedPanelRef.current = nextPanel;
      updateNavigation({ panel: nextPanel });
    }
  };

  const leavePanel = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") {
      const nextTarget = event.relatedTarget as Node | null;
      if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
        cancelPendingHoverClose();
        hoverCloseTimerRef.current = setTimeout(() => {
          mouseOpenedPanelRef.current = null;
          updateNavigation({ panel: null });
          hoverCloseTimerRef.current = null;
        }, 500);
      }
    }
  };

  const openPanelFromKeyboard = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    nextPanel: Exclude<Panel, null>,
  ) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    updateNavigation({ panel: nextPanel });
  };

  const current = (href: string) => (pathname === href ? ("page" as const) : undefined);
  const solutionIsCurrent = solutions.some((solution) => pathname === `/${solution.slug}`);
  const productIsCurrent = products.some((product) => pathname === product.href);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <div className="utility-contact" aria-label="Contact placeholders">
            <span className="utility-contact-item">
              <Phone size={13} aria-hidden="true" />
              <ContactDetail kind="phone" value={contact.phone}>{contact.phone}</ContactDetail>
            </span>
            <span className="utility-contact-item">
              <Mail size={13} aria-hidden="true" />
              <ContactDetail kind="email" value={contact.email}>{contact.email}</ContactDetail>
            </span>
          </div>
          <p className="utility-location"><MapPin size={14} aria-hidden="true" /> {contact.address}</p>
        </div>
      </div>

      <div className="main-header">
        <ResizableNavbar className="shell nav-shell">
          <Link href="/" className="logo" onClick={closeAll}>
            <span className="logo-mark" aria-hidden="true"><ShieldCheck size={22} strokeWidth={2.25} /></span>
            <span className="logo-copy">
              <span><strong>Eknoor</strong> CCTV</span>
              <small>SECURITY SOLUTIONS</small>
            </span>
            <span className="sr-only">Eknoor CCTV home</span>
          </Link>

          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            onClick={() => updateNavigation({ menuOpen: !menuOpen, panel: null })}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          <nav
            id="primary-navigation"
            className={menuOpen ? "main-nav is-open" : "main-nav"}
            aria-label="Main navigation"
          >
            <p className="mobile-nav-heading" aria-hidden="true">
              <span>Explore</span>
              <small>Security solutions for every space</small>
            </p>
            <Link href="/" aria-current={current("/")} onClick={closeAll}>Home</Link>
            <Link href="/about-us" aria-current={current("/about-us")} onClick={closeAll}>About Us</Link>

            <div
              className="nav-dropdown"
              onPointerEnter={(event) => enterPanel(event, "solutions")}
              onPointerLeave={leavePanel}
            >
              <button
                ref={solutionsButtonRef}
                type="button"
                className={solutionIsCurrent ? "current-parent" : undefined}
                onClick={(event) => togglePanel(event, "solutions")}
                onKeyDown={(event) => openPanelFromKeyboard(event, "solutions")}
                aria-expanded={panel === "solutions"}
                aria-controls="solutions-menu"
                aria-haspopup="true"
              >
                Solutions <ChevronDown size={15} aria-hidden="true" />
              </button>
              <div
                id="solutions-menu"
                className={panel === "solutions" ? "dropdown-panel show" : "dropdown-panel"}
                onPointerEnter={(event) => enterPanel(event, "solutions")}
                onPointerLeave={leavePanel}
              >
                <p className="nav-panel-label">Solutions by environment</p>
                {solutions.map((solution) => (
                  <Link
                    key={solution.slug}
                    href={`/${solution.slug}`}
                    aria-current={current(`/${solution.slug}`)}
                    onClick={closeAll}
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="nav-dropdown product-dropdown"
              onPointerEnter={(event) => enterPanel(event, "products")}
              onPointerLeave={leavePanel}
            >
              <button
                ref={productsButtonRef}
                type="button"
                className={productIsCurrent ? "current-parent" : undefined}
                onClick={(event) => togglePanel(event, "products")}
                onKeyDown={(event) => openPanelFromKeyboard(event, "products")}
                aria-expanded={panel === "products"}
                aria-controls="products-menu"
                aria-haspopup="true"
              >
                Products <ChevronDown size={15} aria-hidden="true" />
              </button>
              <div
                id="products-menu"
                className={panel === "products" ? "mega-panel show" : "mega-panel"}
                onPointerEnter={(event) => enterPanel(event, "products")}
                onPointerLeave={leavePanel}
              >
                {productGroups.map((category) => (
                  <section key={category} className="mega-group">
                    <h2>{category}</h2>
                    {products.filter((product) => product.category === category).map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        aria-current={current(product.href)}
                        onClick={closeAll}
                      >
                        {product.label}
                      </Link>
                    ))}
                  </section>
                ))}
              </div>
            </div>

            <Link href="/contact-us" aria-current={current("/contact-us")} onClick={closeAll}>Contact</Link>
            <Link href="/contact-us" className="button mobile-nav-cta" onClick={closeAll}>
              Request a quote <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </nav>

          <Link href="/contact-us" className="button header-cta" onClick={closeAll}>
            Request a quote <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </ResizableNavbar>
      </div>
    </header>
  );
}
