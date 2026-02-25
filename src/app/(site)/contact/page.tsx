
import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - Agence Web & Digitale",
    description:
        "Besoin d'un site internet professionnel ? Contactez Wintech. Demandez un devis gratuit et discutons de votre projet digital dès aujourd'hui.",
    keywords: [
        "Contactez Wintech",
        "Demandez un devis",
        "devis site internet gratuit",
        "projet digital",
        "agence web Dakar",
    ],
    openGraph: {
        title: "Contact - Agence Web & Digitale",
        description:
            "Besoin d'un site internet professionnel ? Contactez Wintech. Demandez un devis gratuit et discutons de votre projet digital dès aujourd'hui.",
        type: "website",
    },
};

export default function Page() {
    return (
        <main>
            <ContactForm/>
            <Faq/>
        </main>
    );
};
