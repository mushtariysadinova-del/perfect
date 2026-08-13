import React, { useState, useRef, useEffect } from 'react';
import { UNIVERSITY_INFO, PROGRAMS, DISCOUNTS, PARTNERS } from '../data/universityData';
import { 
  ChevronLeft, ChevronRight, AlertCircle, ShieldCheck, ArrowUpRight, 
  PhoneCall, Trophy, Award, Languages, Users, Clock, Plane, 
  GraduationCap, Briefcase, Globe, Check, X, Sparkles, Calendar, MapPin, Calculator, Phone
} from 'lucide-react';
import { motion } from 'motion/react';

interface HorizontalScrollDeckProps {
  onOpenApply: () => void;
  onScrollToSection: (id: string) => void;
}

export const HorizontalScrollDeck: React.FC<HorizontalScrollDeckProps> = ({ onOpenApply, onScrollToSection }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 7;
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to slide index horizontally
  const scrollToSlide = (index: number) => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
    setActiveSlide(index);
  };

  // Sync scroll position to activeSlide state
  const handleScroll = () => {
    if (!containerRef.current) return;
    const slideWidth = containerRef.current.clientWidth;
    const currentScrollLeft = containerRef.current.scrollLeft;
    const index = Math.round(currentScrollLeft / slideWidth);
    if (index !== activeSlide && index >= 0 && index < totalSlides) {
      setActiveSlide(index);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [activeSlide]);

  return (
    <section id="horizontal-deck" className="py-16 bg-[#030712] border-y border-white/10 relative">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider mb-2 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>INTERAKTIV TAQDIMOT SLAYDLARI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Gorizontal Scroll <span className="font-bold text-indigo-500">Taqdimot Slaydlari</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 font-light">
              Chap va o'ngga suring yoki tugmalar orqali barcha 7 ta asosiy slaydni o'rganing
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              Slayd {activeSlide + 1} / {totalSlides}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                disabled={activeSlide === 0}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center backdrop-blur-md"
                title="Oldingi slayd"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSlide(Math.min(totalSlides - 1, activeSlide + 1))}
                disabled={activeSlide === totalSlides - 1}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center backdrop-blur-md"
                title="Keyingi slayd"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
            style={{ width: `${((activeSlide + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory custom-h-scrollbar pb-6 pt-2 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >

          {/* SLIDE 1: Stereotip va Hook */}
          <div className="w-full min-w-[100%] md:min-w-[820px] lg:min-w-[900px] snap-center shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span>1-Slayd: Achchiq Haqiqat</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white leading-snug mb-3">
                4 Yillik Umringizni Shunchaki <span className="font-bold text-indigo-500">"Qog'oz"</span> Uchun Sarflamoqchimisiz?
              </h3>

              <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-6 border border-white/5 bg-black/40">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80" 
                  alt="TPU Students"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-6 text-white">
                  <div>
                    <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm sm:text-base">
                      <Award className="w-5 h-5 text-indigo-400" />
                      <span>Zamonaviy Ta'lim va Kafolatlangan Karyera Markazi</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 font-light">Kelajagingizni bugundan boshlang va zamonaviy ko'nikmalar egallang</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed mb-6">
                "Xususiy oliygohlar faqat kontrakt yig'adi, bilim bermaydi" degan stereotipni unuting. Bugungi zamonaviy bozorda quruq diplom hech narsani hal qilmaydi. Perfect University sizga qog'oz emas, real daromad va kafolatlangan karyera beradi.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-black/40 backdrop-blur-xl border border-white/5 p-3 rounded-2xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-400">70%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">Sof Amaliyot</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-white/5 p-3 rounded-2xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-400">80%+</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">3-kursdan Ish</div>
                </div>
                <div className="bg-black/40 backdrop-blur-xl border border-white/5 p-3 rounded-2xl text-center">
                  <div className="text-xl sm:text-2xl font-bold text-indigo-400">100%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">Davlat Diplomi</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs text-slate-300 flex items-center relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
              <ShieldCheck className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
              <div>
                <strong>Qonuniy:</strong> O'zbekiston Respublikasi Vazirligi <strong className="text-indigo-300">№043951 litsenziyasi ({UNIVERSITY_INFO.licenseDate})</strong> asosida faoliyat yuritadi.
              </div>
            </div>
          </div>

          {/* SLIDE 2: Radikal Kontrast */}
          <div className="w-full min-w-[100%] md:min-w-[820px] lg:min-w-[900px] snap-center shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full mb-4 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>2-Slayd: Radikal Kontrast</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
                Ikkita Yo'l Bor. <span className="font-bold text-indigo-500">Tanlov Sizniki.</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 font-light">
                Keling, kelajagingizni oddiy oliygohlar va Perfect University misolida solishtirib ko'ramiz:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-black/40 backdrop-blur-xl border-l-2 border-red-500/50 border border-white/5 p-5 rounded-2xl">
                  <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm mb-3">
                    <X className="w-5 h-5 text-red-500" />
                    <span>An'anaviy Eski Tizim</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-400 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span>90% eskirgan quruq nazariya va yodlash.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span>Bitirguncha 0 so'm daromad va 0 amaliyot.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span>4 yildan keyin tanish-bilish orqali past oylik ish qidirish.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-0.5">•</span>
                      <span>Faqat bitta hudud bilan cheklangan diplom.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-xl border-l-2 border-indigo-500 border border-white/10 p-5 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
                  <div className="flex items-center gap-2 text-indigo-300 font-semibold text-sm mb-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span>Perfect University</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-200 font-light">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span>70% real loyihalar ustida amaliy darslar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span>3-kursdanoq maoshli va nufuzli ishlarga kirish.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span>Karyera Markazi hamkorligida TOP kompaniyalarga yo'llanma.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>
                      <span>Yevropa va Turkiya oliygohlari bilan almashinuv dasturi.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 p-4 rounded-xl text-xs text-slate-300 backdrop-blur-md">
              <strong className="text-indigo-400">Xulosa:</strong> TPU sizni birinchi kundanoq real loyihalarga jalb qilib, tayyor mutaxassisga aylantiradi.
            </div>
          </div>

          {/* SLIDE 3: Kelajak Kasblari */}
          <div className="w-full min-w-[100%] md:min-w-[820px] lg:min-w-[900px] snap-center shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full mb-4 backdrop-blur-md">
                <Briefcase className="w-4 h-4 text-indigo-400" />
                <span>3-Slayd: Kelajak Kasblari</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
                Bozor <span className="font-bold text-indigo-500">Sizni Kutyapti</span>, Lekin Diplomni Emas!
              </h3>
              <p className="text-slate-400 font-light text-xs sm:text-sm mb-6">
                TPU sizni eng daromadli 6 ta yo'nalish bo'yicha tayyorlaydi:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {PROGRAMS.slice(0, 4).map((prog) => (
                  <div key={prog.id} className="bg-black/40 backdrop-blur-xl border border-white/5 hover:border-white/10 hover:bg-white/5 p-4 rounded-2xl flex items-center gap-4 transition-all">
                    <img src={prog.image} alt={prog.name} className="w-12 h-12 rounded-lg object-cover opacity-80" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{prog.name}</h4>
                      <div className="text-[10px] text-indigo-400 font-medium">{prog.code} · {prog.formattedPrice}</div>
                      <div className="text-[10px] text-slate-400 font-light mt-0.5">{prog.demandJobs}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-black/40 border border-white/5 p-3 rounded-xl text-[11px] text-slate-400 text-center font-light backdrop-blur-md">
                * Shuningdek: <strong className="text-slate-300">Pedagogika va psixologiya (60110100)</strong> va <strong className="text-slate-300">Tarix (60111100)</strong> yo'nalishlarida Kunduzgi, Kechki va Sirtqi ta'lim.
              </div>
            </div>

            <button
              onClick={() => onScrollToSection('programs')}
              className="mt-4 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Barcha Yo'nalishlarni Ko'rish</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-400" />
            </button>
          </div>

          {/* SLIDE 4: Aniq Matematika & ROI */}
          <div className="w-full min-w-[100%] md:min-w-[820px] lg:min-w-[900px] snap-center shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full mb-4 backdrop-blur-md">
                <Calculator className="w-4 h-4 text-indigo-400" />
                <span>4-Slayd: Aniq Matematika & ROI</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
                O'qish Narxi — Xarajat Emas, Bu Sizning <span className="font-bold text-indigo-500">Aktivoriz</span>
              </h3>
              <p className="text-slate-400 font-light text-xs sm:text-sm mb-6">
                Kontrakt to'loviga sarflangan pul yo'qolmaydi, u sizga bir necha barobar bo'lib qaytadi:
              </p>

              <div className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                  <span className="text-xs text-slate-400 font-medium">Yillik Kontrakt Oralig'i:</span>
                  <span className="text-xl font-bold text-indigo-400">10 000 000 - 18 000 000 UZS</span>
                </div>
                <div className="space-y-3 text-xs text-slate-300 font-light">
                  <div className="flex justify-between">
                    <span>Iqtisodiyot / IT yo'nalishlar:</span>
                    <span className="font-medium text-white">17 - 18 mln UZS/yil</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Turizm va Biznes boshqaruvi:</span>
                    <span className="font-medium text-white">16 - 17.5 mln UZS/yil</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pedagogika va Gumanitar (Kunduzgi):</span>
                    <span className="font-medium text-white">~16 mln UZS/yil</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kechki ta'lim shakli (Barcha yo'nalishlar):</span>
                    <span className="font-medium text-white">10 - 15 mln UZS/yil</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs text-slate-300 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <strong className="text-purple-400">Sarmoya tahlili:</strong> Oyiga atigi <strong className="text-white">833 000 so'm</strong> sarmoya qilasiz. O'zbekistonda IT mutaxassisi yiliga <strong className="text-white">50-100 mln so'm</strong> topadi. TPU dagi sarmoyangizni ishga kirgan birinchi yildayoq <strong className="text-white">100% qaytarib olasiz!</strong>
              </div>
            </div>

            <button
              onClick={() => onScrollToSection('calculator')}
              className="mt-4 w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium text-xs shadow-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Calculator className="w-4 h-4 text-indigo-400" />
              <span>Shartnomani Hisoblash Kalkulyatori</span>
            </button>
          </div>

          {/* SLIDE 5: Aqlli Chegirmalar */}
          <div className="w-full min-w-[100%] md:min-w-[820px] lg:min-w-[900px] snap-center shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full mb-4 backdrop-blur-md">
                <Trophy className="w-4 h-4 text-indigo-400" />
                <span>5-Slayd: Aqlli Chegirmalar</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
                O'z Bilimingiz Bilan <span className="font-bold text-indigo-500">Kontrakt Narxini</span> O'zingiz Belgilang!
              </h3>
              <p className="text-slate-400 font-light text-xs sm:text-sm mb-6">
                Quyidagi imtiyozlar orqali narxni maksimal darajada tushirib oling:
              </p>

              <div className="space-y-3 mb-6">
                {DISCOUNTS.map((disc) => (
                  <div key={disc.id} className="bg-black/40 backdrop-blur-xl border border-white/5 px-5 py-3 rounded-2xl flex items-center justify-between text-xs transition-all hover:bg-white/5 hover:border-white/10">
                    <span className="text-slate-200 font-medium">{disc.label}</span>
                    <span className={`font-semibold px-3 py-1.5 rounded-full ${
                      disc.isGrant 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {disc.isGrant ? '100% Grant' : `${disc.percentage}% Chegirma`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs text-slate-300 font-light relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                <strong className="text-indigo-400 font-medium">Kombinatsiya siri:</strong> IELTS 5.5 (10%) + Oiladan 2 kishi (10%) + 15-sentabrgacha to'lov (10%) = <strong className="text-white font-medium">30% Chegirma!</strong> 18 mln UZS o'rniga atigi <strong className="text-white font-medium">12.6 mln UZS</strong>!
              </div>
            </div>

            <button
              onClick={() => onScrollToSection('calculator')}
              className="mt-4 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Shartnoma va Chegirmalarni Interaktiv Hisoblash</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-400" />
            </button>
          </div>

          {/* SLIDE 6: Global Dunyo */}
          <div className="w-full min-w-[100%] md:min-w-[820px] lg:min-w-[900px] snap-center shrink-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full mb-4 backdrop-blur-md">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>6-Slayd: Global Dunyo & Work & Travel</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
                O'zbekistonda O'qing, <span className="font-bold text-indigo-500">Dunyo Bo'ylab</span> Sayohat Qiling
              </h3>
              <p className="text-slate-400 font-light text-xs sm:text-sm mb-6">
                TPU diplomlari bilan dunyoning istalgan nuqtasida o'z yo'lingizni topasiz:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {PARTNERS.map((p) => (
                  <div key={p.country} className="bg-black/40 backdrop-blur-xl border border-white/5 p-5 rounded-2xl text-center">
                    <img src={p.flagUrl} alt={p.country} className="w-12 h-8 object-cover rounded mx-auto mb-3 opacity-80" />
                    <h4 className="text-sm font-semibold text-white">{p.country}</h4>
                    <p className="text-[10px] text-slate-400 mt-1.5 font-light">{p.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-xs text-slate-300 font-light relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <Plane className="w-4 h-4 text-purple-400 inline mr-2" />
                <strong className="text-purple-400 font-medium">Work & Travel:</strong> AQSh va Yevropaga yozgi ta'tilda borib ishlash dasturlari mavjud. Bir yozgi ishda topilgan daromad keyingi yillik kontrakt to'lovini to'liq qoplaydi!
              </div>
            </div>

            <button
              onClick={() => onScrollToSection('international')}
              className="mt-4 w-full py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium hover:border-white/20 hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Xalqaro Dasturlar Haqida Batafsil</span>
              <ArrowUpRight className="w-4 h-4 text-indigo-400" />
            </button>
          </div>

          {/* SLIDE 7: Shoshilinch Qabul & Direct CTA */}
          <div className="w-full min-w-[100%] md:min-w-[820px] lg:min-w-[900px] snap-center shrink-0 bg-white/10 backdrop-blur-2xl border border-indigo-500/30 rounded-[2rem] p-6 sm:p-10 shadow-[0_0_40px_rgba(99,102,241,0.15)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium px-3 py-1 rounded-full mb-4 animate-pulse-glow backdrop-blur-md">
                <Clock className="w-4 h-4 text-red-400" />
                <span>7-Slayd: Shoshilinch Qabul</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-light text-white mb-3">
                Imkoniyatni Qo'ldan Boy Bermang. <span className="font-bold text-indigo-500">O'rinlar Qat'iy Cheklangan!</span>
              </h3>
              <p className="text-slate-300 font-light text-xs sm:text-sm leading-relaxed mb-6">
                Har bir o'tgan kun — siz yutqazishingiz mumkin bo'lgan imkoniyatdir. Grant o'rinlari va chegirmali kvotalar birinchilardan bo'lib hujjat topshirganlarga taqdim etiladi.
              </p>

              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-indigo-300 font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full mb-6 backdrop-blur-md">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>Rasmiy Qabul Muddati: {UNIVERSITY_INFO.admissionPeriod}</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenApply}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Hoziroq Hujjat Topshirish</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-400" />
                </button>

                <a
                  href={`tel:${UNIVERSITY_INFO.shortPhone}`}
                  className="w-full sm:w-auto bg-white/5 border border-white/10 text-slate-200 font-medium text-xs sm:text-sm px-8 py-4 rounded-full hover:border-white/20 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>Konsultatsiya: {UNIVERSITY_INFO.shortPhone}</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap justify-between text-[11px] text-slate-400 font-light">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> {UNIVERSITY_INFO.address}</span>
              <span>Tg: @perfect_qabul</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Pagination Indicator Dots */}
      <div className="max-w-7xl mx-auto px-4 mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            className={`transition-all duration-300 ${
              activeSlide === idx 
                ? 'w-8 h-2.5 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50' 
                : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500 rounded-full'
            }`}
            title={`Slayd ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};
