import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales | Wintech",
  description:
    "Conditions générales d'utilisation et de vente des services de l'agence web Wintech.",
};

const COORDONNEES = {
  nom: "Wintech",
  adresse: "Dakar, Sénégal",
  email: "Contact@wintech.sn",
  telephone: "+221 77 589 3076",
};

export default function Page() {
  return (
    <section>
      <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8">
            <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
              <h1 className="font-medium w-full md:text-6xl text-4xl">
                Conditions générales
              </h1>
            </div>
          </div>
          <div className="bg-white dark:bg-dark_black p-8 md:p-10 rounded-2xl mt-10 max-w-5xl mx-auto border border-border space-y-8 [&_h2]:mt-8 [&_h2]:mb-4">
            <p className="text-muted-foreground text-sm">
              Dernière mise à jour : février 2026
            </p>

            <div>
              <h2 className="text-xl font-semibold">1. Objet et champ d&apos;application</h2>
              <p>
                Les présentes conditions générales (« <span className="font-semibold">CG</span> ») régissent l&apos;utilisation du site internet de <span className="font-semibold">{COORDONNEES.nom}</span> ainsi que les prestations de services (création de sites web, applications, branding, SEO, etc.) proposées par l&apos;agence. En accédant au site ou en passant commande, le client accepte sans réserve les présentes CG. Tout devis ou bon de commande est soumis à ces conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">2. Identification du prestataire</h2>
              <p className="mb-2">
                Les services sont proposés par <span className="font-semibold">{COORDONNEES.nom}</span>, agence web &amp; digitale.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Siège : {COORDONNEES.adresse}</li>
                <li>Email : <a href={`mailto:${COORDONNEES.email}`} className="text-primary hover:underline">{COORDONNEES.email}</a></li>
                <li>Téléphone : <a href={`tel:${COORDONNEES.telephone.replace(/\s/g, "")}`} className="text-primary hover:underline">{COORDONNEES.telephone}</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">3. Services et devis</h2>
              <p>
                {COORDONNEES.nom} propose des prestations sur mesure (sites vitrines, e-commerce, applications web et mobiles, refonte, branding, SEO, etc.). Chaque mission fait l&apos;objet d&apos;un devis détaillé précisant le périmètre, les livrables, les délais et le prix. Le contrat est réputé conclu à la réception par {COORDONNEES.nom} du devis signé et, le cas échéant, d&apos;un acompte conformément au devis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">4. Prix et modalités de paiement</h2>
              <p>
                Les prix sont indiqués en devises convenues (FCFA, EUR ou autre) et hors taxes sauf mention contraire. Les modalités de paiement (acompte, échéancier, solde à la livraison) sont définies dans le devis. Les factures sont payables à réception selon les délais indiqués. En cas de retard de paiement, des pénalités pourront être appliquées et la poursuite des prestations suspendue jusqu&apos;à régularisation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. Délais et livraison</h2>
              <p>
                Les délais indiqués dans le devis sont donnés à titre indicatif et dans la mesure où le client fournit en temps utile les éléments demandés (textes, visuels, validations). Un retard ne peut donner lieu à annulation ou pénalités que s&apos;il a été formellement mis en demeure et non suivi d&apos;effet dans un délai raisonnable. La livraison est réalisée par remise des accès et des livrables convenus (fichiers, hébergement, etc.).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">6. Propriété intellectuelle</h2>
              <p>
                Les éléments créés par {COORDONNEES.nom} (maquettes, code, design sur mesure) sont cédés au client après paiement intégral des factures, dans le périmètre prévu au devis. Les logiciels, librairies et outils tiers restent soumis à leurs licences respectives. Les éléments fournis par le client (logos, textes, images) restent sa propriété ; le client garantit détenir les droits nécessaires pour leur utilisation dans le cadre du projet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">7. Obligations du client</h2>
              <p>
                Le client s&apos;engage à fournir les informations et contenus nécessaires dans les délais convenus, à répondre aux demandes de validation et à ne pas utiliser les livrables à des fins illicites ou contraires à l&apos;ordre public. En cas de manquement répété, {COORDONNEES.nom} pourra suspendre ou résilier la mission sans préjudice des sommes dues.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">8. Confidentialité et données personnelles</h2>
              <p>
                Les parties s&apos;engagent à garder confidentielles les informations échangées dans le cadre du projet. Le traitement des données personnelles est décrit dans la{" "}
                <a href="/politique-de-confidentialite" className="text-primary hover:underline">politique de confidentialité</a> du site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">9. Responsabilité et force majeure</h2>
              <p>
                La responsabilité de {COORDONNEES.nom} est limitée au montant des sommes effectivement perçues pour la mission en cause. {COORDONNEES.nom} ne peut être tenue responsable des dommages indirects (perte de chiffre d&apos;affaires, de données, etc.). En cas de force majeure (événement imprévisible et insurmontable), les obligations sont suspendues ; si la situation se prolonge, les parties pourront résilier le contrat à l&apos;amiable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">10. Résiliation et annulation</h2>
              <p>
                En cas d&apos;annulation par le client après démarrage des prestations, les travaux déjà réalisés et les dépenses engagées restent dus. Une annulation avant démarrage pourra donner lieu à des frais selon les termes du devis. {COORDONNEES.nom} peut résilier le contrat en cas de manquement grave du client (impayé, non-coopération) après mise en demeure restée sans effet.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">11. Modifications des conditions générales</h2>
              <p>
                {COORDONNEES.nom} se réserve le droit de modifier les présentes CG. Les conditions applicables sont celles en vigueur à la date de la commande ou de l&apos;acceptation du devis. Les modifications seront portées à la connaissance des clients (site, email) et pourront s&apos;appliquer aux contrats en cours sous réserve d&apos;information préalable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">12. Litiges et droit applicable</h2>
              <p>
                Le droit sénégalais est applicable. En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut, les tribunaux compétents seront ceux du siège de {COORDONNEES.nom} ({COORDONNEES.adresse}).
              </p>
            </div>

            <div className="border-t border-border">
              <h2 className="text-xl font-semibold">13. Contact</h2>
              <p>
                Pour toute question relative aux présentes conditions générales ou à nos services, vous pouvez nous contacter :
              </p>
              <ul className="list-none mt-3 space-y-1">
                <li><span className="font-medium">{COORDONNEES.nom}</span></li>
                <li>{COORDONNEES.adresse}</li>
                <li>Email : <a href={`mailto:${COORDONNEES.email}`} className="text-primary hover:underline">{COORDONNEES.email}</a></li>
                <li>Téléphone : <a href={`tel:${COORDONNEES.telephone.replace(/\s/g, "")}`} className="text-primary hover:underline">{COORDONNEES.telephone}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
