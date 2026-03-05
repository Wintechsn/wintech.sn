import { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "./components/home/hero";

const Brand = dynamic(() => import("./components/home/brand"), { ssr: true });
const WebResult = dynamic(() => import("./components/home/web-result"), { ssr: true });
const Innovation = dynamic(() => import("./components/home/innovation"), { ssr: true });
const OnlinePresence = dynamic(() => import("./components/home/online-presence"), { ssr: true });
const CreativeMind = dynamic(() => import("./components/home/creative-mind"), { ssr: true });
const CustomerStories = dynamic(() => import("./components/home/customer-stories"), { ssr: true });
const Subscription = dynamic(() => import("./components/home/subscription"), { ssr: true });
const Blog = dynamic(() => import("./components/home/blog"), { ssr: true });
const Solutions = dynamic(() => import("./components/home/solution"), { ssr: true });

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

      {/* ---------------------Online presence section Starts-----------------  */}
      <OnlinePresence limit={4} showViewMore />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts (masquée)-----------------  */}
      <div className="hidden" aria-hidden>
        <CreativeMind />
      </div>
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStories />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      {/* ---------------------Subscription section Starts (masquée)-----------------  */}
      <div className="hidden" aria-hidden>
        <Subscription />
      </div>
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Blog section Starts-----------------  */}
      <Blog />
      {/* ---------------------Blog section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <Solutions />
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  )
}
