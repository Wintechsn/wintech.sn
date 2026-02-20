"use client";

import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import OnlinePresence from "@/app/components/home/online-presence";

export default function RealisationsPage() {
  return (
    <main>
      <section className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="relative flex flex-col text-center items-center">
              <h2 className="font-medium w-full max-w-32">
                <TextGenerateEffect words="Nos" duration={0.5} />
                <TextGenerateEffect
                  words="réalisations"
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>
          </div>
        </div>
      </section>
      <OnlinePresence showTitle={false} />
    </main>
  );
}
