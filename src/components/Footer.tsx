import React from 'react';
import { UNIVERSITY_INFO } from '../data/universityData';
import { School, MapPin, Phone, Send, Globe, ShieldCheck, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenApply: () => void;
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApply, onScrollToSection }) => {
  return (
    <footer id="contact" className="bg-[#030712] text-slate-300 border-t border-white/10 pt-16 pb-12 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                <School className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="font-light text-lg text-white">
                PERFECT <span className="font-bold text-indigo-500">UNIVERSITY</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Tashkent Perfect University — zamonaviy amaliyot, xalqaro dual ta'lim va 3-kursdan kafolatlangan karyera imkoniyati.
            </p>

            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Litsenziya {UNIVERSITY_INFO.licenseNo}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Bo'limlar
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button onClick={() => onScrollToSection('hero')} className="hover:text-indigo-400 transition-colors">
                  Bosh Sahifa
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('horizontal-deck')} className="hover:text-indigo-400 transition-colors">
                  Gorizontal Taqdimot Slaydlari (7 Slayd)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('comparison')} className="hover:text-indigo-400 transition-colors">
                  Eski Tizim vs TPU Solishtirish
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('programs')} className="hover:text-indigo-400 transition-colors">
                  Bakalavriat Yo'nalishlari
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('calculator')} className="hover:text-indigo-400 transition-colors">
                  Shartnoma va Chegirmalar Kalkulyatori
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('international')} className="hover:text-indigo-400 transition-colors">
                  Work & Travel va Xalqaro Dasturlar
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
              Rasmiy Aloqa
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{UNIVERSITY_INFO.address}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`tel:${UNIVERSITY_INFO.shortPhone}`} className="font-medium text-indigo-300 hover:underline">
                  {UNIVERSITY_INFO.phone} (Call Center: {UNIVERSITY_INFO.shortPhone})
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Send className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={UNIVERSITY_INFO.telegram} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-indigo-300 transition-colors flex items-center gap-1">
                  <span>@perfect_qabul</span>
                  <ArrowUpRight className="w-3 h-3 text-indigo-400" />
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`https://${UNIVERSITY_INFO.website}`} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-indigo-300 transition-colors">
                  {UNIVERSITY_INFO.website}
                </a>
              </li>
            </ul>
          </div>

          {/* Call Center & Working Hours */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-[2rem] flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-indigo-300 uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Qabul Komissiyasi Ish Vaqti</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 font-light">
                Dushanba – Shanba: 09:00 – 18:00<br />
                Rasmiy qabul muddati: {UNIVERSITY_INFO.admissionPeriod}
              </p>
            </div>

            <a
              href="https://forms.amocrm.ru/rztwtdc" target="_blank" rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs py-3.5 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95 transition-all text-center backdrop-blur-md block"
            >
              Hujjat Topshirish
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-slate-500 font-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © 2026 Tashkent Perfect University. Barcha huquqlar himoyalangan.
          </div>
          <div className="text-[11px]">
            O'zbekiston Respublikasi Oliy ta'lim vazirligi litsenziyasi {UNIVERSITY_INFO.licenseNo} ({UNIVERSITY_INFO.licenseDate})
          </div>
        </div>

      </div>
    </footer>
  );
};
