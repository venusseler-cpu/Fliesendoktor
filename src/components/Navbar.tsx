import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Leistungen", href: "#services" },
    { name: "Über uns", href: "#about" },
    { name: "Galerie", href: "#gallery" },
    { name: "Bewertungen", href: "#reviews" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="hover:opacity-90 transition-opacity">
          <Logo variant={isScrolled ? "dark" : "light"} className={isScrolled ? "scale-90" : ""} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider hover:text-gold transition-colors ${
                isScrolled ? "text-navy" : "text-white" 
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+49123456789"
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all premium-shadow ${
              isScrolled 
                ? "bg-navy text-white hover:bg-slate-800" 
                : "bg-white text-navy hover:bg-gold hover:text-white"
            }`}
          >
            <Phone size={16} />
            <span>Jetzt anrufen</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled ? "text-navy" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-navy hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="tel:+49123456789"
                  className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-xl font-semibold"
                >
                  <Phone size={18} />
                  <span>Anrufen</span>
                </a>
                <a
                  href="https://wa.me/49123456789"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
