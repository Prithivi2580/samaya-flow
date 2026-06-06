import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ONBOARDING_STEP_3 } from "@/lib/constants";
import { useOnboardingStore } from "../store/use-onboarding-store";
import { Separator } from "@/components/ui/separator";

export default function Step3() {
  const nextStep = useOnboardingStore((state) => state.nextStep);

  const handleContinue = () => {
    nextStep();
  };
  return (
    <Card className="mt-20 md:px-6! md:py-10">
      <CardHeader>
        <CardTitle className="text-base md:text-2xl font-semibold">
          When are you available?
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm md:text-base">
          Set your default working hours. You can change this later.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid! grid-cols-1! md:grid-cols-2! gap-4 md:gap-6">
        {ONBOARDING_STEP_3.map((item) => (
          <Card
            key={item.id}
            className="w-full! md:p-6! rounded-sm! flex! flex-row! items-center! justify-between!"
          >
            <CardHeader className="w-full! flex! gap-3! items-center! justify-between!">
              <div>
                <item.icon className="h-7 w-7 text-indigo-600" />
              </div>
              <CardTitle>{item.date}</CardTitle>

              <div className="flex gap-2">
                <Input
                  type="time"
                  defaultValue={item.time[0]}
                  className="w-16 md:w-24! rounded-sm!"
                />
                <span className="mx-2 text-muted-foreground">-</span>
                <Input
                  type="time"
                  defaultValue={item.time[1]}
                  className="w-16 md:w-24! rounded-sm!"
                />
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
