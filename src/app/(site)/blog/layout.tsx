import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Agence Web & Digitale",
  description:
    "Découvrez le blog de Wintech, agence web à Dakar : guides pratiques, conseils en création de sites internet, e-commerce, SEO et transformation digitale au Sénégal.",
  keywords: [
    "Blog Wintech",
    "Conseils création de site web",
    "agence web Dakar",
    "création de sites internet",
    "e-commerce",
    "SEO",
    "transformation digitale Sénégal",
  ],
  openGraph: {
    title: "Blog - Agence Web & Digitale",
    description:
      "Découvrez le blog de Wintech, agence web à Dakar : guides pratiques, conseils en création de sites internet, e-commerce, SEO et transformation digitale au Sénégal.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
