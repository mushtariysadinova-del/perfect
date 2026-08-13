const fs = require('fs');

const rawData = [
  { n: "Iqtisodiyot", pK: 18000000, pKechki: 14000000, cat: 'business', desc: "Iqtisodiyot va biznes jarayonlari, moliya, statistika.", jobs: "Iqtisodchi, moliya tahlilchisi" },
  { n: "Turizm va mehmondo'stlik", pK: 16000000, pKechki: 14000000, cat: 'tourism', desc: "Turizm biznesini boshqarish va mehmonxona menejmenti.", jobs: "Turizm menejeri, mehmonxona rahbari" },
  { n: "Boshlang'ich ta'lim", pK: 16000000, pKechki: 13000000, cat: 'pedagogy', desc: "Zamonaviy boshlang'ich ta'lim metodologiyasi.", jobs: "Boshlang'ich sinf o'qituvchisi" },
  { n: "Psixologiya", pK: 16000000, pKechki: null, cat: 'pedagogy', desc: "Amaliy psixologiya, shaxsiy rivojlanish va kouching.", jobs: "Psixolog, HR mutaxassis" },
  { n: "Tarix", pK: 16000000, pKechki: 10000000, cat: 'pedagogy', desc: "Jahon va O'zbekiston tarixi, arxeologiya.", jobs: "Tarixchi, tadqiqotchi, o'qituvchi" },
  { n: "Dasturiy injiniring", pK: 17000000, pKechki: 15000000, cat: 'it', desc: "Dasturiy ta'minot yaratish, web/mobile dasturlash.", jobs: "Dasturchi, Software Engineer", pop: true },
  { n: "Logistika", pK: 17000000, pKechki: null, cat: 'business', desc: "Xalqaro va mahalliy yuk tashish, ta'minot zanjiri.", jobs: "Logistika menejeri, ta'minotchi" },
  { n: "Marketing", pK: 16000000, pKechki: null, cat: 'business', desc: "Raqamli marketing, SMM, brend menejmenti.", jobs: "Marketolog, SMM menejer", pop: true },
  { n: "Kompyuter injiniring", pK: 18000000, pKechki: null, cat: 'it', desc: "Kompyuter tizimlari, tarmoqlar va kiberxavfsizlik.", jobs: "Tizim administratori, IT muhandis", pop: true },
  { n: "Maktabgacha ta'lim", pK: 16000000, pKechki: null, cat: 'pedagogy', desc: "Maktabgacha yoshdagi bolalarni rivojlantirish.", jobs: "Tarbiyachi, bog'cha mudirasi" },
  { n: "Filologiya va tillarni o'qitish", pK: 16500000, pKechki: null, cat: 'pedagogy', desc: "Xorijiy tillar, lingvistika va tarjimashunoslik.", jobs: "Tarjimon, til o'qituvchisi" },
  { n: "Inson resurslarini boshqarish", pK: 17000000, pKechki: null, cat: 'business', desc: "Kompaniyalarda kadrlar siyosati va HR menejment.", jobs: "HR menejer, kadrlar bo'limi boshlig'i" },
  { n: "Bank ishi", pK: 17500000, pKechki: null, cat: 'business', desc: "Tijorat banklari, kreditlash va investitsiyalar.", jobs: "Bankir, kredit mutaxassisi" },
  { n: "Buxgalteriya hisobi", pK: 17500000, pKechki: null, cat: 'business', desc: "Moliyaviy hisobot, audit va buxgalteriya.", jobs: "Buxgalter, auditor" },
  { n: "Soliqlar va soliqqa tortish", pK: 17000000, pKechki: null, cat: 'business', desc: "Soliq qonunchiligi, deklaratsiyalar va moliya.", jobs: "Soliq inspektori, maslahatchi" },
  { n: "Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar", pK: 18000000, pKechki: null, cat: 'business', desc: "Xalqaro savdo, eksport-import va global bozor.", jobs: "Xalqaro iqtisodchi, diplomat" }
];

const formatNum = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const generatePrograms = () => {
  return rawData.map((p, i) => {
    let formats = ['Kunduzgi'];
    if (p.pKechki) formats.push('Kechki');
    
    let prices = `prices: {\n      kunduzgi: ${p.pK},\n`;
    if (p.pKechki) {
      prices += `      kechki: ${p.pKechki}\n    }`;
    } else {
      prices += `    }`;
    }

    return `  {
    id: "prog-${i}",
    name: "${p.n}",
    code: "60${100000 + i}",
    category: "${p.cat}",
    ${prices},
    annualPrice: ${p.pK},
    formattedPrice: "${formatNum(p.pK)} UZS",
    demandJobs: "${p.jobs}",
    description: "${p.desc}",
    studyFormats: ${JSON.stringify(formats)},
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"${p.pop ? ',\n    popular: true' : ''}
  }`;
  }).join(',\n');
};

const content = fs.readFileSync('src/data/universityData.ts', 'utf8');
const newContent = content.replace(/export const PROGRAMS: Program\[\] = \[[\s\S]*?\];/, `export const PROGRAMS: Program[] = [\n${generatePrograms()}\n];`);
fs.writeFileSync('src/data/universityData.ts', newContent);
console.log('Done');
