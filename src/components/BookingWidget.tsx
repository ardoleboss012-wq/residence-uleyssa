import { useState } from "react";
import { useTranslation } from "../contexts/LanguageContext";
import { Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function BookingWidget() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");

  const handleBook = () => {
    navigate("/reservation");
  };

  return (
    <section id="reserver" className="py-12 bg-ulysse-cream -mt-8 relative z-20">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-4 md:p-6 shadow-xl flex flex-col md:flex-row items-end md:items-center justify-between gap-4 md:gap-6 border-t-4 border-ulysse-gold"
        >
          <div className="w-full md:w-auto flex-1 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Arrivée
              </label>
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border-b border-ulysse-brown/20 pb-2 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent"
              />
            </div>
            
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Départ
              </label>
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border-b border-ulysse-brown/20 pb-2 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent"
              />
            </div>
          </div>

          <div className="w-full md:w-auto flex-1 flex gap-4 sm:gap-6">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                Adultes
              </label>
              <select 
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full border-b border-ulysse-brown/20 pb-2 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-widest text-ulysse-brown font-medium flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                Enfants
              </label>
              <select 
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                className="w-full border-b border-ulysse-brown/20 pb-2 text-sm focus:outline-none focus:border-ulysse-gold transition-colors bg-transparent cursor-pointer"
              >
                {[0, 1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full md:w-auto mt-4 md:mt-0">
            <button 
              onClick={handleBook}
              className="w-full md:w-auto bg-ulysse-brown text-white text-xs uppercase tracking-widest px-8 py-4 hover:bg-ulysse-gold transition-colors duration-300"
            >
              Vérifier la disponibilité
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
