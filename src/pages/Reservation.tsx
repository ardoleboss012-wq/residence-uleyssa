import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, MessageSquare, ArrowRight } from "lucide-react";
import { useTranslation } from "../contexts/LanguageContext";

export function Reservation() {
  const { t } = useTranslation();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [name, setName] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour, je souhaite réserver à la Résidence Ulysse Djerba.%0A%0ANom: ${name || 'Non spécifié'}%0AArrivée: ${checkIn || 'Non spécifié'}%0ADépart: ${checkOut || 'Non spécifié'}%0AAdultes: ${adults}%0AEnfants: ${children}%0AMessage: ${messageText || 'Aucun'}%0A%0AMerci de m'informer de la disponibilité.`;
    window.open(`https://wa.me/21696393747?text=${message}`, "_blank");
  };

  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 bg-ulysse-cream min-h-screen">
      <div className="max-w-screen-md mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-ulysse-gold"
        >
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-5xl text-ulysse-brown mb-4 tracking-wide">
              {t("nav.book_stay") || "Réserver votre séjour"}
            </h1>
            <p className="text-ulysse-brown/70 font-light max-w-lg mx-auto">
              Remplissez le formulaire ci-dessous pour nous envoyer votre demande de réservation. Nous vous répondrons dans les plus brefs délais via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleBook} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium">Nom complet</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border-b border-ulysse-brown/20 pb-3 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent"
                placeholder="Votre nom et prénom"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  Arrivée
                </label>
                <input 
                  type="date" 
                  value={checkIn}
                  required
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border-b border-ulysse-brown/20 pb-3 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  Départ
                </label>
                <input 
                  type="date" 
                  value={checkOut}
                  required
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border-b border-ulysse-brown/20 pb-3 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                  <Users className="w-3.5 h-3.5" />
                  Adultes
                </label>
                <select 
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full border-b border-ulysse-brown/20 pb-3 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                  <Users className="w-3.5 h-3.5" />
                  Enfants
                </label>
                <select 
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  className="w-full border-b border-ulysse-brown/20 pb-3 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent cursor-pointer"
                >
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5" />
                Message (Optionnel)
              </label>
              <textarea 
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                rows={3}
                className="w-full border-b border-ulysse-brown/20 pb-3 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent resize-none"
                placeholder="Demandes spéciales, questions..."
              />
            </div>

            <div className="pt-6">
              <button 
                type="submit"
                className="w-full bg-ulysse-brown text-white text-sm uppercase tracking-widest px-8 py-5 hover:bg-ulysse-gold transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Confirmer via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
