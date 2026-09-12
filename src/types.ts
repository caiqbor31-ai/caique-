export interface Talent {
  id: string;
  code: string;
  name: string;
  board: 'Top Models' | 'Elenco Principal' | 'Contratação Direta' | 'Novos Rostos';
  height: number; // in cm
  bust: number;
  waist: number;
  hips?: number;
  chest?: number;
  shoe: number;
  bases: string[];
  imageUrl: string;
  polaroids?: string[];
  campaigns: string;
  bio?: string;
  statusText?: string;
}

export interface Look {
  id: string;
  lookNumber: string;
  title: string;
  category: 'Drop 01 // Streetwear' | 'Alfaiataria Urbana' | 'Outerwear Técnico';
  tag: 'Edição Limitada' | 'Drop Exclusivo' | 'Sob Encomenda';
  priceBRL: number;
  priceFormatted: string;
  description: string;
  fabric: string;
  tailorHours: number;
  imageUrl: string;
  model: {
    name: string;
    height: string;
    metrics: string;
    division: string;
    talentId: string;
  };
}

export interface DirectImageItem {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  aspectRatio: string;
}

export interface AppointmentForm {
  name: string;
  email: string;
  phone: string;
  salon: string;
  silhouette: string;
  notes?: string;
}

export interface CastingInquiryForm {
  company: string;
  email: string;
  models: string;
  usagePeriod: string;
}
