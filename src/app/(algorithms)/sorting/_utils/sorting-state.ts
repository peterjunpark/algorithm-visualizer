// sortingUtils.js
import { useState, useCallback } from "react";
import { rng } from "@/lib/utils";

interface SortingPageState {
  initialArray: number[];
  workingArray: number[];
  arrayStatus: {
    isSorting: boolean;
    sortOrder: "UNSORTED" | "LOW_HIGH" | "HIGH_LOW";
  };
}

// function sortingReducer(state, action) {
//   if (action.type === "reset")
// }

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
        newArray.push(rng(1, 100));
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
