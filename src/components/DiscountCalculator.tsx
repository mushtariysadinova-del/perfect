import React, { useState } from 'react';
import { PROGRAMS, DISCOUNTS } from '../data/universityData';
import { Calculator, Trophy, Award, Users, Clock, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface DiscountCalculatorProps {
  onOpenApplyWithProgram: (programId: string) => void;
}

export const DiscountCalculator: React.FC<DiscountCalculatorProps> = ({ onOpenApplyWithProgram }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(PROGRAMS[0].id);
  const [selectedFormat, setSelectedFormat] = useState<string>(PROGRAMS[0].studyFormats[0]);
  
  // Discount toggles
  const [isOlympiadWinner, setIsOlympiadWinner] = useState<boolean>(false);
  const [ieltsLevel, setIeltsLevel] = useState<'none' | 'medium' | 'high'>('none'); // medium: 5.5-7.0 (10%), high: 7.5+ (20%)
  const [isFamilyDiscount, setIsFamilyDiscount] = useState<boolean>(false);
  const [isEarlyPayment, setIsEarlyPayment] = useState<boolean>(false);

  const selectedProgram = PROGRAMS.find(p => p.id === selectedProgramId) || PROGRAMS[0];

  // Calculate discount percentage
  let totalDiscountPct = 0;
  if (isOlympiadWinner) {
    totalDiscountPct = 100; // 100% Grant
  } else {
    if (ieltsLevel === 'high') totalDiscountPct += 20;
    else if (ieltsLevel === 'medium') totalDiscountPct += 10;

    if (isFamilyDiscount) totalDiscountPct += 10;
    if (isEarlyPayment) totalDiscountPct += 10;
  }

  // Cap at 100%
  totalDiscountPct = Math.min(totalDiscountPct, 100);

  // Determine base price based on format
  const formatKey = selectedFormat.toLowerCase() as keyof typeof selectedProgram.prices;
  const originalPrice = selectedProgram.prices[formatKey] || selectedProgram.annualPrice || 0;
  
  const discountAmount = Math.round((originalPrice * totalDiscountPct) / 100);
  const finalAnnualPrice = originalPrice - discountAmount;
  
  const formattedOriginalPrice = new Intl.NumberFormat('uz-UZ').format(originalPrice) + ' UZS';
  const monthlyCost = Math.round(finalAnnualPrice / 12);

  return (
    <section id="calculator" className="py-20 bg-[#030712] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3 backdrop-blur-md">
            <Calculator className="w-4 h-4 text-indigo-400" />
            <span>INTERAKTIV SHARTNOMA VA CHEGIRMALAR KALKULYATORI</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            O'z Kontrakt Narxingizni <span className="font-bold text-indigo-500">O'zingiz Belgilang!</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
            Bakalavriat yo'nalishini tanlang hamda sertifikatlaringiz va imtiyozlaringizni belgilab, sof yillik kontrakt narxingiz va tejab qolgan summangizni hisoblang.
          </p>
        </div>

        {/* Calculator Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form Side */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-lg">
            
            {/* 1. Select Program */}
            <div>
              <label className="block text-xs font-medium text-indigo-300 uppercase tracking-wider mb-2">
                1. Yo'nalishni Tanlang:
              </label>
              <select
                value={selectedProgramId}
                onChange={(e) => {
                  setSelectedProgramId(e.target.value);
                  const prog = PROGRAMS.find(p => p.id === e.target.value);
                  if (prog && !prog.studyFormats.includes(selectedFormat)) {
                    setSelectedFormat(prog.studyFormats[0]);
                  }
                }}
                className="w-full bg-black/40 border border-white/10 text-white font-medium text-sm rounded-xl p-3.5 focus:border-indigo-400 focus:outline-none transition-all"
              >
                {PROGRAMS.map((prog) => (
                  <option key={prog.id} value={prog.id} className="bg-slate-900 text-white">
                    {prog.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 1.5 Select Study Format */}
            <div className="pt-2 border-t border-white/10">
              <label className="block text-xs font-medium text-indigo-300 uppercase tracking-wider mb-3">
                Ta'lim Shakli:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {selectedProgram.studyFormats.map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => setSelectedFormat(fmt)}
                    className={`p-3.5 rounded-xl border text-xs font-medium text-center transition-all ${
                      selectedFormat === fmt 
                        ? 'bg-indigo-500 text-white border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                        : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Olympiad Grant Check */}
            <div className="pt-2 border-t border-white/10">
              <label className="block text-xs font-medium text-indigo-300 uppercase tracking-wider mb-3">
                2. Respublika Olimpiadasi Imtiyozi:
              </label>
              <button
                type="button"
                onClick={() => setIsOlympiadWinner(!isOlympiadWinner)}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  isOlympiadWinner 
                    ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
                    : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isOlympiadWinner ? 'bg-indigo-500/20 text-indigo-400' : 'bg-white/5 text-slate-400'}`}>
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Respublika Olimpiadasi 1-o'rin G'olibi</div>
                    <div className="text-xs opacity-80 font-light">100% Bepul Grant ta'limi imkoniyati</div>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center font-bold ${isOlympiadWinner ? 'border-indigo-400 bg-indigo-500 text-white' : 'border-white/20 bg-black/40'}`}>
                  {isOlympiadWinner && <Check className="w-4 h-4" />}
                </div>
              </button>
            </div>

            {/* 3. IELTS / Language Certificates */}
            {!isOlympiadWinner && (
              <div className="pt-2 border-t border-white/10">
                <label className="block text-xs font-medium text-indigo-300 uppercase tracking-wider mb-3">
                  3. Til Sertifikatingiz (IELTS / CEFR):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setIeltsLevel('none')}
                    className={`p-3.5 rounded-xl border text-xs font-medium text-center transition-all ${
                      ieltsLevel === 'none' 
                        ? 'bg-indigo-500 text-white border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                        : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    Sertifikat Yo'q (0%)
                  </button>

                  <button
                    type="button"
                    onClick={() => setIeltsLevel('medium')}
                    className={`p-3.5 rounded-xl border text-xs font-medium text-center transition-all ${
                      ieltsLevel === 'medium' 
                        ? 'bg-indigo-500 text-white border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                        : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    IELTS 5.5 – 7.0 (10%)
                  </button>

                  <button
                    type="button"
                    onClick={() => setIeltsLevel('high')}
                    className={`p-3.5 rounded-xl border text-xs font-medium text-center transition-all ${
                      ieltsLevel === 'high' 
                        ? 'bg-indigo-500 text-white border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                        : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    IELTS 7.5+ (20%)
                  </button>
                </div>
              </div>
            )}

            {/* 4. Family & Early Payment Toggles */}
            {!isOlympiadWinner && (
              <div className="pt-2 border-t border-white/10 space-y-3">
                <label className="block text-xs font-medium text-indigo-300 uppercase tracking-wider mb-2">
                  4. Qo'shimcha Chegirmalar va Bonuslar:
                </label>

                {/* Family */}
                <button
                  type="button"
                  onClick={() => setIsFamilyDiscount(!isFamilyDiscount)}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between text-xs font-medium transition-all ${
                    isFamilyDiscount 
                      ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' 
                      : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2 font-light">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span>Bir oiladan 2 yoki undan ortiq kishi o'qiganda (10% Chegirma)</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isFamilyDiscount ? 'border-indigo-400 bg-indigo-500 text-white' : 'border-white/20 bg-black/40'}`}>
                    {isFamilyDiscount && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Early Payment */}
                <button
                  type="button"
                  onClick={() => setIsEarlyPayment(!isEarlyPayment)}
                  className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between text-xs font-medium transition-all ${
                    isEarlyPayment 
                      ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300' 
                      : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2 font-light">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span>15-sentabrgacha shartnomaning 90% qismini to'lash (10% Bonus)</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isEarlyPayment ? 'border-indigo-400 bg-indigo-500 text-white' : 'border-white/20 bg-black/40'}`}>
                    {isEarlyPayment && <Check className="w-3.5 h-3.5" />}
                  </div>
                </button>
              </div>
            )}

          </div>

          {/* Results Display Side */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-2xl border-2 border-indigo-500/30 rounded-[2rem] p-6 sm:p-8 shadow-[0_0_40px_rgba(99,102,241,0.15)] relative overflow-hidden sticky top-24">
            
            <div className="flex items-center gap-2 text-xs font-medium text-indigo-400 uppercase tracking-widest mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Sizning Shartnoma Hisobingiz</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
              {selectedProgram.name}
            </h3>

            {/* Price Calculations Box */}
            <div className="bg-black/40 border border-white/5 rounded-2xl p-5 space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs text-slate-400 font-light">
                <span>Dastlabki Yillik Kontrakt:</span>
                <span className="font-medium text-slate-200 line-through">
                  {formattedOriginalPrice}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs font-medium border-t border-white/5 pt-2">
                <span className="text-slate-300">Jami Chegirma Ulushi:</span>
                <span className="text-sm bg-indigo-500/20 text-indigo-300 px-3 py-0.5 rounded-full border border-indigo-500/30">
                  {totalDiscountPct === 100 ? '100% Grant' : `${totalDiscountPct}% Chegirma`}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs text-slate-300 font-light">
                <span>Iqtisod Qiladigan Summangiz:</span>
                <span className="font-medium text-green-400">
                  -{discountAmount.toLocaleString('uz-UZ')} UZS
                </span>
              </div>

              <div className="border-t border-white/10 pt-3 flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-medium text-indigo-300 uppercase tracking-wider">Sof Yillik Kontrakt To'lovi:</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {finalAnnualPrice === 0 ? '0 UZS (100% Grant)' : `${finalAnnualPrice.toLocaleString('uz-UZ')} UZS`}
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly breakdown */}
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 mb-6 text-xs text-slate-200 backdrop-blur-md">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-indigo-300">Oylik o'rtacha xarajat:</span>
                <span className="font-semibold text-white text-sm">
                  {monthlyCost === 0 ? '0 UZS' : `~${monthlyCost.toLocaleString('uz-UZ')} UZS / oy`}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 font-light">
                3-kursdan ishga kirganingizda, ushbu sarmoyani bir necha barobar qilib qaytarib olasiz!
              </p>
            </div>

            <a
              href="https://forms.amocrm.ru/rztwtdc" target="_blank" rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm py-4 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Ushbu Chegirma Bilan Topshirish</span>
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </a>

            <div className="mt-4 text-[11px] text-slate-400 text-center flex items-center justify-center gap-1 font-light">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 inline" />
              <span>Imtiyoz sertifikatlari qabul komissiyasiga taqdim etiladi.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
