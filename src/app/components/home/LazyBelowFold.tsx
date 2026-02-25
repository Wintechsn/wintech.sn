"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import dynamic from "next/dynamic";

const OnlinePresence = dynamic(() => import("./online-presence"), { ssr: true });
const CustomerStories = dynamic(() => import("./customer-stories"), { ssr: true });
const Blog = dynamic(() => import("./blog"), { ssr: true });
const Solutions = dynamic(() => import("./solution"), { ssr: true });

export default function LazyBelowFold() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "80px" });

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
