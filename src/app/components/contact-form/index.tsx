"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INTEREST_OPTIONS = [
  "Création de sites web",
  "Refonte de site web",
  "Applications web",
  "Applications mobiles",
  "Branding & identité visuelle",
  "SEO & Social Media",
  "Gestion de réseaux sociaux",
] as const;

const DELAY_OPTIONS = [
  "Urgent (moins d'1 mois)",
  "1–3 mois",
  "3–6 mois",
  "Flexible",
] as const;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "" as string,
    delay: "" as string,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      delay: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    fetch("https://formsubmit.co/ajax/contact@wintech.sn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _subject: "Wintech - Nouveau message de contact",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interest: formData.interest,
        delay: formData.delay,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setSubmitted(data.success);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      {/* Titre */}
      <section className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 before:rounded-full before:top-24 before:blur-3xl before:-z-10">
        <div className="container relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8">
            <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
              <h1 className="font-medium w-full">
                <TextGenerateEffect
                  words="Créons votre succès"
                  duration={0.5}
                />
                <br />
                <TextGenerateEffect
                  words="en ligne"
                  delay={0.8}
                  className="italic font-normal instrument-font"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire / message de succès */}
      <section className="2xl:py-20 py-11">
        <div className="container">
          {submitted ? (
              <div className="flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-6 rounded-lg bg-green/20 dark:bg-white/5">
                <div className="flex">
                  <Icon
                    icon="ix:success-filled"
                    width="30"
                    height="30"
                    style={{ color: "#79D45E" }}
                  />
                  <h5 className="text-green dark:text-green">
                    Parfait ! Votre message a bien été envoyé. Nous vous recontacterons très prochainement.
                  </h5>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      className="w-full mt-2 rounded-full border px-5 py-3 h-12 outline-hidden transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 focus-visible:ring-0 shadow-none"
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="email">Email professionnel *</Label>
                    <Input
                      className="w-full mt-2 rounded-full border px-5 py-3 h-12 outline-hidden transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 focus-visible:ring-0 shadow-none"
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="w-full">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    className="w-full mt-2 rounded-full border px-5 py-3 h-12 outline-hidden transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 focus-visible:ring-0 shadow-none"
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+221 00 000 00 00"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="interest">Intéressé par</Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, interest: value ?? "" }))}
                  >
                    <SelectTrigger className="w-full mt-2 text-base px-5 h-12! rounded-full border transition-all duration-500 dark:border-white/20 focus:outline-0 dark:bg-black/40 focus-visible:ring-0 shadow-none">
                      <SelectValue placeholder="Choisissez une option" />
                    </SelectTrigger>
                    <SelectContent>
                      {INTEREST_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Label htmlFor="delay">Délai souhaité</Label>
                  <Select
                    value={formData.delay}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, delay: value ?? "" }))}
                  >
                    <SelectTrigger className="w-full mt-2 text-base px-5 h-12! rounded-full border transition-all duration-500 dark:border-white/20 focus:outline-0 dark:bg-black/40 focus-visible:ring-0 shadow-none">
                      <SelectValue placeholder="Choisissez un délai" />
                    </SelectTrigger>
                    <SelectContent>
                      {DELAY_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full">
                  <Label htmlFor="message">Description du besoin</Label>
                  <Textarea
                    className="w-full mt-2 h-28 rounded-3xl border px-5 py-3 outline-hidden transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 focus-visible:ring-0 shadow-none"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    rows={4}
                  />
                </div>
                <div>
                  {!loader ? (
                    <Button
                      type="submit"
                      className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
                    >
                      <span className="relative z-10 transition-all duration-500">
                        Collaborons
                      </span>
                      <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </div>
                    </Button>
                  ) : (
                    <Button
                      disabled
                      className="bg-grey item-center flex gap-2 py-3 px-7 rounded-sm h-12"
                    >
                      <div
                        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-white rounded-full"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Chargement...</span>
                      </div>{" "}
                      Envoi en cours
                    </Button>
                  )}
                </div>
              </form>
          )}
        </div>
      </section>
    </>
  );
}

export default ContactForm;
