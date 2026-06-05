import Section from "@/components/shared/section";
import {
  CardDescription,
  CardHeader,
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PRICING_CARD } from "@/lib/constants";

export default function Pricing() {
  return (
    <Section className="flex-center flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 ">
      <h1>Plans for every stage.</h1>
      <p>Simple, transparent pricing with no hidden fees.</p>

      <div className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRICING_CARD.map((plan) => (
          <Card key={plan.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <CardDescription className="text-3xl font-bold text-foreground">
                {plan.price}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button className="w-full btn">{plan.buttonText}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
