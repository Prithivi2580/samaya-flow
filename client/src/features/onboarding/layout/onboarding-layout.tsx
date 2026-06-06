import Section from "@/components/shared/section";
import { type ReactNode } from "react";
import Logo from "@/components/shared/logo";
import { useOnboardingStore } from "../store/use-onboarding-store";
import ProgressBar from "../components/progress-bar";

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  const step = useOnboardingStore((state) => state.step);

  const totalSteps = 4;

  const progress = (step / totalSteps) * 100;
  return (
    <Section className="py-4!">
      <div className="w-full flex items-center justify-between">
        <div className="w-fit flex items-center justify-center gap-1">
          <Logo className="logo" />
          <p className="w-full">Samaya Flow</p>
        </div>

        <span>
          Step {step} of {totalSteps}
        </span>
      </div>
      <ProgressBar progress={progress} className="mt-20" />
      {children}
    </Section>
  );
}
