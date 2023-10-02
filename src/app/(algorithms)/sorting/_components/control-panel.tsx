"use client";

import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import type { Algorithm, Splen } from "../_utils/types";
import {
  LuPlay,
  LuUndo2,
  LuRotateCcw,
  LuRuler,
  LuSignal,
  LuSignalHigh,
  LuSignalMedium,
  LuSignalLow,
} from "react-icons/lu";

type ControlPanelProps = {
  splenParam: Splen;
  sortParam: Algorithm | null;
  arrayLength: number;
  handleAnimate: () => void;
  handleRandomize: (arrayLength: number) => void;
  handleUnsort: () => void;
};

export default function ControlPanel({
  sortParam,
  splenParam,
  arrayLength,
  handleAnimate,
  handleRandomize,
  handleUnsort,
}: ControlPanelProps) {
  const router = useRouter();

  const algorithmOptions: Algorithm[] = [
    "BUBBLE",
    "INSERTION",
    "SELECTION",
    "MERGE",
    "QUICK",
    "RADIX",
  ];
  const splenOptions = [
    <LuSignalLow key={0} />,
    <LuSignalMedium key={1} />,
    <LuSignalHigh key={2} />,
    <LuSignal key={3} />,
  ];

  const handleSelectAlgorithm = (algorithm: Algorithm) => {
    router.push(`?sort=${algorithm}&splen=${splenParam}`);
  };
  const handleSelectSplen = (splen: Splen) => {
    router.push(
      sortParam ? `?sort=${sortParam}&splen=${splen}` : `?splen=${splen}`,
    );
  };

  return (
    <div className="menu rounded-box absolute left-1/2 z-50 my-3 flex w-max -translate-x-1/2 transform items-center justify-around bg-base-200 bg-opacity-80 px-3 md:left-2 md:m-3 md:transform-none">
      <div className="flex items-center">
        <select
          onChange={(e) => handleSelectAlgorithm(e.target.value as Algorithm)}
          className="select select-sm m-2 w-fit"
          defaultValue={sortParam ? sortParam : "default"}
        >
          <option value="default" disabled>
            Select an algorithm
          </option>
          {algorithmOptions.map((option, index) => (
            <option value={option} key={index}>
              {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}{" "}
              sort
            </option>
          ))}
        </select>
        <li className={clsx(sortParam === null && "disabled")}>
          <button
            onClick={handleAnimate}
            className={clsx(sortParam === null && "cursor-not-allowed")}
            disabled={sortParam === null}
          >
            <LuPlay />
            Sort
          </button>
        </li>
      </div>
      <ul className="flex w-full justify-between">
        <li>
          <button onClick={handleUnsort}>
            <LuUndo2 />
            Unsort array
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              handleRandomize(arrayLength);
            }}
          >
            <LuRotateCcw />
            Randomize array
          </button>
        </li>
      </ul>
      <div className="mb-2 mt-1 flex items-center gap-3">
        <span className="flex items-center gap-2">
          <LuRuler />
          Length
        </span>
        <div className="join">
          {splenOptions.map((option, index) => (
            <button
              onClick={() => handleSelectSplen(index.toString() as Splen)}
              className={clsx(
                "btn btn-outline join-item btn-sm text-xl",
                parseInt(splenParam as string) === index && "btn-active",
              )}
              key={index}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
