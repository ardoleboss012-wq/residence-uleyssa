import React, { useEffect, useRef, useState } from "react";
import suiteImg from "../assets/images/suite_interieur_v2_1784149280743.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const suites = [
  {
    title: "Suite - Vue sur Piscine",
    surface: "100 m²",
    capacity: "Jusqu'à 6 pers.",
    price: "449 TND",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584666945.jpg?k=d4d12a5a2a0a84f8f0910d840b23eb969bc738b961173f25ed6b22d0faa23586&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/739470317.jpg?k=be48597fb312183beeae9478c054af23baa5f9a498ae2dff98efee1e50a9367e&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/739470366.jpg?k=36f76e545dc7548538f33ef35fea2e4114c1f2bbd9d2db96a5fd85095ae6e03c&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577802432.jpg?k=b458d63b34da179c186bcd8edf141da7c7ec7e5715828c6210c09e3a3bd525dc&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583697329.jpg?k=6eb94158deb0f0d40f63269e9f23a840b31e21ed6b946fb926ecdd599944156f&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583697328.jpg?k=110ef944d1f256ba3f5ed20b7aa6e4436f68750ded8a5e22ac69ec8eab2149a3&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577802425.jpg?k=87df6ac1b3aa769c58e21e1eff4f9a9a193f780f1a960a1b9418562103756215&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/577802449.jpg?k=2c1a890e704b530867a67cead46002e90191f71a60682806b9feb7b4b243e3e5&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/583697322.jpg?k=12236fe04a5959e8ce4691983b2bb945402481b2e69d1fd49f7af8321766736b&o="
    ],
    description: "1 grand lit double, 2 lits simples, 2 canapés-lits",
  },
  {
    title: "Suite Familiale",
    surface: "75 m²",
    capacity: "Jusqu'à 4 pers.",
    price: "300 TND",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584669000.jpg?k=60239e0af89bdbbe0048a5088a8c2aaac2534e87c6a732c74dd58d669e4a3cad&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/739471052.jpg?k=bcdd8a2e4a626a3bd44d6e0ea1ea60c983a2e17fec3a96ab744b89dfab9067f4&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/671454891.jpg?k=467801a704f558c0c1bd026bc50d3944bebdeec2c13e40ed86af5bbf59e16c5a&o="
    ],
    description: "1 grand lit double, 2 canapés-lits",
  },
  {
    title: "Suite Deluxe - Vue sur Mer",
    surface: "60 m²",
    capacity: "Jusqu'à 3 pers.",
    price: "299 TND",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/739471852.jpg?k=e4186799a01664e951179ab675895db0223e5f5b435b482f9074fe090f2f6c9c&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583386269.jpg?k=e1ad5957e2cbe95deda805b086c885030a80fa57979c628c91518be384564f32&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583701604.jpg?k=e6fbaaddc32cd5f29649f2eca78981cd0ed330b6b90570991d39bdab9fbac073&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/583701635.jpg?k=033945da39f0cade63912645ee4d3069cfef76f0c1b48b66361aa3590147fa8c&o="
    ],
    description: "1 grand lit double, 1 canapé-lit",
  },
  {
    title: "Suite - Vue sur Jardin",
    surface: "60 m²",
    capacity: "Jusqu'à 4 pers.",
    price: "256 TND",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/584666950.jpg?k=e0843fceea99d0b5f347bc0ce14dc8819719a6824b9974913c8ed2d3f8ae51fa&o=",
      suiteImg
    ],
    description: "1 grand lit double, 2 canapés-lits",
  }
];

function SuiteCard({ suite, onClick }: { suite: typeof suites[0]; onClick: () => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % suite.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + suite.images.length) % suite.images.length);
  };

  return (
    <div className="suite-card group cursor-pointer" onClick={onClick}>
      <div className="overflow-hidden aspect-[4/5] md:aspect-video mb-6 relative">
        <img
          src={suite.images[currentImageIndex]}
          alt={suite.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        {suite.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-ulysse-brown" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-5 h-5 text-ulysse-brown" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {suite.images.map((_, i) => (
                <div 
                  key={i} 
                  className={cn("w-1.5 h-1.5 rounded-full transition-all", i === currentImageIndex ? "bg-white scale-125" : "bg-white/50")} 
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-serif text-2xl text-ulysse-brown">{suite.title}</h3>
        <div className="w-10 h-10 rounded-full border border-ulysse-brown/20 flex items-center justify-center group-hover:border-ulysse-brown transition-colors">
          <ArrowRight className="w-4 h-4 text-ulysse-brown -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>
      <p className="text-sm font-light text-ulysse-brown/80 mb-4 h-5">
        {suite.description}
      </p>
      <div className="flex items-center gap-4 text-sm font-light text-ulysse-brown/70 uppercase tracking-wider mb-4">
        <span>{suite.surface}</span>
        <span className="w-1 h-1 bg-ulysse-gold rounded-full" />
        <span>{suite.capacity}</span>
      </div>
      <p className="text-sm font-medium text-ulysse-brown/90">{suite.price} / nuit</p>
    </div>
  );
}

export function Suites() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedSuite, setSelectedSuite] = useState<typeof suites[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Stop body scroll when modal is open
  useEffect(() => {
    if (selectedSuite) {
      document.body.style.overflow = "hidden";
      setSelectedImageIndex(0); // Reset on new open
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSuite]);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".suite-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="suites" className="py-24 md:py-32 bg-white px-6 md:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-4 block">
              Hébergement
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ulysse-brown">
              Suites & Appartements
            </h2>
          </div>
          <a
            href="#reserver"
            className="hidden md:inline-block text-xs uppercase tracking-[0.2em] px-8 py-4 border border-ulysse-brown text-ulysse-brown hover:bg-ulysse-brown hover:text-white transition-colors duration-500"
          >
            Toutes les suites
          </a>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {suites.map((suite, idx) => (
            <SuiteCard key={idx} suite={suite} onClick={() => setSelectedSuite(suite)} />
          ))}
        </div>
      </div>

      {selectedSuite && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8" 
          onClick={() => setSelectedSuite(null)}
        >
          <div 
            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto relative" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedSuite(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm"
            >
              <X className="w-5 h-5 text-ulysse-brown" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-[4/5] relative bg-gray-100">
                <img src={selectedSuite.images[selectedImageIndex]} className="absolute inset-0 w-full h-full object-cover transition-all duration-500" alt={selectedSuite.title} />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-4 block">Hébergement</span>
                <h2 className="font-serif text-3xl md:text-4xl text-ulysse-brown mb-6">{selectedSuite.title}</h2>
                
                <div className="flex flex-wrap items-center gap-4 text-sm font-light text-ulysse-brown/70 uppercase tracking-wider mb-8">
                  <span>{selectedSuite.surface}</span>
                  <span className="w-1 h-1 bg-ulysse-gold rounded-full" />
                  <span>{selectedSuite.capacity}</span>
                </div>
                
                <div className="prose prose-ulysse mb-8">
                  <p className="font-light text-ulysse-brown/80">
                    {selectedSuite.description}
                  </p>
                  <p className="font-light text-ulysse-brown/80 mt-4">
                    Profitez d'un séjour inoubliable avec un accès à toutes les commodités luxueuses de la Résidence Ulysse. Nos suites sont conçues pour offrir un confort absolu et une sérénité totale. Que ce soit pour des vacances en famille, une escapade romantique ou un séjour d'affaires, nos suites sauront répondre à toutes vos attentes.
                  </p>
                  <ul className="font-light text-ulysse-brown/80 mt-6 space-y-2 list-none p-0">
                    <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-ulysse-gold before:rounded-full">Climatisation individuelle</li>
                    <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-ulysse-gold before:rounded-full">Télévision à écran plat</li>
                    <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-ulysse-gold before:rounded-full">Minibar & Coffre-fort</li>
                    <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-ulysse-gold before:rounded-full">Connexion Wi-Fi haut débit</li>
                  </ul>
                </div>
                
                <div className="border-t border-ulysse-brown/10 pt-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-light text-ulysse-brown/60 mb-1">À partir de</p>
                    <p className="font-medium text-xl text-ulysse-brown">{selectedSuite.price} <span className="text-sm font-light text-ulysse-brown/60">/ nuit</span></p>
                  </div>
                  <a href="#reserver" onClick={() => setSelectedSuite(null)} className="text-xs uppercase tracking-[0.2em] px-6 py-4 md:px-8 bg-ulysse-brown text-white hover:bg-ulysse-brown/90 transition-colors inline-block text-center">
                    Réserver
                  </a>
                </div>
              </div>
            </div>
            
            {/* Gallery in Modal */}
            {selectedSuite.images.length > 1 && (
              <div className="p-8 md:px-12 border-t border-ulysse-brown/10">
                <h3 className="font-serif text-2xl text-ulysse-brown mb-6">Galerie</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedSuite.images.map((img, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedImageIndex(i)}
                      className={cn("aspect-square overflow-hidden bg-gray-100 border-2 transition-colors", selectedImageIndex === i ? "border-ulysse-gold" : "border-transparent hover:border-ulysse-brown/30")}
                    >
                      <img src={img} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" alt={`${selectedSuite.title} ${i + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

