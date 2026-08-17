"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LazyBrain3D = dynamic(() => import("./brain-3d").then((m) => m.Brain3D), {
  ssr: false,
});

/**
 * The 3D brain only ever shows on lg+ (see hero.tsx's `hidden lg:flex`), but a
 * CSS-hidden element still mounts and loads its JS/network payload. Gate the
 * actual WebGL mount on a real viewport check so phones never fetch the
 * Three.js bundle or the model.
 */
export function Brain3D({ className }: { className?: string }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);
    const onChange = () => setIsDesktop(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  if (!isDesktop) return null;
  return <LazyBrain3D className={className} />;
}
