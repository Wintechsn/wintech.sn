import { NextResponse } from "next/server";

const headerData = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Réalisations', href: '/realisations' },
    // { label: 'Équipe', href: '/#team' },
    // { label: 'Tarifs', href: '/#pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

const footerData = {
    brand: {
        name: "Wintech",
        tagline: "Agence web & digitale, créatrice de solutions sur mesure.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://www.linkedin.com/company/wintechsn"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://www.instagram.com/wintech.sn"
            },
            {
                icon: "/images/home/footerSocialIcon/facebook.svg",
                dark_icon: "/images/home/footerSocialIcon/facebook_dark.svg",
                link: "https://www.facebook.com/wintech.sn"
            }
        ]
    },
    sitemap: {
        name: "Plan du site",
        links: [
            { name: "Nous contacter", url: "/contact" },
            { name: "À propos", url: "/a-propos" },
            { name: "Réalisations", url: "/realisations" },
            { name: "Blog", url: "/blog" }
        ]
    },
    otherPages: {
        name: "Mentions légales",
        links: [
            { name: "Conditions générales", url: "/terms-and-conditions" },
            { name: "Politique de confidentialité", url: "/privacy-policy" },
        ]
    },
    contactDetails: {
        name:"Coordonnées",
        address: "Dakar, Sénégal",
        email: "Contact@wintech.sn",
        phone: "+221 77 589 3076"
    },
    copyright: "©2026 Wintech. Tous droits réservés."
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData
  });
};