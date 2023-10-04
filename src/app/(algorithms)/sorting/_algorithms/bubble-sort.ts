import { delay } from "@/lib/utils";
import { visualizeCompare, visualizeUncompare } from "../_utils/helpers";
import type { AlgorithmProps } from "../_utils/types";

export const bubbleSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  const arr = array.map((element) => ({ ...element }));

  setStatus(true);

  for (let i = arr.length - 1; i > 0; i--) {
    let didSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j].value > arr[j + 1].value) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = true;
        // Visualize which elements are being compared.
        visualizeCompare(arr[j], arr[j + 1]);
        await delay(animationInterval);
        // Visualize that we're done comparing those elements.
        visualizeUncompare("UNSORTED", arr[j], arr[j + 1]);
        // Visualize the swap.
        setArray([...arr]);
      }
    }
    // Change the color of sorted elements.
    arr[i].color = "SORTED";

    // If the algorithm breaks early due to didSwap = true,
    // set the untouched portion of the array to SORTED.
    if (!didSwap) {
      while (i > 0) {
        i--;
        arr[i].color = "SORTED";
      }
      break;
    }
  }
  setStatus(false);
};
