import { delay } from "@/lib/utils";
import { visualizeCompare, visualizeUncompare } from "../_utils/helpers";
import type { AlgorithmProps } from "../_utils/types";

export const insertionSort = async ({
  array,
  setArray,
  setStatus,
  animationInterval,
}: AlgorithmProps) => {
  const arr = array.map((element) => ({ ...element }));

  setStatus(true);
  // Start with the first element in the sorted portion of the array.
  arr[0].color = "SORTED";

  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i].value;
    let j = i - 1;
    // Expand the sorted portion of the array.k
    arr[j].color = "SORTED";

    while (j >= 0 && arr[j].value > curr) {
      arr[j + 1].value = arr[j].value;
      // Visualize which elements are begin compared
      visualizeCompare(arr[j], arr[j + 1]);
      await delay(animationInterval);
      // Visualize that we're done comparing these elements.
      // These elements will be in the sorted portion of the array.
      visualizeUncompare("SORTED", arr[j], arr[j + 1]);
      // Visualize the swap.
      setArray([...arr]);
      j--;
    }
    arr[j + 1].value = curr;
  }
  // Handle edge case.
  arr[arr.length - 1].color = "SORTED";

  setStatus(false);
};
