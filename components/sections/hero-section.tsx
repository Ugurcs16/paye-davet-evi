"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroVideoSrc, site } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover brightness-[1.07] contrast-[1.12] saturate-[1.1]"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>
        {/* Minimal top-only wash; bottom stays open so the plate stays visible full height */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/16 via-ivory/5 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_8%,rgba(255,250,245,0.14),transparent_68%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-28 pt-32 md:px-8 md:pb-36 md:pt-40">
        <div
          className={cn(
            "w-full max-w-[min(100%,20rem)] sm:max-w-xl md:max-w-3xl",
            "rounded-2xl border border-charcoal/10 bg-cream/86 px-5 py-8 shadow-[0_16px_56px_-20px_rgba(44,38,34,0.18)] backdrop-blur-lg backdrop-saturate-[1.12]",
            "md:px-8 md:py-10",
          )}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-charcoal text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          >
            En özel anlarınıza değer katan zarif bir davet deneyimi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-full text-[0.95rem] leading-relaxed text-taupe sm:text-base md:max-w-2xl md:text-lg"
          >
            Paye Davet Evi, söz, nişan ve isteme gibi özel günleriniz için zarif, ferah ve fotoğrafa uyumlu bir butik
            davet alanı sunar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center md:max-w-2xl"
          >
            <Link
              href="#iletisim"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full shrink-0 justify-center rounded-2xl px-8 sm:w-auto sm:min-w-[12rem]",
              )}
            >
              Rezervasyon Oluştur
            </Link>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "subtleGold", size: "lg" }),
                "w-full shrink-0 justify-center rounded-2xl px-8 sm:w-auto sm:min-w-[12rem]",
              )}
            >
              <MessageCircle className="size-4" strokeWidth={1.5} />
              WhatsApp’tan Ulaş
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
