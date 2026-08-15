// Placeholder mark for the nav logo slot. Swap for the real Higgsfield-made
// PNG (transparent background) inside <TiltLogo> in nav.tsx whenever it's ready
// — the 3D hover effect wraps whatever image you put there.
export function BrainMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden role="presentation">
      <defs>
        <linearGradient id="brain-mark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b21b6" />
          <stop offset="52%" stopColor="#9b6bff" />
          <stop offset="100%" stopColor="#4fd689" />
        </linearGradient>
      </defs>
      <path
        fill="url(#brain-mark-gradient)"
        d="M18 5c-4.4 0-8 3.4-8.4 7.7C6.6 13.9 5 16.6 5 19.6c0 2.5 1.1 4.7 2.9 6.2-.2.8-.3 1.6-.3 2.4 0 5 4 9 9 9 1.5 0 2.9-.4 4.1-1 .8.5 1.7.8 2.3.8 1 0 2-.4 2.8-1 1.2.7 2.6 1 4.1 1 5 0 9-4 9-9 0-.9-.1-1.7-.4-2.5C40.8 24.2 42 22 42 19.5c0-3-1.6-5.7-4-7-.7-4-4.2-7.1-8.4-7.1-1.7 0-3.3.5-4.6 1.4C23.7 5.7 22 5 20.2 5H18Z"
      />
      <path
        stroke="#0b0912"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
        d="M18 9c-1.5 1.5-2 3.5-1.5 5.5M24 8v30M17 20c2 1 3 3 2.5 5.5M31 20c-2 1-3 3-2.5 5.5M12 27c2 .5 3.5 2 4 4M36 27c-2 .5-3.5 2-4 4"
      />
    </svg>
  );
}
