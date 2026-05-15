import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2 -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-bold uppercase tracking-widest text-sm inline-block mb-4"
            >
              Kontakt aufnehmen
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-navy mb-8"
            >
              Lassen Sie uns Ihr Projekt <br />
              <span className="text-gold">gemeinsam</span> planen.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 mb-12 max-w-lg"
            >
              Sie haben Fragen oder wünschen ein unverbindliches Angebot? Wir freuen uns auf Ihre Nachricht oder Ihren Anruf.
            </motion.p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy uppercase tracking-widest mb-1">Telefon</p>
                  <a href="tel:+4917612345678" className="text-xl font-medium text-slate-600 hover:text-gold transition-colors">
                    +49 (0) 176 1234 5678
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy uppercase tracking-widest mb-1">E-Mail</p>
                  <a href="mailto:info@fliesen-doktor-bremen.de" className="text-xl font-medium text-slate-600 hover:text-gold transition-colors">
                    info@fliesen-doktor.de
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy uppercase tracking-widest mb-1">Standort</p>
                  <p className="text-xl font-medium text-slate-600">
                    Bremen, Deutschland
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy uppercase tracking-widest mb-1">Erreichbarkeit</p>
                  <p className="text-xl font-medium text-slate-600">
                    Mo - Fr: 08:00 - 18:00 Uhr
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-50">
              <iframe   src="https://api.leadconnectorhq.com/widget/form/XY0q5vKEOkysYi5SjGYw"   style={{width:"100%", height:"673px", border:"none", borderRadius:"8px"}}   title="Form 0" />
               
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy pt-20 pb-10 text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 transform rotate-45 shrink-0">
                <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-white rounded-sm"></div>
                <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-white/40 rounded-sm"></div>
                <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-white/40 rounded-sm"></div>
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-white rounded-sm"></div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tighter text-white uppercase">Fliesen</span>
                <span className="text-lg font-medium tracking-widest text-gold uppercase">Doktor</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Ihr Fachbetrieb für hochwertige Fliesenarbeiten und Badsanierungen in Bremen. Qualität, Präzision und Zuverlässigkeit seit über 40 Jahren.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-display mb-8">Leistungen</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-gold transition-colors">Badsanierung</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Fliesenverlegung</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Trockenbau</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Innenausbau</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Malerarbeiten</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-display mb-8">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-gold transition-colors">Über uns</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Referenzen</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Bewertungen</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Impressum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-display mb-8">Service Region</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Bremen (Alle Stadtteile)</li>
              <li>Bremen-Nord</li>
              <li>Horn-Lehe & Oberneuland</li>
              <li>Stuhr & Weyhe</li>
              <li>Lilienthal & Oyten</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-medium">
          <p>© {currentYear} Fliesen Doktor Bremen. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Cookie-Richtlinie</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  return (
    <>
      <a
        href="https://wa.me/4917612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce hover:animate-none group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Experten-Beratung
        </span>
      </a>
      
      <div className="fixed bottom-8 left-8 z-40 hidden md:block">
        <a
          href="tel:+4917612345678"
          className="bg-navy text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-gold transition-all premium-shadow font-bold"
        >
          <Phone size={20} />
          <span>Direkt anrufen</span>
        </a>
      </div>
    </>
  );
}
