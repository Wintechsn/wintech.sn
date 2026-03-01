'use client'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ article }: { article: any }) => {
  const { slug, image, title, excerpt, date, category } = article

  return (
    <Link href={`/blog/${slug}`} className="group flex flex-col gap-6">
      <div className="relative w-full overflow-hidden rounded-2xl aspect-[625/410] bg-dark_black/5 dark:bg-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h3 className="text-2xl font-medium group-hover:text-purple_blue transition-colors line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-3 text-sm text-dark_black/60 dark:text-white/60">
          <span>{category}</span>
          <span>·</span>
          <time dateTime={date}>{date}</time>
        </div>
        {excerpt && (
          <p className="text-muted-foreground text-sm line-clamp-2">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  )
}

export default BlogCard
