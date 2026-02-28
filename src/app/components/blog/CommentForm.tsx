"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type CommentFormProps = {
  postId: number;
  articleTitle: string;
};

export default function CommentForm({ postId, articleTitle }: CommentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    setError(null);

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: Number(postId),
          author_name: formData.name,
          author_email: formData.email,
          content: formData.message,
        }),
      });

      const data = await res.json().catch(() => ({ success: false, message: "Réponse invalide du serveur." }));

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Impossible d'enregistrer le commentaire. Réessayez.");
      }
    } catch {
      setError("Erreur de connexion. Vérifiez votre réseau et réessayez.");
    } finally {
      setLoader(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-6 rounded-2xl bg-green/20 dark:bg-white/5 border border-dark_black/10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <Icon
            icon="ix:success-filled"
            width="30"
            height="30"
            style={{ color: "#79D45E" }}
          />
          <h3 className="text-lg font-medium text-green dark:text-green">
            Merci ! Votre commentaire a bien été envoyé. Il sera publié après modération.
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 pt-10 border-t border-dark_black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold text-dark_black dark:text-white mb-2">
        Laisser un commentaire
      </h3>
      <p className="text-dark_black/60 dark:text-white/60 text-sm mb-6">
        Votre adresse e-mail ne sera pas publiée.
      </p>
      {error && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 text-red-700 dark:text-red-300 text-sm">
          {error}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full">
            <Label htmlFor="comment-name">Votre nom</Label>
            <Input
              className="w-full mt-2 rounded-full border px-5 py-3 h-12 outline-hidden transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 focus-visible:ring-0 shadow-none"
              id="comment-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div className="w-full">
            <Label htmlFor="comment-email">Votre e-mail</Label>
            <Input
              className="w-full mt-2 rounded-full border px-5 py-3 h-12 outline-hidden transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 focus-visible:ring-0 shadow-none"
              id="comment-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Entrez votre e-mail"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <Label htmlFor="comment-message">Votre commentaire</Label>
          <Textarea
            className="w-full mt-2 h-28 rounded-3xl border px-5 py-3 outline-hidden transition dark:border-white/20 focus:border-dark_black/50 dark:focus:border-white/50 dark:bg-black/40 focus-visible:ring-0 shadow-none"
            name="message"
            id="comment-message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Partagez votre avis ou posez une question..."
            rows={4}
            required
          />
        </div>
        <div>
          {!loader ? (
            <Button
              type="submit"
              className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-500">
                Publier le commentaire
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
              />
              Envoi en cours
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
