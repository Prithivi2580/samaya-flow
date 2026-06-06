import type {
  FeaturesCardProps,
  HowItWorksProps,
  NavbarProps,
  OnboardingStep1Props,
  OnboardingStep3Props,
  PricingCardProps,
  TestimonialProps,
} from "@/types";
import {
  RefreshCcw,
  Zap,
  GlobeLock,
  BellRing,
  Users,
  Workflow,
  TrendingUp,
  UserSearch,
  Speech,
  GraduationCap,
  PersonStanding,
  ToggleRight,
} from "lucide-react";

export const NAVBAR_LINKS: NavbarProps[] = [
  {
    id: 1,
    link: "#home",
    name: "Home",
  },
  {
    id: 2,
    link: "#features",
    name: "Features",
  },
  {
    id: 3,
    link: "#pricing",
    name: "Pricing",
  },
  {
    id: 4,
    link: "#resources",
    name: "Resources",
  },
];

export const FEATURES_CARD: FeaturesCardProps[] = [
  {
    id: 1,
    icon: RefreshCcw,
    title: "Multi-calendar sync",
    description:
      "Connect your calendars and keep your availability up to date automatically. Avoid conflicts and eliminate double bookings.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Smart availabilit",
    description:
      "Set your working hours, meeting buffers, and booking limits to protect your focus time and stay productive.",
  },
  {
    id: 3,
    icon: GlobeLock,
    title: "Timezone detection",
    description:
      "Automatically display meeting times in your guests' local timezone, making scheduling effortless across regions.",
  },
  {
    id: 4,
    icon: BellRing,
    title: "Automated reminders",
    description:
      "Reduce no-shows with automatic email reminders and booking confirmations sent at the right time.",
  },
  {
    id: 5,
    icon: Users,
    title: "Team scheduling",
    description:
      "Coordinate meetings across teams with shared availability, round-robin assignments, and collaborative scheduling.",
  },
  {
    id: 6,
    icon: Workflow,
    title: "Meeting integrations",
    description:
      "Automatically generate meeting links and include them in invitations for a seamless booking experience.",
  },
];

export const HOW_IT_WORKS: HowItWorksProps[] = [
  {
    id: 1,
    title: "Connect calendar",
    description: "Securely link your existing calendars in two clicks.",
  },
  {
    id: 2,
    title: "Set availability",
    description: "Define your working hours and meeting preferences.",
  },
  {
    id: 3,
    title: "Share link",
    description: "Send your personalized URL to anyone who needs.",
  },
  {
    id: 4,
    title: "Get booked",
    description: "Meetings appear on your calendar automatically.",
  },
];

export const PRICING_CARD: PricingCardProps[] = [
  {
    id: 1,
    title: "Free",
    price: "$0/mo",
    features: [
      "✓ 1 Active Event Type",
      "✓ Unlimited Bookings",
      "✓ Google Calendar Sync",
      "✓ Basic Email Notifications",
    ],
    buttonText: "Get Started Free",
  },
  {
    id: 2,
    title: "Pro",
    price: "$12/mo",
    features: [
      "✓ Unlimited Event Types",
      "✓ Unlimited Bookings",
      "✓ Google & Outlook Sync",
      "✓ Custom Branding",
      "✓ Automated Email Reminders",
      "✓ Meeting Integrations",
      "✓ Advanced Analytics",
    ],
    buttonText: "Start Pro Trial",
  },
  {
    id: 3,
    title: "Team",
    price: "$20/user/mo",
    features: [
      "✓ Everything in Pro",
      "✓ Round-Robin Scheduling",
      "✓ Team Availability",
      "✓ Admin Management",
      "✓ Role-Based Permissions",
      "✓ SMS Reminders",
      "✓ Single Sign-On (SSO)",
      "✓ Team Analytics",
    ],
    buttonText: "Contact Sales",
  },
];

export const TESTIMONIALS: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechFlow",
    testimonial:
      "This scheduling tool has completely transformed how our team coordinates meetings. We've reduced scheduling back-and-forth by nearly 90%.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "LaunchPad",
    testimonial:
      "The timezone detection and calendar syncing features save us hours every week. It's become an essential part of our workflow.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Lead",
    company: "GrowthHub",
    testimonial:
      "Simple, reliable, and incredibly intuitive. Our clients love the booking experience and our team loves the automation.",
  },
];

export const ONBOARDING_STEP_1: OnboardingStep1Props[] = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Sales",
    description: "Closing deals and demos",
  },
  {
    id: 2,
    icon: UserSearch,
    title: "Recruiting",
    description: "Interviewing candidates",
  },
  {
    id: 3,
    icon: Speech,
    title: "Consulting",
    description: "Client meetings & advisory",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Education",
    description: "Office hours and tutoring",
  },
  {
    id: 5,
    icon: PersonStanding,
    title: "Personal",
    description: "Catching up with friends",
  },
];

export const ONBOARDING_STEP_3: OnboardingStep3Props[] = [
  {
    id: 1,
    icon: ToggleRight,
    date: "Monday",
    time: ["9:00 AM", "10:00 AM"],
  },
  {
    id: 2,
    icon: ToggleRight,
    date: "Tuesday",
    time: ["1:00 PM", "2:00 PM"],
  },
  {
    id: 3,
    icon: ToggleRight,
    date: "Wednesday",
    time: ["11:00 AM", "12:00 PM"],
  },
  {
    id: 4,
    icon: ToggleRight,
    date: "Thursday",
    time: ["3:00 PM", "4:00 PM"],
  },
  {
    id: 5,
    icon: ToggleRight,
    date: "Friday",
    time: ["10:00 AM", "11:00 AM"],
  },
  {
    id: 6,
    icon: ToggleRight,
    date: "Saturday",
    time: ["12:00 PM", "1:00 PM"],
  },
  {
    id: 7,
    icon: ToggleRight,
    date: "Sunday",
    time: ["2:00 PM", "3:00 PM"],
  },
];
