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
      <div className="relative w-full max-w-6xl h-[40vh] mt-20 md:mt-28 lg:mt-10 mx-auto">
        {/* corner glow (top-left only) */}
        <div className="absolute -top-4 -left-4 h-50 w-120 bg-purple-500 blur-lg rounded-xl " />
        {/* actual box */}
        <div className="relative h-full w-full bg-red-300 rounded-[15px]">
          Box content
        </div>
      </div>{" "}
    </Section>
  );
}
