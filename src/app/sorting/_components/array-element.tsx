import React from "react";

type ArrayElementProps = {
  children?: React.ReactNode;
  value: number;
  index: number;
};

export default function ArrayElement({
  children,
  value,
  index,
}: ArrayElementProps) {
  const colorVariant = index % 2 === 0 ? "bg-primary" : "bg-primary-focus";

  return (
    <div
      id={`index-${index}`}
      className={`w-full rounded-t-md opacity-80 ${colorVariant}`}
      style={{ height: `${value}%` }} // Easier to use this instead of Tailwind.
    ></div>
  );
}
