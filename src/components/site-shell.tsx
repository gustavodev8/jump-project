import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { INSTAGRAM_URL, NAV_ITEMS } from "@/data/content";

export const wrap = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";
export const Arrow = () => (
  <span aria-hidden="true" className="arrow-mark">
    ↗
  </span>
);

export function Brand({
  className = "",
  symbolSrc,
  wordmarkSrc,
}: {
  className?: string;
  symbolSrc?: string;
  wordmarkSrc?: string;
}) {
  return (
    <span className={`brand-identity ${className}`} aria-label="JUMP">
      {symbolSrc && <img className="brand-symbol" src={symbolSrc} alt="" aria-hidden="true" />}
      {wordmarkSrc ? (
        <img className="brand-wordmark-image" src={wordmarkSrc} alt="JUMP" />
      ) : (
        <span className="brand-name">JUMP</span>
      )}
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!open) {
      if (wasOpen.current) {
        triggerRef.current?.focus();
        wasOpen.current = false;
      }
      return;
    }
    wasOpen.current = true;
    const backgroundRegions = Array.from(
      document.querySelectorAll<HTMLElement>(".site-header, #main-content, .site-footer"),
    );
    const previousInertValues = backgroundRegions.map((element) => element.inert);
    backgroundRegions.forEach((element) => {
      element.inert = true;
    });
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>("a, button");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      backgroundRegions.forEach((element, index) => {
        element.inert = previousInertValues[index];
      });
    };
  }, [open]);

  const isCurrent = (to: string) => location.pathname === to;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <header className="site-header site-header-dark">
        <div className={`${wrap} header-inner`}>
          <Link to="/" aria-label="JUMP — início" className="brand-link">
            <Brand />
          </Link>
          <nav aria-label="Principal" className="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={isCurrent(item.to) ? "nav-link is-active" : "nav-link"}
                aria-current={isCurrent(item.to) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link to="/contato" className="header-cta">
            Vamos conversar <Arrow />
          </Link>
          <button
            type="button"
            ref={triggerRef}
            className="menu-trigger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      {open && (
        <div className="mobile-menu-backdrop" role="presentation">
          <nav
            id="mobile-menu"
            ref={menuRef}
            className="mobile-menu"
            aria-label="Menu principal"
            aria-modal="true"
            role="dialog"
          >
            <div className={`${wrap} mobile-menu-top`}>
              <Brand className="text-4xl" />
              <button
                type="button"
                ref={closeButtonRef}
                className="menu-close"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>
            <div className={`${wrap} mobile-menu-links`}>
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={isCurrent(item.to) ? "mobile-nav-link is-active" : "mobile-nav-link"}
                  aria-current={isCurrent(item.to) ? "page" : undefined}
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <span>0{index + 1}</span>
                  {item.label}
                  <Arrow />
                </Link>
              ))}
            </div>
            <div className={`${wrap} mobile-menu-foot`}>
              <span>Coletivo criativo</span>
              <span>Por toda a Bahia</span>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className={`${wrap} footer-grid`}>
        <div>
          <Brand className="text-5xl" />
          <p className="footer-note">
            Comunicação, audiovisual e conexões criativas.
            <br />
            Por toda a Bahia.
          </p>
        </div>
        <div className="footer-links">
          <p className="eyebrow">Explore</p>
          {NAV_ITEMS.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-links">
          <p className="eyebrow">Conecte</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            Instagram @jumprodutora <Arrow />
          </a>
        </div>
      </div>
      <div className={`${wrap} footer-bottom`}>
        <span>JUMP © 2026</span>
        <span>Feito para criar além do óbvio.</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "page-intro page-intro-dark" : "page-intro"}>
      <div className={wrap}>
        <p className="eyebrow intro-eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-lede">{description}</p>}
      </div>
    </section>
  );
}
