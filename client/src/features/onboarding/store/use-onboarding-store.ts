import { create } from "zustand";
import type { OnboardingStore, UserRole, Availability } from "../types";

export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  // -------------------
  // STATE
  // -------------------
  step: 1,

  data: {
    role: null,
    username: "",
    availability: {},
  },
  loading: false,

  // -------------------
  // ACTIONS
  // -------------------
  nextStep: () =>
    set((state) => ({
      step: state.step + 1,
    })),

  prevStep: () =>
    set((state) => ({
      step: state.step - 1,
    })),

  setRole: (role: UserRole) =>
    set((state) => ({
      data: { ...state.data, role },
    })),

  setUsername: (username: string) =>
    set((state) => ({
      data: { ...state.data, username },
    })),

  setAvailability: (availability: Availability) =>
    set((state) => ({
      data: { ...state.data, availability },
    })),

  // -------------------
  // FINAL SUBMIT
  // -------------------
  submitOnboarding: async () => {
    set({ loading: true });

    const { data } = get();

    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      set({ loading: false });
      return true;
    } catch (err) {
      set({ loading: false });
      return false;
    }
  },
}));
