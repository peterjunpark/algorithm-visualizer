"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSortingState } from "./_utils/sorting-state";
import { ARRAY_LENGTH, ANIMATION_INTERVAL } from "./_utils/defaults";
import ArrayElement from "./_components/array-element";
import { bubbleSort } from "./_algorithms/bubble-sort";

import { delay } from "@/lib/utils";

import { LuPlay, LuUndo2, LuRotateCcw, LuComputer } from "react-icons/lu";

export default function SortingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { state, setState, generateArray, unsort } = useSortingState();

  const arrayLengthParam = searchParams.get("arrayLength");
  const intervalParam = searchParams.get("interval");
  const arrayLength = arrayLengthParam
    ? parseInt(arrayLengthParam, 10)
    : ARRAY_LENGTH;
  const interval = intervalParam
    ? parseInt(intervalParam, 10)
    : ANIMATION_INTERVAL;

  useEffect(() => {
    generateArray(arrayLength);
  }, [arrayLength, generateArray]);

  const handleBubbleSort = () => {
    const animations = bubbleSort(state.workingArray);

    animations.forEach((animation, index) => {
      if (animation.operation === "COMPARE") {
      }
    });
    console.log(animations);
  };

  return (
    <div className="h-screen">
      <ul className="menu rounded-box my-2 flex w-3/4 items-center justify-around bg-base-200 opacity-80 lg:menu-horizontal">
        <select className="select select-sm w-full max-w-xs">
          <option disabled selected>
            Choose a sorting algorithm
          </option>
          <option>Bubble sort</option>
          <option>Insertion sort</option>
          <option>Selection sort</option>
          <option>Merge sort</option>
          <option>Quick sort</option>
          <option>Radix sort</option>
        </select>
        <LuComputer className="mx-4 text-2xl text-secondary" />
        <li>
          <button onClick={handleBubbleSort}>
            <LuPlay />
            Sort
          </button>
        </li>
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
              generateArray(arrayLength);
              console.log(state);
            }}
          >
            <LuRotateCcw />
            Generate new array
          </button>
        </li>
      </ul>
      <div className="mx-2 flex h-3/4 items-end border border-primary-content">
        {state.workingArray.map((value, index) => (
          <ArrayElement key={index} {...{ index, value }} />
        ))}
      </div>
    </div>
  );
}
