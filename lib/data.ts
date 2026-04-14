export const site = {
  name: "Paye Davet Evi",
  title: "Paye Davet Evi | Bursa’da Premium Davet Deneyimi",
  description:
    "Paye Davet Evi, Bursa’da söz, nişan, isteme ve butik organizasyonlar için zarif ve premium bir davet alanı sunar. 110 kişilik kapasite alanıyla butik organizasyonlara uygundur; özel anlarınıza şıklık katar.",
  phone: "+90 224 000 00 00",
  phoneHref: "tel:+902240000000",
  whatsapp: "+902240000000",
  whatsappHref: "https://wa.me/902240000000",
  address: "Bursa, Türkiye",
  instagramUrl: "https://www.instagram.com/payedavetevi",
  googleMapsUrl:
    "https://google.com/maps/place//data=!4m2!3m1!1s0x14ca3f0004f111df:0x4251f8887fa4905c?sa=X&ved=1t:8290&ictx=111",
} as const;

export const navLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#galeri", label: "Galeri" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export const trustHighlights = [
  {
    title: "Butik davet alanı",
    description: "Bursa’da seçkin ve sakin bir atmosferde özel kutlamalar.",
  },
  {
    title: "110 kişilik kapasite alanımızla hizmetinizdeyiz",
    description: "Samimi davetler için ferah oturma düzeni ve sakin bir atmosfer.",
  },
  {
    title: "Zarif konseptler",
    description: "Minimal ve şık süslemelerle uyumlu, rafine düzenlemeler.",
  },
  {
    title: "Hızlı iletişim",
    description: "Rezervasyon ve sorularınız için net, hızlı geri dönüş.",
  },
] as const;

export const services = [
  { id: "soz", title: "Söz", description: "İki ailenin buluşmasına yakışan sade şıklık." },
  { id: "nisan", title: "Nişan", description: "Kutlama ve fotoğraf için dengeli ışık ve alan." },
  { id: "isteme", title: "İsteme", description: "Samimi ve düzenli bir akış için planlı alan kullanımı." },
  { id: "butik", title: "Butik Davetler", description: "Özel günler için ölçülü ve kişiselleştirilebilir düzen." },
] as const;

export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", alt: "Zarif davet masası düzeni" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", alt: "Yumuşak ışıklı davet alanı" },
  { src: "https://images.unsplash.com/photo-1523438885209-ebd6814b081f?w=800&q=80", alt: "Minimal çiçek ve masa detayı" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", alt: "Ferah salon atmosferi" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", alt: "Davet detayları" },
  { src: "https://images.unsplash.com/photo-1522413452209-7f4c441a27b5?w=800&q=80", alt: "Şık oturma düzeni" },
] as const;

export const heroVideoSrc =
  "https://videos.pexels.com/video-files/3044121/3044121-hd_1920_1080_25fps.mp4";
