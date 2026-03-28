import type { MetadataRoute } from "next";
import { getResolvedSiteUrl } from "@/lib/siteUrl";

const NO_INDEX_PATHS = [
  "/documentation",
  "/signin",
  "/signup",
  "/forgot-password",
  "/service",
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const base = await getResolvedSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: NO_INDEX_PATHS,
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
