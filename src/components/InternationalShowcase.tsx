import React from 'react';
import { PARTNERS } from '../data/universityData';
import { Plane, Globe, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface InternationalShowcaseProps {
  onOpenApply: () => void;
}

export const InternationalShowcase: React.FC<InternationalShowcaseProps> = ({ onOpenApply }) => {
  return (
    <section id="international" className="py-20 bg-[#030712] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 backdrop-blur-md">
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>GLOBAL DUAL TA'LIM VA XALQARO IMKONIYATLAR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            O'zbekistonda O'qing, <span className="font-bold text-indigo-500">Dunyo Bo'ylab</span> Sayohat Qiling
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
            Perfect University diplomlari xalqaro darajada tan olinadi va sizga Yevropa hamda Osiyoning yetakchi oliygohlarida ta'limingizni davom ettirish eshiklarini ochadi.
          </p>
        </div>

        {/* Partner Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PARTNERS.map((p, idx) => (
            <motion.div
              key={p.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 p-6 rounded-[2rem] text-center group transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
            >
              <img src={p.flagUrl} alt={p.country} className="w-14 h-9 object-cover rounded-md mx-auto mb-4 shadow-md border border-white/10" />
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{p.country}</h3>
              <div className="text-xs font-medium text-indigo-400 mb-3 uppercase tracking-wider">{p.title}</div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{p.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Work & Travel Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-2xl border-2 border-indigo-500/30 rounded-[2rem] p-8 sm:p-10 shadow-[0_0_40px_rgba(99,102,241,0.15)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-medium px-3 py-1 rounded-full mb-3 backdrop-blur-md">
                <Plane className="w-4 h-4 text-indigo-400" />
                <span>Work & Travel AQSh va Yevropa Dasturlari</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
                Yozgi Ta'tilda Sayohat Qiling va Keyingi Yilgi <span className="font-bold text-indigo-500">Kontrakt To'lovini Qoplang!</span>
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                TPU talabalari yozgi ta'til vaqtida AQSh hamda Yevropa davlatlariga Work & Travel dasturi orqali borib ishlash va tajriba ortirish imkoniyatiga ega. Bir yozgi ish natijasida topilgan daromad keyingi o'quv yili shartnomasini to'liq yopishga yetadi!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="flex items-center gap-2 bg-black/40 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-light">Rasmiy viza va hujjatlarda yordam</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-light">Xalqaro sertifikat va til amaliyoti</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 text-center lg:text-right">
              <a
                href="https://forms.amocrm.ru/rztwtdc" target="_blank" rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm px-7 py-4 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <span>Hujjat Topshirish va A'zo Bo'lish</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
