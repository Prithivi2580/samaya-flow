import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <Section className="flex-center flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 bg-primary rounded-xl md:rounded-2xl py-5!">
      <h2 className="text-base md:text-2xl font-semibold text-white">
        Ready to simplify your schedule?
      </h2>
      <p className="text-center text-white/70 w-[60%]!">
        Join thousands of professionals using SamayaFlow to automate scheduling
        and focus on what matters most.
      </p>
      <Button className="bg-white text-primary  px-2 py-2 md:px-6 md:py-5">
        Get Started Free
      </Button>
      <p className="text-center text-white/70">
        No credit card required. Start scheduling in minutes.
      </p>
    </Section>
  );
}
