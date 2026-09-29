import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/21696393747"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "w-12 h-12 bg-ulysse-brown text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-500",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
