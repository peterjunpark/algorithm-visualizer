import { delay } from "@/lib/utils";
import {
  visualizeCompare,
  visualizeUncompare,
  visualizeSorted,
} from "../_utils/helpers";
import type { AlgorithmProps } from "../_utils/types";

export const insertionSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  setStatus(true);
  // Start with the first element in the sorted portion of the array.
  visualizeSorted(array[0]);

  for (let i = 1; i < array.length; i++) {
    let curr = array[i].value;
    let j = i - 1;
    // Expand the sorted portion of the array.k
    visualizeSorted(array[j]);

    while (j >= 0 && array[j].value > curr) {
      array[j + 1].value = array[j].value;
      // Visualize which elements are begin compared
      visualizeCompare(array[j], array[j + 1]);
      await delay(animationInterval);
      // Visualize the swap.
      setArray([...array]);
      visualizeUncompare("SORTED", array[j], array[j + 1]);
      j--;
    }
    array[j + 1].value = curr;
  }
  // Handle edge case.
  visualizeSorted(array[array.length - 1]);

  setStatus(false);
};
