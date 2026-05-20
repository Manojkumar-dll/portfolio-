import { useState } from "react";
import { data } from "../data";

function ExperienceCard({ exp, index }) {
  const [openCat, setOpenCat] = useState(0);

  const catColors = [
    { bg: "rgba(56,189,248,0.07)", border: "rgba(56,189,248,0.2)", color: "var(--accent)" },
    { bg: "rgba(129,140,248,0.07)", border: "rgba(129,140,248,0.2)", color: "var(--accent2)" },
    { bg: "rgba(52,211,153,0.07)", border: "rgba(52,211,153,0.2)", color: "var(--accent3)" },
  ];

  return (
    <div className="exp-card-grid" style={{
      display: "grid", gridTemplateColumns: "200px 1fr", gap: "3rem", marginBottom: "4rem",
      position: "relative",
    }}>
      {/* Left: meta */}
      <div style={{ paddingTop: "0.25rem" }}>
        <div style={{
          display: "inline-block", padding: "0.3rem 0.75rem", borderRadius: "6px",
          background: index === 0 ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${index === 0 ? "rgba(52,211,153,0.3)" : "var(--border)"}`,
          color: index === 0 ? "var(--accent3)" : "var(--text3)",
          fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em",
          marginBottom: "0.75rem",
        }}>
          {index === 0 ? "CURRENT" : "PREVIOUS"}
        </div>
        <div style={{ fontSize: "0.85rem", color: "var(--text3)", lineHeight: 1.6 }}>{exp.period}</div>
        {exp.duration && <div style={{ fontSize: "0.8rem", color: "var(--text3)", marginTop: "0.25rem" }}>({exp.duration})</div>}
        <div style={{ marginTop: "0.5rem", fontSize: "0.78rem", color: "var(--text3)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
          📍 {exp.location}
        </div>
      </div>

      {/* Right: content */}
      <div>
        <div style={{
          padding: "2rem", borderRadius: "var(--radius)",
          background: "var(--surface)", border: "1px solid var(--border)",
          position: "relative", overflow: "hidden",
          transition: "border-color 0.3s",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border2)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
        >
          {/* Top gradient stripe */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "3px",
            background: index === 0
              ? "linear-gradient(90deg, var(--accent), var(--accent2))"
              : "linear-gradient(90deg, var(--accent2), var(--accent3))",
          }} />

          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
            {exp.role}
          </h3>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{exp.company}</p>
          {exp.platform && (
            <p style={{ fontSize: "0.8rem", color: "var(--text3)", marginBottom: "1.5rem", fontStyle: "italic" }}>
              Platform: {exp.platform}
            </p>
          )}

          {/* Category tabs */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            {exp.highlights.map((h, i) => (
              <button key={i} onClick={() => setOpenCat(i)} style={{
                padding: "0.4rem 0.9rem", borderRadius: "8px", cursor: "pointer",
                background: openCat === i ? catColors[i % 3].bg : "transparent",
                border: `1px solid ${openCat === i ? catColors[i % 3].border : "var(--border)"}`,
                color: openCat === i ? catColors[i % 3].color : "var(--text3)",
                fontSize: "0.78rem", fontWeight: 500, transition: "all 0.2s",
                fontFamily: "var(--font-body)",
              }}>
                {h.category.split(" ")[0]}…
              </button>
            ))}
          </div>

          {/* Active category content */}
          <div style={{
            padding: "1.5rem", borderRadius: "var(--radius-sm)",
            background: catColors[openCat % 3].bg,
            border: `1px solid ${catColors[openCat % 3].border}`,
          }}>
            <p style={{ fontSize: "0.82rem", color: catColors[openCat % 3].color, fontWeight: 600, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {exp.highlights[openCat].category}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {exp.highlights[openCat].points.map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text2)", lineHeight: 1.7 }}>
                  <span style={{ color: catColors[openCat % 3].color, marginTop: "0.35rem", flexShrink: 0, fontSize: "0.7rem" }}>▸</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-card-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .exp-card-grid > div:first-child { display: flex !important; flex-wrap: wrap !important; gap: 0.5rem !important; align-items: center !important; padding-top: 0 !important; }
        }
      `}</style>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.78rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>Career</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.01em", color: "var(--text)", lineHeight: 1.15 }}>
          Professional <span style={{ color: "var(--accent)" }}>Experience</span>
        </h2>
        <p style={{ color: "var(--text3)", fontSize: "0.95rem", marginTop: "0.75rem" }}>
          4+ years across enterprise engineering and AI-augmented development
        </p>
      </div>

      {/* Timeline line */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: "197px", top: 0, bottom: 0, width: "1px",
          background: "linear-gradient(180deg, var(--accent) 0%, var(--accent2) 50%, transparent 100%)",
          opacity: 0.3,
        }} />
        {data.experience.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
