"use client";

import React, { useEffect } from "react";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useSortingState } from "./_utils/sorting-state";
import { ARRAY_LENGTH, ANIMATION_INTERVAL } from "./_utils/defaults";
import ArrayElement from "./_components/array-element";
import { bubbleSort } from "./_algorithms/bubble-sort";

import { LuPlay, LuUndo2, LuRotateCcw } from "react-icons/lu";

export default function SortingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { state, setState, generateArray, unsort } = useSortingState();

  const sortingAlgorithm = searchParams.get("sort");
  const arrayLengthParam = searchParams.get("len");
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

  const handleChooseAlgorithm = (
    algorithm:
      | "bubble"
      | "insertion"
      | "selection"
      | "merge"
      | "quick"
      | "radix",
  ) => {
    router.push(`?sort=${algorithm}&len=${arrayLength}`);
  };

  const handleBubbleSort = () => {
    const animations = bubbleSort(state.workingArray);

    animations.forEach((animation, index) => {
      if (animation.operation === "COMPARE") {
      }
    });
    console.log(animations);
  };

  return (
    <div className="flex flex-col justify-between">
      <ul className="menu rounded-box absolute left-2 z-50 m-3 flex items-center justify-around bg-base-200 opacity-75">
        <select className="select select-sm w-fit lg:my-0">
          <option disabled selected>
            Choose a sorting algorithm
          </option>
          <option
            onClick={() => {
              handleChooseAlgorithm("bubble");
            }}
          >
            Bubble sort
          </option>
          <option
            onClick={() => {
              handleChooseAlgorithm("insertion");
            }}
          >
            Insertion sort
          </option>
          <option
            onClick={() => {
              handleChooseAlgorithm("selection");
            }}
          >
            Selection sort
          </option>
          <option
            onClick={() => {
              handleChooseAlgorithm("merge");
            }}
          >
            Merge sort
          </option>
          <option
            onClick={() => {
              handleChooseAlgorithm("quick");
            }}
          >
            Quick sort
          </option>
          <option
            onClick={() => {
              handleChooseAlgorithm("radix");
            }}
          >
            Radix sort
          </option>
        </select>
        <li className={clsx(sortingAlgorithm === null && "disabled")}>
          <button
            onClick={handleBubbleSort}
            className={clsx(
              "mt-2",
              sortingAlgorithm === null && "cursor-not-allowed",
            )}
            disabled={sortingAlgorithm === null}
          >
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
      <div className="mx-2 flex h-screen items-end">
        {state.workingArray.map((value, index) => (
          <ArrayElement key={index} {...{ index, value }} />
        ))}
      </div>
    </div>
  );
}
