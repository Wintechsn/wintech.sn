import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleContent from "@/app/components/blog/BlogArticleContent";

const blogList = [
  {
    slug: "design-ux-tendances-2025",
    image: "/images/home/customerStories/creativity_img.jpg",
    title: "Tendances UX et design en 2025",
    excerpt:
      "Découvrez les tendances qui façonneront l'expérience utilisateur et le design d'interfaces cette année.",
    date: "15 janvier 2025",
    category: "Design",
    content:
      "Les tendances UX 2025 mettent l'accent sur l'accessibilité, les interfaces minimalistes et les expériences personnalisées. Le design centré sur l'humain reste au cœur de nos pratiques.",
  },
  {
    slug: "innovation-marque-digitale",
    image: "/images/home/customerStories/customer_bg_img.jpg",
    title: "Innovation et stratégie de marque digitale",
    excerpt:
      "Comment aligner innovation produit et identité de marque pour une présence digitale cohérente.",
    date: "8 janvier 2025",
    category: "Stratégie",
    content:
      "Une stratégie de marque digitale efficace repose sur la cohérence entre l'identité visuelle, le ton de voix et l'expérience utilisateur. L'innovation doit servir la marque, et non l'inverse.",
  },
  {
    slug: "creativite-projets-transformation",
    image: "/images/home/creative/creative_img_1.png",
    title: "Créativité et transformation des projets",
    excerpt:
      "Le rôle du design et de la créativité dans la réussite des projets de transformation digitale.",
    date: "2 janvier 2025",
    category: "Actualités",
    content:
      "La créativité et le design thinking sont des leviers essentiels pour accompagner les projets de transformation. Ils permettent d'impliquer les équipes et d'imaginer des solutions adaptées.",
  },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogList.find((a) => a.slug === slug);
  if (!article) return { title: "Article | Blog" };
  return { title: `${article.title} | Blog` };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = blogList.find((a) => a.slug === slug);
  if (!article) notFound();

  return <BlogArticleContent article={article} />;
}
