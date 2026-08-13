export function OwlMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      role="presentation"
    >
      <defs>
        <linearGradient id="owl-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5b21b6" />
          <stop offset="52%" stopColor="#9b6bff" />
          <stop offset="100%" stopColor="#4fd689" />
        </linearGradient>
      </defs>
      <path
        fill="url(#owl-gradient)"
        d="M32 6c-11 0-18 8-18 20 0 3 .5 5.6 1.4 8L10 40l8.4-2.6C21.6 42 26.4 44 32 44s10.4-2 13.6-6.6L54 40l-5.4-6c.9-2.4 1.4-5 1.4-8 0-12-7-20-18-20Z"
      />
      <circle cx="24" cy="24" r="5.2" fill="var(--surface-paper)" />
      <circle cx="40" cy="24" r="5.2" fill="var(--surface-paper)" />
      <circle cx="24" cy="24" r="2.2" fill="#0b0912" />
      <circle cx="40" cy="24" r="2.2" fill="#0b0912" />
      <path d="M30 30l2 3 2-3Z" fill="#0b0912" />
      <path
        d="M18 12c-3 1-5.5 3.4-6.8 6.4C13.6 17 16.4 15.6 19 16Z"
        fill="url(#owl-gradient)"
      />
      <path
        d="M46 12c3 1 5.5 3.4 6.8 6.4C50.4 17 47.6 15.6 45 16Z"
        fill="url(#owl-gradient)"
      />
    </svg>
  );
}
