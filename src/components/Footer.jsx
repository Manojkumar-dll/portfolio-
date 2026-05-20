import { data } from "../data";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "2.5rem 2rem",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--text2)", fontSize: "0.95rem" }}>
          <span style={{ color: "var(--accent)" }}>Manoj Kumar G</span> · Software Engineer
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--text3)" }}>
          Built with React · Hosted on GitHub Pages · {new Date().getFullYear()}
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text3)", fontSize: "0.82rem", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"}
            onMouseLeave={e => e.target.style.color = "var(--text3)"}
          >LinkedIn</a>
          <a href={`mailto:${data.email}`} style={{ color: "var(--text3)", fontSize: "0.82rem", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--accent)"}
            onMouseLeave={e => e.target.style.color = "var(--text3)"}
          >Email</a>
        </div>
      </div>
    </footer>
  );
}
