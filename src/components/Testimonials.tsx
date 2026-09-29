import { Star } from "lucide-react";

const reviews = [
  {
    name: "Pascal",
    country: "France",
    text: "« Excellent, copieux, complet et généreux ! Ali notre hôte est vraiment très sympathique 👍🤗 »",
    rating: 5,
  },
  {
    name: "Aurelie",
    country: "France",
    text: "« Résidence très familiale, on s est senti super bien là bas. Et le personnel est très sympathique. Très jolie residence »",
    rating: 5,
  },
  {
    name: "Ceyna",
    country: "France",
    text: "« Le lieu ,le décor ,les piscines ,l’accueil du personnel de l’établissement. Le petit déjeuner très copieux délicieux ,la propreté du lieu et des chambres vraiment formidable. Tres facile a trouver avec Google Maps . Vraiment 10/10 une superbe... »",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section id="avis" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-ulysse-gold mb-4 block">Livre d'or</span>
          <h2 className="font-serif text-3xl md:text-5xl text-ulysse-brown mb-6">Ce que nos clients disent</h2>
          <p className="max-w-2xl mx-auto font-light text-ulysse-brown/80 leading-relaxed">
            Découvrez les expériences vécues par nos hôtes lors de leur séjour à la Résidence Ulysse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-ulysse-beige/30 p-8 border border-ulysse-brown/10 hover:border-ulysse-gold transition-colors">
              <div className="flex gap-1 mb-6 text-ulysse-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-light text-ulysse-brown/80 italic mb-8 min-h-[120px]">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-ulysse-brown text-white flex items-center justify-center font-serif text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-ulysse-brown">{review.name}</p>
                  <p className="text-xs font-light text-ulysse-brown/60">{review.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
