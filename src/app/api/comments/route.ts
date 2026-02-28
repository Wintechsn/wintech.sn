import { NextRequest, NextResponse } from "next/server";

const WP_REST_URL =
  process.env.WORDPRESS_REST_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_REST_URL ||
  "https://backend-wintech.lindor.dev";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postId: rawPostId, author_name, author_email, content } = body;

    const postId = typeof rawPostId === "string" ? parseInt(rawPostId, 10) : Number(rawPostId);
    if (!Number.isFinite(postId) || postId < 1) {
      return NextResponse.json(
        { success: false, message: "Article invalide (postId manquant ou incorrect)." },
        { status: 400 }
      );
    }
    if (!author_name?.trim() || !author_email?.trim() || !content?.trim()) {
      return NextResponse.json(
        { success: false, message: "Tous les champs (nom, e-mail, commentaire) sont obligatoires." },
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

    const contentType = res.headers.get("content-type") || "";
    const data = contentType.includes("application/json")
      ? await res.json().catch(() => ({}))
      : {};

    if (!res.ok) {
      const message =
        data?.message ||
        (typeof data?.code === "string" ? data.code : null) ||
        `WordPress a refusé le commentaire (${res.status}). Vérifiez que les commentaires sont autorisés pour cet article.`;
      return NextResponse.json(
        { success: false, message },
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
