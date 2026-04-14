"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion";

export function AboutSection() {
  return (
    <section id="hakkimizda" className="bg-champagne/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <FadeIn className="order-2 md:order-1">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-taupe">Hakkımızda</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
            Ferah alan, yumuşak ışık, ölçülü şıklık
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-taupe md:text-lg">
            <p>
              Paye Davet Evi, kalabalık salon düzeninden uzak, konuklarınızla göz teması kurabileceğiniz sakin bir
              atmosfer sunar. Akış net, alan düzenli ve her karede doğal bir denge hedeflenir.
            </p>
            <p>
              Kutlamanızın tonuna uygun, abartısız süslemeler ve esnek oturma planlarıyla gününüzü sizin ritminize
              bırakırız.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="order-1 md:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50 bg-cream shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1523438885209-ebd6814b081f?w=900&q=85"
              alt="Zarif davet alanı"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/[0.04]" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
