const fs = require('fs');

const eyeCatchingClass = "bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 bg-size-200 hover:bg-right-bottom text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full font-extrabold text-sm sm:text-base tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] border border-indigo-400/30 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2";

const smallEyeCatchingClass = "bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 bg-size-200 hover:bg-right-bottom text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-extrabold text-xs sm:text-sm tracking-[0.1em] uppercase shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] border border-indigo-400/30 hover:scale-[1.05] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2";

function replaceClass(filePath, searchRegex, replaceClass) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(searchRegex, (match, p1, offset, string) => {
        return match.replace(p1, replaceClass);
    });
    fs.writeFileSync(filePath, newContent);
  }
}

// HeroSection.tsx
replaceClass('src/components/HeroSection.tsx', 
    /className="(bg-white\/10 hover:bg-white\/20 backdrop-blur-md border border-white\/20 text-white px-8 py-4 rounded-full font-medium text-sm shadow-\[0_0_20px_rgba\(99,102,241,0\.2\)\] hover:shadow-\[0_0_30px_rgba\(99,102,241,0\.4\)\] hover:scale-\[1\.02\] active:scale-95 transition-all flex items-center gap-2)"/g, 
    eyeCatchingClass);

// Navbar.tsx (Desktop)
replaceClass('src/components/Navbar.tsx', 
    /className="(bg-white\/10 hover:bg-white\/20 border border-white\/20 text-white text-xs font-medium px-5 py-2\.5 rounded-full shadow-\[0_0_15px_rgba\(99,102,241,0\.2\)\] transition-all flex items-center gap-2 backdrop-blur-md)"/g, 
    smallEyeCatchingClass);

// Navbar.tsx (Mobile)
replaceClass('src/components/Navbar.tsx', 
    /className="(bg-white\/10 hover:bg-white\/20 border border-white\/20 text-white font-medium w-full py-4 rounded-xl shadow-\[0_0_15px_rgba\(99,102,241,0\.2\)\] transition-all flex items-center justify-center gap-2 mt-4)"/g, 
    eyeCatchingClass);

// DiscountCalculator.tsx
replaceClass('src/components/DiscountCalculator.tsx', 
    /className="(w-full bg-white\/10 hover:bg-white\/20 border border-white\/20 text-white font-medium text-xs sm:text-sm py-4 rounded-full shadow-\[0_0_20px_rgba\(99,102,241,0\.2\)\] active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-md)"/g, 
    eyeCatchingClass);

// HorizontalScrollDeck.tsx
replaceClass('src/components/HorizontalScrollDeck.tsx', 
    /className="(w-full bg-white\/10 hover:bg-white\/20 border border-white\/20 text-white font-medium py-4 rounded-xl shadow-\[0_0_15px_rgba\(99,102,241,0\.2\)\] transition-all flex items-center justify-center gap-2 backdrop-blur-md)"/g, 
    eyeCatchingClass);

// ProgramExplorer.tsx
replaceClass('src/components/ProgramExplorer.tsx', 
    /className="(bg-white\/10 hover:bg-white\/20 border border-white\/20 text-white text-xs font-medium px-4 py-2\.5 rounded-full shadow-\[0_0_15px_rgba\(99,102,241,0\.2\)\] transition-all flex items-center gap-1\.5 backdrop-blur-md)"/g, 
    smallEyeCatchingClass);

// InternationalShowcase.tsx
replaceClass('src/components/InternationalShowcase.tsx', 
    /className="(bg-white\/10 hover:bg-white\/20 border border-white\/20 text-white font-medium text-xs sm:text-sm py-4 px-6 sm:px-8 rounded-full shadow-\[0_0_20px_rgba\(99,102,241,0\.2\)\] transition-all flex items-center gap-2 backdrop-blur-md w-full sm:w-auto justify-center)"/g, 
    eyeCatchingClass);

// Footer.tsx
replaceClass('src/components/Footer.tsx', 
    /className="(bg-white\/5 hover:bg-white\/10 border border-white\/10 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 block)"/g, 
    eyeCatchingClass);


console.log('Buttons updated');
