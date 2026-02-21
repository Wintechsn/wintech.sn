import { NextResponse } from "next/server";

const headerData = [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Services', href: '/services' },
    { label: 'Réalisations', href: '/realisations' },
    // { label: 'Équipe', href: '/#team' },
    // { label: 'Tarifs', href: '/#pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

const footerData = {
    brand: {
        name: "Wintech",
        tagline: "Donnons du pouvoir aux entreprises avec des solutions innovantes. Créons ensemble quelque chose d'exceptionnel.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://linkedin.com/in"
            },
            {
                icon: "/images/home/footerSocialIcon/facebook.svg",
                dark_icon: "/images/home/footerSocialIcon/facebook_dark.svg",
                link: "https://facebook.com"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://instagram.com"
            }
        ]
    },
    sitemap: {
        name: "Plan du site",
        links: [
            { name: "Nous contacter", url: "/contact" },
            { name: "À propos", url: "/a-propos" },
            { name: "Réalisations", url: "/realisations" },
            { name: "Services", url: "/services" },
            { name: "Tarifs", url: "/#pricing" },
            { name: "Blog", url: "/blog" }
        ]
    },
    otherPages: {
        name: "Autres pages",
        links: [
            { name: "Erreur 404", url: "/not-found" },
            { name: "Conditions générales", url: "/terms-and-conditions" },
            { name: "Politique de confidentialité", url: "/privacy-policy" },
            { name: "Documentation", url: "/documentation" }
        ]
    },
    contactDetails: {
        name:"Coordonnées",
        address: "81 Rivington Street London EC2A 3AY",
        email: "hello@wintech.com",
        phone: "0105 192 3556"
    },
    copyright: "©2025 Wintech. Tous droits réservés."
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData
  });
};