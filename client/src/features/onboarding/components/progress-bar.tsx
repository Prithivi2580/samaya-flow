import { cn } from "@/lib/utils";

export default function ProgressBar({
  progress,
  className,
}: {
  progress: number;
  className?: string;
}) {
  return (
    <div
      className={cn("h-2 bg-gray-200 rounded-full overflow-hidden", className)}
    >
      <div
        className="h-full bg-indigo-600 transition-all duration-300"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
