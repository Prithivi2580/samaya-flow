import Section from "@/components/shared/section";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <Section className="flex-center gap-4 flex-col">
      <h1>Get started in minutes.</h1>
      <p>Setup is effortless so you can focus on the meetings that matter.</p>

      <div className="how_it_works-container">
        {HOW_IT_WORKS.map((item) => (
          <div className="items" key={item.id}>
            <div className="number">{item.id}</div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
