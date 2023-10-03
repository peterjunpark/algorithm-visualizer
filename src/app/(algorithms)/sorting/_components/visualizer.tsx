"use client";

import React, { useRef, useCallback } from "react";
import { clsx } from "clsx";

type VisualizerProps = {
  array: number[];
};

export default function Visualizer({ array }: VisualizerProps) {
  return (
    <div className="mx-2 flex h-full items-end">
      {array.map((value, index) => (
        <div
          key={index}
          className={clsx(
            "w-full rounded-t-md opacity-80",
            index % 2 === 0 ? "bg-primary" : "bg-primary-focus",
          )}
          style={{ height: `${value}%` }} // Easier to use this instead of Tailwind.
        ></div>
      ))}
    </div>
  );
}
