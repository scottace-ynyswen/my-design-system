import React, { useEffect, useRef, useState } from "react";

const COLORS = [
  "#58AAE0", // aqua
  "#FFD700", // gold
  "#FF6B6B", // coral
  "#50E3C2", // mint
  "#F5A623", // orange
  "#A78BFA", // lavender
  "#34D399", // green
  "#1f1f1f", // black (brand)
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  w: number;
  h: number;
  opacity: number;
}

function makeParticles(count: number, canvasWidth: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * -300 - 10,
    vx: (Math.random() - 0.5) * 5,
    vy: Math.random() * 4 + 1.5,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 12,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    w: Math.random() * 14 + 6,
    h: Math.random() * 8 + 3,
    opacity: 1,
  }));
}

interface Props {
  show: boolean;
  onDone: () => void;
}

const DURATION = 4200;

export function CelebrationBurst({ show, onDone }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const [phase, setPhase] = useState<"hidden" | "entering" | "visible" | "leaving">("hidden");

  useEffect(() => {
    if (!show) {
      setPhase("hidden");
      return;
    }

    setPhase("entering");

    // Animate the card in on next frame
    const t1 = setTimeout(() => setPhase("visible"), 30);
    // Start fading card out before confetti ends
    const t2 = setTimeout(() => setPhase("leaving"), DURATION - 900);
    // Call onDone after full duration
    const t3 = setTimeout(() => {
      setPhase("hidden");
      onDone();
    }, DURATION);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = makeParticles(140, canvas.width);
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const remaining = DURATION - elapsed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.09;   // gravity
        p.vx *= 0.995;  // gentle drag
        p.rotation += p.rotationSpeed;
        p.opacity = remaining < 800 ? remaining / 800 : 1;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
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

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      cancelAnimationFrame(rafRef.current);
    };
  }, [show]);

  if (phase === "hidden") return null;

  const cardVisible = phase === "visible";

  return (
    <>
      {/* Confetti canvas — full screen, non-interactive */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />

      {/* Congratulations card */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            border: "2px solid #1f1f1f",
            padding: "40px 48px",
            maxWidth: 460,
            width: "90%",
            textAlign: "center",
            transform: cardVisible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
            opacity: phase === "leaving" ? 0 : cardVisible ? 1 : 0,
            transition: phase === "leaving"
              ? "opacity 0.8s ease-in-out, transform 0.8s ease-in-out"
              : "opacity 0.35s ease-out, transform 0.35s ease-out",
          }}
        >
          <div style={{ fontSize: 52, lineHeight: 1, marginBottom: 16 }}>🎉</div>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: 28,
              lineHeight: 1.2,
              color: "#1f1f1f",
              margin: "0 0 12px",
            }}
          >
            You're all set!
          </h2>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.6,
              color: "#3c3c3c",
              margin: 0,
            }}
          >
            Congratulations on renewing with{" "}
            <strong style={{ fontWeight: 700, color: "#1f1f1f" }}>Confused.com</strong>.
            Your cover is being sorted — you&apos;re in safe hands.
          </p>
        </div>
      </div>
    </>
  );
}
