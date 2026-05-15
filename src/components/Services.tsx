import { motion } from "motion/react";
import { Bath, LayoutGrid, Hammer, Paintbrush, Trash2, Home, CheckCircle2, Wrench } from "lucide-react";

import service1Img from "@/src/assets/images/regenerated_image_1778865207470.png";
import service2Img from "@/src/assets/images/regenerated_image_1778846015125.png";
import service3Img from "@/src/assets/images/regenerated_image_1778846012942.png";
import service4Img from "@/src/assets/images/regenerated_image_1778846011151.png";
import service5Img from "@/src/assets/images/regenerated_image_1778846004833.png";
import service6Img from "@/src/assets/images/regenerated_image_1778846009219.png";

const services = [
  {
    title: "Badsanierung",
    description: "Komplette Modernisierung Ihres Badezimmers aus einer Hand – von der Planung bis zur Fertigstellung.",
    icon: Bath,
    image: service1Img
  },
  {
    title: "Wand & Bodenfliesen",
    description: "Präzise Verlegung von Fliesen in allen Formaten, von Mosaik bis hin zu großformatigen Platten.",
    icon: LayoutGrid,
    image: service2Img
  },
  {
    title: "Trockenbau",
    description: "Moderne Raumgestaltung und Funktionswände für optimale Raumnutzung und Ästhetik.",
    icon: Home,
    image: service3Img
  },
  {
    title: "Malerarbeiten",
    description: "Fachgerechte Anstriche und kreative Wandgestaltungen für ein harmonisches Gesamtbild.",
    icon: Paintbrush,
    image: service4Img
  },
  {
    title: "Klempnerarbeiten",
    description: "Installation von Wasser- und Abwasserleitungen sowie fachgerechte Montage Ihrer Sanitäranlagen.",
    icon: Wrench,
    image: service5Img
  },
  {
    title: "Innenausbau",
    description: "Ganzheitliche Renovierung Ihrer Wohnräume für mehr Lebensqualität und Wertsteigerung.",
    icon: Hammer,
    image: service6Img
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold uppercase tracking-widest text-sm inline-block mb-4"
          >
            Was wir für Sie tun
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-navy mb-6"
          >
            Unsere Leistungen im Überblick
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Von der ersten Fliese bis zum fertigen Traumbad – wir bieten Ihnen ein Rundum-Sorglos-Paket für Ihre Renovierung in Bremen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl text-navy shadow-lg">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold font-display text-navy mb-4 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>Höchste Präzision</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>Langlebige Materialien</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl text-navy font-bold hover:bg-navy hover:text-white transition-all"
                >
                  Mehr erfahren
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
