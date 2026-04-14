"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion";
import { galleryImages } from "@/lib/data";

export function GallerySection() {
  return (
    <section id="galeri" className="border-y border-border/40 bg-champagne/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-taupe">Galeri</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
            Işığın yumuşadığı anlar
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-taupe md:text-lg">
            Sade çizgiler, dengeli masa düzenleri ve doğal tonlar.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50 bg-cream shadow-sm md:aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-charcoal/[0.05]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
