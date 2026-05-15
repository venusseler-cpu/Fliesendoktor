import { motion } from "motion/react";
import { Award, Clock, Users, Gem, Star, ThumbsUp } from "lucide-react";

const reasons = [
  {
    title: "Meisterhafte Präzision",
    description: "Wir legen größten Wert auf Details. Jede Fuge sitzt perfekt, jede Fliese wird mit höchster Sorgfalt verlegt.",
    icon: Award
  },
  {
    title: "Termingerecht & Zuverlässig",
    description: "Wir halten uns an Absprachen. Ihr Projekt wird zum vereinbarten Termin fertiggestellt – ohne Ausreden.",
    icon: Clock
  },
  {
    title: "Alles aus einer Hand",
    description: "Vom Abriss bis zum Anstrich koordinieren wir alle Gewerke. Sie haben nur einen Ansprechpartner.",
    icon: Users
  },
  {
    title: "Premium Materialien",
    description: "Wir arbeiten ausschließlich mit hochwertigen Produkten namhafter Hersteller für langlebige Ergebnisse.",
    icon: Gem
  }
];

export function WhyUs() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold uppercase tracking-widest text-sm inline-block mb-4"
            >
              Ihre Vorteile
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-navy mb-8 leading-tight"
            >
              Warum Kunden in Bremen dem <br />
              <span className="text-gold italic">Fliesen Doktor</span> vertrauen
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-14 h-14 bg-slate-50 flex items-center justify-center rounded-2xl text-navy group-hover:bg-gold group-hover:text-white transition-all duration-300 mb-6 shadow-sm">
                    <reason.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-display text-navy mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 bg-navy text-white rounded-3xl relative overflow-hidden group premium-shadow"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#F59E0B" className="text-gold" />
                  ))}
                </div>
                <p className="text-xl italic mb-6 text-slate-100">
                  "Professionelle Arbeit, saubere Baustelle und ein fantastisches Ergebnis. Unser Badezimmer ist jetzt eine echte Wohlfühloase!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Customer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold">Thomas Meyer</p>
                    <p className="text-sm text-slate-300">Bremen Horn-Lehe</p>
                  </div>
                </div>
              </div>
              <ThumbsUp className="absolute bottom-0 right-0 w-32 h-32 text-white/5 -mb-8 -mr-8" />
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1000&auto=format&fit=crop"
                alt="Expert Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-6xl font-display font-bold text-gold mb-2">100%</div>
                <div className="text-xl font-medium tracking-wide">Zufriedenheitsgarantie</div>
              </div>
            </motion.div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-navy/5 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
