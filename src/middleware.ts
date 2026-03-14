import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirection des anciennes URLs d'articles blog (avec catégorie) vers /blog/[slug].
 * Ex. /performance/seo-au-senegal → /blog/seo-au-senegal
 * Uniquement pour les catégories de blog connues (ajouter ici les slugs de catégories WordPress).
 */
const BLOG_CATEGORY_SLUGS = new Set([
  "performance",
  "actualites",
  "news",
  "guides",
  "conseils",
  "tendances",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  // Format /category/slug (exactement 2 segments)
  if (segments.length !== 2) {
    return NextResponse.next();
  }

  const [category, slug] = segments;

  // Redirection uniquement si le premier segment est une catégorie de blog
  if (!BLOG_CATEGORY_SLUGS.has(category)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/blog/${slug}`;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg)$).*)"],
};
