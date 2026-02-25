'use client'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ article }: { article: any }) => {
  const { slug, image, title, excerpt, date, category } = article

  return (
    <Link href={`/blog/${slug}`}>
      <article className="group flex flex-col border border-dark_black/10 dark:border-white/10 rounded-2xl overflow-hidden dark:bg-white/5 hover:border-dark_black/20 dark:hover:border-white/20 transition-colors">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-dark_black/5 dark:bg-white/5">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
          />
        </div>
        <div className="flex flex-col gap-3 p-6 2xl:p-8">
          <div className="flex items-center gap-3 text-sm text-dark_black/60 dark:text-white/60">
            <span>{category}</span>
            <span>·</span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="text-xl font-medium group-hover:text-purple_blue transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-dark_black/60 dark:text-white/60 text-sm line-clamp-2">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard
