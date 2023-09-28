// sortingUtils.js
import { useState, useCallback } from "react";
import { ARRAY_MIN_VALUE, ARRAY_MAX_VALUE } from "./defaults";
import { rng } from "@/app/lib/utils";

export interface SortingPageState {
  initialArray: number[];
  workingArray: number[];
  arrayStatus: {
    isSorting: boolean;
    sortOrder: "UNSORTED" | "LOW_HIGH" | "HIGH_LOW";
  };
}

export function useSortingState() {
  const [state, setState] = useState<SortingPageState>({
    initialArray: [],
    workingArray: [],
    arrayStatus: {
      isSorting: false,
      sortOrder: "UNSORTED",
    },
  });

  const unsort = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      arrayStatus: {
        isSorting: false,
        sortOrder: "UNSORTED",
      },
      workingArray: prevState.initialArray,
    }));
  }, []);

  const generateArray = useCallback(
    (arrayLength: number) => {
      const newArray: number[] = [];

      for (let i = 0; i < arrayLength; i++) {
        newArray.push(rng(ARRAY_MIN_VALUE, ARRAY_MAX_VALUE));
      }

      setState((prevState) => ({
        ...prevState,
        initialArray: newArray,
      }));

      unsort();
    },
    [unsort],
  );

  return {
    state,
    setState,
    unsort,
    generateArray,
  };
}
