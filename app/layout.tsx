import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlanIt",
};

// const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
    <html lang="en">
      <body className={inter.className}>
       <ReactQueryProvider>
        <div>{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
    </ThemeProvider>
  );
}
