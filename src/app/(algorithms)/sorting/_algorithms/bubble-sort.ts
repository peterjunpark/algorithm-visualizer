import { delay } from "@/lib/utils";
import {
  visualizeCompare,
  visualizeUncompare,
  visualizeSorted,
} from "../_utils/helpers";
import type { AlgorithmProps } from "../_utils/types";

export const bubbleSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  setStatus({ sorting: true, sorted: false });

  for (let i = array.length - 1; i > 0; i--) {
    let didSwap = false;
    for (let j = 0; j < i; j++) {
      // Visualize which elements are being compared.
      visualizeCompare(array[j], array[j + 1]);
      await delay(animationInterval);
      setArray([...array]);
      visualizeUncompare("UNSORTED", array[j], array[j + 1]);

      if (array[j].value > array[j + 1].value) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        didSwap = true;
        // Visualize the swap.
        setArray([...array]);
      }
    }
    // Show which elements are in sorted position.
    visualizeSorted(array[i]);

    // If the algorithm breaks early due to didSwap = true,
    // set the untouched portion of the array to SORTED.
    if (!didSwap) {
      while (i > 0) {
        i--;
        visualizeSorted(array[i]);
      }
      break;
    }
  }
  setStatus({ sorting: false, sorted: true });
};
