"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import ShareArticle from "./ShareArticle";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import type { ApprovedComment } from "./CommentList";

type Article = {
  postId: number;
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

type Props = {
  article: Article;
  comments?: ApprovedComment[];
};

export default function BlogArticleContent({ article, comments = [] }: Props) {
  const [titlePart1, titlePart2] = splitTitle(article.title);

  return (
    <main>
      <section className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="relative flex flex-col text-center items-center">
              <h1 className="font-medium w-full">
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
              <div
                className="text-lg text-dark_black/60 dark:text-white/60 mb-8 px-1 leading-relaxed [&>p]:mb-4 [&>p:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: article.excerpt }}
              />
              <div
                className="article-content prose prose-neutral dark:prose-invert max-w-none overflow-x-auto text-dark_black/80 dark:text-white/80 [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-4xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-2xl [&_h3]:font-semibold [&_h4]:mt-6 [&_h4]:mb-2 [&_h4]:text-xl [&_h4]:font-semibold [&_p]:mt-3 [&_p]:mb-6 [&_li]:my-2 [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:border [&_table]:border-dark_black/20 [&_table]:dark:border-white/20 [&_th]:border-b [&_th]:border-r [&_th]:border-dark_black/20 [&_th]:dark:border-white/20 [&_th]:last:border-r-0 [&_th]:px-4 [&_th]:py-3 [&_th]:bg-dark_black/10 [&_th]:dark:bg-white/10 [&_th]:text-left [&_th]:font-semibold [&_td]:border-b [&_td]:border-r [&_td]:border-dark_black/15 [&_td]:dark:border-white/15 [&_td]:last:border-r-0 [&_td]:px-4 [&_td]:py-3 [&_tr:last-child_td]:border-b-0 [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-purple_blue [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:pr-6 [&_blockquote]:rounded-r-xl [&_blockquote]:bg-dark_black/5 [&_blockquote]:dark:bg-white/5 [&_blockquote]:italic [&_blockquote]:text-lg [&_blockquote_p]:my-0 [&_blockquote_p]:mb-2 [&_blockquote_p:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <ShareArticle title={article.title} slug={article.slug} />
              <CommentList comments={comments} />
              <CommentForm postId={article.postId} articleTitle={article.title} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA bannière */}
      <section>
        <div className="2xl:py-20 py-11">
          <div className="container">
            <div className="py-16 md:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)]">
              <div className="flex flex-col gap-6 items-center md:max-w-3xl mx-auto">
                <div className="flex flex-col gap-3 items-center text-center">
                  <h2 className="text-3xl md:text-5xl text-black dark:text-black">
                    <TextGenerateEffect words="Des solutions innovantes pour des " />
                    <TextGenerateEffect
                      words="marques audacieuses"
                      delay={0.5}
                      className="font-instrument-serif italic font-normal text-black"
                    />
                  </h2>
                  <p className="text-black/80 dark:text-black/80">
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
