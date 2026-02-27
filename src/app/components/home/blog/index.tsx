'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import BlogCard from './BlogCard'

function Blog() {
  const ref = useRef(null)
  const inView = useInView(ref)
  const [blogList, setBlogList] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data?blogLimit=3')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setBlogList(data?.blogList ?? [])
      } catch (error) {
        console.error('Error fetching blog:', error)
      }
    }
    fetchData()
  }, [])

  const animation = (index: number) => ({
    initial: { y: '10%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.2 + index * 0.15 },
  })

  return (
    <section id="blog">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-3xl text-center mx-auto">
              <h2>
                <TextGenerateEffect words="Découvrez notre" />
                <TextGenerateEffect
                  words="blog"
                  delay={1}
                  className="font-instrument-serif italic font-normal"
                />
              </h2>
              <p className="mt-6 text-dark_black/60 dark:text-white/60">
                Actualités, conseils et réflexions sur le design et l&apos;innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {blogList.map((article: any, index: number) => (
                <motion.div key={article.slug} {...animation(index)}>
                  <BlogCard article={article} />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
                nativeButton={false}
                render={<Link href="/blog" />}
              >
                <span className="relative z-10 transition-all duration-500">
                  Voir tous les articles
                </span>
                <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
