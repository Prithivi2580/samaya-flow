import { type LucideIcon } from "lucide-react";

export interface NavbarProps {
  id: number;
  link: string;
  name: string;
}

export interface FeaturesCardProps {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface HowItWorksProps {
  id: number;
  title: string;
  description: string;
}

export interface PricingCardProps {
  id: number;
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

export interface TestimonialProps {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
}
