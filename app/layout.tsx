import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Availi",
};


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
