import { NextRequest, NextResponse } from "next/server";

const WP_REST_URL =
  process.env.WORDPRESS_REST_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_REST_URL ||
  "https://backend-wintech.lindor.dev";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId, author_name, author_email, content } = body;

    if (
      typeof postId !== "number" ||
      !author_name?.trim() ||
      !author_email?.trim() ||
      !content?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Champs requis manquants (postId, author_name, author_email, content)." },
        { status: 400 }
      );
    }

    const wpUrl = `${WP_REST_URL.replace(/\/$/, "")}/wp-json/wp/v2/comments`;
    const res = await fetch(wpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: postId,
        author_name: author_name.trim(),
        author_email: author_email.trim(),
        content: content.trim(),
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message =
        data?.message ||
        data?.code ||
        `WordPress a refusé le commentaire (${res.status})`;
      return NextResponse.json(
        { success: false, message: typeof message === "string" ? message : JSON.stringify(message) },
        { status: res.status >= 500 ? 502 : 400 }
      );
    }

    return NextResponse.json({ success: true, comment: data });
  } catch (error) {
    console.error("API comments error:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur lors de l'envoi du commentaire." },
      { status: 500 }
    );
  }
}
