"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";
import { site } from "@/lib/data";

export function InstagramSection() {
  return (
    <section id="instagram-cta" className="border-y border-border/40 bg-champagne/50 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-taupe">Instagram</p>
          <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
            Anlarımızı yakından takip edin
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-taupe md:text-lg">
            Güncel düzenlemeler ve ilham veren kareler için profilimize göz atabilirsiniz.
          </p>
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-10 inline-flex rounded-2xl border-charcoal/10 bg-cream/80 px-10",
            )}
          >
            <Instagram className="size-4" strokeWidth={1.5} />
            Instagram’da görüntüle
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
