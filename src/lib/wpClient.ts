const WP_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL ||
  process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL ||
  "https://backend-wintech.lindor.dev/graphql";

type GraphQLError = {
  message: string;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLError[];
};

export async function fetchFromWordPress<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    // Cache côté Next (revalidation possible si besoin)
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(
      `WordPress GraphQL request failed with status ${res.status}`
    );
  }

  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors && json.errors.length > 0) {
    throw new Error(json.errors.map((e) => e.message).join(" | "));
  }

  if (!json.data) {
    throw new Error("WordPress GraphQL response has no data");
  }

  return json.data;
}

