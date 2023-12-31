"use client";

import { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center">
      <div className="flex justify-center px-0">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
          <span className="text-accent-focus">algorithm&nbsp;</span>
          visualizer
        </h1>
      </div>
      <div className="flex justify-around">
        <nav tabIndex={0}>
          <Link
            href="/sorting?magnitude=med"
            className="link text-xl hover:text-accent"
          >
            actually, just sorting algorithms
          </Link>
        </nav>
      </div>
    </main>
  );
}
