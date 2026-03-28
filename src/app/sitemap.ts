import type { MetadataRoute } from "next";
import { fetchFromWordPress } from "@/lib/wpClient";
import { getSiteUrl } from "@/lib/siteUrl";

export const revalidate = 3600;

const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/a-propos", changeFrequency: "monthly", priority: 0.8 },
  { path: "/realisations", changeFrequency: "weekly", priority: 0.9 },
  { path: "/blog", changeFrequency: "daily", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/conditions-generales", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politique-de-confidentialite", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
];

type PostsForSitemapResponse = {
  posts: {
    nodes: { slug: string; date: string }[];
  };
};

async function getPostEntriesForSitemap(): Promise<MetadataRoute.Sitemap> {
  const first = 100;
  const query = `
    query GetPostsForSitemap($first: Int) {
      posts(first: $first) {
        nodes {
          slug
          date
        }
      }
    }
  `;

  try {
    const data = await fetchFromWordPress<PostsForSitemapResponse>(query, { first });
    const base = getSiteUrl();
    return data.posts.nodes.map((post) => {
      const lastModified = post.date ? new Date(post.date) : new Date();
      return {
        url: `${base}/blog/${post.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    changeFrequency,
    priority,
  }));

  const blogPosts = await getPostEntriesForSitemap();

  return [...staticEntries, ...blogPosts];
}
