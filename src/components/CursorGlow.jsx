import { useEffect, useRef } from "react";

/**
 * Renders a smooth, blurred radial-glow that follows the mouse
 * across the whole page — purely CSS-driven via a fixed div.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos = useRef({ x: -9999, y: -9999 });
  const raf = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      if (glow) {
        glow.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(56,189,248,0.07) 0%, rgba(129,140,248,0.04) 45%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        transition: "transform 0.12s cubic-bezier(0.25,0.46,0.45,0.94)",
      }}
    />
  );
}
