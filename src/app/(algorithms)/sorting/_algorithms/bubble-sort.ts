import { delay } from "@/lib/utils";
import type { AlgorithmProps } from "../_utils/types";

export const bubbleSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  setStatus(true);
  for (let i = array.length - 1; i > 0; i--) {
    let didSwap = false;
    for (let j = 0; j < i; j++) {
      if (array[j].value > array[j + 1].value) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        didSwap = true;
        // Visualize which elements are being compared.
        array[j].color = "COMPARED";
        array[j + 1].color = "COMPARED";
        await delay(animationInterval);
        // Visualize that we're done comparing those elements.
        array[j].color = "UNSORTED";
        array[j + 1].color = "UNSORTED";
        // Visualize the swap.
        setArray([...array]);
      }
    }
    // Change the color of sorted elements.
    array[i].color = "SORTED";

    // If the algorithm breaks early due to didSwap = true,
    // set the untouched portion of the array to SORTED.
    if (!didSwap) {
      while (i > 0) {
        i--;
        array[i].color = "SORTED";
      }
      break;
    }
  }
  setStatus(false);
};
