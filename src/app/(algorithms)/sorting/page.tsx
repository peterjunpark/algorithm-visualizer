"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getMagnitudeOptions } from "./_utils/helpers";
import type { Algorithm, Magnitude } from "./_utils/types";
import ControlPanel from "./_components/control-panel";
import Visualizer from "./_components/visualizer";
import { rng, delay } from "@/lib/utils";
import { bubbleSort } from "./_algorithms/bubble-sort";

export default function SortingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const algorithmParam: Algorithm = searchParams.get("algorithm") as Algorithm;
  const magnitudeParam = searchParams.get("magnitude");
  const { animationInterval, arrayLength } = getMagnitudeOptions(
    magnitudeParam,
    algorithmParam,
    router,
  );

  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [array, setArray] = useState<number[]>([]); // This state controls what is displayed on the page.
  const arrayRef = useRef<number[]>([]); // This stores the initial array before sorting. Useful for resetting the array.

  const handleRandomize = useCallback(() => {
    const newArray: number[] = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray.push(rng(1, 100));
    }

    console.log("randomize");

    setArray(newArray);
    arrayRef.current = [...newArray];
  }, [arrayLength]);

  useEffect(() => {
    handleRandomize();
  }, [arrayLength, handleRandomize]);

  const handleBubbleSort = useCallback(() => {
    bubbleSort(array, setArray, setIsSorting, animationInterval);
  }, [array, animationInterval]);

  return (
    <main className="h-full pt-14">
      <ControlPanel
        isSorting={isSorting}
        algorithmParam={algorithmParam ? (algorithmParam as Algorithm) : null}
        magnitudeParam={magnitudeParam as Magnitude}
        handleAnimate={
          handleBubbleSort
          // algorithmParam === "BUBBLE"
          //   ? handleBubbleSort
          //   : algorithmParam === "INSERTION"
          //   ? handleInsertionSort
          //   : algorithmParam === "SELECTION"
          //   ? handleSelectionSort
          //   : algorithmParam === "MERGE"
          //   ? handleMergeSort
          //   : algorithmParam === "QUICK"
          //   ? handleQuickSort
          //   : handleRadixSort
        }
        handleRandomize={handleRandomize}
        // Set the current display to the initial randomized array stored in arrayRef.
        // handleReset={() => setArray([...arrayRef.current])}
        handleReset={() => setIsSorting(false)}
      />

      <Visualizer array={array} />
    </main>
  );
}
