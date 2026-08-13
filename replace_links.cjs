const fs = require('fs');

const LINK = 'https://forms.amocrm.ru/rztwtdc';

// Helper to replace button with anchor
function replaceButton(filePath, searchRegex, replaceFunc) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = content.replace(searchRegex, replaceFunc);
  fs.writeFileSync(filePath, newContent);
}

// 1. Navbar.tsx
let nav = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
nav = nav.replace(/<button\s+onClick=\{onOpenApply\}\s+className="([^"]+)"\s*>/, `<a\n            href="${LINK}" target="_blank" rel="noopener noreferrer"\n            className="$1"\n          >`);
nav = nav.replace(/<span>HUJJAT TOPSHIRISH<\/span>\n\s*<\/button>/, `<span>HUJJAT TOPSHIRISH</span>\n          </a>`);
nav = nav.replace(/<button\s+onClick=\{[^}]*\}\s+className="([^"]+)"\s*>\s*<Send className="w-4 h-4" \/>\s*<span>HOZIROQ HUJJAT TOPSHIRISH<\/span>\s*<\/button>/m, `<a\n              href="${LINK}" target="_blank" rel="noopener noreferrer"\n              onClick={() => setIsMobileMenuOpen(false)}\n              className="$1"\n            >\n              <Send className="w-4 h-4" />\n              <span>HOZIROQ HUJJAT TOPSHIRISH</span>\n            </a>`);
fs.writeFileSync('src/components/Navbar.tsx', nav);

// 2. HeroSection.tsx
let hero = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');
hero = hero.replace(/<button\s+onClick=\{onOpenApply\}\s+className="([^"]+)"\s*>/, `<a\n            href="${LINK}" target="_blank" rel="noopener noreferrer"\n            className="$1"\n          >`);
hero = hero.replace(/<span>HOZIROQ HUJJAT TOPSHIRISH<\/span>\s*<ArrowRight className="w-4 h-4" \/>\s*<\/button>/, `<span>HOZIROQ HUJJAT TOPSHIRISH</span>\n            <ArrowRight className="w-4 h-4" />\n          </a>`);
fs.writeFileSync('src/components/HeroSection.tsx', hero);

// 3. HorizontalScrollDeck.tsx
let deck = fs.readFileSync('src/components/HorizontalScrollDeck.tsx', 'utf8');
deck = deck.replace(/<button\s+onClick=\{onOpenApply\}\s+className="([^"]+)"\s*>/, `<a\n                  href="${LINK}" target="_blank" rel="noopener noreferrer"\n                  className="$1"\n                >`);
deck = deck.replace(/<span>Hoziroq Hujjat Topshirish<\/span>\s*<ArrowUpRight className="w-4 h-4 text-indigo-400" \/>\s*<\/button>/, `<span>Hoziroq Hujjat Topshirish</span>\n                  <ArrowUpRight className="w-4 h-4 text-indigo-400" />\n                </a>`);
fs.writeFileSync('src/components/HorizontalScrollDeck.tsx', deck);

// 4. ProgramExplorer.tsx
let exp = fs.readFileSync('src/components/ProgramExplorer.tsx', 'utf8');
exp = exp.replace(/<button\s+onClick=\{[^}]*\}\s+className="([^"]+)"\s*>/, `<a\n                  href="${LINK}" target="_blank" rel="noopener noreferrer"\n                  className="$1"\n                >`);
exp = exp.replace(/<span>Topshirish<\/span>\s*<ArrowUpRight className="w-4 h-4 text-indigo-400" \/>\s*<\/button>/, `<span>Topshirish</span>\n                  <ArrowUpRight className="w-4 h-4 text-indigo-400" />\n                </a>`);
fs.writeFileSync('src/components/ProgramExplorer.tsx', exp);

// 5. DiscountCalculator.tsx
let calc = fs.readFileSync('src/components/DiscountCalculator.tsx', 'utf8');
calc = calc.replace(/<button\s+onClick=\{[^}]*\}\s+className="([^"]+)"\s*>/, `<a\n              href="${LINK}" target="_blank" rel="noopener noreferrer"\n              className="$1"\n            >`);
calc = calc.replace(/<span>Ushbu Chegirma Bilan Topshirish<\/span>\s*<ArrowRight className="w-4 h-4 text-indigo-400" \/>\s*<\/button>/, `<span>Ushbu Chegirma Bilan Topshirish</span>\n              <ArrowRight className="w-4 h-4 text-indigo-400" />\n            </a>`);
fs.writeFileSync('src/components/DiscountCalculator.tsx', calc);

// 6. InternationalShowcase.tsx
let intl = fs.readFileSync('src/components/InternationalShowcase.tsx', 'utf8');
intl = intl.replace(/<button\s+onClick=\{onOpenApply\}\s+className="([^"]+)"\s*>/, `<a\n                href="${LINK}" target="_blank" rel="noopener noreferrer"\n                className="$1"\n              >`);
intl = intl.replace(/<span>Hujjat Topshirish va A'zo Bo'lish<\/span>\s*<ArrowRight className="w-4 h-4 text-indigo-400" \/>\s*<\/button>/, `<span>Hujjat Topshirish va A'zo Bo'lish</span>\n                <ArrowRight className="w-4 h-4 text-indigo-400" />\n              </a>`);
fs.writeFileSync('src/components/InternationalShowcase.tsx', intl);

// 7. Footer.tsx
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(/<button\s+onClick=\{onOpenApply\}\s+className="([^"]+)"\s*>/, `<a\n              href="${LINK}" target="_blank" rel="noopener noreferrer"\n              className="$1 block"\n            >`);
footer = footer.replace(/Hujjat Topshirish\s*<\/button>/, `Hujjat Topshirish\n            </a>`);
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log("Done linking");
