import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Pools() {
  const outdoorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!outdoorRef.current) return;

    gsap.fromTo(
      outdoorRef.current.querySelector("img"),
      { scale: 1.1 },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: outdoorRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="piscines">
      {/* Outdoor Pool */}
      <div ref={outdoorRef} className="bg-ulysse-cream py-24 md:py-32 px-6 md:px-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 overflow-hidden aspect-[4/3] order-2 lg:order-1">
            <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmzyJ8zo9YbkIfeXKTHXtRzYiF_daxu6idUQJArxTUJNJNs-MIF0CRfE64qSX10W0EGkoLYEJnVHhDGAt5ZmQHf61QywAqJoLOxhjQB6GqaIZuf7gpxPPddOU50RfV75_9ShDSzHA=s680-w680-h510-rw" alt="Piscine extérieure" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-6 block">Le Soleil</span>
            <h2 className="font-serif text-4xl md:text-5xl text-ulysse-brown mb-8 leading-tight">
              Piscine Extérieure
            </h2>
            <p className="font-sans font-light text-ulysse-brown/80 text-lg leading-relaxed mb-8 max-w-lg">
              Plongez dans notre grand bassin extérieur bordé de palmiers. 
              Une invitation à la détente sous le ciel azur de Djerba, 
              avec des chaises longues en bois et un service attentionné tout au long de la journée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
