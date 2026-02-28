"use client";

import Link from "next/link";
import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "motion/react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  PlusIcon,
  ArrowUpRight,
  Globe,
  RefreshCw,
  Monitor,
  Smartphone,
  Palette,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Brand from "@/app/components/home/brand";

const FAQ_APROPOS = [
  {
    q: "Comment solliciter nos services chez Wintech ?",
    a: "Vous pouvez nous contacter via le formulaire de contact, par email ou par téléphone. Nous étudions votre demande et vous recontactons pour un premier échange et un devis personnalisé.",
  },
  {
    q: "En combien de temps un projet est-il livré ?",
    a: "La durée varie selon la nature et l'envergure du projet (site vitrine, e-commerce, refonte…). Nous vous communiquons un planning réaliste dès l'analyse de vos besoins.",
  },
  {
    q: "Proposez-vous des services de maintenance/support ?",
    a: "Oui. Nous proposons des forfaits de maintenance et de support technique pour assurer la mise à jour, la sécurité et l'évolution de votre site dans le temps.",
  },
  {
    q: "Est-ce que vous accompagnez les débutants ou les jeunes entreprises ?",
    a: "Absolument. Nous accompagnons aussi bien les startups que les PME et les grandes structures. Nous adaptons nos solutions et notre accompagnement à votre niveau et à vos objectifs.",
  },
  {
    q: "Quels sont les modes de paiement disponibles ?",
    a: "Nous acceptons les virements bancaires et d'autres modes de paiement adaptés au contexte local. Les modalités sont précisées dans nos propositions commerciales.",
  },
];

const DOMAINES_COMPETENCE: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Création de sites web",
    description:
      "Sites vitrines, e-commerce et portails sur mesure, responsive et optimisés pour la performance et le référencement.",
    icon: Globe,
  },
  {
    title: "Refonte de site web",
    description:
      "Modernisation de votre site existant : design, technique et expérience utilisateur pour renforcer votre présence en ligne.",
    icon: RefreshCw,
  },
  {
    title: "Applications web",
    description:
      "Outils métier, dashboards et interfaces web performantes pour automatiser et piloter votre activité au quotidien.",
    icon: Monitor,
  },
  {
    title: "Applications mobiles",
    description:
      "Applications iOS et Android natives ou cross-platform pour toucher vos utilisateurs partout, à tout moment.",
    icon: Smartphone,
  },
  {
    title: "Branding & identité visuelle",
    description:
      "Logo, charte graphique et supports de communication pour une marque cohérente et mémorable.",
    icon: Palette,
  },
  {
    title: "SEO & Social Media",
    description:
      "Référencement naturel et stratégie sur les réseaux sociaux pour accroître votre visibilité et engager votre audience.",
    icon: TrendingUp,
  },
];

export default function AProposPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });
  const domainesRef = useRef(null);
  const domainesInView = useInView(domainesRef, { once: true });

  const statsAnimation = (index: number) => ({
    initial: { y: "25%", opacity: 0 },
    animate: statsInView ? { y: 0, opacity: 1 } : { y: "25%", opacity: 0 },
    transition: { duration: 0.4, delay: 0.2 + index * 0.15 },
  });

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8">
            <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
              <h1 className="font-medium w-full">
                <TextGenerateEffect words="Écrire et façonner votre" duration={0.5} />
                <TextGenerateEffect
                  words="succès digital"
                  delay={0.8}
                  className="italic font-normal instrument-font"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section ref={statsRef}>
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <motion.div
            {...statsAnimation(0)}
            className="relative 2xl:px-24 px-16 md:py-8 py-4"
          >
            <h2 className="2xl:text-9xl md:text-7xl text-5xl">
              <sup>+</sup>
              {statsInView ? (
                <CountUp start={0} end={100} duration={3} />
              ) : (
                <span>0</span>
              )}
            </h2>
            <p className="mt-2">Projets réalisés</p>
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-border" />
          </motion.div>
          <motion.div
            {...statsAnimation(1)}
            className="relative 2xl:px-24 px-16 md:py-8 py-4"
          >
            <h2 className="2xl:text-9xl md:text-7xl text-5xl">
              <sup>+</sup>
              {statsInView ? (
                <CountUp start={0} end={8} duration={3} />
              ) : (
                <span>0</span>
              )}
            </h2>
            <p className="mt-2 text-muted-foreground">Années d&apos;expérience</p>
            <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-border" />
          </motion.div>
          <motion.div
            {...statsAnimation(2)}
            className="relative 2xl:px-24 px-16 md:py-8 py-4"
          >
            <h2 className="2xl:text-9xl md:text-7xl text-5xl">
              <sup>+</sup>
              {statsInView ? (
                <CountUp start={0} end={50} duration={3} />
              ) : (
                <span>0</span>
              )}
            </h2>
            <p className="mt-2 text-muted-foreground">identités visuelles</p>
          </motion.div>
        </div>
      </section>

      {/* Marques - Ils nous font confiance */}
      <Brand title="Ils nous font confiance" />

      {/* Nos domaines de compétence */}
      <section ref={domainesRef}>
        <div className="2xl:py-20 py-11">
          <div className="container">
            <div className="flex flex-col gap-10 md:gap-16">
              <div className="max-w-2xl text-center mx-auto">
                <h2>
                  <TextGenerateEffect words="Nos domaines de" duration={0.5} />
                  <TextGenerateEffect
                    words="compétence"
                    delay={0.6}
                    className="italic font-normal instrument-font"
                  />
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {DOMAINES_COMPETENCE.map((domaine, index) => {
                  const Icon = domaine.icon;
                  return (
                    <motion.div
                      key={domaine.title}
                      initial={{ y: "20%", opacity: 0 }}
                      animate={
                        domainesInView
                          ? { y: 0, opacity: 1 }
                          : { y: "20%", opacity: 0 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: 0.1 + index * 0.08,
                      }}
                      className={cn(
                        "group relative overflow-hidden",
                        "rounded-2xl border border-dark_black/10 dark:border-white/10",
                        "bg-white dark:bg-dark_black",
                        "p-6 md:p-8",
                        "hover:border-dark_black/20 dark:hover:border-white/20",
                        "hover:shadow-lg dark:hover:shadow-white/5",
                        "transition-all duration-300"
                      )}
                    >
                      <div
                        className={cn(
                          "mb-5 flex h-12 w-12 items-center justify-center rounded-xl",
                          "bg-dark_black/5 dark:bg-white/10",
                          "text-foreground",
                          "group-hover:bg-primary/10 group-hover:text-primary dark:group-hover:bg-primary/20",
                          "transition-colors duration-300"
                        )}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="mb-3 text-lg font-semibold text-foreground">
                        {domaine.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {domaine.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - même style que la page Contact */}
      <section>
        <div className="2xl:py-20 py-11">
          <div className="container">
            <div className="flex flex-col gap-10 md:gap-20">
              <div className="max-w-md text-center mx-auto">
                <h2>
                  <TextGenerateEffect words="Des questions ? Nous avons les" />
                  <TextGenerateEffect
                    words="réponses"
                    delay={1}
                    className="italic font-normal instrument-font"
                  />
                </h2>
              </div>
              <div className="flex flex-col">
                <Accordion className="w-full flex flex-col gap-6">
                  {FAQ_APROPOS.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className={cn(
                        "p-6 border border-border rounded-2xl flex flex-col gap-3",
                      )}
                    >
                      <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                        <h4 className="text-foreground">{item.q}</h4>
                        <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                      </AccordionTrigger>
                      <AccordionContent className="p-0 text-muted-foreground text-base">
                        <p className="text-base font-normal text-muted-foreground">
                          {item.a}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA bannière - solutions innovantes (structure exacte) */}
      <section>
        <div className="2xl:py-20 py-11">
          <div className="container">
            <div className="py-16 md:py-28 px-6 border border-dark_black/10 rounded-3xl bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)] backdrop-blur-[200px] dark:bg-[linear-gradient(90deg,#CDEFFB_0%,#FFFFFF_33.23%,#FFFFFF_65.77%,#FDEECB_100%)]">
              <div className="flex flex-col gap-6 items-center md:max-w-3xl mx-auto">
                <div className="flex flex-col gap-3 items-center text-center">
                  <h2 className="text-3xl md:text-5xl text-black">
                    <TextGenerateEffect words="Des solutions innovantes pour des " />
                    <TextGenerateEffect
                      words="marques audacieuses"
                      delay={0.5}
                      className="font-instrument-serif italic font-normal text-black"
                    />
                  </h2>
                  <p className="text-black/80">
                    Vous souhaitez donner un coup d&apos;éclat à votre marque ? Nous créons des expériences immersives qui captivent, engagent et rendent votre entreprise inoubliable à chaque interaction.
                  </p>
                </div>
                <Button
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden bg-black hover:bg-black"
                  nativeButton={false}
                  render={<Link href="/contact" />}
                >
                  <span className="relative z-10 transition-all duration-500 text-white">
                    Collaborons
                  </span>
                  <div className="absolute right-1 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
