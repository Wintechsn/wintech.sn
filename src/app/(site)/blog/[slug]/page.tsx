import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleContent from "@/app/components/blog/BlogArticleContent";
import type { ApprovedComment } from "@/app/components/blog/CommentList";
import { fetchFromWordPress } from "@/lib/wpClient";

const WP_ORIGIN =
  process.env.WORDPRESS_REST_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_REST_URL ||
  "https://backend-wintech.lindor.dev";

async function getApprovedComments(postId: number): Promise<ApprovedComment[]> {
  try {
    const url = `${WP_ORIGIN.replace(/\/$/, "")}/wp-json/wp/v2/comments?post=${postId}&per_page=100&order=asc`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((c: { id: number; author_name: string; date: string; content?: { rendered?: string } }) => ({
      id: c.id,
      author_name: c.author_name || "Anonyme",
      date: new Date(c.date).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      content:
        typeof c.content === "object" && c.content?.rendered
          ? c.content.rendered
          : typeof c.content === "string"
            ? c.content
            : "",
    }));
  } catch {
    return [];
  }
}

function ensureAbsoluteContentUrls(html: string): string {
  if (!html) return html;
  return html.replace(
    /(<img[^>]+src=["'])(\/[^"']*)(["'])/gi,
    (_, before, path, after) => `${before}${WP_ORIGIN}${path}${after}`
  );
}

function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

type Props = { params: Promise<{ slug: string }> };

type WordPressPostResponse = {
  post: {
    databaseId: number;
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
        databaseId
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
    postId: data.post.databaseId,
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

    const plainDescription = stripHtml(post.excerpt);

    return {
      title: post.title,
      description: plainDescription,
      openGraph: {
        title: post.title,
        description: plainDescription,
        type: "article",
        images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: plainDescription,
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

  const comments = await getApprovedComments(article.postId);

  return <BlogArticleContent article={article} comments={comments} />;
}

