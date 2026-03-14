import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

/**
 * Routes du site (premier segment). On ne redirige pas ces URLs.
 * Redirection /category/slug → /blog/slug uniquement si le slug correspond à un article existant.
 */
const FIRST_SEGMENT_APP_ROUTES = new Set([
    'blog',
    'contact',
    'a-propos',
    'realisations',
    'conditions-generales',
    'politique-de-confidentialite',
    'privacy-policy',
    'terms-and-conditions',
    'documentation',
    'signin',
    'signup',
    'forgot-password',
])

export async function proxy(request: NextRequest) {
    const url = request.nextUrl
    const segments = url.pathname.split('/').filter(Boolean)

    // Anciennes URLs blog : /category/slug → /blog/slug seulement si le slug existe
    if (
        segments.length === 2 &&
        !FIRST_SEGMENT_APP_ROUTES.has(segments[0])
    ) {
        const slug = segments[1]
        const origin = new URL(request.url).origin
        try {
            const res = await fetch(
                `${origin}/api/blog-slug-exists?slug=${encodeURIComponent(slug)}`
            )
            if (res.ok) {
                const newUrl = request.nextUrl.clone()
                newUrl.pathname = `/blog/${slug}`
                return NextResponse.redirect(newUrl, 301)
            }
        } catch {
            // en cas d'erreur, ne pas rediriger
        }
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
