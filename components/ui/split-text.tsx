"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Words stagger in one at a time. Reserved for the single most important
 * headline on the page (the hero H1) — everywhere else uses the plainer
 * Reveal fade so this one still reads as a deliberate, one-time moment.
 */
export function SplitText({
  text,
  startDelay = 0,
  className,
}: {
  text: string;
  startDelay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: startDelay + i * 0.07,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
