import { motion } from "motion/react";
import { ChevronRight, ShieldCheck, MapPin } from "lucide-react";
import { EtheralShadow } from "./ui/etheral-shadow";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <EtheralShadow 
          color="rgba(15, 23, 42, 0.4)" 
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.3, scale: 1.2 }}
          sizing="fill"
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-85"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2000&auto=format&fit=crop")',
            }}
          >
            <div className="absolute inset-0 bg-navy/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/20 to-transparent"></div>
          </div>
        </EtheralShadow>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-gold font-semibold uppercase tracking-widest mb-6"
          >
            <MapPin size={20} />
            <span>Fliesenlegerfachbetrieb in Bremen</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8"
          >
            Ihr Experte für <span className="text-gold">Fliesen</span> & <br />
            <span className="relative">
              Badsanierung
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span> in Bremen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl"
          >
            Moderne Badezimmer, präzise Fliesenarbeiten und komplette Renovierungen – alles aus einer Hand. Wir verwandeln Ihre Wohnträume in Realität mit Handwerkskunst aus Leidenschaft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-5"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gold-light transition-all premium-shadow w-full sm:w-auto justify-center"
            >
              <span>Angebot anfragen</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
            >
              Unsere Leistungen
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-gold" />
              <span className="text-sm font-medium">Meisterqualität</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-gold" />
              <span className="text-sm font-medium">Festpreisgarantie</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-gold" />
              <span className="text-sm font-medium">Über 40 Jahre Erfahrung</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent transform translate-y-px"></div>
    </section>
  );
}
