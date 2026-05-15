import { motion } from "motion/react";
import { Star, MessageSquareQuote } from "lucide-react";

interface Review {
  name: string;
  location: string;
  date: string;
  stars: number;
  project: string;
  content: string;
}

const reviews: Review[] = [
  {
    name: "Janina Koeppel",
    location: "Amelinghausen",
    date: "22. Apr 2025",
    stars: 5,
    project: "Verlegen von Wand- und Bodenfliesen: 50 m²; Wand; Badezimmer",
    content: "Top zufrieden! Qualität und Leistung sprechen für sich. Sehr sympathisch und freundlich mit großem Tatendrang. Mit gutem Gewissen kann ich den Fliesen Doktor weiter empfehlen."
  },
  {
    name: "Matthias Koch",
    location: "Bremen",
    date: "9. Juli 2025",
    stars: 5,
    project: "Verlegen von Wand- und Bodenfliesen: 5 m²; Wand, Boden; Badezimmer",
    content: "Klasse Handwerker, nette Leute, top Arbeit: mit vielen Anregungen und Ideen haben die „Doktoren“ unser neues Badezimmer umgesetzt - samt kleineren Elektro- und Klempnerarbeiten. Verlässlich, sauber, fachkompetent und sehr nett - absolute Weiterempfehlung."
  },
  {
    name: "Ashref Eljehaimi",
    location: "Verden",
    date: "12. Feb 2026",
    stars: 4,
    project: "Verlegen von Wand- und Bodenfliesen: Innen; Austausch; 90 m²",
    content: "Die Arbeit wurde sehr gut ausgeführt und alles, was wir besprochen haben, wurde durchgeführt. Auf jeden Fall zu empfehlen."
  },
  {
    name: "Sven",
    location: "Bremen",
    date: "19. Aug 2024",
    stars: 5,
    project: "Fliesen legen: 18 m²; Boden; Garage",
    content: "Freundlich, schnell, unkompliziert, tolle Arbeit... uneingeschränkt weiter zu empfehlen."
  },
  {
    name: "Philipp",
    location: "Bremen",
    date: "17. Okt 2024",
    stars: 5,
    project: "Fliesen legen: 2 m²; Wand, Boden; Badezimmer",
    content: "Schnell, unkompliziert, freundlich, sauber und ordentlich."
  },
  {
    name: "Anonym",
    location: "Bremen",
    date: "6. Dez 2025",
    stars: 4,
    project: "Verlegen von Wand- und Bodenfliesen: Innen; Neuinstallation; 157 m²",
    content: "Fliesen-Doktor hat alle Absprachen eingehalten. Die Arbeiten wurden akkurat und fehlerfrei ausgeführt. Die Rechnungslegung war korrekt. Kann man wirklich weiterempfehlen."
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-widest text-sm inline-block mb-4"
          >
            Kundenmeinungen
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-navy mb-6"
          >
            Was unsere Kunden sagen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Zufriedene Kunden sind unser bester Qualitätsbeweis. Hier finden Sie echte Bewertungen von abgeschlossenen Projekten.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 gap-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, index) => (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full relative flex-none w-[85vw] md:w-auto snap-center md:snap-align-none"
            >
              <div className="absolute top-8 right-8 text-gold/20">
                <MessageSquareQuote size={40} />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.stars ? "#F59E0B" : "none"}
                    className={i < review.stars ? "text-gold" : "text-slate-300"}
                  />
                ))}
              </div>

              <p className="text-sm font-bold text-navy/60 uppercase tracking-widest mb-4">
                {review.project}
              </p>

              <blockquote className="text-slate-600 italic mb-8 grow">
                "{review.content}"
              </blockquote>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div>
                  <p className="font-bold text-navy">{review.name}</p>
                  <p className="text-sm text-slate-400">{review.location}</p>
                </div>
                <p className="text-xs font-medium text-slate-400">
                  {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy/5 rounded-full text-navy font-semibold">
            <Star size={18} fill="#F59E0B" className="text-gold" />
            <span>4.9 / 5.0 Durchschnittliche Bewertung auf Basis von über 100 Projekten</span>
          </div>
        </div>
      </div>
    </section>
  );
}
