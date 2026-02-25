import { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "./components/home/hero";
import LazyBelowFold from "./components/home/LazyBelowFold";
import DeferUntilIdle from "./components/home/DeferUntilIdle";

const Brand = dynamic(() => import("./components/home/brand"), { ssr: true });
const WebResult = dynamic(() => import("./components/home/web-result"), { ssr: true });
const Innovation = dynamic(() => import("./components/home/innovation"), { ssr: true });

export const metadata: Metadata = {
    title: "Agence Web à Dakar - Création de Sites & Branding | Wintech",
    description:
        "Wintech, agence web à Dakar : création de sites modernes, branding et SEO. Boostez votre visibilité avec une équipe experte en solutions digitales.",
    keywords: [
        "Agence web à Dakar",
        "Création de site internet professionnel",
        "création de sites",
        "SEO",
        "branding",
        "solutions digitales",
    ],
    openGraph: {
        title: "Agence Web à Dakar - Création de Sites & SEO | Wintech",
        description:
            "Wintech, agence web à Dakar : création de sites modernes, branding et SEO. Boostez votre visibilité avec une équipe experte en solutions digitales.",
        type: "website",
    },
};


export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Brand logo section Starts-----------------  */}
      <Brand />
      {/* ---------------------Brand logo section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <WebResult />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <Innovation />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* Sections below the fold: JS chargé au scroll pour réduire le thread principal et le JS inutilisé */}
      <LazyBelowFold />

      {/* Sections masquées: JS chargé après requestIdleCallback */}
      <DeferUntilIdle />
    </main>
  )
}
