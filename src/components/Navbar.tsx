import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../contexts/LanguageContext";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.residence"), href: "/#residence" },
    { name: t("nav.suites"), href: "/#suites" },
    { name: t("nav.pools"), href: "/#piscines" },
    { name: t("nav.gallery"), href: "/#galerie" },
    { name: t("nav.discover"), href: "/#djerba" },
    { name: t("nav.contact"), href: "/#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out py-6 px-8 md:px-16 flex items-center justify-between",
          scrolled ? "bg-ulysse-cream/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent text-white"
        )}
      >
        <div className="font-serif text-2xl tracking-widest uppercase">
          <a href="/" className={cn("transition-colors duration-700", scrolled ? "text-ulysse-brown" : "text-white")}>
            Ulysse
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {links.slice(1, 6).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors duration-300 hover:text-ulysse-gold",
                scrolled ? "text-ulysse-brown/80" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className={cn(
              "flex items-center gap-2 text-sm uppercase tracking-widest transition-colors duration-300 hover:text-ulysse-gold",
              scrolled ? "text-ulysse-brown/80" : "text-white/90"
            )}
          >
            <Globe className="w-4 h-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          <button
            onClick={() => {
              window.location.href = "/reservation";
            }}
            className={cn(
              "text-xs uppercase tracking-widest px-6 py-3 border transition-colors duration-500",
              scrolled
                ? "border-ulysse-brown text-ulysse-brown hover:bg-ulysse-brown hover:text-white"
                : "border-white text-white hover:bg-white hover:text-ulysse-brown"
            )}
          >
            {t("nav.book")}
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-4 z-50">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className={cn(
              "flex items-center gap-1 text-sm uppercase tracking-widest transition-colors",
              scrolled || menuOpen ? "text-ulysse-brown" : "text-white"
            )}
          >
            <Globe className="w-4 h-4" />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className={cn("w-6 h-6", menuOpen ? "text-ulysse-brown" : "")} />
            ) : (
              <Menu className={cn("w-6 h-6", scrolled ? "text-ulysse-brown" : "text-white")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-ulysse-cream flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl text-ulysse-brown hover:text-ulysse-gold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.1 + 0.3, duration: 0.5 }}
              href="/reservation"
              onClick={() => setMenuOpen(false)}
              className="mt-8 text-sm uppercase tracking-widest px-8 py-4 border border-ulysse-brown text-ulysse-brown hover:bg-ulysse-brown hover:text-white transition-colors"
            >
              {t("nav.book_stay")}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
