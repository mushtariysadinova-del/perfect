const fs = require('fs');

const OLD_LINK = 'https://forms.amocrm.ru/rztwtdc';
const NEW_LINK = 'https://forms.amocrm.ru/rztmwrm';

const files = [
  'src/components/Footer.tsx',
  'src/components/ProgramExplorer.tsx',
  'src/components/HeroSection.tsx',
  'src/components/InternationalShowcase.tsx',
  'src/components/Navbar.tsx',
  'src/components/DiscountCalculator.tsx',
  'src/components/HorizontalScrollDeck.tsx',
  'src/App.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const updated = content.replace(new RegExp(OLD_LINK, 'g'), NEW_LINK);
    fs.writeFileSync(file, updated);
  }
});
console.log('Links replaced successfully.');
