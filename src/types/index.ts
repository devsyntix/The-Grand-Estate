export interface VillaConfiguration {
  id: string;
  name: string;
  bhk: string;
  tagline: string;
  builtUpArea: string;
  plotArea: string;
  price: string;
  priceNumeric: string;
  pricePerSqFt: string;
  bedrooms: number;
  bathrooms: number;
  carParks: number;
  features: string[];
  popular?: boolean;
  image: string;
}

export interface Amenity {
  id: string;
  title: string;
  category: 'wellness' | 'recreation' | 'nature' | 'community';
  categoryLabel: string;
  description: string;
  iconName: string;
  image: string;
  specs: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'exterior' | 'interiors' | 'living' | 'bedrooms' | 'amenities' | 'landscape';
  categoryLabel: string;
  url: string;
  alt: string;
  caption: string;
}

export interface FloorPlan {
  id: string;
  title: string;
  bhk: string;
  area: string;
  plotSize: string;
  levels: string;
  facing: string;
  highlights: string[];
  groundFloorImage: string;
  firstFloorImage: string;
}

export interface LandmarkCategory {
  category: string;
  icon: string;
  items: {
    name: string;
    distance: string;
    time: string;
    type: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  villaType: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  configuration: string;
  budget: string;
  preferredDate?: string;
  message?: string;
  source: string;
  submittedAt: string;
}
