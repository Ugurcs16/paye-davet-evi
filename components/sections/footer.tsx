"use client";

import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-olive text-olive-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <p className="font-serif text-2xl font-semibold tracking-tight">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-olive-foreground/75">
              Bursa’da butik davet deneyimi. Sakin lüks, ölçülü düzen.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive-foreground/60">Menü</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-olive-foreground/60">İletişim</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-cream">
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <MessageCircle className="size-4 shrink-0 opacity-90" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <Instagram className="size-4 shrink-0 opacity-90" strokeWidth={1.5} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-xs text-olive-foreground/55 md:mt-14 md:pt-10">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
