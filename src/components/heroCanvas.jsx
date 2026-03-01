import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * HeroCanvas
 * -----------------------------------------------------------
 * A GPU-friendly 2-D canvas animation that renders a
 * continuously-morphing field of sine-curved topology lines —
 * the same aesthetic as the original Three.js wave, but with
 * zero extra dependencies (just framer-motion, already installed).
 *
 * Drop-in replacement for <ComputersCanvas /> inside Hero.jsx.
 *
 * Usage:
 *   import HeroCanvas from "./HeroCanvas";
 *   ...
 *   <HeroCanvas />
 */

// ─── tuneable constants ──────────────────────────────────────
const CFG = {
  lineColor:   "rgba(145, 94, 255,",  // #915EFF — matches your accent
  bgColor:     "#050816",             // your existing dark bg
  lineCount:   60,                    // lines in each wave group
  amplitude:   120,                   // max wave height
  speed:       0.0008,               // animation speed
  lineWidth:   0.7,                   // stroke width
  maxAlpha:    0.55,                  // line opacity ceiling
  groups:      3,                     // wave groups (layered depth)
};
// ────────────────────────────────────────────────────────────

function drawFrame(ctx, W, H, t) {
  ctx.clearRect(0, 0, W, H);

  for (let g = 0; g < CFG.groups; g++) {
    const gOffset  = (g / CFG.groups) * Math.PI * 2;
    const gScale   = 0.6 + g * 0.25;
    const gAlpha   = CFG.maxAlpha - g * 0.12;

    for (let i = 0; i < CFG.lineCount; i++) {
      const progress = i / CFG.lineCount;           // 0→1
      const y0       = progress * H;                // vertical spread
      const alpha    = gAlpha * (0.2 + progress * 0.8);

      ctx.beginPath();
      ctx.lineWidth = CFG.lineWidth;
      ctx.strokeStyle = `${CFG.lineColor}${alpha.toFixed(2)})`;

      // draw line as a series of tiny segments
      const steps = 200;
      for (let s = 0; s <= steps; s++) {
        const px = (s / steps) * W;

        // stacked sines — each group / line gets unique phase
        const wave =
          Math.sin(px * 0.007 * gScale + t + gOffset + progress * 4) *
            CFG.amplitude * gScale * 0.6 +
          Math.sin(px * 0.013 * gScale - t * 1.3 + gOffset + progress * 2) *
            CFG.amplitude * gScale * 0.3 +
          Math.sin(px * 0.02  * gScale + t * 0.7 + gOffset) *
            CFG.amplitude * gScale * 0.1;

        const py = y0 + wave;

        if (s === 0) ctx.moveTo(px, py);
        else         ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);
  const tRef      = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // ── resize handler ──────────────────────────────────────
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      // use devicePixelRatio for crisp lines on retina
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = width  * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── animation loop ──────────────────────────────────────
    let last = performance.now();

    const tick = (now) => {
      const dt = now - last;
      last = now;
      tRef.current += dt * CFG.speed;

      const rect = canvas.getBoundingClientRect();
      drawFrame(ctx, rect.width, rect.height, tRef.current);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      {/* ── canvas fills the whole hero, content sits on top via z-index ── */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />

      {/* ── soft radial vignette so the left content stays legible ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 80% at 20% 50%, transparent 40%, #050816 100%)",
        }}
      />

      {/* ── subtle bottom fade into whatever section comes next ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #050816)",
        }}
      />
    </motion.div>
  );
}
