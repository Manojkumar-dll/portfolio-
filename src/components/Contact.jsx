import { useState } from "react";
import { data } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.warn("Fallback copy failed", err);
    }
    document.body.removeChild(textArea);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(data.email).catch(() => {
        fallbackCopy(data.email);
      });
    } else {
      fallbackCopy(data.email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: "✉️",
      label: "Email",
      value: data.email,
      href: data.gmailDraftUrl,
      cta: "Draft in Gmail",
      target: "_blank",
      isEmail: true,
      title: "Open pre-filled draft in Gmail",
    },
    {
      icon: "📞",
      label: "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
      cta: "Call Now",
      target: undefined,
      isEmail: false,
      title: "Call Manoj",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "manoj-kumar-g114",
      href: data.linkedin,
      cta: "Connect",
      target: "_blank",
      isEmail: false,
      title: "Connect on LinkedIn",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "Manojkumar-dll",
      href: data.github,
      cta: "View Code",
      target: "_blank",
      isEmail: false,
      title: "View GitHub Profile",
    },
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
            <a
              key={i}
              href={c.href}
              target={c.target}
              rel={c.target ? "noopener noreferrer" : undefined}
              title={c.title}
              style={{
                padding: "1.75rem 1.5rem", borderRadius: "var(--radius)",
                background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)",
                textAlign: "center", display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "space-between",
                transition: "all 0.3s", textDecoration: "none",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.06)"; e.currentTarget.style.borderColor = "rgba(56,189,248,0.25)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{c.icon}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "0.5rem" }}>{c.label}</div>
                <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.88rem", marginBottom: "0.5rem", wordBreak: "break-all" }}>{c.value}</div>
                
                {c.isEmail && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    style={{
                      background: copied ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.06)",
                      border: `1px solid ${copied ? "rgba(52,211,153,0.3)" : "var(--border)"}`,
                      color: copied ? "var(--accent3)" : "var(--text2)",
                      borderRadius: "6px",
                      padding: "0.22rem 0.6rem",
                      fontSize: "0.72rem",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      marginBottom: "0.75rem",
                      transition: "all 0.2s",
                    }}
                  >
                    {copied ? "✓ Copied!" : "📋 Copy"}
                  </button>
                )}
              </div>

              <div style={{ marginTop: "1rem" }}>
                <span style={{
                  display: "inline-block", padding: "0.45rem 1.1rem", borderRadius: "8px",
                  background: "rgba(56,189,248,0.1)", color: "var(--accent)",
                  fontSize: "0.78rem", fontWeight: 600, border: "1px solid rgba(56,189,248,0.2)",
                  transition: "all 0.2s",
                }}>{c.cta} →</span>

                {c.isEmail && (
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.href = data.mailtoUrl;
                    }}
                    title="Open in default desktop mail application"
                    style={{
                      display: "block",
                      marginTop: "0.6rem",
                      fontSize: "0.72rem",
                      color: "var(--text3)",
                      textDecoration: "underline",
                      cursor: "pointer",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text3)")}
                  >
                    or default mail app
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
