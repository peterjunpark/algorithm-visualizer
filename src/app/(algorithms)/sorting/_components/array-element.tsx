import React from "react";
import clsx from "clsx";

type ArrayElementProps = {
  value: number;
  index: number;
};

export default function ArrayElement({ value, index }: ArrayElementProps) {
  return (
    <div
      id={`index-${index}`}
      className={clsx(
        "w-full rounded-t-md opacity-80",
        index % 2 === 0 ? "bg-primary" : "bg-primary-focus",
      )}
      style={{ height: `${value}%` }} // Easier to use this instead of Tailwind.
    />
  );
}
