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
import { BadgeCheck, User } from "lucide-react";
import { useOnboardingStore } from "../store/use-onboarding-store";
import { Separator } from "@/components/ui/separator";

export default function Step2() {
  const nextStep = useOnboardingStore((state) => state.nextStep);

  const handleContinue = () => {
    nextStep();
  };
  return (
    <Card className="mt-20 md:px-6! md:py-10">
      <CardHeader>
        <CardTitle className="text-base md:text-2xl font-semibold">
          Create your unique link.
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm md:text-base">
          This is how others will book time with you.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid! grid-cols-1! md:grid-cols-2! gap-4 md:gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm md:text-base">Your Link</h2>
          <div className="w-full h-full border flex rounded-[10px]">
            <p className="bg-primary/10 w-full h-full py-4 md:py-2">
              samayaflow.com/
            </p>
            <Input
              placeholder="john doe"
              className="rounded-none! w-full! h-full! py-4! md:py-2! outline-none! border-none! focus:ring-0! focus-visible:ring-0! text-sm! md:text-base!"
            />
          </div>
          <p className="text-primary w-fit flex gap-1">
            <BadgeCheck className="size-6" />
            URL is available
          </p>
        </div>
      </CardContent>
      <Card className="bg-primary/10 rounded-[10px]">
        <CardHeader>
          <CardTitle className="text-sm md:text-base">Live Preview</CardTitle>
        </CardHeader>
        <CardContent className="bg-white mx-4! rounded-[10px] flex! items-center! gap-3! py-2!">
          <div className="p-2 rounded-full bg-primary/50 size-10">
            <User className="text-white" />
          </div>
          <div>
            <h2 className="text-base md:text-lg font-medium">
              Your Booking Page
            </h2>
            <p className="w-full text-sm md:text-base">
              samayaflow.com/john-doe
            </p>
          </div>
        </CardContent>
      </Card>
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
