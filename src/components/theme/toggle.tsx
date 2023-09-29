"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {theme === "business" ? (
        <button
          className="btn btn-circle btn-ghost text-xl"
          onClick={() => setTheme("corporate")}
        >
          <LuSun />
        </button>
      ) : (
        <button
          className="btn btn-circle btn-ghost text-xl"
          onClick={() => {
            setTheme("business");
          }}
        >
          <LuMoon />
        </button>
      )}
    </>
  );
}
