"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";

function OnlinePresence({
  showTitle = true,
  useAllProjects = false,
  limit,
  showViewMore = false,
}: {
  showTitle?: boolean;
  /** Si true, affiche tous les projets (ex. page Réalisations). Si false, uniquement ceux avec afficherDansLaPageDaccueil (accueil). */
  useAllProjects?: boolean;
  /** Limite le nombre de projets affichés (ex. 4 sur l'accueil). */
  limit?: number;
  /** Affiche un bouton "Voir plus" vers /realisations. */
  showViewMore?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [projectList, setProjectList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setProjectList(
          useAllProjects ? data?.allProjectsList : data?.onlinePresenceList
        );
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, [useAllProjects]);

  const bottomAnimation = (index: number) => ({
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
    transition: { duration: 0.8, delay: 0.4 + index * 0.2 },
  });

  return (
    <section id="work">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            {showTitle && (
              <div className="max-w-2xl text-center">
                <h2>
                  <TextGenerateEffect
                    words="Découvrez comment nous transformons des projets en"
                    duration={0.5}
                  />
                  <TextGenerateEffect
                    words="réussites digitales."
                    delay={1.2}
                    className="italic font-normal instrument-font"
                  />
                </h2>
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8 w-full">
              {(limit ? projectList?.slice(0, limit) : projectList)?.map((items: any, index: number) => (
                <motion.div
                  key={index}
                  className="group flex flex-col gap-6 cursor-pointer"
                  {...bottomAnimation(index)}
                >
                  <div className="relative">
                    <Image
                      src={items.image}
                      alt={items.altText ?? items.title}
                      width={625}
                      height={410}
                      className="rounded-2xl"
                    />
                    {items.link && (
                    <Link
                      href={items.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl hidden group-hover:flex"
                    >
                      <span className="flex justify-end p-5 w-full">
                        <Icon
                          icon="icon-park-solid:circle-right-up"
                          width="50"
                          height="50"
                          style={{ color: "#fbfbfb" }}
                        />
                      </span>
                    </Link>
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-4">
                    <h3 className="group-hover:text-purple_blue text-2xl">
                      {items.title}
                    </h3>
                    <div className="flex gap-3">
                      {items.tag?.length ? items.tag.map((tag: string, idx: number) => (
                        <p
                          key={idx}
                          className="text-sm border border-border w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white"
                        >
                          {tag}
                        </p>
                      )) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {showViewMore && projectList && projectList.length > 0 && (
              <motion.div
                className="flex justify-center mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
                  nativeButton={false}
                  render={<Link href="/realisations" />}
                >
                  <span className="relative z-10 transition-all duration-500">
                    Voir plus de projets
                  </span>
                  <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlinePresence;
