import Section from "@/components/shared/section";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonial() {
  return (
    <Section className="flex-center flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 ">
      <h1>What Our Customers Say</h1>
      <p> Trusted by teams and businesses around the world.</p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-10">
        {TESTIMONIALS.map(({ id, name, role, company, testimonial }) => (
          <Card key={id} className="flex flex-col justify-between p-6">
            <CardContent className="p-0">
              <p className="text-muted-foreground leading-relaxed w-full text-left">
                "{testimonial}"
              </p>
            </CardContent>

            <div className="mt-4 flex items-center gap-4 border-t pt-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-semibold">
                {name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold">{name}</h4>
                <p className="text-sm text-muted-foreground  w-full">
                  {role} • {company}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
