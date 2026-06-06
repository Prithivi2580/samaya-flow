import Step1 from "../components/step-1";
import Step2 from "../components/step-2";
import Step3 from "../components/step-3";
import Step4 from "../components/step-4";
import OnboardingLayout from "../layout/onboarding-layout";
import { useOnboardingStore } from "../store/use-onboarding-store";

export default function Onboarding() {
  const step = useOnboardingStore((state) => state.step);
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];
  return <OnboardingLayout>{steps[step - 1]}</OnboardingLayout>;
}
