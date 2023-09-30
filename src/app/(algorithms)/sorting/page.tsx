"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSortingState } from "./_utils/sorting-state";
import { splenMap } from "./_utils/defaults";
import ArrayElement from "./_components/array-element";
import { bubbleSort } from "./_algorithms/bubble-sort";
import ControlPanel from "./_components/control-panel";

export default function SortingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortParam = searchParams.get("sort");
  const splenParam = searchParams.get("splen");
  const { state, setState, generateArray, unsort } = useSortingState();

  let animationInterval = 500;
  let arrayLength = 16;

  switch (splenParam) {
    case "0":
      break;
    case "1":
      animationInterval -= 100;
      arrayLength *= 3;
      break;
    case "2":
      animationInterval -= 200;
      arrayLength *= 9;
      break;
    case "3":
      animationInterval -= 300;
      arrayLength *= 27;
      break;
    default:
      router.push(`?sort=${sortParam}&splen=2`);
  }

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
