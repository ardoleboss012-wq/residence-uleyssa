import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "Quelles sont les heures d'arrivée et de départ ?",
    answer: "Le check-in s'effectue à partir de 15h00 et le check-out jusqu'à 12h00. Une arrivée anticipée ou un départ tardif peuvent être organisés selon nos disponibilités."
  },
  {
    question: "La résidence est-elle adaptée aux enfants ?",
    answer: "Absolument. Nous disposons d'une pataugeoire dédiée, de suites familiales spacieuses et pouvons fournir des lits bébés sur simple demande préalable."
  },
  {
    question: "Proposez-vous un service de navette depuis l'aéroport ?",
    answer: "Oui, nous proposons un service de transfert privé depuis l'Aéroport International de Djerba-Zarzis, situé à environ 20 minutes de la résidence."
  },
  {
    question: "Le hammam et la piscine intérieure sont-ils inclus ?",
    answer: "L'accès à la piscine intérieure est libre pour tous nos résidents. Le hammam et les soins spa nécessitent une réservation à la réception."
  }
];

export function Faq() {
  return (
    <section className="py-24 md:py-32 bg-white px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-4 block">
            Informations pratiques
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-ulysse-brown">
            Questions Fréquentes
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <Accordion.Item 
              key={idx} 
              value={`item-${idx}`}
              className="border-b border-ulysse-brown/10 overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between py-6 font-serif text-xl md:text-2xl text-left text-ulysse-brown group [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-ulysse-gold transition-transform duration-300" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-ulysse-brown/70 font-light text-base md:text-lg leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-6">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
