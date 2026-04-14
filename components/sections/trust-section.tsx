"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { trustHighlights } from "@/lib/data";

export function TrustSection() {
  return (
    <section id="guven" className="relative border-y border-border/40 bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-taupe">Öne çıkanlar</p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
            Sakin bir lüks hissi
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe md:text-lg">
            Az ve öz detaylarla, davetin ritmine saygılı bir düzen.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full border-border/50 bg-cream">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
