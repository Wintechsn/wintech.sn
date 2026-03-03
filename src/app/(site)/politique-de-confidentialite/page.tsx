import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Wintech",
  description:
    "Politique de confidentialité et protection des données personnelles de l'agence web Wintech.",
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
      <div className="relative w-full pt-24 md:pt-36 lg:pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8">
            <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
              <h1 className="font-medium w-full md:text-6xl text-4xl">
                Politique de confidentialité
              </h1>
            </div>
          </div>
          <div className="bg-white dark:bg-dark_black p-8 md:p-10 rounded-2xl mt-10 max-w-5xl mx-auto border border-border space-y-8 [&_h2]:mt-8 [&_h2]:mb-4">
            <p className="text-muted-foreground text-sm">
              Dernière mise à jour : février 2026
            </p>

            <div>
              <h2 className="text-xl font-semibold">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles collectées via le site et dans le cadre de nos prestations est <span className="font-semibold">{COORDONNEES.nom}</span>, agence web &amp; digitale.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-muted-foreground">
                <li>Siège : {COORDONNEES.adresse}</li>
                <li>Email : <a href={`mailto:${COORDONNEES.email}`} className="text-primary hover:underline">{COORDONNEES.email}</a></li>
                <li>Téléphone : <a href={`tel:${COORDONNEES.telephone.replace(/\s/g, "")}`} className="text-primary hover:underline">{COORDONNEES.telephone}</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold">2. Données collectées</h2>
              <p>
                Nous sommes susceptibles de collecter les données suivantes :
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li><strong>Formulaire de contact et demandes de devis :</strong> nom, prénom, adresse email, numéro de téléphone, nom de l&apos;entreprise, message et toute information que vous choisissez de nous communiquer.</li>
                <li><strong>Navigation sur le site :</strong> adresse IP, type de navigateur, pages visitées, date et heure de connexion, données techniques (cookies, identifiants de session) dans le cadre de l&apos;utilisation du site.</li>
                <li><strong>Projets et prestations :</strong> dans le cadre des missions (sites web, applications, etc.), les données nécessaires à l&apos;exécution du contrat et à la facturation (coordonnées, contenus fournis, échanges).</li>
              </ul>
              <p className="mt-4">
                Nous ne collectons pas de données de paiement (carte bancaire, etc.) ; les paiements sont gérés par des prestataires tiers dont les politiques de confidentialité s&apos;appliquent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">3. Finalités et bases légales</h2>
              <p>
                Les données sont traitées pour : répondre à vos demandes de contact et de devis ; exécuter les contrats et prestations ; gérer la relation client et la facturation ; améliorer nos services et le site ; respecter nos obligations légales. Les traitements reposent sur votre consentement (formulaire de contact, cookies lorsque requis), l&apos;exécution d&apos;un contrat ou nos intérêts légitimes (sécurité, statistiques de visite).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">4. Durée de conservation</h2>
              <p>
                Les données de contact et de prospection sont conservées pendant la durée de la relation commerciale puis, le cas échéant, pendant les délais de prescription légale. Les données de facturation sont conservées selon les obligations comptables et fiscales. Les données de navigation et cookies sont conservées conformément aux paramètres des outils utilisés (voir section Cookies). Au-delà, les données sont supprimées ou anonymisées.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">5. Destinataires et transferts</h2>
              <p>
                Les données sont destinées aux personnes habilitées au sein de {COORDONNEES.nom} et, le cas échéant, à des sous-traitants (hébergement, outils d&apos;emailing, analytics) qui sont soumis à des obligations de confidentialité et de sécurité. Nous ne vendons pas vos données. En cas de transfert hors de l&apos;Union européenne ou du Sénégal, des garanties appropriées sont mises en place (clauses types, etc.) conformément à la réglementation applicable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">6. Vos droits</h2>
              <p>
                Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et, le cas échéant, de portabilité de vos données, ainsi que d&apos;un droit de limitation ou d&apos;opposition au traitement. Pour les traitements fondés sur le consentement (ex. cookies, newsletter), vous pouvez retirer votre consentement à tout moment. Pour exercer ces droits ou pour toute question, contactez-nous à l&apos;adresse <a href={`mailto:${COORDONNEES.email}`} className="text-primary hover:underline">{COORDONNEES.email}</a>. Vous avez également le droit d&apos;introduire une réclamation auprès de l&apos;autorité de contrôle compétente (CNIL pour les résidents français, autorité de protection des données du Sénégal ou de votre pays de résidence).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">7. Cookies et traceurs</h2>
              <p>
                Le site peut utiliser des cookies et traceurs pour le fonctionnement technique (session, préférences), la mesure d&apos;audience et l&apos;analyse d&apos;usage. Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies ; certaines fonctionnalités du site pourraient en être affectées. Les cookies strictement nécessaires au fonctionnement peuvent être déposés sans consentement préalable ; les autres (analytics, etc.) sont soumis à votre choix lorsque la loi l&apos;exige.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">8. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées (accès limité, protocoles sécurisés, hébergement fiable) pour protéger vos données contre l&apos;accès non autorisé, la perte ou l&apos;altération. La transmission des données sur Internet n&apos;étant pas totalement sécurisée, nous vous invitons à ne pas communiquer d&apos;informations sensibles par des canaux non sécurisés.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">9. Liens vers d&apos;autres sites</h2>
              <p>
                Le site peut contenir des liens vers des sites tiers (réseaux sociaux, partenaires, références). Les pratiques de ces sites et leur politique de confidentialité ne relèvent pas de notre responsabilité. Nous vous encourageons à consulter leurs conditions d&apos;utilisation et de confidentialité.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">10. Modifications</h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité pour refléter les évolutions de nos pratiques ou de la réglementation. La date de dernière mise à jour est indiquée en tête de page. Nous vous invitons à la consulter régulièrement. Les modifications importantes pourront vous être signalées par tout moyen approprié (message sur le site, email si disponible).
              </p>
            </div>

            <div className="border-t border-border">
              <h2 className="text-xl font-semibold">11. Contact</h2>
              <p>
                Pour toute question relative à cette politique de confidentialité ou à vos données personnelles :
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
