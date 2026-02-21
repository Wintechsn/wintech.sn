import { NextResponse } from "next/server";

const avatarList = [
  {
    image: "/images/home/avatar_1.webp",
    title: "Fabienne Sagna",
  },
  {
    image: "/images/home/avatar_2.webp",
    title: "Yankhoba Mané",
  },
  {
    image: "/images/home/avatar_3.webp",
    title: "Annick",
  },
  {
    image: "/images/home/avatar_4.webp",
    title: "Issa Ndiaye",
  },
  {
    image: "/images/home/avatar_5.webp",
    title: "Carmen Thiam",
  },
];

const brandList = [
  {
    image: "/images/home/brand/sonatel.png",
    darkImg: "/images/home/brand/sonatel-black.png",
    title: "Sonatel",
  },
  {
    image: "/images/home/brand/socodevi.png",
    darkImg: "/images/home/brand/socodevi-black.png",
    title: "Socodevi",
  },
  {
    image: "/images/home/brand/odc.png",
    darkImg: "/images/home/brand/odc-black.png",
    title: "ODC",
  },
  {
    image: "/images/home/brand/icf.png",
    darkImg: "/images/home/brand/icf-black.png",
    title: "ICF",
  },

  {
    image: "/images/home/brand/soubatech.png",
    darkImg: "/images/home/brand/soubatech-black.png",
    title: "Soubatech",
  },
  {
    image: "/images/home/brand/gsef.png",
    darkImg: "/images/home/brand/gsef-black.png",
    title: "GSEF",
  },
  {
    image: "/images/home/brand/sante.png",
    darkImg: "/images/home/brand/sante-black.png",
    title: "Ministère de la Santé",
  },
  {
    image: "/images/home/brand/ct.png",
    darkImg: "/images/home/brand/ct-black.png",
    title: "CT-consulting",
  },
 
];

const innovationList = [
  {
    icon: "SwatchBook",
    title: "Stratégie\n de marque",
    bg_color: "bg-purple-500/10",
    txt_color: "text-purple-500",
  },
  {
    icon: "Image",
    title: "Marketing\n digital",
    bg_color: "bg-sky-400/10",
    txt_color: "text-sky-400",
  },
  {
    icon: "WandSparkles",
    title: "Design\n UI/UX",
    bg_color: "bg-orange-400/10",
    txt_color: "text-orange-400",
  },
  {
    icon: "BarChart3",
    title: "Analyses &\n rapports",
    bg_color: "bg-lime-400/10",
    txt_color: "text-lime-400",
  },
  {
    icon: "AppWindowMac",
    title: "Développement\n web",
    bg_color: "bg-red-500/10",
    txt_color: "text-red-500",
  },
];

const onlinePresenceList = [
  {
    image: "/images/home/onlinePresence/online_img_1.jpg",
    title: "FlowBank",
    tag: ["Recherche UX", "Design d'interface"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_2.jpg",
    title: "Academy.co",
    tag: ["Design produit", "Design d'interaction"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_3.jpg",
    title: "Genome",
    tag: ["Identité de marque", "Recherche UX"],
    link: "https://www.wrappixel.com/",
  },
  {
    image: "/images/home/onlinePresence/online_img_4.jpg",
    title: "Hotto",
    tag: ["Storytelling visuel", "Design web et mobile"],
    link: "https://www.wrappixel.com/",
  },
];

const creativeMindList = [
  {
    image: "/images/home/creative/creative_img_1.png",
    name: "Logan Dang",
    position: "Développeur WordPress",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_2.png",
    name: "Ana Belić",
    position: "Spécialiste réseaux sociaux",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_3.png",
    name: "Brian Hanley",
    position: "Designer produit",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
  {
    image: "/images/home/creative/creative_img_4.png",
    name: "Darko Stanković",
    position: "Designer UI",
    twitterLink: "https://x.com/",
    linkedinLink: "https://in.linkedin.com/",
  },
];

const WebResultTagList = [
  {
    icon: "WandSparkles",
    title: "Créativité",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: "Zap",
    title: "Innovation",
    color: "bg-sky-400/10 text-sky-400",
  },
  {
    icon: "Target",
    title: "Stratégie",
    color: "bg-orange-400/10 text-orange-400",
  },
];

const statisticsCounter = [
  {
    title: "Projets réalisés",
    count: 100,
  },
  {
    title: "Années d'expérience",
    count: 8,
  },
  {
    title: "identités visuelles",
    count: 50,
  },
];

const startupPlanList = [
  {
    plan_bg_color: "bg-pale-yellow",
    text_color: "text-dark_black",
    descp_color: "dark_black/60",
    border_color: "bg-dark_black/10",
    plan_name: "Starter",
    plan_descp: "Pour les entreprises qui ont besoin d'un soutien design. Une demande à la fois",
    plan_price: "$2500",
    icon_img: "/images/home/startupPlan/white_tick.svg",
    plan_feature: [
      "Mises à jour design tous les 2 jours",
      "Designer niveau intermédiaire",
      "Optimisation SEO",
      "Analyses mensuelles",
      "2 appels par mois",
      "Ressources libres de droits",
    ],
  },
  {
    plan_bg_color: "bg-purple_blue",
    text_color: "text-white",
    descp_color: "white/60",
    border_color: "bg-white/10",
    plan_name: "Pro",
    plan_descp: "Vitesse x2. Idéal pour un MVP, une application web ou un projet complexe",
    plan_price: "$3800",
    icon_img: "/images/home/startupPlan/black_tick.svg",
    plan_feature: [
      "Mises à jour design quotidiennes",
      "Designer senior",
      "Cadre conseil IA",
      "Équipe créative complète",
      "4 appels par mois",
      "Ressources libres de droits",
    ],
  },
];

const faqList = [
  {
    faq_que: "Quels services l'agence Wintech propose-t-elle ?",
    faq_ans:
      "Oui, nous assurons un accompagnement après lancement pour une mise en œuvre fluide et proposons des forfaits de maintenance pour les clients ayant besoin de mises à jour ou d'assistance technique régulières.",
  },
  {
    faq_que: "Combien de temps dure un projet type ?",
    faq_ans:
      "Oui, nous assurons un accompagnement après lancement pour une mise en œuvre fluide et proposons des forfaits de maintenance pour les clients ayant besoin de mises à jour ou d'assistance technique régulières.",
  },
  {
    faq_que: "Comment sont structurés les tarifs chez Wintech ?",
    faq_ans:
      "Oui, nous assurons un accompagnement après lancement pour une mise en œuvre fluide et proposons des forfaits de maintenance pour les clients ayant besoin de mises à jour ou d'assistance technique régulières.",
  },
  {
    faq_que: "Proposez-vous un suivi après la livraison du projet ?",
    faq_ans:
      "Oui, nous assurons un accompagnement après lancement pour une mise en œuvre fluide et proposons des forfaits de maintenance pour les clients ayant besoin de mises à jour ou d'assistance technique régulières.",
  },
  {
    faq_que: "À quelle fréquence reçois-je des nouvelles sur mon projet ?",
    faq_ans:
      "Oui, nous assurons un accompagnement après lancement pour une mise en œuvre fluide et proposons des forfaits de maintenance pour les clients ayant besoin de mises à jour ou d'assistance technique régulières.",
  },
  {
    faq_que: "À quelle fréquence reçois-je des nouvelles sur mon projet ?",
    faq_ans:
      "Oui, nous assurons un accompagnement après lancement pour une mise en œuvre fluide et proposons des forfaits de maintenance pour les clients ayant besoin de mises à jour ou d'assistance technique régulières.",
  },
];

const achievementsList = [
  {
    icon: "/images/home/achievement/framer_award.svg",
    dark_icon: "/images/home/achievement/dark_framer_award.svg",
    sub_title: "Framer Awards",
    title:
      "Récompensé pour un design d'interaction avant-gardiste et des expériences utilisateur fluides.",
    year: "2024",
    url: "https://www.framer.com/@wrap-pixel/",
  },
  {
    icon: "/images/home/achievement/dribble_award.svg",
    dark_icon: "/images/home/achievement/dribble_award.svg",
    sub_title: "Dribbble Awards",
    title: "Reconnu pour l'excellence créative et des solutions de design innovantes",
    year: "2023",
    url: "https://dribbble.com/wrappixel",
  },
  {
    icon: "/images/home/achievement/awward_award.svg",
    dark_icon: "/images/home/achievement/dark_awward_award.svg",
    sub_title: "awwwards Awards",
    title:
      "Récompensé du meilleur design de site web pour la créativité, l'utilisabilité et l'innovation.",
    year: "2022",
    url: "https://www.framer.com/@wrap-pixel/",
  },
];

const blogList = [
  {
    slug: "design-ux-tendances-2025",
    image: "/images/home/customerStories/creativity_img.jpg",
    title: "Tendances UX et design en 2025",
    excerpt: "Découvrez les tendances qui façonneront l'expérience utilisateur et le design d'interfaces cette année.",
    date: "15 janvier 2025",
    category: "Design",
  },
  {
    slug: "innovation-marque-digitale",
    image: "/images/home/customerStories/customer_bg_img.jpg",
    title: "Innovation et stratégie de marque digitale",
    excerpt: "Comment aligner innovation produit et identité de marque pour une présence digitale cohérente.",
    date: "8 janvier 2025",
    category: "Stratégie",
  },
  {
    slug: "creativite-projets-transformation",
    image: "/images/home/creative/creative_img_1.png",
    title: "Créativité et transformation des projets",
    excerpt: "Le rôle du design et de la créativité dans la réussite des projets de transformation digitale.",
    date: "2 janvier 2025",
    category: "Actualités",
  },
];

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    statisticsCounter,
    startupPlanList,
    faqList,
    achievementsList,
    blogList,
  });
};
