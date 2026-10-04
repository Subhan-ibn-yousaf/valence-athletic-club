export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Elite';
  image: string;
  benefits: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  membership: string;
  quote: string;
  stats: string;
  rating: number;
  avatar: string;
}

export interface FacilityStat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}
