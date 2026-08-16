import React, { useState, useEffect } from 'react';
import { UNIVERSITY_INFO } from '../data/universityData';
import { School, ShieldCheck, Phone, Send, Menu, X, Calculator, Presentation, GraduationCap } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
  onScrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Bosh sahifa", target: "hero" },
    { label: "Taqdimot Slaydlari", target: "horizontal-deck", icon: Presentation },
    { label: "Solishtirish", target: "comparison" },
    { label: "Yo'nalishlar", target: "programs", icon: GraduationCap },
    { label: "Kalkulyator", target: "calculator", icon: Calculator },
    { label: "Xalqaro", target: "international" },
    { label: "Aloqa", target: "contact" }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-2xl border-b border-white/10 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => onScrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform border border-white/10">
            <School className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-light tracking-tight text-white text-lg">
              <span>PERFECT</span>
              <span className="text-indigo-400 font-bold">UNIVERSITY</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-semibold text-indigo-300/80 tracking-wide uppercase">
              <ShieldCheck className="w-3 h-3 text-indigo-400 inline" />
              <span>Litsenziya {UNIVERSITY_INFO.licenseNo}</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.target}
                onClick={() => onScrollToSection(link.target)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 border border-transparent transition-all flex items-center gap-1.5"
              >
                {Icon && <Icon className="w-3.5 h-3.5 text-indigo-400" />}
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${UNIVERSITY_INFO.shortPhone}`}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl border border-white/10 backdrop-blur-md transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-400" />
            <span>{UNIVERSITY_INFO.shortPhone}</span>
          </a>

          <a
            href="https://forms.amocrm.ru/rztmwrm" target="_blank" rel="noopener noreferrer"
            className="relative group bg-white/10 text-white px-4 py-2 rounded-xl font-semibold text-xs tracking-wide shadow-lg shadow-indigo-500/10 border border-white/20 hover:bg-white/20 hover:scale-[1.02] active:scale-95 backdrop-blur-md transition-all flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>HUJJAT TOPSHIRISH</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white backdrop-blur-md"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/80 backdrop-blur-2xl border-b border-white/10 px-4 py-6 shadow-2xl space-y-3 relative z-40">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => {
                  onScrollToSection(link.target);
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-white/20 hover:text-white transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${UNIVERSITY_INFO.shortPhone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-medium backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-indigo-400" />
              <span>Konsultatsiya: {UNIVERSITY_INFO.shortPhone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-xs shadow-lg flex items-center justify-center gap-2 backdrop-blur-md hover:bg-white/20"
            >
              <Send className="w-4 h-4" />
              <span>HOZIROQ HUJJAT TOPSHIRISH</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
