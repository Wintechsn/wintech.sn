"use client";

import Link from "next/link";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import OnlinePresence from "@/app/components/home/online-presence";

export default function RealisationsPage() {
  return (
    <main>
      <section className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8">
            <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
              <h1 className="font-medium w-full">
                <TextGenerateEffect words="Nos réalisations " duration={0.5} />
                <TextGenerateEffect
                  words="parlent d'elles-mêmes"
                  delay={0.8}
                  className="italic font-normal instrument-font"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
      <OnlinePresence showTitle={false} />

      {/* CTA bannière */}
      <section>
        <div className="2xl:py-20 py-11">
          <div className="container">
            <div className="py-16 md:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)]">
              <div className="flex flex-col gap-6 items-center md:max-w-3xl mx-auto">
                <div className="flex flex-col gap-3 items-center text-center">
                  <h2 className="text-3xl md:text-5xl text-black">
                    <TextGenerateEffect words="Des solutions innovantes pour des " />
                    <TextGenerateEffect
                      words="marques audacieuses"
                      delay={0.5}
                      className="font-instrument-serif italic font-normal text-black"
                    />
                  </h2>
                  <p className="text-black/80">
                    Vous souhaitez donner un coup d&apos;éclat à votre marque ? Nous créons des expériences immersives qui captivent, engagent et rendent votre entreprise inoubliable à chaque interaction.
                  </p>
                </div>
                <Button
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden bg-black hover:bg-black"
                  nativeButton={false}
                  render={<Link href="/contact" />}
                >
                  <span className="relative z-10 transition-all duration-500 text-white">
                    Collaborons
                  </span>
                  <div className="absolute right-1 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
