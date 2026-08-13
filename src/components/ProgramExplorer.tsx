import React, { useState } from 'react';
import { PROGRAMS } from '../data/universityData';
import { Program } from '../types';
import { GraduationCap, Briefcase, ArrowUpRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ProgramExplorerProps {
  onSelectProgramForApply: (programId: string) => void;
}

export const ProgramExplorer: React.FC<ProgramExplorerProps> = ({ onSelectProgramForApply }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Barcha Yo\'nalishlar' },
    { id: 'it', label: 'IT va Injiniring' },
    { id: 'business', label: 'Biznes va Moliya' },
    { id: 'tourism', label: 'Turizm' },
    { id: 'pedagogy', label: 'Pedagogika va Gumanitar' },
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? PROGRAMS 
    : PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <section id="programs" className="py-20 bg-[#030712] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 backdrop-blur-md">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>BAKALAVRIAT YO'NALISHLARI (2026/2027)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
              O'z Kelajak <span className="font-bold text-indigo-500">Kasbingizni Tanlang</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Mehnat bozorida eng yuqori talabga ega bo'lgan va zamonaviy oylik maosh taklif qiluvchi 6 ta bakalavriat ta'lim yo'nalishi.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-500 text-white shadow-[0_0_10px_rgba(99,102,241,0.5)]'
                    : 'bg-black/40 border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 backdrop-blur-md'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program: Program, index: number) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Program Card Header Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {program.popular && (
                    <span className="absolute top-3 left-3 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] uppercase px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1 font-medium">
                      <Sparkles className="w-3 h-3" /> Top Talabgir
                    </span>
                  )}

                  <span className="absolute bottom-3 right-3 bg-black/60 border border-white/10 text-slate-300 font-medium text-xs px-3 py-1 rounded-lg backdrop-blur-md">
                    {program.code}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {program.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 font-light">
                    {program.description}
                  </p>

                  <div className="bg-black/40 border border-white/5 p-3 rounded-xl mb-4 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                        Bozor Talabi:
                      </span>
                      <span className="font-medium text-indigo-300">{program.demandJobs}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300 border-t border-white/5 pt-2">
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        Ta'lim Shakli:
                      </span>
                      <span className="font-medium text-slate-200">
                        {program.studyFormats.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Price & Apply Button */}
              <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-0.5">Yillik Kontrakt</div>
                  <div className="text-base font-bold text-indigo-400">{program.formattedPrice}</div>
                </div>

                <a
                  href="https://forms.amocrm.ru/rztwtdc" target="_blank" rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium px-4 py-2.5 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all flex items-center gap-1.5 backdrop-blur-md"
                >
                  <span>Topshirish</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-400" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Footnote Notice */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4 text-center text-xs text-slate-400 font-light flex items-center justify-center gap-2 backdrop-blur-md max-w-3xl mx-auto">
          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>Barcha yo'nalishlar bo'yicha bitiruvchilarga davlat namunasidagi va xalqaro miqyosda tan olinadigan diplom beriladi.</span>
        </div>

      </div>
    </section>
  );
};
