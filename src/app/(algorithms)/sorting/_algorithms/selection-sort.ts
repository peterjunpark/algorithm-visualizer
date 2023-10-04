import { delay } from "@/lib/utils";
import {
  visualizeCompare,
  visualizeUncompare,
  visualizeSorted,
} from "../_utils/helpers";
import type { AlgorithmProps } from "../_utils/types";

export const selectionSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  setStatus(true);

  for (let i = 0; i < array.length; i++) {
    visualizeCompare(array[i]);

    let idxOfSmallest = i;

    for (let j = i + 1; j < array.length; j++) {
      // Visualize the pointer looking for the smallest value.
      visualizeCompare(array[j]);
      await delay(animationInterval);
      setArray([...array]);
      visualizeUncompare("UNSORTED", array[j]);

      if (array[j].value < array[idxOfSmallest].value) {
        // Ensure that the value to be replace remains colored correctly.
        if (array[idxOfSmallest].value !== array[i].value) {
          visualizeUncompare("UNSORTED", array[idxOfSmallest]);
        }
        idxOfSmallest = j;
        // Visualize the current smallest value.
        visualizeCompare(array[idxOfSmallest]);
        setArray([...array]);
      }
    }

    if (i !== idxOfSmallest) {
      [array[idxOfSmallest], array[i]] = [array[i], array[idxOfSmallest]];
      // Visualize swapping the current value to be replaced with the current smallest value
      // at the end of a cycle.
      setArray([...array]);
    }

    visualizeSorted(array[i]);
  }
  setStatus(false);
};
