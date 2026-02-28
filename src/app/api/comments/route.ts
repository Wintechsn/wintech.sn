import { NextRequest, NextResponse } from "next/server";

const WP_ORIGIN =
  process.env.WORDPRESS_REST_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_REST_URL ||
  "https://backend-wintech.lindor.dev";

/**
 * Envoi du commentaire via le formulaire classique WordPress (wp-comments-post.php)
 * pour respecter les réglages Discussion (commentaires anonymes, modération, etc.)
 * au lieu de l'API REST qui exige souvent une connexion.
 */
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

    const baseUrl = WP_ORIGIN.replace(/\/$/, "");
    const wpCommentUrl = `${baseUrl}/wp-comments-post.php`;

    const formData = new URLSearchParams();
    formData.set("comment_post_ID", String(postId));
    formData.set("author", author_name.trim());
    formData.set("email", author_email.trim());
    formData.set("comment", content.trim());
    formData.set("url", "");

    const res = await fetch(wpCommentUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Wintech-Comment-Form/1.0",
      },
      body: formData.toString(),
      redirect: "follow",
    });

    const html = await res.text();

    const hasErrorInHtml =
      html.includes("id=\"error\"") ||
      html.includes("class=\"error\"") ||
      /sorry, you must be logged in/i.test(html) ||
      /vous devez être connecté/i.test(html) ||
      /duplicate comment/i.test(html);

    if (!res.ok || hasErrorInHtml) {
      const message =
        /sorry, you must be logged in|vous devez être connecté/i.test(html)
          ? "WordPress exige une connexion pour commenter. Utilisez le formulaire classique du site WordPress pour cet article."
          : "Le commentaire n'a pas pu être enregistré. Vérifiez que les commentaires sont autorisés pour cet article.";
      return NextResponse.json(
        { success: false, message },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API comments error:", error);
    return NextResponse.json(
      { success: false, message: "Erreur serveur lors de l'envoi du commentaire." },
      { status: 500 }
    );
  }
}
