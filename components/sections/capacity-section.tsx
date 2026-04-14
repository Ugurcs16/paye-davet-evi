"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion";

export function CapacitySection() {
  return (
    <section id="kapasite" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <FadeIn>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border/50 bg-cream shadow-sm md:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1000&q=85"
              alt="Ferah davet alanı"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/[0.04]" />
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-taupe">Kapasite</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
            110 kişilik kapasiteye uygun davet alanımız
          </h2>
          <p className="mt-6 text-base leading-relaxed text-taupe md:text-lg">
            Oturma düzeni ve geçişler için ferah koridorlar; fotoğraf ve video çekimlerinde yumuşak arka planlar. Kalabalık
            hissettirmeden, her masada net bir düzen.
          </p>
          <ul className="mt-8 space-y-4 text-charcoal/90">
            {[
              "Aydınlık ve dengeli ışık",
              "Masalar arası rahat mesafe",
              "Sahne ve giriş akışına uygun plan",
            ].map((line) => (
              <li key={line} className="flex gap-3 text-base leading-relaxed">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-olive/50" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
