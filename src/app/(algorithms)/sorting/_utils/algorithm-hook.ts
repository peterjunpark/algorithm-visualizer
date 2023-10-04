import { useState, useCallback, useRef } from "react";
import { rng } from "@/lib/utils";
import type { ArrayElement } from "./types";

export function useSortingAlgorithm() {
  const [status, setStatus] = useState<boolean>(false);
  const [array, setArray] = useState<ArrayElement[]>([]); // This state controls what is displayed on the page.
  const arrayRef = useRef<ArrayElement[]>([]); // This is a reference to the array before it is sorted. Used to reset the array.

  const handleRandomize = useCallback((arrayLength: number) => {
    const newArray: ArrayElement[] = [];
    for (let i = 0; i < arrayLength; i++) {
      newArray.push({ value: rng(1, 100), color: "UNSORTED" } as ArrayElement);
    }

    setStatus(false);
    setArray(newArray);
    arrayRef.current = [...newArray];
  }, []);

  const handleReset = useCallback(() => {
    // Create a deep copy of the original arrayRef.current
    const originalArray = arrayRef.current.map((element) => ({ ...element }));

    // Need to manually reset all the colors
    // because I'm sorting the array in-place.
    originalArray.forEach((element) => {
      element.color = "UNSORTED";
    });

    setStatus(false);
    setArray(originalArray);
  }, []);

  return {
    array,
    setArray,
    arrayRef,
    status,
    setStatus,
    handleRandomize,
    handleReset,
  };
}
