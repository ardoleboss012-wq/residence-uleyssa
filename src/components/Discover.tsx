import { useEffect, useRef } from "react";
import plageImg from "../assets/images/plage_djerba_v2_1784149316156.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const attractions = [
  { name: "Plage de Sidi Mahrez", desc: "Sable blanc et eaux turquoises à 5 minutes." },
  { name: "Houmt Souk", desc: "Le marché traditionnel et ses ruelles authentiques." },
  { name: "Djerbahood", desc: "Le musée de street art à ciel ouvert." },
  { name: "La Lagune", desc: "Paysages sauvages et couchers de soleil uniques." }
];

export function Discover() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="djerba" className="py-24 md:py-32 bg-ulysse-cream px-6 md:px-16">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-6 block">Explorer</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ulysse-brown mb-8 leading-tight">
            L'île des rêves
          </h2>
          <p className="font-sans font-light text-ulysse-brown/80 text-lg leading-relaxed mb-12 max-w-md">
            Djerba n'est pas seulement une destination, c'est un état d'esprit. 
            Découvrez nos recommandations secrètes pour une immersion authentique.
          </p>
          
          <ul ref={listRef} className="space-y-8">
            {attractions.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start group">
                <MapPin className="w-5 h-5 mt-1 text-ulysse-gold shrink-0 transition-transform group-hover:scale-110" />
                <div>
                  <h4 className="font-serif text-xl md:text-2xl text-ulysse-brown mb-2 group-hover:text-ulysse-gold transition-colors">{item.name}</h4>
                  <p className="font-sans font-light text-sm text-ulysse-brown/70">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 overflow-hidden aspect-[3/4] md:aspect-auto md:h-auto rounded-none relative">
          <img 
            src={plageImg} 
            alt="Plage de Djerba" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] hover:scale-105" 
          />
        </div>
      </div>
    </section>
  );
}
