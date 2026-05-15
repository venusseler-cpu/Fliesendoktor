import { motion } from "motion/react";

export function Logo({ className = "", variant = "dark" }: { className?: string; variant?: "light" | "dark" }) {
  const isLight = variant === "light";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 transform rotate-45 shrink-0">
        <div className={`absolute top-0 left-0 w-4.5 h-4.5 ${isLight ? "bg-white" : "bg-navy"} rounded-sm shadow-sm`}></div>
        <div className="absolute top-0 right-0 w-4.5 h-4.5 bg-slate-400 rounded-sm shadow-sm"></div>
        <div className="absolute bottom-0 left-0 w-4.5 h-4.5 bg-slate-400 rounded-sm shadow-sm"></div>
        <div className={`absolute bottom-0 right-0 w-4.5 h-4.5 ${isLight ? "bg-white" : "bg-navy"} rounded-sm shadow-sm`}></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-tighter ${isLight ? "text-white" : "text-navy"} uppercase`}>Fliesen</span>
        <span className="text-xl font-medium tracking-widest text-gold uppercase">Doktor</span>
        <div className="h-0.5 w-full bg-gold mt-1"></div>
        <span className={`text-[8px] tracking-[0.2em] ${isLight ? "text-white/80" : "text-navy"} uppercase font-semibold mt-1`}>
          Fliesen | Bad | Renovierung
        </span>
      </div>
    </div>
  );
}
