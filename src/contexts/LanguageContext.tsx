import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: string;
}

const translations: Record<Language, Translations> = {
  fr: {
    "nav.home": "Accueil",
    "nav.residence": "La Résidence",
    "nav.suites": "Suites",
    "nav.pools": "Piscine",
    "nav.gallery": "Galerie",
    "nav.discover": "Découvrir Djerba",
    "nav.contact": "Contact",
    "nav.book": "Réserver",
    "nav.book_stay": "Réserver votre séjour",

    "hero.subtitle": "Djerba, Tunisie",
    "hero.scroll": "Faites défiler pour découvrir",

    "presentation.title": "Bienvenue à la Résidence Ulysse",
    "presentation.desc1": "Située au cœur de la zone touristique de Mezraya à Djerba, la Résidence Ulysse est une oasis de tranquillité. Conçue avec une architecture djerbienne authentique et une touche de luxe moderne, notre résidence est le lieu idéal pour une escapade inoubliable.",
    "presentation.desc2": "Nos appartements spacieux et nos suites luxueuses sont entourés de jardins luxuriants. Que vous cherchiez à vous détendre au bord de la piscine ou à explorer les charmes de l'île de Djerba, la Résidence Ulysse saura combler toutes vos attentes.",

    "residence.tag": "Le Lieu",
    "residence.title": "Une architecture djerbienne avec le confort moderne",
    "residence.desc1": "La Résidence Ulysse s'inspire de l'architecture traditionnelle des 'houchs' djerbiens, offrant une atmosphère intimiste et authentique. Chaque détail a été pensé pour votre confort.",
    "residence.desc2": "Profitez d'un grand patio central, de terrasses ensoleillées et d'une décoration raffinée mêlant artisanat local et équipements haut de gamme.",

    "suites.tag": "Nos Suites",
    "suites.title": "Hébergements de Luxe",
    "suites.desc": "Découvrez nos suites confortables, allant du studio intimiste aux grands appartements familiaux. Chaque logement est entièrement équipé pour vous garantir un séjour en toute indépendance.",
    
    "garden.tag": "Nos Jardins",
    "garden.title": "Un écrin de verdure",
    "garden.desc": "Nos jardins luxuriants vous invitent à la flânerie et à la détente, offrant un cadre paisible sous le soleil de Djerba.",
    
    "pools.tag": "Piscine",
    "pools.title": "Piscine Extérieure",
    "pools.desc": "Plongez dans notre grand bassin extérieur bordé de palmiers. Une invitation à la détente sous le ciel azur de Djerba.",

    "testimonials.tag": "Livre d'or",
    "testimonials.title": "Ce que nos clients disent",
    "testimonials.desc": "Découvrez les expériences vécues par nos hôtes lors de leur séjour à la Résidence Ulysse.",

    "location.tag": "Localisation",
    "location.title": "Explorez les Environs",
    "location.desc": "Idéalement située à Mezraya, la Résidence Ulysse vous offre un point de départ parfait pour découvrir les merveilles de Djerba.",

    "discover.tag": "Djerba la Douce",
    "discover.title": "À découvrir aux alentours",

    "faq.tag": "Questions fréquentes",
    "faq.title": "Ce que vous devez savoir",
    
    "contact.tag": "Contact",
    "contact.title": "Nous trouver",
  },
  en: {
    "nav.home": "Home",
    "nav.residence": "The Residence",
    "nav.suites": "Suites",
    "nav.pools": "Pool",
    "nav.gallery": "Gallery",
    "nav.discover": "Discover Djerba",
    "nav.contact": "Contact",
    "nav.book": "Book Now",
    "nav.book_stay": "Book Your Stay",

    "hero.subtitle": "Djerba, Tunisia",
    "hero.scroll": "Scroll to discover",

    "presentation.title": "Welcome to Résidence Ulysse",
    "presentation.desc1": "Located in the heart of the Mezraya tourist zone in Djerba, Résidence Ulysse is an oasis of tranquility. Designed with authentic Djerbian architecture and a touch of modern luxury, our residence is the perfect place for an unforgettable getaway.",
    "presentation.desc2": "Our spacious apartments and luxury suites are surrounded by lush gardens. Whether you're looking to relax by the pool, or explore the charms of Djerba island, Résidence Ulysse will exceed all your expectations.",

    "residence.tag": "The Venue",
    "residence.title": "Djerbian architecture with modern comfort",
    "residence.desc1": "Résidence Ulysse is inspired by the traditional architecture of Djerbian 'houchs', offering an intimate and authentic atmosphere. Every detail has been thought out for your comfort.",
    "residence.desc2": "Enjoy a large central patio, sunny terraces, and refined decoration combining local craftsmanship with high-end amenities.",

    "suites.tag": "Our Suites",
    "suites.title": "Luxury Accommodations",
    "suites.desc": "Discover our comfortable suites, ranging from intimate studios to large family apartments. Each accommodation is fully equipped to guarantee you an independent stay.",
    
    "garden.tag": "Our Gardens",
    "garden.title": "A green sanctuary",
    "garden.desc": "Our lush gardens invite you to stroll and relax, offering a peaceful setting under the Djerba sun.",
    
    "pools.tag": "Pool",
    "pools.title": "Outdoor Pool",
    "pools.desc": "Dive into our large outdoor pool lined with palm trees. An invitation to relax under the blue sky of Djerba.",

    "testimonials.tag": "Guestbook",
    "testimonials.title": "What our guests say",
    "testimonials.desc": "Discover the experiences lived by our guests during their stay at Résidence Ulysse.",

    "location.tag": "Location",
    "location.title": "Explore the Surroundings",
    "location.desc": "Ideally located in Mezraya, Résidence Ulysse offers you a perfect starting point to discover the wonders of Djerba.",

    "discover.tag": "Sweet Djerba",
    "discover.title": "Discover nearby",

    "faq.tag": "FAQ",
    "faq.title": "What you need to know",

    "contact.tag": "Contact",
    "contact.title": "Find us",
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
