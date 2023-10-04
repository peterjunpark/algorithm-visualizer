"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSortingAlgorithm } from "./_utils/algorithm-hook";
import { getMagnitudeOptions } from "./_utils/helpers";
import type { Algorithm, Magnitude } from "./_utils/types";
import ControlPanel from "./_components/control-panel";
import Visualizer from "./_components/visualizer";
import { bubbleSort } from "./_algorithms/bubble-sort";
import { insertionSort } from "./_algorithms/insertion-sort";
import { selectionSort } from "./_algorithms/selection-sort";

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
  const { array, setArray, status, setStatus, handleRandomize, handleReset } =
    useSortingAlgorithm();

  useEffect(() => {
    handleRandomize(arrayLength);
  }, [arrayLength, handleRandomize]);

  const getSelectedAlgorithm = useCallback(() => {
    const algorithmProps = { array, setArray, setStatus, animationInterval };
    switch (algorithmParam) {
      case "BUBBLE":
        return () => {
          bubbleSort(algorithmProps);
        };
      case "INSERTION":
        return () => {
          insertionSort(algorithmProps);
        };
      case "SELECTION":
        return () => {
          selectionSort(algorithmProps);
        };
      case "MERGE":
        return () => {
          alert("merge");
        };
      case "QUICK":
        return () => {
          alert("quick");
        };
      case "RADIX":
        return () => {
          alert("radix");
        };
    }
  }, [array, setArray, setStatus, animationInterval, algorithmParam]);

  return (
    <main className="h-full pt-14">
      <ControlPanel
        status={status}
        algorithmParam={algorithmParam ? (algorithmParam as Algorithm) : null}
        magnitudeParam={magnitudeParam as Magnitude}
        handleAnimate={getSelectedAlgorithm() as () => void}
        handleRandomize={() => {
          handleRandomize(arrayLength);
        }}
        // Set the current display to the initial randomized array stored in arrayRef.
        handleReset={handleReset}
      />

      <Visualizer array={array} />
    </main>
  );
}
