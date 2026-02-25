"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CreativeMind = dynamic(
  () => import("./creative-mind"),
  { ssr: false }
);
const Subscription = dynamic(
  () => import("./subscription"),
  { ssr: false }
);

/**
 * Charge les sections masquées après requestIdleCallback pour réduire le thread principal.
 */
export default function DeferUntilIdle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(() => setMounted(true), { timeout: 2000 })
        : setTimeout(() => setMounted(true), 1500);

    return () =>
      typeof requestIdleCallback !== "undefined"
        ? cancelIdleCallback(id as number)
        : clearTimeout(id as ReturnType<typeof setTimeout>);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <div className="hidden" aria-hidden>
        <CreativeMind />
      </div>
      <div className="hidden" aria-hidden>
        <Subscription />
      </div>
    </>
  );
}
