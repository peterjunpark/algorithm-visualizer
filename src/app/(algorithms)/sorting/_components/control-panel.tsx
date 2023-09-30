"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useSortingState } from "../_utils/sorting-state";
import type { Algorithm } from "../_utils/types";
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
  animationHandler: () => void;
};

export default function ControlPanel({ animationHandler }: ControlPanelProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const splenParam = searchParams.get("splen");

  const { state, setState, generateArray, unsort } = useSortingState();

  const handleSelectAlgorithm = (algorithm: Algorithm) => {
    router.push(`?sort=${algorithm}&splen=${splenParam}`);
  };
  const handleSelectSplen = (splen: number) => {
    router.push(`?sort=${sortParam}&splen=${splen}`);
  };

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

  // useEffect(() => {
  //   // if (sortParam)
  //   if (typeof splenParam !== "number" || splenParam > 3) {
  //     handleSelectSplen(2);
  //   }
  // }, [splenParam, handleSelectSplen]);

  return (
    <div className="menu rounded-box absolute left-1/2 z-50 my-3 flex w-max -translate-x-1/2 transform items-center justify-around bg-base-200 bg-opacity-80 px-3 md:left-2 md:m-3 md:transform-none">
      <div className="flex items-center">
        <select
          onChange={(e) => handleSelectAlgorithm(e.target.value as Algorithm)}
          className="select select-sm m-2 w-fit"
          defaultValue="default"
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
            onClick={animationHandler}
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
          <button
            onClick={() => {
              unsort();
              console.log(state);
            }}
          >
            <LuUndo2 />
            Reset array
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              // generateArray(arrayLength);
              console.log(state);
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
              onClick={() => handleSelectSplen(index)}
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
