import { data } from "../data";

const categoryColors = [
  { accent: "var(--accent)", bg: "rgba(56,189,248,0.06)", border: "rgba(56,189,248,0.15)", tagBg: "rgba(56,189,248,0.1)", tagBorder: "rgba(56,189,248,0.25)", tagColor: "var(--accent)" },
  { accent: "var(--accent2)", bg: "rgba(129,140,248,0.06)", border: "rgba(129,140,248,0.15)", tagBg: "rgba(129,140,248,0.1)", tagBorder: "rgba(129,140,248,0.25)", tagColor: "var(--accent2)" },
  { accent: "var(--accent3)", bg: "rgba(52,211,153,0.06)", border: "rgba(52,211,153,0.15)", tagBg: "rgba(52,211,153,0.1)", tagBorder: "rgba(52,211,153,0.25)", tagColor: "var(--accent3)" },
  { accent: "#f59e0b", bg: "rgba(245,158,11,0.06)", border: "rgba(245,158,11,0.15)", tagBg: "rgba(245,158,11,0.1)", tagBorder: "rgba(245,158,11,0.25)", tagColor: "#f59e0b" },
  { accent: "#ec4899", bg: "rgba(236,72,153,0.06)", border: "rgba(236,72,153,0.15)", tagBg: "rgba(236,72,153,0.1)", tagBorder: "rgba(236,72,153,0.25)", tagColor: "#ec4899" },
  { accent: "#a78bfa", bg: "rgba(167,139,250,0.06)", border: "rgba(167,139,250,0.15)", tagBg: "rgba(167,139,250,0.1)", tagBorder: "rgba(167,139,250,0.25)", tagColor: "#a78bfa" },
  { accent: "#34d399", bg: "rgba(52,211,153,0.06)", border: "rgba(52,211,153,0.15)", tagBg: "rgba(52,211,153,0.1)", tagBorder: "rgba(52,211,153,0.25)", tagColor: "#34d399" },
];

const icons = ["⌨️", "🧩", "🤖", "🔌", "🗄️", "🛠️", "📊"];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.78rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>Technical</p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.01em", color: "var(--text)", lineHeight: 1.15 }}>
          Skills &amp; <span style={{ color: "var(--accent2)" }}>Stack</span>
        </h2>
        <p style={{ color: "var(--text3)", fontSize: "0.95rem", marginTop: "0.75rem" }}>
          Technologies and tools I work with daily
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1.25rem",
      }}>
        {data.skills.map((skill, i) => {
          const c = categoryColors[i % categoryColors.length];
          return (
            <div key={i} style={{
              padding: "1.75rem", borderRadius: "var(--radius)",
              background: c.bg, border: `1px solid ${c.border}`,
              transition: "all 0.3s", cursor: "default",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.4rem" }}>{icons[i % icons.length]}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: c.accent }}>{skill.category}</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {skill.items.map((item, j) => (
                  <span key={j} style={{
                    padding: "0.35rem 0.75rem", borderRadius: "6px",
                    background: c.tagBg, border: `1px solid ${c.tagBorder}`,
                    color: c.tagColor, fontSize: "0.8rem", fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.2)"}
                    onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
                  >{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
