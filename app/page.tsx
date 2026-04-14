import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { TrustSection } from "@/components/sections/trust-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { CapacitySection } from "@/components/sections/capacity-section";
import { InstagramSection } from "@/components/sections/instagram-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <CapacitySection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
