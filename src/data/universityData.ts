import { Program, DiscountOption, PartnerUniversity } from '../types';

export const UNIVERSITY_INFO = {
  name: "Tashkent Perfect University",
  shortName: "TPU",
  licenseNo: "№043951",
  licenseDate: "19.10.2022",
  issuer: "O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar vazirligi",
  address: "Olmazor tumani, Zarqaynar ko'chasi, 10-uy, Toshkent shahri",
  phone: "+998 55 511 55 29",
  shortPhone: "555115529",
  telegram: "https://t.me/perfect_qabul",
  website: "www.register-qabul.tpu.uz",
  admissionPeriod: "1 Iyun – 30 Sentabr 2026",
  stats: {
    practiceRate: "70%",
    employmentRate: "80%+",
    diplomaRate: "100%",
  }
};

export const PROGRAMS: Program[] = [
  {
    id: "prog-0",
    name: "Iqtisodiyot",
    code: "60100000",
    category: "business",
    prices: {
      kunduzgi: 18000000,
      kechki: 14000000
    },
    annualPrice: 18000000,
    formattedPrice: "18 000 000 UZS",
    demandJobs: "Iqtisodchi, moliya tahlilchisi",
    description: "Iqtisodiyot va biznes jarayonlari, moliya, statistika.",
    studyFormats: ["Kunduzgi","Kechki"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-1",
    name: "Turizm va mehmondo'stlik",
    code: "60100001",
    category: "tourism",
    prices: {
      kunduzgi: 16000000,
      kechki: 14000000
    },
    annualPrice: 16000000,
    formattedPrice: "16 000 000 UZS",
    demandJobs: "Turizm menejeri, mehmonxona rahbari",
    description: "Turizm biznesini boshqarish va mehmonxona menejmenti.",
    studyFormats: ["Kunduzgi","Kechki"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-2",
    name: "Boshlang'ich ta'lim",
    code: "60100002",
    category: "pedagogy",
    prices: {
      kunduzgi: 16000000,
      kechki: 13000000
    },
    annualPrice: 16000000,
    formattedPrice: "16 000 000 UZS",
    demandJobs: "Boshlang'ich sinf o'qituvchisi",
    description: "Zamonaviy boshlang'ich ta'lim metodologiyasi.",
    studyFormats: ["Kunduzgi","Kechki"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-3",
    name: "Psixologiya",
    code: "60100003",
    category: "pedagogy",
    prices: {
      kunduzgi: 16000000,
    },
    annualPrice: 16000000,
    formattedPrice: "16 000 000 UZS",
    demandJobs: "Psixolog, HR mutaxassis",
    description: "Amaliy psixologiya, shaxsiy rivojlanish va kouching.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-4",
    name: "Tarix",
    code: "60100004",
    category: "pedagogy",
    prices: {
      kunduzgi: 16000000,
      kechki: 10000000
    },
    annualPrice: 16000000,
    formattedPrice: "16 000 000 UZS",
    demandJobs: "Tarixchi, tadqiqotchi, o'qituvchi",
    description: "Jahon va O'zbekiston tarixi, arxeologiya.",
    studyFormats: ["Kunduzgi","Kechki"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-5",
    name: "Dasturiy injiniring",
    code: "60100005",
    category: "it",
    prices: {
      kunduzgi: 17000000,
      kechki: 15000000
    },
    annualPrice: 17000000,
    formattedPrice: "17 000 000 UZS",
    demandJobs: "Dasturchi, Software Engineer",
    description: "Dasturiy ta'minot yaratish, web/mobile dasturlash.",
    studyFormats: ["Kunduzgi","Kechki"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "prog-6",
    name: "Logistika",
    code: "60100006",
    category: "business",
    prices: {
      kunduzgi: 17000000,
    },
    annualPrice: 17000000,
    formattedPrice: "17 000 000 UZS",
    demandJobs: "Logistika menejeri, ta'minotchi",
    description: "Xalqaro va mahalliy yuk tashish, ta'minot zanjiri.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-7",
    name: "Marketing",
    code: "60100007",
    category: "business",
    prices: {
      kunduzgi: 16000000,
    },
    annualPrice: 16000000,
    formattedPrice: "16 000 000 UZS",
    demandJobs: "Marketolog, SMM menejer",
    description: "Raqamli marketing, SMM, brend menejmenti.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "prog-8",
    name: "Kompyuter injiniring",
    code: "60100008",
    category: "it",
    prices: {
      kunduzgi: 18000000,
    },
    annualPrice: 18000000,
    formattedPrice: "18 000 000 UZS",
    demandJobs: "Tizim administratori, IT muhandis",
    description: "Kompyuter tizimlari, tarmoqlar va kiberxavfsizlik.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    popular: true
  },
  {
    id: "prog-9",
    name: "Maktabgacha ta'lim",
    code: "60100009",
    category: "pedagogy",
    prices: {
      kunduzgi: 16000000,
    },
    annualPrice: 16000000,
    formattedPrice: "16 000 000 UZS",
    demandJobs: "Tarbiyachi, bog'cha mudirasi",
    description: "Maktabgacha yoshdagi bolalarni rivojlantirish.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-10",
    name: "Filologiya va tillarni o'qitish",
    code: "60100010",
    category: "pedagogy",
    prices: {
      kunduzgi: 16500000,
    },
    annualPrice: 16500000,
    formattedPrice: "16 500 000 UZS",
    demandJobs: "Tarjimon, til o'qituvchisi",
    description: "Xorijiy tillar, lingvistika va tarjimashunoslik.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-11",
    name: "Inson resurslarini boshqarish",
    code: "60100011",
    category: "business",
    prices: {
      kunduzgi: 17000000,
    },
    annualPrice: 17000000,
    formattedPrice: "17 000 000 UZS",
    demandJobs: "HR menejer, kadrlar bo'limi boshlig'i",
    description: "Kompaniyalarda kadrlar siyosati va HR menejment.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-12",
    name: "Bank ishi",
    code: "60100012",
    category: "business",
    prices: {
      kunduzgi: 17500000,
    },
    annualPrice: 17500000,
    formattedPrice: "17 500 000 UZS",
    demandJobs: "Bankir, kredit mutaxassisi",
    description: "Tijorat banklari, kreditlash va investitsiyalar.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-13",
    name: "Buxgalteriya hisobi",
    code: "60100013",
    category: "business",
    prices: {
      kunduzgi: 17500000,
    },
    annualPrice: 17500000,
    formattedPrice: "17 500 000 UZS",
    demandJobs: "Buxgalter, auditor",
    description: "Moliyaviy hisobot, audit va buxgalteriya.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-14",
    name: "Soliqlar va soliqqa tortish",
    code: "60100014",
    category: "business",
    prices: {
      kunduzgi: 17000000,
    },
    annualPrice: 17000000,
    formattedPrice: "17 000 000 UZS",
    demandJobs: "Soliq inspektori, maslahatchi",
    description: "Soliq qonunchiligi, deklaratsiyalar va moliya.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prog-15",
    name: "Jahon iqtisodiyoti va xalqaro iqtisodiy munosabatlar",
    code: "60100015",
    category: "business",
    prices: {
      kunduzgi: 18000000,
    },
    annualPrice: 18000000,
    formattedPrice: "18 000 000 UZS",
    demandJobs: "Xalqaro iqtisodchi, diplomat",
    description: "Xalqaro savdo, eksport-import va global bozor.",
    studyFormats: ["Kunduzgi"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  }
];

export const DISCOUNTS: DiscountOption[] = [
  {
    id: "olympiad",
    label: "Respublika Olimpiadasi g'oliblari (1-o'rin)",
    icon: "Trophy",
    percentage: 100,
    isGrant: true,
    note: "100% Bepul Grant ta'limi"
  },
  {
    id: "ielts-high",
    label: "IELTS 7.5 va undan yuqori (C2 daraja)",
    icon: "Award",
    percentage: 20,
    note: "Kontrakt narxidan 20% Chegirma"
  },
  {
    id: "ielts-medium",
    label: "IELTS 5.5 – 7.0 (B2, C1 daraja)",
    icon: "Languages",
    percentage: 10,
    note: "Kontrakt narxidan 10% Chegirma"
  },
  {
    id: "family",
    label: "Bir oiladan 2 yoki undan ortiq kishi o'qisa",
    icon: "Users",
    percentage: 10,
    note: "Har bir oila a'zosi uchun 10% Chegirma"
  },
  {
    id: "early-pay",
    label: "15-sentabrgacha 90% to'lov qilganda",
    icon: "Clock",
    percentage: 10,
    note: "Qo'shimcha 10% bonus chegirma"
  }
];

export const PARTNERS: PartnerUniversity[] = [
  {
    country: "Turkiya",
    countryCode: "tr",
    flagUrl: "https://flagcdn.com/w80/tr.png",
    title: "Dual Ta'lim va Turkiyada Amaliyot",
    description: "Turkiyaning TOP universitetlari bilan birgalikda 2+2 va 3+1 dual diplom dasturlari."
  },
  {
    country: "Malayziya",
    countryCode: "my",
    flagUrl: "https://flagcdn.com/w80/my.png",
    title: "Janubi-Sharqiy Osiyoda Ta'lim",
    description: "Malayziyadagi nufuzli universitetlar bilan hamkorlikda xalqaro ta'lim va almashinuv dasturlari."
  },
  {
    country: "London",
    countryCode: "gb",
    flagUrl: "https://flagcdn.com/w80/gb.png",
    title: "Angliyada Xalqaro Tajriba",
    description: "Londonning yetakchi oliygohlarida ta'lim olish, yozgi amaliyotlar va xalqaro sertifikatlar."
  }
];

export const COMPARISON_DATA = {
  traditional: {
    title: "An'anaviy Eski Tizim",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    points: [
      "90% eskirgan quruq nazariya va yodlash.",
      "Bitirguncha 0 so'm daromad va 0 amaliyot.",
      "4 yildan keyin tanish-bilish orqali past oylik ish qidirish.",
      "Faqat bitta hudud bilan cheklangan oddiy diplom."
    ]
  },
  tpu: {
    title: "Perfect University",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    points: [
      "70% real loyihalar ustida amaliy va intensiv darslar.",
      "3-kursdanoq maoshli va nufuzli ishlarga kirish imkoniyati.",
      "Karyera Markazi hamkorligida TOP kompaniyalarga to'g'ridan-to'g'ri yo'llanma.",
      "Yevropa va Turkiya oliygohlari bilan dual almashinuv dasturi."
    ]
  }
};
