import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Agence Awake",
  description:
    "Actualités, conseils et réflexions sur le design et l'innovation.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
