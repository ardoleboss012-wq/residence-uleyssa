import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { TermsModal } from "./TermsModal";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-ulysse-cream px-6 md:px-16 border-t border-ulysse-brown/10">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-6 block">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ulysse-brown mb-8 leading-tight">
            Préparez votre séjour
          </h2>
          <p className="font-sans font-light text-ulysse-brown/80 text-lg leading-relaxed mb-12 max-w-md">
            Notre équipe est à votre entière disposition pour personnaliser votre expérience et répondre à toutes vos demandes.
          </p>

          <div className="space-y-6 text-ulysse-brown/80 font-light mb-12">
            <p>
              <strong className="block font-medium text-ulysse-brown mb-1">Adresse</strong>
              Route de la zone touristique, Mezraya, Djerba 4186, Tunisie
            </p>
            <p>
              <strong className="block font-medium text-ulysse-brown mb-1">Téléphone & WhatsApp</strong>
              +216 96 393 747
            </p>
            <p>
              <strong className="block font-medium text-ulysse-brown mb-1">Email</strong>
              contact@residenceulyssedjerba.com
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 shadow-sm">
          <h3 className="font-serif text-2xl text-ulysse-brown mb-8">Envoyer un message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-ulysse-brown/70">Nom complet</label>
                <input type="text" className="w-full border-b border-ulysse-brown/20 pb-2 bg-transparent outline-none focus:border-ulysse-gold transition-colors font-light" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-ulysse-brown/70">Email</label>
                <input type="email" className="w-full border-b border-ulysse-brown/20 pb-2 bg-transparent outline-none focus:border-ulysse-gold transition-colors font-light" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-ulysse-brown/70">Sujet</label>
              <input type="text" className="w-full border-b border-ulysse-brown/20 pb-2 bg-transparent outline-none focus:border-ulysse-gold transition-colors font-light" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-ulysse-brown/70">Message</label>
              <textarea rows={4} className="w-full border-b border-ulysse-brown/20 pb-2 bg-transparent outline-none focus:border-ulysse-gold transition-colors font-light resize-none" />
            </div>
            <button className="group flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-medium pt-4">
              <span className="text-ulysse-brown transition-colors group-hover:text-ulysse-gold">
                Envoyer
              </span>
              <div className="w-8 h-[1px] bg-ulysse-brown transition-all group-hover:w-12 group-hover:bg-ulysse-gold" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-ulysse-black text-white/70 py-12 px-6 md:px-16 text-center md:text-left">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-12 mb-8">
          <h2 className="font-serif text-3xl text-white tracking-widest uppercase">Ulysse</h2>
          <div className="flex gap-8 text-sm font-light tracking-widest uppercase">
            <a href="#" className="hover:text-ulysse-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-ulysse-gold transition-colors">Facebook</a>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Résidence Ulysse Djerba. Tous droits réservés.</p>
          <div className="flex gap-6">
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors uppercase tracking-widest">Mentions Légales & CGV</button>
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-white transition-colors uppercase tracking-widest">Politique de confidentialité</button>
          </div>
        </div>
      </footer>

      {isTermsOpen && <TermsModal onClose={() => setIsTermsOpen(false)} />}
    </>
  );
}
