export interface Program {
  id: string;
  name: string;
  code: string;
  category: string;
  prices: {
    kunduzgi: number;
    kechki?: number;
    sirtqi?: number;
  };
  annualPrice?: number; // Kept for backwards compatibility temporarily if needed, but we should rely on prices
  formattedPrice: string;
  demandJobs: string;
  description: string;
  studyFormats: string[];
  image: string;
  popular?: boolean;
}

export interface DiscountOption {
  id: string;
  label: string;
  icon: string;
  percentage: number;
  isGrant?: boolean;
  note?: string;
}

export interface PartnerUniversity {
  country: string;
  countryCode: string;
  flagUrl: string;
  title: string;
  description: string;
}

export interface SlideItem {
  id: number;
  tag: string;
  isDangerTag?: boolean;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export interface ApplicationFormData {
  fullName: string;
  phone: string;
  programId: string;
  studyFormat: string;
  hasIELTS: boolean;
  ieltsScore: string;
  note: string;
}
