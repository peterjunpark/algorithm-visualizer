"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSortingState } from "./_utils/sorting-state";
import { ARRAY_LENGTH, ANIMATION_INTERVAL } from "./_utils/defaults";
import ArrayElement from "./_components/array-element";
import { bubbleSort } from "./_algorithms/bubble-sort";
import ControlPanel from "./_components/control-panel";

export default function SortingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { state, setState, generateArray, unsort } = useSortingState();

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

  const animateBubbleSort = () => {
    const animations = bubbleSort(state.workingArray);

    animations.forEach((animation, index) => {
      if (animation.operation === "COMPARE") {
      }
    });
    console.log(animations);
  };

  const animateInsertionSort = () => {};
  const animateSelectionSort = () => {};
  const animateMergeSort = () => {};
  const animateQuickSort = () => {};
  const animateRadixSort = () => {};

  return (
    <main className="h-full pt-14">
      <ControlPanel animationHandler={animateBubbleSort} />
      <div className="mx-2 flex h-full items-end">
        {state.workingArray.map((value, index) => (
          <ArrayElement key={index} {...{ index, value }} />
        ))}
      </div>
    </main>
  );
}
