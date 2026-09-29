import { useEffect, useRef } from "react";
import suiteImg from "../assets/images/suite_interieur_v2_1784149280743.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ResidenceDetails() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imgRef.current || !textRef.current) return;

    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 1.1, clipPath: "inset(20% 0 0 0)" },
      {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0% 0 0 0)",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-16 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 lg:gap-32">
        <div ref={textRef} className="w-full md:w-1/2 lg:w-5/12 flex flex-col items-start order-2 md:order-1">
          <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-6">Authenticité</span>
          <h3 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            L'esprit d'une maison de vacances, le service d'un hôtel.
          </h3>
          <p className="font-sans font-light text-ulysse-brown/80 text-lg mb-10 leading-relaxed">
            Profitez de l'intimité de nos appartements tout en bénéficiant de nos infrastructures. 
            Des terrasses ensoleillées, des voilages en lin qui dansent avec la brise, 
            et des détails en terre cuite pour une immersion totale dans la culture locale.
          </p>
          <a
            href="#suites"
            className="group relative flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium"
          >
            <span className="relative z-10 text-ulysse-brown transition-colors group-hover:text-ulysse-gold">
              Voir nos suites
            </span>
            <div className="w-12 h-[1px] bg-ulysse-brown transition-all group-hover:w-16 group-hover:bg-ulysse-gold" />
          </a>
        </div>

        <div className="w-full md:w-1/2 lg:w-7/12 order-1 md:order-2 overflow-hidden aspect-[4/5] md:aspect-[3/4]">
          <img
            ref={imgRef}
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583697328.jpg?k=110ef944d1f256ba3f5ed20b7aa6e4436f68750ded8a5e22ac69ec8eab2149a3&o="
            alt="Intérieur de la suite Ulysse"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
