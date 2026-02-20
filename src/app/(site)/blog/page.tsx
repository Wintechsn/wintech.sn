"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import BlogCard from "@/app/components/home/blog/BlogCard";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
export default function BlogPage() {
  const [blogList, setBlogList] = useState<any[]>([]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setBlogList(data?.blogList ?? []);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchData();
  }, []);

  const animation = (index: number) => ({
    initial: { y: "10%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "10%", opacity: 0 },
    transition: { duration: 0.4, delay: index * 0.15 },
  });

  return (
    <main>
      <section className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="relative flex flex-col text-center items-center">
              <h2 className="font-medium w-full max-w-32">
                <TextGenerateEffect
                  words="Découvrez notre"
                  duration={0.5}
                />
                <TextGenerateEffect
                  words="blog"
                  delay={1.5}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>
            <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {blogList.map((article: any, index: number) => (
                <motion.div key={article.slug} {...animation(index)}>
                  <BlogCard article={article} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
