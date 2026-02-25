import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos - Agence Web & Digitale",
  description:
    "Wintech est une agence web à Dakar spécialisée dans la création de sites internet professionnels. Notre mission : accompagner les entreprises dans leur transformation digitale.",
  keywords: [
    "À propos de Wintech",
    "Agence web au Sénégal",
    "agence web Dakar",
    "création de sites internet professionnels",
    "transformation digitale",
  ],
  openGraph: {
    title: "À propos - Agence Web & Digitale",
    description:
      "Wintech est une agence web à Dakar spécialisée dans la création de sites internet professionnels. Notre mission : accompagner les entreprises dans leur transformation digitale.",
    type: "website",
  },
};

export default function AProposLayout(props: { children: React.ReactNode }) {
  return <>{props.children}</>;
}
