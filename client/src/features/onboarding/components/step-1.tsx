import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ONBOARDING_STEP_1 } from "@/lib/constants";
import { useOnboardingStore } from "../store/use-onboarding-store";
import { Separator } from "@/components/ui/separator";

export default function Step1() {
  const nextStep = useOnboardingStore((state) => state.nextStep);

  const handleContinue = () => {
    nextStep();
  };
  return (
    <Card className="mt-20 md:px-6! md:py-10">
      <CardHeader>
        <CardTitle className="text-base md:text-2xl font-semibold">
          Welcome to ScheduleFlow
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm md:text-base">
          What will you use it for? We'll tailor your experience.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid! grid-cols-1! md:grid-cols-2! gap-4 md:gap-6">
        {ONBOARDING_STEP_1.map((item) => (
          <Card key={item.id} className="md:p-6! rounded-sm!">
            <CardHeader className=" flex! gap-3! items-center!">
              <div>
                <item.icon className="h-7 w-7 text-indigo-600" />
              </div>
              <div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </CardContent>
      <Separator />
      <CardFooter className="gap-2 items-end justify-end!">
        <Button className="px-2 py-2 md:px-8 md:py-5" onClick={handleContinue}>
          Continue
        </Button>
        <Button variant="outline" className="px-2 py-2 md:px-8 md:py-5">
          I'll do it later
        </Button>
      </CardFooter>
    </Card>
  );
}
