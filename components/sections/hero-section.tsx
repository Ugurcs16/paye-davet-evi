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
            "rounded-2xl border border-white/35 bg-cream/40 px-5 py-8 shadow-[0_8px_36px_-14px_rgba(44,38,34,0.1)] backdrop-blur-[6px] ring-1 ring-inset ring-white/25",
            "md:px-8 md:py-10",
          )}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-charcoal text-balance drop-shadow-[0_1px_2px_rgba(252,250,247,0.92)] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            En özel anlarınıza değer katan zarif bir davet deneyimi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-full text-[0.95rem] leading-relaxed text-taupe drop-shadow-[0_1px_1px_rgba(252,250,247,0.88)] sm:text-base md:max-w-2xl md:text-lg"
          >
            Paye Davet Evi, söz, nişan ve isteme gibi özel günleriniz için zarif, ferah ve fotoğrafa uyumlu bir butik
            davet alanı sunar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-stretch md:max-w-2xl sm:gap-4"
          >
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "olive", size: "lg" }),
                "w-full shrink-0 justify-center rounded-2xl border border-white/28 px-8 text-[0.9375rem] font-semibold shadow-none shadow-[0_8px_28px_-6px_rgba(48,50,38,0.32)] ring-1 ring-black/[0.06] transition-[box-shadow,transform,border-color] duration-300 hover:border-white/40 hover:shadow-[0_10px_32px_-6px_rgba(48,50,38,0.38)] sm:min-w-[13rem] sm:flex-1",
              )}
            >
              <MessageCircle className="size-[1.125rem]" strokeWidth={1.5} aria-hidden />
              WhatsApp’tan Ulaş
            </a>
            <Link
              href="#iletisim"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full shrink-0 justify-center rounded-2xl border-charcoal/14 bg-cream/30 px-8 font-normal text-charcoal/85 shadow-none backdrop-blur-[2px] transition-colors hover:border-charcoal/22 hover:bg-cream/48 hover:text-charcoal sm:min-w-[12rem]",
              )}
            >
              Rezervasyon Oluştur
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
