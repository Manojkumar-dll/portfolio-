import { data } from "../data";

export default function Contact() {
  const contacts = [
    { icon: "✉️", label: "Email", value: data.email, href: `mailto:${data.email}`, cta: "Send Email" },
    { icon: "📞", label: "Phone", value: data.phone, href: `tel:${data.phone}`, cta: "Call Now" },
    { icon: "💼", label: "LinkedIn", value: "manoj-kumar-g114", href: data.linkedin, cta: "Connect" },
    { icon: "🐙", label: "GitHub", value: "Manojkumar-dll", href: data.github, cta: "View Code" },
  ];

  return (
    <section id="contact" style={{ padding: "8rem 2rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{
        borderRadius: "24px",
        background: "linear-gradient(135deg, var(--surface) 0%, var(--bg2) 100%)",
        border: "1px solid var(--border)",
        padding: "4rem",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "-50%", right: "-20%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{ fontSize: "0.78rem", color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.75rem" }}>Let's Talk</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3.5vw, 2.3rem)", fontWeight: 800, letterSpacing: "-0.01em", color: "var(--text)", lineHeight: 1.15, marginBottom: "1rem" }}>
            Get In <span style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Touch</span>
          </h2>
          <p style={{ color: "var(--text2)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
            Open to exciting opportunities in full-stack engineering, AI-integrated systems, or platform development. Let's build something great.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem",
          position: "relative", zIndex: 1,
        }}>
          {contacts.map((c, i) => (
            <a key={i} href={c.href} target={i >= 2 ? "_blank" : undefined} rel="noopener noreferrer" style={{
              padding: "1.75rem", borderRadius: "var(--radius)",
              background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
              textAlign: "center", display: "block",
              transition: "all 0.3s", textDecoration: "none",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.06)"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{c.icon}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.5rem" }}>{c.label}</div>
              <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.88rem", marginBottom: "1rem", wordBreak: "break-all" }}>{c.value}</div>
              <span style={{
                display: "inline-block", padding: "0.4rem 1rem", borderRadius: "8px",
                background: "rgba(56,189,248,0.1)", color: "var(--accent)",
                fontSize: "0.78rem", fontWeight: 600, border: "1px solid rgba(56,189,248,0.2)",
              }}>{c.cta} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
