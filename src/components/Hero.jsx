import { useEffect, useRef } from "react";
import { data } from "../data";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? "56,189,248" : "129,140,248",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "2", label: "Companies" },
    { value: "10+", label: "Tech Stack" },
    { value: "AI", label: "Augmented Dev" },
  ];

  return (
    <section id="hero" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      overflow: "hidden", padding: "0 2rem",
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(129,140,248,0.06) 0%, transparent 70%)",
    }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Glowing orb */}
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
        width: "600px", height: "400px", pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, transparent 70%)",
        filter: "blur(40px)",
      }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "860px" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.4rem 1rem", borderRadius: "100px",
          background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)",
          fontSize: "0.8rem", color: "var(--accent)", fontWeight: 500, letterSpacing: "0.05em",
          marginBottom: "2rem",
          animation: "fadeIn 0.8s ease both",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent3)", display: "inline-block", boxShadow: "0 0 8px rgba(52,211,153,0.8)", animation: "pulse-glow 2s infinite" }} />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
          fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em",
          color: "var(--text)", marginBottom: "1rem",
          animation: "fadeUp 0.9s ease both 0.1s",
        }}>
          Manoj{" "}
          <span style={{
            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Kumar G</span>
        </h1>

        {/* Title */}
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "var(--text2)", fontWeight: 500, letterSpacing: "0.06em",
          textTransform: "uppercase", marginBottom: "1.5rem",
          animation: "fadeUp 0.9s ease both 0.2s",
        }}>
          Software Engineer · Full-Stack · AI-Augmented
        </p>

        {/* Summary */}
        <p style={{
          fontSize: "1rem", color: "var(--text2)", lineHeight: 1.8,
          maxWidth: "640px", margin: "0 auto 2.5rem",
          animation: "fadeUp 0.9s ease both 0.3s",
        }}>
          {data.summary}
        </p>

        {/* CTA buttons */}
        <div style={{
          display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
          animation: "fadeUp 0.9s ease both 0.4s",
        }}>
          <a href="#experience" style={{
            padding: "0.85rem 2rem", borderRadius: "12px",
            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
            color: "#080c12", fontWeight: 700, fontSize: "0.95rem",
            transition: "all 0.3s", display: "inline-block",
            boxShadow: "0 8px 32px rgba(56,189,248,0.25)",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(56,189,248,0.4)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 32px rgba(56,189,248,0.25)"; }}
          >View Experience</a>
          <a href="#contact" style={{
            padding: "0.85rem 2rem", borderRadius: "12px",
            background: "transparent", color: "var(--text)", fontWeight: 600, fontSize: "0.95rem",
            border: "1px solid var(--border2)", transition: "all 0.3s", display: "inline-block",
          }}
            onMouseEnter={e => { e.target.style.background = "rgba(255,255,255,0.05)"; e.target.style.borderColor = "rgba(99,179,237,0.4)"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "var(--border2)"; }}
          >Get In Touch</a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: "relative", zIndex: 2, display: "flex", gap: "0", flexWrap: "wrap", justifyContent: "center",
        marginTop: "5rem", borderRadius: "var(--radius)",
        background: "rgba(13,20,32,0.8)", border: "1px solid var(--border)",
        backdropFilter: "blur(20px)", overflow: "hidden",
        animation: "fadeUp 1s ease both 0.5s",
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: "1.5rem 2.5rem", textAlign: "center",
            borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.3rem" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        color: "var(--text3)", fontSize: "0.75rem", letterSpacing: "0.1em",
        animation: "float 2s ease-in-out infinite",
      }}>
        <span>SCROLL</span>
        <span style={{ fontSize: "1rem" }}>↓</span>
      </div>
    </section>
  );
}
