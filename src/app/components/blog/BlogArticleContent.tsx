"use client";

import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

type Article = {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
};

function splitTitle(title: string): [string, string] {
  const words = title.split(" ");
  if (words.length <= 3) return [title, ""];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export default function BlogArticleContent({ article }: { article: Article }) {
  const [titlePart1, titlePart2] = splitTitle(article.title);

  return (
    <main>
      <section className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10 md:gap-20">
            <Link
              href="/blog"
              className="inline-flex text-sm text-dark_black/60 dark:text-white/60 hover:text-dark_black dark:hover:text-white w-fit"
            >
              ← Retour au blog
            </Link>
            <div className="relative flex flex-col text-center items-center">
              <h1 className="font-medium w-full max-w-l">
                <TextGenerateEffect words={titlePart1} duration={0.5} />
                {titlePart2 ? (
                  <TextGenerateEffect
                    words={titlePart2}
                    delay={1.2}
                    className="italic font-normal instrument-font"
                  />
                ) : null}
              </h1>
            </div>
            <div className="max-w-3xl mx-auto w-full">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-8 bg-dark_black/5 dark:bg-white/5">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center gap-3 text-sm text-dark_black/60 dark:text-white/60 mb-4">
                <span>{article.category}</span>
                <span>·</span>
                <time dateTime={article.date}>{article.date}</time>
              </div>
              <p className="text-lg text-dark_black/60 dark:text-white/60 mb-8">
                {article.excerpt}
              </p>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-dark_black/80 dark:text-white/80">
                <p>{article.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
