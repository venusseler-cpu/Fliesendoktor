/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Contact, Footer, StickyCTA } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Reviews />
        <div id="about" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905235858-f3b42f6bc479?q=80&w=1000&auto=format&fit=crop" 
                  alt="Team Work" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/20"></div>
                <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl">
                  <p className="text-navy font-bold text-lg mb-2">„Wir verlegen nicht nur Fliesen, wir schaffen Lebensqualität.“</p>
                  <p className="text-gold font-bold">— Inhaber Fliesen Doktor</p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <span className="text-gold font-bold uppercase tracking-widest text-sm inline-block mb-4">Über das Unternehmen</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-8 leading-tight">Handwerkstradition trifft moderne <span className="text-gold">Badsanierung</span></h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Seit über 40 Jahren ist der <strong>Fliesen Doktor</strong> Ihr kompetenter Partner für alle Arbeiten rund um Fliesen, Bad und Innenausbau in Bremen und Umgebung. Was als kleiner Familienbetrieb begann, führen wir nun mit Leidenschaft als eingespieltes Vater-Sohn-Team fort.
                  </p>
                  <p>
                    Unser Anspruch ist es, jedes Projekt so umzusetzen, als wäre es unser eigenes Zuhause. Dabei setzen wir auf modernste Techniken, nachhaltige Materialien und eine transparente Kommunikation.
                  </p>
                  <div className="pt-8 grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-4xl font-display font-bold text-navy mb-1">500+</p>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Fertige Bäder</p>
                    </div>
                    <div>
                      <p className="text-4xl font-display font-bold text-navy mb-1">40+</p>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Jahre Erfahrung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

