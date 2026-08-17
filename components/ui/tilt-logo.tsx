"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import type { ReactNode, MouseEvent } from "react";

/**
 * Wraps a logo (PNG, SVG, whatever) with a 3D tilt that follows the cursor
 * left-to-right, like it's spinning slightly to face the mouse. Drop the real
 * PNG in as `children` (an <Image>) once it exists — the effect doesn't care
 * what's inside.
 */
export function TiltLogo({
  children,
  className,
  maxTilt = 22,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 220, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 20, mass: 0.5 });

  const rotateY = useTransform(springX, [0, 1], [-maxTilt, maxTilt]);
  const rotateX = useTransform(springY, [0, 1], [maxTilt * 0.4, -maxTilt * 0.4]);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ perspective: 500 }}
    >
      <motion.div
        className="relative h-full w-full"
        style={reduce ? undefined : { rotateY, rotateX, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
