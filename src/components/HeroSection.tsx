import React from 'react';
import { UNIVERSITY_INFO } from '../data/universityData';
import { ShieldCheck, Award, ArrowRight, Presentation, Calculator, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenApply: () => void;
  onScrollToSection: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply, onScrollToSection }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      
      {/* Background glowing visuals */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Urgency & License Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-red-500/30 text-red-400 text-xs font-medium px-3.5 py-1.5 rounded-full animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            ACHCHIQ HAQIQAT & SIKLNI SINDIRISH
          </span>

          <span className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 text-indigo-300 text-xs font-medium px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            Litsenziya {UNIVERSITY_INFO.licenseNo} ({UNIVERSITY_INFO.licenseDate})
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight lg:leading-[1.1] max-w-5xl tracking-tight mb-6"
        >
          4 Yillik Umringizni Shunchaki{' '}
          <span className="font-bold text-indigo-500">
            "Qog'oz"
          </span>{' '}
          Uchun Sarflamoqchimisiz?
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 font-light"
        >
          <strong className="text-white font-medium">"Xususiy oliygohlar faqat kontrakt yig'adi, bilim bermaydi"</strong> degan stereotipni unuting. Bugungi zamonaviy bozorda quruq diplom hech narsani hal qilmaydi. Perfect University sizga qog'oz emas, real daromad va kafolatlangan karyera beradi.
        </motion.p>

        {/* Visual Header Banner Image with Overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative w-full h-48 sm:h-64 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_20px_rgba(99,102,241,0.2)] mb-10 group bg-black/40 backdrop-blur-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" 
            alt="Tashkent Perfect University Students"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-6 sm:p-10">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-indigo-400 font-medium text-sm mb-2">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Zamonaviy Ta'lim & Kafolatlangan Karyera Markazi</span>
              </div>
              <p className="text-white text-base sm:text-2xl font-semibold leading-snug">
                70% Amaliyot + 3-kursdan Maoshli Ish + Dual Xalqaro Diplom
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
                Rasmiy qabul: {UNIVERSITY_INFO.admissionPeriod}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stat Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] text-center group transition-all duration-300 hover:bg-white/10 shadow-lg">
            <div className="text-4xl font-bold text-white tracking-tight mb-2">
              <span>{UNIVERSITY_INFO.stats.practiceRate}</span>
            </div>
            <div className="text-[10px] font-medium text-indigo-400 uppercase tracking-[0.2em] mb-2">Sof Amaliyot</div>
            <div className="text-xs text-slate-400 leading-relaxed font-light">Laboratoriya va xalqaro kompaniyalar kodi ustida ishlash</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] text-center group transition-all duration-300 hover:bg-white/10 shadow-lg">
            <div className="text-4xl font-bold text-white tracking-tight mb-2">
              <span>{UNIVERSITY_INFO.stats.employmentRate}</span>
            </div>
            <div className="text-[10px] font-medium text-indigo-400 uppercase tracking-[0.2em] mb-2">3-kursdan Ish</div>
            <div className="text-xs text-slate-400 leading-relaxed font-light">Karyera markazi orqali to'g'ridan-to'g'ri vakansiyalar</div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] text-center group transition-all duration-300 hover:bg-white/10 shadow-lg">
            <div className="text-4xl font-bold text-white tracking-tight mb-2">
              <span>{UNIVERSITY_INFO.stats.diplomaRate}</span>
            </div>
            <div className="text-[10px] font-medium text-indigo-400 uppercase tracking-[0.2em] mb-2">Xalqaro Diplom</div>
            <div className="text-xs text-slate-400 leading-relaxed font-light">O'zbekiston vazirligi va xalqaro standartlar bo'yicha</div>
          </div>
        </motion.div>

        {/* License Verification Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-indigo-400 shrink-0 backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2 mb-1">
                Qonuniy va Davlat Tomonidan Tan Olingan
                <CheckCircle2 className="w-4 h-4 text-green-400" />
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi tomonidan berilgan <strong className="text-indigo-300 font-medium">{UNIVERSITY_INFO.licenseNo} litsenziya ({UNIVERSITY_INFO.licenseDate})</strong> — 100% qonuniy va davlat namunasidagi diplomingiz kafolatidir.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onOpenApply}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium text-sm shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>HOZIROQ HUJJAT TOPSHIRISH</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onScrollToSection('horizontal-deck')}
            className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white px-6 py-4 rounded-full font-medium text-sm transition-all flex items-center gap-2"
          >
            <Presentation className="w-4 h-4 text-indigo-400" />
            <span>Gorizontal Taqdimot (7 Slayd)</span>
          </button>

          <button
            onClick={() => onScrollToSection('calculator')}
            className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white px-6 py-4 rounded-full font-medium text-sm transition-all flex items-center gap-2"
          >
            <Calculator className="w-4 h-4 text-purple-400" />
            <span>Shartnoma Kalkulyatori</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
