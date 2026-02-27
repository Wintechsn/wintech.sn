"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react/dist/iconify.js";

type ShareArticleProps = {
  title: string;
  slug: string;
};

export default function ShareArticle({ title, slug }: ShareArticleProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(`${window.location.origin}/blog/${slug}`);
  }, [slug]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  if (!shareUrl) return null;

  const shareLinks = [
    {
      label: "X (Twitter)",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: "ri:twitter-x-line",
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=`,
      icon: "mdi:linkedin",
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: "mdi:facebook",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: "mdi:whatsapp",
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: "mdi:email-outline",
    },
  ];

  const copyLink = async () => {
    if (!shareUrl) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
        toast.success("Lien copié dans le presse-papier");
        return;
      }
      const input = document.createElement("input");
      input.value = shareUrl;
      input.setAttribute("readonly", "");
      input.style.position = "absolute";
      input.style.left = "-9999px";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      toast.success("Lien copié dans le presse-papier");
    } catch {
      toast.error("Impossible de copier le lien");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 pt-8 mt-10 border-t border-dark_black/10 dark:border-white/10">
      <span className="text-sm font-medium text-dark_black/70 dark:text-white/70">
        Partager cet article :
      </span>
      <div className="flex items-center gap-2">
        {shareLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-dark_black/15 dark:border-white/15 bg-white dark:bg-white/5 text-dark_black dark:text-white hover:bg-dark_black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Icon icon={item.icon} className="text-lg" />
          </a>
        ))}
        <button
          type="button"
          onClick={copyLink}
          aria-label="Copier le lien"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-dark_black/15 dark:border-white/15 bg-white dark:bg-white/5 text-dark_black dark:text-white hover:bg-dark_black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
        >
          <Icon icon="mdi:link-variant" className="text-lg" />
        </button>
      </div>
    </div>
  );
}
