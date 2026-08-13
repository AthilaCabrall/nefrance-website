"use client";

import { useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import { clsx } from "clsx";
import "./aurora.css";

const Aurora = dynamic(() => import("./aurora"), { ssr: false });

const AURORA_STOPS: [string, string, string] = ["#5b21b6", "#9b6bff", "#4fd689"];

export function AuroraBackground({
  className,
  amplitude = 0.9,
  blend = 0.55,
  speed = 0.4,
}: {
  className?: string;
  amplitude?: number;
  blend?: number;
  speed?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className={clsx("aurora-static", className)}
        style={{ background: "var(--brand-gradient-soft)" }}
        aria-hidden
      />
    );
  }

  return (
    <div className={className} aria-hidden>
      <Aurora colorStops={AURORA_STOPS} amplitude={amplitude} blend={blend} speed={speed} />
    </div>
  );
}
