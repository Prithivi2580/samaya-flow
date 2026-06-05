import Section from "@/components/shared/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FEATURES_CARD } from "@/lib/constants";

export default function Features() {
  return (
    <Section className="flex-center flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 ">
      <h1 className="w-[85%] md:w-[60%]">
        Everything you need to book faster.
      </h1>
      <p>
        Powerful scheduling tools designed to help professionals and teams save
        time, stay organized, and eliminate scheduling friction.
      </p>

      <div className="feature-container">
        {FEATURES_CARD.map((feature) => (
          <Card key={feature.id}>
            <CardHeader>
              <div className="mb-2 size-10 bg-primary/10 text-primary rounded-[10px] flex items-center justify-center">
                <feature.icon className="h-6 w-6" />
              </div>

              <CardTitle className="title">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="description">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
