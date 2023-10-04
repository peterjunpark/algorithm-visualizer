import React from "react";
import { clsx } from "clsx";
import type { ArrayElement } from "../_utils/types";

type VisualizerProps = {
  array: ArrayElement[];
};

export default function Visualizer({ array }: VisualizerProps) {
  return (
    <div className="mx-2 flex h-full items-end">
      {array.map((element, index) => (
        <div
          key={index}
          className={clsx(
            "w-full rounded-t-md opacity-80",
            { "bg-primary": element.color === "UNSORTED" && index % 2 === 0 },
            {
              "bg-primary-focus":
                element.color === "UNSORTED" && index % 2 === 1,
            },
            {
              "bg-base-content opacity-75":
                element.color === "COMPARED" && index % 2 === 0,
            },
            {
              "bg-base-content opacity-60":
                element.color === "COMPARED" && index % 2 === 1,
            },
            { "bg-accent": element.color === "SORTED" && index % 2 === 0 },
            {
              "bg-accent-focus": element.color === "SORTED" && index % 2 === 1,
            },
          )}
          style={{ height: `${element.value}%` }} // Easier to use this instead of Tailwind.
        ></div>
      ))}
    </div>
  );
}
