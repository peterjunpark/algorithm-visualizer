"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="corporate">{children}</ThemeProvider>;
}
