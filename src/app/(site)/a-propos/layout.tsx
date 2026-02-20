import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Agence Awake",
  description: "Découvrez notre histoire, notre équipe et notre vision.",
};

export default function AProposLayout(props: { children: React.ReactNode }) {
  return <>{props.children}</>;
}
