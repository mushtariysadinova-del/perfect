import React, { useState } from 'react';
import { COMPARISON_DATA } from '../data/universityData';
import { Sparkles, X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface ComparisonSectionProps {
  onOpenApply: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenApply }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'tpu'>('both');

  return (
    <section id="comparison" className="py-20 bg-[#030712] relative border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>RADIKAL KONTRAST VA TAQDIR TANLOVI</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light text-white tracking-tight"
          >
            Ikkita Yo'l Bor. <span className="font-bold text-indigo-500">Tanlov Sizniki!</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed font-light"
          >
            Keling, kelajagingizni oddiy an'anaviy oliygohlar va Perfect University ta'lim tizimi misolida solishtirib ko'ramiz:
          </motion.p>

          {/* Toggle Control */}
          <div className="inline-flex items-center bg-black/40 border border-white/10 rounded-full p-1.5 mt-6 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === 'both' ? 'bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Yonma-yon Solishtirish
            </button>
            <button
              onClick={() => setActiveTab('tpu')}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeTab === 'tpu' ? 'bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'text-slate-400 hover:text-white'
              }`}
            >
              Faqat TPU Ustunliklari
            </button>
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Traditional System Card */}
          {activeTab === 'both' && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-xl border-l-2 border-red-500/50 border border-white/10 rounded-[2rem] p-6 sm:p-8 relative overflow-hidden group transition-all"
            >
              <div className="relative h-44 rounded-2xl overflow-hidden mb-6 bg-black/40">
                <img 
                  src={COMPARISON_DATA.traditional.image} 
                  alt={COMPARISON_DATA.traditional.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 bg-red-500/10 text-red-300 border border-red-500/20 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
                    <X className="w-4 h-4 text-red-400" />
                    {COMPARISON_DATA.traditional.title}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                Eski Formatdagi Xavf-Xatarlar:
              </h3>

              <ul className="space-y-3">
                {COMPARISON_DATA.traditional.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 bg-black/40 border border-white/5 p-3.5 rounded-xl text-xs sm:text-sm text-slate-400 font-light">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      ✕
                    </div>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Perfect University Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`bg-white/5 backdrop-blur-xl border-l-2 border-indigo-500 border border-white/20 rounded-[2rem] p-6 sm:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.15)] ${
              activeTab === 'tpu' ? 'md:col-span-2 max-w-3xl mx-auto' : ''
            }`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-black/40">
              <img 
                src={COMPARISON_DATA.tpu.image} 
                alt={COMPARISON_DATA.tpu.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4">
                <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-300 border border-green-500/20 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md">
                  <Check className="w-4 h-4 text-green-400" />
                  {COMPARISON_DATA.tpu.title}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="font-bold text-indigo-400">TPU</span> Bilan Siz Erishadigan Kafolatlar:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 relative z-10">
              {COMPARISON_DATA.tpu.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-3 bg-black/40 border border-white/10 p-4 rounded-xl text-xs sm:text-sm text-slate-200 font-light hover:bg-white/5 transition-all">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <span>Karyera Markazi va Nufuzli Ish Bilan Ta'minlash</span>
              </div>

              <button
                onClick={onOpenApply}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs px-6 py-3.5 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>Kelajagingizni Tanlang</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Conclusion Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center max-w-4xl mx-auto shadow-[0_0_20px_rgba(99,102,241,0.1)] backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"></div>
          <h4 className="text-base sm:text-lg font-medium text-white mb-2">
            <span className="text-indigo-400">Xulosa:</span> Vaqtingiz Va Pullaringizni Bekorga Sarflamang!
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            Eski tizim sizdan 4 yil vaqt va millionlab mablag'ni olib, evaziga ishsizlik xavfini berishi mumkin. TPU esa birinchi kundanoq sizni tayyor va talabgir mutaxassis qiladi.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
