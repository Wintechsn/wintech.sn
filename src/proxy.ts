import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

/**
 * Redirection des anciennes URLs d'articles blog (avec catégorie) vers /blog/[slug].
 * Ex. /performance/seo-au-senegal → /blog/seo-au-senegal
 */
const BLOG_CATEGORY_SLUGS = new Set([
    'performance',
    'actualites',
    'news',
    'guides',
    'conseils',
    'tendances',
])

export async function proxy(request: NextRequest) {
    const url = request.nextUrl
    const segments = url.pathname.split('/').filter(Boolean)

    // Redirection anciennes URLs blog : /category/slug → /blog/slug
    if (segments.length === 2 && BLOG_CATEGORY_SLUGS.has(segments[0])) {
        const newUrl = request.nextUrl.clone()
        newUrl.pathname = `/blog/${segments[1]}`
        return NextResponse.redirect(newUrl, 301)
    }

    const token = await getToken({ req: request })

    if (token &&
        (
            url.pathname.startsWith('/signin') ||
            url.pathname.startsWith('/signup') ||
            url.pathname.startsWith('/forgot-password')
        )) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg)$).*)'],
}
