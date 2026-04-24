import React, { useEffect, useRef, useState } from "react";

const COLORS = [
  "#58AAE0", "#FFD700", "#FF6B6B",
  "#50E3C2", "#F5A623", "#A78BFA", "#34D399",
];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  rotation: number; rotationSpeed: number;
  color: string; w: number; h: number;
  opacity: number;
}

function burstFromRect(rect: DOMRect, count: number): Particle[] {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  return Array.from({ length: count }, () => {
    // Spawn along the perimeter of the card
    const edge = Math.floor(Math.random() * 4);
    let sx: number, sy: number;
    if (edge === 0)      { sx = rect.left  + Math.random() * rect.width;  sy = rect.top; }
    else if (edge === 1) { sx = rect.left  + Math.random() * rect.width;  sy = rect.bottom; }
    else if (edge === 2) { sx = rect.left;  sy = rect.top + Math.random() * rect.height; }
    else                 { sx = rect.right; sy = rect.top + Math.random() * rect.height; }

    // Radiate outward from centre of card
    const angle = Math.atan2(sy - cy, sx - cx) + (Math.random() - 0.5) * 0.8;
    const speed = Math.random() * 9 + 4;

    return {
      x: sx, y: sy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 14,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      w: Math.random() * 13 + 6,
      h: Math.random() * 7 + 3,
      opacity: 1,
    };
  });
}

interface Props {
  show: boolean;
  onDone: () => void;
}

const DURATION = 4000;

export function CelebrationBurst({ show, onDone }: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number>(0);
  const [phase, setPhase] = useState<"hidden" | "entering" | "visible" | "leaving">("hidden");

  useEffect(() => {
    if (!show) { setPhase("hidden"); return; }

    setPhase("entering");

    // Let card render + transition in, then grab its rect and fire confetti
    const t0 = setTimeout(() => setPhase("visible"), 30);
    const t1 = setTimeout(() => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d")!;
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = burstFromRect(rect, 110);
      const start = performance.now();

      function animate(now: number) {
        const elapsed   = now - start;
        const remaining = DURATION - elapsed - 400; // start fading 400ms before end

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const p of particles) {
          p.x  += p.vx;
          p.y  += p.vy;
          p.vy += 0.15;
          p.vx *= 0.98;
          p.rotation += p.rotationSpeed;
          p.opacity = remaining < 600 ? Math.max(0, remaining / 600) : 1;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle   = p.color;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();
        }

        if (elapsed < DURATION) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }, 350); // fire confetti once card has scaled in

    const t2 = setTimeout(() => setPhase("leaving"), DURATION - 600);
    const t3 = setTimeout(() => { setPhase("hidden"); onDone(); }, DURATION + 200);

    return () => {
      [t0, t1, t2, t3].forEach(clearTimeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, [show]);

  if (phase === "hidden") return null;

  const cardIn = phase === "visible";

  return (
    <>
      {/* Full-screen canvas — sits behind the card */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed", inset: 0,
          width: "100%", height: "100%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      {/* Dim backdrop */}
      <div
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: 9997,
          opacity: phase === "leaving" ? 0 : cardIn ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Congratulations card */}
      <div
        style={{
          position: "fixed", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <div
          ref={cardRef}
          style={{
            background: "#ffffff",
            border: "2px solid #1f1f1f",
            padding: "44px 52px",
            maxWidth: 460,
            width: "90%",
            textAlign: "center",
            transform: cardIn ? "scale(1) translateY(0)" : "scale(0.88) translateY(20px)",
            opacity: phase === "leaving" ? 0 : cardIn ? 1 : 0,
            transition: phase === "leaving"
              ? "opacity 0.55s ease-in, transform 0.55s ease-in"
              : "opacity 0.3s ease-out, transform 0.3s ease-out",
          }}
        >
          <div style={{ fontSize: 52, lineHeight: 1, marginBottom: 20 }}>🎉</div>
          <h2 style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 700,
            fontSize: 28, lineHeight: 1.2, color: "#1f1f1f", margin: "0 0 14px",
          }}>
            You&apos;re all set!
          </h2>
          <p style={{
            fontFamily: "Poppins, sans-serif", fontWeight: 400,
            fontSize: 18, lineHeight: 1.65, color: "#3c3c3c", margin: 0,
          }}>
            Congratulations on renewing with{" "}
            <strong style={{ fontWeight: 700, color: "#1f1f1f" }}>Confused.com</strong>.
            {" "}Your cover is being sorted — you&apos;re in safe hands.
          </p>
        </div>
      </div>
    </>
  );
}
