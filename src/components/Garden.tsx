import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import jardinImg from "../assets/images/jardin_mediterraneen_luxe_1784312635112.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Garden() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imgRef.current || !textRef.current) return;

    gsap.to(imgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 scale-110">
        <img
          ref={imgRef}
          src={jardinImg}
          alt="Jardin méditerranéen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ulysse-black/40" />
      </div>

      <div ref={textRef} className="relative z-10 text-center px-6 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.3em] text-white/80 mb-6 block">Le Jardin Botanique</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white leading-tight">
          À l'ombre des oliviers centenaires.
        </h2>
      </div>
    </section>
  );
}
