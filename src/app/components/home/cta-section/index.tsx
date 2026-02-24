"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="2xl:py-20 py-11 border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <h2 className="text-2xl md:text-4xl font-medium">
            Créons quelque chose{" "}
            <span className="text-muted-foreground">Ensemble</span>
          </h2>
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="rounded-full gap-2"
          >
            Contactez-nous
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
