"use client";

import { ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { site } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="iletisim" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-taupe">İletişim</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
            İletişim ve Rezervasyon
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe md:text-lg">
            Rezervasyon ve sorularınız için en hızlı yol{" "}
            <a
              href={site.whatsappHref}
              className="font-semibold text-charcoal underline decoration-charcoal/25 underline-offset-[5px] transition hover:decoration-charcoal/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            . Arayabilir veya mesaj bırakabilirsiniz.
          </p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-10">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-cream p-6 shadow-sm md:p-8">
            <p className="text-sm font-medium text-charcoal">Hızlı iletişim</p>
            <div className="mt-6 flex flex-col gap-4">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-olive px-5 py-3.5 text-base font-semibold text-olive-foreground shadow-md transition duration-300 hover:bg-olive-muted hover:shadow-lg"
              >
                <MessageCircle className="size-[1.125rem] shrink-0 opacity-95" strokeWidth={1.5} aria-hidden />
                WhatsApp ile yazın
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 text-base font-medium text-charcoal/90 transition-colors hover:text-olive"
              >
                <span className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-ivory-muted">
                  <Phone className="size-4 text-olive" strokeWidth={1.5} />
                </span>
                {site.phone}
              </a>
              <p className="inline-flex items-start gap-3 text-base text-charcoal/90">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-ivory-muted">
                  <MapPin className="size-4 text-olive" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block font-medium text-charcoal">{site.address}</span>
                  <span className="mt-1 block text-sm font-normal leading-relaxed text-taupe">
                    Tam adres ve yol tarifi için WhatsApp üzerinden yazabilirsiniz.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-champagne/50">
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:px-10 md:py-8 md:text-left">
              <div className="flex max-w-md flex-col gap-2">
                <p className="font-serif text-lg text-charcoal">Konum</p>
                <p className="text-sm leading-relaxed text-taupe">{site.address}</p>
              </div>
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl border border-border/70 bg-cream px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-olive/30 hover:bg-ivory-muted sm:w-auto"
              >
                Haritada aç
                <ExternalLink className="size-4" strokeWidth={1.5} aria-hidden />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
