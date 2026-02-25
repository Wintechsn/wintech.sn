import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations - Agence Web & Digitale",
  description:
    "Découvrez les projets réalisés par Wintech : sites vitrines, e-commerce et solutions web sur mesure. Transformez vos idées en succès.",
  keywords: [
    "Réalisations Wintech",
    "projets web Wintech",
    "sites vitrines",
    "e-commerce",
    "solutions web sur mesure",
    "portfolio agence web",
  ],
  openGraph: {
    title: "Réalisations - Agence Web & Digitale",
    description:
      "Découvrez les projets réalisés par Wintech : sites vitrines, e-commerce et solutions web sur mesure. Transformez vos idées en succès.",
    type: "website",
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
