"use client";

import { useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

export function SpecialtyCard({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-[24px] border border-silver p-6 shadow-[0_16px_40px_-16px_rgb(0_0_0/0.45)] transition-transform duration-300 will-change-transform hover:-translate-y-1"
    >
      <div className="gradient-flow absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-paper/30 backdrop-blur-[2px]" aria-hidden />
      {/* Spotlight that follows the cursor on hover — reinforces the card is interactive. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgb(255 255 255 / 0.18), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative text-ink">{icon}</div>

      <div className="relative">
        <h3 className="text-lg font-bold tracking-tight text-ink">{title}</h3>
        <p className="mt-2 max-w-[34ch] text-[14px] leading-relaxed text-ink-secondary">{body}</p>
      </div>
    </div>
  );
}
