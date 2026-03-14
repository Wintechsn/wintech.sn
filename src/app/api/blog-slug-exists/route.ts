import { NextResponse } from "next/server";
import { fetchFromWordPress } from "@/lib/wpClient";

type WordPressPostExistsResponse = {
  post: { databaseId: number } | null;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug || typeof slug !== "string") {
    return NextResponse.json({ exists: false }, { status: 400 });
  }

  try {
    const query = `
      query GetPostExistsBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          databaseId
        }
      }
    `;
    const data = await fetchFromWordPress<WordPressPostExistsResponse>(query, {
      slug,
    });

    if (data.post?.databaseId) {
      return NextResponse.json({ exists: true });
    }
    return NextResponse.json({ exists: false }, { status: 404 });
  } catch {
    return NextResponse.json({ exists: false }, { status: 404 });
  }
}
