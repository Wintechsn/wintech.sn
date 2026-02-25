"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import dynamic from "next/dynamic";

const OnlinePresence = dynamic(
  () => import("./online-presence"),
  { ssr: true }
);
const CustomerStories = dynamic(
  () => import("./customer-stories"),
  { ssr: true }
);
const Blog = dynamic(() => import("./blog"), { ssr: true });
const Solutions = dynamic(() => import("./solution"), { ssr: true });

/**
 * Ne rend les sections below-the-fold que lorsque le sentinel entre dans le viewport.
 * Réduit le travail du thread principal et le JS inutilisé (~68 Kio) en chargeant les chunks au scroll.
 */
export default function LazyBelowFold() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "100px" });

  return (
    <div ref={ref} className="w-full">
      {inView ? (
        <>
          <OnlinePresence />
          <CustomerStories />
          <Blog />
          <Solutions />
        </>
      ) : (
        <div className="min-h-[1px]" aria-hidden />
      )}
    </div>
  );
}
