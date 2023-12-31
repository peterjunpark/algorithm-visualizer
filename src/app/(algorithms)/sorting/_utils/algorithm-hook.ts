import { useState, useCallback, useRef } from "react";
import { rng } from "@/lib/utils";
import type { ArrayElement, Status } from "./types";

export function useSortingAlgorithm() {
  const [array, setArray] = useState<ArrayElement[]>([]); // This state controls what is displayed on the page.
  const arrayRef = useRef<ArrayElement[]>([]); // This is a reference to the array before it is sorted. Used to reset the array.
  const [status, setStatus] = useState<Status>({
    sorting: false,
    sorted: false,
  });

  const handleReset = useCallback(() => {
    setStatus({ sorting: false, sorted: false });
    setArray(JSON.parse(JSON.stringify(arrayRef.current))); // Create a deep copy.
  }, []);

  const handleRandomize = useCallback(
    (arrayLength: number) => {
      const newArray: ArrayElement[] = [];

      for (let i = 0; i < arrayLength; i++) {
        newArray.push({
          value: rng(1, 100),
          color: "UNSORTED",
        } as ArrayElement);
      }

      arrayRef.current = newArray;
      handleReset();
    },
    [handleReset],
  );

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
