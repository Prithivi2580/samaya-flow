import { type ReactNode } from "react";
import TanstackQueryProvider from "./tanstack-query-provider";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </ThemeProvider>
  );
}
