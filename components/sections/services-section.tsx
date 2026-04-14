"use client";

import { motion } from "framer-motion";
import { Gift, Heart, Sparkles, Wine } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons = [Sparkles, Heart, Gift, Wine] as const;

export function ServicesSection() {
  return (
    <section id="hizmetler" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-taupe">Hizmetler</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
            Özel günler için net seçenekler
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe md:text-lg">
            Her biri için sakin bir akış ve zarif bir çerçeve.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <StaggerItem key={service.id}>
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                  <Card
                    className={cn(
                      "group h-full overflow-hidden border-border/50 bg-cream transition-colors duration-500 hover:border-olive/20",
                    )}
                  >
                    <CardHeader className="flex flex-row items-start gap-4 pb-2">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-ivory-muted text-olive transition-all duration-500 group-hover:border-olive/25 group-hover:bg-champagne/80">
                        <Icon className="size-5" strokeWidth={1.35} />
                      </span>
                      <div>
                        <CardTitle>{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
