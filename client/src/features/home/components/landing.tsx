import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <Section className="relative overflow-hidden py-10">
      <div className="landing-container">
        <h4>
          <span>NEW:</span> SMART SCHEDULING FOR TEAMS
        </h4>
        <h1>Scheduling that works with every calendar.</h1>
        <p>
          Book meetings, manage availability, sync calendars, and automate
          scheduling — without endless email back-and-forth.
        </p>
        <Button className="btn">Get Started</Button>
      </div>
      <div className="relative w-full max-w-5xl h-[60vh] bg-white mt-12 md:mt-28 lg:mt-10 mx-auto rounded-[10px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="./src/assets/samaya-flow.png"
          alt="Background Image"
        />
      </div>
    </Section>
  );
}
