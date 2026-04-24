import React, { useEffect, useRef } from "react";

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

function burst(rect: DOMRect, count: number): Particle[] {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  return Array.from({ length: count }, () => {
    // Spawn along the perimeter of the box
    const edge = Math.floor(Math.random() * 4);
    let sx: number, sy: number;
    if (edge === 0) { sx = rect.left + Math.random() * rect.width; sy = rect.top; }
    else if (edge === 1) { sx = rect.left + Math.random() * rect.width; sy = rect.bottom; }
    else if (edge === 2) { sx = rect.left; sy = rect.top + Math.random() * rect.height; }
    else { sx = rect.right; sy = rect.top + Math.random() * rect.height; }

    // Direction: outward from center + randomness
    const angle = Math.atan2(sy - cy, sx - cx) + (Math.random() - 0.5) * 1.2;
    const speed = Math.random() * 7 + 3;

    return {
      x: sx, y: sy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 2, // slight upward bias
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 14,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      w: Math.random() * 12 + 6,
      h: Math.random() * 7 + 3,
      opacity: 1,
    };
  });
}

interface Props {
  show: boolean;
  originRef: React.RefObject<HTMLDivElement | null>;
  onDone: () => void;
}

const DURATION = 2600;

export function CelebrationBurst({ show, originRef, onDone }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!show) return;

    const rect = originRef.current?.getBoundingClientRect();
    if (!rect) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = burst(rect, 90);
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const remaining = DURATION - elapsed;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.18;    // gravity — pulls them down after the burst
        p.vx *= 0.97;    // air resistance
        p.rotation += p.rotationSpeed;
        p.opacity = remaining < 700 ? remaining / 700 : 1;

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
        onDone();
      }
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [show]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        display: show ? "block" : "none",
      }}
    />
  );
}
