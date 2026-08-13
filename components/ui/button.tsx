import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = {
  variant?: "primary" | "ghost";
  className?: string;
} & ComponentProps<typeof Link>;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <Link
      className={clsx(
        "inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full px-6 text-[15px] font-semibold tracking-tight transition-transform duration-200 active:scale-[0.98]",
        variant === "primary" &&
          "brand-gradient-bg text-white shadow-[0_10px_30px_-8px_rgb(var(--shadow-tint)/0.55)] hover:brightness-[1.06]",
        variant === "ghost" &&
          "border border-hairline text-ink hover:bg-sunken",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
