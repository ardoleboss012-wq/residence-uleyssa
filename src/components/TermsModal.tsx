import { X } from "lucide-react";
import { useEffect } from "react";

interface TermsModalProps {
  onClose: () => void;
}

export function TermsModal({ onClose }: TermsModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-8 md:p-12 text-ulysse-brown"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-ulysse-brown" />
        </button>

        <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-4 block">Légal</span>
        <h2 className="font-serif text-3xl md:text-4xl text-ulysse-brown mb-8">Mentions Légales & Conditions Générales</h2>

        <div className="prose prose-ulysse max-w-none space-y-8 font-light text-ulysse-brown/80">
          <section>
            <h3 className="font-serif text-xl text-ulysse-brown mb-4">1. Informations Légales</h3>
            <p>
              Le site <strong>Résidence Ulysse Djerba</strong> est édité par la société Résidence Ulysse.
              <br />Adresse : Route de la zone touristique, Mezraya, Djerba 4186, Tunisie.
              <br />Téléphone : +216 96 393 747
              <br />Email : contact@residenceulyssedjerba.com
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ulysse-brown mb-4">2. Propriété Intellectuelle</h3>
            <p>
              L'ensemble de ce site relève de la législation tunisienne et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ulysse-brown mb-4">3. Conditions Générales de Vente (CGV)</h3>
            <h4 className="font-medium text-ulysse-brown mb-2 mt-4">3.1. Réservations</h4>
            <p>
              Toute réservation effectuée sur notre site ou par téléphone implique l'acceptation sans réserve des présentes conditions générales. Une confirmation de réservation vous sera envoyée par email.
            </p>
            <h4 className="font-medium text-ulysse-brown mb-2 mt-4">3.2. Tarifs et Paiement</h4>
            <p>
              Les tarifs indiqués sont en Dinars Tunisiens (TND) et incluent toutes les taxes applicables. Un acompte peut être demandé lors de la réservation. Le solde est à régler sur place lors de l'arrivée ou du départ selon les conditions spécifiques de votre tarif.
            </p>
            <h4 className="font-medium text-ulysse-brown mb-2 mt-4">3.3. Annulation et Modification</h4>
            <p>
              Toute annulation ou modification doit nous être notifiée par écrit (email). Les conditions d'annulation varient selon le tarif choisi :
              <br />- Tarif flexible : Annulation gratuite jusqu'à 48h avant l'arrivée.
              <br />- Tarif non-remboursable : Aucun remboursement ne sera effectué en cas d'annulation ou de modification.
            </p>
          </section>

          <section>
            <h3 className="font-serif text-xl text-ulysse-brown mb-4">4. Protection des Données Personnelles</h3>
            <p>
              Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Les informations recueillies lors de votre réservation sont strictement confidentielles et ne seront jamais partagées à des tiers sans votre consentement.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-ulysse-brown/10 text-center">
          <button 
            onClick={onClose}
            className="text-xs uppercase tracking-[0.2em] px-8 py-4 bg-ulysse-brown text-white hover:bg-ulysse-brown/90 transition-colors inline-block"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
