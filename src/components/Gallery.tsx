import { motion } from "motion/react";
import { Maximize2 } from "lucide-react";
import project1Image from "@/src/assets/images/regenerated_image_1778843593634.png";
import project2Image from "@/src/assets/images/regenerated_image_1778843729097.png";
import project3Image from "@/src/assets/images/regenerated_image_1778843764456.png";
import project4Image from "@/src/assets/images/regenerated_image_1778843969641.png";
import project5Image from "@/src/assets/images/regenerated_image_1778843970975.png";
import project6Image from "@/src/assets/images/regenerated_image_1778843971826.png";

export function Gallery() {
  const projects = [
    {
      title: "Luxus Bad Modernisierung",
      category: "Badsanierung",
      image: project1Image,
      badge: "Nachher"
    },
    {
      title: "Großformat Fliesen Verlegung",
      category: "Fliesenarbeiten",
      image: project2Image,
      badge: "Projekt"
    },
    {
      title: "Design Dusche & Armaturen",
      category: "Badsanierung",
      image: project3Image,
      badge: "Premium"
    },
    {
      title: "Präzisions-Kanten Abschluss",
      category: "Meisterarbeit",
      image: project4Image,
      badge: "Detail"
    },
    {
      title: "Modernes Gäste-WC",
      category: "Badplanung",
      image: project5Image,
      badge: "Projekt"
    },
    {
      title: "Wellness-Bereich Privat",
      category: "Exklusivbau",
      image: project6Image,
      badge: "Nachher"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold uppercase tracking-widest text-sm inline-block mb-4"
            >
              Unsere Referenzen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-0"
            >
              Exzellente Ergebnisse, <br />
              die für sich <span className="text-gold">sprechen</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-navy px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-white transition-all">
              Projekt anfragen
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute top-6 left-6">
                <span className="bg-gold text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded-full">
                  {project.badge}
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-gold font-bold uppercase tracking-widest text-[10px] mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white font-display mb-4">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <Maximize2 size={16} />
                  <span>Vollbild anzeigen</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50 rounded-3xl"
        >
          <div className="bg-navy rounded-[1.4rem] p-10 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Planen Sie Ihr eigenes Projekt?
            </h3>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Ob kleines Gäste-WC oder großzügiges Luxusbad – wir beraten Sie fachmännisch vor Ort in Bremen und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+49123456789" className="w-full sm:w-auto bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-gold-light transition-all shadow-lg">
                Jetzt Termin vereinbaren
              </a>
              <a href="https://wa.me/49123456789" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                WhatsApp Nachricht
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
