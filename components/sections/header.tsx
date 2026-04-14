"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-olive/95 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] backdrop-blur-md"
            : "border-b border-transparent bg-olive/88 backdrop-blur-[2px]",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="#hero"
            className="font-serif text-xl font-semibold tracking-[0.02em] text-olive-foreground md:text-2xl"
          >
            {site.name}
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Ana menü">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-olive-foreground/90 transition-colors duration-300 hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-olive-foreground transition-all duration-300 hover:bg-white/20"
              aria-label="Instagram"
            >
              <Instagram className="size-5" strokeWidth={1.5} />
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2 text-olive-foreground"
              aria-label="Instagram"
            >
              <Instagram className="size-5" strokeWidth={1.5} />
            </a>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-olive-foreground hover:bg-white/10"
              aria-expanded={open}
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-charcoal/25 backdrop-blur-sm"
              aria-label="Menüyü kapat"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-border/40 bg-ivory shadow-2xl"
              aria-label="Mobil menü"
            >
              <div className="flex items-center justify-between border-b border-border/50 px-6 py-5">
                <span className="font-serif text-lg text-charcoal">Menü</span>
                <Button type="button" variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Kapat">
                  <X className="size-5" />
                </Button>
              </div>
              <div className="flex flex-1 flex-col gap-1 px-4 py-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-charcoal transition-colors hover:bg-champagne"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.35 }}
                  className="mt-4 px-4"
                >
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-taupe"
                  >
                    <Instagram className="size-4" strokeWidth={1.5} />
                    Instagram
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
