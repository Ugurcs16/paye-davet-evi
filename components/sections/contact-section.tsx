"use client";

import type { FormEvent } from "react";
import { ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion";
import { site } from "@/lib/data";

export function ContactSection() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id="iletisim" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-taupe">İletişim</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
            İletişim ve Rezervasyon
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe md:text-lg">
            Detaylı bilgi almak ve rezervasyon oluşturmak için bizimle WhatsApp üzerinden hızlıca iletişime geçebilirsiniz.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn delay={0.05} className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-cream p-6 shadow-sm md:p-8">
              <p className="text-sm font-medium text-charcoal">Hızlı iletişim</p>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 text-base text-charcoal transition-colors hover:text-olive"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-ivory-muted">
                    <Phone className="size-4 text-olive" strokeWidth={1.5} />
                  </span>
                  {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-base text-charcoal transition-colors hover:text-olive"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-ivory-muted">
                    <MessageCircle className="size-4 text-olive" strokeWidth={1.5} />
                  </span>
                  WhatsApp ile yazın
                </a>
                <p className="inline-flex items-start gap-3 text-base text-taupe">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-ivory-muted">
                    <MapPin className="size-4 text-olive" strokeWidth={1.5} />
                  </span>
                  {site.address}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border/60 bg-cream p-6 shadow-sm md:p-8"
              noValidate
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input id="name" name="name" autoComplete="name" placeholder="Adınız" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="05xx xxx xx xx" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Mesajınız</Label>
                  <Textarea id="message" name="message" placeholder="Tarih, konuk sayısı ve notlarınız" />
                </div>
                <Button type="submit" className="mt-1 w-full rounded-2xl md:w-auto md:px-10">
                  Gönder
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>

        <FadeIn delay={0.12} className="mt-10">
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
