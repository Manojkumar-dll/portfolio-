import { useScrollReveal } from "../hooks/useScrollReveal";
import { data } from "../data";

export default function About() {
  const [leftRef, leftVisible] = useScrollReveal(0.15);
  const [rightRef, rightVisible] = useScrollReveal(0.15);

  return (
    <section id="about" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        {/* Left */}
        <div
          ref={leftRef}
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.7s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
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
            <a
              href={`mailto:${data.email}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.6rem 1.2rem", borderRadius: "8px",
                background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)",
                color: "var(--accent)", fontSize: "0.85rem", fontWeight: 500,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(56,189,248,0.18)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(56,189,248,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(56,189,248,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              ✉ {data.email}
            </a>
            <a
              href={`tel:${data.phone}`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.6rem 1.2rem", borderRadius: "8px",
                background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                color: "var(--text2)", fontSize: "0.85rem", fontWeight: 500,
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              📞 {data.phone}
            </a>
          </div>
        </div>

        {/* Right – competency grid */}
        <div
          ref={rightRef}
          style={{
            opacity: rightVisible ? 1 : 0,
            transform: rightVisible ? "translateX(0)" : "translateX(40px)",
            transition: "all 0.7s cubic-bezier(0.23,1,0.32,1) 0.15s",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "var(--text3)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, marginBottom: "1.2rem" }}>Core Competencies</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {data.competencies.map((c, i) => (
              <span
                key={i}
                style={{
                  padding: "0.5rem 1rem", borderRadius: "8px",
                  background: i % 3 === 0 ? "rgba(56,189,248,0.08)" : i % 3 === 1 ? "rgba(129,140,248,0.08)" : "rgba(52,211,153,0.08)",
                  border: `1px solid ${i % 3 === 0 ? "rgba(56,189,248,0.2)" : i % 3 === 1 ? "rgba(129,140,248,0.2)" : "rgba(52,211,153,0.2)"}`,
                  color: i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--accent2)" : "var(--accent3)",
                  fontSize: "0.82rem", fontWeight: 500,
                  transition: "all 0.2s", cursor: "default",
                  opacity: rightVisible ? 1 : 0,
                  transform: rightVisible ? "scale(1)" : "scale(0.85)",
                  transitionDelay: `${0.2 + i * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.filter = "brightness(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.filter = "brightness(1)";
                }}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Location badge */}
          <div
            style={{
              marginTop: "2rem", padding: "1rem 1.5rem", borderRadius: "var(--radius-sm)",
              background: "var(--surface)", border: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: "0.75rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(56,189,248,0.3)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(56,189,248,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>📍</span>
            <div>
              <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.95rem" }}>{data.location}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text3)" }}>Open to Remote &amp; Hybrid roles</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
