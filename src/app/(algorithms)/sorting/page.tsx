"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSortingOptions } from "./_utils";
import type { Algorithm, Magnitude } from "./_utils/types";
import ControlPanel from "./_components/control-panel";
import Visualizer from "./_components/visualizer";
import { rng, delay } from "@/lib/utils";
// import { bubbleSort } from "./_algorithms/bubble-sort";

export default function SortingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const algorithmParam = searchParams.get("algorithm");
  const magnitudeParam = searchParams.get("magnitude");
  const { animationInterval, arrayLength } = getSortingOptions(
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

    setArray(newArray);
    arrayRef.current = [...newArray];
  }, [arrayLength]);

  useEffect(() => {
    handleRandomize();
  }, [arrayLength, handleRandomize]);

  const bubbleSort = useCallback(async () => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      let didSwap = false;
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          didSwap = true;
          await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for 500ms
          setArray([...arr]);
        }
      }
      if (!didSwap) break;
    }
  }, [array, setArray]);

  const handleAnimate = useCallback(() => {
    setIsSorting(true);
    bubbleSort();
    setIsSorting(false);
    console.log({ __ref: arrayRef.current, array, isSorting });
  }, [array, bubbleSort, isSorting]);

  console.log("hi");
  return (
    <main className="h-full pt-14">
      <ControlPanel
        algorithmParam={algorithmParam ? (algorithmParam as Algorithm) : null}
        magnitudeParam={magnitudeParam as Magnitude}
        handleAnimate={handleAnimate}
        handleRandomize={handleRandomize}
        // Set the current display to the initial randomized array stored in arrayRef.
        handleReset={() => setArray([...arrayRef.current])}
      />
      <Visualizer array={array} />
    </main>
  );
}
