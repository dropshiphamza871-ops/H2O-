export interface Branch {
  id: string;
  name: string;
  city: 'Cairo' | 'Giza' | 'Alexandrina' | 'Delta & Coast';
  district: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl: string;
  imageUrl: string;
  fallbackUrl?: string;
  amenities: string[];
  isHotlineBranch?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  specializations: string[];
  experience: string; // e.g., "8 Years"
  certifications: string[];
  bio: string;
}

export interface FitnessClass {
  id: string;
  name: string;
  category: 'Zumba' | 'Belly Dance' | 'Jumping' | 'Kick Boxing' | 'ABS' | 'Yoga' | 'Squatting' | 'Cardio' | string;
  description: string;
  duration: string;
  intensity: 'Beginner' | 'Medium' | 'High' | 'Elite';
  image: string;
  fallbackUrl?: string;
  benefits: string[];
  schedule: {
    day: string;
    time: string;
    trainer: string;
  }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingPeriod: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  unavailableFeatures?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
  branch: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Membership' | 'Classes' | 'Branches' | 'General';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Branches' | 'Equipment' | 'Workouts' | 'Community';
  imageUrl: string;
  fallbackUrl?: string;
}
