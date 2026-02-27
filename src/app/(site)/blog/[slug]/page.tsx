import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleContent from "@/app/components/blog/BlogArticleContent";
import { fetchFromWordPress } from "@/lib/wpClient";

const WP_ORIGIN = "https://backend-wintech.lindor.dev";

function ensureAbsoluteContentUrls(html: string): string {
  if (!html) return html;
  return html.replace(
    /(<img[^>]+src=["'])(\/[^"']*)(["'])/gi,
    (_, before, path, after) => `${before}${WP_ORIGIN}${path}${after}`
  );
}

type Props = { params: Promise<{ slug: string }> };

type WordPressPostResponse = {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt?: string | null;
    content?: string | null;
    seo?: {
      title?: string | null;
      metaDesc?: string | null;
    } | null;
    categories?: {
      nodes?: {
        name: string;
      }[];
    } | null;
    featuredImage?: {
      node?: {
        mediaItemUrl?: string | null;
        sourceUrl?: string | null;
        altText?: string | null;
      } | null;
    } | null;
  } | null;
};

async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        slug
        title
        date
        excerpt
        content
        seo {
          title
          metaDesc
        }
        featuredImage {
          node {
            mediaItemUrl
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
  `;

  const data = await fetchFromWordPress<WordPressPostResponse>(query, {
    slug,
  });

  if (!data.post) return null;

  return {
    slug: data.post.slug,
    image:
      data.post.featuredImage?.node?.sourceUrl ||
      data.post.featuredImage?.node?.mediaItemUrl ||
      "/images/home/customerStories/creativity_img.jpg",
    title: data.post.title,
    excerpt: data.post.excerpt || data.post.seo?.metaDesc || "",
    date: new Date(data.post.date).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    category:
      data.post.categories?.nodes && data.post.categories.nodes.length > 0
        ? data.post.categories.nodes[0].name
        : "Actualités",
    content: ensureAbsoluteContentUrls(data.post.content || ""),
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      return { title: "Article | Blog" };
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
      "https://wintech-sn.vercel.app";
    const imageUrl = post.image.startsWith("http")
      ? post.image
      : `${baseUrl}${post.image}`;

    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt,
        images: [imageUrl],
      },
    };
  } catch {
    return { title: "Article | Blog" };
  }
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);

  if (!article) notFound();

  return <BlogArticleContent article={article} />;
}

