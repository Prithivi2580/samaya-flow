export type UserRole =
  | "SALES"
  | "RECRUITING"
  | "CONSULTING"
  | "EDUCATION"
  | "PERSONAL"
  | "TEAM";

export type Availability = Record<string, string>;

export interface OnboardingData {
  role: UserRole | null;
  username: string;
  availability: Availability;
}

export interface OnboardingStore {
  step: number;
  data: OnboardingData;
  loading: boolean;

  nextStep: () => void;
  prevStep: () => void;

  setRole: (role: UserRole) => void;
  setUsername: (username: string) => void;
  setAvailability: (availability: Availability) => void;

  submitOnboarding: () => Promise<boolean>;
}
