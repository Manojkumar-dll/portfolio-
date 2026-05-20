import { data } from "../data";

export default function Education() {
  const edu = data.education;
  return (
    <section id="education" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.78rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>Background</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.01em", color: "var(--text)", lineHeight: 1.15 }}>
          <span style={{ color: "var(--accent3)" }}>Education</span>
        </h2>
      </div>

      <div className="edu-grid" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start",
      }}>
        {/* Edu card */}
        <div style={{
          padding: "2.5rem", borderRadius: "var(--radius)",
          background: "var(--surface)", border: "1px solid var(--border)",
          position: "relative", overflow: "hidden",
          transition: "border-color 0.3s",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(52,211,153,0.3)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--accent3), var(--accent))" }} />

          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.35rem 0.9rem", borderRadius: "100px",
            background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)",
            color: "var(--accent3)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.05em",
            marginBottom: "1.5rem",
          }}>
            🎓 {edu.year}
          </div>

          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 800, color: "var(--text)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
            {edu.degree}
          </h3>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "1rem", marginBottom: "1.5rem" }}>
            {edu.field}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span style={{ color: "var(--text3)", fontSize: "0.8rem", width: "90px", flexShrink: 0 }}>Institution</span>
              <span style={{ color: "var(--text2)", fontSize: "0.9rem", fontWeight: 500 }}>{edu.institution}</span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span style={{ color: "var(--text3)", fontSize: "0.8rem", width: "90px", flexShrink: 0 }}>University</span>
              <span style={{ color: "var(--text2)", fontSize: "0.9rem", fontWeight: 500 }}>{edu.university}</span>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <span style={{ color: "var(--text3)", fontSize: "0.8rem", width: "90px", flexShrink: 0 }}>CGPA</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--accent3)" }}>{edu.cgpa}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--text3)" }}>/ 10.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { year: "2017", label: "Started B.E. ECE", desc: "Meenakshi College of Engineering", color: "var(--accent)" },
            { year: "2021", label: "Graduated — CGPA 8.03", desc: "Anna University, Chennai", color: "var(--accent3)" },
            { year: "Dec'21", label: "Joined Kal Cables", desc: "Jr. Software Developer · .NET Full-stack", color: "var(--accent2)" },
            { year: "2024", label: "Joined Resulticks", desc: "Software Engineer · Python, AI-Augmented Dev", color: "var(--accent)" },
            { year: "Now", label: "Growing & Contributing", desc: "AI, APIs, Platform Engineering", color: "var(--accent3)" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: `rgba(${item.color === "var(--accent)" ? "56,189,248" : item.color === "var(--accent2)" ? "129,140,248" : "52,211,153"},0.12)`,
                  border: `1.5px solid ${item.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.65rem", fontWeight: 700, color: item.color, fontFamily: "var(--font-display)",
                }}>{item.year}</div>
                {i < 4 && <div style={{ width: "1px", height: "1.5rem", background: "var(--border)" }} />}
              </div>
              <div style={{ paddingTop: "0.6rem" }}>
                <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.92rem" }}>{item.label}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text3)", marginTop: "0.2rem" }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
