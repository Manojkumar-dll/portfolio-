import { data } from "../data";

export default function About() {
  return (
    <section id="about" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        {/* Left */}
        <div>
          <p style={{ fontSize: "0.78rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "1rem" }}>About Me</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: "1.5rem", color: "var(--text)" }}>
            Engineering with<br />
            <span style={{ color: "var(--accent)" }}>Intelligence</span> &<br />
            Precision
          </h2>
          <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: "0.97rem", marginBottom: "1.5rem" }}>
            {data.summary}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={`mailto:${data.email}`} style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.6rem 1.2rem", borderRadius: "8px",
              background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)",
              color: "var(--accent)", fontSize: "0.85rem", fontWeight: 500,
              transition: "all 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(56,189,248,0.15)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(56,189,248,0.08)"}
            >
              ✉ {data.email}
            </a>
            <a href={`tel:${data.phone}`} style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.6rem 1.2rem", borderRadius: "8px",
              background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
              color: "var(--text2)", fontSize: "0.85rem", fontWeight: 500,
              transition: "all 0.2s",
            }}>
              📞 {data.phone}
            </a>
          </div>
        </div>

        {/* Right – competency grid */}
        <div>
          <p style={{ fontSize: "0.78rem", color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.2rem" }}>Core Competencies</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {data.competencies.map((c, i) => (
              <span key={i} style={{
                padding: "0.5rem 1rem", borderRadius: "8px",
                background: i % 3 === 0 ? "rgba(56,189,248,0.08)" : i % 3 === 1 ? "rgba(129,140,248,0.08)" : "rgba(52,211,153,0.08)",
                border: `1px solid ${i % 3 === 0 ? "rgba(56,189,248,0.2)" : i % 3 === 1 ? "rgba(129,140,248,0.2)" : "rgba(52,211,153,0.2)"}`,
                color: i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--accent2)" : "var(--accent3)",
                fontSize: "0.82rem", fontWeight: 500,
                transition: "all 0.2s", cursor: "default",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >{c}</span>
            ))}
          </div>

          {/* Location badge */}
          <div style={{
            marginTop: "2rem", padding: "1rem 1.5rem", borderRadius: "var(--radius-sm)",
            background: "var(--surface)", border: "1px solid var(--border)",
            display: "flex", alignItems: "center", gap: "0.75rem",
          }}>
            <span style={{ fontSize: "1.5rem" }}>📍</span>
            <div>
              <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.95rem" }}>{data.location}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text3)" }}>Open to Remote & Hybrid roles</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
