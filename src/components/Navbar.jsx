import { useState, useEffect } from "react";
import { data } from "../data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2rem",
      background: scrolled ? "rgba(8,12,18,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(99,179,237,0.1)" : "1px solid transparent",
      transition: "all 0.4s ease",
      height: "68px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <a href="#hero" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.01em", color: "var(--text)" }}>
        <span style={{ color: "var(--accent)" }}>M</span>K<span style={{ color: "var(--text3)", fontWeight: 400, fontSize: "0.85rem", marginLeft: "0.4rem" }}>/ SE</span>
      </a>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: "0.25rem", listStyle: "none", alignItems: "center" }} className="nav-desktop">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} style={{
              padding: "0.5rem 0.9rem",
              borderRadius: "8px",
              fontSize: "0.88rem",
              fontWeight: 500,
              color: active === l.href.slice(1) ? "var(--accent)" : "var(--text2)",
              background: active === l.href.slice(1) ? "rgba(56,189,248,0.08)" : "transparent",
              transition: "all 0.2s",
              display: "block",
            }}
              onMouseEnter={e => { if (active !== l.href.slice(1)) { e.target.style.color = "var(--text)"; e.target.style.background = "rgba(255,255,255,0.04)"; }}}
              onMouseLeave={e => { if (active !== l.href.slice(1)) { e.target.style.color = "var(--text2)"; e.target.style.background = "transparent"; }}}
            >{l.label}</a>
          </li>
        ))}
        <li>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{
            marginLeft: "0.5rem", padding: "0.5rem 1.1rem",
            borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600,
            background: "rgba(56,189,248,0.1)", color: "var(--accent)",
            border: "1px solid rgba(56,189,248,0.2)",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "rgba(56,189,248,0.18)"; e.target.style.borderColor = "rgba(56,189,248,0.4)"; }}
            onMouseLeave={e => { e.target.style.background = "rgba(56,189,248,0.1)"; e.target.style.borderColor = "rgba(56,189,248,0.2)"; }}
          >LinkedIn ↗</a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: "none", background: "none", border: "none", cursor: "pointer",
        color: "var(--text)", padding: "0.5rem", flexDirection: "column", gap: "5px",
      }} className="nav-mobile-btn" aria-label="Menu">
        {[0,1,2].map(i => (
          <span key={i} style={{ display: "block", width: "22px", height: "2px", background: "var(--text2)", borderRadius: "2px", transition: "all 0.3s" }} />
        ))}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "68px", left: 0, right: 0, bottom: 0,
          background: "rgba(8,12,18,0.97)", backdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem",
          zIndex: 99,
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700,
              color: active === l.href.slice(1) ? "var(--accent)" : "var(--text)",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
