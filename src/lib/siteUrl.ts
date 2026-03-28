import { headers } from "next/headers";

/**
 * URL synchrone (metadata, etc.) — préfère la variable d’environnement.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "").trim();
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_ENV === "production") return "https://wintech.sn";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://wintech.sn";
}

/**
 * Pour sitemap.xml et robots.txt : évite les URLs *.vercel.app en production
 * quand la requête arrive sur le domaine canonique ou que la prod Vercel n’expose pas NEXT_PUBLIC_* au runtime.
 */
export async function getResolvedSiteUrl(): Promise<string> {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "").trim();
  if (fromEnv) return fromEnv;

  if (process.env.VERCEL_ENV === "production") {
    return "https://wintech.sn";
  }

  const h = await headers();
  const forwarded = h.get("x-forwarded-host");
  const host = (forwarded?.split(",")[0]?.trim() || h.get("host") || "").replace(
    /:\d+$/,
    "",
  );
  const proto =
    h.get("x-forwarded-proto")?.split(",")[0]?.trim() || "https";

  if (host === "wintech.sn" || host === "www.wintech.sn") {
    return `${proto}://${host}`;
  }

  if (host && !host.endsWith(".vercel.app")) {
    return `${proto}://${host}`;
  }

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://wintech.sn";
}
