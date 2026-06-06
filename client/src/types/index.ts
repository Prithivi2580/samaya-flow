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

export interface OnboardingStep1Props {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface OnboardingStep3Props {
  id: number;
  icon: LucideIcon;
  date: Day;
  time: string[];
}
