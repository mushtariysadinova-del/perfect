import React, { useState, useEffect } from 'react';
import { PROGRAMS, UNIVERSITY_INFO } from '../data/universityData';
import { ApplicationFormData } from '../types';
import { X, Send, CheckCircle2, ShieldCheck, Phone, Copy, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgramId?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, initialProgramId }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    phone: '',
    programId: initialProgramId || PROGRAMS[0].id,
    studyFormat: 'Kunduzgi',
    hasIELTS: false,
    ieltsScore: '5.5',
    note: ''
  });

  const [submittedTicket, setSubmittedTicket] = useState<{
    code: string;
    date: string;
    programName: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialProgramId) {
      setFormData(prev => ({ ...prev, programId: initialProgramId }));
    }
  }, [initialProgramId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    const prog = PROGRAMS.find(p => p.id === formData.programId) || PROGRAMS[0];
    const ticketCode = `TPU-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    
    setSubmittedTicket({
      code: ticketCode,
      date: new Date().toLocaleDateString('uz-UZ'),
      programName: prog.name
    });
  };

  const handleCopyCode = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-black/60 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_0_50px_rgba(99,102,241,0.2)] relative text-white my-8 overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          {!submittedTicket ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-indigo-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4" />
                <span>ONLINE QABUL 2026/2027</span>
              </div>

              <h3 className="text-2xl font-light text-white mb-2">
                Hujjat Topshirish
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                Shaxsiy ma'lumotlaringizni kiriting va qabul komissiyasining rasmiy arizasini rasmiylashtiring. Litsenziya: {UNIVERSITY_INFO.licenseNo}.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Ism va Familiyangiz *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="Masalan: Sardor Alimov"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-all backdrop-blur-md"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Telefon Raqamingiz *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+998 90 123 45 67"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:border-indigo-400 focus:outline-none transition-all backdrop-blur-md"
                  />
                </div>

                {/* Program */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Ta'lim Yo'nalishi *
                  </label>
                  <select
                    value={formData.programId}
                    onChange={e => setFormData({ ...formData, programId: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-xs text-white focus:border-indigo-400 focus:outline-none transition-all backdrop-blur-md"
                  >
                    {PROGRAMS.map(p => (
                      <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Study format */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Ta'lim Shakli *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Kunduzgi', 'Kechki', 'Sirtqi'].map(fmt => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setFormData({ ...formData, studyFormat: fmt })}
                        className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                          formData.studyFormat === fmt 
                            ? 'bg-indigo-500 text-white border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' 
                            : 'bg-black/40 border-white/10 text-slate-300 hover:border-white/20 hover:text-white backdrop-blur-md'
                        }`}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language certificate */}
                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-light text-slate-300">
                    <input 
                      type="checkbox"
                      checked={formData.hasIELTS}
                      onChange={e => setFormData({ ...formData, hasIELTS: e.target.checked })}
                      className="w-4 h-4 rounded accent-indigo-500 cursor-pointer"
                    />
                    <span>C1, B2 yoki IELTS sertifikatingiz bormi?</span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs sm:text-sm py-3.5 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <Send className="w-4 h-4 text-indigo-400" />
                  <span>Arizani Yuborish Va Chipta Olish</span>
                </button>

                <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 font-light">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 inline" />
                  <span>Ma'lumotlaringiz shaffof va xavfsiz saqlanadi.</span>
                </div>

              </form>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-green-500/20 text-green-400 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(34,197,94,0.2)] backdrop-blur-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">
                Arizangiz Muvaffaqiyatli Qabul Qilindi!
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Muhtaram {formData.fullName}, TPU qabul komissiyasi arizangizni ro'yxatdan o'tkazdi.
              </p>

              {/* Registration Receipt Box */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-5 mb-6 text-left space-y-3 backdrop-blur-md">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-xs text-slate-400 font-light">Ariza Raqami:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-indigo-400">{submittedTicket.code}</span>
                    <button onClick={handleCopyCode} className="text-slate-400 hover:text-white transition-colors">
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-light">Yo'nalish:</span>
                  <span className="font-medium text-white">{submittedTicket.programName}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-light">Ta'lim Shakli:</span>
                  <span className="font-medium text-slate-200">{formData.studyFormat}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-light">Sana:</span>
                  <span className="font-medium text-slate-400">{submittedTicket.date}</span>
                </div>
              </div>

              <div className="bg-indigo-500/10 border border-indigo-500/20 p-3.5 rounded-xl text-xs text-indigo-300 mb-6 backdrop-blur-md font-light">
                Qabul operatori tez orada <strong>{formData.phone}</strong> raqamingizga bog'lanib, shartnoma blankalarini taqdim etadi.
              </div>

              <div className="flex gap-3">
                <a
                  href={UNIVERSITY_INFO.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-black/40 border border-white/10 hover:bg-white/5 text-white font-medium text-xs rounded-full transition-all flex items-center justify-center gap-1.5 backdrop-blur-md"
                >
                  <Send className="w-4 h-4 text-indigo-400" />
                  <span>Telegram Bot</span>
                </a>

                <button
                  onClick={() => {
                    setSubmittedTicket(null);
                    onClose();
                  }}
                  className="flex-1 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs rounded-full shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all backdrop-blur-md"
                >
                  Yopish
                </button>
              </div>

            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
