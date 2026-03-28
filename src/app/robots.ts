import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

const NO_INDEX_PATHS = [
  "/documentation",
  "/signin",
  "/signup",
  "/forgot-password",
  "/sevice"
];

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: NO_INDEX_PATHS,
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
