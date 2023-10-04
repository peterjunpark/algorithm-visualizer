import { delay } from "@/lib/utils";
import type { AlgorithmProps } from "../_utils/types";

export const insertionSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  setStatus(true);
  // Start with the first element in the sorted portion of the array.
  array[0].color = "SORTED";

  for (let i = 1; i < array.length; i++) {
    let curr = array[i].value;
    let j = i - 1;
    // Expand the sorted portion of the array.k
    array[j].color = "SORTED";

    while (j >= 0 && array[j].value > curr) {
      array[j + 1].value = array[j].value;
      // Visualize which elements are begin compared
      array[j].color = "COMPARED";
      array[j + 1].color = "COMPARED";
      await delay(animationInterval);
      // Visualize that we're done comparing these elements.
      // These elements will be in the sorted portion of the array.
      array[j].color = "SORTED";
      array[j + 1].color = "SORTED";
      // Visualize the swap.
      setArray([...array]);
      j--;
    }
    array[j + 1].value = curr;
  }
  // Handle edge case.
  array[array.length - 1].color = "SORTED";

  setStatus(false);
};
