import { useEffect, useRef, useState } from "react";
import { data } from "../data";

/* ── Typewriter ──────────────────────────────────────────── */
function Typewriter({ words, speed = 80, pause = 1800 }) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed;

    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return (
    <span style={{ color: "var(--accent)", position: "relative" }}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--accent)",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

/* ── Particle Canvas ─────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

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

    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove, { passive: true });

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.55 + 0.1,
        color: Math.random() > 0.5 ? "56,189,248" : Math.random() > 0.5 ? "129,140,248" : "52,211,153",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Subtle mouse repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          p.x += (dx / dist) * force * 1.2;
          p.y += (dy / dist) * force * 1.2;
        }

        p.x += p.vx;
        p.y += p.vy;
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
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${0.07 * (1 - dist / 130)})`;
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
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    />
  );
}

/* ── Magnetic Button ─────────────────────────────────────── */
function MagneticBtn({ href, primary, children }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.3;
    const dy = (e.clientY - cy) * 0.3;
    el.style.transform = `translate(${dx}px, ${dy}px) scale(1.04)`;
  };

  const onLeave = (e) => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0) scale(1)";
    if (primary) {
      el.style.boxShadow = "0 8px 32px rgba(56,189,248,0.25)";
    }
  };

  const onEnter = (e) => {
    const el = ref.current;
    if (!el) return;
    if (primary) el.style.boxShadow = "0 12px 48px rgba(56,189,248,0.45)";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      style={
        primary
          ? {
            padding: "0.9rem 2.2rem",
            borderRadius: "12px",
            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
            color: "#080c12",
            fontWeight: 700,
            fontSize: "0.95rem",
            transition: "box-shadow 0.3s, transform 0.15s cubic-bezier(0.23,1,0.32,1)",
            display: "inline-block",
            boxShadow: "0 8px 32px rgba(56,189,248,0.25)",
            willChange: "transform",
          }
          : {
            padding: "0.9rem 2.2rem",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.03)",
            color: "var(--text)",
            fontWeight: 600,
            fontSize: "0.95rem",
            border: "1px solid var(--border2)",
            transition: "background 0.3s, border-color 0.3s, transform 0.15s cubic-bezier(0.23,1,0.32,1)",
            display: "inline-block",
            willChange: "transform",
          }
      }
    >
      {children}
    </a>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
const TITLES = [
  "Full-Stack Engineer",
  "AI-Augmented Developer"
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "2", label: "Companies" },
  { value: "10+", label: "Tech Stack" },
  { value: "AI", label: "Augmented Dev" },
];

export default function Hero() {
  const orbRef = useRef(null);

  // Parallax orb on mouse move
  useEffect(() => {
    const onMove = (e) => {
      const orb = orbRef.current;
      if (!orb) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      orb.style.transform = `translateX(calc(-50% + ${dx * 30}px)) translateY(${dy * 20}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 2rem",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(129,140,248,0.06) 0%, transparent 70%)",
      }}
    >
      <ParticleCanvas />

      {/* Parallax glowing orb */}
      <div
        ref={orbRef}
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "500px",
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.1) 0%, rgba(129,140,248,0.06) 40%, transparent 70%)",
          filter: "blur(50px)",
          transition: "transform 0.08s ease-out",
          willChange: "transform",
        }}
      />

      {/* Ring decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "600px",
          border: "1px solid rgba(56,189,248,0.06)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "spin-slow 25s linear infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "900px",
          height: "900px",
          border: "1px solid rgba(129,140,248,0.04)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "spin-slow 40s linear infinite reverse",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "880px" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 1.1rem",
            borderRadius: "100px",
            background: "rgba(56,189,248,0.08)",
            border: "1px solid rgba(56,189,248,0.22)",
            fontSize: "0.78rem",
            color: "var(--accent)",
            fontWeight: 600,
            letterSpacing: "0.08em",
            marginBottom: "2rem",
            animation: "fadeIn 0.8s ease both",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "var(--accent3)",
              display: "inline-block",
              boxShadow: "0 0 10px rgba(52,211,153,0.9)",
              animation: "pulse-glow 2s infinite",
            }}
          />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "1rem",
            animation: "fadeUp 0.9s ease both 0.1s",
          }}
        >
          Manoj{" "}
          <span
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Kumar G
          </span>
        </h1>

        {/* Typewriter title */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
            color: "var(--text2)",
            fontWeight: 500,
            letterSpacing: "0.03em",
            marginBottom: "1.5rem",
            animation: "fadeUp 0.9s ease both 0.2s",
            minHeight: "2em",
          }}
        >
          <Typewriter words={TITLES} />
        </p>

        {/* Summary */}
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text2)",
            lineHeight: 1.85,
            maxWidth: "640px",
            margin: "0 auto 2.8rem",
            animation: "fadeUp 0.9s ease both 0.3s",
          }}
        >
          {data.summary}
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 0.9s ease both 0.4s",
          }}
        >
          <MagneticBtn href="#experience" primary>
            View Experience
          </MagneticBtn>
          <MagneticBtn href="#contact">Get In Touch</MagneticBtn>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="hero-stats"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: "0",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "5rem",
          borderRadius: "var(--radius)",
          background: "rgba(13,20,32,0.85)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(24px)",
          overflow: "hidden",
          animation: "fadeUp 1s ease both 0.55s",
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "1.5rem 2.5rem",
              textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(56,189,248,0.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                fontWeight: 800,
                color: "var(--accent)",
                lineHeight: 1,
                transition: "transform 0.3s",
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--text3)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "0.3rem",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "var(--text3)",
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          animation: "float 2.5s ease-in-out infinite",
        }}
      >
        <span>SCROLL</span>
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="6" y="2" width="4" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="5" r="1.5" fill="currentColor">
            <animate attributeName="cy" values="4;8;4" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <path d="M4 14l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
