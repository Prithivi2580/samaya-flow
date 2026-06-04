import Navbar from "@/components/shared/navbar";
import Landing from "../components/landing";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="
      absolute left-[-400px] -top-40
      h-[1000px] w-[1200px]
      rounded-full
        bg-[radial-gradient(circle,#8c5cff_0%,#a855f7_35%,transparent_60%)]
      blur-[140px]
    "
      />

      <div
        className="
      absolute right-[-400px] -top-40
      h-[1000px] w-[1200px]
      rounded-full
      bg-[radial-gradient(circle,#8c5cff_0%,#a855f7_35%,transparent_60%)]
      blur-[140px]
    "
      />
      <Navbar />
      <Landing />
    </div>
  );
}
