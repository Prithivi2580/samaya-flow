import { type ReactNode } from "react";
import TanstackQueryProvider from "./tanstack-query-provider";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
      <Toaster />
    </ThemeProvider>
  );
}
