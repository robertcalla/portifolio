import { useEffect, useState } from "react";

export default function Nav({ theme, onToggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dimmed, setDimmed] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > lastY && y > 80) {
          setDimmed(true);
        } else if (y < lastY) {
          setDimmed(false);
        }
        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav${dimmed ? " nav-dimmed" : ""}`}>
      <a href="#top" className="brand" onClick={closeMenu}>
        <svg width="28" height="20" viewBox="0 0 88 64" aria-hidden="true">
          <path d="M28 18 L14 32 L28 46" stroke="var(--accent)" strokeWidth="6" fill="none" strokeLinecap="square" />
          <path d="M60 18 L74 32 L60 46" stroke="var(--accent)" strokeWidth="6" fill="none" strokeLinecap="square" />
          <path d="M38 50 L50 14" stroke="var(--text)" strokeWidth="6" strokeLinecap="square" />
        </svg>
        <span>Robert Zamora</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav-links${menuOpen ? " open" : ""}`}>
        <a
          href="#work"
          className={activeSection === "work" ? "active" : undefined}
          aria-current={activeSection === "work" ? "true" : undefined}
          onClick={closeMenu}
        >
          Projetos
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : undefined}
          aria-current={activeSection === "about" ? "true" : undefined}
          onClick={closeMenu}
        >
          Sobre
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : undefined}
          aria-current={activeSection === "contact" ? "true" : undefined}
          onClick={closeMenu}
        >
          Contato
        </a>
        <button
          type="button"
          className="theme-toggle"
          aria-pressed={theme === "light"}
          onClick={onToggleTheme}
        >
          <span className="dot" aria-hidden="true"></span>
          {theme === "dark" ? "Escuro" : "Claro"}
        </button>
      </nav>
    </header>
  );
}
