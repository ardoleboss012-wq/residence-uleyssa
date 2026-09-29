import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Presentation() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="residence" className="py-32 md:py-48 px-6 md:px-16 flex justify-center bg-ulysse-cream text-ulysse-brown relative">
      <div ref={textRef} className="max-w-4xl text-center flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.3em] text-ulysse-gold mb-8 block">
          L'Écrin
        </span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.3] text-balance mb-12">
          L'architecture immaculée rencontre la douceur de vivre méditerranéenne, dans un sanctuaire conçu pour le repos absolu.
        </h2>
        <p className="font-sans font-light text-ulysse-brown/80 max-w-2xl text-lg leading-relaxed">
          Inspirée par l'héritage djerbien, la Résidence Ulysse réinvente l'hospitalité avec un minimalisme chaleureux. 
          Entre la pierre blanche, le lin brut et la lumière rasante, chaque espace est pensé pour ralentir le temps.
        </p>
      </div>
    </section>
  );
}
