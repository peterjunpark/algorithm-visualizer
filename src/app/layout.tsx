import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import ThemeProvider from "../components/theme/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algorithm Visualizer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx("h-screen", inter.className)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
