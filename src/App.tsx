import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HorizontalScrollDeck } from './components/HorizontalScrollDeck';
import { ComparisonSection } from './components/ComparisonSection';
import { ProgramExplorer } from './components/ProgramExplorer';
import { DiscountCalculator } from './components/DiscountCalculator';
import { InternationalShowcase } from './components/InternationalShowcase';
import { Footer } from './components/Footer';

export default function App() {
  const handleOpenApply = (programId?: string) => {
    window.open('https://forms.amocrm.ru/rztwtdc', '_blank');
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-indigo-500/30 selection:text-white flex flex-col font-sans relative overflow-x-hidden">
      {/* Ambient Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {/* Sticky Header Navbar */}
        <Navbar 
          onOpenApply={() => handleOpenApply()} 
          onScrollToSection={handleScrollToSection} 
        />

        {/* Main Page Sections */}
        <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          onOpenApply={() => handleOpenApply()} 
          onScrollToSection={handleScrollToSection} 
        />

        {/* 1. Horizontal Scroll Deck (Requirements #1 & #4) */}
        <HorizontalScrollDeck 
          onOpenApply={() => handleOpenApply()} 
          onScrollToSection={handleScrollToSection} 
        />

        {/* 2. Interactive Comparison Section (Eski Tizim vs TPU) */}
        <ComparisonSection 
          onOpenApply={() => handleOpenApply()} 
        />

        {/* 3. Program Explorer (6 Bakalavriat Yo'nalishlari) */}
        <ProgramExplorer 
          onSelectProgramForApply={(progId) => handleOpenApply(progId)} 
        />

        {/* 4. Interactive Discount & ROI Calculator */}
        <DiscountCalculator 
          onOpenApplyWithProgram={(progId) => handleOpenApply(progId)} 
        />

        {/* 5. International Programs & Work & Travel Showcase */}
        <InternationalShowcase 
          onOpenApply={() => handleOpenApply()} 
        />
      </main>

      {/* Footer & Contact */}
      <Footer 
        onOpenApply={() => handleOpenApply()} 
        onScrollToSection={handleScrollToSection} 
      />
      </div>
    </div>
  );
}
