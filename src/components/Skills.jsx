import { useScrollReveal } from "../hooks/useScrollReveal";
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

function SkillCard({ skill, index, c }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      style={{
        padding: "1.75rem",
        borderRadius: "var(--radius)",
        background: c.bg,
        border: `1px solid ${c.border}`,
        transition: "all 0.5s cubic-bezier(0.23,1,0.32,1)",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
        e.currentTarget.style.boxShadow = `0 24px 48px rgba(0,0,0,0.35), 0 0 0 1px ${c.border}`;
        e.currentTarget.style.background = c.bg.replace("0.06", "0.1");
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = c.bg;
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <span style={{ fontSize: "1.4rem" }}>{icons[index % icons.length]}</span>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: c.accent }}>
          {skill.category}
        </h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {skill.items.map((item, j) => (
          <span
            key={j}
            style={{
              padding: "0.35rem 0.75rem",
              borderRadius: "6px",
              background: c.tagBg,
              border: `1px solid ${c.tagBorder}`,
              color: c.tagColor,
              fontSize: "0.8rem",
              fontWeight: 500,
              transition: "all 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [headRef, headVisible] = useScrollReveal(0.2);

  return (
    <section id="skills" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div
        ref={headRef}
        style={{
          marginBottom: "4rem",
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <p style={{ fontSize: "0.78rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>
          Technical
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.01em", color: "var(--text)", lineHeight: 1.15 }}>
          Skills &amp; <span style={{ color: "var(--accent2)" }}>Stack</span>
        </h2>
        <p style={{ color: "var(--text3)", fontSize: "0.95rem", marginTop: "0.75rem" }}>
          Technologies and tools I work with daily
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {data.skills.map((skill, i) => {
          const c = categoryColors[i % categoryColors.length];
          return <SkillCard key={i} skill={skill} index={i} c={c} />;
        })}
      </div>
    </section>
  );
}
